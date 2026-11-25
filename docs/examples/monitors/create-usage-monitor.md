```javascript
import { Client, Monitors, MonitorSeverity } from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const monitors = new Monitors(client);

const result = await monitors.createUsageMonitor({
    monitorId: '<MONITOR_ID>',
    name: '<NAME>',
    rules: [
        '{"method":"greaterThan", "attribute":"network.outbound", "values":[5000000000]}',
    ],
    window: 60, // optional
    cooldown: 300, // optional
    enabled: false, // optional
    notify: ['owner'], // optional
    severity: MonitorSeverity.Info, // optional
    escalationId: '<ESCALATION_ID>', // optional
});

console.log(result);
```
