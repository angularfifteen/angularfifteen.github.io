Sun Aug 13 09:26:35 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.8Gi       4.4Gi       556Mi       7.1Gi        10Gi
Swap:          8.0Gi        59Mi       7.9Gi
System Storage
1.3G	.
```
```bash
yarn run v1.22.19
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@schematics/angular             16.2.0
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.43s.
```
Latest version:     1.0.30001520
Installed version:  1.0.30001519
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001520
Installed version:  1.0.30001520
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.0/angular-webpack/66d4d4ead6a8e52ad385f592e05b452ae7eb4036.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.0/angular-webpack/66d4d4ead6a8e52ad385f592e05b452ae7eb4036/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3560.557935 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 603 KiB {179} [emitted] (name: main)
asset styles.css 243 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 603 KiB = runtime.js 906 bytes main.js 603 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 244 KiB = runtime.js 906 bytes styles.css 243 KiB
chunk {179} (runtime: runtime) main.js (main) 4.87 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.83 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1312 ms (resolving: 76 ms, restoring: 1 ms, integration: 0 ms, building: 1235 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1506 ms (resolving: 65 ms, restoring: 1 ms, integration: 0 ms, building: 1440 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12049 ms (resolving: 65 ms, restoring: 0 ms, integration: 0 ms, building: 11984 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.432823 ms
<t> runtime requirements.chunks: 0.399336 ms
<t> runtime requirements.entries: 1.390595 ms
<t> runtime requirements.modules: 0.027279 ms
<t> runtime requirements.chunks: 0.016727 ms
<t> runtime requirements.entries: 0.21769 ms
<t> finish module profiles: 11.103329 ms
<t> compute affected modules: 0.00363 ms
<t> finish modules: 23.311062 ms
<t> report dependency errors and warnings: 11.011043 ms
<t> optimize dependencies: 32.174813 ms
<t> create chunks: 7.153136 ms
<t> compute affected modules with chunk graph: 0.004704 ms
<t> optimize: 45.430071 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.396104 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 923.680031 ms
<t> runtime requirements.modules: 0.140885 ms
<t> runtime requirements.chunks: 0.12061 ms
<t> runtime requirements.entries: 0.535077 ms
<t> runtime requirements: 1.205709 ms
<t> hashing: initialize hash: 0.009945 ms
<t> hashing: hash warnings: 0.004048 ms
<t> hashing: sort chunks: 0.101433 ms
<t> hashing: hash runtime modules: 1.066347 ms
<t> hashing: hash chunks: 1.405811 ms
<t> hashing: hash digest: 0.045182 ms
<t> hashing: process full hash modules: 0.148338 ms
<t> hashing: 3.363731 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064485 ms
<t> module assets: 0.253843 ms
<t> create chunk assets: 4.667155 ms
<t> process assets: 6591.111232 ms

LOG from webpack.Compiler
<t> make hook: 12195.018436 ms
<t> finish make hook: 0.115087 ms
<t> finish compilation: 45.502935 ms
<t> seal compilation: 7628.732076 ms
<t> afterCompile hook: 0.164355 ms
<t> emitAssets: 4.062662 ms
<t> emitRecords: 0.062078 ms
<t> done hook: 341.244726 ms
<t> beginIdle: 0.806336 ms

LOG from webpack.Compilation.ModuleProfile
     | 82 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 30 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 103 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 103 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 60 ms (parallelism 22) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 99 ms (parallelism 40.1) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    973 ms resolve to new modules
     | 92 ms (parallelism 11) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    114 ms resolve to existing modules
<i>  |  | 253 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 253 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 357 ms (parallelism 33.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 357 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 205 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 93 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 134 ms (parallelism 12.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 156 ms (parallelism 12.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 133 ms (parallelism 12) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 147 ms (parallelism 13.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 51 ms (parallelism 22.7) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 51 ms (parallelism 23.5) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 57 ms (parallelism 44.8) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 57 ms (parallelism 44.9) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 56 ms (parallelism 44.9) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 58 ms (parallelism 44.7) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 59 ms (parallelism 44.6) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 57 ms (parallelism 44.8) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 57 ms (parallelism 44.8) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 57 ms (parallelism 44.8) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 60 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 59 ms (parallelism 44.6) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 61 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 58 ms (parallelism 44.7) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 60 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 61 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 60 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 60 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 60 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 62 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 60 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 60 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 63 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 62 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 61 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 61 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 62 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 62 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 64 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 63 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 73 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 73 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 80 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 88 ms (parallelism 39.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 88 ms (parallelism 40.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 89 ms (parallelism 38.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 87 ms (parallelism 40.4) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3416 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 202 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 86 ms (parallelism 40.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 87 ms (parallelism 40.6) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2083 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 350 ms (parallelism 33.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 350 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 33 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 33 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 310 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 102 ms (parallelism 11.2) build modules > ./src/app/app.component.ts
     |  | 122 ms (parallelism 11.9) build modules > ./src/app/material/material.module.ts
     |  | 37 ms (parallelism 24.7) build modules > ./src/app/home/home.component.ts
     |  | 37 ms (parallelism 24.7) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 37 ms (parallelism 24.7) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 37 ms (parallelism 24.7) build modules > ./src/app/playground/playground.component.ts
     |  | 37 ms (parallelism 24.7) build modules > ./src/app/news/news.component.ts
     |  | 37 ms (parallelism 24.7) build modules > ./src/app/quiz/quiz.component.ts
     |  | 37 ms (parallelism 24.7) build modules > ./src/app/loading/loading.component.ts
     |  | 89 ms (parallelism 37.4) build modules > ./src/app/news.service.ts
     |  | 89 ms (parallelism 37.4) build modules > ./src/app/quiz.service.ts
     |  | 87 ms (parallelism 40.2) build modules > ./src/app/menu/menu.component.ts
<i>  | 1114 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7606 ms build modules
+ 99 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1917 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.426911 ms
<t> figure out provided exports: 10.84586 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.926751 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 62.476009 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.485493 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.493947 ms
<t> trace exports usage in graph: 20.780297 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.594716 ms
<t> visitModules: visiting: 5.509948 ms
    443 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.59587 ms
<t> connectChunkGroups: 0.004301 ms
<t> cleanup: 0.003019 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.042633 ms
<t> modules: 2.923871 ms
<t> queue: 0.006356 ms
<t> maxSize: 0.040291 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.986012 ms
<t> sort relevant modules: 0.178158 ms
<t> find modules to concatenate: 14.395816 ms
<t> sort concat configurations: 0.04234 ms
<t> create concatenated modules: 10.675985 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 260.99785 ms
<t> optimize asset: polyfills.js: 648.096008 ms
<t> optimize asset: main.js: 5278.939649 ms
<t> optimize js assets: 5419.631926 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 20.353385 ms
<t> optimize css assets: 43.240482 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1917)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3523/4116) entries shared via 223 shared snapshots (694 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 28% (544/1973) entries shared via 29 shared snapshots (92 times referenced)
    Managed files snapshot optimization: 76% (4632/6068) entries shared via 244 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 83% (5158/6247) entries shared via 313 shared snapshots (881 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:604:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:143:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/sass/sass-service.js:136:36)
    at Worker.emit (node:events:514:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:741:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-08-13 21:27:28: webpack 5.88.2 compiled in 23390 ms (e83cb61a46cbd130)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1282.638819 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 52.854424 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.094958 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.02173 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.820502 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.425577 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|/home/kushal/src/angular/angularfifteen/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js': 1.08651 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.153747 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.372332 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.136438 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 4.666046 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.188574 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.511224 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.383456 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.391957 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.242985 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.613933 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 2.399663 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.165354 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.805846 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.29307 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.379681 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 7.45612 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/throttle.js': 3.787446 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.468499 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.297582 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 393.122058 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 602.58 kB |               140.20 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 879.40 kB |               167.59 kB

Build at: 2023-08-14T01:27:31.397Z - Hash: e83cb61a46cbd130 - Time: 26453ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 379.40 kB with a total of 879.40 kB.


Done in 28.32s.
```
