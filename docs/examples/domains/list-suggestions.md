```javascript
import { Client, Domains, DomainSuggestionType } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.listSuggestions({
    query: '<QUERY>',
    tlds: [], // optional
    limit: 0, // optional
    filterType: DomainSuggestionType.Premium, // optional
    priceMax: 0, // optional
    priceMin: 0, // optional
});

console.log(result);
```
