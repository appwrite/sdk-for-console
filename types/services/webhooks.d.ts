import { Client } from '../client';
import type { Models } from '../models';
export declare class Webhooks {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all webhooks belonging to the project. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, url, authUsername, tls, events, enabled, logs, attempts
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WebhookList>}
     */
    list(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.WebhookList>;
    /**
     * Get a list of all webhooks belonging to the project. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, url, authUsername, tls, events, enabled, logs, attempts
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.WebhookList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], total?: boolean): Promise<Models.WebhookList>;
    /**
     * Create a new webhook. Use this endpoint to configure a URL that will receive events from Appwrite when specific events occur.
     *
     * @param {string} params.webhookId - Webhook ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.url - Webhook URL.
     * @param {string} params.name - Webhook name. Max length: 128 chars.
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {boolean} params.enabled - Enable or disable a webhook.
     * @param {boolean} params.tls - Certificate verification, false for disabled or true for enabled.
     * @param {string} params.authUsername - Webhook HTTP user. Max length: 256 chars.
     * @param {string} params.authPassword - Webhook HTTP password. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    create(params: {
        webhookId: string;
        url: string;
        name: string;
        events: string[];
        enabled?: boolean;
        tls?: boolean;
        authUsername?: string;
        authPassword?: string;
    }): Promise<Models.Webhook>;
    /**
     * Create a new webhook. Use this endpoint to configure a URL that will receive events from Appwrite when specific events occur.
     *
     * @param {string} webhookId - Webhook ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} url - Webhook URL.
     * @param {string} name - Webhook name. Max length: 128 chars.
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {boolean} enabled - Enable or disable a webhook.
     * @param {boolean} tls - Certificate verification, false for disabled or true for enabled.
     * @param {string} authUsername - Webhook HTTP user. Max length: 256 chars.
     * @param {string} authPassword - Webhook HTTP password. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(webhookId: string, url: string, name: string, events: string[], enabled?: boolean, tls?: boolean, authUsername?: string, authPassword?: string): Promise<Models.Webhook>;
    /**
     * Get a webhook by its unique ID. This endpoint returns details about a specific webhook configured for a project.
     *
     * @param {string} params.webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    get(params: {
        webhookId: string;
    }): Promise<Models.Webhook>;
    /**
     * Get a webhook by its unique ID. This endpoint returns details about a specific webhook configured for a project.
     *
     * @param {string} webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(webhookId: string): Promise<Models.Webhook>;
    /**
     * Update a webhook by its unique ID. Use this endpoint to update the URL, events, or status of an existing webhook.
     *
     * @param {string} params.webhookId - Webhook ID.
     * @param {string} params.name - Webhook name. Max length: 128 chars.
     * @param {string} params.url - Webhook URL.
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {boolean} params.enabled - Enable or disable a webhook.
     * @param {boolean} params.tls - Certificate verification, false for disabled or true for enabled.
     * @param {string} params.authUsername - Webhook HTTP user. Max length: 256 chars.
     * @param {string} params.authPassword - Webhook HTTP password. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    update(params: {
        webhookId: string;
        name: string;
        url: string;
        events: string[];
        enabled?: boolean;
        tls?: boolean;
        authUsername?: string;
        authPassword?: string;
    }): Promise<Models.Webhook>;
    /**
     * Update a webhook by its unique ID. Use this endpoint to update the URL, events, or status of an existing webhook.
     *
     * @param {string} webhookId - Webhook ID.
     * @param {string} name - Webhook name. Max length: 128 chars.
     * @param {string} url - Webhook URL.
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {boolean} enabled - Enable or disable a webhook.
     * @param {boolean} tls - Certificate verification, false for disabled or true for enabled.
     * @param {string} authUsername - Webhook HTTP user. Max length: 256 chars.
     * @param {string} authPassword - Webhook HTTP password. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(webhookId: string, name: string, url: string, events: string[], enabled?: boolean, tls?: boolean, authUsername?: string, authPassword?: string): Promise<Models.Webhook>;
    /**
     * Delete a webhook by its unique ID. Once deleted, the webhook will no longer receive project events.
     *
     * @param {string} params.webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        webhookId: string;
    }): Promise<{}>;
    /**
     * Delete a webhook by its unique ID. Once deleted, the webhook will no longer receive project events.
     *
     * @param {string} webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(webhookId: string): Promise<{}>;
    /**
     * Update the webhook signing key. This endpoint can be used to regenerate the signing key used to sign and validate payload deliveries for a specific webhook.
     *
     * @param {string} params.webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     */
    updateSecret(params: {
        webhookId: string;
    }): Promise<Models.Webhook>;
    /**
     * Update the webhook signing key. This endpoint can be used to regenerate the signing key used to sign and validate payload deliveries for a specific webhook.
     *
     * @param {string} webhookId - Webhook ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Webhook>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSecret(webhookId: string): Promise<Models.Webhook>;
}
