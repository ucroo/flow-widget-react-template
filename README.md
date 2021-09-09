# Development - React Widget for flow

In order to develop and publish this repository you will need the following:

- run `npm install` to install the needed dependencies.

- `.env.development` file with the following contents:

ENV=${whatever your local portal server is}

```
HOST=local.flow.${ENV}
HTTPS=true
```

You'll also need to have configured flow access tokens for your server.  Your server will have a name for the upload scripts.

FLOW=${uploadCredentialName}

In order to establish your local dev environment you might also need to run:
`uploadSharedConfig.sh ${FLOW}`
`uploadFlow.sh ${FLOW}`
`uploadTrigger.sh ${FLOW}`

Make sure you have an active cookie session with the local env & the production environment as well as any firewalls permitting access to the necessary servers.

- `build` directory by using the following command:

```
yarn build
npm run-script build
```

Next you'll run a script to... generateResourceCollection.sh [takes 3 args]

1. point it at the yarn build directory
2. give it a folder to construct
3. tell it the resource collection name

```
generateResourceCollection.sh ${1:build ${2:output} ${3:reactWidget}
uploadResourceCollection.sh ${2:output} ${FLOW}
```

It should be noted, you must run `yarn build` before publishing. The build directory is optimized for prod and where the script is directed to pull from.

You will also need to do a DNS override in your local hosts file.
For this project the localhost has been set to:

```
127.0.0.1       local.flow.${ENV}
```

Features that can be found in code base:

- Resize based on content for a React.js environment found in App.js using useLayoutEffect hook as well as query params with react router.

- Blackboard filter allows for students to see all available courses. Instructors & Teaching Assistants are able to courses they're currently teaching and courses that will become available.

- height.html is an example of how to reproduce the iframe in development.  Please make sure to edit it before use, replacing the url of the iframe with the correct hostname for your local override.
- darkmode support for campus.
