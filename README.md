# React Docker Workflow
[![Build Status](https://app.travis-ci.com/nawodyaishan/react-docker-workflow.svg?token=DKf3NVCcwz23mmxUx9nn&branch=main)](https://app.travis-ci.com/nawodyaishan/react-docker-workflow)


`react-docker-workflow` is a React-based project configured for both development and production environments using Docker. It includes a robust testing setup with Jest and leverages Vite for an enhanced development experience.

### Features

- React 18 setup.
- Dockerized environment for consistency across development and production.
- Integrated testing with Jest.
- TypeScript support for robust type-checking.
- ESLint for code quality.
- Vite for fast development build.

## File Structure

```
.
├── Dockerfile (Production build)
├── Dockerfile.dev (Development build)
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

## Development Setup

1. **Install Dependencies**:
   ```
   pnpm install
   ```

2. **Start Development Server**:
   ```
   pnpm dev
   ```

3. **Run Tests**:
   ```
   pnpm test
   ```

4. **Linting**:
   ```
   pnpm lint
   ```

## Docker Setup

### Development

- **Build and Run with Docker Compose**:
   ```
   docker-compose up
   ```
- This will build and run the development environment, accessible on `localhost:3000`.

### Production

- **Building the Docker Image**:
   ```
   docker build -t react-docker-workflow:latest -f Dockerfile .
   ```
- **Running the Container**:
   ```
   docker run -p 8080:80 react-docker-workflow:latest
   ```
- The production build will be accessible on `localhost:8080`.

## Configuration Files

- `vite.config.ts`: Configuration for Vite.
- `Dockerfile` and `Dockerfile.dev`: Docker configurations for production and development.
- `docker-compose.yml`: Docker Compose setup for development and test environments.

## Testing

The project includes a testing setup using Jest. Tests can be found in the `__tests__` directory and are configured via `jest.config.ts`.
