import { AppwriteException, Client, type Payload } from '../client';
import type { Models } from '../models';

export class Notifications {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get the list of notifications for the currently logged in console user. Use queries to filter the results by attributes such as read status, view timestamps, or creation date.
     *
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: read, type, channel, messageId, projectId, resourceType, resourceId, parentResourceType, parentResourceId, firstSeen, lastSeen
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.NotificationList>}
     */
    list(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.NotificationList>;
    /**
     * Get the list of notifications for the currently logged in console user. Use queries to filter the results by attributes such as read status, view timestamps, or creation date.
     *
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: read, type, channel, messageId, projectId, resourceType, resourceId, parentResourceType, parentResourceId, firstSeen, lastSeen
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.NotificationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], total?: boolean): Promise<Models.NotificationList>;
    list(
        paramsOrFirst?: { queries?: string[]; total?: boolean } | string[],
        ...rest: [boolean?]
    ): Promise<Models.NotificationList> {
        let params: { queries?: string[]; total?: boolean };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                queries?: string[];
                total?: boolean;
            };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                total: rest[0] as boolean,
            };
        }

        const queries = params.queries;
        const total = params.total;

        const apiPath = '/notifications';
        const apiPayload: Payload = {};
        if (typeof queries !== 'undefined') {
            apiPayload['queries'] = queries;
        }
        if (typeof total !== 'undefined') {
            apiPayload['total'] = total;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            accept: 'application/json',
        };

        return this.client.call('get', uri, apiHeaders, apiPayload);
    }

    /**
     * Update a notification by its unique ID. Use the `read` parameter to mark the notification as read or unread.
     *
     *
     * @param {string} params.notificationId - Notification ID.
     * @param {boolean} params.read - Notification read status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Notification>}
     */
    update(params: {
        notificationId: string;
        read: boolean;
    }): Promise<Models.Notification>;
    /**
     * Update a notification by its unique ID. Use the `read` parameter to mark the notification as read or unread.
     *
     *
     * @param {string} notificationId - Notification ID.
     * @param {boolean} read - Notification read status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Notification>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(notificationId: string, read: boolean): Promise<Models.Notification>;
    update(
        paramsOrFirst: { notificationId: string; read: boolean } | string,
        ...rest: [boolean?]
    ): Promise<Models.Notification> {
        let params: { notificationId: string; read: boolean };

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                notificationId: string;
                read: boolean;
            };
        } else {
            params = {
                notificationId: paramsOrFirst as string,
                read: rest[0] as boolean,
            };
        }

        const notificationId = params.notificationId;
        const read = params.read;

        if (typeof notificationId === 'undefined' || notificationId === '') {
            throw new AppwriteException(
                'Missing required parameter: "notificationId"',
            );
        }
        if (typeof read === 'undefined') {
            throw new AppwriteException('Missing required parameter: "read"');
        }
        const apiPath = '/notifications/{notificationId}'.replace(
            '{notificationId}',
            encodeURIComponent(String(notificationId)),
        );
        const apiPayload: Payload = {};
        if (typeof read !== 'undefined') {
            apiPayload['read'] = read;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('patch', uri, apiHeaders, apiPayload);
    }
}
