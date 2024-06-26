/**
 * vitest 공통 기능
 * 
 * @file tests/vitest_common.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { createInterface } from 'readline';

const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});

export const readLineAsync = (msg: Array<string> | string, defaultValue?: string): Promise<string> => {
    return new Promise(resolve => {
        let question = ((Array.isArray(msg)) ? msg.join('\n'):msg);
        if (typeof defaultValue == 'undefined') {
            question = question + '\n> ';
        } else {
            question = question + `\n> ${defaultValue} : `;
        }
        readline.question(question, answer => {
            resolve((answer == '') ? (defaultValue ?? answer):answer);
        });
    });
}
