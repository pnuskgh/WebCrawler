/**
 * Study의 main 프로그램
 * 
 * @file study/main.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { run } from './study_20240501.js';

(async (): Promise<void> => {
    try {
        await run();
    } catch(ex) {
        console.error(ex);
    }
})();