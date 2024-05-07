/**
 * Config Utility
 * 
 * @file src/common/config/config.type.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { LoggerConfig } from '../logger/logger.type.js';

export interface WorkerConfig {
    id: number
}

export interface Config {
    worker: WorkerConfig,
    logger: LoggerConfig
}
