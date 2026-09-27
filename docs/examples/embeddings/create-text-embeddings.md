```javascript
import { Client, Embeddings, EmbeddingModel } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const embeddings = new Embeddings(client);

const result = await embeddings.createTextEmbeddings({
    texts: [
        'Appwrite helps developers build applications.',
        'Find documents with semantic search.',
    ],
    model: EmbeddingModel.NomicEmbedText, // optional
});

console.log(result);
```
