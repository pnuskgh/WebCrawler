/**
 * Logger utility
 * 
 * @file src/common/logger/logger.ts
 * @version 0.0.1
 * @license GNU General Public License v3.0
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fs from 'fs';                                        //--- https://www.npmjs.com/package/fs
import path from 'path';                                    //--- https://www.npmjs.com/package/path
import moment from 'moment';                                //--- https://www.npmjs.com/package/moment, 'YYYY-MM-DD HH:mm:ss.SSS ZZ'
import cluster from 'cluster';                              //--- https://www.npmjs.com/package/cluster
import { Console } from 'console';                          //--- https://www.npmjs.com/package/console
import winston, { Logform, transports } from 'winston';     //--- https://www.npmjs.com/package/winston
import winstonDaily from 'winston-daily-rotate-file';       //--- https://www.npmjs.com/package/winston-daily-rotate-file

import { LoggerConfig, LOGGER_TYPE } from './logger.type.js';

export const configDefault: LoggerConfig = {
    level: 'info',
    folder: 'logs',
    filename: '%SERVICE%_%DATE%_%worker%_worker.log',
    maxSize: 100 * 1024 * 1024,
    maxFiles: 10,
    useJson: false,
    useConsole: true,
    showFileInfo: true
};

const makeLogFolder = (config): void => {
    const logFolder = path.join(process.cwd(), config.folder);
    if (!fs.existsSync(logFolder)) {
        fs.mkdirSync(logFolder);
    }
}

const getFormat = (config: LoggerConfig): Logform.Format => {
    const { json } = winston.format;
    const formats: Array<Logform.Format> = [];

    if (config.useJson) {
        formats.push(json());
    } else {
        formats.push(winston.format.simple());
    }
    return winston.format.combine(...formats);
};

const getTransports = (config: LoggerConfig): Array<winstonDaily | transports.ConsoleTransportInstance> => {
    const transports: Array<winstonDaily | transports.ConsoleTransportInstance> = [
        new winstonDaily({
            filename: path.join(process.cwd(), config.folder, config.filename), 
            datePattern: "YYYYMMDD",
            zippedArchive: false,
            maxSize: config.maxSize,
            maxFiles: config.maxFiles,
        })
    ];

    if (config.useConsole) {
        transports.push(
            new winston.transports.Console()
        );
    }
    return transports;
};

export default new class extends Console {
    private logger: LOGGER_TYPE;
    private config: LoggerConfig;

    constructor() {
        super(process.stdout, process.stderr);
        this.logger = console;
        this.config = configDefault;
    }

    public setConfig(config: LoggerConfig = configDefault): void {
        this.config = config;
        makeLogFolder(this.config);
        this.logger = winston.createLogger({
            format: getFormat(this.config),
            transports: getTransports(this.config)
        });
    }

    private getMessage(message: any, optionalParams: any[]): string {
        const prefix = [
            moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
            cluster.worker?.id ?? 0                         //--- To-Do: 향후 process의 고유 아이디로 변경할 것
        ];

        if (this.config.showFileInfo) {
            const ex: Error | null = optionalParams.reduce((prev, curr) => {
                return (curr instanceof Error) ? curr:prev;
            }, null);

            const stackArray: Array<string> | undefined = (ex ?? new Error()).stack?.split('\n');
            if (typeof(stackArray) != 'undefined') {
                const isGetMessage: any = stackArray.reduce((prev, curr) => {
                    return ((prev == 'true') || (-1 < curr.indexOf('console.getMessage'))) ? 'true':prev;
                }, 'false');

                const idx = (isGetMessage == 'true') ? 3:1;
                const cwd: string = process.cwd().replace(/\\/g, '/') + '/';
                const re: RegExp = (-1 < stackArray[idx].indexOf('(')) ? new RegExp(`.*${cwd}(.*).*$`):new RegExp(`.*${cwd}(.*)$`);
                const match = stackArray[idx].replace(/\\/g, '/').replace(/\)/g, '').match(re);
                if (match != null) {
                    prefix.push(...match[1].split(':'));
                }
            } else {
                prefix.push('no fileinfo');
                console.log(ex);
            }
        }

        switch (typeof(message)) {
        case 'string':
            prefix.push(message);
            break;
        default:
            prefix.push(JSON.stringify(message));
            break;
        }
        return prefix.join(' : ');
    }

    debug(message?: any, ...optionalParams: any[]): void {
        this.logger.debug(this.getMessage(message, optionalParams), optionalParams);
    }

    error(message?: any, ...optionalParams: any[]): void {
        this.logger.error(this.getMessage(message, optionalParams), optionalParams);
    }

    info(message?: any, ...optionalParams: any[]): void {
        this.logger.info(this.getMessage(message, optionalParams), optionalParams);
    } 

    log(message?: any, ...optionalParams: any[]): void {
        this.logger.log(this.getMessage(message, optionalParams), optionalParams);
    }
    
    warn(message?: any, ...optionalParams: any[]): void {
        this.logger.warn(this.getMessage(message, optionalParams), optionalParams);
    }
};
