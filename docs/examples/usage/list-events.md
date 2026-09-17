```javascript
import {
    Client,
    Usage,
    UsageEventMetric,
    UsageInterval,
    UsageEventDimension,
    UsageOrderBy,
    UsageOrderDirection,
} from '@appwrite.io/console';

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<YOUR_PROJECT_ID>'); // Your project ID

const usage = new Usage(client);

const result = await usage.listEvents({
    metrics: [UsageEventMetric.NetworkRequests],
    queries: [], // optional
    interval: UsageInterval.OneMinute, // optional
    dimensions: [UsageEventDimension.Path], // optional
    startAt: '2020-10-15T06:38:00.000+00:00', // optional
    endAt: '2020-10-15T06:38:00.000+00:00', // optional
    orderBy: UsageOrderBy.Time, // optional
    orderDir: UsageOrderDirection.Asc, // optional
    limit: 1, // optional
    offset: 0, // optional
});

console.log(result);
```
