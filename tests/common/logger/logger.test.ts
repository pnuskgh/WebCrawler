/**
 * Logger Utility test 프로그램
 * 
 * @file tests/common/logger/logger.test.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { describe, it, expect } from 'vitest';              //--- https://www.npmjs.com/package/vitest

import { configUtil, Config } from '../../../src/common/config/index.js';
import { logger } from '../../../src/common/logger/index.js';

describe('test logger utility', async (): Promise<void> => {
    try {
        const config: Config | null = await configUtil.getConfig('webCrawler');
        if (config != null) {
            logger.setConfig();
        }
        logger.info('Start logger.test.ts');

        it('test logger', async (ctx) => { 
            expect(logger != null).toEqual(true);
        });
    } catch(ex) {
        console.error(ex);
    }
});
