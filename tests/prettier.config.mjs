/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, OBCon Inc.
 * @license OBCon License 1.0
 */

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    bracketSameLine: true,
    requirePragm: false,
    insertPragma: false,
    proseWrap: 'always',
    arrowParens: 'always',
    htmlWhitespaceSensitivity: 'css',
    endOfLine: 'auto',
    quoteProps: 'as-needed',
    vueIndentScriptAndStyle: false,
    embeddedLanguageFormatting: 'auto',
    singleAttributePerLine: true,

    printWidth: 100,
    tabWidth: 4,
    useTabs: false,

    overrides: [
        {
            files: '*.mjs',
            options: {
                parser: 'flow',
            },
        },
    ],
};

export default config;
