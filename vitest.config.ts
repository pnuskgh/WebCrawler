/**
 * vitest 환경 설정 파일
 * 
 * @file vitest.config.json
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com> 
 */

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        name: 'WebCrawler-library',
        environment: 'node',
        globals: true,
        root: '.',
        include: [ 
            'tests/**/*.test.ts'
        ],
        watch: false,
        setupFiles: ['./tests/setup.library.ts'],
    }
});
