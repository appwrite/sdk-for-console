import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Project extends Service {
    constructor(client: Client);
    /**
     * Get usage stats for a project
     *
     *
     * @param {string} range
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getUsage(range?: string): Promise<Models.UsageProject>;
}
