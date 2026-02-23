import { Client } from '../client';
import type { Models } from '../models';
import { VCSDetectionType } from '../enums/vcs-detection-type';
export declare class Vcs {
    client: Client;
    constructor(client: Client);
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
    createRepositoryDetection(params: {
        installationId: string;
        providerRepositoryId: string;
        type: VCSDetectionType;
        providerRootDirectory?: string;
    }): Promise<Models.DetectionFramework>;
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
    listRepositories(params: {
        installationId: string;
        type: VCSDetectionType;
        search?: string;
        queries?: string[];
    }): Promise<Models.ProviderRepositoryFrameworkList>;
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
    /**
     * Create a new GitHub repository through your installation. This endpoint allows you to create either a public or private repository by specifying a name and visibility setting. The repository will be created under your GitHub user account or organization, depending on your installation type. The GitHub installation must be properly configured and have the necessary permissions for repository creation.
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.name - Repository name (slug)
     * @param {boolean} params.xprivate - Mark repository public or private
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepository>}
     */
    createRepository(params: {
        installationId: string;
        name: string;
        xprivate: boolean;
    }): Promise<Models.ProviderRepository>;
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
    /**
     * Get detailed information about a specific GitHub repository from your installation. This endpoint returns repository details including its ID, name, visibility status, organization, and latest push date. The GitHub installation must be properly configured and have access to the requested repository for this endpoint to work.
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.providerRepositoryId - Repository Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.ProviderRepository>}
     */
    getRepository(params: {
        installationId: string;
        providerRepositoryId: string;
    }): Promise<Models.ProviderRepository>;
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
    /**
     * Get a list of all branches from a GitHub repository in your installation. This endpoint returns the names of all branches in the repository and their total count. The GitHub installation must be properly configured and have access to the requested repository for this endpoint to work.
     *
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.providerRepositoryId - Repository Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.BranchList>}
     */
    listRepositoryBranches(params: {
        installationId: string;
        providerRepositoryId: string;
    }): Promise<Models.BranchList>;
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
    getRepositoryContents(params: {
        installationId: string;
        providerRepositoryId: string;
        providerRootDirectory?: string;
        providerReference?: string;
    }): Promise<Models.VcsContentList>;
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
    /**
     * Authorize and create deployments for a GitHub pull request in your project. This endpoint allows external contributions by creating deployments from pull requests, enabling preview environments for code review. The pull request must be open and not previously authorized. The GitHub installation must be properly configured and have access to both the repository and pull request for this endpoint to work.
     *
     * @param {string} params.installationId - Installation Id
     * @param {string} params.repositoryId - VCS Repository Id
     * @param {string} params.providerPullRequestId - GitHub Pull Request Id
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    updateExternalDeployments(params: {
        installationId: string;
        repositoryId: string;
        providerPullRequestId: string;
    }): Promise<{}>;
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
    listInstallations(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.InstallationList>;
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
    /**
     * Get a VCS installation by its unique ID. This endpoint returns the installation's details including its provider, organization, and configuration.
     *
     * @param {string} params.installationId - Installation Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.Installation>}
     */
    getInstallation(params: {
        installationId: string;
    }): Promise<Models.Installation>;
    /**
     * Get a VCS installation by its unique ID. This endpoint returns the installation's details including its provider, organization, and configuration.
     *
     * @param {string} installationId - Installation Id
     * @throws {AppwriteException}
     * @returns {Promise<Models.Installation>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getInstallation(installationId: string): Promise<Models.Installation>;
    /**
     * Delete a VCS installation by its unique ID. This endpoint removes the installation and all its associated repositories from the project.
     *
     * @param {string} params.installationId - Installation Id
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteInstallation(params: {
        installationId: string;
    }): Promise<{}>;
    /**
     * Delete a VCS installation by its unique ID. This endpoint removes the installation and all its associated repositories from the project.
     *
     * @param {string} installationId - Installation Id
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteInstallation(installationId: string): Promise<{}>;
}
