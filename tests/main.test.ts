/**
 * Web Clawler의 main test 프로그램
 * 
 * @file tests/main.test.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import dotenv from 'dotenv';
import { describe, beforeAll, it, afterAll, expect } from 'vitest';

async function funcBeforeAll(ctx) {

}

async function funcAfterAll(ctx) {

}

async function test_001() {
    return 0;
}

describe('test main.ts', () => {
    beforeAll(funcAfterAll, 100);

    it('Test 001', async (ctx) => { expect(await test_001()).toBe(0)});

    afterAll(funcAfterAll, 100);
});
