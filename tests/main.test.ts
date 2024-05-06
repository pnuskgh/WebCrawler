/**
 * Web Crawler의 main test 프로그램
 * 
 * @file tests/main.test.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

// import dotenv from 'dotenv';
import { describe, beforeAll, it, afterAll, expect } from 'vitest';

const funcBeforeAll = async (_ctx): Promise<void> => {
    try {
        // process.env.USERID
    } catch(ex) {
        console.error(ex);
    }
}

const funcAfterAll = async (_ctx): Promise<void> => {
    try {
    } catch(ex) {
        console.error(ex);
    }
}

const test_001 = async (): Promise<number> => {
    try {
        return 0;
    } catch(ex) {
        console.error(ex);
        return -1;
    }
}

describe('Test Web Crawler: main.ts', (): void => {
    beforeAll(funcBeforeAll, 100);

    it('Test 001', async (ctx) => { expect(await test_001()).toBe(0)});

    afterAll(funcAfterAll, 100);
});
