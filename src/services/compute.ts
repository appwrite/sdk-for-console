import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Compute {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List all dedicated databases. Results support pagination.
     *
     * @param {string[]} params.queries - Array of query strings.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseList>}
     */
    listDatabases(params?: { queries?: string[] }): Promise<Models.DedicatedDatabaseList>;
    /**
     * List all dedicated databases. Results support pagination.
     *
     * @param {string[]} queries - Array of query strings.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDatabases(queries?: string[]): Promise<Models.DedicatedDatabaseList>;
    listDatabases(
        paramsOrFirst?: { queries?: string[] } | string[]    
    ): Promise<Models.DedicatedDatabaseList> {
        let params: { queries?: string[] };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[] };
        } else {
            params = {
                queries: paramsOrFirst as string[]            
            };
        }
        
        const queries = params.queries;


        const apiPath = '/compute/databases';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new dedicated database with the chosen engine and configuration. Status will be 'provisioning' until the database is ready.
     *
     * @param {string} params.databaseId - Database ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Database display name. Max length: 128 chars.
     * @param {string} params.database - Physical database/catalog name. Defaults to databaseId.
     * @param {string} params.engine - Database engine: postgres, mysql, mariadb, or mongodb.
     * @param {string} params.version - Database engine version. Defaults to latest for selected engine.
     * @param {string} params.region - Region identifier. Use one of the enabled region codes (e.g., fra, nyc, syd).
     * @param {string} params.type - Database type: shared (serverless) or dedicated (always-on).
     * @param {string} params.specification - Specification identifier.
     * @param {string} params.backend - Database backend provider: prisma, or edge.
     * @param {number} params.cpu - CPU in millicores (125-16000).
     * @param {number} params.memory - Memory in MB to allocate (128-65536).
     * @param {number} params.storage - Storage in GB to allocate (1-16384).
     * @param {string} params.storageClass - Storage class: ssd, nvme, or hdd.
     * @param {number} params.storageMaxGb - Maximum storage limit in GB. 0 uses system default.
     * @param {boolean} params.highAvailability - Enable high availability.
     * @param {number} params.highAvailabilityReplicaCount - Number of high availability replicas (0-5).
     * @param {string} params.highAvailabilitySyncMode - Replication sync mode preference. Allowed values: async, sync, quorum.
     * @param {number} params.networkMaxConnections - Maximum concurrent connections.
     * @param {number} params.networkIdleTimeoutSeconds - Connection idle timeout in seconds.
     * @param {string[]} params.networkIPAllowlist - IP addresses/CIDR ranges allowed to connect.
     * @param {number} params.idleTimeoutMinutes - Minutes of inactivity before container scales to zero.
     * @param {boolean} params.backupEnabled - Enable automatic backups.
     * @param {boolean} params.backupPitr - Enable point-in-time recovery.
     * @param {string} params.backupCron - Backup schedule in cron format.
     * @param {number} params.backupRetentionDays - Number of days to retain backups.
     * @param {number} params.pitrRetentionDays - Number of days to retain PITR data.
     * @param {boolean} params.storageAutoscaling - Enable automatic storage expansion when usage exceeds threshold.
     * @param {number} params.storageAutoscalingThresholdPercent - Storage usage percentage (50-95) that triggers automatic expansion.
     * @param {number} params.storageAutoscalingMaxGb - Maximum storage size in GB for autoscaling. 0 means no limit.
     * @param {boolean} params.metricsEnabled - Enable metrics collection.
     * @param {boolean} params.poolerEnabled - Enable connection pooler on provision.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createDatabase(params: { databaseId: string, name: string, database?: string, engine?: string, version?: string, region?: string, type?: string, specification?: string, backend?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, storageMaxGb?: number, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, metricsEnabled?: boolean, poolerEnabled?: boolean }): Promise<Models.DedicatedDatabase>;
    /**
     * Create a new dedicated database with the chosen engine and configuration. Status will be 'provisioning' until the database is ready.
     *
     * @param {string} databaseId - Database ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Database display name. Max length: 128 chars.
     * @param {string} database - Physical database/catalog name. Defaults to databaseId.
     * @param {string} engine - Database engine: postgres, mysql, mariadb, or mongodb.
     * @param {string} version - Database engine version. Defaults to latest for selected engine.
     * @param {string} region - Region identifier. Use one of the enabled region codes (e.g., fra, nyc, syd).
     * @param {string} type - Database type: shared (serverless) or dedicated (always-on).
     * @param {string} specification - Specification identifier.
     * @param {string} backend - Database backend provider: prisma, or edge.
     * @param {number} cpu - CPU in millicores (125-16000).
     * @param {number} memory - Memory in MB to allocate (128-65536).
     * @param {number} storage - Storage in GB to allocate (1-16384).
     * @param {string} storageClass - Storage class: ssd, nvme, or hdd.
     * @param {number} storageMaxGb - Maximum storage limit in GB. 0 uses system default.
     * @param {boolean} highAvailability - Enable high availability.
     * @param {number} highAvailabilityReplicaCount - Number of high availability replicas (0-5).
     * @param {string} highAvailabilitySyncMode - Replication sync mode preference. Allowed values: async, sync, quorum.
     * @param {number} networkMaxConnections - Maximum concurrent connections.
     * @param {number} networkIdleTimeoutSeconds - Connection idle timeout in seconds.
     * @param {string[]} networkIPAllowlist - IP addresses/CIDR ranges allowed to connect.
     * @param {number} idleTimeoutMinutes - Minutes of inactivity before container scales to zero.
     * @param {boolean} backupEnabled - Enable automatic backups.
     * @param {boolean} backupPitr - Enable point-in-time recovery.
     * @param {string} backupCron - Backup schedule in cron format.
     * @param {number} backupRetentionDays - Number of days to retain backups.
     * @param {number} pitrRetentionDays - Number of days to retain PITR data.
     * @param {boolean} storageAutoscaling - Enable automatic storage expansion when usage exceeds threshold.
     * @param {number} storageAutoscalingThresholdPercent - Storage usage percentage (50-95) that triggers automatic expansion.
     * @param {number} storageAutoscalingMaxGb - Maximum storage size in GB for autoscaling. 0 means no limit.
     * @param {boolean} metricsEnabled - Enable metrics collection.
     * @param {boolean} poolerEnabled - Enable connection pooler on provision.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabase(databaseId: string, name: string, database?: string, engine?: string, version?: string, region?: string, type?: string, specification?: string, backend?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, storageMaxGb?: number, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, metricsEnabled?: boolean, poolerEnabled?: boolean): Promise<Models.DedicatedDatabase>;
    createDatabase(
        paramsOrFirst: { databaseId: string, name: string, database?: string, engine?: string, version?: string, region?: string, type?: string, specification?: string, backend?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, storageMaxGb?: number, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, metricsEnabled?: boolean, poolerEnabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (string)?, (number)?, (boolean)?, (number)?, (string)?, (number)?, (number)?, (string[])?, (number)?, (boolean)?, (boolean)?, (string)?, (number)?, (number)?, (boolean)?, (number)?, (number)?, (boolean)?, (boolean)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, name: string, database?: string, engine?: string, version?: string, region?: string, type?: string, specification?: string, backend?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, storageMaxGb?: number, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, metricsEnabled?: boolean, poolerEnabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, name: string, database?: string, engine?: string, version?: string, region?: string, type?: string, specification?: string, backend?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, storageMaxGb?: number, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, metricsEnabled?: boolean, poolerEnabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                database: rest[1] as string,
                engine: rest[2] as string,
                version: rest[3] as string,
                region: rest[4] as string,
                type: rest[5] as string,
                specification: rest[6] as string,
                backend: rest[7] as string,
                cpu: rest[8] as number,
                memory: rest[9] as number,
                storage: rest[10] as number,
                storageClass: rest[11] as string,
                storageMaxGb: rest[12] as number,
                highAvailability: rest[13] as boolean,
                highAvailabilityReplicaCount: rest[14] as number,
                highAvailabilitySyncMode: rest[15] as string,
                networkMaxConnections: rest[16] as number,
                networkIdleTimeoutSeconds: rest[17] as number,
                networkIPAllowlist: rest[18] as string[],
                idleTimeoutMinutes: rest[19] as number,
                backupEnabled: rest[20] as boolean,
                backupPitr: rest[21] as boolean,
                backupCron: rest[22] as string,
                backupRetentionDays: rest[23] as number,
                pitrRetentionDays: rest[24] as number,
                storageAutoscaling: rest[25] as boolean,
                storageAutoscalingThresholdPercent: rest[26] as number,
                storageAutoscalingMaxGb: rest[27] as number,
                metricsEnabled: rest[28] as boolean,
                poolerEnabled: rest[29] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const name = params.name;
        const database = params.database;
        const engine = params.engine;
        const version = params.version;
        const region = params.region;
        const type = params.type;
        const specification = params.specification;
        const backend = params.backend;
        const cpu = params.cpu;
        const memory = params.memory;
        const storage = params.storage;
        const storageClass = params.storageClass;
        const storageMaxGb = params.storageMaxGb;
        const highAvailability = params.highAvailability;
        const highAvailabilityReplicaCount = params.highAvailabilityReplicaCount;
        const highAvailabilitySyncMode = params.highAvailabilitySyncMode;
        const networkMaxConnections = params.networkMaxConnections;
        const networkIdleTimeoutSeconds = params.networkIdleTimeoutSeconds;
        const networkIPAllowlist = params.networkIPAllowlist;
        const idleTimeoutMinutes = params.idleTimeoutMinutes;
        const backupEnabled = params.backupEnabled;
        const backupPitr = params.backupPitr;
        const backupCron = params.backupCron;
        const backupRetentionDays = params.backupRetentionDays;
        const pitrRetentionDays = params.pitrRetentionDays;
        const storageAutoscaling = params.storageAutoscaling;
        const storageAutoscalingThresholdPercent = params.storageAutoscalingThresholdPercent;
        const storageAutoscalingMaxGb = params.storageAutoscalingMaxGb;
        const metricsEnabled = params.metricsEnabled;
        const poolerEnabled = params.poolerEnabled;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/compute/databases';
        const payload: Payload = {};
        if (typeof databaseId !== 'undefined') {
            payload['databaseId'] = databaseId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof database !== 'undefined') {
            payload['database'] = database;
        }
        if (typeof engine !== 'undefined') {
            payload['engine'] = engine;
        }
        if (typeof version !== 'undefined') {
            payload['version'] = version;
        }
        if (typeof region !== 'undefined') {
            payload['region'] = region;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
        }
        if (typeof backend !== 'undefined') {
            payload['backend'] = backend;
        }
        if (typeof cpu !== 'undefined') {
            payload['cpu'] = cpu;
        }
        if (typeof memory !== 'undefined') {
            payload['memory'] = memory;
        }
        if (typeof storage !== 'undefined') {
            payload['storage'] = storage;
        }
        if (typeof storageClass !== 'undefined') {
            payload['storageClass'] = storageClass;
        }
        if (typeof storageMaxGb !== 'undefined') {
            payload['storageMaxGb'] = storageMaxGb;
        }
        if (typeof highAvailability !== 'undefined') {
            payload['highAvailability'] = highAvailability;
        }
        if (typeof highAvailabilityReplicaCount !== 'undefined') {
            payload['highAvailabilityReplicaCount'] = highAvailabilityReplicaCount;
        }
        if (typeof highAvailabilitySyncMode !== 'undefined') {
            payload['highAvailabilitySyncMode'] = highAvailabilitySyncMode;
        }
        if (typeof networkMaxConnections !== 'undefined') {
            payload['networkMaxConnections'] = networkMaxConnections;
        }
        if (typeof networkIdleTimeoutSeconds !== 'undefined') {
            payload['networkIdleTimeoutSeconds'] = networkIdleTimeoutSeconds;
        }
        if (typeof networkIPAllowlist !== 'undefined') {
            payload['networkIPAllowlist'] = networkIPAllowlist;
        }
        if (typeof idleTimeoutMinutes !== 'undefined') {
            payload['idleTimeoutMinutes'] = idleTimeoutMinutes;
        }
        if (typeof backupEnabled !== 'undefined') {
            payload['backupEnabled'] = backupEnabled;
        }
        if (typeof backupPitr !== 'undefined') {
            payload['backupPitr'] = backupPitr;
        }
        if (typeof backupCron !== 'undefined') {
            payload['backupCron'] = backupCron;
        }
        if (typeof backupRetentionDays !== 'undefined') {
            payload['backupRetentionDays'] = backupRetentionDays;
        }
        if (typeof pitrRetentionDays !== 'undefined') {
            payload['pitrRetentionDays'] = pitrRetentionDays;
        }
        if (typeof storageAutoscaling !== 'undefined') {
            payload['storageAutoscaling'] = storageAutoscaling;
        }
        if (typeof storageAutoscalingThresholdPercent !== 'undefined') {
            payload['storageAutoscalingThresholdPercent'] = storageAutoscalingThresholdPercent;
        }
        if (typeof storageAutoscalingMaxGb !== 'undefined') {
            payload['storageAutoscalingMaxGb'] = storageAutoscalingMaxGb;
        }
        if (typeof metricsEnabled !== 'undefined') {
            payload['metricsEnabled'] = metricsEnabled;
        }
        if (typeof poolerEnabled !== 'undefined') {
            payload['poolerEnabled'] = poolerEnabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List the dedicated database specifications available on the current plan. Each specification reports its resource limits, pricing, and whether it is enabled for the organization.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSpecificationList>}
     */
    listDatabaseSpecifications(): Promise<Models.DedicatedDatabaseSpecificationList> {

        const apiPath = '/compute/databases/specifications';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get a dedicated database by its unique ID. Returns the database configuration and current status.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    getDatabase(params: { databaseId: string }): Promise<Models.DedicatedDatabase>;
    /**
     * Get a dedicated database by its unique ID. Returns the database configuration and current status.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabase(databaseId: string): Promise<Models.DedicatedDatabase>;
    getDatabase(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update a dedicated database configuration. All changes are applied with zero downtime. Resource changes (cpu, memory) are handled via rolling cutover. Storage expansion is done online. All other settings are applied in-place.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.name - Database display name.
     * @param {string} params.status - Database status. Allowed values: ready, paused, inactive. Set to "paused" to pause, "ready" to resume, or "inactive" to spin down a shared database.
     * @param {string} params.specification - Specification. Changes cpu, memory, and type based on specification config.
     * @param {number} params.cpu - CPU cores to allocate (125-16000).
     * @param {number} params.memory - Memory in MB to allocate (128-65536).
     * @param {number} params.storage - Storage in GB to allocate (1-16384).
     * @param {string} params.storageClass - Storage class. Allowed values: ssd, nvme, hdd.
     * @param {boolean} params.highAvailability - Enable high availability.
     * @param {number} params.highAvailabilityReplicaCount - Number of high availability replicas (0-5).
     * @param {string} params.highAvailabilitySyncMode - Replication sync mode preference. Allowed values: async, sync, quorum.
     * @param {number} params.networkMaxConnections - Maximum concurrent connections.
     * @param {number} params.networkIdleTimeoutSeconds - Connection idle timeout in seconds (60-86400).
     * @param {string[]} params.networkIPAllowlist - IP addresses/CIDR ranges allowed to connect.
     * @param {number} params.idleTimeoutMinutes - Minutes before container scales to zero.
     * @param {boolean} params.backupEnabled - Enable automatic backups.
     * @param {boolean} params.backupPitr - Enable point-in-time recovery.
     * @param {string} params.backupCron - Backup schedule in cron format.
     * @param {number} params.backupRetentionDays - Days to retain backups.
     * @param {number} params.pitrRetentionDays - Days to retain PITR data.
     * @param {boolean} params.storageAutoscaling - Enable automatic storage expansion when usage exceeds threshold.
     * @param {number} params.storageAutoscalingThresholdPercent - Storage usage percentage (50-95) that triggers automatic expansion.
     * @param {number} params.storageAutoscalingMaxGb - Maximum storage size in GB for autoscaling. 0 means no limit.
     * @param {boolean} params.poolerEnabled - Attach or detach the connection pooler sidecar. Set to true to add the sidecar (no-op if already attached) or false to remove it.
     * @param {boolean} params.metricsEnabled - Enable or disable the metrics-agent sidecar.
     * @param {number} params.metricsTraceSampleRate - Fraction of queries to trace (0.0–1.0). Forwarded to the sidecar.
     * @param {number} params.metricsSlowQueryLogThresholdMs - Threshold in ms above which queries are logged as slow. Forwarded to the sidecar.
     * @param {boolean} params.sqlApiEnabled - Enable the SQL API sidecar for this database.
     * @param {string[]} params.sqlApiAllowedStatements - Statement types the SQL API accepts. Allowed values: SELECT, INSERT, UPDATE, DELETE.
     * @param {number} params.sqlApiMaxRows - Maximum rows returned per SQL API execution (1-1000000).
     * @param {number} params.sqlApiMaxBytes - Maximum serialised SQL API result payload in bytes (1024-104857600).
     * @param {number} params.sqlApiTimeoutSeconds - Per-call SQL API execution timeout in seconds (1-300).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    updateDatabase(params: { databaseId: string, name?: string, status?: string, specification?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, poolerEnabled?: boolean, metricsEnabled?: boolean, metricsTraceSampleRate?: number, metricsSlowQueryLogThresholdMs?: number, sqlApiEnabled?: boolean, sqlApiAllowedStatements?: string[], sqlApiMaxRows?: number, sqlApiMaxBytes?: number, sqlApiTimeoutSeconds?: number }): Promise<Models.DedicatedDatabase>;
    /**
     * Update a dedicated database configuration. All changes are applied with zero downtime. Resource changes (cpu, memory) are handled via rolling cutover. Storage expansion is done online. All other settings are applied in-place.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} name - Database display name.
     * @param {string} status - Database status. Allowed values: ready, paused, inactive. Set to "paused" to pause, "ready" to resume, or "inactive" to spin down a shared database.
     * @param {string} specification - Specification. Changes cpu, memory, and type based on specification config.
     * @param {number} cpu - CPU cores to allocate (125-16000).
     * @param {number} memory - Memory in MB to allocate (128-65536).
     * @param {number} storage - Storage in GB to allocate (1-16384).
     * @param {string} storageClass - Storage class. Allowed values: ssd, nvme, hdd.
     * @param {boolean} highAvailability - Enable high availability.
     * @param {number} highAvailabilityReplicaCount - Number of high availability replicas (0-5).
     * @param {string} highAvailabilitySyncMode - Replication sync mode preference. Allowed values: async, sync, quorum.
     * @param {number} networkMaxConnections - Maximum concurrent connections.
     * @param {number} networkIdleTimeoutSeconds - Connection idle timeout in seconds (60-86400).
     * @param {string[]} networkIPAllowlist - IP addresses/CIDR ranges allowed to connect.
     * @param {number} idleTimeoutMinutes - Minutes before container scales to zero.
     * @param {boolean} backupEnabled - Enable automatic backups.
     * @param {boolean} backupPitr - Enable point-in-time recovery.
     * @param {string} backupCron - Backup schedule in cron format.
     * @param {number} backupRetentionDays - Days to retain backups.
     * @param {number} pitrRetentionDays - Days to retain PITR data.
     * @param {boolean} storageAutoscaling - Enable automatic storage expansion when usage exceeds threshold.
     * @param {number} storageAutoscalingThresholdPercent - Storage usage percentage (50-95) that triggers automatic expansion.
     * @param {number} storageAutoscalingMaxGb - Maximum storage size in GB for autoscaling. 0 means no limit.
     * @param {boolean} poolerEnabled - Attach or detach the connection pooler sidecar. Set to true to add the sidecar (no-op if already attached) or false to remove it.
     * @param {boolean} metricsEnabled - Enable or disable the metrics-agent sidecar.
     * @param {number} metricsTraceSampleRate - Fraction of queries to trace (0.0–1.0). Forwarded to the sidecar.
     * @param {number} metricsSlowQueryLogThresholdMs - Threshold in ms above which queries are logged as slow. Forwarded to the sidecar.
     * @param {boolean} sqlApiEnabled - Enable the SQL API sidecar for this database.
     * @param {string[]} sqlApiAllowedStatements - Statement types the SQL API accepts. Allowed values: SELECT, INSERT, UPDATE, DELETE.
     * @param {number} sqlApiMaxRows - Maximum rows returned per SQL API execution (1-1000000).
     * @param {number} sqlApiMaxBytes - Maximum serialised SQL API result payload in bytes (1024-104857600).
     * @param {number} sqlApiTimeoutSeconds - Per-call SQL API execution timeout in seconds (1-300).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatabase(databaseId: string, name?: string, status?: string, specification?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, poolerEnabled?: boolean, metricsEnabled?: boolean, metricsTraceSampleRate?: number, metricsSlowQueryLogThresholdMs?: number, sqlApiEnabled?: boolean, sqlApiAllowedStatements?: string[], sqlApiMaxRows?: number, sqlApiMaxBytes?: number, sqlApiTimeoutSeconds?: number): Promise<Models.DedicatedDatabase>;
    updateDatabase(
        paramsOrFirst: { databaseId: string, name?: string, status?: string, specification?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, poolerEnabled?: boolean, metricsEnabled?: boolean, metricsTraceSampleRate?: number, metricsSlowQueryLogThresholdMs?: number, sqlApiEnabled?: boolean, sqlApiAllowedStatements?: string[], sqlApiMaxRows?: number, sqlApiMaxBytes?: number, sqlApiTimeoutSeconds?: number } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (number)?, (number)?, (string)?, (boolean)?, (number)?, (string)?, (number)?, (number)?, (string[])?, (number)?, (boolean)?, (boolean)?, (string)?, (number)?, (number)?, (boolean)?, (number)?, (number)?, (boolean)?, (boolean)?, (number)?, (number)?, (boolean)?, (string[])?, (number)?, (number)?, (number)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, name?: string, status?: string, specification?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, poolerEnabled?: boolean, metricsEnabled?: boolean, metricsTraceSampleRate?: number, metricsSlowQueryLogThresholdMs?: number, sqlApiEnabled?: boolean, sqlApiAllowedStatements?: string[], sqlApiMaxRows?: number, sqlApiMaxBytes?: number, sqlApiTimeoutSeconds?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, name?: string, status?: string, specification?: string, cpu?: number, memory?: number, storage?: number, storageClass?: string, highAvailability?: boolean, highAvailabilityReplicaCount?: number, highAvailabilitySyncMode?: string, networkMaxConnections?: number, networkIdleTimeoutSeconds?: number, networkIPAllowlist?: string[], idleTimeoutMinutes?: number, backupEnabled?: boolean, backupPitr?: boolean, backupCron?: string, backupRetentionDays?: number, pitrRetentionDays?: number, storageAutoscaling?: boolean, storageAutoscalingThresholdPercent?: number, storageAutoscalingMaxGb?: number, poolerEnabled?: boolean, metricsEnabled?: boolean, metricsTraceSampleRate?: number, metricsSlowQueryLogThresholdMs?: number, sqlApiEnabled?: boolean, sqlApiAllowedStatements?: string[], sqlApiMaxRows?: number, sqlApiMaxBytes?: number, sqlApiTimeoutSeconds?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string,
                status: rest[1] as string,
                specification: rest[2] as string,
                cpu: rest[3] as number,
                memory: rest[4] as number,
                storage: rest[5] as number,
                storageClass: rest[6] as string,
                highAvailability: rest[7] as boolean,
                highAvailabilityReplicaCount: rest[8] as number,
                highAvailabilitySyncMode: rest[9] as string,
                networkMaxConnections: rest[10] as number,
                networkIdleTimeoutSeconds: rest[11] as number,
                networkIPAllowlist: rest[12] as string[],
                idleTimeoutMinutes: rest[13] as number,
                backupEnabled: rest[14] as boolean,
                backupPitr: rest[15] as boolean,
                backupCron: rest[16] as string,
                backupRetentionDays: rest[17] as number,
                pitrRetentionDays: rest[18] as number,
                storageAutoscaling: rest[19] as boolean,
                storageAutoscalingThresholdPercent: rest[20] as number,
                storageAutoscalingMaxGb: rest[21] as number,
                poolerEnabled: rest[22] as boolean,
                metricsEnabled: rest[23] as boolean,
                metricsTraceSampleRate: rest[24] as number,
                metricsSlowQueryLogThresholdMs: rest[25] as number,
                sqlApiEnabled: rest[26] as boolean,
                sqlApiAllowedStatements: rest[27] as string[],
                sqlApiMaxRows: rest[28] as number,
                sqlApiMaxBytes: rest[29] as number,
                sqlApiTimeoutSeconds: rest[30] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const name = params.name;
        const status = params.status;
        const specification = params.specification;
        const cpu = params.cpu;
        const memory = params.memory;
        const storage = params.storage;
        const storageClass = params.storageClass;
        const highAvailability = params.highAvailability;
        const highAvailabilityReplicaCount = params.highAvailabilityReplicaCount;
        const highAvailabilitySyncMode = params.highAvailabilitySyncMode;
        const networkMaxConnections = params.networkMaxConnections;
        const networkIdleTimeoutSeconds = params.networkIdleTimeoutSeconds;
        const networkIPAllowlist = params.networkIPAllowlist;
        const idleTimeoutMinutes = params.idleTimeoutMinutes;
        const backupEnabled = params.backupEnabled;
        const backupPitr = params.backupPitr;
        const backupCron = params.backupCron;
        const backupRetentionDays = params.backupRetentionDays;
        const pitrRetentionDays = params.pitrRetentionDays;
        const storageAutoscaling = params.storageAutoscaling;
        const storageAutoscalingThresholdPercent = params.storageAutoscalingThresholdPercent;
        const storageAutoscalingMaxGb = params.storageAutoscalingMaxGb;
        const poolerEnabled = params.poolerEnabled;
        const metricsEnabled = params.metricsEnabled;
        const metricsTraceSampleRate = params.metricsTraceSampleRate;
        const metricsSlowQueryLogThresholdMs = params.metricsSlowQueryLogThresholdMs;
        const sqlApiEnabled = params.sqlApiEnabled;
        const sqlApiAllowedStatements = params.sqlApiAllowedStatements;
        const sqlApiMaxRows = params.sqlApiMaxRows;
        const sqlApiMaxBytes = params.sqlApiMaxBytes;
        const sqlApiTimeoutSeconds = params.sqlApiTimeoutSeconds;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
        }
        if (typeof cpu !== 'undefined') {
            payload['cpu'] = cpu;
        }
        if (typeof memory !== 'undefined') {
            payload['memory'] = memory;
        }
        if (typeof storage !== 'undefined') {
            payload['storage'] = storage;
        }
        if (typeof storageClass !== 'undefined') {
            payload['storageClass'] = storageClass;
        }
        if (typeof highAvailability !== 'undefined') {
            payload['highAvailability'] = highAvailability;
        }
        if (typeof highAvailabilityReplicaCount !== 'undefined') {
            payload['highAvailabilityReplicaCount'] = highAvailabilityReplicaCount;
        }
        if (typeof highAvailabilitySyncMode !== 'undefined') {
            payload['highAvailabilitySyncMode'] = highAvailabilitySyncMode;
        }
        if (typeof networkMaxConnections !== 'undefined') {
            payload['networkMaxConnections'] = networkMaxConnections;
        }
        if (typeof networkIdleTimeoutSeconds !== 'undefined') {
            payload['networkIdleTimeoutSeconds'] = networkIdleTimeoutSeconds;
        }
        if (typeof networkIPAllowlist !== 'undefined') {
            payload['networkIPAllowlist'] = networkIPAllowlist;
        }
        if (typeof idleTimeoutMinutes !== 'undefined') {
            payload['idleTimeoutMinutes'] = idleTimeoutMinutes;
        }
        if (typeof backupEnabled !== 'undefined') {
            payload['backupEnabled'] = backupEnabled;
        }
        if (typeof backupPitr !== 'undefined') {
            payload['backupPitr'] = backupPitr;
        }
        if (typeof backupCron !== 'undefined') {
            payload['backupCron'] = backupCron;
        }
        if (typeof backupRetentionDays !== 'undefined') {
            payload['backupRetentionDays'] = backupRetentionDays;
        }
        if (typeof pitrRetentionDays !== 'undefined') {
            payload['pitrRetentionDays'] = pitrRetentionDays;
        }
        if (typeof storageAutoscaling !== 'undefined') {
            payload['storageAutoscaling'] = storageAutoscaling;
        }
        if (typeof storageAutoscalingThresholdPercent !== 'undefined') {
            payload['storageAutoscalingThresholdPercent'] = storageAutoscalingThresholdPercent;
        }
        if (typeof storageAutoscalingMaxGb !== 'undefined') {
            payload['storageAutoscalingMaxGb'] = storageAutoscalingMaxGb;
        }
        if (typeof poolerEnabled !== 'undefined') {
            payload['poolerEnabled'] = poolerEnabled;
        }
        if (typeof metricsEnabled !== 'undefined') {
            payload['metricsEnabled'] = metricsEnabled;
        }
        if (typeof metricsTraceSampleRate !== 'undefined') {
            payload['metricsTraceSampleRate'] = metricsTraceSampleRate;
        }
        if (typeof metricsSlowQueryLogThresholdMs !== 'undefined') {
            payload['metricsSlowQueryLogThresholdMs'] = metricsSlowQueryLogThresholdMs;
        }
        if (typeof sqlApiEnabled !== 'undefined') {
            payload['sqlApiEnabled'] = sqlApiEnabled;
        }
        if (typeof sqlApiAllowedStatements !== 'undefined') {
            payload['sqlApiAllowedStatements'] = sqlApiAllowedStatements;
        }
        if (typeof sqlApiMaxRows !== 'undefined') {
            payload['sqlApiMaxRows'] = sqlApiMaxRows;
        }
        if (typeof sqlApiMaxBytes !== 'undefined') {
            payload['sqlApiMaxBytes'] = sqlApiMaxBytes;
        }
        if (typeof sqlApiTimeoutSeconds !== 'undefined') {
            payload['sqlApiTimeoutSeconds'] = sqlApiTimeoutSeconds;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a dedicated database. This action is irreversible. The database status will be set to 'deleting' and all resources will be cleaned up.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDatabase(params: { databaseId: string }): Promise<{}>;
    /**
     * Delete a dedicated database. This action is irreversible. The database status will be set to 'deleting' and all resources will be cleaned up.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDatabase(databaseId: string): Promise<{}>;
    deleteDatabase(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<{}> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List all backups for a dedicated database. Results can be filtered by status and type.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, type, databaseId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackupList>}
     */
    listDatabaseBackups(params: { databaseId: string, queries?: string[] }): Promise<Models.DedicatedDatabaseBackupList>;
    /**
     * List all backups for a dedicated database. Results can be filtered by status and type.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, type, databaseId
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackupList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDatabaseBackups(databaseId: string, queries?: string[]): Promise<Models.DedicatedDatabaseBackupList>;
    listDatabaseBackups(
        paramsOrFirst: { databaseId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.DedicatedDatabaseBackupList> {
        let params: { databaseId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const queries = params.queries;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/backups'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a manual backup of a dedicated database. The backup will be created asynchronously and its status can be checked via the get backup endpoint.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.type - Backup type: full or incremental.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackup>}
     */
    createDatabaseBackup(params: { databaseId: string, type?: string }): Promise<Models.DedicatedDatabaseBackup>;
    /**
     * Create a manual backup of a dedicated database. The backup will be created asynchronously and its status can be checked via the get backup endpoint.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} type - Backup type: full or incremental.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseBackup(databaseId: string, type?: string): Promise<Models.DedicatedDatabaseBackup>;
    createDatabaseBackup(
        paramsOrFirst: { databaseId: string, type?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabaseBackup> {
        let params: { databaseId: string, type?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, type?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                type: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const type = params.type;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/backups'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *     List scheduled backup policies for a dedicated database.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     */
    listDatabaseBackupPolicies(params: { databaseId: string, queries?: string[] }): Promise<Models.BackupPolicyList>;
    /**
     *     List scheduled backup policies for a dedicated database.
     *
     * @param {string} databaseId - Database ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicyList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDatabaseBackupPolicies(databaseId: string, queries?: string[]): Promise<Models.BackupPolicyList>;
    listDatabaseBackupPolicies(
        paramsOrFirst: { databaseId: string, queries?: string[] } | string,
        ...rest: [(string[])?]    
    ): Promise<Models.BackupPolicyList> {
        let params: { databaseId: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, queries?: string[] };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                queries: rest[0] as string[]            
            };
        }
        
        const databaseId = params.databaseId;
        const queries = params.queries;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/backups/policies'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     *     Create a scheduled backup policy for a dedicated database.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Policy name. Max length: 128 chars.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {number} params.retention - Days to keep backups before deletion.
     * @param {string} params.type - Backup type: full or incremental.
     * @param {boolean} params.enabled - Is policy enabled? When disabled, no backups will be taken.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     */
    createDatabaseBackupPolicy(params: { databaseId: string, policyId: string, name: string, schedule: string, retention: number, type?: string, enabled?: boolean }): Promise<Models.BackupPolicy>;
    /**
     *     Create a scheduled backup policy for a dedicated database.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} policyId - Policy ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Policy name. Max length: 128 chars.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {number} retention - Days to keep backups before deletion.
     * @param {string} type - Backup type: full or incremental.
     * @param {boolean} enabled - Is policy enabled? When disabled, no backups will be taken.
     * @throws {AppwriteException}
     * @returns {Promise<Models.BackupPolicy>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseBackupPolicy(databaseId: string, policyId: string, name: string, schedule: string, retention: number, type?: string, enabled?: boolean): Promise<Models.BackupPolicy>;
    createDatabaseBackupPolicy(
        paramsOrFirst: { databaseId: string, policyId: string, name: string, schedule: string, retention: number, type?: string, enabled?: boolean } | string,
        ...rest: [(string)?, (string)?, (string)?, (number)?, (string)?, (boolean)?]    
    ): Promise<Models.BackupPolicy> {
        let params: { databaseId: string, policyId: string, name: string, schedule: string, retention: number, type?: string, enabled?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, policyId: string, name: string, schedule: string, retention: number, type?: string, enabled?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                policyId: rest[0] as string,
                name: rest[1] as string,
                schedule: rest[2] as string,
                retention: rest[3] as number,
                type: rest[4] as string,
                enabled: rest[5] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const policyId = params.policyId;
        const name = params.name;
        const schedule = params.schedule;
        const retention = params.retention;
        const type = params.type;
        const enabled = params.enabled;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof policyId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "policyId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof schedule === 'undefined') {
            throw new AppwriteException('Missing required parameter: "schedule"');
        }
        if (typeof retention === 'undefined') {
            throw new AppwriteException('Missing required parameter: "retention"');
        }

        const apiPath = '/compute/databases/{databaseId}/backups/policies'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof policyId !== 'undefined') {
            payload['policyId'] = policyId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof retention !== 'undefined') {
            payload['retention'] = retention;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Configure off-cluster backup storage for a dedicated database. Supports S3, GCS, and Azure Blob Storage destinations. Backups will be stored to the configured destination in addition to on-cluster storage.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.provider - Storage provider for off-cluster backups. Allowed values: s3 (Amazon S3 or S3-compatible), gcs (Google Cloud Storage), azure (Azure Blob Storage).
     * @param {string} params.bucket - Storage bucket or container name.
     * @param {string} params.accessKey - Access key or client ID for authentication.
     * @param {string} params.secretKey - Secret key or service account JSON for authentication.
     * @param {string} params.region - Storage region.
     * @param {string} params.prefix - Object key prefix for backups.
     * @param {string} params.endpoint - Custom endpoint for S3-compatible storage (e.g. MinIO).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackupStorage>}
     */
    updateDatabaseBackupStorage(params: { databaseId: string, provider: string, bucket: string, accessKey: string, secretKey: string, region?: string, prefix?: string, endpoint?: string }): Promise<Models.DedicatedDatabaseBackupStorage>;
    /**
     * Configure off-cluster backup storage for a dedicated database. Supports S3, GCS, and Azure Blob Storage destinations. Backups will be stored to the configured destination in addition to on-cluster storage.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} provider - Storage provider for off-cluster backups. Allowed values: s3 (Amazon S3 or S3-compatible), gcs (Google Cloud Storage), azure (Azure Blob Storage).
     * @param {string} bucket - Storage bucket or container name.
     * @param {string} accessKey - Access key or client ID for authentication.
     * @param {string} secretKey - Secret key or service account JSON for authentication.
     * @param {string} region - Storage region.
     * @param {string} prefix - Object key prefix for backups.
     * @param {string} endpoint - Custom endpoint for S3-compatible storage (e.g. MinIO).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackupStorage>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatabaseBackupStorage(databaseId: string, provider: string, bucket: string, accessKey: string, secretKey: string, region?: string, prefix?: string, endpoint?: string): Promise<Models.DedicatedDatabaseBackupStorage>;
    updateDatabaseBackupStorage(
        paramsOrFirst: { databaseId: string, provider: string, bucket: string, accessKey: string, secretKey: string, region?: string, prefix?: string, endpoint?: string } | string,
        ...rest: [(string)?, (string)?, (string)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.DedicatedDatabaseBackupStorage> {
        let params: { databaseId: string, provider: string, bucket: string, accessKey: string, secretKey: string, region?: string, prefix?: string, endpoint?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, provider: string, bucket: string, accessKey: string, secretKey: string, region?: string, prefix?: string, endpoint?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                provider: rest[0] as string,
                bucket: rest[1] as string,
                accessKey: rest[2] as string,
                secretKey: rest[3] as string,
                region: rest[4] as string,
                prefix: rest[5] as string,
                endpoint: rest[6] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const provider = params.provider;
        const bucket = params.bucket;
        const accessKey = params.accessKey;
        const secretKey = params.secretKey;
        const region = params.region;
        const prefix = params.prefix;
        const endpoint = params.endpoint;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof provider === 'undefined') {
            throw new AppwriteException('Missing required parameter: "provider"');
        }
        if (typeof bucket === 'undefined') {
            throw new AppwriteException('Missing required parameter: "bucket"');
        }
        if (typeof accessKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "accessKey"');
        }
        if (typeof secretKey === 'undefined') {
            throw new AppwriteException('Missing required parameter: "secretKey"');
        }

        const apiPath = '/compute/databases/{databaseId}/backups/storage'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof provider !== 'undefined') {
            payload['provider'] = provider;
        }
        if (typeof bucket !== 'undefined') {
            payload['bucket'] = bucket;
        }
        if (typeof region !== 'undefined') {
            payload['region'] = region;
        }
        if (typeof prefix !== 'undefined') {
            payload['prefix'] = prefix;
        }
        if (typeof endpoint !== 'undefined') {
            payload['endpoint'] = endpoint;
        }
        if (typeof accessKey !== 'undefined') {
            payload['accessKey'] = accessKey;
        }
        if (typeof secretKey !== 'undefined') {
            payload['secretKey'] = secretKey;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'put',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get details of a specific database backup including its status, size, and timestamps.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.backupId - Backup ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackup>}
     */
    getDatabaseBackup(params: { databaseId: string, backupId: string }): Promise<Models.DedicatedDatabaseBackup>;
    /**
     * Get details of a specific database backup including its status, size, and timestamps.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} backupId - Backup ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBackup>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabaseBackup(databaseId: string, backupId: string): Promise<Models.DedicatedDatabaseBackup>;
    getDatabaseBackup(
        paramsOrFirst: { databaseId: string, backupId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabaseBackup> {
        let params: { databaseId: string, backupId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, backupId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                backupId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const backupId = params.backupId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof backupId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "backupId"');
        }

        const apiPath = '/compute/databases/{databaseId}/backups/{backupId}'.replace('{databaseId}', databaseId).replace('{backupId}', backupId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a database backup. This will permanently remove the backup from storage and cannot be undone.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.backupId - Backup ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDatabaseBackup(params: { databaseId: string, backupId: string }): Promise<{}>;
    /**
     * Delete a database backup. This will permanently remove the backup from storage and cannot be undone.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} backupId - Backup ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDatabaseBackup(databaseId: string, backupId: string): Promise<{}>;
    deleteDatabaseBackup(
        paramsOrFirst: { databaseId: string, backupId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, backupId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, backupId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                backupId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const backupId = params.backupId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof backupId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "backupId"');
        }

        const apiPath = '/compute/databases/{databaseId}/backups/{backupId}'.replace('{databaseId}', databaseId).replace('{backupId}', backupId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List all ephemeral branches for a dedicated database. Returns branch metadata including ID, name, namespace, and expiration time.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBranchList>}
     */
    listDatabaseBranches(params: { databaseId: string }): Promise<Models.DedicatedDatabaseBranchList>;
    /**
     * List all ephemeral branches for a dedicated database. Returns branch metadata including ID, name, namespace, and expiration time.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseBranchList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDatabaseBranches(databaseId: string): Promise<Models.DedicatedDatabaseBranchList>;
    listDatabaseBranches(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabaseBranchList> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/branches'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create an ephemeral database branch from the primary via PVC snapshot. The branch is a full copy of the database at the current point in time, useful for testing schema migrations or running experiments without affecting production data. Branches expire after the configured TTL (default 24 hours). The branch is created asynchronously.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.branchId - Branch ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {number} params.ttl - Time-to-live in seconds before the branch expires. Min 300 (5 min), max 604800 (7 days). Default: 86400 (24h).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createDatabaseBranch(params: { databaseId: string, branchId?: string, ttl?: number }): Promise<Models.DedicatedDatabase>;
    /**
     * Create an ephemeral database branch from the primary via PVC snapshot. The branch is a full copy of the database at the current point in time, useful for testing schema migrations or running experiments without affecting production data. Branches expire after the configured TTL (default 24 hours). The branch is created asynchronously.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} branchId - Branch ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {number} ttl - Time-to-live in seconds before the branch expires. Min 300 (5 min), max 604800 (7 days). Default: 86400 (24h).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseBranch(databaseId: string, branchId?: string, ttl?: number): Promise<Models.DedicatedDatabase>;
    createDatabaseBranch(
        paramsOrFirst: { databaseId: string, branchId?: string, ttl?: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, branchId?: string, ttl?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, branchId?: string, ttl?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                branchId: rest[0] as string,
                ttl: rest[1] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const branchId = params.branchId;
        const ttl = params.ttl;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/branches'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof branchId !== 'undefined') {
            payload['branchId'] = branchId;
        }
        if (typeof ttl !== 'undefined') {
            payload['ttl'] = ttl;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete an ephemeral database branch. This removes the branch namespace, its PVC, and the associated VolumeSnapshot. The deletion runs asynchronously and is irreversible.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.branchId - Branch ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    deleteDatabaseBranch(params: { databaseId: string, branchId: string }): Promise<Models.DedicatedDatabase>;
    /**
     * Delete an ephemeral database branch. This removes the branch namespace, its PVC, and the associated VolumeSnapshot. The deletion runs asynchronously and is irreversible.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} branchId - Branch ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDatabaseBranch(databaseId: string, branchId: string): Promise<Models.DedicatedDatabase>;
    deleteDatabaseBranch(
        paramsOrFirst: { databaseId: string, branchId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, branchId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, branchId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                branchId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const branchId = params.branchId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof branchId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "branchId"');
        }

        const apiPath = '/compute/databases/{databaseId}/branches/{branchId}'.replace('{databaseId}', databaseId).replace('{branchId}', branchId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List all database connection users/roles for a dedicated database.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseConnectionList>}
     */
    listDatabaseConnections(params: { databaseId: string }): Promise<Models.DedicatedDatabaseConnectionList>;
    /**
     * List all database connection users/roles for a dedicated database.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseConnectionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDatabaseConnections(databaseId: string): Promise<Models.DedicatedDatabaseConnectionList>;
    listDatabaseConnections(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabaseConnectionList> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/connections'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Create a new database connection user/role. Returns the connection details including the generated credentials.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.username - Connection username.
     * @param {string} params.role - Connection role for the new user. Common values: readonly (read-only access), readwrite (full read and write access).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseConnection>}
     */
    createDatabaseConnection(params: { databaseId: string, username: string, role?: string }): Promise<Models.DedicatedDatabaseConnection>;
    /**
     * Create a new database connection user/role. Returns the connection details including the generated credentials.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} username - Connection username.
     * @param {string} role - Connection role for the new user. Common values: readonly (read-only access), readwrite (full read and write access).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseConnection>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseConnection(databaseId: string, username: string, role?: string): Promise<Models.DedicatedDatabaseConnection>;
    createDatabaseConnection(
        paramsOrFirst: { databaseId: string, username: string, role?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.DedicatedDatabaseConnection> {
        let params: { databaseId: string, username: string, role?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, username: string, role?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                username: rest[0] as string,
                role: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const username = params.username;
        const role = params.role;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof username === 'undefined') {
            throw new AppwriteException('Missing required parameter: "username"');
        }

        const apiPath = '/compute/databases/{databaseId}/connections'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof username !== 'undefined') {
            payload['username'] = username;
        }
        if (typeof role !== 'undefined') {
            payload['role'] = role;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Delete a database connection user/role. The connection will be terminated immediately.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.connectionId - Connection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDatabaseConnection(params: { databaseId: string, connectionId: string }): Promise<{}>;
    /**
     * Delete a database connection user/role. The connection will be terminated immediately.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} connectionId - Connection ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDatabaseConnection(databaseId: string, connectionId: string): Promise<{}>;
    deleteDatabaseConnection(
        paramsOrFirst: { databaseId: string, connectionId: string } | string,
        ...rest: [(string)?]    
    ): Promise<{}> {
        let params: { databaseId: string, connectionId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, connectionId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                connectionId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const connectionId = params.connectionId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof connectionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "connectionId"');
        }

        const apiPath = '/compute/databases/{databaseId}/connections/{connectionId}'.replace('{databaseId}', databaseId).replace('{connectionId}', connectionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get connection credentials for a dedicated database. Returns the hostname, port, username, password, database name, and full connection string.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseCredentials>}
     */
    getDatabaseCredentials(params: { databaseId: string }): Promise<Models.DedicatedDatabaseCredentials>;
    /**
     * Get connection credentials for a dedicated database. Returns the hostname, port, username, password, database name, and full connection string.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseCredentials>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabaseCredentials(databaseId: string): Promise<Models.DedicatedDatabaseCredentials>;
    getDatabaseCredentials(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabaseCredentials> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/credentials'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Rotate the primary credentials for a dedicated database. Generates a new password and updates the database. Previous credentials will stop working immediately.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseCredentials>}
     */
    updateDatabaseCredentials(params: { databaseId: string }): Promise<Models.DedicatedDatabaseCredentials>;
    /**
     * Rotate the primary credentials for a dedicated database. Generates a new password and updates the database. Previous credentials will stop working immediately.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseCredentials>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatabaseCredentials(databaseId: string): Promise<Models.DedicatedDatabaseCredentials>;
    updateDatabaseCredentials(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabaseCredentials> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/credentials'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Execute SQL through the console-facing Cloud endpoint. Cloud proxies through the edge platform to the per-database SQL API sidecar. Application traffic should bypass cloud entirely and POST directly to the per-database hostname: `https://db-{project}-{db}.{region}.appwrite.center/v1/sql/execute` with an `X-Appwrite-Key` header — that path scales to the whole DB fleet without a per-query cloud round-trip. The statement type must be on the database's configured allow-list. Use bound parameters for any user-supplied values — the API does not interpolate raw strings.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.sql - SQL statement to execute. Exactly one statement per request.
     * @param {object} params.bindings - Optional bound parameters. Pass either a positional list or a name => value map matching the placeholder style used in the SQL.
     * @param {number} params.timeoutSeconds - Per-call execution timeout override. Must be less than or equal to the database's configured sqlApiTimeoutSeconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseExecution>}
     */
    createDatabaseExecution(params: { databaseId: string, sql: string, bindings?: object, timeoutSeconds?: number }): Promise<Models.DedicatedDatabaseExecution>;
    /**
     * Execute SQL through the console-facing Cloud endpoint. Cloud proxies through the edge platform to the per-database SQL API sidecar. Application traffic should bypass cloud entirely and POST directly to the per-database hostname: `https://db-{project}-{db}.{region}.appwrite.center/v1/sql/execute` with an `X-Appwrite-Key` header — that path scales to the whole DB fleet without a per-query cloud round-trip. The statement type must be on the database's configured allow-list. Use bound parameters for any user-supplied values — the API does not interpolate raw strings.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} sql - SQL statement to execute. Exactly one statement per request.
     * @param {object} bindings - Optional bound parameters. Pass either a positional list or a name => value map matching the placeholder style used in the SQL.
     * @param {number} timeoutSeconds - Per-call execution timeout override. Must be less than or equal to the database's configured sqlApiTimeoutSeconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseExecution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseExecution(databaseId: string, sql: string, bindings?: object, timeoutSeconds?: number): Promise<Models.DedicatedDatabaseExecution>;
    createDatabaseExecution(
        paramsOrFirst: { databaseId: string, sql: string, bindings?: object, timeoutSeconds?: number } | string,
        ...rest: [(string)?, (object)?, (number)?]    
    ): Promise<Models.DedicatedDatabaseExecution> {
        let params: { databaseId: string, sql: string, bindings?: object, timeoutSeconds?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, sql: string, bindings?: object, timeoutSeconds?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                sql: rest[0] as string,
                bindings: rest[1] as object,
                timeoutSeconds: rest[2] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const sql = params.sql;
        const bindings = params.bindings;
        const timeoutSeconds = params.timeoutSeconds;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof sql === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sql"');
        }

        const apiPath = '/compute/databases/{databaseId}/execution'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof sql !== 'undefined') {
            payload['sql'] = sql;
        }
        if (typeof bindings !== 'undefined') {
            payload['bindings'] = bindings;
        }
        if (typeof timeoutSeconds !== 'undefined') {
            payload['timeoutSeconds'] = timeoutSeconds;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Run EXPLAIN on a query against a dedicated database. Available for SQL-compatible engines. Returns the query execution plan including scan types, estimated cost, and resource usage. Optionally run EXPLAIN ANALYZE to get actual execution statistics.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.query - Query to explain. Must be a valid query for the database engine.
     * @param {boolean} params.analyze - Run EXPLAIN ANALYZE to get actual execution statistics. This executes the query.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseQueryExplanation>}
     */
    createDatabaseQueryExplanation(params: { databaseId: string, query: string, analyze?: boolean }): Promise<Models.DedicatedDatabaseQueryExplanation>;
    /**
     * Run EXPLAIN on a query against a dedicated database. Available for SQL-compatible engines. Returns the query execution plan including scan types, estimated cost, and resource usage. Optionally run EXPLAIN ANALYZE to get actual execution statistics.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} query - Query to explain. Must be a valid query for the database engine.
     * @param {boolean} analyze - Run EXPLAIN ANALYZE to get actual execution statistics. This executes the query.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseQueryExplanation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseQueryExplanation(databaseId: string, query: string, analyze?: boolean): Promise<Models.DedicatedDatabaseQueryExplanation>;
    createDatabaseQueryExplanation(
        paramsOrFirst: { databaseId: string, query: string, analyze?: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.DedicatedDatabaseQueryExplanation> {
        let params: { databaseId: string, query: string, analyze?: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, query: string, analyze?: boolean };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                query: rest[0] as string,
                analyze: rest[1] as boolean            
            };
        }
        
        const databaseId = params.databaseId;
        const query = params.query;
        const analyze = params.analyze;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof query === 'undefined') {
            throw new AppwriteException('Missing required parameter: "query"');
        }

        const apiPath = '/compute/databases/{databaseId}/explanation'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof query !== 'undefined') {
            payload['query'] = query;
        }
        if (typeof analyze !== 'undefined') {
            payload['analyze'] = analyze;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List installed and available extensions for a PostgreSQL database.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseExtensions>}
     */
    listDatabaseExtensions(params: { databaseId: string }): Promise<Models.DedicatedDatabaseExtensions>;
    /**
     * List installed and available extensions for a PostgreSQL database.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseExtensions>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDatabaseExtensions(databaseId: string): Promise<Models.DedicatedDatabaseExtensions>;
    listDatabaseExtensions(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabaseExtensions> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/extensions'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Install a database extension. Only available for PostgreSQL databases. The install runs asynchronously; poll the extensions list endpoint for status.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.name - Extension name (e.g., pgvector, postgis, uuid-ossp).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createDatabaseExtension(params: { databaseId: string, name: string }): Promise<Models.DedicatedDatabase>;
    /**
     * Install a database extension. Only available for PostgreSQL databases. The install runs asynchronously; poll the extensions list endpoint for status.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} name - Extension name (e.g., pgvector, postgis, uuid-ossp).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseExtension(databaseId: string, name: string): Promise<Models.DedicatedDatabase>;
    createDatabaseExtension(
        paramsOrFirst: { databaseId: string, name: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, name: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, name: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                name: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const name = params.name;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        const apiPath = '/compute/databases/{databaseId}/extensions'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Uninstall a database extension from a PostgreSQL database. The uninstall runs asynchronously; poll the extensions list endpoint for status.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.extensionName - Extension name to uninstall.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    deleteDatabaseExtension(params: { databaseId: string, extensionName: string }): Promise<Models.DedicatedDatabase>;
    /**
     * Uninstall a database extension from a PostgreSQL database. The uninstall runs asynchronously; poll the extensions list endpoint for status.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} extensionName - Extension name to uninstall.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDatabaseExtension(databaseId: string, extensionName: string): Promise<Models.DedicatedDatabase>;
    deleteDatabaseExtension(
        paramsOrFirst: { databaseId: string, extensionName: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, extensionName: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, extensionName: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                extensionName: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const extensionName = params.extensionName;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof extensionName === 'undefined') {
            throw new AppwriteException('Missing required parameter: "extensionName"');
        }

        const apiPath = '/compute/databases/{databaseId}/extensions/{extensionName}'.replace('{databaseId}', databaseId).replace('{extensionName}', extensionName);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get high availability status for a dedicated database. Returns replica statuses, replication lag, and sync mode.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseHAStatus>}
     */
    getDatabaseHAStatus(params: { databaseId: string }): Promise<Models.DedicatedDatabaseHAStatus>;
    /**
     * Get high availability status for a dedicated database. Returns replica statuses, replication lag, and sync mode.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseHAStatus>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabaseHAStatus(databaseId: string): Promise<Models.DedicatedDatabaseHAStatus>;
    getDatabaseHAStatus(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabaseHAStatus> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/ha'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Trigger a manual failover for a dedicated database with high availability enabled. Promotes a replica to primary. The failover runs asynchronously; poll the database document for status updates.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.targetReplicaId - Target replica ID to promote. If not specified, the healthiest replica is selected.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createDatabaseFailover(params: { databaseId: string, targetReplicaId?: string }): Promise<Models.DedicatedDatabase>;
    /**
     * Trigger a manual failover for a dedicated database with high availability enabled. Promotes a replica to primary. The failover runs asynchronously; poll the database document for status updates.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} targetReplicaId - Target replica ID to promote. If not specified, the healthiest replica is selected.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseFailover(databaseId: string, targetReplicaId?: string): Promise<Models.DedicatedDatabase>;
    createDatabaseFailover(
        paramsOrFirst: { databaseId: string, targetReplicaId?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, targetReplicaId?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, targetReplicaId?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                targetReplicaId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const targetReplicaId = params.targetReplicaId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/ha/failovers'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof targetReplicaId !== 'undefined') {
            payload['targetReplicaId'] = targetReplicaId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get query-level performance insights for a dedicated database. Returns top queries by execution time, wait events, and aggregate query statistics.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.period - Analysis period for performance insights. Allowed values: 1h (last hour), 24h (last 24 hours), 7d (last 7 days).
     * @param {number} params.limit - Maximum number of queries to return.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePerformanceInsights>}
     */
    getDatabaseInsights(params: { databaseId: string, period?: string, limit?: number }): Promise<Models.DedicatedDatabasePerformanceInsights>;
    /**
     * Get query-level performance insights for a dedicated database. Returns top queries by execution time, wait events, and aggregate query statistics.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} period - Analysis period for performance insights. Allowed values: 1h (last hour), 24h (last 24 hours), 7d (last 7 days).
     * @param {number} limit - Maximum number of queries to return.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePerformanceInsights>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabaseInsights(databaseId: string, period?: string, limit?: number): Promise<Models.DedicatedDatabasePerformanceInsights>;
    getDatabaseInsights(
        paramsOrFirst: { databaseId: string, period?: string, limit?: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.DedicatedDatabasePerformanceInsights> {
        let params: { databaseId: string, period?: string, limit?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, period?: string, limit?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                period: rest[0] as string,
                limit: rest[1] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const period = params.period;
        const limit = params.limit;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/insights'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof period !== 'undefined') {
            payload['period'] = period;
        }
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update the maintenance window for a dedicated database. Maintenance operations like minor version upgrades will be performed during this window.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.day - Day of the week for the maintenance window. Allowed values: sun, mon, tue, wed, thu, fri, sat.
     * @param {number} params.hourUtc - Hour in UTC (0-23) for maintenance window start.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    updateDatabaseMaintenanceWindow(params: { databaseId: string, day: string, hourUtc: number }): Promise<Models.DedicatedDatabase>;
    /**
     * Update the maintenance window for a dedicated database. Maintenance operations like minor version upgrades will be performed during this window.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} day - Day of the week for the maintenance window. Allowed values: sun, mon, tue, wed, thu, fri, sat.
     * @param {number} hourUtc - Hour in UTC (0-23) for maintenance window start.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatabaseMaintenanceWindow(databaseId: string, day: string, hourUtc: number): Promise<Models.DedicatedDatabase>;
    updateDatabaseMaintenanceWindow(
        paramsOrFirst: { databaseId: string, day: string, hourUtc: number } | string,
        ...rest: [(string)?, (number)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, day: string, hourUtc: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, day: string, hourUtc: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                day: rest[0] as string,
                hourUtc: rest[1] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const day = params.day;
        const hourUtc = params.hourUtc;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof day === 'undefined') {
            throw new AppwriteException('Missing required parameter: "day"');
        }
        if (typeof hourUtc === 'undefined') {
            throw new AppwriteException('Missing required parameter: "hourUtc"');
        }

        const apiPath = '/compute/databases/{databaseId}/maintenance'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof day !== 'undefined') {
            payload['day'] = day;
        }
        if (typeof hourUtc !== 'undefined') {
            payload['hourUtc'] = hourUtc;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get detailed performance metrics for a dedicated database. Returns CPU, memory, storage, IOPS, QPS, and connection metrics.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.period - Metrics aggregation period. Allowed values: 1h (last hour), 24h (last 24 hours), 7d (last 7 days), 30d (last 30 days).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseMetrics>}
     */
    getDatabaseMetrics(params: { databaseId: string, period?: string }): Promise<Models.DedicatedDatabaseMetrics>;
    /**
     * Get detailed performance metrics for a dedicated database. Returns CPU, memory, storage, IOPS, QPS, and connection metrics.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} period - Metrics aggregation period. Allowed values: 1h (last hour), 24h (last 24 hours), 7d (last 7 days), 30d (last 30 days).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseMetrics>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabaseMetrics(databaseId: string, period?: string): Promise<Models.DedicatedDatabaseMetrics>;
    getDatabaseMetrics(
        paramsOrFirst: { databaseId: string, period?: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabaseMetrics> {
        let params: { databaseId: string, period?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, period?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                period: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const period = params.period;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/metrics'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof period !== 'undefined') {
            payload['period'] = period;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Migrate a database between shared and dedicated types. Shared to dedicated provisions an always-on dedicated instance; dedicated to shared converts to a serverless instance that scales to zero when idle. Data is copied to the target with a brief read-only window during cutover.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.targetType - Target database type to migrate to. Allowed values: shared (serverless, scales to zero when idle), dedicated (always-on with persistent resources).
     * @param {string} params.specification - Target compute specification to provision when migrating to dedicated. Ignored for shared. Defaults to the database's current specification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createDatabaseMigration(params: { databaseId: string, targetType: string, specification?: string }): Promise<Models.DedicatedDatabase>;
    /**
     * Migrate a database between shared and dedicated types. Shared to dedicated provisions an always-on dedicated instance; dedicated to shared converts to a serverless instance that scales to zero when idle. Data is copied to the target with a brief read-only window during cutover.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} targetType - Target database type to migrate to. Allowed values: shared (serverless, scales to zero when idle), dedicated (always-on with persistent resources).
     * @param {string} specification - Target compute specification to provision when migrating to dedicated. Ignored for shared. Defaults to the database's current specification.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseMigration(databaseId: string, targetType: string, specification?: string): Promise<Models.DedicatedDatabase>;
    createDatabaseMigration(
        paramsOrFirst: { databaseId: string, targetType: string, specification?: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, targetType: string, specification?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, targetType: string, specification?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                targetType: rest[0] as string,
                specification: rest[1] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const targetType = params.targetType;
        const specification = params.specification;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof targetType === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetType"');
        }

        const apiPath = '/compute/databases/{databaseId}/migrations'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof targetType !== 'undefined') {
            payload['targetType'] = targetType;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get available point-in-time recovery windows for a dedicated database. Returns the earliest and latest recovery points.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePITRWindows>}
     */
    getDatabasePITRWindows(params: { databaseId: string }): Promise<Models.DedicatedDatabasePITRWindows>;
    /**
     * Get available point-in-time recovery windows for a dedicated database. Returns the earliest and latest recovery points.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePITRWindows>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabasePITRWindows(databaseId: string): Promise<Models.DedicatedDatabasePITRWindows>;
    getDatabasePITRWindows(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabasePITRWindows> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/pitr'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get the connection pooler configuration for a dedicated database. Returns pooler mode, max connections, and pool size settings.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePooler>}
     */
    getDatabasePooler(params: { databaseId: string }): Promise<Models.DedicatedDatabasePooler>;
    /**
     * Get the connection pooler configuration for a dedicated database. Returns pooler mode, max connections, and pool size settings.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePooler>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabasePooler(databaseId: string): Promise<Models.DedicatedDatabasePooler>;
    getDatabasePooler(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabasePooler> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/pooler'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Update the connection pooler configuration for a dedicated database. Configure pool mode, max connections, and pool sizes.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.mode - Connection pool mode. Allowed values: transaction, session. Transaction mode returns connections to the pool after each transaction; session mode holds connections for the entire session lifetime.
     * @param {number} params.maxConnections - Maximum pooled connections.
     * @param {number} params.defaultPoolSize - Default pool size per user.
     * @param {boolean} params.readWriteSplitting - Route SELECTs to HA replicas, writes and locked reads to the primary. Defaults to true when HA is enabled.
     * @param {string} params.poolerCpuRequest - Pooler sidecar CPU request override (Kubernetes quantity, e.g. "250m" or "1"). Leave null for the proportional default (5% of DB CPU, floor 100m).
     * @param {string} params.poolerCpuLimit - Pooler sidecar CPU limit override (Kubernetes quantity, e.g. "500m" or "1"). Leave null for the proportional default (10% of DB CPU, floor 200m). Changing this field rolls the database pod.
     * @param {string} params.poolerMemoryRequest - Pooler sidecar memory request override (Kubernetes quantity, e.g. "128Mi" or "1Gi"). Leave null for the proportional default (7.5% of DB memory, floor 64Mi).
     * @param {string} params.poolerMemoryLimit - Pooler sidecar memory limit override (Kubernetes quantity, e.g. "256Mi" or "1Gi"). Leave null for the proportional default (15% of DB memory, floor 128Mi). Changing this field rolls the database pod.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePooler>}
     */
    updateDatabasePooler(params: { databaseId: string, mode?: string, maxConnections?: number, defaultPoolSize?: number, readWriteSplitting?: boolean, poolerCpuRequest?: string, poolerCpuLimit?: string, poolerMemoryRequest?: string, poolerMemoryLimit?: string }): Promise<Models.DedicatedDatabasePooler>;
    /**
     * Update the connection pooler configuration for a dedicated database. Configure pool mode, max connections, and pool sizes.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} mode - Connection pool mode. Allowed values: transaction, session. Transaction mode returns connections to the pool after each transaction; session mode holds connections for the entire session lifetime.
     * @param {number} maxConnections - Maximum pooled connections.
     * @param {number} defaultPoolSize - Default pool size per user.
     * @param {boolean} readWriteSplitting - Route SELECTs to HA replicas, writes and locked reads to the primary. Defaults to true when HA is enabled.
     * @param {string} poolerCpuRequest - Pooler sidecar CPU request override (Kubernetes quantity, e.g. "250m" or "1"). Leave null for the proportional default (5% of DB CPU, floor 100m).
     * @param {string} poolerCpuLimit - Pooler sidecar CPU limit override (Kubernetes quantity, e.g. "500m" or "1"). Leave null for the proportional default (10% of DB CPU, floor 200m). Changing this field rolls the database pod.
     * @param {string} poolerMemoryRequest - Pooler sidecar memory request override (Kubernetes quantity, e.g. "128Mi" or "1Gi"). Leave null for the proportional default (7.5% of DB memory, floor 64Mi).
     * @param {string} poolerMemoryLimit - Pooler sidecar memory limit override (Kubernetes quantity, e.g. "256Mi" or "1Gi"). Leave null for the proportional default (15% of DB memory, floor 128Mi). Changing this field rolls the database pod.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabasePooler>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDatabasePooler(databaseId: string, mode?: string, maxConnections?: number, defaultPoolSize?: number, readWriteSplitting?: boolean, poolerCpuRequest?: string, poolerCpuLimit?: string, poolerMemoryRequest?: string, poolerMemoryLimit?: string): Promise<Models.DedicatedDatabasePooler>;
    updateDatabasePooler(
        paramsOrFirst: { databaseId: string, mode?: string, maxConnections?: number, defaultPoolSize?: number, readWriteSplitting?: boolean, poolerCpuRequest?: string, poolerCpuLimit?: string, poolerMemoryRequest?: string, poolerMemoryLimit?: string } | string,
        ...rest: [(string)?, (number)?, (number)?, (boolean)?, (string)?, (string)?, (string)?, (string)?]    
    ): Promise<Models.DedicatedDatabasePooler> {
        let params: { databaseId: string, mode?: string, maxConnections?: number, defaultPoolSize?: number, readWriteSplitting?: boolean, poolerCpuRequest?: string, poolerCpuLimit?: string, poolerMemoryRequest?: string, poolerMemoryLimit?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, mode?: string, maxConnections?: number, defaultPoolSize?: number, readWriteSplitting?: boolean, poolerCpuRequest?: string, poolerCpuLimit?: string, poolerMemoryRequest?: string, poolerMemoryLimit?: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                mode: rest[0] as string,
                maxConnections: rest[1] as number,
                defaultPoolSize: rest[2] as number,
                readWriteSplitting: rest[3] as boolean,
                poolerCpuRequest: rest[4] as string,
                poolerCpuLimit: rest[5] as string,
                poolerMemoryRequest: rest[6] as string,
                poolerMemoryLimit: rest[7] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const mode = params.mode;
        const maxConnections = params.maxConnections;
        const defaultPoolSize = params.defaultPoolSize;
        const readWriteSplitting = params.readWriteSplitting;
        const poolerCpuRequest = params.poolerCpuRequest;
        const poolerCpuLimit = params.poolerCpuLimit;
        const poolerMemoryRequest = params.poolerMemoryRequest;
        const poolerMemoryLimit = params.poolerMemoryLimit;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/pooler'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof mode !== 'undefined') {
            payload['mode'] = mode;
        }
        if (typeof maxConnections !== 'undefined') {
            payload['maxConnections'] = maxConnections;
        }
        if (typeof defaultPoolSize !== 'undefined') {
            payload['defaultPoolSize'] = defaultPoolSize;
        }
        if (typeof readWriteSplitting !== 'undefined') {
            payload['readWriteSplitting'] = readWriteSplitting;
        }
        if (typeof poolerCpuRequest !== 'undefined') {
            payload['poolerCpuRequest'] = poolerCpuRequest;
        }
        if (typeof poolerCpuLimit !== 'undefined') {
            payload['poolerCpuLimit'] = poolerCpuLimit;
        }
        if (typeof poolerMemoryRequest !== 'undefined') {
            payload['poolerMemoryRequest'] = poolerMemoryRequest;
        }
        if (typeof poolerMemoryLimit !== 'undefined') {
            payload['poolerMemoryLimit'] = poolerMemoryLimit;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List all restorations for a dedicated database. Results can be filtered by status and type.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.status - Filter by restoration status.
     * @param {string} params.type - Filter by restoration type.
     * @param {number} params.limit - Maximum number of restorations to return.
     * @param {number} params.offset - Number of restorations to skip.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestorationList>}
     */
    listDatabaseRestorations(params: { databaseId: string, status?: string, type?: string, limit?: number, offset?: number }): Promise<Models.DedicatedDatabaseRestorationList>;
    /**
     * List all restorations for a dedicated database. Results can be filtered by status and type.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} status - Filter by restoration status.
     * @param {string} type - Filter by restoration type.
     * @param {number} limit - Maximum number of restorations to return.
     * @param {number} offset - Number of restorations to skip.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestorationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDatabaseRestorations(databaseId: string, status?: string, type?: string, limit?: number, offset?: number): Promise<Models.DedicatedDatabaseRestorationList>;
    listDatabaseRestorations(
        paramsOrFirst: { databaseId: string, status?: string, type?: string, limit?: number, offset?: number } | string,
        ...rest: [(string)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.DedicatedDatabaseRestorationList> {
        let params: { databaseId: string, status?: string, type?: string, limit?: number, offset?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, status?: string, type?: string, limit?: number, offset?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                status: rest[0] as string,
                type: rest[1] as string,
                limit: rest[2] as number,
                offset: rest[3] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const status = params.status;
        const type = params.type;
        const limit = params.limit;
        const offset = params.offset;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/restorations'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof status !== 'undefined') {
            payload['status'] = status;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Restore a database from a backup or to a specific point in time (PITR). For backup restoration, provide a backupId. For PITR, provide a targetTime. PITR requires the database to have PITR enabled and is only available for enterprise databases.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.type - Restoration type. Allowed values: backup, pitr. Use "backup" to restore from a specific backup, or "pitr" for point-in-time recovery.
     * @param {string} params.backupId - Backup ID to restore from (required for backup type).
     * @param {number} params.targetTime - Target time for PITR as Unix timestamp (required for pitr type).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestoration>}
     */
    createDatabaseRestoration(params: { databaseId: string, type?: string, backupId?: string, targetTime?: number }): Promise<Models.DedicatedDatabaseRestoration>;
    /**
     * Restore a database from a backup or to a specific point in time (PITR). For backup restoration, provide a backupId. For PITR, provide a targetTime. PITR requires the database to have PITR enabled and is only available for enterprise databases.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} type - Restoration type. Allowed values: backup, pitr. Use "backup" to restore from a specific backup, or "pitr" for point-in-time recovery.
     * @param {string} backupId - Backup ID to restore from (required for backup type).
     * @param {number} targetTime - Target time for PITR as Unix timestamp (required for pitr type).
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestoration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseRestoration(databaseId: string, type?: string, backupId?: string, targetTime?: number): Promise<Models.DedicatedDatabaseRestoration>;
    createDatabaseRestoration(
        paramsOrFirst: { databaseId: string, type?: string, backupId?: string, targetTime?: number } | string,
        ...rest: [(string)?, (string)?, (number)?]    
    ): Promise<Models.DedicatedDatabaseRestoration> {
        let params: { databaseId: string, type?: string, backupId?: string, targetTime?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, type?: string, backupId?: string, targetTime?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                type: rest[0] as string,
                backupId: rest[1] as string,
                targetTime: rest[2] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const type = params.type;
        const backupId = params.backupId;
        const targetTime = params.targetTime;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/restorations'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof backupId !== 'undefined') {
            payload['backupId'] = backupId;
        }
        if (typeof targetTime !== 'undefined') {
            payload['targetTime'] = targetTime;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get details of a specific database restoration including its status, type, and timestamps.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.restorationId - Restoration ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestoration>}
     */
    getDatabaseRestoration(params: { databaseId: string, restorationId: string }): Promise<Models.DedicatedDatabaseRestoration>;
    /**
     * Get details of a specific database restoration including its status, type, and timestamps.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} restorationId - Restoration ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseRestoration>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabaseRestoration(databaseId: string, restorationId: string): Promise<Models.DedicatedDatabaseRestoration>;
    getDatabaseRestoration(
        paramsOrFirst: { databaseId: string, restorationId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabaseRestoration> {
        let params: { databaseId: string, restorationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, restorationId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                restorationId: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const restorationId = params.restorationId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof restorationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "restorationId"');
        }

        const apiPath = '/compute/databases/{databaseId}/restorations/{restorationId}'.replace('{databaseId}', databaseId).replace('{restorationId}', restorationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get the current schema for a dedicated database. Returns collections, fields, data types, constraints, and indexes.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSchema>}
     */
    getDatabaseSchema(params: { databaseId: string }): Promise<Models.DedicatedDatabaseSchema>;
    /**
     * Get the current schema for a dedicated database. Returns collections, fields, data types, constraints, and indexes.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSchema>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabaseSchema(databaseId: string): Promise<Models.DedicatedDatabaseSchema>;
    getDatabaseSchema(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DedicatedDatabaseSchema> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/schema'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Preview a schema change against a dedicated database. Returns the expected impact including affected collections, records, and a dry-run diff of the schema before and after the change.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.sql - Schema statement to preview.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSchemaPreview>}
     */
    createDatabaseSchemaPreview(params: { databaseId: string, sql: string }): Promise<Models.DedicatedDatabaseSchemaPreview>;
    /**
     * Preview a schema change against a dedicated database. Returns the expected impact including affected collections, records, and a dry-run diff of the schema before and after the change.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} sql - Schema statement to preview.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSchemaPreview>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseSchemaPreview(databaseId: string, sql: string): Promise<Models.DedicatedDatabaseSchemaPreview>;
    createDatabaseSchemaPreview(
        paramsOrFirst: { databaseId: string, sql: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabaseSchemaPreview> {
        let params: { databaseId: string, sql: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, sql: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                sql: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const sql = params.sql;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof sql === 'undefined') {
            throw new AppwriteException('Missing required parameter: "sql"');
        }

        const apiPath = '/compute/databases/{databaseId}/schema/preview'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof sql !== 'undefined') {
            payload['sql'] = sql;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * List slow queries for a dedicated database. Returns queries that exceeded the specified threshold.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {number} params.limit - Maximum number of queries to return.
     * @param {number} params.thresholdMs - Minimum query duration in milliseconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSlowQueryList>}
     */
    listDatabaseQueries(params: { databaseId: string, limit?: number, thresholdMs?: number }): Promise<Models.DedicatedDatabaseSlowQueryList>;
    /**
     * List slow queries for a dedicated database. Returns queries that exceeded the specified threshold.
     *
     * @param {string} databaseId - Database ID.
     * @param {number} limit - Maximum number of queries to return.
     * @param {number} thresholdMs - Minimum query duration in milliseconds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabaseSlowQueryList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDatabaseQueries(databaseId: string, limit?: number, thresholdMs?: number): Promise<Models.DedicatedDatabaseSlowQueryList>;
    listDatabaseQueries(
        paramsOrFirst: { databaseId: string, limit?: number, thresholdMs?: number } | string,
        ...rest: [(number)?, (number)?]    
    ): Promise<Models.DedicatedDatabaseSlowQueryList> {
        let params: { databaseId: string, limit?: number, thresholdMs?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, limit?: number, thresholdMs?: number };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                limit: rest[0] as number,
                thresholdMs: rest[1] as number            
            };
        }
        
        const databaseId = params.databaseId;
        const limit = params.limit;
        const thresholdMs = params.thresholdMs;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/slow-queries'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }
        if (typeof thresholdMs !== 'undefined') {
            payload['thresholdMs'] = thresholdMs;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Get real-time health and status information for a dedicated database. Returns health status, readiness, uptime, connection info, replica status, and volume information.
     *
     * @param {string} params.databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseStatus>}
     */
    getDatabaseStatus(params: { databaseId: string }): Promise<Models.DatabaseStatus>;
    /**
     * Get real-time health and status information for a dedicated database. Returns health status, readiness, uptime, connection info, replica status, and volume information.
     *
     * @param {string} databaseId - Database ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DatabaseStatus>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDatabaseStatus(databaseId: string): Promise<Models.DatabaseStatus>;
    getDatabaseStatus(
        paramsOrFirst: { databaseId: string } | string    
    ): Promise<Models.DatabaseStatus> {
        let params: { databaseId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string            
            };
        }
        
        const databaseId = params.databaseId;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }

        const apiPath = '/compute/databases/{databaseId}/status'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Upgrade a dedicated database to a new engine version. Uses blue-green deployment for zero-downtime cutover.
     *
     * @param {string} params.databaseId - Database ID.
     * @param {string} params.targetVersion - Target engine version to upgrade to.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     */
    createDatabaseUpgrade(params: { databaseId: string, targetVersion: string }): Promise<Models.DedicatedDatabase>;
    /**
     * Upgrade a dedicated database to a new engine version. Uses blue-green deployment for zero-downtime cutover.
     *
     * @param {string} databaseId - Database ID.
     * @param {string} targetVersion - Target engine version to upgrade to.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DedicatedDatabase>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDatabaseUpgrade(databaseId: string, targetVersion: string): Promise<Models.DedicatedDatabase>;
    createDatabaseUpgrade(
        paramsOrFirst: { databaseId: string, targetVersion: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.DedicatedDatabase> {
        let params: { databaseId: string, targetVersion: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { databaseId: string, targetVersion: string };
        } else {
            params = {
                databaseId: paramsOrFirst as string,
                targetVersion: rest[0] as string            
            };
        }
        
        const databaseId = params.databaseId;
        const targetVersion = params.targetVersion;

        if (typeof databaseId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "databaseId"');
        }
        if (typeof targetVersion === 'undefined') {
            throw new AppwriteException('Missing required parameter: "targetVersion"');
        }

        const apiPath = '/compute/databases/{databaseId}/upgrades'.replace('{databaseId}', databaseId);
        const payload: Payload = {};
        if (typeof targetVersion !== 'undefined') {
            payload['targetVersion'] = targetVersion;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'X-Appwrite-Project': this.client.config.project,
            'content-type': 'application/json',
        }

        return this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
}
