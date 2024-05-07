/**
 * Error Utility
 * 
 * @file src/common/error/error.type.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { ErrorObject } from "ajv";                          //--- https://www.npmjs.com/package/ajv

import { ERROR_CODE } from './error.constant.js';

export interface BaseErrorProps {
    code: ERROR_CODE;
    message?: string;
    error?: unknown;
    data?: unknown;
    details?: ErrorObject[] | null;
}
