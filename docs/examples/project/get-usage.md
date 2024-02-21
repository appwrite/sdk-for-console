import { Client, Project, ProjectUsageRange } from "@appwrite.io/console";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2'); // Your project ID

const project = new Project(client);

const result = await project.getUsage(
    '', // startDate
    '', // endDate
    ProjectUsageRange.OneHour // period (optional)
);

console.log(response);
