import {IWorkflow} from "../types/i-workflow.ts";

export const workflowStages: IWorkflow[] = [
    {
        title: 'Docker Environment Setup',
        description: 'Creating Dockerfiles and docker-compose configurations to define and manage containerized environments.'
    },
    {
        title: 'Feature Development',
        description: 'Developers work within Docker containers to ensure consistency with the production environment.'
    },
    {
        title: 'Code Review and Unit Testing',
        description: 'Testing is conducted in Docker containers for consistency and isolation. Code reviews ensure code quality before merging.'
    },
    {
        title: 'Merge to Main Branch',
        description: 'After passing tests and reviews, features are merged into the main branch, maintaining a stable codebase.'
    },
    {
        title: 'CI/CD Pipeline Triggered',
        description: 'Changes to the main branch trigger the Continuous Integration and Continuous Deployment pipeline.'
    },
    {
        title: 'Automated Build and Test',
        description: 'Automated Docker build and test processes validate the changes in a controlled environment.'
    },
    {
        title: 'Push Image to Docker Registry',
        description: 'Successful builds are packaged as Docker images and stored in a registry for deployment.'
    },
    {
        title: 'Deploy to Staging Environment',
        description: 'Docker images are deployed in a staging environment that mirrors production, for further testing and validation.'
    },
    {
        title: 'Staging Testing',
        description: 'Comprehensive testing in the staging environment ensures the application performs as expected.'
    },
    {
        title: 'Deploy to Production',
        description: 'After successful testing in staging, the Docker images are deployed to the production environment.'
    },
    {
        title: 'Production Monitoring and Logging',
        description: 'Monitoring and logging tools are used to track the performance and health of the application in production.'
    },
    {
        title: 'Post-Deployment Testing',
        description: 'Further testing post-deployment ensures that the production environment runs smoothly.'
    },
    {
        title: 'Scaling and Maintenance',
        description: 'Docker is used to scale the application by deploying more containers and for rolling out updates or hotfixes.'
    }
];
