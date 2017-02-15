//    Copyright 2017 drillbits
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://www.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

const session = require('./session');
const download = require('./download');

require('yargs')
    .usage('$0 <cmd> [args]')
    .command('session [email] [password] [fileID] [show]', 'get cookie and stream map.', {
        email: {
            desc: 'The email address for the Google account.',
            alias: 'e',
            required: true,
        },
        password: {
            desc: 'The password for the Google account.',
            alias: 'p',
            required: true,
        },
        fileID: {
            desc: 'The ID for the Google Drive file.',
            alias: 'f',
            required: true,
        },
        show: {
            desc: 'The option for nightmare.js.',
            default: false,
        },
    }, session)
    .command('download [email] [password] [fileID] [show] [output]', 'download mp4.', {
        email: {
            desc: 'The email address for the Google account.',
            alias: 'e',
            required: true,
        },
        password: {
            desc: 'The password for the Google account.',
            alias: 'p',
            required: true,
        },
        fileID: {
            desc: 'The ID for the Google Drive file.',
            alias: 'f',
            required: true,
        },
        show: {
            desc: 'The option for nightmare.js.',
            default: false,
        },
        output: {
            desc: 'The destination file path.',
            alias: 'o',
            required: true,
        },
    }, download)
    .help()
    .argv;