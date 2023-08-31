import { Service } from '../service';
import { Client } from '../client';
export declare class Assistant extends Service {
    constructor(client: Client);
    /**
     * Ask Query
     *
     *
     * @param {string} query
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    chat(query: string): Promise<{}>;
}
