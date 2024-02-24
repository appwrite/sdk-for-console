import { Client, Migrations } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2'); // Your project ID

const migrations = new Migrations(client);

const result = await migrations.list(
    [], // queries (optional)
    '<SEARCH>' // search (optional)
);

console.log(response);
