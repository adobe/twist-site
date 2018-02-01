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
            cpTo = path.join(DOCS_PATH, "ecosystem", "libraries", module);
        }
        shell.mkdir("-p", cpTo);
        shell.cp('-r', path.join(cpFrom, '*'), cpTo);
        shell.cp(path.join(cpFrom, '..', 'README.md'), path.join(cpTo, 'README.md'));
    });

    // some files need special handling
    ['ACKNOWLEDGEMENTS.md', 'CONTACT.md', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md'].forEach( file => {
        const cpFrom = path.join(TWIST_MODULES_PATH, 'core');
        const cpTo = DOCS_PATH;
        shell.cp(path.join(cpFrom, file), cpTo);
    });

    shell.mv(path.join(DOCS_PATH, 'README.md'), path.join('.', 'site', 'README.md'));
}


function fixDocs() {
    shell.find(path.join(DOCS_PATH, '**', '*.md')).forEach(file => {
        console.log(`Fixing ${file}`);
        shell.sed('-i', /\{\{/g, '{ {', file);
        shell.sed('-i', /\}\}/g, '} }', file);
    });
}

function buildTree(curPath) {
    return shell
        .ls(curPath)
        .map(file => {
            switch (path.extname(file)) {
                case '':
                    const subtree = buildTree(path.join(curPath, file));
                    if (subtree.length > 0) {
                        return { [file]: [path.join(curPath, file), ...subtree] };
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
        .replace(/^\d*\_/, '')
        .split(/[-|\s]/)
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')
        .replace(/\</g, '&lt;')
        .replace(/\>/g, '&gt;');
}


function buildSummary() {

    let libraries = shell.find(path.join(DOCS_PATH, 'ecosystem', 'libraries', '**', 'index.md'));
    if (libraries && !libraries.stderr) {
        libraries = libraries.map(file => 
            shell.cat(file).replace(/\.\//g, path.dirname(file).replace('site/', './') + path.sep)
        )
    } else {
        libraries = [];
    }

    const sections = [
        '# Summary',
        shell.cat(path.join(DOCS_PATH, 'index.md')).replace(/\.\//g, './pages/'),
        '',
        '# Ecosystem',
        '## Libraries',
        ...libraries,
        '## Community',
        '* [Acknowledgements](./pages/ACKNOWLEDGEMENTS.md)',
        '* [Contributing](./pages/CONTRIBUTING.md)',
        '* [Code of Conduct](./pages/CODE_OF_CONDUCT.md)',
        '* [Contact](./pages/CONTACT.md)'
    ];

    fs.writeFileSync(
        path.join('.', 'site', 'SUMMARY.md'),
        sections.join("\n"),
        {encoding: 'utf8'}
    );
}

function main() {
    cleanDocsFolder();
    copyDocsFromModules();
    fixDocs();
    buildSummary();
}

main();
