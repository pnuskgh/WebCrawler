/**
 * @author gye hyun james kim <pnuskgh@gmail.com>
 * @copyright 2017~2024, OBCon Inc.
 * @license OBCon License 1.0
 */

import { SiteInfomation } from './crawler.type';

export class WebCrawler {
    capitalize(param: string): string {
        return param;
    }

    encode(param: string): SiteInfomation {
        const site: SiteInfomation = {
            url: param,
            data: {},
        };
        return site;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    decode(_params: SiteInfomation): string {
        return '';
    }
}

export default WebCrawler;
