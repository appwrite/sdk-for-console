import { Client } from '../client';
import type { Models } from '../models';
export declare class Activities {
    client: Client;
    constructor(client: Client);
    /**
     * List all events for selected filters.
     *
     * @param {string} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as userId, teamId, etc.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEventList>}
     */
    listEvents(params?: {
        queries?: string;
    }): Promise<Models.ActivityEventList>;
    /**
     * List all events for selected filters.
     *
     * @param {string} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on attributes such as userId, teamId, etc.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEventList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listEvents(queries?: string): Promise<Models.ActivityEventList>;
    /**
     * Get event by ID.
     *
     *
     * @param {string} params.eventId - Event ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEvent>}
     */
    getEvent(params: {
        eventId: string;
    }): Promise<Models.ActivityEvent>;
    /**
     * Get event by ID.
     *
     *
     * @param {string} eventId - Event ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ActivityEvent>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getEvent(eventId: string): Promise<Models.ActivityEvent>;
}
