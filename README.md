# Github Issues Browser

This project allows users to browse and search GitHub issues using the GitHub API. It provides interface for interacting with repositories, fetching issues, and sorting them according to different parameters.

## Features

- **GitHub Issues Browser**: Search and view issues from GitHub repositories.
- **Pagination**: Navigate through large sets of issues with pagination.
- **Sorting**: Sort issues by different criteria like creation date, comments count, etc.

## Tech Stack

- **Frontend**: React (with TypeScript)
- **State Management**: Redux (with Redux-Saga for side-effects)
- **API**: GitHub REST/GraphQL API for fetching issues and repository data
- **UI**: Ant Design for components

## Setup

### Environment Variables

Before running the application, you need to set up the environment variables for authentication and configuration.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Velfrr/github-issues-explorer.git
   cd github-issues-explorer
   ```

2. **Install dependencies**:

   ```bash
   yarn
   ```

3. **Create a `.env` file**:

   At the root of the project, create a `.env` file and add the following environment variables:

   - `VITE_GITHUB_ACCESS_TOKEN`: Your GitHub personal access token.

   Example of `.env` file:

   ```env
   VITE_GITHUB_ACCESS_TOKEN=<GitHub Access Token>
   ```

   The access token is used to authenticate API requests to GitHub's GraphQL API.

4. **Start the application**:

   After setting up the `.env` file with the correct variables, you can run the application:

   ```bash
   yarn dev
   ```
