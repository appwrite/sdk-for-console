```javascript
import { Client, Monitors, MonitorSeverity, Query } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const monitors = new Monitors(client);

const result = await monitors.updateUsageMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>', // optional
    rules: [Query.greaterThan('network.outbound', 5000000000)], // optional
    window: 3600, // optional
    cooldown: 1800, // optional
    enabled: true, // optional
    notify: ['owner'], // optional
    severity: MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});

console.log(result);
```
