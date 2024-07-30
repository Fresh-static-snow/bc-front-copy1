# Maincast Calendar

- [Description](#description)
- [Setup](#setup)
- [Links](#links)
- [Main Technologies](#main-technologies)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)

## Description

**Maincast Calendar** is a robust application designed for efficient planning and management of events and personnel.
The primary features include:

- **Broadcast Schedule Planning**: Seamlessly plan and organize your broadcast schedules.
- **Personnel Coordination**: Efficiently involve and manage personnel for broadcasts and events.
- **Workload Management**: Effectively oversee staff and studio workloads.

This repository hosts the frontend component of the Maincast Calendar application. It is integrated with the backend
API, which can be found
at [broadcast-shift-calendar-api](https://github.com/masterwebcompany/broadcast-shift-calendar-api).

The deployment process for this application is managed through Docker, with detailed instructions available in
the [broadcast-shift-calendar-docker](https://github.com/masterwebcompany/broadcast-shift-calendar-docker) repository.

## Setup

### Start front in docker on http://localhost:9000:

```
git clone -b dev https://github.com/masterwebcompany/broadcast-shift-calendar-front.git
cd ./broadcast-shift-calendar-front
cp .env.example .env
make start
```

### Setup rails in docker on http://localhost:3000:

```
git clone -b dev https://github.com/masterwebcompany/broadcast-shift-calendar-api.git
cd ./broadcast-shift-calendar-api
cp .env.example .env
make setup
```

### Start both rails and front in docker on http://localhost:9000 and http://localhost:3000:

```
cd ./broadcast-shift-calendar-front
make full-app-start
```

### Setup front:

Install: `pnpm install`

Start front: `pnpm run dev`

## Links

- [Production](https://crm.maincast.com)
- [Development](https://next-crm.maincast.com)
- [Deployment](https://maincast.atlassian.net/wiki/spaces/MaincastCa/pages/690814977/Deployment)

## Tech Stack

- <img width='25' height='25' src='https://img.stackshare.io/service/1612/bynNY5dJ.jpg' alt='TypeScript'/> [TypeScript](http://www.typescriptlang.org) – Language
- <img width='25' height='25' src='https://img.stackshare.io/service/1020/OYIaJ1KK.png' alt='React'/> [React](https://reactjs.org/) – Library for web and native user interfaces
- <img width='25' height='25' src='https://img.stackshare.io/service/3350/8261421.png' alt='React Router'/> [React Router](https://github.com/rackt/react-router) – Declarative routing for React web applications
- <img width='25' height='25' src='https://img.stackshare.io/no-img-open-source.png' alt='axios'/> [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client
- [TanStack Query](https://tanstack.com/query/latest) - Asynchronous state management
- <img width='25' height='25' src='https://img.stackshare.io/service/11559/zustand.png' alt='Zustand'/> [Zustand](https://github.com/react-spring/zustand) – State management library
- [Immer](https://github.com/immerjs/immer#readme) - Immutability for state management
- [Material UI](https://mui.com) - UI library
- [React Hook Form](https://www.react-hook-form.com) - Performant, flexible and extensible forms library for React Hooks
- [Emotion](https://emotion.sh/docs/introduction) - Library designed for writing css styles with JavaScript
- [Notistack](https://notistack.com) - Display notifications
- <img width='25' height='25' src='https://img.stackshare.io/service/2438/lodash.png' alt='Lodash'/> [Lodash](https://lodash.com) – Utility library delivering consistency, modularity, performance, & extras
- [Dayjs](https://day.js.org) - Minimalist JavaScript library that parses, validates, manipulates, and displays dates
  and times
- [Vitest](https://vitest.dev) - A Vite-native testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) - Light-weight solution for
  testing React components
- <img width='25' height='25' src='https://img.stackshare.io/service/9240/sOct-Txm_400x400.png' alt='Storybook'/> [Storybook](https://storybook.js.org/) – Frontend workshop for building UI components and pages in isolation
- <img width='25' height='25' src='https://img.stackshare.io/service/21547/default_1aeac791cde11ff66cc0b20dcc6144eeb185c905.png' alt='Vite'/> [Vite](https://vitejs.dev/) – Build Tool / Task Runner
- <img width='25' height='25' src='https://img.stackshare.io/service/3337/Q4L7Jncy.jpg' alt='ESLint'/> [ESLint](http://eslint.org/) – Code Review
- <img width='25' height='25' src='https://img.stackshare.io/service/7035/default_66f265943abed56bcdbfca1c866a4261b1fbb063.jpg' alt='Prettier'/> [Prettier](https://prettier.io/) – Code Review
- <img width='25' height='25' src='https://img.stackshare.io/service/586/n4u37v9t_400x400.png' alt='Docker'/> [Docker](https://www.docker.com/) – Virtual Machine Platforms & Containers

Full tech stack [here](/techstack.md)

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

| Variable Name                     | Description                                       | Example Value                                                 |
|:----------------------------------|:--------------------------------------------------|:--------------------------------------------------------------|
| `VITE_ENVIRONMENT`                | Application environment                           | `production` or `development` or `staging`                    |
| `VITE_API_BASE_URL`               | Main API URL                                      | `http://example/api/v1`                                       |
| `VITE_WEBSOCKET_BASE_URL`         | URL for websocket connection                      | `ws://example/cable`                                          |
| `VITE_TELEGRAM_BOT_URL`           | URL to go to telegram bot                         | `https://t.me/example_bot`                                    |
| `VITE_SENTRY_DSN`                 | Sentry dsn URL                                    | `https://examplePublicKey@o0.ingest.sentry.io/0`              |
| `VITE_SENTRY_PROPAGATION_TARGETS` | Propagation targets separated by comma with space | `domain.url.com, localhost, /^https:\/\/yourserver\.io\/api/` |

## Scripts

| Script            | Description                                                                                                       |
|:------------------|:------------------------------------------------------------------------------------------------------------------|
| `dev`             | Runs Vite in development mode, providing fast build and real-time updates for the project.                        |
| `build`           | Compiles TypeScript code and creates a project build using Vite for production deployment.                        |
| `preview`         | Launches a preview of the ready build of the project, emulating production server behavior.                       |
| `lint`            | Checks the code for errors using TypeScript and ESLint, automatically fixing detected issues.                     |
| `prepare`         | Installs Husky to set up git hooks, such as pre-commit and pre-push, for automatic task execution before commits. |
| `storybook`       | Runs Storybook in development mode on port 6006 for creating and testing components in an isolated environment.   |
| `build-storybook` | Creates a static version of Storybook for production deployment.                                                  |
| `test`            | Runs tests using Vitest, executing them once and displaying the results.                                          |
| `test:coverage`   | Runs tests using Vitest and generates a code coverage report.                                                     |
