/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, OBCon Inc.
 * @license OBCon License 1.0
 */

// https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables
import pluginJs from '@eslint/js';
import globals from 'globals';                              //--- https://www.npmjs.com/package/globals
import tseslint from 'typescript-eslint';

/**
 * @see https://www.npmjs.com/package/eslint
 */
const config = [
    // {
    //     // env: { browser: true, es2020: true },
    //     // plugins: [],
    //     // extends: [],
    //     // rules: {},
    //     // settings: {}
    // },
    {
        ignores: [                                        //--- https://eslint.org/docs/latest/use/configure/ignore
            //--- 시스템 폴더
            '**/.git/', '**/.github/', '**/.vscode', '**/node_modules/',
            //--- 시스템 파일
            '.env', '.gitignore', '.prettierignore', '**/.DS_Store', 'package.json',
            '*-lock.json',
            
            //--- 사용자 폴더
            'logs/',
            //--- 사용자 파일
            'prettier.config.mjs', 'eslint.config.mjs', '**/*.md', '**/*.html',

            //--- 예외 처리
            // "!설정"
        ],
    },
    {
        files: [ '**/*.{js,mjs,cjs}' ],
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,                           //--- ESLint의 권장 설정
    ...tseslint.configs.recommended,                        //--- TypeScript의 권장 설정
];
// console.log('globals.browser', globals.browser);
// console.log('pluginJs.configs.recommended', pluginJs.configs.recommended);
// console.log('tseslint.configs.recommended', tseslint.configs.recommended);

export default config;
