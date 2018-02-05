const path = require('path');
const shell = require('shelljs');
const COMMON_EXCLUDES = ['third_party', 'vendor', 'node_modules', 'esdocs', 'internal', 'example', 'webpack.config'];
const DOCS_PATH = path.join('.', 'docs');

module.exports = {
    source: './node_modules/@twist',
    destination: './site/_book/esdocs',
    includes: ['\\.js(x)?$'],
    excludes: [...COMMON_EXCLUDES, 'test'],
    plugins: [
        {
            name: 'esdoc-standard-plugin',
            option: {
                lint: { enable: true },
                coverage: { enable: true },
                accessor: { access: ['public'], autoPrivate: true },
                undocumentIdentifier: { enable: true },
                unexportedIdentifier: { enable: false },
                typeInference: { enable: true },
                brand: {
                    //logo: './logo.png',
                    title: 'Twist',
                    description: 'React... with a twist!',
                    repository: 'https://github.com/adobe/twist',
                    site: 'http://adobe.github.io/twist',
                    author: 'https://twitter.com/adobe'
                    //"image": "http://my-library.org/logo.png"
                } /*
                manual: {
                    index: './docs/core/README.md',
                    globalIndex: true,
                    //asset: './docs/asset',
                    files: shell.find(DOCS_PATH).filter(file => file.match(/\.md/))
                }, */,
                test: {
                    source: './node_modules/@twist',
                    interfaces: ['describe', 'it', 'context', 'suite', 'test'],
                    includes: ['(spec|Spec|test|Test)\\.js(x)$'],
                    excludes: [...COMMON_EXCLUDES]
                }
            }
        },
        {
            name: 'esdoc-ecmascript-proposal-plugin',
            option: { all: true }
        },
        {
            name: 'esdoc-publish-markdown-plugin'
        }
    ]
};
