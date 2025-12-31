import { Client, Account } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const account = new Account(client);

const result = await account.createBillingAddress({
    country: '<COUNTRY>',
    streetAddress: '<STREET_ADDRESS>',
    city: '<CITY>',
    state: '<STATE>',
    postalCode: '<POSTAL_CODE>', // optional
    addressLine2: '<ADDRESS_LINE2>' // optional
});

console.log(result);
