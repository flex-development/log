# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0-dev.0](https://github.com/flex-development/log/compare/log@3.0.0-dev.0...log@4.0.0-dev.0) (2021-10-11)


### ⚠ BREAKING CHANGES

* target `node>=14.18.0`
* use `.cjs` and `.mjs` extensions, drop `.js`
* `log.ts` -> `main.ts`

### :bug: Fixes

* `Error: Cannot find module ../loaders/env.cjs` ([512eb0f](https://github.com/flex-development/log/commit/512eb0f8acc2785ada7a58b9f3a12c611e2599a3))


### :recycle: Code Improvements

* `log.ts` -> `main.ts` ([b4f9756](https://github.com/flex-development/log/commit/b4f9756dc2c2c7ba4a8bdedd5d93118ed58a5a5c))


### :hammer: Build

* **deps-dev:** add `eslint-plugin-markdownlint@0.2.2` ([55c6e3c](https://github.com/flex-development/log/commit/55c6e3c5dbb22ea4a2e891b2791b649de8159d68))
* **deps-dev:** interactive upgrades ([7ad9d8e](https://github.com/flex-development/log/commit/7ad9d8e03c838102cb240dd389a6debbc7dd06d1))
* **deps-dev:** remove unused lodash deps ([07919bf](https://github.com/flex-development/log/commit/07919bf32c71437929ad5d1450b39133d315868a))
* target `node>=14.18.0` ([eaafd89](https://github.com/flex-development/log/commit/eaafd89ff09b96b2fc631ba9e16e4d94deb20f65))
* use `.cjs` and `.mjs` extensions, drop `.js` ([8bc6191](https://github.com/flex-development/log/commit/8bc61917dfea8b763af03c1c4e887aff35848f9a))


### :pencil2: Housekeeping

* add `.eslintrc.base.cjs` ([3ca17b7](https://github.com/flex-development/log/commit/3ca17b76b8f14a93acc8ee164dca8cba06da0be6))
* add husky hooks to prettier overrides ([0bd2783](https://github.com/flex-development/log/commit/0bd2783ccf0d1730bb501c0b098e17cd337cae62))
* **github:** add commit scopes - `cjs`, `config`, `esm`, `hybrid`, `utils` ([8212043](https://github.com/flex-development/log/commit/8212043c82760772be5c4176691577d2e0abe9b6))
* **github:** add labels - `scope:ci`, `scope:tools`, `scope:yarn` ([5ea181c](https://github.com/flex-development/log/commit/5ea181ce7c411a8b8af5fb076c4f86caffb43e60))
* **github:** drop `log` commit scope ([92abec0](https://github.com/flex-development/log/commit/92abec08d41516f639285d5023ba62f9c066a880))
* **github:** update `scope:scripts` label description ([c994243](https://github.com/flex-development/log/commit/c9942430ce80ac177d29be522bee48eca354c079))
* **release:** set package version ([b5260d9](https://github.com/flex-development/log/commit/b5260d94fdfccad168816a5af21e41e6e008afe3))
* set `typescript.tsdk` ([80e35b6](https://github.com/flex-development/log/commit/80e35b62ffc7dc49a4f5bc0e91e318a41ad8089c))
* toggle `--experimental-json-modules` flag usage ([84543f7](https://github.com/flex-development/log/commit/84543f7d24b2210de5227c880389bac4a61708b3))
* **tools:** fix typo in jest script ([218f4ba](https://github.com/flex-development/log/commit/218f4ba9bd74117e19be5a4156eb14b4e75fb0f3))
* **tools:** update `loadenv` invocations ([7afab48](https://github.com/flex-development/log/commit/7afab4827120bc250da31e8085358f753319daf5))
* update eslint + prettier ignore patterns ([fe7f9d4](https://github.com/flex-development/log/commit/fe7f9d4d735bbba1f229b7cf1bfe87587c4a8e29))
* update eslint extensions ([f3dae34](https://github.com/flex-development/log/commit/f3dae349797d42b42fcaf7c359b6b39a77880c98))
* use husky v7 ([f660aa1](https://github.com/flex-development/log/commit/f660aa156cef73863cd52d14b23714d1b19dfce1))

## [3.0.0-dev.0](https://github.com/flex-development/log/compare/log@2.0.0...log@3.0.0-dev.0) (2021-10-03)


### ⚠ BREAKING CHANGES

* use esm
* fix enum exports parsing
* kebab case filenames for `src` files

### :nail_care: Formatting & Structure

* kebab case filenames for `src` files ([c59be49](https://github.com/flex-development/log/commit/c59be49eed4642cc9ea39565f2ca791c48751367))


### :book: Documentation

* fix module annotations in `tools` directory ([48f732b](https://github.com/flex-development/log/commit/48f732b62246de6fafd3f6277403baf124dd08b3))
* remove `docs/examples` directory ([c60e611](https://github.com/flex-development/log/commit/c60e611f3824716bfa2b6f45de1dc031854c5f22))
* update `release/*` naming conventions ([8c2b0e2](https://github.com/flex-development/log/commit/8c2b0e223d3dc55882200f60df5d50b71a9f9941))
* update environment setup, merge strategies, and release docs ([46de44f](https://github.com/flex-development/log/commit/46de44f0ef9aa0471aa91229329e95c22a100b14))


### :pencil2: Housekeeping

* add `eslint-plugin-unicorn` ([66ae749](https://github.com/flex-development/log/commit/66ae749ccc6af9a7162ad7d8749c9b6f222d74fb))
* add `github` commit scope ([34a50f5](https://github.com/flex-development/log/commit/34a50f562dab1c4970bf3aa3bc7ef59e99edaef2))
* **github:** reorganize labels ([5a3c380](https://github.com/flex-development/log/commit/5a3c380be18c3f5bde9a103dcc068e32e30ddc72))
* re-add `scripts` commit scope ([82293a8](https://github.com/flex-development/log/commit/82293a863a97cf46bc566052a68641ca0aad9472))
* **release:** set package version to `3.0.0-dev.0` ([dedc655](https://github.com/flex-development/log/commit/dedc655788eb84b0ea8fe6d8755e5e0dfebc1b29))
* **scripts:** add `check:upgrades` script ([ae4209e](https://github.com/flex-development/log/commit/ae4209ed667a0a6db99f8ac36826555c27036b10))
* **scripts:** disable `postinstall` during git installs ([c39b762](https://github.com/flex-development/log/commit/c39b762b349c85b16d759803eb577f63b612681e))
* **tools:** add `prerelease` option to `release` cli ([9c10682](https://github.com/flex-development/log/commit/9c10682235190e606495fa5d9cd386e279c78446))
* **tools:** add `ReleaseOptions.path` ([b7841d8](https://github.com/flex-development/log/commit/b7841d8578e0b092f28a152afaf083b8e0e73fc1))
* **tools:** add option aliases to `ReleaseOptions` ([34e2a18](https://github.com/flex-development/log/commit/34e2a18c9458b9d3b062e62dc2127fcf6e568315))
* **tools:** create tarballs from `build` script ([214afcc](https://github.com/flex-development/log/commit/214afcc99b51f3cd06e57862e2996419636615e0))
* **tools:** move scripts to `tools` directory ([c5522e6](https://github.com/flex-development/log/commit/c5522e6fbbb5265365471e492aca00194dd3dcdc))
* **tools:** rename package data helper ([ae8238c](https://github.com/flex-development/log/commit/ae8238c6921e7da38895ef2155a5052db19532bd))
* **tools:** update `build` and `release` cli options ([1930db5](https://github.com/flex-development/log/commit/1930db5b851c400686c31fe95636ffcf26ecc8ad))
* **tools:** update `exec` return value ([c763f8e](https://github.com/flex-development/log/commit/c763f8e13cd7ee1ece4e37911fec62fe5ea126e2))
* **tools:** update release tag prefixing ([c4d189b](https://github.com/flex-development/log/commit/c4d189b52c907db00efdcc871c9d8c56ff0c11ef))
* **tools:** use `yarn pack` in `postchangelog` script ([6b3ab68](https://github.com/flex-development/log/commit/6b3ab68609ca4a730c89a652a063e11c6978be83))
* **typescript:** cleanup tsconfigs before esm migration ([0cd74d7](https://github.com/flex-development/log/commit/0cd74d7e5177a951fe0ffeb4cd048f47caabfb5e))
* update bug report issue template ([0a52651](https://github.com/flex-development/log/commit/0a52651e58d72ce23deeb42d58f3d66c01ce6393))
* use `cjs` extensions ([abaabd1](https://github.com/flex-development/log/commit/abaabd10648e9bc61cbe75f49aa6ea3ff76dc911))
* use typescript `commitlint` config ([e6c7aa2](https://github.com/flex-development/log/commit/e6c7aa2567b06c28b6fbcfa363037320354c1445))
* **yarn:** update `.yarnrc.yml` env var names ([57ad692](https://github.com/flex-development/log/commit/57ad69236639cfd51fd590f53ca2355e8d599921))


### :truck: Continuous Integration & Deployment

* **workflows:** add ids to `automate-pr-reviews` steps ([e39878c](https://github.com/flex-development/log/commit/e39878c9eb8f258b5ca9466a4f8dbae8b6d0aed6))
* **workflows:** support new tag prefix in `continuous-deployment` workflow ([9188fcc](https://github.com/flex-development/log/commit/9188fcc3b2af0b0e526506bf5bd293569a0abc95))
* **workflows:** update environment variables and workflow syntax ([0078377](https://github.com/flex-development/log/commit/0078377d10c40563c430c3983ba806609774a400))


### :hammer: Build

* **deps-dev:** drop `@flex-development/exceptions@4.0.1` ([e03aa28](https://github.com/flex-development/log/commit/e03aa28f553985b6b236feec8176f315cbc8546f))
* **deps-dev:** drop `lodash.merge@4.6.2` ([afbd4fa](https://github.com/flex-development/log/commit/afbd4fafc05a16ab56dd83cefe598f18d49ea159))
* **deps-dev:** interactively upgrade dependencies ([9112437](https://github.com/flex-development/log/commit/9112437145b257009a9c30c8b0085d1ad66cd2b9))
* **deps-opt:** make `shelljs` deps optional ([f0df520](https://github.com/flex-development/log/commit/f0df5203d276cf1d939bd2ea39722e695327aed2))
* **deps-peer:** require `typescript>=4.4.0` ([65614ec](https://github.com/flex-development/log/commit/65614ec7e92de710a2e8d43e6a5a1b9ec734b2cb))
* fix enum exports parsing ([1661ebd](https://github.com/flex-development/log/commit/1661ebda146544cccda140dd573ba2d3191a72d3))
* use esm ([4487c15](https://github.com/flex-development/log/commit/4487c15fb8f8aeaa2b57f2a63ea0191f9012931d))
* **yarn:** deduplicate dependencies ([01b3adf](https://github.com/flex-development/log/commit/01b3adfff5f4ad4644070607525be48c96c109a5))

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
