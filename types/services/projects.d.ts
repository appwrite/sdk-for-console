import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Projects extends Service {
    constructor(client: Client);
    /**
     * List Projects
     *
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    list(queries?: string[], search?: string): Promise<Models.ProjectList>;
    /**
     * Create Project
     *
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string} teamId
     * @param {string} region
     * @param {string} description
     * @param {string} logo
     * @param {string} url
     * @param {string} legalName
     * @param {string} legalCountry
     * @param {string} legalState
     * @param {string} legalCity
     * @param {string} legalAddress
     * @param {string} legalTaxId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    create(projectId: string, name: string, teamId: string, region?: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string): Promise<Models.Project>;
    /**
     * Get Project
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    get(projectId: string): Promise<Models.Project>;
    /**
     * Update Project
     *
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string} description
     * @param {string} logo
     * @param {string} url
     * @param {string} legalName
     * @param {string} legalCountry
     * @param {string} legalState
     * @param {string} legalCity
     * @param {string} legalAddress
     * @param {string} legalTaxId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    update(projectId: string, name: string, description?: string, logo?: string, url?: string, legalName?: string, legalCountry?: string, legalState?: string, legalCity?: string, legalAddress?: string, legalTaxId?: string): Promise<Models.Project>;
    /**
     * Delete Project
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    delete(projectId: string): Promise<{}>;
    /**
     * Update Project Authentication Duration
     *
     *
     * @param {string} projectId
     * @param {number} duration
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateAuthDuration(projectId: string, duration: number): Promise<Models.Project>;
    /**
     * Update Project users limit
     *
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateAuthLimit(projectId: string, limit: number): Promise<Models.Project>;
    /**
     * Update Project user sessions limit
     *
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateAuthSessionsLimit(projectId: string, limit: number): Promise<Models.Project>;
    /**
     * Update authentication password dictionary status. Use this endpoint to enable or disable the dicitonary check for user password
     *
     *
     * @param {string} projectId
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateAuthPasswordDictionary(projectId: string, enabled: boolean): Promise<Models.Project>;
    /**
     * Update authentication password history. Use this endpoint to set the number of password history to save and 0 to disable password history.
     *
     *
     * @param {string} projectId
     * @param {number} limit
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateAuthPasswordHistory(projectId: string, limit: number): Promise<Models.Project>;
    /**
     * Enable or disable checking user passwords for similarity with their personal data.
     *
     *
     * @param {string} projectId
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updatePersonalDataCheck(projectId: string, enabled: boolean): Promise<Models.Project>;
    /**
     * Update Project auth method status. Use this endpoint to enable or disable a given auth method for this project.
     *
     *
     * @param {string} projectId
     * @param {string} method
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateAuthStatus(projectId: string, method: string, status: boolean): Promise<Models.Project>;
    /**
     * List Domains
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    listDomains(projectId: string): Promise<Models.DomainList>;
    /**
     * Create Domain
     *
     *
     * @param {string} projectId
     * @param {string} domain
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createDomain(projectId: string, domain: string): Promise<Models.Domain>;
    /**
     * Get Domain
     *
     *
     * @param {string} projectId
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getDomain(projectId: string, domainId: string): Promise<Models.Domain>;
    /**
     * Delete Domain
     *
     *
     * @param {string} projectId
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteDomain(projectId: string, domainId: string): Promise<{}>;
    /**
     * Update Domain Verification Status
     *
     *
     * @param {string} projectId
     * @param {string} domainId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateDomainVerification(projectId: string, domainId: string): Promise<Models.Domain>;
    /**
     * List Keys
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    listKeys(projectId: string): Promise<Models.KeyList>;
    /**
     * Create Key
     *
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string[]} scopes
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createKey(projectId: string, name: string, scopes: string[], expire?: string): Promise<Models.Key>;
    /**
     * Get Key
     *
     *
     * @param {string} projectId
     * @param {string} keyId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getKey(projectId: string, keyId: string): Promise<Models.Key>;
    /**
     * Update Key
     *
     *
     * @param {string} projectId
     * @param {string} keyId
     * @param {string} name
     * @param {string[]} scopes
     * @param {string} expire
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateKey(projectId: string, keyId: string, name: string, scopes: string[], expire?: string): Promise<Models.Key>;
    /**
     * Delete Key
     *
     *
     * @param {string} projectId
     * @param {string} keyId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteKey(projectId: string, keyId: string): Promise<{}>;
    /**
     * Update Project OAuth2
     *
     *
     * @param {string} projectId
     * @param {string} provider
     * @param {string} appId
     * @param {string} secret
     * @param {boolean} enabled
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateOAuth2(projectId: string, provider: string, appId?: string, secret?: string, enabled?: boolean): Promise<Models.Project>;
    /**
     * List Platforms
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    listPlatforms(projectId: string): Promise<Models.PlatformList>;
    /**
     * Create Platform
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} name
     * @param {string} key
     * @param {string} store
     * @param {string} hostname
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createPlatform(projectId: string, type: string, name: string, key?: string, store?: string, hostname?: string): Promise<Models.Platform>;
    /**
     * Get Platform
     *
     *
     * @param {string} projectId
     * @param {string} platformId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getPlatform(projectId: string, platformId: string): Promise<Models.Platform>;
    /**
     * Update Platform
     *
     *
     * @param {string} projectId
     * @param {string} platformId
     * @param {string} name
     * @param {string} key
     * @param {string} store
     * @param {string} hostname
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updatePlatform(projectId: string, platformId: string, name: string, key?: string, store?: string, hostname?: string): Promise<Models.Platform>;
    /**
     * Delete Platform
     *
     *
     * @param {string} projectId
     * @param {string} platformId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deletePlatform(projectId: string, platformId: string): Promise<{}>;
    /**
     * Update service status
     *
     *
     * @param {string} projectId
     * @param {string} service
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateServiceStatus(projectId: string, service: string, status: boolean): Promise<Models.Project>;
    /**
     * Update all service status
     *
     *
     * @param {string} projectId
     * @param {boolean} status
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateServiceStatusAll(projectId: string, status: boolean): Promise<Models.Project>;
    /**
     * Update SMTP configuration
     *
     *
     * @param {string} projectId
     * @param {boolean} enabled
     * @param {string} sender
     * @param {string} host
     * @param {number} port
     * @param {string} username
     * @param {string} password
     * @param {string} secure
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateSmtpConfiguration(projectId: string, enabled: boolean, sender: string, host: string, port: number, username: string, password: string, secure?: string): Promise<Models.Project>;
    /**
     * Update Project Team
     *
     *
     * @param {string} projectId
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateTeam(projectId: string, teamId: string): Promise<Models.Project>;
    /**
     * Get custom email template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getEmailTemplate(projectId: string, type: string, locale: string): Promise<Models.EmailTemplate>;
    /**
     * Update custom email templates
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @param {string} senderName
     * @param {string} senderEmail
     * @param {string} subject
     * @param {string} message
     * @param {string} replyTo
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateEmailTemplate(projectId: string, type: string, locale: string, senderName: string, senderEmail: string, subject: string, message: string, replyTo?: string): Promise<Models.Project>;
    /**
     * Reset custom email template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteEmailTemplate(projectId: string, type: string, locale: string): Promise<Models.EmailTemplate>;
    /**
     * Get custom SMS template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getSmsTemplate(projectId: string, type: string, locale: string): Promise<Models.SmsTemplate>;
    /**
     * Update custom SMS template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @param {string} message
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateSmsTemplate(projectId: string, type: string, locale: string, message: string): Promise<Models.SmsTemplate>;
    /**
     * Reset custom SMS template
     *
     *
     * @param {string} projectId
     * @param {string} type
     * @param {string} locale
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteSmsTemplate(projectId: string, type: string, locale: string): Promise<Models.SmsTemplate>;
    /**
     * List Webhooks
     *
     *
     * @param {string} projectId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    listWebhooks(projectId: string): Promise<Models.WebhookList>;
    /**
     * Create Webhook
     *
     *
     * @param {string} projectId
     * @param {string} name
     * @param {string[]} events
     * @param {string} url
     * @param {boolean} security
     * @param {string} httpUser
     * @param {string} httpPass
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    createWebhook(projectId: string, name: string, events: string[], url: string, security: boolean, httpUser?: string, httpPass?: string): Promise<Models.Webhook>;
    /**
     * Get Webhook
     *
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    getWebhook(projectId: string, webhookId: string): Promise<Models.Webhook>;
    /**
     * Update Webhook
     *
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @param {string} name
     * @param {string[]} events
     * @param {string} url
     * @param {boolean} security
     * @param {string} httpUser
     * @param {string} httpPass
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateWebhook(projectId: string, webhookId: string, name: string, events: string[], url: string, security: boolean, httpUser?: string, httpPass?: string): Promise<Models.Webhook>;
    /**
     * Delete Webhook
     *
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    deleteWebhook(projectId: string, webhookId: string): Promise<{}>;
    /**
     * Update Webhook Signature Key
     *
     *
     * @param {string} projectId
     * @param {string} webhookId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    updateWebhookSignature(projectId: string, webhookId: string): Promise<Models.Webhook>;
}
