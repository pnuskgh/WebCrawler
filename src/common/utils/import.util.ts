/**
 * Utility
 * 
 * @file src/common/utils/import.util.ts
 * @version 0.0.1
 * @license OBCon Lincese 1.0
 * @copyright 2017~2024, OBCon Inc.
 * @author gye hyun james kim <pnuskgh@gmail.com>
 */

import fs from 'fs';                    //--- https://www.npmjs.com/package/fs
import path from 'path';                //--- https://www.npmjs.com/package/path

export const importUtil = {
    import: async <Service>(filename: string): Promise<Service | null> => {
        try {
            const rootFolder: string = process.cwd();
            const filenames: Array<string> = [];
            if ((filename.endsWith('.js')) || (filename.endsWith('.ts'))) {
                filenames.push(path.join(rootFolder, filename));
            } else {
                filenames.push(path.join(rootFolder, `${filename}.js`));
                filenames.push(path.join(rootFolder, `${filename}.ts`));
            }

            for (let filename of filenames) {
                if (fs.existsSync(filename)) {
                    const importModule: any = await import(filename);
                    const value: Service = importModule.default;
                    return value;
                }
            }
        } catch(ex) {
            console.error(ex);
        }
        return null;
    } 
};
