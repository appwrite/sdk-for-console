```javascript
import {
    Client,
    Monitors,
    MonitorMethod,
    MonitorSeverity,
    Query,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const monitors = new Monitors(client);

const result = await monitors.updateHttpMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>', // optional
    url: 'https://api.example.com/health', // optional
    method: MonitorMethod.GET, // optional
    headers: {
        Authorization: 'Bearer <TOKEN>',
    }, // optional
    body: '<BODY>', // optional
    rules: [
        Query.or([
            Query.notBetween('statusCode', 200, 299),
            Query.greaterThan('latency', 2000),
        ]),
    ], // optional
    interval: 60, // optional
    timeout: 10, // optional
    cooldown: 300, // optional
    enabled: true, // optional
    notify: ['owner'], // optional
    severity: MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});

console.log(result);
```
