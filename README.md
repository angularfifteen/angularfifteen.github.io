Wed Nov 23 12:58:50 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.1Gi       1.6Gi       602Mi       6.6Gi       7.3Gi
Swap:          8.0Gi       4.7Gi       3.3Gi
System Storage
1.5G	.
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
    

Angular CLI: 15.0.0
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.1
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.0
@angular-devkit/build-angular   15.0.0
@angular-devkit/core            15.0.0
@angular-devkit/schematics      15.0.0
@angular/cdk                    15.0.0
@angular/cli                    15.0.0
@angular/material               15.0.0
@schematics/angular             15.0.0
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.73s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
asset main.js 585 KiB {179} [emitted] (name: main)
asset styles.css 286 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 586 KiB = runtime.js 906 bytes main.js 585 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 286 KiB = runtime.js 906 bytes styles.css 286 KiB
chunk {179} (runtime: runtime) main.js (main) 5.55 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 857 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 207 modules [335] 4.72 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1437 ms (resolving: 248 ms, restoring: 0 ms, integration: 0 ms, building: 1189 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 320 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 320 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2081 ms (resolving: 52 ms, restoring: 0 ms, integration: 0 ms, building: 2029 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    16845 ms (resolving: 157 ms, restoring: 1 ms, integration: 0 ms, building: 16687 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.840671 ms
<t> runtime requirements.chunks: 0.702198 ms
<t> runtime requirements.entries: 2.655354 ms
<t> runtime requirements.modules: 0.034804 ms
<t> runtime requirements.chunks: 0.022187 ms
<t> runtime requirements.entries: 0.240609 ms
<t> finish module profiles: 15.920872 ms
<t> compute affected modules: 0.004563 ms
<t> finish modules: 34.110809 ms
<t> report dependency errors and warnings: 18.017354 ms
<t> optimize dependencies: 44.261339 ms
<t> create chunks: 16.251257 ms
<t> compute affected modules with chunk graph: 0.005996 ms
<t> optimize: 64.179901 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 26.850501 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1367.360565 ms
<t> runtime requirements.modules: 0.164446 ms
<t> runtime requirements.chunks: 0.118291 ms
<t> runtime requirements.entries: 0.645 ms
<t> runtime requirements: 1.428103 ms
<t> hashing: initialize hash: 0.009758 ms
<t> hashing: hash warnings: 0.004356 ms
<t> hashing: sort chunks: 0.121489 ms
<t> hashing: hash runtime modules: 1.300362 ms
<t> hashing: hash chunks: 1.737283 ms
<t> hashing: hash digest: 0.055335 ms
<t> hashing: process full hash modules: 0.218362 ms
<t> hashing: 4.182495 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.081217 ms
<t> module assets: 0.338964 ms
<t> create chunk assets: 6.027561 ms
<t> process assets: 12204.509101 ms

LOG from webpack.Compiler
<t> make hook: 16904.508476 ms
<t> finish make hook: 0.179354 ms
<t> finish compilation: 68.105844 ms
<t> seal compilation: 13742.88672 ms
<t> afterCompile hook: 0.24977 ms
<t> emitAssets: 5.620883 ms
<t> emitRecords: 0.118042 ms
<t> done hook: 563.057616 ms
<t> beginIdle: 0.885755 ms

LOG from webpack.Compilation.ModuleProfile
     | 31 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 50 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 48 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 125 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 196 ms (parallelism 4.5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 95 ms (parallelism 14) resolve to new modules > ./src/app/material/material.module.ts
     | 108 ms (parallelism 13.9) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 108 ms (parallelism 13.9) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 36 ms (parallelism 11.6) resolve to new modules > ./src/app/loading.service.ts
     | 37 ms (parallelism 11.6) resolve to new modules > ./src/app/loading/loading.component.ts
     | 36 ms (parallelism 32.1) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 119 ms (parallelism 21.9) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     | 35 ms (parallelism 38.9) resolve to new modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     | 34 ms (parallelism 52.3) resolve to new modules > ./node_modules/@angular/cdk/fesm2020/overlay.mjs
     | 34 ms (parallelism 52.3) resolve to new modules > ./node_modules/@angular/cdk/fesm2020/scrolling.mjs
    1913 ms resolve to new modules
     | 45 ms (parallelism 5) integrate modules > ./src/main.ts
    56 ms integrate modules
<i>  |  | 364 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 364 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 422 ms (parallelism 39.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 422 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 77 ms (parallelism 5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 77 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 418 ms (parallelism 39.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 418 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 202 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 113 ms (parallelism 13.8) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 142 ms (parallelism 13.3) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 141 ms (parallelism 13.4) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 136 ms (parallelism 14.4) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 72 ms (parallelism 45.2) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 73 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-checkbox.mjs
     |  | 73 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-button.mjs
     |  | 73 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-input.mjs
     |  | 72 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-autocomplete.mjs
     |  | 76 ms (parallelism 45.1) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 73 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-radio.mjs
     |  | 73 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-form-field.mjs
     |  | 73 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-select.mjs
     |  | 74 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-slider.mjs
     |  | 73 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-menu.mjs
     |  | 74 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-slide-toggle.mjs
     |  | 74 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 74 ms (parallelism 45.2) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 76 ms (parallelism 45) build modules > ./node_modules/@angular/material/fesm2020/legacy-list.mjs
     |  | 76 ms (parallelism 45.1) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 76 ms (parallelism 45.1) build modules > ./node_modules/@angular/material/fesm2020/legacy-card.mjs
     |  | 77 ms (parallelism 45) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 77 ms (parallelism 44.9) build modules > ./node_modules/@angular/material/fesm2020/legacy-tabs.mjs
     |  | 78 ms (parallelism 44.9) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 77 ms (parallelism 44.9) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 78 ms (parallelism 44.9) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 78 ms (parallelism 44.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-chips.mjs
     |  | 78 ms (parallelism 44.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-progress-spinner.mjs
     |  | 78 ms (parallelism 44.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-progress-bar.mjs
     |  | 79 ms (parallelism 44.7) build modules > ./node_modules/@angular/material/fesm2020/legacy-dialog.mjs
     |  | 78 ms (parallelism 44.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-tooltip.mjs
     |  | 79 ms (parallelism 44.7) build modules > ./node_modules/@angular/material/fesm2020/legacy-snack-bar.mjs
     |  | 79 ms (parallelism 44.7) build modules > ./node_modules/@angular/material/fesm2020/legacy-table.mjs
     |  | 79 ms (parallelism 44.7) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 108 ms (parallelism 40.7) build modules > ./node_modules/@angular/material/fesm2020/legacy-paginator.mjs
     |  | 108 ms (parallelism 41.4) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 108 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-core.mjs
     |  | 107 ms (parallelism 43.3) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 105 ms (parallelism 44.3) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 104 ms (parallelism 47.7) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 105 ms (parallelism 44.4) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
     |  | 98 ms (parallelism 47.9) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
<i>  | 4682 ms build modules > 81 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 200 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 108 ms (parallelism 40.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 108 ms (parallelism 40.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2977 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 360 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 140 ms (parallelism 13.4) build modules > ./src/app/app-routing.module.ts
     |  | 104 ms (parallelism 13.9) build modules > ./src/app/app.component.ts
     |  | 104 ms (parallelism 13.9) build modules > ./src/app/prompt-update.service.ts
     |  | 104 ms (parallelism 13.9) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 42 ms (parallelism 13.7) build modules > ./src/app/material/material.module.ts
     |  | 98 ms (parallelism 44.1) build modules > ./src/app/news.service.ts
     |  | 98 ms (parallelism 44.1) build modules > ./src/app/quiz.service.ts
     |  | 98 ms (parallelism 47.7) build modules > ./src/app/menu/menu.component.ts
<i>  | 1254 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 10199 ms build modules
     | 45 ms (parallelism 5) restore modules > ./src/main.ts
    56 ms restore modules
+ 119 hidden lines

LOG from webpack.ResolverCachePlugin
    29% really resolved (929 real resolves with 0 cached but invalid, 2290 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.834482 ms
<t> figure out provided exports: 19.851797 ms
    96% of exports of modules have been determined (15 no declared exports, 348 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 24 additional calculations due to dependencies)
<t> store provided exports into cache: 2.941593 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.266776 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.787025 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.562762 ms
<t> trace exports usage in graph: 28.275394 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 10.403373 ms
<t> visitModules: visiting: 12.70428 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 12.910175 ms
<t> connectChunkGroups: 0.006477 ms
<t> cleanup: 0.007741 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048652 ms
<t> modules: 4.43092 ms
<t> queue: 0.006409 ms
<t> maxSize: 0.04091 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.265322 ms
<t> sort relevant modules: 0.271703 ms
<t> find modules to concatenate: 22.534399 ms
<t> sort concat configurations: 0.052586 ms
<t> create concatenated modules: 14.431614 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 371.487612 ms
<t> optimize asset: polyfills.js: 1002.095977 ms
<t> optimize asset: main.js: 10388.577032 ms
<t> optimize js assets: 10579.809642 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 53.350067 ms
<t> optimize css assets: 66.430577 ms

LOG from webpack.FileSystemInfo
    1280 new snapshots created
    0% root snapshot uncached (0 / 2290)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5391/6643) entries shared via 12 shared snapshots (851 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4050/4624) entries shared via 257 shared snapshots (792 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 33% (744/2286) entries shared via 41 shared snapshots (132 times referenced)
    Managed files snapshot optimization: 75% (4833/6471) entries shared via 268 shared snapshots (1009 times referenced)
    Managed missing snapshot optimization: 82% (5793/7057) entries shared via 341 shared snapshots (921 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet
SassWarning: The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:189:37)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:138:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:233:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:731:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:598:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:189:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:138:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:233:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:731:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2022-11-23 13:00:08: webpack 5.75.0 compiled in 38223 ms (3ac7746a1b32502b)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 584.64 kB |               136.67 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 904.16 kB |               165.95 kB

Build at: 2022-11-23T18:00:11.764Z - Hash: 3ac7746a1b32502b - Time: 41123ms
Done in 43.76s.
```
Wed Nov 23 01:00:50 PM EST 2022
yarn version v1.22.19
info Current version: 0.0.29
info New version: 0.0.30
Done in 0.13s.
