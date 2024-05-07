/**
 * Web Crawler Library
 * 
 * @file src/crawler.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import { SiteInfomation } from './crawler.type.js';

export class WebCrawler {
    constructor() {
    }

    capitalize(param: string): string {
        return param;
    }

    encode(param: string): SiteInfomation {
        const site: SiteInfomation = {
            url: param,
            data: {}
        }
        return site;
    }

    decode(_params: SiteInfomation): string {
        return '';
    }
}

export default WebCrawler;