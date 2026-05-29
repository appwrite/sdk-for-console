```javascript
import { Client, Domains, DomainRegistrationType } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const domains = new Domains(client);

const result = await domains.getPrice({
    domain: '',
    periodYears: null, // optional
    registrationType: DomainRegistrationType.New // optional
});

console.log(result);
```
