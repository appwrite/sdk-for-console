import { Service } from '../service';
import { AppwriteException, Client, type Payload, UploadProgress } from '../client';
import type { Models } from '../models';
import { BillingPlan } from '../enums/billing-plan';

export class Organizations {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }

    /**
     * List Orgnizations
     *
     * Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.
     *
     * @param {string[]} queries
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise<Models.OrganizationList<Preferences>>}
     */
    async list<Preferences extends Models.Preferences>(queries?: string[], search?: string): Promise<Models.OrganizationList<Preferences>> {
        const apiPath = '/organizations';
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


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Create Organization
     *
     * Create a new organization.

     *
     * @param {string} organizationId
     * @param {string} name
     * @param {BillingPlan} billingPlan
     * @param {string} paymentMethodId
     * @param {string} billingAddressId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async create<Preferences extends Models.Preferences>(organizationId: string, name: string, billingPlan: BillingPlan, paymentMethodId?: string, billingAddressId?: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof name === 'undefined') {
            throw new AppwriteException('Missing required parameter: "name"');
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingPlan"');
        }
        const apiPath = '/organizations';
        const payload: Payload = {};
        if (typeof organizationId !== 'undefined') {
            payload['organizationId'] = organizationId;
        }
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof billingPlan !== 'undefined') {
            payload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete team
     *
     * Delete an organization.
     *
     * @param {string} organizationId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async delete(organizationId: string): Promise<{}> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List aggregations
     *
     * Get a list of all aggregations for an organization.
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.AggregationTeamList>}
     */
    async listAggregations(organizationId: string, queries?: string[]): Promise<Models.AggregationTeamList> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/aggregations'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get invoice
     *
     * Get a specific aggregation using it&#039;s aggregation ID.
     *
     * @param {string} organizationId
     * @param {string} aggregationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    async getAggregation(organizationId: string, aggregationId: string): Promise<Models.Invoice> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof aggregationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "aggregationId"');
        }
        const apiPath = '/organizations/{organizationId}/aggregations/{aggregationId}'.replace('{organizationId}', organizationId).replace('{aggregationId}', aggregationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Set team&#039;s billing address
     *
     * Set a billing address for an organization.
     *
     * @param {string} organizationId
     * @param {string} billingAddressId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setBillingAddress<Preferences extends Models.Preferences>(organizationId: string, billingAddressId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingAddressId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingAddressId"');
        }
        const apiPath = '/organizations/{organizationId}/billing-address'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete team&#039;s billing address
     *
     * Delete a team&#039;s billing address.
     *
     * @param {string} organizationId
     * @throws {AppwriteException}
     * @returns {Promise<{}>}
     */
    async deleteBillingAddress(organizationId: string): Promise<{}> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/billing-address'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get billing address
     *
     * Get a billing address using it&#039;s ID.
     *
     * @param {string} organizationId
     * @param {string} billingAddressId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingAddress>}
     */
    async getBillingAddress(organizationId: string, billingAddressId: string): Promise<Models.BillingAddress> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingAddressId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingAddressId"');
        }
        const apiPath = '/organizations/{organizationId}/billing-addresses/{billingAddressId}'.replace('{organizationId}', organizationId).replace('{billingAddressId}', billingAddressId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Set team&#039;s billing email
     *
     * Set the current billing email for the organization.
     *
     * @param {string} organizationId
     * @param {string} billingEmail
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setBillingEmail<Preferences extends Models.Preferences>(organizationId: string, billingEmail: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingEmail === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingEmail"');
        }
        const apiPath = '/organizations/{organizationId}/billing-email'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingEmail !== 'undefined') {
            payload['billingEmail'] = billingEmail;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update organization budget
     *
     * Update the budget limit for an organization.
     *
     * @param {string} organizationId
     * @param {number} budget
     * @param {number[]} alerts
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async updateBudget<Preferences extends Models.Preferences>(organizationId: string, budget: number, alerts?: number[]): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof budget === 'undefined') {
            throw new AppwriteException('Missing required parameter: "budget"');
        }
        const apiPath = '/organizations/{organizationId}/budget'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof budget !== 'undefined') {
            payload['budget'] = budget;
        }
        if (typeof alerts !== 'undefined') {
            payload['alerts'] = alerts;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List credits
     *
     * List all credits for an organization.

     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.CreditList>}
     */
    async listCredits(organizationId: string, queries?: string[]): Promise<Models.CreditList> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/credits'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Add credits from coupon
     *
     * Add credit to an organization using a coupon.
     *
     * @param {string} organizationId
     * @param {string} couponId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    async addCredit(organizationId: string, couponId: string): Promise<Models.Credit> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof couponId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "couponId"');
        }
        const apiPath = '/organizations/{organizationId}/credits'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof couponId !== 'undefined') {
            payload['couponId'] = couponId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get credit details
     *
     * Get credit details.
     *
     * @param {string} organizationId
     * @param {string} creditId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Credit>}
     */
    async getCredit(organizationId: string, creditId: string): Promise<Models.Credit> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof creditId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "creditId"');
        }
        const apiPath = '/organizations/{organizationId}/credits/{creditId}'.replace('{organizationId}', organizationId).replace('{creditId}', creditId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * List invoices
     *
     * List all invoices for an organization.
     *
     * @param {string} organizationId
     * @param {string[]} queries
     * @throws {AppwriteException}
     * @returns {Promise<Models.InvoiceList>}
     */
    async listInvoices(organizationId: string, queries?: string[]): Promise<Models.InvoiceList> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof queries !== 'undefined') {
            payload['queries'] = queries;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get invoice
     *
     * Get an invoice by its unique ID.
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    async getInvoice(organizationId: string, invoiceId: string): Promise<Models.Invoice> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Download invoice in PDF
     *
     * Download invoice in PDF
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    async getInvoiceDownload(organizationId: string, invoiceId: string): Promise<Models.PaymentMethod> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/download'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Initiate payment for failed invoice to pay live from console
     *
     * Initiate payment for failed invoice to pay live from console
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @param {string} paymentMethodId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Invoice>}
     */
    async createInvoicePayment(organizationId: string, invoiceId: string, paymentMethodId: string): Promise<Models.Invoice> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "paymentMethodId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/payments'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'post',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * View invoice in PDF
     *
     * View invoice in PDF
     *
     * @param {string} organizationId
     * @param {string} invoiceId
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    async getInvoiceView(organizationId: string, invoiceId: string): Promise<Models.PaymentMethod> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof invoiceId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "invoiceId"');
        }
        const apiPath = '/organizations/{organizationId}/invoices/{invoiceId}/view'.replace('{organizationId}', organizationId).replace('{invoiceId}', invoiceId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Set team&#039;s payment method
     *
     * Set a organization&#039;s default payment method.
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setDefaultPaymentMethod<Preferences extends Models.Preferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "paymentMethodId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-method'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete team&#039;s default payment method
     *
     * Delete the default payment method for an organization.
     *
     * @param {string} organizationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async deleteDefaultPaymentMethod<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-method'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Set team&#039;s backup payment method
     *
     * Set an organization&#039;s backup payment method.

     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setBackupPaymentMethod<Preferences extends Models.Preferences>(organizationId: string, paymentMethodId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "paymentMethodId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-method/backup'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Delete team&#039;s backup payment method
     *
     * Delete a backup payment method for an organization.
     *
     * @param {string} organizationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async deleteBackupPaymentMethod<Preferences extends Models.Preferences>(organizationId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-method/backup'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'delete',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get payment method
     *
     * Get an organization&#039;s payment method using it&#039;s payment method ID.
     *
     * @param {string} organizationId
     * @param {string} paymentMethodId
     * @throws {AppwriteException}
     * @returns {Promise<Models.PaymentMethod>}
     */
    async getPaymentMethod(organizationId: string, paymentMethodId: string): Promise<Models.PaymentMethod> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof paymentMethodId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "paymentMethodId"');
        }
        const apiPath = '/organizations/{organizationId}/payment-methods/{paymentMethodId}'.replace('{organizationId}', organizationId).replace('{paymentMethodId}', paymentMethodId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get organization billing plan details
     *
     * Get the details of the current billing plan for an organization.
     *
     * @param {string} organizationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.BillingPlan>}
     */
    async getPlan(organizationId: string): Promise<Models.BillingPlan> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/plan'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Update organization billing plan
     *
     * Update the billing plan for an organization.
     *
     * @param {string} organizationId
     * @param {BillingPlan} billingPlan
     * @param {string} paymentMethodId
     * @param {string} billingAddressId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async updatePlan<Preferences extends Models.Preferences>(organizationId: string, billingPlan: BillingPlan, paymentMethodId?: string, billingAddressId?: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof billingPlan === 'undefined') {
            throw new AppwriteException('Missing required parameter: "billingPlan"');
        }
        const apiPath = '/organizations/{organizationId}/plan'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof billingPlan !== 'undefined') {
            payload['billingPlan'] = billingPlan;
        }
        if (typeof paymentMethodId !== 'undefined') {
            payload['paymentMethodId'] = paymentMethodId;
        }
        if (typeof billingAddressId !== 'undefined') {
            payload['billingAddressId'] = billingAddressId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get Scopes
     *
     * Get Scopes
     *
     * @param {string} organizationId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Roles>}
     */
    async getScopes(organizationId: string): Promise<Models.Roles> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/roles'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Set team&#039;s tax Id
     *
     * Set an organization&#039;s billing tax ID.
     *
     * @param {string} organizationId
     * @param {string} taxId
     * @throws {AppwriteException}
     * @returns {Promise<Models.Organization<Preferences>>}
     */
    async setBillingTaxId<Preferences extends Models.Preferences>(organizationId: string, taxId: string): Promise<Models.Organization<Preferences>> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        if (typeof taxId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "taxId"');
        }
        const apiPath = '/organizations/{organizationId}/taxId'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof taxId !== 'undefined') {
            payload['taxId'] = taxId;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'patch',
            uri,
            apiHeaders,
            payload
        );
    }
    /**
     * Get team&#039;s usage data
     *
     * Get the usage data for an organization.
     *
     * @param {string} organizationId
     * @param {string} startDate
     * @param {string} endDate
     * @throws {AppwriteException}
     * @returns {Promise<Models.UsageOrganization>}
     */
    async getUsage(organizationId: string, startDate?: string, endDate?: string): Promise<Models.UsageOrganization> {
        if (typeof organizationId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "organizationId"');
        }
        const apiPath = '/organizations/{organizationId}/usage'.replace('{organizationId}', organizationId);
        const payload: Payload = {};
        if (typeof startDate !== 'undefined') {
            payload['startDate'] = startDate;
        }
        if (typeof endDate !== 'undefined') {
            payload['endDate'] = endDate;
        }
        const uri = new URL(this.client.config.endpoint + apiPath);

        const apiHeaders: { [header: string]: string } = {
            'content-type': 'application/json',
        }


        return await this.client.call(
            'get',
            uri,
            apiHeaders,
            payload
        );
    }
}
