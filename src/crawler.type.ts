/**
 * Web Crawler Library
 * 
 * @file src/crawler.type.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

export interface SiteInfomation {
	url: string;
  	data?: Record<string, string | number | boolean>;
}
