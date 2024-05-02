/**
 * Study의 main 프로그램
 * 
 * @file study/main.test.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { study } from './types.js';

(async () => {
    try {
        console.log('Start study');

        study();
    } catch(ex) {
        console.error(ex);
    }
})();