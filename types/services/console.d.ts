import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Console extends Service {
    constructor(client: Client);
    /**
     * Get Variables
     *
     * Get all Environment Variables that are relevant for the console.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    variables(): Promise<Models.ConsoleVariables>;
}
