import { Client, Account } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const account = new Account(client);

const result = await account.createBillingAddress(
    '<COUNTRY>', // country
    '<STREET_ADDRESS>', // streetAddress
    '<CITY>', // city
    '<STATE>', // state
    '<POSTAL_CODE>', // postalCode (optional)
    '<ADDRESS_LINE2>' // addressLine2 (optional)
);

console.log(result);
