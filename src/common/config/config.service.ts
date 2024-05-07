/**
 * Config Utility
 * 
 * @file src/config/config.service.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Config } from './config.type.js';
import { config } from './config.constant.js';

export class ConfigService {
    constructor() {
    }
    
    public getConfig(): Config {
        return config;
    }
}

export default ConfigService;
