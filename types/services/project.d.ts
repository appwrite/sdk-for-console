import { Client } from '../client';
import type { Models } from '../models';
import { Scopes } from '../enums/scopes';
import { ProtocolId } from '../enums/protocol-id';
import { ServiceId } from '../enums/service-id';
import { ProjectUsageRange } from '../enums/project-usage-range';
export declare class Project {
    client: Client;
    constructor(client: Client);
    /**
     * Configure if canonical emails (alias subaddresses and emails with suffixes) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} params.enabled - Set whether or not to require canonical email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateCanonicalEmails(params: {
        enabled: boolean;
    }): Promise<Models.Project>;
    /**
     * Configure if canonical emails (alias subaddresses and emails with suffixes) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} enabled - Set whether or not to require canonical email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateCanonicalEmails(enabled: boolean): Promise<Models.Project>;
    /**
     * Configure if disposable emails (emails of known temporary domains) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} params.enabled - Set whether or not to block disposable email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateDisposableEmails(params: {
        enabled: boolean;
    }): Promise<Models.Project>;
    /**
     * Configure if disposable emails (emails of known temporary domains) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} enabled - Set whether or not to block disposable email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDisposableEmails(enabled: boolean): Promise<Models.Project>;
    /**
     * Configure if free emails (non-commercial and not a custom domain) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} params.enabled - Set whether or not to block free email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateFreeEmails(params: {
        enabled: boolean;
    }): Promise<Models.Project>;
    /**
     * Configure if free emails (non-commercial and not a custom domain) are allowed during new users sign-ups in this project.
     *
     * @param {boolean} enabled - Set whether or not to block free email addresses during signup and email updates.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFreeEmails(enabled: boolean): Promise<Models.Project>;
    /**
     * Get a list of all API keys from the current project.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     */
    listKeys(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.KeyList>;
    /**
     * Get a list of all API keys from the current project.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: expire, accessedAt, name, scopes
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.KeyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listKeys(queries?: string[], total?: boolean): Promise<Models.KeyList>;
    /**
     * Create a new API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     *
     * @param {string} params.keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    createKey(params: {
        keyId: string;
        name: string;
        scopes: Scopes[];
        expire?: string;
    }): Promise<Models.Key>;
    /**
     * Create a new API key. It's recommended to have multiple API keys with strict scopes for separate functions within your project.
     *
     * @param {string} keyId - Key ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createKey(keyId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    /**
     * Get a key by its unique ID.
     *
     * @param {string} params.keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    getKey(params: {
        keyId: string;
    }): Promise<Models.Key>;
    /**
     * Get a key by its unique ID.
     *
     * @param {string} keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getKey(keyId: string): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} params.keyId - Key ID.
     * @param {string} params.name - Key name. Max length: 128 chars.
     * @param {Scopes[]} params.scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} params.expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     */
    updateKey(params: {
        keyId: string;
        name: string;
        scopes: Scopes[];
        expire?: string;
    }): Promise<Models.Key>;
    /**
     * Update a key by its unique ID. Use this endpoint to update the name, scopes, or expiration time of an API key.
     *
     * @param {string} keyId - Key ID.
     * @param {string} name - Key name. Max length: 128 chars.
     * @param {Scopes[]} scopes - Key scopes list. Maximum of 100 scopes are allowed.
     * @param {string} expire - Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Key>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateKey(keyId: string, name: string, scopes: Scopes[], expire?: string): Promise<Models.Key>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} params.keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteKey(params: {
        keyId: string;
    }): Promise<{}>;
    /**
     * Delete a key by its unique ID. Once deleted, the key can no longer be used to authenticate API calls.
     *
     * @param {string} keyId - Key ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteKey(keyId: string): Promise<{}>;
    /**
     * Update the project labels. Labels can be used to easily filter projects in an organization.
     *
     * @param {string[]} params.labels - Array of project labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateLabels(params: {
        labels: string[];
    }): Promise<Models.Project>;
    /**
     * Update the project labels. Labels can be used to easily filter projects in an organization.
     *
     * @param {string[]} labels - Array of project labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLabels(labels: string[]): Promise<Models.Project>;
    /**
     * Get a list of all platforms in the project. This endpoint returns an array of all platforms and their configurations.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: type, name, hostname, bundleIdentifier, applicationId, packageIdentifierName, packageName
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformList>}
     */
    listPlatforms(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.PlatformList>;
    /**
     * Get a list of all platforms in the project. This endpoint returns an array of all platforms and their configurations.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: type, name, hostname, bundleIdentifier, applicationId, packageIdentifierName, packageName
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listPlatforms(queries?: string[], total?: boolean): Promise<Models.PlatformList>;
    /**
     * Create a new Android platform for your project. Use this endpoint to register a new Android platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     */
    createAndroidPlatform(params: {
        platformId: string;
        name: string;
        applicationId: string;
    }): Promise<Models.PlatformAndroid>;
    /**
     * Create a new Android platform for your project. Use this endpoint to register a new Android platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createAndroidPlatform(platformId: string, name: string, applicationId: string): Promise<Models.PlatformAndroid>;
    /**
     * Update an Android platform by its unique ID. Use this endpoint to update the platform's name or application ID.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     */
    updateAndroidPlatform(params: {
        platformId: string;
        name: string;
        applicationId: string;
    }): Promise<Models.PlatformAndroid>;
    /**
     * Update an Android platform by its unique ID. Use this endpoint to update the platform's name or application ID.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} applicationId - Android application ID. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformAndroid>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateAndroidPlatform(platformId: string, name: string, applicationId: string): Promise<Models.PlatformAndroid>;
    /**
     * Create a new Apple platform for your project. Use this endpoint to register a new Apple platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     */
    createApplePlatform(params: {
        platformId: string;
        name: string;
        bundleIdentifier: string;
    }): Promise<Models.PlatformApple>;
    /**
     * Create a new Apple platform for your project. Use this endpoint to register a new Apple platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createApplePlatform(platformId: string, name: string, bundleIdentifier: string): Promise<Models.PlatformApple>;
    /**
     * Update an Apple platform by its unique ID. Use this endpoint to update the platform's name or bundle identifier.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     */
    updateApplePlatform(params: {
        platformId: string;
        name: string;
        bundleIdentifier: string;
    }): Promise<Models.PlatformApple>;
    /**
     * Update an Apple platform by its unique ID. Use this endpoint to update the platform's name or bundle identifier.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} bundleIdentifier - Apple bundle identifier. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformApple>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateApplePlatform(platformId: string, name: string, bundleIdentifier: string): Promise<Models.PlatformApple>;
    /**
     * Create a new Linux platform for your project. Use this endpoint to register a new Linux platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     */
    createLinuxPlatform(params: {
        platformId: string;
        name: string;
        packageName: string;
    }): Promise<Models.PlatformLinux>;
    /**
     * Create a new Linux platform for your project. Use this endpoint to register a new Linux platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createLinuxPlatform(platformId: string, name: string, packageName: string): Promise<Models.PlatformLinux>;
    /**
     * Update a Linux platform by its unique ID. Use this endpoint to update the platform's name or package name.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     */
    updateLinuxPlatform(params: {
        platformId: string;
        name: string;
        packageName: string;
    }): Promise<Models.PlatformLinux>;
    /**
     * Update a Linux platform by its unique ID. Use this endpoint to update the platform's name or package name.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageName - Linux package name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateLinuxPlatform(platformId: string, name: string, packageName: string): Promise<Models.PlatformLinux>;
    /**
     * Create a new web platform for your project. Use this endpoint to register a new platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     */
    createWebPlatform(params: {
        platformId: string;
        name: string;
        hostname: string;
    }): Promise<Models.PlatformWeb>;
    /**
     * Create a new web platform for your project. Use this endpoint to register a new platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createWebPlatform(platformId: string, name: string, hostname: string): Promise<Models.PlatformWeb>;
    /**
     * Update a web platform by its unique ID. Use this endpoint to update the platform's name or hostname.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     */
    updateWebPlatform(params: {
        platformId: string;
        name: string;
        hostname: string;
    }): Promise<Models.PlatformWeb>;
    /**
     * Update a web platform by its unique ID. Use this endpoint to update the platform's name or hostname.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} hostname - Platform web hostname. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateWebPlatform(platformId: string, name: string, hostname: string): Promise<Models.PlatformWeb>;
    /**
     * Create a new Windows platform for your project. Use this endpoint to register a new Windows platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} params.platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     */
    createWindowsPlatform(params: {
        platformId: string;
        name: string;
        packageIdentifierName: string;
    }): Promise<Models.PlatformWindows>;
    /**
     * Create a new Windows platform for your project. Use this endpoint to register a new Windows platform where your users will run your application which will interact with the Appwrite API.
     *
     * @param {string} platformId - Platform ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createWindowsPlatform(platformId: string, name: string, packageIdentifierName: string): Promise<Models.PlatformWindows>;
    /**
     * Update a Windows platform by its unique ID. Use this endpoint to update the platform's name or package identifier name.
     *
     * @param {string} params.platformId - Platform ID.
     * @param {string} params.name - Platform name. Max length: 128 chars.
     * @param {string} params.packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     */
    updateWindowsPlatform(params: {
        platformId: string;
        name: string;
        packageIdentifierName: string;
    }): Promise<Models.PlatformWindows>;
    /**
     * Update a Windows platform by its unique ID. Use this endpoint to update the platform's name or package identifier name.
     *
     * @param {string} platformId - Platform ID.
     * @param {string} name - Platform name. Max length: 128 chars.
     * @param {string} packageIdentifierName - Windows package identifier name. Max length: 256 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWindows>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateWindowsPlatform(platformId: string, name: string, packageIdentifierName: string): Promise<Models.PlatformWindows>;
    /**
     * Get a platform by its unique ID. This endpoint returns the platform's details, including its name, type, and key configurations.
     *
     * @param {string} params.platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>}
     */
    getPlatform(params: {
        platformId: string;
    }): Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>;
    /**
     * Get a platform by its unique ID. This endpoint returns the platform's details, including its name, type, and key configurations.
     *
     * @param {string} platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPlatform(platformId: string): Promise<Models.PlatformWeb | Models.PlatformApple | Models.PlatformAndroid | Models.PlatformWindows | Models.PlatformLinux>;
    /**
     * Delete a platform by its unique ID. This endpoint removes the platform and all its configurations from the project.
     *
     * @param {string} params.platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deletePlatform(params: {
        platformId: string;
    }): Promise<{}>;
    /**
     * Delete a platform by its unique ID. This endpoint removes the platform and all its configurations from the project.
     *
     * @param {string} platformId - Platform ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deletePlatform(platformId: string): Promise<{}>;
    /**
     * Update the status of a specific protocol. Use this endpoint to enable or disable a protocol in your project.
     *
     * @param {ProtocolId} params.protocolId - Protocol name. Can be one of: rest, graphql, websocket
     * @param {boolean} params.enabled - Protocol status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateProtocolStatus(params: {
        protocolId: ProtocolId;
        enabled: boolean;
    }): Promise<Models.Project>;
    /**
     * Update the status of a specific protocol. Use this endpoint to enable or disable a protocol in your project.
     *
     * @param {ProtocolId} protocolId - Protocol name. Can be one of: rest, graphql, websocket
     * @param {boolean} enabled - Protocol status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateProtocolStatus(protocolId: ProtocolId, enabled: boolean): Promise<Models.Project>;
    /**
     * Update the status of a specific service. Use this endpoint to enable or disable a service in your project.
     *
     * @param {ServiceId} params.serviceId - Service name. Can be one of: account, avatars, databases, tablesdb, documentsdb, vectorsdb, locale, health, project, storage, teams, users, vcs, sites, functions, proxy, graphql, migrations, messaging
     * @param {boolean} params.enabled - Service status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     */
    updateServiceStatus(params: {
        serviceId: ServiceId;
        enabled: boolean;
    }): Promise<Models.Project>;
    /**
     * Update the status of a specific service. Use this endpoint to enable or disable a service in your project.
     *
     * @param {ServiceId} serviceId - Service name. Can be one of: account, avatars, databases, tablesdb, documentsdb, vectorsdb, locale, health, project, storage, teams, users, vcs, sites, functions, proxy, graphql, migrations, messaging
     * @param {boolean} enabled - Service status.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Project>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateServiceStatus(serviceId: ServiceId, enabled: boolean): Promise<Models.Project>;
    /**
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} params.startDate - Starting date for the usage
     * @param {string} params.endDate - End date for the usage
     * @param {ProjectUsageRange} params.period - Period used
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     */
    getUsage(params: {
        startDate: string;
        endDate: string;
        period?: ProjectUsageRange;
    }): Promise<Models.UsageProject>;
    /**
     * Get comprehensive usage statistics for your project. View metrics including network requests, bandwidth, storage, function executions, database usage, and user activity. Specify a time range with startDate and endDate, and optionally set the data granularity with period (1h or 1d). The response includes both total counts and detailed breakdowns by resource, along with historical data over the specified period.
     *
     * @param {string} startDate - Starting date for the usage
     * @param {string} endDate - End date for the usage
     * @param {ProjectUsageRange} period - Period used
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageProject>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(startDate: string, endDate: string, period?: ProjectUsageRange): Promise<Models.UsageProject>;
    /**
     * Get a list of all project environment variables.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, resourceType, resourceId, secret
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(params?: {
        queries?: string[];
        total?: boolean;
    }): Promise<Models.VariableList>;
    /**
     * Get a list of all project environment variables.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, resourceType, resourceId, secret
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listVariables(queries?: string[], total?: boolean): Promise<Models.VariableList>;
    /**
     * Create a new project environment variable. These variables can be accessed by all functions and sites in the project.
     *
     * @param {string} params.variableId - Variable ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: {
        variableId: string;
        key: string;
        value: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Create a new project environment variable. These variables can be accessed by all functions and sites in the project.
     *
     * @param {string} variableId - Variable ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(variableId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} params.variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: {
        variableId: string;
    }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(variableId: string): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} params.variableId - Variable ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: {
        variableId: string;
        key?: string;
        value?: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} variableId - Variable ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only projects can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(variableId: string, key?: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} params.variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: {
        variableId: string;
    }): Promise<{}>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} variableId - Variable ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(variableId: string): Promise<{}>;
}
