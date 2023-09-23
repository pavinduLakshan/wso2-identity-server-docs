# Awesome WSO2 IS
Articles, tutorials and everything else about WSO2 Identity Server

## Versioning strategy

Initially, use a single site and explain version differences in the same document.

Later, move to git based versioning strategy.

## todo

- RESTORE SETUP/DEPLOYEMENT_GUIDE FROM deploy/deployment-guide
setup elk-analytics-sso-guide from deploy/elk-analytics-sso-guide
docs/setup/enable-xacml-policy-update-notifications.md
docs/setup/monitor deploy/monitor
deploy/performance
deploy/security
deploy/upgrade
docs/setup/secure-userstore-using-pbkdf2.md
docs/setup/work-with-properties-of-user-stores.md

## Installation

```bash
yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Continuous Integration

Some common defaults for linting/formatting have been set for you. If you integrate your project with an open source Continuous Integration system (e.g. Travis CI, CircleCI), you may check for issues using the following command.

```
$ yarn ci
```
