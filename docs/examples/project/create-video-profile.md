```javascript
import { Client, Project, VideoCodecId } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const project = new Project(client);

const result = await project.createVideoProfile({
    profileId: '<PROFILE_ID>',
    name: '<NAME>',
    videoBitRate: 32000,
    audioBitRate: 32000,
    width: 16,
    height: 16,
    codec: VideoCodecId.H264, // optional
});

console.log(result);
```
