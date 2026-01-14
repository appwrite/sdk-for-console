import { Client, Domains, FilterType } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.listSuggestions({
    query: '<QUERY>',
    tlds: [], // optional
    limit: null, // optional
    filterType: FilterType.Premium, // optional
    priceMax: null, // optional
    priceMin: null // optional
});

console.log(result);
