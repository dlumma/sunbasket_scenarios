# sunbasket
Instant continuous integration scenarios for SunBasket.

Set these env vars:

```
export AUT=sunbasket
export AUT_DOMAIN=https://master.sunbasket-staging.com
export AUT_BRANCH=master
export SCENARIOS=./sunbasket/lib/scenarios.js
```

Build the code to lambda compatible version:

```
npm run build
```

Run instant CI with the bloomcode platform.

To run all tests from core:
```
npm run setup-run
npm run bloom-test
```

To run a specific test:
```
npx ava ../sunbasket/lib/scenarios.js --match='external_landing*'
```