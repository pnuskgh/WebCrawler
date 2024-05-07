/**
 * Logger utility
 * 
 * @file src/common/logger/logger.type.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { Logger } from 'winston';                           //--- https://www.npmjs.com/package/winston

export interface LoggerConfig {
  level: string,
  folder: string,
  filename: string,
  maxSize: number,
  maxFiles: number,
  useJson: boolean,
  useConsole: boolean,
  showFileInfo: boolean
}

export type LOGGER_TYPE = Console | Logger;
