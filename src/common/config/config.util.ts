/**
 * Config Utility
 * 
 * @file src/common/config/config.util.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import moment from 'moment';                                //--- https://www.npmjs.com/package/moment, 'YYYY-MM-DD HH:mm:ss.SSS ZZ'

import { config } from './config.constant.js';
import { Config } from './config.type.js';
import { ConfigService } from './config.service.js';
import { importUtil } from '../utils/index.js';

export const configUtil = {
    getConfig: async (name: string): Promise<Config> => {
        let customConfig: Config = config;
        try {
            const ConfigClass: ConfigService | null = await importUtil.import<ConfigService>(`conf/config_${name}`);
            if (ConfigClass != null) {
                customConfig = (new ConfigClass()).getConfig();
            }
        } catch(ex) {
            console.error(ex);
        }
        config.logger.filename = `${config.logger.filename}`.replace('%SERVICE%', name)
                                                            .replace('%DATE%', moment().format('YYYYMMDD'))
                                                            .replace('%worker%', `${config.worker.id}`);
        return customConfig;
    } 
};
