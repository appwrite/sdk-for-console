```javascript
import {
    Client,
    Monitors,
    MonitorMethod,
    MonitorSeverity,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const monitors = new Monitors(client);

const result = await monitors.updateHttpMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>', // optional
    url: 'https://example.com/health', // optional
    method: MonitorMethod.GET, // optional
    headers: {
        Accept: 'application/json',
    }, // optional
    body: '<BODY>', // optional
    rules: ['{"method":"greaterThan", "attribute":"latency", "values":[2000]}'], // optional
    interval: 1, // optional
    timeout: 1, // optional
    cooldown: 300, // optional
    enabled: false, // optional
    notify: [], // optional
    severity: MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});

console.log(result);
```
