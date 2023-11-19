# React Docker Workflow
[![Build Status](https://app.travis-ci.com/nawodyaishan/react-docker-workflow.svg?token=DKf3NVCcwz23mmxUx9nn&branch=main)](https://app.travis-ci.com/nawodyaishan/react-docker-workflow)

---
This project is a React application configured for Docker-based development and production workflows, integrated with Travis CI for continuous integration and deployment.

### Getting Started

Clone the repository and navigate to the project directory.

### Development Setup

- **Running the Development Server**:
  ```bash
  docker-compose up my-react
  ```

- **Running Tests**:
  ```bash
  docker-compose up tests
  ```

### Production Build

- **Building the Production Docker Image**:
  ```bash
  docker build -t react-docker-workflow-prod:latest -f Dockerfile .
  ```

- **Running the Production Container**:
  ```bash
  docker run -p 8080:80 react-docker-workflow-prod
  ```

### Travis CI Configuration

The project is configured for continuous integration with Travis CI, building and testing the Dockerized application.

### Project Structure

```
.
├── Dockerfile
├── Dockerfile.dev
├── README.md
├── app.yaml
├── docker-compose.yml
├── index.html
├── jest.config.ts
├── jest.setup.ts
├── mocks
│   └── styleMock.ts
├── package.json
├── pnpm-lock.yaml
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── __tests__
│   │   ├── App.test.tsx
│   │   └── WorkflowStage.test.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── WorkflowStage.tsx
│   ├── data
│   │   └── workflow-data.ts
│   ├── index.css
│   ├── main.tsx
│   ├── types
│   │   └── i-workflow.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Vite Configuration

Configured with Vite for an optimized development experience.

### Docker Compose

The `docker-compose.yml` file is set up to facilitate both development and testing environments.

### Continuous Integration and Deployment

Travis CI is used for continuous integration, running tests in Docker containers, and deploying to Google App Engine.
