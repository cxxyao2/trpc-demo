# tRPC/Express API + React Client Setup

## prerequisites:

- react-query
- react context hook
- typescript
- node.js + express

## file structure

```
cd packages
|
--- api-server
|
--- client

```

npx create-mf-app
(select server, express)
npx create-mf-app
(select client, React, Tailwind)

cd api-server
npx tsc --init

cd client
npx tsc --init
here. in tsconfig.json
comment out jsx line

```

## errors

### under api-server, when `npm run start`

- errors
Common Compilation  errors are caused by version imcompatibility.
Best practice is  always to upgrade all  libraries to latest versions and refer to official documents to implement the features.


```

Error: Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.

```

- solution: upgrade version in package.json like below

```

    "ts-node": "^10.8.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.6.4"

```

### connect client and server

```

cd client
npm install api-server@1.0.0

```

proofs
![server screen](/assets/trpc-server.png)
![client screen](/assets/trpc-client.png)
```
