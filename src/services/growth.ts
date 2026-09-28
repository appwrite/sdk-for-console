import {
    AppwriteException,
    Client,
    type Payload,
    UploadProgress,
} from '../client';
import type { Models } from '../models';

import { ConversationType } from '../enums/conversation-type';
export class Growth {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Create a conversation with the Appwrite team: support requests, product and docs feedback, enterprise, startup and partner applications, and event sponsorship requests. Signed in console users are identified by their session or JWT; everyone else must pass an email. Attach a file of up to 5MB to support and feedback conversations.
     *
     * @param {ConversationType} params.type - Conversation type.
     * @param {string} params.email - Email address to reply to. Required without a console session, ignored with one.
     * @param {string} params.name - Name of the person filing the conversation. Required for enterprise, startup, partner and sponsorship.
     * @param {string} params.subject - Conversation subject.
     * @param {string} params.message - Conversation message. Required for support, feedback, enterprise and partner.
     * @param {string} params.organizationId - Organization ID the conversation is about. Kept only when the session user is a member.
     * @param {string} params.projectId - Project ID the conversation is about. Kept only when it belongs to the kept organization.
     * @param {object} params.attributes - Additional attributes for the conversation type, as an object or a JSON string.
     * @param {File} params.attachment - File attachment, support and feedback only, max 5MB.
     * @throws {AppwriteException}
     * @returns {Promise<Models.GrowthConversation>}
     */
    createConversation(params: {
        type: ConversationType;
        email?: string;
        name?: string;
        subject?: string;
        message?: string;
        organizationId?: string;
        projectId?: string;
        attributes?: object;
        attachment?: File;
        onProgress?: (progress: UploadProgress) => void;
    }): Promise<Models.GrowthConversation>;
    /**
     * Create a conversation with the Appwrite team: support requests, product and docs feedback, enterprise, startup and partner applications, and event sponsorship requests. Signed in console users are identified by their session or JWT; everyone else must pass an email. Attach a file of up to 5MB to support and feedback conversations.
     *
     * @param {ConversationType} type - Conversation type.
     * @param {string} email - Email address to reply to. Required without a console session, ignored with one.
     * @param {string} name - Name of the person filing the conversation. Required for enterprise, startup, partner and sponsorship.
     * @param {string} subject - Conversation subject.
     * @param {string} message - Conversation message. Required for support, feedback, enterprise and partner.
     * @param {string} organizationId - Organization ID the conversation is about. Kept only when the session user is a member.
     * @param {string} projectId - Project ID the conversation is about. Kept only when it belongs to the kept organization.
     * @param {object} attributes - Additional attributes for the conversation type, as an object or a JSON string.
     * @param {File} attachment - File attachment, support and feedback only, max 5MB.
     * @throws {AppwriteException}
     * @returns {Promise<Models.GrowthConversation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createConversation(
        type: ConversationType,
        email?: string,
        name?: string,
        subject?: string,
        message?: string,
        organizationId?: string,
        projectId?: string,
        attributes?: object,
        attachment?: File,
        onProgress?: (progress: UploadProgress) => void,
    ): Promise<Models.GrowthConversation>;
    createConversation(
        paramsOrFirst:
            | {
                  type: ConversationType;
                  email?: string;
                  name?: string;
                  subject?: string;
                  message?: string;
                  organizationId?: string;
                  projectId?: string;
                  attributes?: object;
                  attachment?: File;
                  onProgress?: (progress: UploadProgress) => void;
              }
            | ConversationType,
        ...rest: [
            string?,
            string?,
            string?,
            string?,
            string?,
            string?,
            object?,
            File?,
            ((progress: UploadProgress) => void)?,
        ]
    ): Promise<Models.GrowthConversation> {
        let params: {
            type: ConversationType;
            email?: string;
            name?: string;
            subject?: string;
            message?: string;
            organizationId?: string;
            projectId?: string;
            attributes?: object;
            attachment?: File;
        };
        let onProgress: (progress: UploadProgress) => void;

        if (
            paramsOrFirst &&
            typeof paramsOrFirst === 'object' &&
            !Array.isArray(paramsOrFirst) &&
            ('type' in paramsOrFirst ||
                'email' in paramsOrFirst ||
                'name' in paramsOrFirst ||
                'subject' in paramsOrFirst ||
                'message' in paramsOrFirst ||
                'organizationId' in paramsOrFirst ||
                'projectId' in paramsOrFirst ||
                'attributes' in paramsOrFirst ||
                'attachment' in paramsOrFirst ||
                'onProgress' in paramsOrFirst)
        ) {
            params = (paramsOrFirst || {}) as {
                type: ConversationType;
                email?: string;
                name?: string;
                subject?: string;
                message?: string;
                organizationId?: string;
                projectId?: string;
                attributes?: object;
                attachment?: File;
            };
            onProgress = paramsOrFirst?.onProgress as (
                progress: UploadProgress,
            ) => void;
        } else {
            params = {
                type: paramsOrFirst as ConversationType,
                email: rest[0] as string,
                name: rest[1] as string,
                subject: rest[2] as string,
                message: rest[3] as string,
                organizationId: rest[4] as string,
                projectId: rest[5] as string,
                attributes: rest[6] as object,
                attachment: rest[7] as File,
            };
            onProgress = rest[8] as (progress: UploadProgress) => void;
        }

        const type = params.type;
        const email = params.email;
        const name = params.name;
        const subject = params.subject;
        const message = params.message;
        const organizationId = params.organizationId;
        const projectId = params.projectId;
        const attributes = params.attributes;
        const attachment = params.attachment;

        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        const apiPath = '/growth/conversations';
        const apiPayload: Payload = {};
        if (typeof type !== 'undefined') {
            apiPayload['type'] = type;
        }
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof subject !== 'undefined') {
            apiPayload['subject'] = subject;
        }
        if (typeof message !== 'undefined') {
            apiPayload['message'] = message;
        }
        if (typeof organizationId !== 'undefined') {
            apiPayload['organizationId'] = organizationId;
        }
        if (typeof projectId !== 'undefined') {
            apiPayload['projectId'] = projectId;
        }
        if (typeof attributes !== 'undefined') {
            apiPayload['attributes'] = attributes;
        }
        if (typeof attachment !== 'undefined') {
            apiPayload['attachment'] = attachment;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'multipart/form-data',
            accept: 'application/json',
        };

        return this.client.chunkedUpload(
            'post',
            uri,
            apiHeaders,
            apiPayload,
            onProgress,
        );
    }

    /**
     * Record a self-hosted installation. Every report is stored as its own row; the admin email is optional because headless CLI installs create no account.
     *
     * @param {string} params.email - Admin email from the installation, when an account was created.
     * @param {string} params.name - Admin name.
     * @param {string} params.version - Appwrite version.
     * @param {string} params.domain - Installation domain.
     * @param {string} params.database - Database adapter.
     * @param {string} params.hostIp - Resolved installation host IP address.
     * @param {string} params.userAgent - Installation user agent.
     * @param {string} params.os - Installation operating system.
     * @param {string} params.arch - Installation CPU architecture.
     * @param {number} params.cpus - Installation CPU count.
     * @param {number} params.ram - Installation RAM in MB.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    createInstallation(params?: {
        email?: string;
        name?: string;
        version?: string;
        domain?: string;
        database?: string;
        hostIp?: string;
        userAgent?: string;
        os?: string;
        arch?: string;
        cpus?: number;
        ram?: number;
    }): Promise<{}>;
    /**
     * Record a self-hosted installation. Every report is stored as its own row; the admin email is optional because headless CLI installs create no account.
     *
     * @param {string} email - Admin email from the installation, when an account was created.
     * @param {string} name - Admin name.
     * @param {string} version - Appwrite version.
     * @param {string} domain - Installation domain.
     * @param {string} database - Database adapter.
     * @param {string} hostIp - Resolved installation host IP address.
     * @param {string} userAgent - Installation user agent.
     * @param {string} os - Installation operating system.
     * @param {string} arch - Installation CPU architecture.
     * @param {number} cpus - Installation CPU count.
     * @param {number} ram - Installation RAM in MB.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createInstallation(
        email?: string,
        name?: string,
        version?: string,
        domain?: string,
        database?: string,
        hostIp?: string,
        userAgent?: string,
        os?: string,
        arch?: string,
        cpus?: number,
        ram?: number,
    ): Promise<{}>;
    createInstallation(
        paramsOrFirst?:
            | {
                  email?: string;
                  name?: string;
                  version?: string;
                  domain?: string;
                  database?: string;
                  hostIp?: string;
                  userAgent?: string;
                  os?: string;
                  arch?: string;
                  cpus?: number;
                  ram?: number;
              }
            | string,
        ...rest: [
            string?,
            string?,
            string?,
            string?,
            string?,
            string?,
            string?,
            string?,
            number?,
            number?,
        ]
    ): Promise<{}> {
        let params: {
            email?: string;
            name?: string;
            version?: string;
            domain?: string;
            database?: string;
            hostIp?: string;
            userAgent?: string;
            os?: string;
            arch?: string;
            cpus?: number;
            ram?: number;
        };

        if (
            (typeof paramsOrFirst === 'undefined' && rest.length === 0) ||
            (paramsOrFirst &&
                typeof paramsOrFirst === 'object' &&
                !Array.isArray(paramsOrFirst))
        ) {
            params = (paramsOrFirst || {}) as {
                email?: string;
                name?: string;
                version?: string;
                domain?: string;
                database?: string;
                hostIp?: string;
                userAgent?: string;
                os?: string;
                arch?: string;
                cpus?: number;
                ram?: number;
            };
        } else {
            params = {
                email: paramsOrFirst as string,
                name: rest[0] as string,
                version: rest[1] as string,
                domain: rest[2] as string,
                database: rest[3] as string,
                hostIp: rest[4] as string,
                userAgent: rest[5] as string,
                os: rest[6] as string,
                arch: rest[7] as string,
                cpus: rest[8] as number,
                ram: rest[9] as number,
            };
        }

        const email = params.email;
        const name = params.name;
        const version = params.version;
        const domain = params.domain;
        const database = params.database;
        const hostIp = params.hostIp;
        const userAgent = params.userAgent;
        const os = params.os;
        const arch = params.arch;
        const cpus = params.cpus;
        const ram = params.ram;

        const apiPath = '/growth/installations';
        const apiPayload: Payload = {};
        if (typeof email !== 'undefined') {
            apiPayload['email'] = email;
        }
        if (typeof name !== 'undefined') {
            apiPayload['name'] = name;
        }
        if (typeof version !== 'undefined') {
            apiPayload['version'] = version;
        }
        if (typeof domain !== 'undefined') {
            apiPayload['domain'] = domain;
        }
        if (typeof database !== 'undefined') {
            apiPayload['database'] = database;
        }
        if (typeof hostIp !== 'undefined') {
            apiPayload['hostIp'] = hostIp;
        }
        if (typeof userAgent !== 'undefined') {
            apiPayload['userAgent'] = userAgent;
        }
        if (typeof os !== 'undefined') {
            apiPayload['os'] = os;
        }
        if (typeof arch !== 'undefined') {
            apiPayload['arch'] = arch;
        }
        if (typeof cpus !== 'undefined') {
            apiPayload['cpus'] = cpus;
        }
        if (typeof ram !== 'undefined') {
            apiPayload['ram'] = ram;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
            accept: 'application/json',
        };

        return this.client.call('post', uri, apiHeaders, apiPayload);
    }
}
