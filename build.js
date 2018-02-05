/*
 *  Copyright 2018 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 *
 */

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

/**
 * Cleans the documentation folder (site/pages); this is to ensure that nothing slips in accidentally
 * from a previous build
 */
function cleanDocsFolder() {
    shell.rm('-rf', DOCS_PATH);
    shell.mkdir(DOCS_PATH);
}

/**
 * All the modules associated with Twist are installed as development dependencies in node_modules.
 * We need to copy their docs into site/pages so that we can use them in gitbook
 */
function copyDocsFromModules() {
    modules.forEach(module => {
        let cpFrom, cpTo;
        cpFrom = path.join(TWIST_MODULES_PATH, module, 'docs');
        if (module === "core") {
            // core module documentation has a higher visibility on the site than does
            // documentation for other libraries
            cpTo = DOCS_PATH;
        } else {
            // other libraries have a lower visibility
            cpTo = path.join(DOCS_PATH, "ecosystem", "libraries", module);
        }
        shell.mkdir("-p", cpTo);
        shell.cp('-r', path.join(cpFrom, '*'), cpTo);

        // copy the readme -- although this might go away
        shell.cp(path.join(cpFrom, '..', 'README.md'), path.join(cpTo, 'README.md'));
    });

    // some files need special handling
    ['ACKNOWLEDGEMENTS.md', 'CONTACT.md', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md'].forEach( file => {
        const cpFrom = path.join(TWIST_MODULES_PATH, 'core');
        const cpTo = DOCS_PATH;
        shell.cp(path.join(cpFrom, file), cpTo);
    });

    // copy Twist core's README to the right spot -- Gitbook always looks here for
    // the first page to load
    shell.mv(path.join(DOCS_PATH, 'README.md'), path.join('.', 'site', 'README.md'));
}

/**
 * Gitbook has a templating system that doesn't like "{{" in code. So... we change it {{ to { {. 
 * The reverse is done for consistency.
 */
function fixDocs() {
    shell.find(path.join(DOCS_PATH, '**', '*.md')).forEach(file => {
        console.log(`Fixing ${file}`);
        shell.sed('-i', /\{\{/g, '{ {', file);
        shell.sed('-i', /\}\}/g, '} }', file);
    });
}


/**
 * Builds the SUMMARY.md file -- a requirement for gitbook to properly lay out the chapters in the sidebar.
 * Each modules 'docs/index.md' file is used to build the index.
 * 
 */
function buildSummary() {

    let libraries = shell.find(path.join(DOCS_PATH, 'ecosystem', 'libraries', '**', 'SUMMARY.md'));
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

/**
 * Building the site is a series of steps -- hop to it!
 */
function main() {
    cleanDocsFolder();
    copyDocsFromModules();
    fixDocs();
    buildSummary();
}

main(); /* go! */
