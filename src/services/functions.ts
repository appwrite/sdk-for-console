import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Functions extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * List Functions
     *
     * Get a list of all the project's functions. You can use the query params to
     * filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async list(queries?: string[], search?: string): Promise<Models.FunctionList> {
        const apiPath = '/functions';
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Function
     *
     * Create a new function. You can pass a list of
     * [permissions](/docs/permissions) to allow different project users or team
     * with access to execute the function using the client API.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @param {string} templateRepository
     * @param {string} templateOwner
     * @param {string} templateRootDirectory
     * @param {string} templateBranch
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async create(functionId: string, name: string, runtime: string, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, templateRepository?: string, templateOwner?: string, templateRootDirectory?: string, templateBranch?: string): Promise<Models.Function> {
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

        if (typeof templateRepository !== 'undefined') {
            payload['templateRepository'] = templateRepository;
        }

        if (typeof templateOwner !== 'undefined') {
            payload['templateOwner'] = templateOwner;
        }

        if (typeof templateRootDirectory !== 'undefined') {
            payload['templateRootDirectory'] = templateRootDirectory;
        }

        if (typeof templateBranch !== 'undefined') {
            payload['templateBranch'] = templateBranch;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List runtimes
     *
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listRuntimes(): Promise<Models.RuntimeList> {
        const apiPath = '/functions/runtimes';
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Functions Usage
     *
     *
     * @param {string} range
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getUsage(range?: string): Promise<Models.UsageFunctions> {
        const apiPath = '/functions/usage';
        const payload: Payload = {};

        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Function
     *
     * Get a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async get(functionId: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Function
     *
     * Update function by its unique ID.
     *
     * @param {string} functionId
     * @param {string} name
     * @param {string} runtime
     * @param {string[]} execute
     * @param {string[]} events
     * @param {string} schedule
     * @param {number} timeout
     * @param {boolean} enabled
     * @param {boolean} logging
     * @param {string} entrypoint
     * @param {string} commands
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerBranch
     * @param {boolean} providerSilentMode
     * @param {string} providerRootDirectory
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async update(functionId: string, name: string, runtime: string, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }

        if (typeof runtime === 'undefined') {
            throw new AppwriteException('Missing required parameter: "runtime"');
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

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('put', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Function
     *
     * Delete a function by its unique ID.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async delete(functionId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}'.replace('{functionId}', functionId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Deployments
     *
     * Get a list of all the project's code deployments. You can use the query
     * params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listDeployments(functionId: string, queries?: string[], search?: string): Promise<Models.DeploymentList> {
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
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Deployment
     *
     * Create a new function code deployment. Use this endpoint to upload a new
     * version of your code function. To execute your newly uploaded code, you'll
     * need to update the function's deployment to use your new deployment UID.
     * 
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to
     * include any dependencies your code has within the compressed file. You can
     * learn more about code packaging in the [Appwrite Cloud Functions
     * tutorial](/docs/functions).
     * 
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId
     * @param {File} code
     * @param {boolean} activate
     * @param {string} entrypoint
     * @param {string} commands
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createDeployment(functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string, onProgress = (progress: UploadProgress) => {}): Promise<Models.Deployment> {
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

        if(!(code instanceof File)) {
            throw new AppwriteException('Parameter "code" has to be a File.');
        }

        const size = code.size;

        if (size <= Service.CHUNK_SIZE) {
            return await this.client.call('post', uri, {

                'content-type': 'multipart/form-data',
            }, payload);
        }
        let id = undefined;
        let response = undefined;

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'multipart/form-data',
        }

        let counter = 0;
        const totalCounters = Math.ceil(size / Service.CHUNK_SIZE);

        for (counter; counter < totalCounters; counter++) {
            const start = (counter * Service.CHUNK_SIZE);
            const end = Math.min((((counter * Service.CHUNK_SIZE) + Service.CHUNK_SIZE) - 1), size);

            apiHeaders['content-range'] = 'bytes ' + start + '-' + end + '/' + size

            if (id) {
                apiHeaders['x-appwrite-id'] = id;
            }

            const stream = code.slice(start, end + 1);
            payload['code'] = new File([stream], code.name);

            response = await this.client.call('post', uri, apiHeaders, payload);

            if (!id) {
                id = response['$id'];
            }

            if (onProgress) {
                onProgress({
                    $id: response.$id,
                    progress: Math.min((counter + 1) * Service.CHUNK_SIZE, size) / size * 100,
                    sizeUploaded: end,
                    chunksTotal: response.chunksTotal,
                    chunksUploaded: response.chunksUploaded
                });
            }
        }

        return response;
    }

    /**
     * Get Deployment
     *
     * Get a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Function Deployment
     *
     * Update the function code deployment ID using the unique function ID. Use
     * this endpoint to switch the code deployment that should be executed by the
     * execution endpoint.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateDeployment(functionId: string, deploymentId: string): Promise<Models.Function> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('patch', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Deployment
     *
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteDeployment(functionId: string, deploymentId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Build
     *
     * Create a new build for an Appwrite Function deployment. This endpoint can
     * be used to retry a failed build.
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @param {string} buildId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createBuild(functionId: string, deploymentId: string, buildId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        if (typeof buildId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "buildId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId).replace('{buildId}', buildId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Download Deployment
     *
     *
     * @param {string} functionId
     * @param {string} deploymentId
     * @throws {AppwriteException}
     * @returns {URL}
    */
    downloadDeployment(functionId: string, deploymentId: string): URL {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof deploymentId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "deploymentId"');
        }

        const apiPath = '/functions/{functionId}/deployments/{deploymentId}/download'.replace('{functionId}', functionId).replace('{deploymentId}', deploymentId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        payload['project'] = this.client.config.project;


        for (const [key, value] of Object.entries(Service.flatten(payload))) {
            uri.searchParams.append(key, value);
        }
        return uri;
    }

    /**
     * List Executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results.
     *
     * @param {string} functionId
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listExecutions(functionId: string, queries?: string[], search?: string): Promise<Models.ExecutionList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
        const payload: Payload = {};

        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }

        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} body
     * @param {boolean} async
     * @param {string} xpath
     * @param {string} method
     * @param {object} headers
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createExecution(functionId: string, body?: string, async?: boolean, xpath?: string, method?: string, headers?: object): Promise<Models.Execution> {
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

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getExecution(functionId: string, executionId: string): Promise<Models.Execution> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof executionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "executionId"');
        }

        const apiPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Function Usage
     *
     *
     * @param {string} functionId
     * @param {string} range
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getFunctionUsage(functionId: string, range?: string): Promise<Models.UsageFunctions> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/usage'.replace('{functionId}', functionId);
        const payload: Payload = {};

        if (typeof range !== 'undefined') {
            payload['range'] = range;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * List Variables
     *
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async listVariables(functionId: string): Promise<Models.VariableList> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        const apiPath = '/functions/{functionId}/variables'.replace('{functionId}', functionId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Create Variable
     *
     * Create a new function environment variable. These variables can be accessed
     * in the function at runtime as environment variables.
     *
     * @param {string} functionId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async createVariable(functionId: string, key: string, value: string): Promise<Models.Variable> {
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

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('post', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Get Variable
     *
     * Get a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async getVariable(functionId: string, variableId: string): Promise<Models.Variable> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('get', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Update Variable
     *
     * Update variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @param {string} key
     * @param {string} value
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async updateVariable(functionId: string, variableId: string, key: string, value?: string): Promise<Models.Variable> {
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

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('put', uri, {
            'content-type': 'application/json',
        }, payload);
    }

    /**
     * Delete Variable
     *
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId
     * @param {string} variableId
     * @throws {AppwriteException}
     * @returns {Promise}
    */
    async deleteVariable(functionId: string, variableId: string): Promise<{}> {
        if (typeof functionId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "functionId"');
        }

        if (typeof variableId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "variableId"');
        }

        const apiPath = '/functions/{functionId}/variables/{variableId}'.replace('{functionId}', functionId).replace('{variableId}', variableId);
        const payload: Payload = {};

        const uri = new URL(this.client.config.endpoint + apiPath);
        return await this.client.call('delete', uri, {
            'content-type': 'application/json',
        }, payload);
    }
};
