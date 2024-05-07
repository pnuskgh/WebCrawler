/**
 * Config Utility test 프로그램
 * 
 * @file tests/common/config/config.test.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { describe, it, expect } from 'vitest';              //--- https://www.npmjs.com/package/vitest

import { configUtil, Config } from '../../../src/common/config/index.js';

describe('test config utility', async (): Promise<void> => {
    try {
        const config: Config | null = await configUtil.getConfig('webCrawler');

        it('test config', async (ctx) => { 
            expect(config == null).toEqual(false);
            expect(config?.logger.folder).toEqual('logs');
        });
    } catch(ex) {
        console.error(ex);
    }
});
