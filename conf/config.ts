/**
 * Config
 * 
 * @file conf/config.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Config, ConfigService, config } from '../src/common/config/index.js'; 

export class ConfigServicDefault extends ConfigService {
    constructor() {
        super();
    }
    
    public getConfig(): Config {
        return super.getConfig();
    }
}

export default ConfigServicDefault;
