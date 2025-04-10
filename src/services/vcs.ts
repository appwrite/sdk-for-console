import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';

export class Vcs {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * Get a list of GitHub repositories available through your installation. This endpoint returns repositories with their basic information, detected runtime environments, and latest push dates. You can optionally filter repositories using a search term. Each repository&#039;s runtime is automatically detected based on its contents and language statistics. The GitHub installation must be properly configured for this endpoint to work.
     *
     * @param {string} installationId
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepositoryList>}
     */
    listRepositories(installationId: string, search?: string): Promise<Models.ProviderRepositoryList> {
        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories'.replace('{installationId}', installationId);
        const payload: Payload = {};
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
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
     * @param {string} installationId
     * @param {string} name
     * @param {boolean} xprivate
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepository>}
     */
    createRepository(installationId: string, name: string, xprivate: boolean): Promise<Models.ProviderRepository> {
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
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepository>}
     */
    getRepository(installationId: string, providerRepositoryId: string): Promise<Models.ProviderRepository> {
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
            'content-type': 'application/json',
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
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BranchList>}
     */
    listRepositoryBranches(installationId: string, providerRepositoryId: string): Promise<Models.BranchList> {
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
            'content-type': 'application/json',
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
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerRootDirectory
     * @throws {AppwriteException}
     * @returns {Promise<Models.VcsContentList>}
     */
    getRepositoryContents(installationId: string, providerRepositoryId: string, providerRootDirectory?: string): Promise<Models.VcsContentList> {
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
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Analyze a GitHub repository to automatically detect the programming language and runtime environment. This endpoint scans the repository&#039;s files and language statistics to determine the appropriate runtime settings for your function. The GitHub installation must be properly configured and the repository must be accessible through your installation for this endpoint to work.
     *
     * @param {string} installationId
     * @param {string} providerRepositoryId
     * @param {string} providerRootDirectory
     * @throws {AppwriteException}
     * @returns {Promise<Models.Detection>}
     */
    createRepositoryDetection(installationId: string, providerRepositoryId: string, providerRootDirectory?: string): Promise<Models.Detection> {
        if (typeof installationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "installationId"');
        }
        if (typeof providerRepositoryId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "providerRepositoryId"');
        }
        const apiPath = '/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/detection'.replace('{installationId}', installationId).replace('{providerRepositoryId}', providerRepositoryId);
        const payload: Payload = {};
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
     * Authorize and create deployments for a GitHub pull request in your project. This endpoint allows external contributions by creating deployments from pull requests, enabling preview environments for code review. The pull request must be open and not previously authorized. The GitHub installation must be properly configured and have access to both the repository and pull request for this endpoint to work.
     *
     * @param {string} installationId
     * @param {string} repositoryId
     * @param {string} providerPullRequestId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    updateExternalDeployments(installationId: string, repositoryId: string, providerPullRequestId: string): Promise<{}> {
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
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.InstallationList>}
     */
    listInstallations(queries?: string[], search?: string): Promise<Models.InstallationList> {
        const apiPath = '/vcs/installations';
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        if (typeof search !== 'undefined') {
            payload['search'] = search;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }

        return this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get a VCS installation by its unique ID. This endpoint returns the installation&#039;s details including its provider, organization, and configuration. 
     *
     * @param {string} installationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Installation>}
     */
    getInstallation(installationId: string): Promise<Models.Installation> {
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
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete a VCS installation by its unique ID. This endpoint removes the installation and all its associated repositories from the project.
     *
     * @param {string} installationId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteInstallation(installationId: string): Promise<{}> {
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
