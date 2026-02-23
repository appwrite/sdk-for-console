import { Client, UploadProgress } from '../client';
import type { Models } from '../models';
import { Framework } from '../enums/framework';
import { BuildRuntime } from '../enums/build-runtime';
import { Adapter } from '../enums/adapter';
import { Frameworks } from '../enums/frameworks';
import { UseCases } from '../enums/use-cases';
import { UsageRange } from '../enums/usage-range';
import { TemplateReferenceType } from '../enums/template-reference-type';
import { VCSReferenceType } from '../enums/vcs-reference-type';
import { DeploymentDownloadType } from '../enums/deployment-download-type';
export declare class Sites {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all the project's sites. You can use the query params to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, framework, deploymentId, buildCommand, installCommand, outputDirectory, installationId
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SiteList>}
     */
    list(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.SiteList>;
    /**
     * Get a list of all the project's sites. You can use the query params to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, framework, deploymentId, buildCommand, installCommand, outputDirectory, installationId
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.SiteList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list(queries?: string[], search?: string, total?: boolean): Promise<Models.SiteList>;
    /**
     * Create a new site.
     *
     * @param {string} params.siteId - Site ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Site name. Max length: 128 chars.
     * @param {Framework} params.framework - Sites framework.
     * @param {BuildRuntime} params.buildRuntime - Runtime to use during build step.
     * @param {boolean} params.enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {boolean} params.logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {number} params.timeout - Maximum request time in seconds.
     * @param {string} params.installCommand - Install Command.
     * @param {string} params.buildCommand - Build Command.
     * @param {string} params.outputDirectory - Output Directory for site.
     * @param {Adapter} params.adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} params.fallbackFile - Fallback file for single page application sites.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} params.providerBranch - Production branch for the repo linked to the site.
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.providerRootDirectory - Path to site code in the linked repo.
     * @param {string} params.specification - Framework specification for the site and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    create(params: {
        siteId: string;
        name: string;
        framework: Framework;
        buildRuntime: BuildRuntime;
        enabled?: boolean;
        logging?: boolean;
        timeout?: number;
        installCommand?: string;
        buildCommand?: string;
        outputDirectory?: string;
        adapter?: Adapter;
        installationId?: string;
        fallbackFile?: string;
        providerRepositoryId?: string;
        providerBranch?: string;
        providerSilentMode?: boolean;
        providerRootDirectory?: string;
        specification?: string;
    }): Promise<Models.Site>;
    /**
     * Create a new site.
     *
     * @param {string} siteId - Site ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Site name. Max length: 128 chars.
     * @param {Framework} framework - Sites framework.
     * @param {BuildRuntime} buildRuntime - Runtime to use during build step.
     * @param {boolean} enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {boolean} logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {number} timeout - Maximum request time in seconds.
     * @param {string} installCommand - Install Command.
     * @param {string} buildCommand - Build Command.
     * @param {string} outputDirectory - Output Directory for site.
     * @param {Adapter} adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} fallbackFile - Fallback file for single page application sites.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} providerBranch - Production branch for the repo linked to the site.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} providerRootDirectory - Path to site code in the linked repo.
     * @param {string} specification - Framework specification for the site and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create(siteId: string, name: string, framework: Framework, buildRuntime: BuildRuntime, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, adapter?: Adapter, installationId?: string, fallbackFile?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site>;
    /**
     * Get a list of all frameworks that are currently available on the server instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.FrameworkList>}
     */
    listFrameworks(): Promise<Models.FrameworkList>;
    /**
     * List allowed site specifications for this instance.
     *
     * @throws {AppwriteException}
     * @returns {Promise<Models.SpecificationList>}
     */
    listSpecifications(): Promise<Models.SpecificationList>;
    /**
     * List available site templates. You can use template details in [createSite](/docs/references/cloud/server-nodejs/sites#create) method.
     *
     * @param {Frameworks[]} params.frameworks - List of frameworks allowed for filtering site templates. Maximum of 100 frameworks are allowed.
     * @param {UseCases[]} params.useCases - List of use cases allowed for filtering site templates. Maximum of 100 use cases are allowed.
     * @param {number} params.limit - Limit the number of templates returned in the response. Default limit is 25, and maximum limit is 5000.
     * @param {number} params.offset - Offset the list of returned templates. Maximum offset is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateSiteList>}
     */
    listTemplates(params?: {
        frameworks?: Frameworks[];
        useCases?: UseCases[];
        limit?: number;
        offset?: number;
    }): Promise<Models.TemplateSiteList>;
    /**
     * List available site templates. You can use template details in [createSite](/docs/references/cloud/server-nodejs/sites#create) method.
     *
     * @param {Frameworks[]} frameworks - List of frameworks allowed for filtering site templates. Maximum of 100 frameworks are allowed.
     * @param {UseCases[]} useCases - List of use cases allowed for filtering site templates. Maximum of 100 use cases are allowed.
     * @param {number} limit - Limit the number of templates returned in the response. Default limit is 25, and maximum limit is 5000.
     * @param {number} offset - Offset the list of returned templates. Maximum offset is 5000.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateSiteList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listTemplates(frameworks?: Frameworks[], useCases?: UseCases[], limit?: number, offset?: number): Promise<Models.TemplateSiteList>;
    /**
     * Get a site template using ID. You can use template details in [createSite](/docs/references/cloud/server-nodejs/sites#create) method.
     *
     * @param {string} params.templateId - Template ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateSite>}
     */
    getTemplate(params: {
        templateId: string;
    }): Promise<Models.TemplateSite>;
    /**
     * Get a site template using ID. You can use template details in [createSite](/docs/references/cloud/server-nodejs/sites#create) method.
     *
     * @param {string} templateId - Template ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TemplateSite>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getTemplate(templateId: string): Promise<Models.TemplateSite>;
    /**
     * Get usage metrics and statistics for all sites in the project. View statistics including total deployments, builds, logs, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageSites>}
     */
    listUsage(params?: {
        range?: UsageRange;
    }): Promise<Models.UsageSites>;
    /**
     * Get usage metrics and statistics for all sites in the project. View statistics including total deployments, builds, logs, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageSites>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listUsage(range?: UsageRange): Promise<Models.UsageSites>;
    /**
     * Get a site by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    get(params: {
        siteId: string;
    }): Promise<Models.Site>;
    /**
     * Get a site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get(siteId: string): Promise<Models.Site>;
    /**
     * Update site by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.name - Site name. Max length: 128 chars.
     * @param {Framework} params.framework - Sites framework.
     * @param {boolean} params.enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {boolean} params.logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {number} params.timeout - Maximum request time in seconds.
     * @param {string} params.installCommand - Install Command.
     * @param {string} params.buildCommand - Build Command.
     * @param {string} params.outputDirectory - Output Directory for site.
     * @param {BuildRuntime} params.buildRuntime - Runtime to use during build step.
     * @param {Adapter} params.adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} params.fallbackFile - Fallback file for single page application sites.
     * @param {string} params.installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} params.providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} params.providerBranch - Production branch for the repo linked to the site.
     * @param {boolean} params.providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} params.providerRootDirectory - Path to site code in the linked repo.
     * @param {string} params.specification - Framework specification for the site and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    update(params: {
        siteId: string;
        name: string;
        framework: Framework;
        enabled?: boolean;
        logging?: boolean;
        timeout?: number;
        installCommand?: string;
        buildCommand?: string;
        outputDirectory?: string;
        buildRuntime?: BuildRuntime;
        adapter?: Adapter;
        fallbackFile?: string;
        installationId?: string;
        providerRepositoryId?: string;
        providerBranch?: string;
        providerSilentMode?: boolean;
        providerRootDirectory?: string;
        specification?: string;
    }): Promise<Models.Site>;
    /**
     * Update site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} name - Site name. Max length: 128 chars.
     * @param {Framework} framework - Sites framework.
     * @param {boolean} enabled - Is site enabled? When set to 'disabled', users cannot access the site but Server SDKs with and API key can still access the site. No data is lost when this is toggled.
     * @param {boolean} logging - When disabled, request logs will exclude logs and errors, and site responses will be slightly faster.
     * @param {number} timeout - Maximum request time in seconds.
     * @param {string} installCommand - Install Command.
     * @param {string} buildCommand - Build Command.
     * @param {string} outputDirectory - Output Directory for site.
     * @param {BuildRuntime} buildRuntime - Runtime to use during build step.
     * @param {Adapter} adapter - Framework adapter defining rendering strategy. Allowed values are: static, ssr
     * @param {string} fallbackFile - Fallback file for single page application sites.
     * @param {string} installationId - Appwrite Installation ID for VCS (Version Control System) deployment.
     * @param {string} providerRepositoryId - Repository ID of the repo linked to the site.
     * @param {string} providerBranch - Production branch for the repo linked to the site.
     * @param {boolean} providerSilentMode - Is the VCS (Version Control System) connection in silent mode for the repo linked to the site? In silent mode, comments will not be made on commits and pull requests.
     * @param {string} providerRootDirectory - Path to site code in the linked repo.
     * @param {string} specification - Framework specification for the site and builds.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    update(siteId: string, name: string, framework: Framework, enabled?: boolean, logging?: boolean, timeout?: number, installCommand?: string, buildCommand?: string, outputDirectory?: string, buildRuntime?: BuildRuntime, adapter?: Adapter, fallbackFile?: string, installationId?: string, providerRepositoryId?: string, providerBranch?: string, providerSilentMode?: boolean, providerRootDirectory?: string, specification?: string): Promise<Models.Site>;
    /**
     * Delete a site by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        siteId: string;
    }): Promise<{}>;
    /**
     * Delete a site by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(siteId: string): Promise<{}>;
    /**
     * Update the site active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your site.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     */
    updateSiteDeployment(params: {
        siteId: string;
        deploymentId: string;
    }): Promise<Models.Site>;
    /**
     * Update the site active deployment. Use this endpoint to switch the code deployment that should be used when visitor opens your site.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Site>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateSiteDeployment(siteId: string, deploymentId: string): Promise<Models.Site>;
    /**
     * Get a list of all the site's code deployments. You can use the query params to filter your results.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     */
    listDeployments(params: {
        siteId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.DeploymentList>;
    /**
     * Get a list of all the site's code deployments. You can use the query params to filter your results.
     *
     * @param {string} siteId - Site ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: buildSize, sourceSize, totalSize, buildDuration, status, activate, type
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.DeploymentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listDeployments(siteId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.DeploymentList>;
    /**
     * Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you'll need to update the site's deployment to use your new deployment ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {File} params.code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @param {string} params.installCommand - Install Commands.
     * @param {string} params.buildCommand - Build Commands.
     * @param {string} params.outputDirectory - Output Directory.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDeployment(params: {
        siteId: string;
        code: File;
        activate: boolean;
        installCommand?: string;
        buildCommand?: string;
        outputDirectory?: string;
        onProgress?: (progress: UploadProgress) => void;
    }): Promise<Models.Deployment>;
    /**
     * Create a new site code deployment. Use this endpoint to upload a new version of your site code. To activate your newly uploaded code, you'll need to update the site's deployment to use your new deployment ID.
     *
     * @param {string} siteId - Site ID.
     * @param {File} code - Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @param {string} installCommand - Install Commands.
     * @param {string} buildCommand - Build Commands.
     * @param {string} outputDirectory - Output Directory.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDeployment(siteId: string, code: File, activate: boolean, installCommand?: string, buildCommand?: string, outputDirectory?: string, onProgress?: (progress: UploadProgress) => void): Promise<Models.Deployment>;
    /**
     * Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createDuplicateDeployment(params: {
        siteId: string;
        deploymentId: string;
    }): Promise<Models.Deployment>;
    /**
     * Create a new build for an existing site deployment. This endpoint allows you to rebuild a deployment with the updated site configuration, including its commands and output directory if they have been modified. The build process will be queued and executed asynchronously. The original deployment's code will be preserved and used for the new build.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createDuplicateDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    /**
     * Create a deployment based on a template.
     *
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/products/sites/templates) to find the template details.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.repository - Repository name of the template.
     * @param {string} params.owner - The name of the owner of the template.
     * @param {string} params.rootDirectory - Path to site code in the template repo.
     * @param {TemplateReferenceType} params.type - Type for the reference provided. Can be commit, branch, or tag
     * @param {string} params.reference - Reference value, can be a commit hash, branch name, or release tag
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createTemplateDeployment(params: {
        siteId: string;
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
     * Use this endpoint with combination of [listTemplates](https://appwrite.io/docs/products/sites/templates) to find the template details.
     *
     * @param {string} siteId - Site ID.
     * @param {string} repository - Repository name of the template.
     * @param {string} owner - The name of the owner of the template.
     * @param {string} rootDirectory - Path to site code in the template repo.
     * @param {TemplateReferenceType} type - Type for the reference provided. Can be commit, branch, or tag
     * @param {string} reference - Reference value, can be a commit hash, branch name, or release tag
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createTemplateDeployment(siteId: string, repository: string, owner: string, rootDirectory: string, type: TemplateReferenceType, reference: string, activate?: boolean): Promise<Models.Deployment>;
    /**
     * Create a deployment when a site is connected to VCS.
     *
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} params.siteId - Site ID.
     * @param {VCSReferenceType} params.type - Type of reference passed. Allowed values are: branch, commit
     * @param {string} params.reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {boolean} params.activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    createVcsDeployment(params: {
        siteId: string;
        type: VCSReferenceType;
        reference: string;
        activate?: boolean;
    }): Promise<Models.Deployment>;
    /**
     * Create a deployment when a site is connected to VCS.
     *
     * This endpoint lets you create deployment from a branch, commit, or a tag.
     *
     * @param {string} siteId - Site ID.
     * @param {VCSReferenceType} type - Type of reference passed. Allowed values are: branch, commit
     * @param {string} reference - VCS reference to create deployment from. Depending on type this can be: branch name, commit hash
     * @param {boolean} activate - Automatically activate the deployment when it is finished building.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVcsDeployment(siteId: string, type: VCSReferenceType, reference: string, activate?: boolean): Promise<Models.Deployment>;
    /**
     * Get a site deployment by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    getDeployment(params: {
        siteId: string;
        deploymentId: string;
    }): Promise<Models.Deployment>;
    /**
     * Get a site deployment by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDeployment(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    /**
     * Delete a site deployment by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteDeployment(params: {
        siteId: string;
        deploymentId: string;
    }): Promise<{}>;
    /**
     * Delete a site deployment by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteDeployment(siteId: string, deploymentId: string): Promise<{}>;
    /**
     * Get a site deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @param {DeploymentDownloadType} params.type - Deployment file to download. Can be: "source", "output".
     * @throws {AppwriteException}
     * @returns {string}
     */
    getDeploymentDownload(params: {
        siteId: string;
        deploymentId: string;
        type?: DeploymentDownloadType;
    }): string;
    /**
     * Get a site deployment content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @param {DeploymentDownloadType} type - Deployment file to download. Can be: "source", "output".
     * @throws {AppwriteException}
     * @returns {string}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getDeploymentDownload(siteId: string, deploymentId: string, type?: DeploymentDownloadType): string;
    /**
     * Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     */
    updateDeploymentStatus(params: {
        siteId: string;
        deploymentId: string;
    }): Promise<Models.Deployment>;
    /**
     * Cancel an ongoing site deployment build. If the build is already in progress, it will be stopped and marked as canceled. If the build hasn't started yet, it will be marked as canceled without executing. You cannot cancel builds that have already completed (status 'ready') or failed. The response includes the final build status and details.
     *
     * @param {string} siteId - Site ID.
     * @param {string} deploymentId - Deployment ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Deployment>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateDeploymentStatus(siteId: string, deploymentId: string): Promise<Models.Deployment>;
    /**
     * Get a list of all site logs. You can use the query params to filter your results.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     */
    listLogs(params: {
        siteId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.ExecutionList>;
    /**
     * Get a list of all site logs. You can use the query params to filter your results.
     *
     * @param {string} siteId - Site ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration, requestMethod, requestPath, deploymentId
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.ExecutionList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listLogs(siteId: string, queries?: string[], total?: boolean): Promise<Models.ExecutionList>;
    /**
     * Get a site request log by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.logId - Log ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     */
    getLog(params: {
        siteId: string;
        logId: string;
    }): Promise<Models.Execution>;
    /**
     * Get a site request log by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} logId - Log ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Execution>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getLog(siteId: string, logId: string): Promise<Models.Execution>;
    /**
     * Delete a site log by its unique ID.
     *
     * @param {string} params.siteId - Site ID.
     * @param {string} params.logId - Log ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteLog(params: {
        siteId: string;
        logId: string;
    }): Promise<{}>;
    /**
     * Delete a site log by its unique ID.
     *
     * @param {string} siteId - Site ID.
     * @param {string} logId - Log ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteLog(siteId: string, logId: string): Promise<{}>;
    /**
     * Get usage metrics and statistics for a for a specific site. View statistics including total deployments, builds, executions, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {string} params.siteId - Site ID.
     * @param {UsageRange} params.range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageSite>}
     */
    getUsage(params: {
        siteId: string;
        range?: UsageRange;
    }): Promise<Models.UsageSite>;
    /**
     * Get usage metrics and statistics for a for a specific site. View statistics including total deployments, builds, executions, storage usage, and compute time. The response includes both current totals and historical data for each metric. Use the optional range parameter to specify the time window for historical data: 24h (last 24 hours), 30d (last 30 days), or 90d (last 90 days). If not specified, defaults to 30 days.
     *
     * @param {string} siteId - Site ID.
     * @param {UsageRange} range - Date range.
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageSite>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getUsage(siteId: string, range?: UsageRange): Promise<Models.UsageSite>;
    /**
     * Get a list of all variables of a specific site.
     *
     * @param {string} params.siteId - Site unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     */
    listVariables(params: {
        siteId: string;
    }): Promise<Models.VariableList>;
    /**
     * Get a list of all variables of a specific site.
     *
     * @param {string} siteId - Site unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.VariableList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listVariables(siteId: string): Promise<Models.VariableList>;
    /**
     * Create a new site variable. These variables can be accessed during build and runtime (server-side rendering) as environment variables.
     *
     * @param {string} params.siteId - Site unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    createVariable(params: {
        siteId: string;
        key: string;
        value: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Create a new site variable. These variables can be accessed during build and runtime (server-side rendering) as environment variables.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createVariable(siteId: string, key: string, value: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} params.siteId - Site unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    getVariable(params: {
        siteId: string;
        variableId: string;
    }): Promise<Models.Variable>;
    /**
     * Get a variable by its unique ID.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getVariable(siteId: string, variableId: string): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} params.siteId - Site unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @param {string} params.key - Variable key. Max length: 255 chars.
     * @param {string} params.value - Variable value. Max length: 8192 chars.
     * @param {boolean} params.secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     */
    updateVariable(params: {
        siteId: string;
        variableId: string;
        key: string;
        value?: string;
        secret?: boolean;
    }): Promise<Models.Variable>;
    /**
     * Update variable by its unique ID.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @param {string} key - Variable key. Max length: 255 chars.
     * @param {string} value - Variable value. Max length: 8192 chars.
     * @param {boolean} secret - Secret variables can be updated or deleted, but only sites can read them during build and runtime.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Variable>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateVariable(siteId: string, variableId: string, key: string, value?: string, secret?: boolean): Promise<Models.Variable>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} params.siteId - Site unique ID.
     * @param {string} params.variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteVariable(params: {
        siteId: string;
        variableId: string;
    }): Promise<{}>;
    /**
     * Delete a variable by its unique ID.
     *
     * @param {string} siteId - Site unique ID.
     * @param {string} variableId - Variable unique ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteVariable(siteId: string, variableId: string): Promise<{}>;
}
