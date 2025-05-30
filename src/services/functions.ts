import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { Runtime } from '../enums/runtime';
import { FunctionUsageRange } from '../enums/function-usage-range';
import { VCSDeploymentType } from '../enums/v-c-s-deployment-type';
import { DeploymentDownloadType } from '../enums/deployment-download-type';
import { ExecutionMethod } from '../enums/execution-method';

export class Functions {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of all the project&#039;s functions. You can use the query params to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.FunctionList>}
     */
    list(queries?: string[], search?: string): Promise<Models.FunctionList> {
        const apiPath = '/functions';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {Runtime} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string[]} scopes
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} specification
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    create(functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof runtime === 'undefined') {
            throw new AppwriteException('Missing required parameter: "runtime"');
        }
        const apiPath = '/functions';
        const payload: Payload = {};
        if (typeof functionId !== 'undefined') {
            payload['functionId'] = functionId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }
        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerBranch !== 'undefined') {
            payload['providerBranch'] = providerBranch;
        }
        if (typeof providerSilentMode !== 'undefined') {
            payload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.RuntimeList>}
     */
    listRuntimes(): Promise<Models.RuntimeList> {
        const apiPath = '/functions/runtimes';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List allowed function specifications for this instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.SpecificationList>}
     */
    listSpecifications(): Promise<Models.SpecificationList> {
        const apiPath = '/functions/specifications';
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List available function templates. You can use template details in [createFunction](/docs/references/cloud/server-nodejs/functions#create) method.
     *
     * @param {string[]} runtimes
     * @param {string[]} useCases
     * @param {number} limit
     * @param {number} offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateFunctionList>}
     */
    listTemplates(runtimes?: string[], useCases?: string[], limit?: number, offset?: number): Promise<Models.TemplateFunctionList> {
        const apiPath = '/functions/templates';
        const payload: Payload = {};
        if (typeof runtimes !== 'undefined') {
            payload['runtimes'] = runtimes;
        }
        if (typeof useCases !== 'undefined') {
            payload['useCases'] = useCases;
        }
        if (typeof limit !== 'undefined') {
            payload['limit'] = limit;
        }
        if (typeof offset !== 'undefined') {
            payload['offset'] = offset;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get a function template using ID. You can use template details in [createFunction](/docs/references/cloud/server-nodejs/functions#create) method.
     *
     * @param {string} templateId
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateFunction>}
     */
    getTemplate(templateId: string): Promise<Models.TemplateFunction> {
        if (typeof templateId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "templateId"');
        }
        const apiPath = '/functions/templates/{templateId}'.replace('{templateId}', templateId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get usage metrics and statistics for all functions in the project. View statistics including total deployments, builds, logs, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {FunctionUsageRange} range
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageFunctions>}
     */
    listUsage(range?: FunctionUsageRange): Promise<Models.UsageFunctions> {
        const apiPath = '/functions/usage';
        const payload: Payload = {};
        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    get(functionId: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {Runtime} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string[]} scopes
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} specification
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    update(functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: string[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof runtime !== 'undefined') {
            payload['runtime'] = runtime;
        }
        if (typeof execute !== 'undefined') {
            payload['execute'] = execute;
        }
        if (typeof events !== 'undefined') {
            payload['events'] = events;
        }
        if (typeof schedule !== 'undefined') {
            payload['schedule'] = schedule;
        }
        if (typeof timeout !== 'undefined') {
            payload['timeout'] = timeout;
        }
        if (typeof enabled !== 'undefined') {
            payload['enabled'] = enabled;
        }
        if (typeof logging !== 'undefined') {
            payload['logging'] = logging;
        }
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof scopes !== 'undefined') {
            payload['scopes'] = scopes;
        }
        if (typeof installationId !== 'undefined') {
            payload['installationId'] = installationId;
        }
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof providerBranch !== 'undefined') {
            payload['providerBranch'] = providerBranch;
        }
        if (typeof providerSilentMode !== 'undefined') {
            payload['providerSilentMode'] = providerSilentMode;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof specification !== 'undefined') {
            payload['specification'] = specification;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(functionId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Update the function active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your function.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    updateFunctionDeployment(functionId: string, deploymentId: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }
        const apiPath = '/functions/{functionId}/deployment'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a list of all the function&#039;s code deployments. You can use the query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     */
    listDeployments(functionId: string, queries?: string[], search?: string): Promise<Models.DeploymentList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you&#039;ll need to update the function&#039;s deployment to use your new deployment UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).

Use the &quot;command&quot; param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId
     * @param {File} code
     * @param {boolean} activate
     * @param {string} entrypoint
     * @param {string} commands
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDeployment(functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string, onProgress = (progress: UploadProgress) => {}): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }
        if (typeof activate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "activate"');
        }
        const apiPath = '/functions/{functionId}/deployments'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof entrypoint !== 'undefined') {
            payload['entrypoint'] = entrypoint;
        }
        if (typeof commands !== 'undefined') {
            payload['commands'] = commands;
        }
        if (typeof code !== 'undefined') {
            payload['code'] = code;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'multipart/form-data',
        }

        return this.client.chunkedUpload(
            'post',
            uri,
            apiHeaders,
            payload,
            onProgress
        );
    }
    /**
     * Create a new build for an existing function deployment. This endpoint allows you to rebuild a deployment with the updated function configuration, including its entrypoint and build commands if they have been modified. The build process will be queued and executed asynchronously. The original deployment&#039;s code will be preserved and used for the new build.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDuplicateDeployment(functionId: string, deploymentId: string, buildId?: string): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }
        const apiPath = '/functions/{functionId}/deployments/duplicate'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof deploymentId !== 'undefined') {
            payload['deploymentId'] = deploymentId;
        }
        if (typeof buildId !== 'undefined') {
            payload['buildId'] = buildId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Create a deployment based on a template.

Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/server/functions#listTemplates) to find the template details.
     *
     * @param {string} functionId
     * @param {string} repository
     * @param {string} owner
     * @param {string} rootDirectory
     * @param {string} version
     * @param {boolean} activate
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createTemplateDeployment(functionId: string, repository: string, owner: string, rootDirectory: string, version: string, activate?: boolean): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof repository === 'undefined') {
            throw new AppwriteException('Missing required parameter: "repository"');
        }
        if (typeof owner === 'undefined') {
            throw new AppwriteException('Missing required parameter: "owner"');
        }
        if (typeof rootDirectory === 'undefined') {
            throw new AppwriteException('Missing required parameter: "rootDirectory"');
        }
        if (typeof version === 'undefined') {
            throw new AppwriteException('Missing required parameter: "version"');
        }
        const apiPath = '/functions/{functionId}/deployments/template'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof repository !== 'undefined') {
            payload['repository'] = repository;
        }
        if (typeof owner !== 'undefined') {
            payload['owner'] = owner;
        }
        if (typeof rootDirectory !== 'undefined') {
            payload['rootDirectory'] = rootDirectory;
        }
        if (typeof version !== 'undefined') {
            payload['version'] = version;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Create a deployment when a function is connected to VCS.

This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} functionId
     * @param {VCSDeploymentType} type
     * @param {string} reference
     * @param {boolean} activate
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createVcsDeployment(functionId: string, type: VCSDeploymentType, reference: string, activate?: boolean): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }
        if (typeof reference === 'undefined') {
            throw new AppwriteException('Missing required parameter: "reference"');
        }
        const apiPath = '/functions/{functionId}/deployments/vcs'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof reference !== 'undefined') {
            payload['reference'] = reference;
        }
        if (typeof activate !== 'undefined') {
            payload['activate'] = activate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a function deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    getDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDeployment(functionId: string, deploymentId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a function deployment content by its unique ID. The endpoint response return with a &#039;Content-Disposition: attachment&#039; header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {DeploymentDownloadType} type
     * @throws {AppwriteException}
     * @returns {string}
     */
    getDeploymentDownload(functionId: string, deploymentId: string, type?: DeploymentDownloadType): string {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/download'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        payload['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Service.flatten(payload))) {
            uri.searchParams.append(key, value);
        }
        
        return uri.toString();
    }
    /**
     * Cancel an ongoing function deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn&#039;t started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status &#039;ready&#039;) or failed. The response includes the final build status and details.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    updateDeploymentStatus(functionId: string, deploymentId: string): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }
        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/status'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a list of all the current user function execution logs. You can use the query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     */
    listExecutions(functionId: string, queries?: string[]): Promise<Models.ExecutionList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} body
     * @param {boolean} async
     * @param {string} xpath
     * @param {ExecutionMethod} method
     * @param {object} headers
     * @param {string} scheduledAt
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    createExecution(functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string): Promise<Models.Execution> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof body !== 'undefined') {
            payload['body'] = body;
        }
        if (typeof async !== 'undefined') {
            payload['async'] = async;
        }
        if (typeof xpath !== 'undefined') {
            payload['path'] = xpath;
        }
        if (typeof method !== 'undefined') {
            payload['method'] = method;
        }
        if (typeof headers !== 'undefined') {
            payload['headers'] = headers;
        }
        if (typeof scheduledAt !== 'undefined') {
            payload['scheduledAt'] = scheduledAt;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    getExecution(functionId: string, executionId: string): Promise<Models.Execution> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }
        const apiPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete a function execution by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteExecution(functionId: string, executionId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }
        const apiPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get usage metrics and statistics for a for a specific function. View statistics including total deployments, builds, executions, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {string} functionId
     * @param {FunctionUsageRange} range
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageFunction>}
     */
    getUsage(functionId: string, range?: FunctionUsageRange): Promise<Models.UsageFunction> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}/usage'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(functionId: string): Promise<Models.VariableList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.
     *
     * @param {string} functionId
     * @param {string} key
     * @param {string} value
     * @param {boolean} secret
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(functionId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        if (typeof value === 'undefined') {
            throw new AppwriteException('Missing required parameter: "value"');
        }
        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Get a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(functionId: string, variableId: string): Promise<Models.Variable> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @param {boolean} secret
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(functionId: string, variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        if (typeof key === 'undefined') {
            throw new AppwriteException('Missing required parameter: "key"');
        }
        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        const payload: Payload = {};
        if (typeof key !== 'undefined') {
            payload['key'] = key;
        }
        if (typeof value !== 'undefined') {
            payload['value'] = value;
        }
        if (typeof secret !== 'undefined') {
            payload['secret'] = secret;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
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
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(functionId: string, variableId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }
        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }
        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
}
