/**
 * Error Utility
 * 
 * @file src/common/error/error.util.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author dalcon10028 <dalcon10280@gmail.com>
 */

import { ERROR_CODE, ERROR_MESSAGE } from './error.constant.js';

export const errorUtil = {
    getMessage: (code: ERROR_CODE): string => {
        return ERROR_MESSAGE[code];
    } 
};
