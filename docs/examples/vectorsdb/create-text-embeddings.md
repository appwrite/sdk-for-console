```javascript
import { Client, VectorsDB, Model } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const vectorsDB = new VectorsDB(client);

const result = await vectorsDB.createTextEmbeddings({
    texts: [],
    model: Model.Embeddinggemma // optional
});

console.log(result);
```
