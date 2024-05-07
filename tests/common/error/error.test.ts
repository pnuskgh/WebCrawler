/**
 * Error Utility test 프로그램
 * 
 * @file tests/common/error/error.test.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { describe, it, expect } from 'vitest';              //--- https://www.npmjs.com/package/vitest

import { errorUtil, ERROR_CODE } from '../../../src/common/error/index.js';

describe('test error utility', async (): Promise<void> => {
    try {
        const message: string = errorUtil.getMessage(ERROR_CODE.WCE00200);

        it('test error', async (ctx) => { 
            expect(message).toEqual('Fetch error.');
        });
    } catch(ex) {
        console.error(ex);
    }
});
