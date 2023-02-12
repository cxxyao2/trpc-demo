# tRPC/Express API + React Client Setup

## file folder structure

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
comment out  jsx line

```

## errors

### under api-server, when `npm run start`

- error

```
Error: Debug Failure. False expression: Non-string value passed to `ts.resolveTypeReferenceDirective`, likely by a wrapping package working with an outdated `resolveTypeReferenceDirectives` signature. This is probably not a problem in TS itself.
```

- solution: upgrade version in package.json like below

```
	"ts-node": "^10.8.0",
	"ts-node-dev": "^2.0.0",
	"typescript": "^4.6.4"
```
