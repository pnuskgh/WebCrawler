/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, OBCon Inc.
 * @license OBCon License 1.0
 */

// https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables
import pluginJs from '@eslint/js';
import globals from 'globals';                              //--- https://www.npmjs.com/package/globals
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,                           //--- ESLint의 권장 설정
    ...tseslint.configs.recommended,                        //--- TypeScript의 권장 설정
];
