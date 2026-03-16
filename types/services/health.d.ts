import { Client } from '../client';
import type { Models } from '../models';
import { Name } from '../enums/name';
export declare class Health {
    client: Client;
    constructor(client: Client);
    /**
     * Check the Appwrite HTTP server is up and responsive.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    get(): Promise<Models.HealthStatus>;
    /**
     * Check the Appwrite Antivirus server is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthAntivirus>}
     */
    getAntivirus(): Promise<Models.HealthAntivirus>;
    /**
     * Check the Appwrite in-memory cache servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatusList>}
     */
    getCache(): Promise<Models.HealthStatusList>;
    /**
     * Get the SSL certificate for a domain
     *
     * @param {string} params.domain - string
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthCertificate>}
     */
    getCertificate(params?: {
        domain?: string;
    }): Promise<Models.HealthCertificate>;
    /**
     * Get the SSL certificate for a domain
     *
     * @param {string} domain - string
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthCertificate>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getCertificate(domain?: string): Promise<Models.HealthCertificate>;
    /**
     * Get console pausing health status. Monitors projects approaching the pause threshold to detect potential issues with console access tracking.
     *
     *
     * @param {number} params.threshold - Percentage threshold of projects approaching pause. When hit (equal or higher), endpoint returns server error. Default value is 10.
     * @param {number} params.inactivityDays - Number of days of inactivity before a project is paused. Should match the plan's projectInactivityDays setting. Default value is 7.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    getConsolePausing(params?: {
        threshold?: number;
        inactivityDays?: number;
    }): Promise<Models.HealthStatus>;
    /**
     * Get console pausing health status. Monitors projects approaching the pause threshold to detect potential issues with console access tracking.
     *
     *
     * @param {number} threshold - Percentage threshold of projects approaching pause. When hit (equal or higher), endpoint returns server error. Default value is 10.
     * @param {number} inactivityDays - Number of days of inactivity before a project is paused. Should match the plan's projectInactivityDays setting. Default value is 7.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getConsolePausing(threshold?: number, inactivityDays?: number): Promise<Models.HealthStatus>;
    /**
     * Check the Appwrite database servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatusList>}
     */
    getDB(): Promise<Models.HealthStatusList>;
    /**
     * Check the Appwrite pub-sub servers are up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatusList>}
     */
    getPubSub(): Promise<Models.HealthStatusList>;
    /**
     * Get the number of audit logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueAudits(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of audit logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueAudits(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get billing project aggregation queue.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueBillingProjectAggregation(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get billing project aggregation queue.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueBillingProjectAggregation(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get billing team aggregation queue.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueBillingTeamAggregation(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get billing team aggregation queue.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueBillingTeamAggregation(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of builds that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueBuilds(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of builds that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueBuilds(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the priority builds queue size.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 500.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueuePriorityBuilds(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the priority builds queue size.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 500.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueuePriorityBuilds(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueCertificates(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueCertificates(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {string} params.name - Queue name for which to check the queue size
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueDatabases(params?: {
        name?: string;
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {string} name - Queue name for which to check the queue size
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueDatabases(name?: string, threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueDeletes(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueDeletes(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Returns the amount of failed jobs in a given queue.
     *
     *
     * @param {Name} params.name - The name of the queue
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getFailedJobs(params: {
        name: Name;
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Returns the amount of failed jobs in a given queue.
     *
     *
     * @param {Name} name - The name of the queue
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getFailedJobs(name: Name, threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueFunctions(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueFunctions(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueLogs(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of logs that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueLogs(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of mails that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMails(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of mails that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMails(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of messages that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMessaging(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of messages that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMessaging(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueMigrations(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueMigrations(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get region manager queue.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 100.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueRegionManager(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get region manager queue.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 100.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueRegionManager(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueStatsResources(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of metrics that are waiting to be processed in the Appwrite stats resources queue.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueStatsResources(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueUsage(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueUsage(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get threats queue.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 100.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueThreats(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get threats queue.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 100.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueThreats(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} params.threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     */
    getQueueWebhooks(params?: {
        threshold?: number;
    }): Promise<Models.HealthQueue>;
    /**
     * Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.
     *
     * @param {number} threshold - Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthQueue>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getQueueWebhooks(threshold?: number): Promise<Models.HealthQueue>;
    /**
     * Check the Appwrite storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    getStorage(): Promise<Models.HealthStatus>;
    /**
     * Check the Appwrite local storage device is up and connection is successful.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthStatus>}
     */
    getStorageLocal(): Promise<Models.HealthStatus>;
    /**
     * Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.HealthTime>}
     */
    getTime(): Promise<Models.HealthTime>;
}
