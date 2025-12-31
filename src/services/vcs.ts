import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

import { VCSDetectionType } from '../enums/vcs-detection-type';

export class Vcs {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Analyze a GitHub repository to automatically detect the programming language and runtime environment. This endpoint scans the repository's files and language statistics to determine the appropriate runtime settings for your function. The GitHub installation must be properly configured and the repository must be accessible through your installation for this endpoint to work.
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.providerRepositoryId - Repository Id
     * @param {VCSDetectionType} params.type - Detector type. Must be one of the following: runtime, framework
     * @param {string} params.providerRootDirectory - Path to Root Directory
     * @throws {AppwriteException}
     * @returns {Promise<Models.DetectionFramework>}
     */
    createRepositoryDetection(params: { installationId: string, providerRepositoryId: string, type: VCSDetectionType, providerRootDirectory?: string  }): Promise<Models.DetectionFramework>;
    /**
     * Analyze a GitHub repository to automatically detect the programming language and runtime environment. This endpoint scans the repository's files and language statistics to determine the appropriate runtime settings for your function. The GitHub installation must be properly configured and the repository must be accessible through your installation for this endpoint to work.
     *
     * @param {string} installationId - Installation Id
     * @param {string} providerRepositoryId - Repository Id
     * @param {VCSDetectionType} type - Detector type. Must be one of the following: runtime, framework
     * @param {string} providerRootDirectory - Path to Root Directory
     * @throws {AppwriteException}
     * @returns {Promise<Models.DetectionFramework>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRepositoryDetection(installationId: string, providerRepositoryId: string, type: VCSDetectionType, providerRootDirectory?: string): Promise<Models.DetectionFramework>;
    createRepositoryDetection(
        paramsOrFirst: { installationId: string, providerRepositoryId: string, type: VCSDetectionType, providerRootDirectory?: string } | string,
        ...rest: [(string)?, (VCSDetectionType)?, (string)?]    
    ): Promise<Models.DetectionFramework> {
        let params: { installationId: string, providerRepositoryId: string, type: VCSDetectionType, providerRootDirectory?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string, providerRepositoryId: string, type: VCSDetectionType, providerRootDirectory?: string };
        } else {
            params = {
                installationId: paramsOrFirst as string,
                providerRepositoryId: rest[0] as string,
                type: rest[1] as VCSDetectionType,
                providerRootDirectory: rest[2] as string            
            };
        }
        
        const installationId = params.installationId;
        const providerRepositoryId = params.providerRepositoryId;
        const type = params.type;
        const providerRootDirectory = params.providerRootDirectory;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerRepositoryId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/vcs/github/installations/{installationId}/detections'.replace('{installationId}', installationId);
        const payload: Payload = {};
        if (typeof providerRepositoryId !== 'undefined') {
            payload['providerRepositoryId'] = providerRepositoryId;
        }
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
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
     * Get a list of GitHub repositories available through your installation. This endpoint returns repositories with their basic information, detected runtime environments, and latest push dates. You can optionally filter repositories using a search term. Each repository's runtime is automatically detected based on its contents and language statistics. The GitHub installation must be properly configured for this endpoint to work.
     *
     * @param {string} params.installationId - Installation Id
     * @param {VCSDetectionType} params.type - Detector type. Must be one of the following: runtime, framework
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepositoryFrameworkList>}
     */
    listRepositories(params: { installationId: string, type: VCSDetectionType, search?: string, queries?: string[]  }): Promise<Models.ProviderRepositoryFrameworkList>;
    /**
     * Get a list of GitHub repositories available through your installation. This endpoint returns repositories with their basic information, detected runtime environments, and latest push dates. You can optionally filter repositories using a search term. Each repository's runtime is automatically detected based on its contents and language statistics. The GitHub installation must be properly configured for this endpoint to work.
     *
     * @param {string} installationId - Installation Id
     * @param {VCSDetectionType} type - Detector type. Must be one of the following: runtime, framework
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepositoryFrameworkList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRepositories(installationId: string, type: VCSDetectionType, search?: string, queries?: string[]): Promise<Models.ProviderRepositoryFrameworkList>;
    listRepositories(
        paramsOrFirst: { installationId: string, type: VCSDetectionType, search?: string, queries?: string[] } | string,
        ...rest: [(VCSDetectionType)?, (string)?, (string[])?]    
    ): Promise<Models.ProviderRepositoryFrameworkList> {
        let params: { installationId: string, type: VCSDetectionType, search?: string, queries?: string[] };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string, type: VCSDetectionType, search?: string, queries?: string[] };
        } else {
            params = {
                installationId: paramsOrFirst as string,
                type: rest[0] as VCSDetectionType,
                search: rest[1] as string,
                queries: rest[2] as string[]            
            };
        }
        
        const installationId = params.installationId;
        const type = params.type;
        const search = params.search;
        const queries = params.queries;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        if (typeof type === 'undefined') {
            throw new AppwriteException('Missing required parameter: "type"');
        }

        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories'.replace('{installationId}', installationId);
        const payload: Payload = {};
        if (typeof type !== 'undefined') {
            payload['type'] = type;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
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
     * Create a new GitHub repository through your installation. This endpoint allows you to create either a public or private repository by specifying a name and visibility setting. The repository will be created under your GitHub user account or organization, depending on your installation type. The GitHub installation must be properly configured and have the necessary permissions for repository creation.
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.name - Repository name (slug)
     * @param {boolean} params.xprivate - Mark repository public or private
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepository>}
     */
    createRepository(params: { installationId: string, name: string, xprivate: boolean  }): Promise<Models.ProviderRepository>;
    /**
     * Create a new GitHub repository through your installation. This endpoint allows you to create either a public or private repository by specifying a name and visibility setting. The repository will be created under your GitHub user account or organization, depending on your installation type. The GitHub installation must be properly configured and have the necessary permissions for repository creation.
     *
     * @param {string} installationId - Installation Id
     * @param {string} name - Repository name (slug)
     * @param {boolean} xprivate - Mark repository public or private
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepository>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createRepository(installationId: string, name: string, xprivate: boolean): Promise<Models.ProviderRepository>;
    createRepository(
        paramsOrFirst: { installationId: string, name: string, xprivate: boolean } | string,
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.ProviderRepository> {
        let params: { installationId: string, name: string, xprivate: boolean };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string, name: string, xprivate: boolean };
        } else {
            params = {
                installationId: paramsOrFirst as string,
                name: rest[0] as string,
                xprivate: rest[1] as boolean            
            };
        }
        
        const installationId = params.installationId;
        const name = params.name;
        const xprivate = params.xprivate;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof xprivate === 'undefined') {
            throw new AppwriteException('Missing required parameter: "xprivate"');
        }

        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories'.replace('{installationId}', installationId);
        const payload: Payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof xprivate !== 'undefined') {
            payload['private'] = xprivate;
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
     * Get detailed information about a specific GitHub repository from your installation. This endpoint returns repository details including its ID, name, visibility status, organization, and latest push date. The GitHub installation must be properly configured and have access to the requested repository for this endpoint to work.
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.providerRepositoryId - Repository Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepository>}
     */
    getRepository(params: { installationId: string, providerRepositoryId: string  }): Promise<Models.ProviderRepository>;
    /**
     * Get detailed information about a specific GitHub repository from your installation. This endpoint returns repository details including its ID, name, visibility status, organization, and latest push date. The GitHub installation must be properly configured and have access to the requested repository for this endpoint to work.
     *
     * @param {string} installationId - Installation Id
     * @param {string} providerRepositoryId - Repository Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepository>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRepository(installationId: string, providerRepositoryId: string): Promise<Models.ProviderRepository>;
    getRepository(
        paramsOrFirst: { installationId: string, providerRepositoryId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.ProviderRepository> {
        let params: { installationId: string, providerRepositoryId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string, providerRepositoryId: string };
        } else {
            params = {
                installationId: paramsOrFirst as string,
                providerRepositoryId: rest[0] as string            
            };
        }
        
        const installationId = params.installationId;
        const providerRepositoryId = params.providerRepositoryId;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerRepositoryId"');
        }

        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}'.replace('{installationId}', installationId).replace('{providerRepositoryId}', providerRepositoryId);
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
     * Get a list of all branches from a GitHub repository in your installation. This endpoint returns the names of all branches in the repository and their total count. The GitHub installation must be properly configured and have access to the requested repository for this endpoint to work.
     * 
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.providerRepositoryId - Repository Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.BranchList>}
     */
    listRepositoryBranches(params: { installationId: string, providerRepositoryId: string  }): Promise<Models.BranchList>;
    /**
     * Get a list of all branches from a GitHub repository in your installation. This endpoint returns the names of all branches in the repository and their total count. The GitHub installation must be properly configured and have access to the requested repository for this endpoint to work.
     * 
     *
     * @param {string} installationId - Installation Id
     * @param {string} providerRepositoryId - Repository Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.BranchList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listRepositoryBranches(installationId: string, providerRepositoryId: string): Promise<Models.BranchList>;
    listRepositoryBranches(
        paramsOrFirst: { installationId: string, providerRepositoryId: string } | string,
        ...rest: [(string)?]    
    ): Promise<Models.BranchList> {
        let params: { installationId: string, providerRepositoryId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string, providerRepositoryId: string };
        } else {
            params = {
                installationId: paramsOrFirst as string,
                providerRepositoryId: rest[0] as string            
            };
        }
        
        const installationId = params.installationId;
        const providerRepositoryId = params.providerRepositoryId;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerRepositoryId"');
        }

        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/branches'.replace('{installationId}', installationId).replace('{providerRepositoryId}', providerRepositoryId);
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
     * Get a list of files and directories from a GitHub repository connected to your project. This endpoint returns the contents of a specified repository path, including file names, sizes, and whether each item is a file or directory. The GitHub installation must be properly configured and the repository must be accessible through your installation for this endpoint to work.
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.providerRepositoryId - Repository Id
     * @param {string} params.providerRootDirectory - Path to get contents of nested directory
     * @param {string} params.providerReference - Git reference (branch, tag, commit) to get contents from
     * @throws {AppwriteException}
     * @returns {Promise<Models.VcsContentList>}
     */
    getRepositoryContents(params: { installationId: string, providerRepositoryId: string, providerRootDirectory?: string, providerReference?: string  }): Promise<Models.VcsContentList>;
    /**
     * Get a list of files and directories from a GitHub repository connected to your project. This endpoint returns the contents of a specified repository path, including file names, sizes, and whether each item is a file or directory. The GitHub installation must be properly configured and the repository must be accessible through your installation for this endpoint to work.
     *
     * @param {string} installationId - Installation Id
     * @param {string} providerRepositoryId - Repository Id
     * @param {string} providerRootDirectory - Path to get contents of nested directory
     * @param {string} providerReference - Git reference (branch, tag, commit) to get contents from
     * @throws {AppwriteException}
     * @returns {Promise<Models.VcsContentList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getRepositoryContents(installationId: string, providerRepositoryId: string, providerRootDirectory?: string, providerReference?: string): Promise<Models.VcsContentList>;
    getRepositoryContents(
        paramsOrFirst: { installationId: string, providerRepositoryId: string, providerRootDirectory?: string, providerReference?: string } | string,
        ...rest: [(string)?, (string)?, (string)?]    
    ): Promise<Models.VcsContentList> {
        let params: { installationId: string, providerRepositoryId: string, providerRootDirectory?: string, providerReference?: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string, providerRepositoryId: string, providerRootDirectory?: string, providerReference?: string };
        } else {
            params = {
                installationId: paramsOrFirst as string,
                providerRepositoryId: rest[0] as string,
                providerRootDirectory: rest[1] as string,
                providerReference: rest[2] as string            
            };
        }
        
        const installationId = params.installationId;
        const providerRepositoryId = params.providerRepositoryId;
        const providerRootDirectory = params.providerRootDirectory;
        const providerReference = params.providerReference;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerRepositoryId"');
        }

        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/contents'.replace('{installationId}', installationId).replace('{providerRepositoryId}', providerRepositoryId);
        const payload: Payload = {};
        if (typeof providerRootDirectory !== 'undefined') {
            payload['providerRootDirectory'] = providerRootDirectory;
        }
        if (typeof providerReference !== 'undefined') {
            payload['providerReference'] = providerReference;
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
     * Authorize and create deployments for a GitHub pull request in your project. This endpoint allows external contributions by creating deployments from pull requests, enabling preview environments for code review. The pull request must be open and not previously authorized. The GitHub installation must be properly configured and have access to both the repository and pull request for this endpoint to work.
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.repositoryId - VCS Repository Id
     * @param {string} params.providerPullRequestId - GitHub Pull Request Id
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    updateExternalDeployments(params: { installationId: string, repositoryId: string, providerPullRequestId: string  }): Promise<{}>;
    /**
     * Authorize and create deployments for a GitHub pull request in your project. This endpoint allows external contributions by creating deployments from pull requests, enabling preview environments for code review. The pull request must be open and not previously authorized. The GitHub installation must be properly configured and have access to both the repository and pull request for this endpoint to work.
     *
     * @param {string} installationId - Installation Id
     * @param {string} repositoryId - VCS Repository Id
     * @param {string} providerPullRequestId - GitHub Pull Request Id
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateExternalDeployments(installationId: string, repositoryId: string, providerPullRequestId: string): Promise<{}>;
    updateExternalDeployments(
        paramsOrFirst: { installationId: string, repositoryId: string, providerPullRequestId: string } | string,
        ...rest: [(string)?, (string)?]    
    ): Promise<{}> {
        let params: { installationId: string, repositoryId: string, providerPullRequestId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string, repositoryId: string, providerPullRequestId: string };
        } else {
            params = {
                installationId: paramsOrFirst as string,
                repositoryId: rest[0] as string,
                providerPullRequestId: rest[1] as string            
            };
        }
        
        const installationId = params.installationId;
        const repositoryId = params.repositoryId;
        const providerPullRequestId = params.providerPullRequestId;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        if (typeof repositoryId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "repositoryId"');
        }
        if (typeof providerPullRequestId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerPullRequestId"');
        }

        const apiPath = '/vcs/github/installations/{installationId}/repositories/{repositoryId}'.replace('{installationId}', installationId).replace('{repositoryId}', repositoryId);
        const payload: Payload = {};
        if (typeof providerPullRequestId !== 'undefined') {
            payload['providerPullRequestId'] = providerPullRequestId;
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
     * List all VCS installations configured for the current project. This endpoint returns a list of installations including their provider, organization, and other configuration details.
     * 
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: provider, organization
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.InstallationList>}
     */
    listInstallations(params?: { queries?: string[], search?: string, total?: boolean  }): Promise<Models.InstallationList>;
    /**
     * List all VCS installations configured for the current project. This endpoint returns a list of installations including their provider, organization, and other configuration details.
     * 
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: provider, organization
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.InstallationList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listInstallations(queries?: string[], search?: string, total?: boolean): Promise<Models.InstallationList>;
    listInstallations(
        paramsOrFirst?: { queries?: string[], search?: string, total?: boolean } | string[],
        ...rest: [(string)?, (boolean)?]    
    ): Promise<Models.InstallationList> {
        let params: { queries?: string[], search?: string, total?: boolean };
        
        if (!paramsOrFirst || (paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { queries?: string[], search?: string, total?: boolean };
        } else {
            params = {
                queries: paramsOrFirst as string[],
                search: rest[0] as string,
                total: rest[1] as boolean            
            };
        }
        
        const queries = params.queries;
        const search = params.search;
        const total = params.total;


        const apiPath = '/vcs/installations';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        if (typeof total !== 'undefined') {
            payload['total'] = total;
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
     * Get a VCS installation by its unique ID. This endpoint returns the installation's details including its provider, organization, and configuration. 
     *
     * @param {string} params.installationId - Installation Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.Installation>}
     */
    getInstallation(params: { installationId: string  }): Promise<Models.Installation>;
    /**
     * Get a VCS installation by its unique ID. This endpoint returns the installation's details including its provider, organization, and configuration. 
     *
     * @param {string} installationId - Installation Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.Installation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInstallation(installationId: string): Promise<Models.Installation>;
    getInstallation(
        paramsOrFirst: { installationId: string } | string    
    ): Promise<Models.Installation> {
        let params: { installationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string };
        } else {
            params = {
                installationId: paramsOrFirst as string            
            };
        }
        
        const installationId = params.installationId;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }

        const apiPath = '/vcs/installations/{installationId}'.replace('{installationId}', installationId);
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
     * Delete a VCS installation by its unique ID. This endpoint removes the installation and all its associated repositories from the project.
     *
     * @param {string} params.installationId - Installation Id
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteInstallation(params: { installationId: string  }): Promise<{}>;
    /**
     * Delete a VCS installation by its unique ID. This endpoint removes the installation and all its associated repositories from the project.
     *
     * @param {string} installationId - Installation Id
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteInstallation(installationId: string): Promise<{}>;
    deleteInstallation(
        paramsOrFirst: { installationId: string } | string    
    ): Promise<{}> {
        let params: { installationId: string };
        
        if ((paramsOrFirst && typeof paramsOrFirst === 'object' && !Array.isArray(paramsOrFirst))) {
            params = (paramsOrFirst || {}) as { installationId: string };
        } else {
            params = {
                installationId: paramsOrFirst as string            
            };
        }
        
        const installationId = params.installationId;

        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }

        const apiPath = '/vcs/installations/{installationId}'.replace('{installationId}', installationId);
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
