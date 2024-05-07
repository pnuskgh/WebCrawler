/**
 * Error Utility
 * 
 * @file src/common/error/base.error.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { ErrorObject } from "ajv";                          //--- https://www.npmjs.com/package/ajv

import { ERROR_CODE } from './error.constant.js';
import { BaseErrorProps } from './error.type.js';
import { errorUtil } from './error.util.js';

export class BaseError extends Error {
    public code: ERROR_CODE;
    public message: string;
    public data?: unknown;
    public details?: ErrorObject[] | null;
    public trace?: string | unknown;

    constructor({ code, message, error, data, details }: BaseErrorProps) {
        super(message);
        
        this.code = code;
        this.message = message ?? errorUtil.getMessage(code);
        this.trace = error instanceof Error ? error?.stack : error;
        this.data = data;
        this.details = details;
    }
}
