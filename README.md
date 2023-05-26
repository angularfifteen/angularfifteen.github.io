Fri May 26 06:20:58 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.9Gi       3.3Gi       770Mi       8.1Gi        10Gi
Swap:          8.0Gi       9.0Mi       8.0Gi
System Storage
2.1G	.
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
    

Angular CLI: 16.0.2
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.3
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.2
@angular-devkit/build-angular   16.0.2
@angular-devkit/core            16.0.2
@angular-devkit/schematics      16.0.2
@angular/cdk                    16.0.1
@angular/cli                    16.0.2
@angular/material               16.0.1
@schematics/angular             16.0.2
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001489
Installed version:  1.0.30001489
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001489
Installed version:  1.0.30001489
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.0.3/angular-webpack/7a276e16d62b0f7424a91c8d44f58aac006e135e.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.0.3/angular-webpack/7a276e16d62b0f7424a91c8d44f58aac006e135e/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3541.962522 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 271 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 271 KiB = runtime.js 906 bytes styles.css 271 KiB
chunk {179} (runtime: runtime) main.js (main) 4.76 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [564] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [510] 4.72 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    2029 ms (resolving: 70 ms, restoring: 1 ms, integration: 0 ms, building: 1958 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 317 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 317 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2048 ms (resolving: 71 ms, restoring: 1 ms, integration: 0 ms, building: 1976 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12735 ms (resolving: 71 ms, restoring: 1 ms, integration: 0 ms, building: 12663 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.396542 ms
<t> runtime requirements.chunks: 0.388182 ms
<t> runtime requirements.entries: 1.353145 ms
<t> runtime requirements.modules: 0.027295 ms
<t> runtime requirements.chunks: 0.018035 ms
<t> runtime requirements.entries: 0.160034 ms
<t> finish module profiles: 10.483652 ms
<t> compute affected modules: 0.00284 ms
<t> finish modules: 19.723534 ms
<t> report dependency errors and warnings: 11.953436 ms
<t> optimize dependencies: 33.40583 ms
<t> create chunks: 10.099575 ms
<t> compute affected modules with chunk graph: 0.003893 ms
<t> optimize: 52.388373 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.445031 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 743.256326 ms
<t> runtime requirements.modules: 0.133994 ms
<t> runtime requirements.chunks: 0.063552 ms
<t> runtime requirements.entries: 0.466218 ms
<t> runtime requirements: 0.861801 ms
<t> hashing: initialize hash: 0.013808 ms
<t> hashing: hash warnings: 0.003867 ms
<t> hashing: sort chunks: 0.050993 ms
<t> hashing: hash runtime modules: 1.072023 ms
<t> hashing: hash chunks: 1.303092 ms
<t> hashing: hash digest: 0.019558 ms
<t> hashing: process full hash modules: 0.150379 ms
<t> hashing: 2.857238 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.074501 ms
<t> module assets: 0.165921 ms
<t> create chunk assets: 3.592137 ms
<t> process assets: 13296.043571 ms

LOG from webpack.Compiler
<t> make hook: 12977.726451 ms
<t> finish make hook: 0.122003 ms
<t> finish compilation: 42.207869 ms
<t> seal compilation: 14162.133612 ms
<t> afterCompile hook: 0.266298 ms
<t> emitAssets: 64.26445 ms
<t> emitRecords: 0.161437 ms
<t> done hook: 379.918146 ms
<t> beginIdle: 0.744882 ms

LOG from webpack.Compilation.ModuleProfile
     | 91 ms (parallelism 3.7) resolve to new modules > ./src/main.ts
     | 119 ms (parallelism 4.3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 68 ms (parallelism 16.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 68 ms (parallelism 16) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 52 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 52 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 52 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 52 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 52 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 52 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 73 ms (parallelism 25.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    1148 ms resolve to new modules
     | 52 ms (parallelism 17) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    68 ms resolve to existing modules
<i>  |  | 338 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 103 ms (parallelism 15.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 89 ms (parallelism 15.7) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 87 ms (parallelism 15.7) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 91 ms (parallelism 18) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 71 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 70 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 70 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 70 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 72 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 71 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 70 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 71 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 74 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 72 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 73 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 73 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 73 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 75 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 73 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 73 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 74 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 75 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 74 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 75 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 76 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 76 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 76 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 75 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 77 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 77 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 76 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 77 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 93 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 93 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 93 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 88 ms (parallelism 39.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 87 ms (parallelism 41.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 87 ms (parallelism 40.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 87 ms (parallelism 39.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3709 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 327 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 82 ms (parallelism 40.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 82 ms (parallelism 40.8) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2312 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 330 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 330 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 374 ms (parallelism 33.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 374 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 371 ms (parallelism 34) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 371 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 32 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 32 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 397 ms (parallelism 5.7) build modules > ./src/main.ts
     |  | 72 ms (parallelism 16.4) build modules > ./src/app/material/material.module.ts
     |  | 58 ms (parallelism 42.8) build modules > ./src/app/news.service.ts
     |  | 89 ms (parallelism 38.2) build modules > ./src/app/menu/menu.component.ts
     |  | 68 ms (parallelism 40.9) build modules > ./src/app/quiz.service.ts
<i>  | 907 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 8041 ms build modules
+ 125 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (883 real resolves with 0 cached but invalid, 1953 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.255484 ms
<t> figure out provided exports: 10.664283 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.060849 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 22.185433 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.560169 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.381663 ms
<t> trace exports usage in graph: 18.970518 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 6.704537 ms
<t> visitModules: visiting: 8.263435 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 8.353341 ms
<t> connectChunkGroups: 0.004683 ms
<t> cleanup: 0.003929 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.049559 ms
<t> modules: 3.843417 ms
<t> queue: 0.00425 ms
<t> maxSize: 0.030315 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.612511 ms
<t> sort relevant modules: 0.152159 ms
<t> find modules to concatenate: 18.691862 ms
<t> sort concat configurations: 0.058497 ms
<t> create concatenated modules: 14.810376 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 255.13017 ms
<t> optimize asset: polyfills.js: 714.549227 ms
<t> optimize asset: main.js: 11902.346322 ms
<t> optimize js assets: 12031.028605 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 21.898264 ms
<t> optimize css assets: 32.80986 ms

LOG from webpack.FileSystemInfo
    1197 new snapshots created
    0% root snapshot uncached (0 / 1953)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1063 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5113/6272) entries shared via 12 shared snapshots (806 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3920/4546) entries shared via 253 shared snapshots (766 times referenced)
    Managed items info in cache: 167 items
    Managed items snapshot optimization: 29% (592/2051) entries shared via 33 shared snapshots (105 times referenced)
    Managed files snapshot optimization: 77% (4940/6405) entries shared via 263 shared snapshots (976 times referenced)
    Managed missing snapshot optimization: 85% (5679/6701) entries shared via 297 shared snapshots (1026 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet
SassWarning: The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:155:37)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:136:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:601:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:155:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:136:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-05-26 06:22:11: webpack 5.80.0 compiled in 30756 ms (6eb1a26d654666c6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1951.3980179999999 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 58.938743 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.358892 ms
<w> [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item: No serializer registered for SassWarning
<w> while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> Array { 1 items } -> webpack/lib/ModuleWarning -> SassWarning
    [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': Error: No serializer registered for SassWarning
    while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> Array { 1 items } -> webpack/lib/ModuleWarning -> SassWarning
        at ObjectMiddleware.getSerializerFor (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:237:22)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:465:23)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at ModuleWarning.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/ModuleWarning.js:45:3)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at ArraySerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ArraySerializer.js:10:29)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Module.js:988:3)
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1376:9)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at PackContentItems.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/PackFileCacheStrategy.js:625:6)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at ObjectMiddleware.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:539:5)
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:525:12
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/SerializerMiddleware.js:106:11
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/memoize.js:22:13
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/SerializerMiddleware.js:102:14
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/memoize.js:22:13
        at serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/FileMiddleware.js:129:21)
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.76085 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.657086 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.25002 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/quiz/quiz.component.ts': 3.743559 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.77032 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/input.mjs': 1.341862 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 2.454864 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.810384 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.027052 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.772876 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.006353 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.533714 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/table.mjs': 2.642951 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 3.548636 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/mergeAll.js': 6.423581 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/table.mjs': 4.564817 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|9e04c8cc16f0363b|runtime': 19.904522 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.176125 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 358.861112 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 72 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 597.97 kB |               139.71 kB
styles.css          | styles        | 270.56 kB |                17.82 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 902.41 kB |               168.66 kB

Build at: 2023-05-26T10:22:15.358Z - Hash: 6eb1a26d654666c6 - Time: 34442ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 402.41 kB with a total of 902.41 kB.


Done in 36.64s.
```
Fri May 26 06:22:44 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.389
info New version: 0.0.390
Done in 0.13s.
