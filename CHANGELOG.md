# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/flex-development/log/compare/v1.0.1...v2.0.0) (2021-09-16)


### :pencil2: Housekeeping

* add `deps-peer` and `yarn` commit scopes ([21905de](https://github.com/flex-development/log/commit/21905def9c8569ad255759ee677fcbb6bd9a7ca2))
* run `yarn set version berry` ([4bcda50](https://github.com/flex-development/log/commit/4bcda50edbd75f013a6114edd7b9a6b5d6ff947e))
* **scripts:** add `check:dedupe` ([8ed8ce6](https://github.com/flex-development/log/commit/8ed8ce6a8fc510d3e8171812a26f9e2fc79dcb49))
* **scripts:** add `check:install` ([54304ea](https://github.com/flex-development/log/commit/54304eaa1e9284052a4296a6de79e9d2555641f0))
* **scripts:** add `clean:modules` and `clean:yarn` ([8f2b31e](https://github.com/flex-development/log/commit/8f2b31e6125494a9d8bec60f4b7f050315880a2d))
* update `lint-staged` config ([f875714](https://github.com/flex-development/log/commit/f87571445c8e1d5b3373b17fd2020641fec916d6))
* update environment variables ([d8e08d5](https://github.com/flex-development/log/commit/d8e08d509f10e32c129c6abf7bba876853b8883b))
* **yarn:** add `@yarnpkg/plugin-interactive-tools` ([aba5881](https://github.com/flex-development/log/commit/aba588102e332ca29dcd1383684b74a32992dda3))


### :hammer: Build

* run `yarn dedupe --strategy highest` ([51f11e6](https://github.com/flex-development/log/commit/51f11e62678938b77aeaa83aaa2372e3c8bd81d0))
* run local integrity check ([785b39d](https://github.com/flex-development/log/commit/785b39d5e78469eca2726358b6659c06d0bd0ab6))
* **deps-dev:** add `concurrently@6.2.1` ([e4edd20](https://github.com/flex-development/log/commit/e4edd208ca0aaf32dd41b5396b9cb8b6d4fd0341))
* update build output ([cdd6c61](https://github.com/flex-development/log/commit/cdd6c614b6eec8a62232068b8a1805f82485ce93))
* **deps-dev:** add `pinst@2.1.6` ([8ae61c4](https://github.com/flex-development/log/commit/8ae61c4422e4f65f627411e728b126cd11bb930f))
* **deps-dev:** add `is-ci@3.0.0` ([f0f96c5](https://github.com/flex-development/log/commit/f0f96c569e59e77ed026dae574d93f0e2197663d))
* **deps-dev:** upgrade `eslint` deps ([3e14f52](https://github.com/flex-development/log/commit/3e14f525fd6a94971ef2065b4bee13099865c559))
* **deps-dev:** drop `@vercel/ncc@0.29.2` ([ed6f7dd](https://github.com/flex-development/log/commit/ed6f7dd233b98cb0d4c7899475ded0f5ee3abcc0))
* **deps-dev:** use `lint-staged@11.1.2` ([1787132](https://github.com/flex-development/log/commit/1787132236379470bff038f8dab760db566ff0f5))
* **deps-dev:** use `@types/rimraf@3.0.2` ([78125e6](https://github.com/flex-development/log/commit/78125e603b12d73b95e6a56a79159f40e80d7ded))
* **deps-dev:** use `@types/node@16.9.1` ([fba0633](https://github.com/flex-development/log/commit/fba06331a2b7c6a30005e9bdb6673e759fbe612f))
* **deps-dev:** use `@flex-development/grease@1.1.0` ([d39acb4](https://github.com/flex-development/log/commit/d39acb4df247665fa72d4a470881736bca403dbd))
* **deps-dev:** upgrade `commitlint` deps to `v13.1.0` ([ac3b319](https://github.com/flex-development/log/commit/ac3b3197d79e2ccb41cc3cb48ec4d5baaa51af5c))
* **deps-dev:** use `prettier-plugin-sh@0.7.1` ([2758396](https://github.com/flex-development/log/commit/2758396109c308432bae280b191a0b2a8da897c5))
* **deps-dev:** use `prettier@2.4.0` ([e837383](https://github.com/flex-development/log/commit/e837383d5ae9389530f334244fd53ac4cf028867))
* **deps-dev:** use `npm@7.23.0` ([5f8c0f7](https://github.com/flex-development/log/commit/5f8c0f703a574386d588b71979cbe8754eea917c))
* **deps-dev:** use `@types/jest@27.0.1` ([eb24c95](https://github.com/flex-development/log/commit/eb24c952055ef892dccac11081e243e3a62bffb6))
* **deps-dev:** use `jest@27.2.0` ([2b1cc6a](https://github.com/flex-development/log/commit/2b1cc6a327ec58e40180f5ea1dc920e9b6506066))
* **deps-dev:** use `ts-jest@27.0.5` ([5a24e79](https://github.com/flex-development/log/commit/5a24e797e9d735ba4f455c49e83dc148bd20f854))
* **deps-dev:** use `ts-node@10.2.1` ([6ad403a](https://github.com/flex-development/log/commit/6ad403ad9f58b3423112baddd95ae5e00789cbd9))
* **deps-dev:** use `typescript@4.4.2` ([6728e5c](https://github.com/flex-development/log/commit/6728e5cb2baca44b9f37c639fc2acfc2ae178889))
* **deps-dev:** use `tsconfig-paths@3.11.0` ([e5c9e10](https://github.com/flex-development/log/commit/e5c9e10f329d0621a6b39200c1545dbbe9fedee3))
* **deps:**  use `@flex-development/tutils@3.1.7` ([5b4040d](https://github.com/flex-development/log/commit/5b4040d222750090fef4c2c01cac502232f63ad1))


### :truck: Continuous Integration & Deployment

* **scripts:** don't run `postinstall` script in ci environments ([948b852](https://github.com/flex-development/log/commit/948b8521f3e33b374398a5f9fb1a14df15064dcf))
* **workflows:** add `integrity` ([f3b1ac2](https://github.com/flex-development/log/commit/f3b1ac2a2e8961d08634974ad108d86b2b055061))


### :recycle: Code Improvements

* allow lowercase log levels ([2de2caf](https://github.com/flex-development/log/commit/2de2cafa4605e8fb24d6aeeac0424748abdeffb5))


### [1.0.1](https://github.com/flex-development/log/compare/v1.0.0...v1.0.1) (2021-08-23)


### :truck: Continuous Integration & Deployment

* **workflows:** fix `cannot read property 'tag' of undefined` ([a1319b6](https://github.com/flex-development/log/commit/a1319b6f5661f3cb8c5e4e84d9b1cc1294d61ad1))
* **workflows:** run `publish-release` job after `update-production-branch` job ([51f2eee](https://github.com/flex-development/log/commit/51f2eee270449d7a97a6db3f2b0d9ac1a96093d7))


### :bug: Fixes

* missing distribution files ([05752cb](https://github.com/flex-development/log/commit/05752cbb58fb93cbbe4e1de2ca8ee1f04e3327d9))

## 1.0.0 (2021-08-23)
