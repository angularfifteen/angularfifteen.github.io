Thu Jul 20 01:56:38 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.1Gi       2.7Gi       870Mi        10Gi        11Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
1.7G	.
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
    

Angular CLI: 16.1.4
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.5
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.4
@angular-devkit/build-angular   16.1.4
@angular-devkit/core            16.1.4
@angular-devkit/schematics      16.1.4
@angular/cli                    16.1.4
@schematics/angular             16.1.4
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001517
Installed version:  1.0.30001516
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.5/angular-webpack/eecd8fd6aa17568a57cb11ff4e98a114b34474a2.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.5/angular-webpack/eecd8fd6aa17568a57cb11ff4e98a114b34474a2/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3736.346611 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 601 KiB {179} [emitted] (name: main)
asset styles.css 265 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 602 KiB = runtime.js 906 bytes main.js 601 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 266 KiB = runtime.js 906 bytes styles.css 265 KiB
chunk {179} (runtime: runtime) main.js (main) 4.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1148 ms (resolving: 221 ms, restoring: 0 ms, integration: 0 ms, building: 927 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 304 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 304 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1511 ms (resolving: 72 ms, restoring: 1 ms, integration: 0 ms, building: 1438 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12141 ms (resolving: 180 ms, restoring: 0 ms, integration: 0 ms, building: 11961 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.476124 ms
<t> runtime requirements.chunks: 0.434057 ms
<t> runtime requirements.entries: 1.492413 ms
<t> runtime requirements.modules: 0.030343 ms
<t> runtime requirements.chunks: 0.018014 ms
<t> runtime requirements.entries: 0.24121 ms
<t> finish module profiles: 11.905053 ms
<t> compute affected modules: 0.004957 ms
<t> finish modules: 25.045436 ms
<t> report dependency errors and warnings: 15.78982 ms
<t> optimize dependencies: 28.2065 ms
<t> create chunks: 11.624784 ms
<t> compute affected modules with chunk graph: 0.004773 ms
<t> optimize: 51.020506 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.72657 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 841.715749 ms
<t> runtime requirements.modules: 0.114824 ms
<t> runtime requirements.chunks: 0.063384 ms
<t> runtime requirements.entries: 0.510034 ms
<t> runtime requirements: 0.895476 ms
<t> hashing: initialize hash: 0.008157 ms
<t> hashing: hash warnings: 0.003773 ms
<t> hashing: sort chunks: 0.059432 ms
<t> hashing: hash runtime modules: 1.168091 ms
<t> hashing: hash chunks: 1.41023 ms
<t> hashing: hash digest: 0.022135 ms
<t> hashing: process full hash modules: 0.160894 ms
<t> hashing: 3.048595 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.073915 ms
<t> module assets: 0.181068 ms
<t> create chunk assets: 3.850198 ms
<t> process assets: 15316.094301 ms

LOG from webpack.Compiler
<t> make hook: 12181.784718 ms
<t> finish make hook: 0.130674 ms
<t> finish compilation: 52.790819 ms
<t> seal compilation: 16275.598707 ms
<t> afterCompile hook: 0.161487 ms
<t> emitAssets: 3.754386 ms
<t> emitRecords: 0.058199 ms
<t> done hook: 348.854889 ms
<t> beginIdle: 0.786275 ms

LOG from webpack.Compilation.ModuleProfile
     | 36 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 45 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 43 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 122 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 113 ms (parallelism 4.4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 98 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 98 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 33 ms (parallelism 31.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 88 ms (parallelism 45.4) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1078 ms resolve to new modules
     | 88 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    109 ms resolve to existing modules
<i>  |  | 261 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 261 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 61 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 61 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 338 ms (parallelism 35.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 338 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 164 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 119 ms (parallelism 12.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 132 ms (parallelism 12.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 118 ms (parallelism 12.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 123 ms (parallelism 13.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 53 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 54 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 53 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 54 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 56 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 55 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 54 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 55 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 55 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 55 ms (parallelism 50.6) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 57 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 55 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 56 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 58 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 57 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 57 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 57 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 58 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 58 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 58 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 59 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 58 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 59 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 58 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 60 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 59 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 60 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 60 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 59 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 87 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 87 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 82 ms (parallelism 42.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 81 ms (parallelism 43.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 82 ms (parallelism 43.2) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 82 ms (parallelism 41.6) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3057 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 155 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 41 ms (parallelism 34.1) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 42 ms (parallelism 34) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2006 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 318 ms (parallelism 36.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 318 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 248 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 95 ms (parallelism 11.1) build modules > ./src/app/app.component.ts
     |  | 112 ms (parallelism 12.3) build modules > ./src/app/material/material.module.ts
     |  | 81 ms (parallelism 41) build modules > ./src/app/quiz.service.ts
     |  | 81 ms (parallelism 41.3) build modules > ./src/app/menu/menu.component.ts
     |  | 80 ms (parallelism 41.3) build modules > ./src/app/news.service.ts
<i>  | 883 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6926 ms build modules
+ 109 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (879 real resolves with 0 cached but invalid, 1951 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.333695 ms
<t> figure out provided exports: 14.885281 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.098537 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.831013 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.993468 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.488673 ms
<t> trace exports usage in graph: 16.277788 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.865545 ms
<t> visitModules: visiting: 5.755608 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.850016 ms
<t> connectChunkGroups: 0.003813 ms
<t> cleanup: 0.003344 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034165 ms
<t> modules: 2.985678 ms
<t> queue: 0.005577 ms
<t> maxSize: 0.030783 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.688859 ms
<t> sort relevant modules: 0.171264 ms
<t> find modules to concatenate: 18.173991 ms
<t> sort concat configurations: 0.065297 ms
<t> create concatenated modules: 11.889973 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 307.291559 ms
<t> optimize asset: polyfills.js: 817.593356 ms
<t> optimize asset: main.js: 13775.126075 ms
<t> optimize js assets: 13920.151165 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 25.577909 ms
<t> optimize css assets: 41.350977 ms

LOG from webpack.FileSystemInfo
    1195 new snapshots created
    0% root snapshot uncached (0 / 1951)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1040 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5104/6253) entries shared via 12 shared snapshots (805 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3831/4436) entries shared via 246 shared snapshots (750 times referenced)
    Managed items info in cache: 158 items
    Managed items snapshot optimization: 28% (574/2042) entries shared via 32 shared snapshots (102 times referenced)
    Managed files snapshot optimization: 77% (4913/6387) entries shared via 256 shared snapshots (977 times referenced)
    Managed missing snapshot optimization: 83% (5424/6546) entries shared via 323 shared snapshots (901 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
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
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:144:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/sass/sass-service.js:136:36)
    at Worker.emit (node:events:514:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:741:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-07-20 13:57:55: webpack 5.86.0 compiled in 32212 ms (3628bd65a25d8c3c)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 931.650015 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 51.522453 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.582278 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.121085 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.338791 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.981937 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022|request=|rxjs': 1.058633 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.061034 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.395833 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.155551 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.118557 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.297775 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.295924 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.047058 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.034881 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.545171 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.533839 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.231376 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.734378 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.161677 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.023371 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchScan.js': 3.269698 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 18.298093 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.863591 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 357.004335 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 601.03 kB |               140.01 kB
styles.css          | styles        | 265.17 kB |                17.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.08 kB |               168.61 kB

Build at: 2023-07-20T17:57:58.121Z - Hash: 3628bd65a25d8c3c - Time: 35048ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.08 kB with a total of 900.08 kB.


Done in 37.14s.
```
Thu Jul 20 01:58:26 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.422
info New version: 0.0.423
Done in 0.13s.
