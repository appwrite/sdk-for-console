import { Client } from '../client';
import type { Models } from '../models';
export declare class Teams {
    client: Client;
    constructor(client: Client);
    /**
     * Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TeamList<Preferences>>}
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(params?: {
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.TeamList<Preferences>>;
    /**
     * Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.TeamList<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    list<Preferences extends Models.Preferences = Models.DefaultPreferences>(queries?: string[], search?: string, total?: boolean): Promise<Models.TeamList<Preferences>>;
    /**
     * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.
     *
     * @param {string} params.teamId - Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} params.name - Team name. Max length: 128 chars.
     * @param {string[]} params.roles - Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Team<Preferences>>}
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        teamId: string;
        name: string;
        roles?: string[];
    }): Promise<Models.Team<Preferences>>;
    /**
     * Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.
     *
     * @param {string} teamId - Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can't start with a special char. Max length is 36 chars.
     * @param {string} name - Team name. Max length: 128 chars.
     * @param {string[]} roles - Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Team<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    create<Preferences extends Models.Preferences = Models.DefaultPreferences>(teamId: string, name: string, roles?: string[]): Promise<Models.Team<Preferences>>;
    /**
     * Get a team by its ID. All team members have read access for this resource.
     *
     * @param {string} params.teamId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Team<Preferences>>}
     */
    get<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        teamId: string;
    }): Promise<Models.Team<Preferences>>;
    /**
     * Get a team by its ID. All team members have read access for this resource.
     *
     * @param {string} teamId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Team<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    get<Preferences extends Models.Preferences = Models.DefaultPreferences>(teamId: string): Promise<Models.Team<Preferences>>;
    /**
     * Update the team's name by its unique ID.
     *
     * @param {string} params.teamId - Team ID.
     * @param {string} params.name - New team name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Team<Preferences>>}
     */
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        teamId: string;
        name: string;
    }): Promise<Models.Team<Preferences>>;
    /**
     * Update the team's name by its unique ID.
     *
     * @param {string} teamId - Team ID.
     * @param {string} name - New team name. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Team<Preferences>>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateName<Preferences extends Models.Preferences = Models.DefaultPreferences>(teamId: string, name: string): Promise<Models.Team<Preferences>>;
    /**
     * Delete a team using its ID. Only team members with the owner role can delete the team.
     *
     * @param {string} params.teamId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    delete(params: {
        teamId: string;
    }): Promise<{}>;
    /**
     * Delete a team using its ID. Only team members with the owner role can delete the team.
     *
     * @param {string} teamId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    delete(teamId: string): Promise<{}>;
    /**
     * Get the team activity logs list by its unique ID.
     *
     * @param {string} params.teamId - Team ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     */
    listLogs(params: {
        teamId: string;
        queries?: string[];
        total?: boolean;
    }): Promise<Models.LogList>;
    /**
     * Get the team activity logs list by its unique ID.
     *
     * @param {string} teamId - Team ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.LogList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listLogs(teamId: string, queries?: string[], total?: boolean): Promise<Models.LogList>;
    /**
     * Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint. Hide sensitive attributes from the response by toggling membership privacy in the Console.
     *
     * @param {string} params.teamId - Team ID.
     * @param {string[]} params.queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} params.search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} params.total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     */
    listMemberships(params: {
        teamId: string;
        queries?: string[];
        search?: string;
        total?: boolean;
    }): Promise<Models.MembershipList>;
    /**
     * Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint. Hide sensitive attributes from the response by toggling membership privacy in the Console.
     *
     * @param {string} teamId - Team ID.
     * @param {string[]} queries - Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm, roles
     * @param {string} search - Search term to filter your list results. Max length: 256 chars.
     * @param {boolean} total - When set to false, the total count returned will be 0 and will not be calculated.
     * @throws {AppwriteException}
     * @returns {Promise<Models.MembershipList>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    listMemberships(teamId: string, queries?: string[], search?: string, total?: boolean): Promise<Models.MembershipList>;
    /**
     * Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Appwrite will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn't exist. If initiated from a Server SDK, the new member will be added automatically to the team.
     *
     * You only need to provide one of a user ID, email, or phone number. Appwrite will prioritize accepting the user ID > email > phone number if you provide more than one of these parameters.
     *
     * Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team.
     *
     * Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Appwrite will accept the only redirect URLs under the domains you have added as a platform on the Appwrite Console.
     *
     *
     * @param {string} params.teamId - Team ID.
     * @param {string[]} params.roles - Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.
     * @param {string} params.email - Email of the new team member.
     * @param {string} params.userId - ID of the user to be added to a team.
     * @param {string} params.phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} params.url - URL to redirect the user back to your app from the invitation email. This parameter is not required when an API key is supplied. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string} params.name - Name of the new team member. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     */
    createMembership(params: {
        teamId: string;
        roles: string[];
        email?: string;
        userId?: string;
        phone?: string;
        url?: string;
        name?: string;
    }): Promise<Models.Membership>;
    /**
     * Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Appwrite will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn't exist. If initiated from a Server SDK, the new member will be added automatically to the team.
     *
     * You only need to provide one of a user ID, email, or phone number. Appwrite will prioritize accepting the user ID > email > phone number if you provide more than one of these parameters.
     *
     * Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team.
     *
     * Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Appwrite will accept the only redirect URLs under the domains you have added as a platform on the Appwrite Console.
     *
     *
     * @param {string} teamId - Team ID.
     * @param {string[]} roles - Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.
     * @param {string} email - Email of the new team member.
     * @param {string} userId - ID of the user to be added to a team.
     * @param {string} phone - Phone number. Format this number with a leading '+' and a country code, e.g., +16175551212.
     * @param {string} url - URL to redirect the user back to your app from the invitation email. This parameter is not required when an API key is supplied. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.
     * @param {string} name - Name of the new team member. Max length: 128 chars.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    createMembership(teamId: string, roles: string[], email?: string, userId?: string, phone?: string, url?: string, name?: string): Promise<Models.Membership>;
    /**
     * Get a team member by the membership unique id. All team members have read access for this resource. Hide sensitive attributes from the response by toggling membership privacy in the Console.
     *
     * @param {string} params.teamId - Team ID.
     * @param {string} params.membershipId - Membership ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     */
    getMembership(params: {
        teamId: string;
        membershipId: string;
    }): Promise<Models.Membership>;
    /**
     * Get a team member by the membership unique id. All team members have read access for this resource. Hide sensitive attributes from the response by toggling membership privacy in the Console.
     *
     * @param {string} teamId - Team ID.
     * @param {string} membershipId - Membership ID.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getMembership(teamId: string, membershipId: string): Promise<Models.Membership>;
    /**
     * Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://appwrite.io/docs/permissions).
     *
     *
     * @param {string} params.teamId - Team ID.
     * @param {string} params.membershipId - Membership ID.
     * @param {string[]} params.roles - An array of strings. Use this param to set the user's roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     */
    updateMembership(params: {
        teamId: string;
        membershipId: string;
        roles: string[];
    }): Promise<Models.Membership>;
    /**
     * Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://appwrite.io/docs/permissions).
     *
     *
     * @param {string} teamId - Team ID.
     * @param {string} membershipId - Membership ID.
     * @param {string[]} roles - An array of strings. Use this param to set the user's roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMembership(teamId: string, membershipId: string, roles: string[]): Promise<Models.Membership>;
    /**
     * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
     *
     * @param {string} params.teamId - Team ID.
     * @param {string} params.membershipId - Membership ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    deleteMembership(params: {
        teamId: string;
        membershipId: string;
    }): Promise<{}>;
    /**
     * This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.
     *
     * @param {string} teamId - Team ID.
     * @param {string} membershipId - Membership ID.
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    deleteMembership(teamId: string, membershipId: string): Promise<{}>;
    /**
     * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.
     *
     * If the request is successful, a session for the user is automatically created.
     *
     *
     * @param {string} params.teamId - Team ID.
     * @param {string} params.membershipId - Membership ID.
     * @param {string} params.userId - User ID.
     * @param {string} params.secret - Secret key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     */
    updateMembershipStatus(params: {
        teamId: string;
        membershipId: string;
        userId: string;
        secret: string;
    }): Promise<Models.Membership>;
    /**
     * Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.
     *
     * If the request is successful, a session for the user is automatically created.
     *
     *
     * @param {string} teamId - Team ID.
     * @param {string} membershipId - Membership ID.
     * @param {string} userId - User ID.
     * @param {string} secret - Secret key.
     * @throws {AppwriteException}
     * @returns {Promise<Models.Membership>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updateMembershipStatus(teamId: string, membershipId: string, userId: string, secret: string): Promise<Models.Membership>;
    /**
     * Get the team's shared preferences by its unique ID. If a preference doesn't need to be shared by all team members, prefer storing them in [user preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).
     *
     * @param {string} params.teamId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     */
    getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        teamId: string;
    }): Promise<Preferences>;
    /**
     * Get the team's shared preferences by its unique ID. If a preference doesn't need to be shared by all team members, prefer storing them in [user preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).
     *
     * @param {string} teamId - Team ID.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    getPrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(teamId: string): Promise<Preferences>;
    /**
     * Update the team's preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.
     *
     * @param {string} params.teamId - Team ID.
     * @param {object} params.prefs - Prefs key-value JSON object.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     */
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(params: {
        teamId: string;
        prefs: object;
    }): Promise<Preferences>;
    /**
     * Update the team's preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.
     *
     * @param {string} teamId - Team ID.
     * @param {object} prefs - Prefs key-value JSON object.
     * @throws {AppwriteException}
     * @returns {Promise<Preferences>}
     * @deprecated Use the object parameter style method for a better developer experience.
     */
    updatePrefs<Preferences extends Models.Preferences = Models.DefaultPreferences>(teamId: string, prefs: object): Promise<Preferences>;
}
