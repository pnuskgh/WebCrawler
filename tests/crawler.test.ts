/**
 * Web Crawler Library test 프로그램
 * 
 * @file tests/crawler.test.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { describe, it, expect } from 'vitest';              //--- https://www.npmjs.com/package/vitest

import { WebCrawler, SiteInfomation } from '../src/index.js';

describe('test WebCrawler', async (): Promise<void> => {
    try {
        it('test crawler', async (ctx) => { 
            const crawler = new WebCrawler();

            const urlOrigin: string = 'https://www.google.com/search?q=%ED%95%9C%EA%B8%80&newwindow=1&sca_esv=1e12e656a0e41172&sca_upv=1&biw=1440&bih=704';
            const url: string = 'https://www.google.com/search?q=한글&newwindow=1&sca_esv=1e12e656a0e41172&sca_upv=1&biw=1440&bih=704';
            console.log('url', url);
            const site: SiteInfomation = crawler.encode(url);
            console.log('site', site);
            const urlNew = crawler.decode(site);
            console.log('urlNew', urlNew);

            expect(crawler.capitalize('seoul')).toEqual('Seoul');
            expect(site.url).toEqual('https://www.google.com/search');
            expect(site.data?.length).toEqual(6);
            expect(site.data?.q).toEqual('한글');
            expect(urlNew).toEqual(url);
        });
    } catch(ex) {
        expect(true).toEqual(false);
        console.error(ex);
    }
});
