/**
 * Builds the documentation structure for Gitbook
 */

const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

const modules = Object.entries(require('./package.json').devDependencies)
    .map(([package, verson]) => package)
    .filter(package => package.indexOf('@twist') > -1)
    .map(package => package.replace(/\@twist\//g, ''));

const DOCS_PATH = path.join('.', 'site', 'pages');
const TWIST_MODULES_PATH = path.join('.', 'node_modules', '@twist');

function cleanDocsFolder() {
    shell.rm('-rf', DOCS_PATH);
    shell.mkdir(DOCS_PATH);
}

function copyDocsFromModules() {
    modules.forEach(module => {
        let cpFrom, cpTo;
        cpFrom = path.join(TWIST_MODULES_PATH, module, 'docs');
        if (module === "core") {
            cpTo = DOCS_PATH;
        } else {
            cpTo = path.join(DOCS_PATH, "zz_ecosystem", "libraries", module);
        }
        shell.mkdir("-p", cpTo);
        shell.cp('-r', path.join(cpFrom, '*'), cpTo);
        shell.cp(path.join(cpFrom, '..', 'README.md'), path.join(cpTo, 'README.md'));
    });
}

function fixDocs() {
    shell.find(path.join(DOCS_PATH, '**', '*.md')).forEach(file => {
        console.log(`Fixing ${file}`);
        shell.sed('-i', /\{\{/g, '{ {', file);
        shell.sed('-i', /\}\}/g, '} }', file);
    });
}

function customSort(a, b) {
    if (path.basename(a) === 'index.md') {
        return -1;
    }
    return a < b ? -1 : a > b ? 1 : 0;
}

function buildTree(curPath) {
    return shell
        .ls(curPath)
        .map(file => {
            switch (path.extname(file)) {
                case '':
                    const subtree = buildTree(path.join(curPath, file));
                    if (subtree.length > 0) {
                        return { [file]: [path.join(curPath, file), ...buildTree(path.join(curPath, file))] };
                    }
                    break;
                case '.md':
                    return path.join(curPath, file);
            }
            return undefined;
        })
        .filter(file => file);
}

function flatten(...items) {
    return items.reduce((acc, item) => {
        if (item instanceof Array) {
            return [...acc, ...flatten(...item)];
        }
        if (typeof item !== 'string') {
            return [...acc, ...flatten(...Object.values(item))];
        }
        return [...acc, item];
    }, []);
}

function titleCase(str) {
    return str
        .replace(/^zz\_/, '')
        .split(/[-|\s]/)
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')
        .replace(/\</g, '&lt;')
        .replace(/\>/g, '&gt;');
}

function getTitle(file) {
    if (path.basename(file) === 'README.md') {
        return 'README';
    }
    if (path.basename(file) === 'index.md') {
        return 'Index';
    }
    const title =
        shell
            .cat(path.join(DOCS_PATH, file))
            .split('\n')
            .reduce((title, line) => {
                if (line.substr(0, 2) === '# ' && !title) {
                    title = line.substr(2);
                }
                return title;
            }, '') || path.basename(file, '.md');

    return titleCase(title);
}

function buildSummary() {
    const tree = buildTree(DOCS_PATH);
    fs.writeFileSync(
        path.join('.', 'site', 'SUMMARY.md'),
        flatten(tree)
            .map(file => file.replace('site/pages/', ''))
            .filter(file => path.basename(file) !== 'index.md')
            .reduce(
                (summary, file) => {
                    const indent = Array.from({ length: file.split(path.sep).length }).join('    ');
                    switch (path.extname(file)) {
                        case '.md':
                            summary.push(`${indent}* [${getTitle(file)}](./pages/${file})`);
                            break;
                        case '':
                            summary.push(`${indent}* ${titleCase(path.basename(file))}`);
                            break;
                    }
                    return summary;
                },
                ['# Summary']
            )
            .join('\n'),
        { encoding: 'utf8' }
    );
}

function main() {
    cleanDocsFolder();
    copyDocsFromModules();
    fixDocs();
    buildSummary();
}

main();
