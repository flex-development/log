## [log@4.0.1-dev.3](https://github.com/flex-development/log/compare/log@4.0.1-dev.2...log@4.0.1-dev.3) (2021-10-31)

### :package: Build

- [[`c857652`](https://github.com/flex-development/log/commit/c85765293cb7cb83088b3c87357001b0a6af94d5)] **deps:** use `@flex-development/tutils@4.2.3`

### :bug: Fixes

- [[`a6858e4`](https://github.com/flex-development/log/commit/a6858e4b73907956ecaabb64c47105918d119bbd)] package exports (actually)

## [log@4.0.1-dev.2](https://github.com/flex-development/log/compare/log@4.0.1-dev.1...log@4.0.1-dev.2) (2021-10-31)

### :package: Build

- [[`0bca0b8`](https://github.com/flex-development/log/commit/0bca0b832e5d8c9c95b454782387fb24de494ef9)] **deps:** use `@flex-development/tutils@4.2.2`

### :bug: Fixes

- [[`fc7491d`](https://github.com/flex-development/log/commit/fc7491df53a97e6cc7376c12457499df4a295594)] package exports

## [log@4.0.1-dev.1](https://github.com/flex-development/log/compare/log@4.0.1-dev.0...log@4.0.1-dev.1) (2021-10-30)

### :package: Build

- [[`902e0cd`](https://github.com/flex-development/log/commit/902e0cdbbe5f6b04af55df1b119c5849efbd5eca)] **deps-dev:** cleanup + interactive upgrades
- [[`3fd378c`](https://github.com/flex-development/log/commit/3fd378c207345d6d764d69302cb1c10cccae6fe8)] **deps-peer:** add `@types/node@>=14.0.0` (optional)
- [[`e8ccdf7`](https://github.com/flex-development/log/commit/e8ccdf7d6f23ce4718f23f34a3534619ddfbea38)] **deps:** use `@flex-development/tutils@4.0.3`
- [[`3f669cb`](https://github.com/flex-development/log/commit/3f669cbc5068278d7185d457a1977d52c46dcda0)] **deps:** use `@flex-development/tutils@4.2.1`

### :robot: Continuous Integration

- [[`d153326`](https://github.com/flex-development/log/commit/d1533263558b490baa57f731bf75eb7f4336a148)] **workflows:** add `delete-release-branch` job
- [[`b7d97ed`](https://github.com/flex-development/log/commit/b7d97edf0b16a0f9691b22aedf5dfe22d543eec2)] **workflows:** push to protected branch 'main'
- [[`35fb2e0`](https://github.com/flex-development/log/commit/35fb2e0e4b704fc6d3606a8aac360cbbcc9a3e99)] **workflows:** temporarily skip dependency graph check
- [[`18078ee`](https://github.com/flex-development/log/commit/18078ee9e40a13553241ed56ae1727162a36171f)] **workflows:** update `integrity` triggers

### :bug: Fixes

- [[`c811df7`](https://github.com/flex-development/log/commit/c811df78e0b90ef929610f7cd26d5bc444b4ba80)] **cjs:** `Must use import to load ES Module: figures/index.js`
- [[`a34228b`](https://github.com/flex-development/log/commit/a34228bef713c2e7044cdc66bb1feb938779e682)] **cjs:** missing named exports

### :house_with_garden: Housekeeping

- [[`1629db0`](https://github.com/flex-development/log/commit/1629db0f05d002ea78f9b765b13f10a1f778eb48)] check code style
- [[`8dd39c8`](https://github.com/flex-development/log/commit/8dd39c82ef59785a16f556d3b2868b4ff012c4ae)] update eslint config to handle dotfiles
- [[`2c86c10`](https://github.com/flex-development/log/commit/2c86c10c0b930b3ac96b1df7db62bd49551d7b75)] **scripts:** add check:ci script
- [[`ab53a48`](https://github.com/flex-development/log/commit/ab53a48b488c43e754c1fb6f224e3314b080b3ce)] **scripts:** remove `*.tgz` files in `clean:build` script
- [[`2f09329`](https://github.com/flex-development/log/commit/2f0932922e2c62a7e3dedeb2f24c11bcab7b4cc9)] **tools:** cleanup esm loader
- [[`6699370`](https://github.com/flex-development/log/commit/6699370bc7efb08aebdceb8d97a3654be2f6ac1d)] **tools:** reorganize build workflow
- [[`02457e9`](https://github.com/flex-development/log/commit/02457e9da91ada33232411ecfe42bd7491c074d9)] **tools:** use explicit environment variables in testing workflow
- [[`b5a9424`](https://github.com/flex-development/log/commit/b5a94248dbdbfe5ff6dc77fbf9b07f0c8ec31378)] **typescript:** add typings for `@vercel/ncc`
- [[`13ee632`](https://github.com/flex-development/log/commit/13ee632de016dba987773244d22f97da303436c1)] **typescript:** add typings for `tsc-prog/dist/utils/log`
- [[`e59e47a`](https://github.com/flex-development/log/commit/e59e47a23c1bfefcd5c60d785162fff78ee030c0)] **typescript:** run type check

## [log@4.0.1-dev.0](https://github.com/flex-development/log/compare/log@4.0.0-dev.0...log@4.0.1-dev.0) (2021-10-13)

### :package: Build

- [[`6430673`](https://github.com/flex-development/log/commit/6430673db2bcb2894d239d2a54e1a484f871af2b)] add `.d.ts` file source maps to build output
- [[`310d995`](https://github.com/flex-development/log/commit/310d9958a6e47c0c123b75807065cd9d84fae0e8)] **cjs:** enable downleveling
- [[`40db490`](https://github.com/flex-development/log/commit/40db490cdd451d8f51e488af6cbd2809e5723711)] **typescript:** upgrade to `typescript@4.5.0-beta`

### :robot: Continuous Integration

- [[`bc104d3`](https://github.com/flex-development/log/commit/bc104d39c82a1ea1c440ab2d8c1f02d67e988ca6)] **workflows:** update `continuous-integration` triggers
- [[`5b1d5c4`](https://github.com/flex-development/log/commit/5b1d5c466efa3895da0174f418a8e21f2de73277)] **workflows:** update `integrity` triggers

### :bug: Fixes

- [[`a5745a9`](https://github.com/flex-development/log/commit/a5745a9a3c626703c964d18b5daca6674f52e7f3)] **cjs:** directory index specifiers

### :house_with_garden: Housekeeping

- [[`b3c3924`](https://github.com/flex-development/log/commit/b3c3924cba2e94fab8f4da12db1c903591ac0264)] **tools:** add `ts-patch`, drop `ttypescript`
- [[`3b91e90`](https://github.com/flex-development/log/commit/3b91e90da1e06ca47d83be04e63abd0c407d5a02)] **tools:** add `tsc-prog` to build workflow
- [[`59956e3`](https://github.com/flex-development/log/commit/59956e3987ec17eb9c47e3f01c84c70e6109bab8)] **tools:** enable type checking during build workflow
- [[`9f85f93`](https://github.com/flex-development/log/commit/9f85f930c6af30781b81a151723dae7a4e9651a6)] **tools:** update build workflow error handling
- [[`810eb2b`](https://github.com/flex-development/log/commit/810eb2b90d1c0f10789fb84954e3283111db523d)] **typescript:** add note about disabling `noUnusedLocals`
- [[`fc668c8`](https://github.com/flex-development/log/commit/fc668c896684c64eaf39f2053af0dcad4701270b)] **typescript:** enable `exactOptionalPropertyTypes`
- [[`bec35fc`](https://github.com/flex-development/log/commit/bec35fc1f5de33641e8c89039aadafba3669b3cd)] **typescript:** enable `noErrorTruncation`
- [[`337ab9c`](https://github.com/flex-development/log/commit/337ab9ccfdfc4513177312bc405bc128fd18b52c)] **typescript:** enable `noImplicitAny`
- [[`9909b4c`](https://github.com/flex-development/log/commit/9909b4c3a9cc44a03aba8556477797aac87790b3)] **typescript:** enable `noPropertyAccessFromIndexSignature`
- [[`96647ff`](https://github.com/flex-development/log/commit/96647ff35b7043990eccc3973e7200f93566f4d1)] **typescript:** enable `noUncheckedIndexedAccess`
- [[`acb9d3e`](https://github.com/flex-development/log/commit/acb9d3e462201548fdcaae3d953de256d7a85ded)] **typescript:** enable `noUnusedParameters`

### :white_check_mark: Testing

- [[`3dc96ee`](https://github.com/flex-development/log/commit/3dc96ee5aac711f6d38bef8d0759645be598e30c)] **typescript:** disable `noImplicitAny` and `noUncheckedIndexedAccess`

## [log@4.0.0-dev.0](https://github.com/flex-development/log/compare/log@3.0.0-dev.0...log@4.0.0-dev.0) (2021-10-10)

### ⚠ BREAKING CHANGES

- use `.cjs` and `.mjs` extensions, drop `.js`
- `log.ts` -> `main.ts`

### :package: Build

- [[`8bc6191`](https://github.com/flex-development/log/commit/8bc61917dfea8b763af03c1c4e887aff35848f9a)] use `.cjs` and `.mjs` extensions, drop `.js`
- [[`55c6e3c`](https://github.com/flex-development/log/commit/55c6e3c5dbb22ea4a2e891b2791b649de8159d68)] **deps-dev:** add `eslint-plugin-markdownlint@0.2.2`
- [[`7ad9d8e`](https://github.com/flex-development/log/commit/7ad9d8e03c838102cb240dd389a6debbc7dd06d1)] **deps-dev:** interactive upgrades
- [[`07919bf`](https://github.com/flex-development/log/commit/07919bf32c71437929ad5d1450b39133d315868a)] **deps-dev:** remove unused lodash deps

### :robot: Continuous Integration

- [[`74dc7ee`](https://github.com/flex-development/log/commit/74dc7ee1a47445dfbd6db57a4dc9811c30a214a0)] **workflows:** `integrity` - use `[12.x, 14.x, 16.x]` node matrix

### :bug: Fixes

- [[`512eb0f`](https://github.com/flex-development/log/commit/512eb0f8acc2785ada7a58b9f3a12c611e2599a3)] `Error: Cannot find module ../loaders/env.cjs`

### :house_with_garden: Housekeeping

- [[`3ca17b7`](https://github.com/flex-development/log/commit/3ca17b76b8f14a93acc8ee164dca8cba06da0be6)] add `.eslintrc.base.cjs`
- [[`0bd2783`](https://github.com/flex-development/log/commit/0bd2783ccf0d1730bb501c0b098e17cd337cae62)] add husky hooks to prettier overrides
- [[`80e35b6`](https://github.com/flex-development/log/commit/80e35b62ffc7dc49a4f5bc0e91e318a41ad8089c)] set `typescript.tsdk`
- [[`84543f7`](https://github.com/flex-development/log/commit/84543f7d24b2210de5227c880389bac4a61708b3)] toggle `--experimental-json-modules` flag usage
- [[`fe7f9d4`](https://github.com/flex-development/log/commit/fe7f9d4d735bbba1f229b7cf1bfe87587c4a8e29)] update eslint + prettier ignore patterns
- [[`f3dae34`](https://github.com/flex-development/log/commit/f3dae349797d42b42fcaf7c359b6b39a77880c98)] update eslint extensions
- [[`f660aa1`](https://github.com/flex-development/log/commit/f660aa156cef73863cd52d14b23714d1b19dfce1)] use husky v7
- [[`8212043`](https://github.com/flex-development/log/commit/8212043c82760772be5c4176691577d2e0abe9b6)] **github:** add commit scopes - `cjs`, `config`, `esm`, `hybrid`, `utils`
- [[`5ea181c`](https://github.com/flex-development/log/commit/5ea181ce7c411a8b8af5fb076c4f86caffb43e60)] **github:** add labels - `scope:ci`, `scope:tools`, `scope:yarn`
- [[`92abec0`](https://github.com/flex-development/log/commit/92abec08d41516f639285d5023ba62f9c066a880)] **github:** drop `log` commit scope
- [[`c994243`](https://github.com/flex-development/log/commit/c9942430ce80ac177d29be522bee48eca354c079)] **github:** update `scope:scripts` label description
- [[`218f4ba`](https://github.com/flex-development/log/commit/218f4ba9bd74117e19be5a4156eb14b4e75fb0f3)] **tools:** fix typo in jest script
- [[`7afab48`](https://github.com/flex-development/log/commit/7afab4827120bc250da31e8085358f753319daf5)] **tools:** update `loadenv` invocations

### :mechanical_arm: Refactors

- [[`b4f9756`](https://github.com/flex-development/log/commit/b4f9756dc2c2c7ba4a8bdedd5d93118ed58a5a5c)] `log.ts` -> `main.ts`

## [log@3.0.0-dev.0](https://github.com/flex-development/log/compare/log@2.0.0...log@3.0.0-dev.0) (2021-10-03)

### ⚠ BREAKING CHANGES

- use esm
- fix enum exports parsing
- kebab case filenames for `src` files

### :package: Build

- [[`1661ebd`](https://github.com/flex-development/log/commit/1661ebda146544cccda140dd573ba2d3191a72d3)] fix enum exports parsing
- [[`4487c15`](https://github.com/flex-development/log/commit/4487c15fb8f8aeaa2b57f2a63ea0191f9012931d)] use esm
- [[`e03aa28`](https://github.com/flex-development/log/commit/e03aa28f553985b6b236feec8176f315cbc8546f)] **deps-dev:** drop `@flex-development/exceptions@4.0.1`
- [[`afbd4fa`](https://github.com/flex-development/log/commit/afbd4fafc05a16ab56dd83cefe598f18d49ea159)] **deps-dev:** drop `lodash.merge@4.6.2`
- [[`9112437`](https://github.com/flex-development/log/commit/9112437145b257009a9c30c8b0085d1ad66cd2b9)] **deps-dev:** interactively upgrade dependencies
- [[`f0df520`](https://github.com/flex-development/log/commit/f0df5203d276cf1d939bd2ea39722e695327aed2)] **deps-opt:** make `shelljs` deps optional
- [[`65614ec`](https://github.com/flex-development/log/commit/65614ec7e92de710a2e8d43e6a5a1b9ec734b2cb)] **deps-peer:** require `typescript>=4.4.0`
- [[`01b3adf`](https://github.com/flex-development/log/commit/01b3adfff5f4ad4644070607525be48c96c109a5)] **yarn:** deduplicate dependencies

### :pencil: Documentation

- [[`48f732b`](https://github.com/flex-development/log/commit/48f732b62246de6fafd3f6277403baf124dd08b3)] fix module annotations in `tools` directory
- [[`c60e611`](https://github.com/flex-development/log/commit/c60e611f3824716bfa2b6f45de1dc031854c5f22)] remove `docs/examples` directory
- [[`8c2b0e2`](https://github.com/flex-development/log/commit/8c2b0e223d3dc55882200f60df5d50b71a9f9941)] update `release/*` naming conventions
- [[`46de44f`](https://github.com/flex-development/log/commit/46de44f0ef9aa0471aa91229329e95c22a100b14)] update environment setup, merge strategies, and release docs

### :house_with_garden: Housekeeping

- [[`66ae749`](https://github.com/flex-development/log/commit/66ae749ccc6af9a7162ad7d8749c9b6f222d74fb)] add `eslint-plugin-unicorn`
- [[`34a50f5`](https://github.com/flex-development/log/commit/34a50f562dab1c4970bf3aa3bc7ef59e99edaef2)] add `github` commit scope
- [[`82293a8`](https://github.com/flex-development/log/commit/82293a863a97cf46bc566052a68641ca0aad9472)] re-add `scripts` commit scope
- [[`0a52651`](https://github.com/flex-development/log/commit/0a52651e58d72ce23deeb42d58f3d66c01ce6393)] update bug report issue template
- [[`abaabd1`](https://github.com/flex-development/log/commit/abaabd10648e9bc61cbe75f49aa6ea3ff76dc911)] use `cjs` extensions
- [[`e6c7aa2`](https://github.com/flex-development/log/commit/e6c7aa2567b06c28b6fbcfa363037320354c1445)] use typescript `commitlint` config
- [[`5a3c380`](https://github.com/flex-development/log/commit/5a3c380be18c3f5bde9a103dcc068e32e30ddc72)] **github:** reorganize labels
- [[`dedc655`](https://github.com/flex-development/log/commit/dedc655788eb84b0ea8fe6d8755e5e0dfebc1b29)] **release:** set package version to `3.0.0-dev.0`
- [[`ae4209e`](https://github.com/flex-development/log/commit/ae4209ed667a0a6db99f8ac36826555c27036b10)] **scripts:** add `check:upgrades` script
- [[`c39b762`](https://github.com/flex-development/log/commit/c39b762b349c85b16d759803eb577f63b612681e)] **scripts:** disable `postinstall` during git installs
- [[`9c10682`](https://github.com/flex-development/log/commit/9c10682235190e606495fa5d9cd386e279c78446)] **tools:** add `prerelease` option to `release` cli
- [[`b7841d8`](https://github.com/flex-development/log/commit/b7841d8578e0b092f28a152afaf083b8e0e73fc1)] **tools:** add `ReleaseOptions.path`
- [[`34e2a18`](https://github.com/flex-development/log/commit/34e2a18c9458b9d3b062e62dc2127fcf6e568315)] **tools:** add option aliases to `ReleaseOptions`
- [[`214afcc`](https://github.com/flex-development/log/commit/214afcc99b51f3cd06e57862e2996419636615e0)] **tools:** create tarballs from `build` script
- [[`c5522e6`](https://github.com/flex-development/log/commit/c5522e6fbbb5265365471e492aca00194dd3dcdc)] **tools:** move scripts to `tools` directory
- [[`ae8238c`](https://github.com/flex-development/log/commit/ae8238c6921e7da38895ef2155a5052db19532bd)] **tools:** rename package data helper
- [[`1930db5`](https://github.com/flex-development/log/commit/1930db5b851c400686c31fe95636ffcf26ecc8ad)] **tools:** update `build` and `release` cli options
- [[`c763f8e`](https://github.com/flex-development/log/commit/c763f8e13cd7ee1ece4e37911fec62fe5ea126e2)] **tools:** update `exec` return value
- [[`c4d189b`](https://github.com/flex-development/log/commit/c4d189b52c907db00efdcc871c9d8c56ff0c11ef)] **tools:** update release tag prefixing
- [[`6b3ab68`](https://github.com/flex-development/log/commit/6b3ab68609ca4a730c89a652a063e11c6978be83)] **tools:** use `yarn pack` in `postchangelog` script
- [[`0cd74d7`](https://github.com/flex-development/log/commit/0cd74d7e5177a951fe0ffeb4cd048f47caabfb5e)] **typescript:** cleanup tsconfigs before esm migration
- [[`e39878c`](https://github.com/flex-development/log/commit/e39878c9eb8f258b5ca9466a4f8dbae8b6d0aed6)] **workflows:** add ids to `automate-pr-reviews` steps
- [[`88ae311`](https://github.com/flex-development/log/commit/88ae311e11e74e242b0b5066141bcf7dc38a8b47)] **workflows:** fix node options cleanup in `publish-package` job
- [[`9188fcc`](https://github.com/flex-development/log/commit/9188fcc3b2af0b0e526506bf5bd293569a0abc95)] **workflows:** support new tag prefix in `continuous-deployment` workflow
- [[`0078377`](https://github.com/flex-development/log/commit/0078377d10c40563c430c3983ba806609774a400)] **workflows:** update environment variables and workflow syntax
- [[`57ad692`](https://github.com/flex-development/log/commit/57ad69236639cfd51fd590f53ca2355e8d599921)] **yarn:** update `.yarnrc.yml` env var names

## [log@2.0.0](https://github.com/flex-development/log/compare/log@1.0.1...log@2.0.0) (2021-09-15)

### :package: Build

- [[`51f11e6`](https://github.com/flex-development/log/commit/51f11e62678938b77aeaa83aaa2372e3c8bd81d0)] run `yarn dedupe --strategy highest`
- [[`785b39d`](https://github.com/flex-development/log/commit/785b39d5e78469eca2726358b6659c06d0bd0ab6)] run local integrity check
- [[`cdd6c61`](https://github.com/flex-development/log/commit/cdd6c614b6eec8a62232068b8a1805f82485ce93)] update build output
- [[`e4edd20`](https://github.com/flex-development/log/commit/e4edd208ca0aaf32dd41b5396b9cb8b6d4fd0341)] **deps-dev:** add `concurrently@6.2.1`
- [[`f0f96c5`](https://github.com/flex-development/log/commit/f0f96c569e59e77ed026dae574d93f0e2197663d)] **deps-dev:** add `is-ci@3.0.0`
- [[`8ae61c4`](https://github.com/flex-development/log/commit/8ae61c4422e4f65f627411e728b126cd11bb930f)] **deps-dev:** add `pinst@2.1.6`
- [[`ed6f7dd`](https://github.com/flex-development/log/commit/ed6f7dd233b98cb0d4c7899475ded0f5ee3abcc0)] **deps-dev:** drop `@vercel/ncc@0.29.2`
- [[`ac3b319`](https://github.com/flex-development/log/commit/ac3b3197d79e2ccb41cc3cb48ec4d5baaa51af5c)] **deps-dev:** upgrade `commitlint` deps to `v13.1.0`
- [[`3e14f52`](https://github.com/flex-development/log/commit/3e14f525fd6a94971ef2065b4bee13099865c559)] **deps-dev:** upgrade `eslint` deps
- [[`d39acb4`](https://github.com/flex-development/log/commit/d39acb4df247665fa72d4a470881736bca403dbd)] **deps-dev:** use `@flex-development/grease@1.1.0`
- [[`eb24c95`](https://github.com/flex-development/log/commit/eb24c952055ef892dccac11081e243e3a62bffb6)] **deps-dev:** use `@types/jest@27.0.1`
- [[`fba0633`](https://github.com/flex-development/log/commit/fba06331a2b7c6a30005e9bdb6673e759fbe612f)] **deps-dev:** use `@types/node@16.9.1`
- [[`78125e6`](https://github.com/flex-development/log/commit/78125e603b12d73b95e6a56a79159f40e80d7ded)] **deps-dev:** use `@types/rimraf@3.0.2`
- [[`2b1cc6a`](https://github.com/flex-development/log/commit/2b1cc6a327ec58e40180f5ea1dc920e9b6506066)] **deps-dev:** use `jest@27.2.0`
- [[`1787132`](https://github.com/flex-development/log/commit/1787132236379470bff038f8dab760db566ff0f5)] **deps-dev:** use `lint-staged@11.1.2`
- [[`5f8c0f7`](https://github.com/flex-development/log/commit/5f8c0f703a574386d588b71979cbe8754eea917c)] **deps-dev:** use `npm@7.23.0`
- [[`2758396`](https://github.com/flex-development/log/commit/2758396109c308432bae280b191a0b2a8da897c5)] **deps-dev:** use `prettier-plugin-sh@0.7.1`
- [[`e837383`](https://github.com/flex-development/log/commit/e837383d5ae9389530f334244fd53ac4cf028867)] **deps-dev:** use `prettier@2.4.0`
- [[`5a24e79`](https://github.com/flex-development/log/commit/5a24e797e9d735ba4f455c49e83dc148bd20f854)] **deps-dev:** use `ts-jest@27.0.5`
- [[`6ad403a`](https://github.com/flex-development/log/commit/6ad403ad9f58b3423112baddd95ae5e00789cbd9)] **deps-dev:** use `ts-node@10.2.1`
- [[`e5c9e10`](https://github.com/flex-development/log/commit/e5c9e10f329d0621a6b39200c1545dbbe9fedee3)] **deps-dev:** use `tsconfig-paths@3.11.0`
- [[`6728e5c`](https://github.com/flex-development/log/commit/6728e5cb2baca44b9f37c639fc2acfc2ae178889)] **deps-dev:** use `typescript@4.4.2`
- [[`5b4040d`](https://github.com/flex-development/log/commit/5b4040d222750090fef4c2c01cac502232f63ad1)] **deps:** use `@flex-development/tutils@3.1.7`
- [[`d12281a`](https://github.com/flex-development/log/commit/d12281a3727956bc76087556ac39cef577d29bc2)] **scripts:** disable `postinstall` before tarball is packed

### :robot: Continuous Integration

- [[`948b852`](https://github.com/flex-development/log/commit/948b8521f3e33b374398a5f9fb1a14df15064dcf)] **scripts:** don't run `postinstall` script in ci environments
- [[`f3b1ac2`](https://github.com/flex-development/log/commit/f3b1ac2a2e8961d08634974ad108d86b2b055061)] **workflows:** add `integrity`
- [[`b6d4c97`](https://github.com/flex-development/log/commit/b6d4c97871660dbed65092a0c9c1f463021c5e0d)] **workflows:** cache dependencies during `deployment-info` job
- [[`a7237c5`](https://github.com/flex-development/log/commit/a7237c531b4bfc03f8611f7de9eb87453d3cdb6c)] **workflows:** drop `@flex-development/dtag` usage
- [[`0ce77dc`](https://github.com/flex-development/log/commit/0ce77dc4e2523d5e7f6fb52c585a63ac4aa69fcd)] **workflows:** fix distribution tag logic

### :house_with_garden: Housekeeping

- [[`21905de`](https://github.com/flex-development/log/commit/21905def9c8569ad255759ee677fcbb6bd9a7ca2)] add `deps-peer` and `yarn` commit scopes
- [[`4bcda50`](https://github.com/flex-development/log/commit/4bcda50edbd75f013a6114edd7b9a6b5d6ff947e)] run `yarn set version berry`
- [[`f875714`](https://github.com/flex-development/log/commit/f87571445c8e1d5b3373b17fd2020641fec916d6)] update `lint-staged` config
- [[`d8e08d5`](https://github.com/flex-development/log/commit/d8e08d509f10e32c129c6abf7bba876853b8883b)] update environment variables
- [[`8ed8ce6`](https://github.com/flex-development/log/commit/8ed8ce6a8fc510d3e8171812a26f9e2fc79dcb49)] **scripts:** add `check:dedupe`
- [[`54304ea`](https://github.com/flex-development/log/commit/54304eaa1e9284052a4296a6de79e9d2555641f0)] **scripts:** add `check:install`
- [[`8f2b31e`](https://github.com/flex-development/log/commit/8f2b31e6125494a9d8bec60f4b7f050315880a2d)] **scripts:** add `clean:modules` and `clean:yarn`
- [[`aba5881`](https://github.com/flex-development/log/commit/aba588102e332ca29dcd1383684b74a32992dda3)] **yarn:** add `@yarnpkg/plugin-interactive-tools`

### :mechanical_arm: Refactors

- [[`2de2caf`](https://github.com/flex-development/log/commit/2de2cafa4605e8fb24d6aeeac0424748abdeffb5)] allow lowercase log levels

## [log@1.0.1](https://github.com/flex-development/log/compare/log@1.0.0...log@1.0.1) (2021-08-23)

### :robot: Continuous Integration

- [[`a1319b6`](https://github.com/flex-development/log/commit/a1319b6f5661f3cb8c5e4e84d9b1cc1294d61ad1)] **workflows:** fix `cannot read property 'tag' of undefined`
- [[`51f2eee`](https://github.com/flex-development/log/commit/51f2eee270449d7a97a6db3f2b0d9ac1a96093d7)] **workflows:** run `publish-release` job after `update-production-branch` job
- [[`cfe4abc`](https://github.com/flex-development/log/commit/cfe4abc7a20df50d133ae213f732c41c18ac73e9)] **workflows:** use tested `continuous-deployment` workflow

### :bug: Fixes

- [[`05752cb`](https://github.com/flex-development/log/commit/05752cbb58fb93cbbe4e1de2ca8ee1f04e3327d9)] missing distribution files
- [[`42e90c6`](https://github.com/flex-development/log/commit/42e90c6c33974b86dde87688f25e08b356e2375b)] **scripts:** `build`

### :house_with_garden: Housekeeping

- [[`a91128c`](https://github.com/flex-development/log/commit/a91128cf10f4c14be82a1d724acb51ea7aa9a1ab)] revert "merge: release @flex-development/log@1.0.0"
- [[`0695295`](https://github.com/flex-development/log/commit/06952956657848a57347037837d9a685e7dde2d7)] **workflows:** add `workflow_dispatch` trigger to `continuous-deployment` workflow
- [[`eb1c808`](https://github.com/flex-development/log/commit/eb1c8083eb8e4520b66b08fcab662a4265edc939)] **workflows:** add step names in `continuous-deployment` workflow
- [[`e03bc2b`](https://github.com/flex-development/log/commit/e03bc2bf2bcb7d226c1b3cebb961c952ff68abfc)] **workflows:** debug `continuous-deployment` workflow
- [[`6968bd8`](https://github.com/flex-development/log/commit/6968bd86225bd02e8139e81b219df46bec2e05e9)] **workflows:** debug `publish-release` job in `continuous-deployment` workflow
- [[`8c6ea60`](https://github.com/flex-development/log/commit/8c6ea60b3db73ca606762c9868046951d1719b8d)] **workflows:** debug `publish-release` step in `continuous-deployment` workflow
- [[`fa790a1`](https://github.com/flex-development/log/commit/fa790a1f0aee43350c315eca02878b7d41e10cb2)] **workflows:** debug `publish-release` step in `continuous-deployment` workflow
- [[`3814346`](https://github.com/flex-development/log/commit/38143462acb818f4abdb2f8888e77ec4e727f771)] **workflows:** fix `get-deployment-details` job in `continuous-deployment` workflow
- [[`0743e76`](https://github.com/flex-development/log/commit/0743e76a3c553ecd464f6632d3da900e8fb1067c)] **workflows:** fix `publish-release` job in `continuous-deployment` workflow

## log@1.0.0 (2021-08-22)

### :robot: Continuous Integration

- [[`cc09666`](https://github.com/flex-development/log/commit/cc09666ac669f6f4033206d5c8db4a34a7723b7d)] fix `flautoreview` workflow
- [[`8bc2264`](https://github.com/flex-development/log/commit/8bc2264a5d53323e7afc4a1ea54cca15724006e0)] implement cross publishing in `continuous-deployment` workflow
- [[`286a399`](https://github.com/flex-development/log/commit/286a399e51f5b32adb2dea3be604f3b7528c5ba8)] **workflows:** update job secrets and environment variables
- [[`8fff171`](https://github.com/flex-development/log/commit/8fff1710ea4541fd600d342139ec58e0729a49bb)] **workflows:** update workflow names

### :house_with_garden: Housekeeping

- [[`c1f68d4`](https://github.com/flex-development/log/commit/c1f68d421d5ceb29171eed19d4272a98a2920472)] [P012-2] setup repo
- [[`dca1a84`](https://github.com/flex-development/log/commit/dca1a841b524fb56568d7454886d0c656b970a5f)] change project name
- [[`020dee5`](https://github.com/flex-development/log/commit/020dee5fdcd6af4f371fc8dd4a9bdb73a5aaff65)] **release:** update workflow
- [[`5dcee7f`](https://github.com/flex-development/log/commit/5dcee7fd74df2b20241b088d98040fa1f67f95cf)] **scripts:** update `release` script

