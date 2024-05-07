/**
 * Config
 * 
 * @file conf/config_webCrawler.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */


import { Config } from '../src/common/config/index.js'; 

import { ConfigServicDefault } from './config.js';

export class ConfigServicOverride extends ConfigServicDefault {
    constructor() {
        super();
    }
    
    public getConfig(): Config {
        return super.getConfig();
    }
}

export default ConfigServicOverride;
