import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';


export class Usage {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Aggregate usage event metrics. `metrics[]` (1-10) is required; the response always contains one entry per requested metric, each with its own `points[]` time series.
     * 
     * **Two response shapes**:
     * - Omit `interval` for a flat top-N table — one point per dimension combination, no time axis. Useful for "top 10 paths by bandwidth in the last 7 days".
     * - Pass `interval` (`1m`, `15m`, `30m`, `1h`, `1d`) for a time series — one point per (time bucket × dimension combination).
     * 
     * `dimensions[]` breaks each point down by one or more attributes (service, path, status, country, …). Pass multiple metrics to render stacked charts in one round-trip. `resource` and `resourceId` filter the underlying events. `orderBy=value`+`orderDir=desc`+`limit=N` returns the top-N by aggregated value. When `startAt` is omitted, the default window adapts to `interval` (or 7d when interval is omitted).
     *
     * @param {string[]} params.metrics - One to ten metric names. Single-metric callers pass a one-element array. Example: `metrics[]=executions` or `metrics[]=executions&metrics[]=executions.compute` for stacked charts.
     * @param {string} params.resource - Resource type filter (singular form). Common values: function, site, database, bucket, file, webhook, team, user, project.
     * @param {string} params.resourceId - Resource id filter.
     * @param {string} params.interval - Time interval size. Omit (null) for a flat aggregate over the whole window. Allowed: 1m, 15m, 30m, 1h, 1d.
     * @param {string[]} params.dimensions - Break-down dimensions (max 10). Allowed: path, method, status, service, country, region, hostname, osName, clientType, clientName, deviceName, teamId, resourceId.
     * @param {string} params.startAt - Range start in ISO 8601. Defaults adapt to interval (7d for the no-interval aggregate).
     * @param {string} params.endAt - Range end in ISO 8601. Defaults to the current time.
     * @param {string} params.orderBy - Column to order by. Allowed: time, value. Default time when an interval is set; otherwise value.
     * @param {string} params.orderDir - Sort direction: asc or desc. Default desc — paired with the default limit, returns the most recent / highest-value groups first.
     * @param {number} params.limit - Maximum rows to return (1-5000).
     * @param {number} params.offset - Pagination offset (0-100000).
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageEventList>}
     */
    listEvents(params: { metrics: string[], resource?: string, resourceId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number }): Promise<Models.UsageEventList>;
    /**
     * Aggregate usage event metrics. `metrics[]` (1-10) is required; the response always contains one entry per requested metric, each with its own `points[]` time series.
     * 
     * **Two response shapes**:
     * - Omit `interval` for a flat top-N table — one point per dimension combination, no time axis. Useful for "top 10 paths by bandwidth in the last 7 days".
     * - Pass `interval` (`1m`, `15m`, `30m`, `1h`, `1d`) for a time series — one point per (time bucket × dimension combination).
     * 
     * `dimensions[]` breaks each point down by one or more attributes (service, path, status, country, …). Pass multiple metrics to render stacked charts in one round-trip. `resource` and `resourceId` filter the underlying events. `orderBy=value`+`orderDir=desc`+`limit=N` returns the top-N by aggregated value. When `startAt` is omitted, the default window adapts to `interval` (or 7d when interval is omitted).
     *
     * @param {string[]} metrics - One to ten metric names. Single-metric callers pass a one-element array. Example: `metrics[]=executions` or `metrics[]=executions&metrics[]=executions.compute` for stacked charts.
     * @param {string} resource - Resource type filter (singular form). Common values: function, site, database, bucket, file, webhook, team, user, project.
     * @param {string} resourceId - Resource id filter.
     * @param {string} interval - Time interval size. Omit (null) for a flat aggregate over the whole window. Allowed: 1m, 15m, 30m, 1h, 1d.
     * @param {string[]} dimensions - Break-down dimensions (max 10). Allowed: path, method, status, service, country, region, hostname, osName, clientType, clientName, deviceName, teamId, resourceId.
     * @param {string} startAt - Range start in ISO 8601. Defaults adapt to interval (7d for the no-interval aggregate).
     * @param {string} endAt - Range end in ISO 8601. Defaults to the current time.
     * @param {string} orderBy - Column to order by. Allowed: time, value. Default time when an interval is set; otherwise value.
     * @param {string} orderDir - Sort direction: asc or desc. Default desc — paired with the default limit, returns the most recent / highest-value groups first.
     * @param {number} limit - Maximum rows to return (1-5000).
     * @param {number} offset - Pagination offset (0-100000).
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageEventList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listEvents(metrics: string[], resource?: string, resourceId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number): Promise<Models.UsageEventList>;
    listEvents(
        paramsOrFirst: { metrics: string[], resource?: string, resourceId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number } | string[],
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.UsageEventList> {
        let params: { metrics: string[], resource?: string, resourceId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { metrics: string[], resource?: string, resourceId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number };
        } else {
            params = {
                metrics: paramsOrFirst as string[],
                resource: rest[0] as string,
                resourceId: rest[1] as string,
                interval: rest[2] as string,
                dimensions: rest[3] as string[],
                startAt: rest[4] as string,
                endAt: rest[5] as string,
                orderBy: rest[6] as string,
                orderDir: rest[7] as string,
                limit: rest[8] as number,
                offset: rest[9] as number            
            };
        }
        
        const metrics = params.metrics;
        const resource = params.resource;
        const resourceId = params.resourceId;
        const interval = params.interval;
        const dimensions = params.dimensions;
        const startAt = params.startAt;
        const endAt = params.endAt;
        const orderBy = params.orderBy;
        const orderDir = params.orderDir;
        const limit = params.limit;
        const offset = params.offset;

        if (typeof metrics === 'undefined') {
            throw new AppwriteException('Missing required parameter: "metrics"');
        }

        const apiPath = '/usage/events';
        const payload: Payload = {};
        if (typeof metrics !== 'undefined') {
            payload['metrics'] = metrics;
        }
        if (typeof resource !== 'undefined') {
            payload['resource'] = resource;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof interval !== 'undefined') {
            payload['interval'] = interval;
        }
        if (typeof dimensions !== 'undefined') {
            payload['dimensions'] = dimensions;
        }
        if (typeof startAt !== 'undefined') {
            payload['startAt'] = startAt;
        }
        if (typeof endAt !== 'undefined') {
            payload['endAt'] = endAt;
        }
        if (typeof orderBy !== 'undefined') {
            payload['orderBy'] = orderBy;
        }
        if (typeof orderDir !== 'undefined') {
            payload['orderDir'] = orderDir;
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
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }

    /**
     * Aggregate usage gauge snapshots. Gauges are point-in-time values (storage totals, resource counts, …); each point carries the latest snapshot in its interval via `argMax(value, time)`. `metrics[]` (1-10) is required; the response always contains one entry per requested metric, each with its own `points[]` time series.
     * 
     * **Two response shapes**:
     * - Omit `interval` for a flat top-N table — `argMax(value, time)` per dimension combination over the whole window, no time axis. Useful for "top 10 resources by current storage".
     * - Pass `interval` (`1m`, `15m`, `30m`, `1h`, `1d`) for a time series — one snapshot per (time bucket × dimension combination).
     * 
     * `dimensions[]` breaks each point down further. Supported on gauges: `resourceId`, `teamId`, `service`, `resource`. `service` and `resource` enable per-service / per-resource-type panels (e.g. storage-by-service: group `files.storage`, `deployments.storage`, `builds.storage`, `databases.storage` by `service`). Pass multiple metrics to render stacked charts in one round-trip. `resourceId` and `teamId` parameters filter the underlying rows. `orderBy=value`+`orderDir=desc`+`limit=N` returns the top-N. When `startAt` is omitted, the default window adapts to interval (or 7d when interval is omitted).
     *
     * @param {string[]} params.metrics - One to ten metric names. Single-metric callers pass a one-element array. Example: `metrics[]=files.storage` or `metrics[]=files.storage&metrics[]=deployments.storage` for stacked charts.
     * @param {string} params.resourceId - Resource id filter.
     * @param {string} params.teamId - Team id filter.
     * @param {string} params.interval - Time interval size. Omit (null) for a flat aggregate over the whole window. Allowed: 1m, 15m, 30m, 1h, 1d.
     * @param {string[]} params.dimensions - Break-down dimensions. Allowed: resourceId, teamId, service, resource.
     * @param {string} params.startAt - Range start in ISO 8601. Defaults to endAt - 7d.
     * @param {string} params.endAt - Range end in ISO 8601. Defaults to the current time.
     * @param {string} params.orderBy - Column to order by. Allowed: time, value. Default time.
     * @param {string} params.orderDir - Sort direction: asc or desc. Default desc — paired with the default limit, this returns the most recent groups first. Pass asc for chronological charting.
     * @param {number} params.limit - Maximum rows to return (1-5000).
     * @param {number} params.offset - Pagination offset (0-100000).
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageGaugeList>}
     */
    listGauges(params: { metrics: string[], resourceId?: string, teamId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number }): Promise<Models.UsageGaugeList>;
    /**
     * Aggregate usage gauge snapshots. Gauges are point-in-time values (storage totals, resource counts, …); each point carries the latest snapshot in its interval via `argMax(value, time)`. `metrics[]` (1-10) is required; the response always contains one entry per requested metric, each with its own `points[]` time series.
     * 
     * **Two response shapes**:
     * - Omit `interval` for a flat top-N table — `argMax(value, time)` per dimension combination over the whole window, no time axis. Useful for "top 10 resources by current storage".
     * - Pass `interval` (`1m`, `15m`, `30m`, `1h`, `1d`) for a time series — one snapshot per (time bucket × dimension combination).
     * 
     * `dimensions[]` breaks each point down further. Supported on gauges: `resourceId`, `teamId`, `service`, `resource`. `service` and `resource` enable per-service / per-resource-type panels (e.g. storage-by-service: group `files.storage`, `deployments.storage`, `builds.storage`, `databases.storage` by `service`). Pass multiple metrics to render stacked charts in one round-trip. `resourceId` and `teamId` parameters filter the underlying rows. `orderBy=value`+`orderDir=desc`+`limit=N` returns the top-N. When `startAt` is omitted, the default window adapts to interval (or 7d when interval is omitted).
     *
     * @param {string[]} metrics - One to ten metric names. Single-metric callers pass a one-element array. Example: `metrics[]=files.storage` or `metrics[]=files.storage&metrics[]=deployments.storage` for stacked charts.
     * @param {string} resourceId - Resource id filter.
     * @param {string} teamId - Team id filter.
     * @param {string} interval - Time interval size. Omit (null) for a flat aggregate over the whole window. Allowed: 1m, 15m, 30m, 1h, 1d.
     * @param {string[]} dimensions - Break-down dimensions. Allowed: resourceId, teamId, service, resource.
     * @param {string} startAt - Range start in ISO 8601. Defaults to endAt - 7d.
     * @param {string} endAt - Range end in ISO 8601. Defaults to the current time.
     * @param {string} orderBy - Column to order by. Allowed: time, value. Default time.
     * @param {string} orderDir - Sort direction: asc or desc. Default desc — paired with the default limit, this returns the most recent groups first. Pass asc for chronological charting.
     * @param {number} limit - Maximum rows to return (1-5000).
     * @param {number} offset - Pagination offset (0-100000).
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageGaugeList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listGauges(metrics: string[], resourceId?: string, teamId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number): Promise<Models.UsageGaugeList>;
    listGauges(
        paramsOrFirst: { metrics: string[], resourceId?: string, teamId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number } | string[],
        ...rest: [(string)?, (string)?, (string)?, (string[])?, (string)?, (string)?, (string)?, (string)?, (number)?, (number)?]    
    ): Promise<Models.UsageGaugeList> {
        let params: { metrics: string[], resourceId?: string, teamId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { metrics: string[], resourceId?: string, teamId?: string, interval?: string, dimensions?: string[], startAt?: string, endAt?: string, orderBy?: string, orderDir?: string, limit?: number, offset?: number };
        } else {
            params = {
                metrics: paramsOrFirst as string[],
                resourceId: rest[0] as string,
                teamId: rest[1] as string,
                interval: rest[2] as string,
                dimensions: rest[3] as string[],
                startAt: rest[4] as string,
                endAt: rest[5] as string,
                orderBy: rest[6] as string,
                orderDir: rest[7] as string,
                limit: rest[8] as number,
                offset: rest[9] as number            
            };
        }
        
        const metrics = params.metrics;
        const resourceId = params.resourceId;
        const teamId = params.teamId;
        const interval = params.interval;
        const dimensions = params.dimensions;
        const startAt = params.startAt;
        const endAt = params.endAt;
        const orderBy = params.orderBy;
        const orderDir = params.orderDir;
        const limit = params.limit;
        const offset = params.offset;

        if (typeof metrics === 'undefined') {
            throw new AppwriteException('Missing required parameter: "metrics"');
        }

        const apiPath = '/usage/gauges';
        const payload: Payload = {};
        if (typeof metrics !== 'undefined') {
            payload['metrics'] = metrics;
        }
        if (typeof resourceId !== 'undefined') {
            payload['resourceId'] = resourceId;
        }
        if (typeof teamId !== 'undefined') {
            payload['teamId'] = teamId;
        }
        if (typeof interval !== 'undefined') {
            payload['interval'] = interval;
        }
        if (typeof dimensions !== 'undefined') {
            payload['dimensions'] = dimensions;
        }
        if (typeof startAt !== 'undefined') {
            payload['startAt'] = startAt;
        }
        if (typeof endAt !== 'undefined') {
            payload['endAt'] = endAt;
        }
        if (typeof orderBy !== 'undefined') {
            payload['orderBy'] = orderBy;
        }
        if (typeof orderDir !== 'undefined') {
            payload['orderDir'] = orderDir;
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
            'accept': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
}
