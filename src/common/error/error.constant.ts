/**
 * Error Utility
 * 
 * @file src/common/error/error.constant.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export enum ERROR_CODE {
    WCE00200 = 'WCE00200',
};
  
export const ERROR_MESSAGE: Record<ERROR_CODE, string> = {
    [ERROR_CODE.WCE00200]: 'Fetch error.'
};
