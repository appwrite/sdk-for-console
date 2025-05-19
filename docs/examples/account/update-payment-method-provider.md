import { Client, Account } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const account = new Account(client);

const result = await account.updatePaymentMethodProvider(
    '<PAYMENT_METHOD_ID>', // paymentMethodId
    '<PROVIDER_METHOD_ID>', // providerMethodId
    '<NAME>' // name
);

console.log(result);
