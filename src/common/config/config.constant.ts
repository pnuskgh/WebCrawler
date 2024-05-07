/**
 * Config Utility
 * 
 * @file src/common/config/config.constant.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import cluster from 'cluster';                              //--- https://www.npmjs.com/package/cluster

import { Config } from './config.type.js';
import { configDefault } from '../logger/logger.js';

export const config: Config = {
    worker: {
        id: cluster.worker?.id ?? 0
    },
    logger: configDefault
}
