import { Client, Account } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2'); // Your project ID

const account = new Account(client);

const result = await account.updateRecovery(
    '<USER_ID>', // userId
    '<SECRET>', // secret
    '' // password
);

console.log(response);
