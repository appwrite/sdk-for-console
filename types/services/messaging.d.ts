import { Client } from '../client';
import type { Models } from '../models';
import { MessagePriority } from '../enums/message-priority';
import { SmtpEncryption } from '../enums/smtp-encryption';
export declare class Messaging {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all messages from the current Appwrite project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MessageList>}
     */
    listMessages(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.MessageList>;
    /**
     * Get a list of all messages from the current Appwrite project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MessageList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMessages(queries?: string[], search?: string, total?: boolean): Promise<Models.MessageList>;
    /**
     * Create a new email message.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.subject - Email Subject.
     * @param {string} params.content - Email Content.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string[]} params.cc - Array of target IDs to be added as CC.
     * @param {string[]} params.bcc - Array of target IDs to be added as BCC.
     * @param {string[]} params.attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {boolean} params.draft - Is message a draft
     * @param {boolean} params.html - Is content of type HTML
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    createEmail(params: {
        messageId: string;
        subject: string;
        content: string;
        topics?: string[];
        users?: string[];
        targets?: string[];
        cc?: string[];
        bcc?: string[];
        attachments?: string[];
        draft?: boolean;
        html?: boolean;
        scheduledAt?: string;
    }): Promise<Models.Message>;
    /**
     * Create a new email message.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} subject - Email Subject.
     * @param {string} content - Email Content.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string[]} cc - Array of target IDs to be added as CC.
     * @param {string[]} bcc - Array of target IDs to be added as BCC.
     * @param {string[]} attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {boolean} draft - Is message a draft
     * @param {boolean} html - Is content of type HTML
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createEmail(messageId: string, subject: string, content: string, topics?: string[], users?: string[], targets?: string[], cc?: string[], bcc?: string[], attachments?: string[], draft?: boolean, html?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     *
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.subject - Email Subject.
     * @param {string} params.content - Email Content.
     * @param {boolean} params.draft - Is message a draft
     * @param {boolean} params.html - Is content of type HTML
     * @param {string[]} params.cc - Array of target IDs to be added as CC.
     * @param {string[]} params.bcc - Array of target IDs to be added as BCC.
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string[]} params.attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    updateEmail(params: {
        messageId: string;
        topics?: string[];
        users?: string[];
        targets?: string[];
        subject?: string;
        content?: string;
        draft?: boolean;
        html?: boolean;
        cc?: string[];
        bcc?: string[];
        scheduledAt?: string;
        attachments?: string[];
    }): Promise<Models.Message>;
    /**
     * Update an email message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     *
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} subject - Email Subject.
     * @param {string} content - Email Content.
     * @param {boolean} draft - Is message a draft
     * @param {boolean} html - Is content of type HTML
     * @param {string[]} cc - Array of target IDs to be added as CC.
     * @param {string[]} bcc - Array of target IDs to be added as BCC.
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {string[]} attachments - Array of compound ID strings of bucket IDs and file IDs to be attached to the email. They should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateEmail(messageId: string, topics?: string[], users?: string[], targets?: string[], subject?: string, content?: string, draft?: boolean, html?: boolean, cc?: string[], bcc?: string[], scheduledAt?: string, attachments?: string[]): Promise<Models.Message>;
    /**
     * Create a new push notification.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.title - Title for push notification.
     * @param {string} params.body - Body for push notification.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {object} params.data - Additional key-value pair data for push notification.
     * @param {string} params.action - Action for push notification.
     * @param {string} params.image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string} params.icon - Icon for push notification. Available only for Android and Web Platform.
     * @param {string} params.sound - Sound for push notification. Available only for Android and iOS Platform.
     * @param {string} params.color - Color for push notification. Available only for Android Platform.
     * @param {string} params.tag - Tag for push notification. Available only for Android Platform.
     * @param {number} params.badge - Badge for push notification. Available only for iOS Platform.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {boolean} params.contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} params.critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {MessagePriority} params.priority - Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    createPush(params: {
        messageId: string;
        title?: string;
        body?: string;
        topics?: string[];
        users?: string[];
        targets?: string[];
        data?: object;
        action?: string;
        image?: string;
        icon?: string;
        sound?: string;
        color?: string;
        tag?: string;
        badge?: number;
        draft?: boolean;
        scheduledAt?: string;
        contentAvailable?: boolean;
        critical?: boolean;
        priority?: MessagePriority;
    }): Promise<Models.Message>;
    /**
     * Create a new push notification.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} title - Title for push notification.
     * @param {string} body - Body for push notification.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {object} data - Additional key-value pair data for push notification.
     * @param {string} action - Action for push notification.
     * @param {string} image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string} icon - Icon for push notification. Available only for Android and Web Platform.
     * @param {string} sound - Sound for push notification. Available only for Android and iOS Platform.
     * @param {string} color - Color for push notification. Available only for Android Platform.
     * @param {string} tag - Tag for push notification. Available only for Android Platform.
     * @param {number} badge - Badge for push notification. Available only for iOS Platform.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {boolean} contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {MessagePriority} priority - Set the notification priority. "normal" will consider device state and may not deliver notifications immediately. "high" will always attempt to immediately deliver the notification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createPush(messageId: string, title?: string, body?: string, topics?: string[], users?: string[], targets?: string[], data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority): Promise<Models.Message>;
    /**
     * Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     *
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.title - Title for push notification.
     * @param {string} params.body - Body for push notification.
     * @param {object} params.data - Additional Data for push notification.
     * @param {string} params.action - Action for push notification.
     * @param {string} params.image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string} params.icon - Icon for push notification. Available only for Android and Web platforms.
     * @param {string} params.sound - Sound for push notification. Available only for Android and iOS platforms.
     * @param {string} params.color - Color for push notification. Available only for Android platforms.
     * @param {string} params.tag - Tag for push notification. Available only for Android platforms.
     * @param {number} params.badge - Badge for push notification. Available only for iOS platforms.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {boolean} params.contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} params.critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {MessagePriority} params.priority - Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    updatePush(params: {
        messageId: string;
        topics?: string[];
        users?: string[];
        targets?: string[];
        title?: string;
        body?: string;
        data?: object;
        action?: string;
        image?: string;
        icon?: string;
        sound?: string;
        color?: string;
        tag?: string;
        badge?: number;
        draft?: boolean;
        scheduledAt?: string;
        contentAvailable?: boolean;
        critical?: boolean;
        priority?: MessagePriority;
    }): Promise<Models.Message>;
    /**
     * Update a push notification by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     *
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} title - Title for push notification.
     * @param {string} body - Body for push notification.
     * @param {object} data - Additional Data for push notification.
     * @param {string} action - Action for push notification.
     * @param {string} image - Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage. It should be formatted as <BUCKET_ID>:<FILE_ID>.
     * @param {string} icon - Icon for push notification. Available only for Android and Web platforms.
     * @param {string} sound - Sound for push notification. Available only for Android and iOS platforms.
     * @param {string} color - Color for push notification. Available only for Android platforms.
     * @param {string} tag - Tag for push notification. Available only for Android platforms.
     * @param {number} badge - Badge for push notification. Available only for iOS platforms.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @param {boolean} contentAvailable - If set to true, the notification will be delivered in the background. Available only for iOS Platform.
     * @param {boolean} critical - If set to true, the notification will be marked as critical. This requires the app to have the critical notification entitlement. Available only for iOS Platform.
     * @param {MessagePriority} priority - Set the notification priority. "normal" will consider device battery state and may send notifications later. "high" will always attempt to immediately deliver the notification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePush(messageId: string, topics?: string[], users?: string[], targets?: string[], title?: string, body?: string, data?: object, action?: string, image?: string, icon?: string, sound?: string, color?: string, tag?: string, badge?: number, draft?: boolean, scheduledAt?: string, contentAvailable?: boolean, critical?: boolean, priority?: MessagePriority): Promise<Models.Message>;
    /**
     * Create a new SMS message.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.content - SMS Content.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.createSMS` instead.
     */
    createSms(params: {
        messageId: string;
        content: string;
        topics?: string[];
        users?: string[];
        targets?: string[];
        draft?: boolean;
        scheduledAt?: string;
    }): Promise<Models.Message>;
    /**
     * Create a new SMS message.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} content - SMS Content.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSms(messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Create a new SMS message.
     *
     * @param {string} params.messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.content - SMS Content.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    createSMS(params: {
        messageId: string;
        content: string;
        topics?: string[];
        users?: string[];
        targets?: string[];
        draft?: boolean;
        scheduledAt?: string;
    }): Promise<Models.Message>;
    /**
     * Create a new SMS message.
     *
     * @param {string} messageId - Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} content - SMS Content.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSMS(messageId: string, content: string, topics?: string[], users?: string[], targets?: string[], draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     *
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.content - Email Content.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.updateSMS` instead.
     */
    updateSms(params: {
        messageId: string;
        topics?: string[];
        users?: string[];
        targets?: string[];
        content?: string;
        draft?: boolean;
        scheduledAt?: string;
    }): Promise<Models.Message>;
    /**
     * Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     *
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} content - Email Content.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSms(messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     *
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.topics - List of Topic IDs.
     * @param {string[]} params.users - List of User IDs.
     * @param {string[]} params.targets - List of Targets IDs.
     * @param {string} params.content - Email Content.
     * @param {boolean} params.draft - Is message a draft
     * @param {string} params.scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    updateSMS(params: {
        messageId: string;
        topics?: string[];
        users?: string[];
        targets?: string[];
        content?: string;
        draft?: boolean;
        scheduledAt?: string;
    }): Promise<Models.Message>;
    /**
     * Update an SMS message by its unique ID. This endpoint only works on messages that are in draft status. Messages that are already processing, sent, or failed cannot be updated.
     *
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} topics - List of Topic IDs.
     * @param {string[]} users - List of User IDs.
     * @param {string[]} targets - List of Targets IDs.
     * @param {string} content - Email Content.
     * @param {boolean} draft - Is message a draft
     * @param {string} scheduledAt - Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSMS(messageId: string, topics?: string[], users?: string[], targets?: string[], content?: string, draft?: boolean, scheduledAt?: string): Promise<Models.Message>;
    /**
     * Get a message by its unique ID.
     *
     *
     * @param {string} params.messageId - Message ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     */
    getMessage(params: {
        messageId: string;
    }): Promise<Models.Message>;
    /**
     * Get a message by its unique ID.
     *
     *
     * @param {string} messageId - Message ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Message>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getMessage(messageId: string): Promise<Models.Message>;
    /**
     * Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.
     *
     * @param {string} params.messageId - Message ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        messageId: string;
    }): Promise<{}>;
    /**
     * Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.
     *
     * @param {string} messageId - Message ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(messageId: string): Promise<{}>;
    /**
     * Get the message activity logs listed by its unique ID.
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listMessageLogs(params: {
        messageId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.LogList>;
    /**
     * Get the message activity logs listed by its unique ID.
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMessageLogs(messageId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    /**
     * Get a list of the targets associated with a message.
     *
     * @param {string} params.messageId - Message ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TargetList>}
     */
    listTargets(params: {
        messageId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.TargetList>;
    /**
     * Get a list of the targets associated with a message.
     *
     * @param {string} messageId - Message ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TargetList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTargets(messageId: string, queries?: string[], total?: boolean): Promise<Models.TargetList>;
    /**
     * Get a list of all providers from the current Appwrite project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderList>}
     */
    listProviders(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.ProviderList>;
    /**
     * Get a list of all providers from the current Appwrite project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listProviders(queries?: string[], search?: string, total?: boolean): Promise<Models.ProviderList>;
    /**
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.authKey - APNS authentication key.
     * @param {string} params.authKeyId - APNS authentication key ID.
     * @param {string} params.teamId - APNS team ID.
     * @param {string} params.bundleId - APNS bundle ID.
     * @param {boolean} params.sandbox - Use APNS sandbox environment.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.createAPNSProvider` instead.
     */
    createApnsProvider(params: {
        providerId: string;
        name: string;
        authKey?: string;
        authKeyId?: string;
        teamId?: string;
        bundleId?: string;
        sandbox?: boolean;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} authKey - APNS authentication key.
     * @param {string} authKeyId - APNS authentication key ID.
     * @param {string} teamId - APNS team ID.
     * @param {string} bundleId - APNS bundle ID.
     * @param {boolean} sandbox - Use APNS sandbox environment.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createApnsProvider(providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.authKey - APNS authentication key.
     * @param {string} params.authKeyId - APNS authentication key ID.
     * @param {string} params.teamId - APNS team ID.
     * @param {string} params.bundleId - APNS bundle ID.
     * @param {boolean} params.sandbox - Use APNS sandbox environment.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createAPNSProvider(params: {
        providerId: string;
        name: string;
        authKey?: string;
        authKeyId?: string;
        teamId?: string;
        bundleId?: string;
        sandbox?: boolean;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Apple Push Notification service provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} authKey - APNS authentication key.
     * @param {string} authKeyId - APNS authentication key ID.
     * @param {string} teamId - APNS team ID.
     * @param {string} bundleId - APNS bundle ID.
     * @param {boolean} sandbox - Use APNS sandbox environment.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAPNSProvider(providerId: string, name: string, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.authKey - APNS authentication key.
     * @param {string} params.authKeyId - APNS authentication key ID.
     * @param {string} params.teamId - APNS team ID.
     * @param {string} params.bundleId - APNS bundle ID.
     * @param {boolean} params.sandbox - Use APNS sandbox environment.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.updateAPNSProvider` instead.
     */
    updateApnsProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        authKey?: string;
        authKeyId?: string;
        teamId?: string;
        bundleId?: string;
        sandbox?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} authKey - APNS authentication key.
     * @param {string} authKeyId - APNS authentication key ID.
     * @param {string} teamId - APNS team ID.
     * @param {string} bundleId - APNS bundle ID.
     * @param {boolean} sandbox - Use APNS sandbox environment.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateApnsProvider(providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean): Promise<Models.Provider>;
    /**
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.authKey - APNS authentication key.
     * @param {string} params.authKeyId - APNS authentication key ID.
     * @param {string} params.teamId - APNS team ID.
     * @param {string} params.bundleId - APNS bundle ID.
     * @param {boolean} params.sandbox - Use APNS sandbox environment.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateAPNSProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        authKey?: string;
        authKeyId?: string;
        teamId?: string;
        bundleId?: string;
        sandbox?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Update a Apple Push Notification service provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} authKey - APNS authentication key.
     * @param {string} authKeyId - APNS authentication key ID.
     * @param {string} teamId - APNS team ID.
     * @param {string} bundleId - APNS bundle ID.
     * @param {boolean} sandbox - Use APNS sandbox environment.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAPNSProvider(providerId: string, name?: string, enabled?: boolean, authKey?: string, authKeyId?: string, teamId?: string, bundleId?: string, sandbox?: boolean): Promise<Models.Provider>;
    /**
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {object} params.serviceAccountJSON - FCM service account JSON.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.createFCMProvider` instead.
     */
    createFcmProvider(params: {
        providerId: string;
        name: string;
        serviceAccountJSON?: object;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {object} serviceAccountJSON - FCM service account JSON.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFcmProvider(providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {object} params.serviceAccountJSON - FCM service account JSON.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createFCMProvider(params: {
        providerId: string;
        name: string;
        serviceAccountJSON?: object;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Firebase Cloud Messaging provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {object} serviceAccountJSON - FCM service account JSON.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createFCMProvider(providerId: string, name: string, serviceAccountJSON?: object, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {object} params.serviceAccountJSON - FCM service account JSON.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.updateFCMProvider` instead.
     */
    updateFcmProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        serviceAccountJSON?: object;
    }): Promise<Models.Provider>;
    /**
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {object} serviceAccountJSON - FCM service account JSON.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFcmProvider(providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object): Promise<Models.Provider>;
    /**
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {object} params.serviceAccountJSON - FCM service account JSON.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateFCMProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        serviceAccountJSON?: object;
    }): Promise<Models.Provider>;
    /**
     * Update a Firebase Cloud Messaging provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {object} serviceAccountJSON - FCM service account JSON.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFCMProvider(providerId: string, name?: string, enabled?: boolean, serviceAccountJSON?: object): Promise<Models.Provider>;
    /**
     * Create a new Mailgun provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.apiKey - Mailgun API Key.
     * @param {string} params.domain - Mailgun Domain.
     * @param {boolean} params.isEuRegion - Set as EU region.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createMailgunProvider(params: {
        providerId: string;
        name: string;
        apiKey?: string;
        domain?: string;
        isEuRegion?: boolean;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Mailgun provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} apiKey - Mailgun API Key.
     * @param {string} domain - Mailgun Domain.
     * @param {boolean} isEuRegion - Set as EU region.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMailgunProvider(providerId: string, name: string, apiKey?: string, domain?: string, isEuRegion?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Mailgun provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {string} params.apiKey - Mailgun API Key.
     * @param {string} params.domain - Mailgun Domain.
     * @param {boolean} params.isEuRegion - Set as EU region.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateMailgunProvider(params: {
        providerId: string;
        name?: string;
        apiKey?: string;
        domain?: string;
        isEuRegion?: boolean;
        enabled?: boolean;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
    }): Promise<Models.Provider>;
    /**
     * Update a Mailgun provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {string} apiKey - Mailgun API Key.
     * @param {string} domain - Mailgun Domain.
     * @param {boolean} isEuRegion - Set as EU region.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMailgunProvider(providerId: string, name?: string, apiKey?: string, domain?: string, isEuRegion?: boolean, enabled?: boolean, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider>;
    /**
     * Create a new MSG91 provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.templateId - Msg91 template ID
     * @param {string} params.senderId - Msg91 sender ID.
     * @param {string} params.authKey - Msg91 auth key.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createMsg91Provider(params: {
        providerId: string;
        name: string;
        templateId?: string;
        senderId?: string;
        authKey?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new MSG91 provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} templateId - Msg91 template ID
     * @param {string} senderId - Msg91 sender ID.
     * @param {string} authKey - Msg91 auth key.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMsg91Provider(providerId: string, name: string, templateId?: string, senderId?: string, authKey?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a MSG91 provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.templateId - Msg91 template ID.
     * @param {string} params.senderId - Msg91 sender ID.
     * @param {string} params.authKey - Msg91 auth key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateMsg91Provider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        templateId?: string;
        senderId?: string;
        authKey?: string;
    }): Promise<Models.Provider>;
    /**
     * Update a MSG91 provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} templateId - Msg91 template ID.
     * @param {string} senderId - Msg91 sender ID.
     * @param {string} authKey - Msg91 auth key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMsg91Provider(providerId: string, name?: string, enabled?: boolean, templateId?: string, senderId?: string, authKey?: string): Promise<Models.Provider>;
    /**
     * Create a new Resend provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.apiKey - Resend API key.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createResendProvider(params: {
        providerId: string;
        name: string;
        apiKey?: string;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Resend provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} apiKey - Resend API key.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createResendProvider(providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Resend provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.apiKey - Resend API key.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateResendProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        apiKey?: string;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
    }): Promise<Models.Provider>;
    /**
     * Update a Resend provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} apiKey - Resend API key.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateResendProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider>;
    /**
     * Create a new Sendgrid provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.apiKey - Sendgrid API key.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createSendgridProvider(params: {
        providerId: string;
        name: string;
        apiKey?: string;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Sendgrid provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} apiKey - Sendgrid API key.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSendgridProvider(providerId: string, name: string, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Sendgrid provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.apiKey - Sendgrid API key.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateSendgridProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        apiKey?: string;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
    }): Promise<Models.Provider>;
    /**
     * Update a Sendgrid provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} apiKey - Sendgrid API key.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSendgridProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string): Promise<Models.Provider>;
    /**
     * Create a new SMTP provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} params.port - The default SMTP server port.
     * @param {string} params.username - Authentication username.
     * @param {string} params.password - Authentication password.
     * @param {SmtpEncryption} params.encryption - Encryption type. Can be omitted, 'ssl', or 'tls'
     * @param {boolean} params.autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} params.mailer - The value to use for the X-Mailer header.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.createSMTPProvider` instead.
     */
    createSmtpProvider(params: {
        providerId: string;
        name: string;
        host: string;
        port?: number;
        username?: string;
        password?: string;
        encryption?: SmtpEncryption;
        autoTLS?: boolean;
        mailer?: string;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new SMTP provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} port - The default SMTP server port.
     * @param {string} username - Authentication username.
     * @param {string} password - Authentication password.
     * @param {SmtpEncryption} encryption - Encryption type. Can be omitted, 'ssl', or 'tls'
     * @param {boolean} autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} mailer - The value to use for the X-Mailer header.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSmtpProvider(providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Create a new SMTP provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} params.port - The default SMTP server port.
     * @param {string} params.username - Authentication username.
     * @param {string} params.password - Authentication password.
     * @param {SmtpEncryption} params.encryption - Encryption type. Can be omitted, 'ssl', or 'tls'
     * @param {boolean} params.autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} params.mailer - The value to use for the X-Mailer header.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} params.replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createSMTPProvider(params: {
        providerId: string;
        name: string;
        host: string;
        port?: number;
        username?: string;
        password?: string;
        encryption?: SmtpEncryption;
        autoTLS?: boolean;
        mailer?: string;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new SMTP provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} port - The default SMTP server port.
     * @param {string} username - Authentication username.
     * @param {string} password - Authentication password.
     * @param {SmtpEncryption} encryption - Encryption type. Can be omitted, 'ssl', or 'tls'
     * @param {boolean} autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} mailer - The value to use for the X-Mailer header.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the reply to field for the mail. Default value is sender name.
     * @param {string} replyToEmail - Email set in the reply to field for the mail. Default value is sender email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSMTPProvider(providerId: string, name: string, host: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {string} params.host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} params.port - SMTP port.
     * @param {string} params.username - Authentication username.
     * @param {string} params.password - Authentication password.
     * @param {SmtpEncryption} params.encryption - Encryption type. Can be 'ssl' or 'tls'
     * @param {boolean} params.autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} params.mailer - The value to use for the X-Mailer header.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated This API has been deprecated since 1.8.0. Please use `Messaging.updateSMTPProvider` instead.
     */
    updateSmtpProvider(params: {
        providerId: string;
        name?: string;
        host?: string;
        port?: number;
        username?: string;
        password?: string;
        encryption?: SmtpEncryption;
        autoTLS?: boolean;
        mailer?: string;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {string} host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} port - SMTP port.
     * @param {string} username - Authentication username.
     * @param {string} password - Authentication password.
     * @param {SmtpEncryption} encryption - Encryption type. Can be 'ssl' or 'tls'
     * @param {boolean} autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} mailer - The value to use for the X-Mailer header.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSmtpProvider(providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {string} params.host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} params.port - SMTP port.
     * @param {string} params.username - Authentication username.
     * @param {string} params.password - Authentication password.
     * @param {SmtpEncryption} params.encryption - Encryption type. Can be 'ssl' or 'tls'
     * @param {boolean} params.autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} params.mailer - The value to use for the X-Mailer header.
     * @param {string} params.fromName - Sender Name.
     * @param {string} params.fromEmail - Sender email address.
     * @param {string} params.replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} params.replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateSMTPProvider(params: {
        providerId: string;
        name?: string;
        host?: string;
        port?: number;
        username?: string;
        password?: string;
        encryption?: SmtpEncryption;
        autoTLS?: boolean;
        mailer?: string;
        fromName?: string;
        fromEmail?: string;
        replyToName?: string;
        replyToEmail?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Update a SMTP provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {string} host - SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465"`. Hosts will be tried in order.
     * @param {number} port - SMTP port.
     * @param {string} username - Authentication username.
     * @param {string} password - Authentication password.
     * @param {SmtpEncryption} encryption - Encryption type. Can be 'ssl' or 'tls'
     * @param {boolean} autoTLS - Enable SMTP AutoTLS feature.
     * @param {string} mailer - The value to use for the X-Mailer header.
     * @param {string} fromName - Sender Name.
     * @param {string} fromEmail - Sender email address.
     * @param {string} replyToName - Name set in the Reply To field for the mail. Default value is Sender Name.
     * @param {string} replyToEmail - Email set in the Reply To field for the mail. Default value is Sender Email.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSMTPProvider(providerId: string, name?: string, host?: string, port?: number, username?: string, password?: string, encryption?: SmtpEncryption, autoTLS?: boolean, mailer?: string, fromName?: string, fromEmail?: string, replyToName?: string, replyToEmail?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Create a new Telesign provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.customerId - Telesign customer ID.
     * @param {string} params.apiKey - Telesign API key.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createTelesignProvider(params: {
        providerId: string;
        name: string;
        from?: string;
        customerId?: string;
        apiKey?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Telesign provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} customerId - Telesign customer ID.
     * @param {string} apiKey - Telesign API key.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTelesignProvider(providerId: string, name: string, from?: string, customerId?: string, apiKey?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Telesign provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.customerId - Telesign customer ID.
     * @param {string} params.apiKey - Telesign API key.
     * @param {string} params.from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateTelesignProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        customerId?: string;
        apiKey?: string;
        from?: string;
    }): Promise<Models.Provider>;
    /**
     * Update a Telesign provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} customerId - Telesign customer ID.
     * @param {string} apiKey - Telesign API key.
     * @param {string} from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTelesignProvider(providerId: string, name?: string, enabled?: boolean, customerId?: string, apiKey?: string, from?: string): Promise<Models.Provider>;
    /**
     * Create a new Textmagic provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.username - Textmagic username.
     * @param {string} params.apiKey - Textmagic apiKey.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createTextmagicProvider(params: {
        providerId: string;
        name: string;
        from?: string;
        username?: string;
        apiKey?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Textmagic provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} username - Textmagic username.
     * @param {string} apiKey - Textmagic apiKey.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTextmagicProvider(providerId: string, name: string, from?: string, username?: string, apiKey?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Textmagic provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.username - Textmagic username.
     * @param {string} params.apiKey - Textmagic apiKey.
     * @param {string} params.from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateTextmagicProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        username?: string;
        apiKey?: string;
        from?: string;
    }): Promise<Models.Provider>;
    /**
     * Update a Textmagic provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} username - Textmagic username.
     * @param {string} apiKey - Textmagic apiKey.
     * @param {string} from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTextmagicProvider(providerId: string, name?: string, enabled?: boolean, username?: string, apiKey?: string, from?: string): Promise<Models.Provider>;
    /**
     * Create a new Twilio provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.accountSid - Twilio account secret ID.
     * @param {string} params.authToken - Twilio authentication token.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createTwilioProvider(params: {
        providerId: string;
        name: string;
        from?: string;
        accountSid?: string;
        authToken?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Twilio provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} accountSid - Twilio account secret ID.
     * @param {string} authToken - Twilio authentication token.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTwilioProvider(providerId: string, name: string, from?: string, accountSid?: string, authToken?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Twilio provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.accountSid - Twilio account secret ID.
     * @param {string} params.authToken - Twilio authentication token.
     * @param {string} params.from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateTwilioProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        accountSid?: string;
        authToken?: string;
        from?: string;
    }): Promise<Models.Provider>;
    /**
     * Update a Twilio provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} accountSid - Twilio account secret ID.
     * @param {string} authToken - Twilio authentication token.
     * @param {string} from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTwilioProvider(providerId: string, name?: string, enabled?: boolean, accountSid?: string, authToken?: string, from?: string): Promise<Models.Provider>;
    /**
     * Create a new Vonage provider.
     *
     * @param {string} params.providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Provider name.
     * @param {string} params.from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.apiKey - Vonage API key.
     * @param {string} params.apiSecret - Vonage API secret.
     * @param {boolean} params.enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    createVonageProvider(params: {
        providerId: string;
        name: string;
        from?: string;
        apiKey?: string;
        apiSecret?: string;
        enabled?: boolean;
    }): Promise<Models.Provider>;
    /**
     * Create a new Vonage provider.
     *
     * @param {string} providerId - Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Provider name.
     * @param {string} from - Sender Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} apiKey - Vonage API key.
     * @param {string} apiSecret - Vonage API secret.
     * @param {boolean} enabled - Set as enabled.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVonageProvider(providerId: string, name: string, from?: string, apiKey?: string, apiSecret?: string, enabled?: boolean): Promise<Models.Provider>;
    /**
     * Update a Vonage provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string} params.name - Provider name.
     * @param {boolean} params.enabled - Set as enabled.
     * @param {string} params.apiKey - Vonage API key.
     * @param {string} params.apiSecret - Vonage API secret.
     * @param {string} params.from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    updateVonageProvider(params: {
        providerId: string;
        name?: string;
        enabled?: boolean;
        apiKey?: string;
        apiSecret?: string;
        from?: string;
    }): Promise<Models.Provider>;
    /**
     * Update a Vonage provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string} name - Provider name.
     * @param {boolean} enabled - Set as enabled.
     * @param {string} apiKey - Vonage API key.
     * @param {string} apiSecret - Vonage API secret.
     * @param {string} from - Sender number.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVonageProvider(providerId: string, name?: string, enabled?: boolean, apiKey?: string, apiSecret?: string, from?: string): Promise<Models.Provider>;
    /**
     * Get a provider by its unique ID.
     *
     *
     * @param {string} params.providerId - Provider ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     */
    getProvider(params: {
        providerId: string;
    }): Promise<Models.Provider>;
    /**
     * Get a provider by its unique ID.
     *
     *
     * @param {string} providerId - Provider ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Provider>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getProvider(providerId: string): Promise<Models.Provider>;
    /**
     * Delete a provider by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteProvider(params: {
        providerId: string;
    }): Promise<{}>;
    /**
     * Delete a provider by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteProvider(providerId: string): Promise<{}>;
    /**
     * Get the provider activity logs listed by its unique ID.
     *
     * @param {string} params.providerId - Provider ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listProviderLogs(params: {
        providerId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.LogList>;
    /**
     * Get the provider activity logs listed by its unique ID.
     *
     * @param {string} providerId - Provider ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listProviderLogs(providerId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    /**
     * Get the subscriber activity logs listed by its unique ID.
     *
     * @param {string} params.subscriberId - Subscriber ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listSubscriberLogs(params: {
        subscriberId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.LogList>;
    /**
     * Get the subscriber activity logs listed by its unique ID.
     *
     * @param {string} subscriberId - Subscriber ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listSubscriberLogs(subscriberId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    /**
     * Get a list of all topics from the current Appwrite project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TopicList>}
     */
    listTopics(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.TopicList>;
    /**
     * Get a list of all topics from the current Appwrite project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TopicList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTopics(queries?: string[], search?: string, total?: boolean): Promise<Models.TopicList>;
    /**
     * Create a new topic.
     *
     * @param {string} params.topicId - Topic ID. Choose a custom Topic ID or a new Topic ID.
     * @param {string} params.name - Topic Name.
     * @param {string[]} params.subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     */
    createTopic(params: {
        topicId: string;
        name: string;
        subscribe?: string[];
    }): Promise<Models.Topic>;
    /**
     * Create a new topic.
     *
     * @param {string} topicId - Topic ID. Choose a custom Topic ID or a new Topic ID.
     * @param {string} name - Topic Name.
     * @param {string[]} subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTopic(topicId: string, name: string, subscribe?: string[]): Promise<Models.Topic>;
    /**
     * Get a topic by its unique ID.
     *
     *
     * @param {string} params.topicId - Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     */
    getTopic(params: {
        topicId: string;
    }): Promise<Models.Topic>;
    /**
     * Get a topic by its unique ID.
     *
     *
     * @param {string} topicId - Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTopic(topicId: string): Promise<Models.Topic>;
    /**
     * Update a topic by its unique ID.
     *
     *
     * @param {string} params.topicId - Topic ID.
     * @param {string} params.name - Topic Name.
     * @param {string[]} params.subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     */
    updateTopic(params: {
        topicId: string;
        name?: string;
        subscribe?: string[];
    }): Promise<Models.Topic>;
    /**
     * Update a topic by its unique ID.
     *
     *
     * @param {string} topicId - Topic ID.
     * @param {string} name - Topic Name.
     * @param {string[]} subscribe - An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Topic>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateTopic(topicId: string, name?: string, subscribe?: string[]): Promise<Models.Topic>;
    /**
     * Delete a topic by its unique ID.
     *
     * @param {string} params.topicId - Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteTopic(params: {
        topicId: string;
    }): Promise<{}>;
    /**
     * Delete a topic by its unique ID.
     *
     * @param {string} topicId - Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteTopic(topicId: string): Promise<{}>;
    /**
     * Get the topic activity logs listed by its unique ID.
     *
     * @param {string} params.topicId - Topic ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listTopicLogs(params: {
        topicId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.LogList>;
    /**
     * Get the topic activity logs listed by its unique ID.
     *
     * @param {string} topicId - Topic ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTopicLogs(topicId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    /**
     * Get a list of all subscribers from the current Appwrite project.
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SubscriberList>}
     */
    listSubscribers(params: {
        topicId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.SubscriberList>;
    /**
     * Get a list of all subscribers from the current Appwrite project.
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SubscriberList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listSubscribers(topicId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.SubscriberList>;
    /**
     * Create a new subscriber.
     *
     * @param {string} params.topicId - Topic ID. The topic ID to subscribe to.
     * @param {string} params.subscriberId - Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.
     * @param {string} params.targetId - Target ID. The target ID to link to the specified Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Subscriber>}
     */
    createSubscriber(params: {
        topicId: string;
        subscriberId: string;
        targetId: string;
    }): Promise<Models.Subscriber>;
    /**
     * Create a new subscriber.
     *
     * @param {string} topicId - Topic ID. The topic ID to subscribe to.
     * @param {string} subscriberId - Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.
     * @param {string} targetId - Target ID. The target ID to link to the specified Topic ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Subscriber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createSubscriber(topicId: string, subscriberId: string, targetId: string): Promise<Models.Subscriber>;
    /**
     * Get a subscriber by its unique ID.
     *
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string} params.subscriberId - Subscriber ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Subscriber>}
     */
    getSubscriber(params: {
        topicId: string;
        subscriberId: string;
    }): Promise<Models.Subscriber>;
    /**
     * Get a subscriber by its unique ID.
     *
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string} subscriberId - Subscriber ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Subscriber>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getSubscriber(topicId: string, subscriberId: string): Promise<Models.Subscriber>;
    /**
     * Delete a subscriber by its unique ID.
     *
     * @param {string} params.topicId - Topic ID. The topic ID subscribed to.
     * @param {string} params.subscriberId - Subscriber ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteSubscriber(params: {
        topicId: string;
        subscriberId: string;
    }): Promise<{}>;
    /**
     * Delete a subscriber by its unique ID.
     *
     * @param {string} topicId - Topic ID. The topic ID subscribed to.
     * @param {string} subscriberId - Subscriber ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteSubscriber(topicId: string, subscriberId: string): Promise<{}>;
}
