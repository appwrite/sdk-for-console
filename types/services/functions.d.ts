import { Client, UploadProgress } from '../client';
import type { Models } from '../models';
import { Runtime } from '../enums/runtime';
import { Scopes } from '../enums/scopes';
import { Runtimes } from '../enums/runtimes';
import { UseCases } from '../enums/use-cases';
import { UsageRange } from '../enums/usage-range';
import { TemplateReferenceType } from '../enums/template-reference-type';
import { VCSReferenceType } from '../enums/vcs-reference-type';
import { DeploymentDownloadType } from '../enums/deployment-download-type';
import { ExecutionMethod } from '../enums/execution-method';
export declare class Functions {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all the project's functions. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.FunctionList>}
     */
    list(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.FunctionList>;
    /**
     * Get a list of all the project's functions. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deploymentId, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.FunctionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string, total?: boolean): Promise<Models.FunctionList>;
    /**
     * Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.
     *
     * @param {string} params.functionId - Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Function name. Max length: 128 chars.
     * @param {Runtime} params.runtime - Execution runtime.
     * @param {string[]} params.execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {number} params.timeout - Function maximum execution time in seconds.
     * @param {boolean} params.enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {boolean} params.logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} params.entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string} params.commands - Build Commands.
     * @param {Scopes[]} params.scopes - List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the function.
     * @param {string} params.providerBranch - Production branch for the repo linked to the function.
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.providerRootDirectory - Path to function code in the linked repo.
     * @param {string} params.specification - Runtime specification for the function and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    create(params: {
        functionId: string;
        name: string;
        runtime: Runtime;
        execute?: string[];
        events?: string[];
        schedule?: string;
        timeout?: number;
        enabled?: boolean;
        logging?: boolean;
        entrypoint?: string;
        commands?: string;
        scopes?: Scopes[];
        installationId?: string;
        providerRepositoryId?: string;
        providerBranch?: string;
        providerSilentMode?: boolean;
        providerRootDirectory?: string;
        specification?: string;
    }): Promise<Models.Function>;
    /**
     * Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.
     *
     * @param {string} functionId - Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Function name. Max length: 128 chars.
     * @param {Runtime} runtime - Execution runtime.
     * @param {string[]} execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {number} timeout - Function maximum execution time in seconds.
     * @param {boolean} enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {boolean} logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string} commands - Build Commands.
     * @param {Scopes[]} scopes - List of scopes allowed for API key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the function.
     * @param {string} providerBranch - Production branch for the repo linked to the function.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} providerRootDirectory - Path to function code in the linked repo.
     * @param {string} specification - Runtime specification for the function and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(functionId: string, name: string, runtime: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: Scopes[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Function>;
    /**
     * Get a list of all runtimes that are currently active on your instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.RuntimeList>}
     */
    listRuntimes(): Promise<Models.RuntimeList>;
    /**
     * List allowed function specifications for this instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.SpecificationList>}
     */
    listSpecifications(): Promise<Models.SpecificationList>;
    /**
     * List available function templates. You can use template details in [createFunction](/docs/references/cloud/server-nodejs/functions#create) method.
     *
     * @param {Runtimes[]} params.runtimes - List of runtimes allowed for filtering function templates. Maximum of 100 runtimes are allowed.
     * @param {UseCases[]} params.useCases - List of use cases allowed for filtering function templates. Maximum of 100 use cases are allowed.
     * @param {number} params.limit - Limit the number of templates returned in the response. Default limit is 25, and maximum limit is 5000.
     * @param {number} params.offset - Offset the list of returned templates. Maximum offset is 5000.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateFunctionList>}
     */
    listTemplates(params?: {
        runtimes?: Runtimes[];
        useCases?: UseCases[];
        limit?: number;
        offset?: number;
        total?: boolean;
    }): Promise<Models.TemplateFunctionList>;
    /**
     * List available function templates. You can use template details in [createFunction](/docs/references/cloud/server-nodejs/functions#create) method.
     *
     * @param {Runtimes[]} runtimes - List of runtimes allowed for filtering function templates. Maximum of 100 runtimes are allowed.
     * @param {UseCases[]} useCases - List of use cases allowed for filtering function templates. Maximum of 100 use cases are allowed.
     * @param {number} limit - Limit the number of templates returned in the response. Default limit is 25, and maximum limit is 5000.
     * @param {number} offset - Offset the list of returned templates. Maximum offset is 5000.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateFunctionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTemplates(runtimes?: Runtimes[], useCases?: UseCases[], limit?: number, offset?: number, total?: boolean): Promise<Models.TemplateFunctionList>;
    /**
     * Get a function template using ID. You can use template details in [createFunction](/docs/references/cloud/server-nodejs/functions#create) method.
     *
     * @param {string} params.templateId - Template ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateFunction>}
     */
    getTemplate(params: {
        templateId: string;
    }): Promise<Models.TemplateFunction>;
    /**
     * Get a function template using ID. You can use template details in [createFunction](/docs/references/cloud/server-nodejs/functions#create) method.
     *
     * @param {string} templateId - Template ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateFunction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTemplate(templateId: string): Promise<Models.TemplateFunction>;
    /**
     * Get usage metrics and statistics for all functions in the project. View statistics including total deployments, builds, logs, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageFunctions>}
     */
    listUsage(params?: {
        range?: UsageRange;
    }): Promise<Models.UsageFunctions>;
    /**
     * Get usage metrics and statistics for all functions in the project. View statistics including total deployments, builds, logs, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageFunctions>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listUsage(range?: UsageRange): Promise<Models.UsageFunctions>;
    /**
     * Get a function by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    get(params: {
        functionId: string;
    }): Promise<Models.Function>;
    /**
     * Get a function by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(functionId: string): Promise<Models.Function>;
    /**
     * Update function by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.name - Function name. Max length: 128 chars.
     * @param {Runtime} params.runtime - Execution runtime.
     * @param {string[]} params.execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string[]} params.events - Events list. Maximum of 100 events are allowed.
     * @param {string} params.schedule - Schedule CRON syntax.
     * @param {number} params.timeout - Maximum execution time in seconds.
     * @param {boolean} params.enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {boolean} params.logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} params.entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string} params.commands - Build Commands.
     * @param {Scopes[]} params.scopes - List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Controle System) deployment.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the function
     * @param {string} params.providerBranch - Production branch for the repo linked to the function
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.providerRootDirectory - Path to function code in the linked repo.
     * @param {string} params.specification - Runtime specification for the function and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    update(params: {
        functionId: string;
        name: string;
        runtime?: Runtime;
        execute?: string[];
        events?: string[];
        schedule?: string;
        timeout?: number;
        enabled?: boolean;
        logging?: boolean;
        entrypoint?: string;
        commands?: string;
        scopes?: Scopes[];
        installationId?: string;
        providerRepositoryId?: string;
        providerBranch?: string;
        providerSilentMode?: boolean;
        providerRootDirectory?: string;
        specification?: string;
    }): Promise<Models.Function>;
    /**
     * Update function by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} name - Function name. Max length: 128 chars.
     * @param {Runtime} runtime - Execution runtime.
     * @param {string[]} execute - An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.
     * @param {string[]} events - Events list. Maximum of 100 events are allowed.
     * @param {string} schedule - Schedule CRON syntax.
     * @param {number} timeout - Maximum execution time in seconds.
     * @param {boolean} enabled - Is function enabled? When set to 'disabled', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.
     * @param {boolean} logging - When disabled, executions will exclude logs and errors, and will be slightly faster.
     * @param {string} entrypoint - Entrypoint File. This path is relative to the "providerRootDirectory".
     * @param {string} commands - Build Commands.
     * @param {Scopes[]} scopes - List of scopes allowed for API Key auto-generated for every execution. Maximum of 100 scopes are allowed.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Controle System) deployment.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the function
     * @param {string} providerBranch - Production branch for the repo linked to the function
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} providerRootDirectory - Path to function code in the linked repo.
     * @param {string} specification - Runtime specification for the function and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(functionId: string, name: string, runtime?: Runtime, execute?: string[], events?: string[], schedule?: string, timeout?: number, enabled?: boolean, logging?: boolean, entrypoint?: string, commands?: string, scopes?: Scopes[], installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Function>;
    /**
     * Delete a function by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        functionId: string;
    }): Promise<{}>;
    /**
     * Delete a function by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(functionId: string): Promise<{}>;
    /**
     * Update the function active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your function.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     */
    updateFunctionDeployment(params: {
        functionId: string;
        deploymentId: string;
    }): Promise<Models.Function>;
    /**
     * Update the function active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your function.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Function>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateFunctionDeployment(functionId: string, deploymentId: string): Promise<Models.Function>;
    /**
     * Get a list of all the function's code deployments. You can use the query params to filter your results.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     */
    listDeployments(params: {
        functionId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.DeploymentList>;
    /**
     * Get a list of all the function's code deployments. You can use the query params to filter your results.
     *
     * @param {string} functionId - Function ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDeployments(functionId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.DeploymentList>;
    /**
     * Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.
     *
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).
     *
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} params.functionId - Function ID.
     * @param {File} params.code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @param {string} params.entrypoint - Entrypoint File.
     * @param {string} params.commands - Build Commands.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDeployment(params: {
        functionId: string;
        code: File;
        activate: boolean;
        entrypoint?: string;
        commands?: string;
        onProgress?: (progress: UploadProgress) => void;
    }): Promise<Models.Deployment>;
    /**
     * Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.
     *
     * This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).
     *
     * Use the "command" param to set the entrypoint used to execute your code.
     *
     * @param {string} functionId - Function ID.
     * @param {File} code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @param {string} entrypoint - Entrypoint File.
     * @param {string} commands - Build Commands.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDeployment(functionId: string, code: File, activate: boolean, entrypoint?: string, commands?: string, onProgress?: (progress: UploadProgress) => void): Promise<Models.Deployment>;
    /**
     * Create a new build for an existing function deployment. This endpoint allows you to rebuild a deployment with the updated function configuration, including its entrypoint and build commands if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @param {string} params.buildId - Build unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDuplicateDeployment(params: {
        functionId: string;
        deploymentId: string;
        buildId?: string;
    }): Promise<Models.Deployment>;
    /**
     * Create a new build for an existing function deployment. This endpoint allows you to rebuild a deployment with the updated function configuration, including its entrypoint and build commands if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {string} buildId - Build unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDuplicateDeployment(functionId: string, deploymentId: string, buildId?: string): Promise<Models.Deployment>;
    /**
     * Create a deployment based on a template.
     *
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/products/functions/templates) to find the template details.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.repository - Repository name of the template.
     * @param {string} params.owner - The name of the owner of the template.
     * @param {string} params.rootDirectory - Path to function code in the template repo.
     * @param {TemplateReferenceType} params.type - Type for the reference provided. Can be commit, branch, or tag
     * @param {string} params.reference - Reference value, can be a commit hash, branch name, or release tag
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createTemplateDeployment(params: {
        functionId: string;
        repository: string;
        owner: string;
        rootDirectory: string;
        type: TemplateReferenceType;
        reference: string;
        activate?: boolean;
    }): Promise<Models.Deployment>;
    /**
     * Create a deployment based on a template.
     *
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/products/functions/templates) to find the template details.
     *
     * @param {string} functionId - Function ID.
     * @param {string} repository - Repository name of the template.
     * @param {string} owner - The name of the owner of the template.
     * @param {string} rootDirectory - Path to function code in the template repo.
     * @param {TemplateReferenceType} type - Type for the reference provided. Can be commit, branch, or tag
     * @param {string} reference - Reference value, can be a commit hash, branch name, or release tag
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTemplateDeployment(functionId: string, repository: string, owner: string, rootDirectory: string, type: TemplateReferenceType, reference: string, activate?: boolean): Promise<Models.Deployment>;
    /**
     * Create a deployment when a function is connected to VCS.
     *
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} params.functionId - Function ID.
     * @param {VCSReferenceType} params.type - Type of reference passed. Allowed values are: branch, commit
     * @param {string} params.reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createVcsDeployment(params: {
        functionId: string;
        type: VCSReferenceType;
        reference: string;
        activate?: boolean;
    }): Promise<Models.Deployment>;
    /**
     * Create a deployment when a function is connected to VCS.
     *
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} functionId - Function ID.
     * @param {VCSReferenceType} type - Type of reference passed. Allowed values are: branch, commit
     * @param {string} reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVcsDeployment(functionId: string, type: VCSReferenceType, reference: string, activate?: boolean): Promise<Models.Deployment>;
    /**
     * Get a function deployment by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    getDeployment(params: {
        functionId: string;
        deploymentId: string;
    }): Promise<Models.Deployment>;
    /**
     * Get a function deployment by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDeployment(functionId: string, deploymentId: string): Promise<Models.Deployment>;
    /**
     * Delete a code deployment by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDeployment(params: {
        functionId: string;
        deploymentId: string;
    }): Promise<{}>;
    /**
     * Delete a code deployment by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDeployment(functionId: string, deploymentId: string): Promise<{}>;
    /**
     * Get a function deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @param {DeploymentDownloadType} params.type - Deployment file to download. Can be: "source", "output".
     * @throws {AppwriteException}
     * @returns {string}
     */
    getDeploymentDownload(params: {
        functionId: string;
        deploymentId: string;
        type?: DeploymentDownloadType;
    }): string;
    /**
     * Get a function deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {DeploymentDownloadType} type - Deployment file to download. Can be: "source", "output".
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDeploymentDownload(functionId: string, deploymentId: string, type?: DeploymentDownloadType): string;
    /**
     * Cancel an ongoing function deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    updateDeploymentStatus(params: {
        functionId: string;
        deploymentId: string;
    }): Promise<Models.Deployment>;
    /**
     * Cancel an ongoing function deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} functionId - Function ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDeploymentStatus(functionId: string, deploymentId: string): Promise<Models.Deployment>;
    /**
     * Get a list of all the current user function execution logs. You can use the query params to filter your results.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     */
    listExecutions(params: {
        functionId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ExecutionList>;
    /**
     * Get a list of all the current user function execution logs. You can use the query params to filter your results.
     *
     * @param {string} functionId - Function ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listExecutions(functionId: string, queries?: string[], total?: boolean): Promise<Models.ExecutionList>;
    /**
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.body - HTTP body of execution. Default value is empty string.
     * @param {boolean} params.async - Execute code in the background. Default value is false.
     * @param {string} params.xpath - HTTP path of execution. Path can include query params. Default value is /
     * @param {ExecutionMethod} params.method - HTTP method of execution. Default value is POST.
     * @param {object} params.headers - HTTP headers of execution. Defaults to empty.
     * @param {string} params.scheduledAt - Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    createExecution(params: {
        functionId: string;
        body?: string;
        async?: boolean;
        xpath?: string;
        method?: ExecutionMethod;
        headers?: object;
        scheduledAt?: string;
    }): Promise<Models.Execution>;
    /**
     * Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.
     *
     * @param {string} functionId - Function ID.
     * @param {string} body - HTTP body of execution. Default value is empty string.
     * @param {boolean} async - Execute code in the background. Default value is false.
     * @param {string} xpath - HTTP path of execution. Path can include query params. Default value is /
     * @param {ExecutionMethod} method - HTTP method of execution. Default value is POST.
     * @param {object} headers - HTTP headers of execution. Defaults to empty.
     * @param {string} scheduledAt - Scheduled execution time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future with precision in minutes.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createExecution(functionId: string, body?: string, async?: boolean, xpath?: string, method?: ExecutionMethod, headers?: object, scheduledAt?: string): Promise<Models.Execution>;
    /**
     * Get a function execution log by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.executionId - Execution ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    getExecution(params: {
        functionId: string;
        executionId: string;
    }): Promise<Models.Execution>;
    /**
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} executionId - Execution ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getExecution(functionId: string, executionId: string): Promise<Models.Execution>;
    /**
     * Delete a function execution by its unique ID.
     *
     * @param {string} params.functionId - Function ID.
     * @param {string} params.executionId - Execution ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteExecution(params: {
        functionId: string;
        executionId: string;
    }): Promise<{}>;
    /**
     * Delete a function execution by its unique ID.
     *
     * @param {string} functionId - Function ID.
     * @param {string} executionId - Execution ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteExecution(functionId: string, executionId: string): Promise<{}>;
    /**
     * Get usage metrics and statistics for a for a specific function. View statistics including total deployments, builds, executions, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {string} params.functionId - Function ID.
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageFunction>}
     */
    getUsage(params: {
        functionId: string;
        range?: UsageRange;
    }): Promise<Models.UsageFunction>;
    /**
     * Get usage metrics and statistics for a for a specific function. View statistics including total deployments, builds, executions, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {string} functionId - Function ID.
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageFunction>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(functionId: string, range?: UsageRange): Promise<Models.UsageFunction>;
    /**
     * Get a list of all variables of a specific function.
     *
     * @param {string} params.functionId - Function unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(params: {
        functionId: string;
    }): Promise<Models.VariableList>;
    /**
     * Get a list of all variables of a specific function.
     *
     * @param {string} functionId - Function unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listVariables(functionId: string): Promise<Models.VariableList>;
    /**
     * Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: {
        functionId: string;
        key: string;
        value: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(functionId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: {
        functionId: string;
        variableId: string;
    }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(functionId: string, variableId: string): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: {
        functionId: string;
        variableId: string;
        key: string;
        value?: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only functions can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(functionId: string, variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} params.functionId - Function unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: {
        functionId: string;
        variableId: string;
    }): Promise<{}>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} functionId - Function unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(functionId: string, variableId: string): Promise<{}>;
}
