/**
 * Utility test 프로그램
 * 
 * @file tests/common/utils/utils.test.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { describe, it, expect } from 'vitest';              //--- https://www.npmjs.com/package/vitest

import { importUtil } from '../../../src/common/utils/index.js';
import { Config, ConfigService } from '../../../src/common/config/index.js';

describe('test utility', async (): Promise<void> => {
    try {
        it('test import', async (ctx) => { 
            const ConfigClass: ConfigService | null = await importUtil.import<ConfigService>('conf/config_webCrawler')
            const config: Config | null = (ConfigClass == null) ? null:(new ConfigClass()).getConfig();

            expect(config == null).toEqual(false);
            expect(config?.logger.folder).toEqual('logs');
        });
    } catch(ex) {
        expect(true).toEqual(false);
        console.error(ex);
    }
});
