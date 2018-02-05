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
