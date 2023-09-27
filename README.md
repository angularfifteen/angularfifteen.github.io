Wed Sep 27 09:49:47 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.0Gi       4.0Gi       308Mi       9.3Gi        12Gi
Swap:          8.0Gi          0B       8.0Gi
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
    

Angular CLI: 16.2.3
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.6
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.3
@angular-devkit/build-angular   16.2.3
@angular-devkit/core            16.2.3
@angular-devkit/schematics      16.2.3
@angular/cdk                    16.2.5
@angular/cli                    16.2.3
@angular/material               16.2.5
@schematics/angular             16.2.3
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001540
Installed version:  1.0.30001539
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001540
Installed version:  1.0.30001540
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.4/angular-webpack/dfc4666f3535542350338324589f1fcd486cf45f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.4/angular-webpack/dfc4666f3535542350338324589f1fcd486cf45f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3535.797066 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 604 KiB {179} [emitted] (name: main)
asset styles.css 243 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 605 KiB = runtime.js 906 bytes main.js 604 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 244 KiB = runtime.js 906 bytes styles.css 243 KiB
chunk {179} (runtime: runtime) main.js (main) 4.88 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.85 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1171 ms (resolving: 66 ms, restoring: 1 ms, integration: 0 ms, building: 1104 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1361 ms (resolving: 52 ms, restoring: 0 ms, integration: 0 ms, building: 1309 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11414 ms (resolving: 53 ms, restoring: 0 ms, integration: 0 ms, building: 11361 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.414778 ms
<t> runtime requirements.chunks: 0.399106 ms
<t> runtime requirements.entries: 1.392918 ms
<t> runtime requirements.modules: 0.028428 ms
<t> runtime requirements.chunks: 0.015527 ms
<t> runtime requirements.entries: 0.171316 ms
<t> finish module profiles: 10.432745 ms
<t> compute affected modules: 0.003323 ms
<t> finish modules: 25.673796 ms
<t> report dependency errors and warnings: 12.097603 ms
<t> optimize dependencies: 38.582296 ms
<t> create chunks: 7.81392 ms
<t> compute affected modules with chunk graph: 0.0047 ms
<t> optimize: 49.971345 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 22.246433 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1087.963378 ms
<t> runtime requirements.modules: 0.156169 ms
<t> runtime requirements.chunks: 0.071836 ms
<t> runtime requirements.entries: 0.548719 ms
<t> runtime requirements: 1.17941 ms
<t> hashing: initialize hash: 0.007852 ms
<t> hashing: hash warnings: 0.004222 ms
<t> hashing: sort chunks: 0.065934 ms
<t> hashing: hash runtime modules: 1.161847 ms
<t> hashing: hash chunks: 1.403246 ms
<t> hashing: hash digest: 0.021052 ms
<t> hashing: process full hash modules: 0.15695 ms
<t> hashing: 3.036086 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.072725 ms
<t> module assets: 0.175034 ms
<t> create chunk assets: 3.741941 ms
<t> process assets: 6560.572166 ms

LOG from webpack.Compiler
<t> make hook: 11564.043314 ms
<t> finish make hook: 0.09725 ms
<t> finish compilation: 48.246713 ms
<t> seal compilation: 7777.173051 ms
<t> afterCompile hook: 0.089132 ms
<t> emitAssets: 4.319977 ms
<t> emitRecords: 0.06151 ms
<t> done hook: 344.606292 ms
<t> beginIdle: 0.352968 ms

LOG from webpack.Compilation.ModuleProfile
     | 82 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 40 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 100 ms (parallelism 20.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 94 ms (parallelism 41) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1515 ms resolve to new modules
<i>  |  | 232 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 232 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 329 ms (parallelism 34.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 329 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 183 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 102 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 111 ms (parallelism 14.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 100 ms (parallelism 18.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 113 ms (parallelism 14.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 104 ms (parallelism 15.3) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 35 ms (parallelism 31.8) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 35 ms (parallelism 32.1) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 56 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 55 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 55 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 55 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 58 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 56 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 57 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 59 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 59 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 57 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 60 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 60 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 57 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 62 ms (parallelism 42) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 58 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 60 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 59 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 60 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 85 ms (parallelism 36.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 56 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 61 ms (parallelism 42.1) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 60 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 56 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 56 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 60 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 56 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 57 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 55 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 56 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 54 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 55 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 84 ms (parallelism 37.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 83 ms (parallelism 38.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 82 ms (parallelism 41.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 80 ms (parallelism 41.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3050 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 180 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 31 ms (parallelism 37.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 31 ms (parallelism 37.8) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1402 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 322 ms (parallelism 34.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 322 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 295 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 110 ms (parallelism 9.7) build modules > ./src/app/material/material.module.ts
     |  | 34 ms (parallelism 31.2) build modules > ./src/app/home/home.component.ts
     |  | 34 ms (parallelism 31.2) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 34 ms (parallelism 31.2) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 34 ms (parallelism 31.2) build modules > ./src/app/news/news.component.ts
     |  | 34 ms (parallelism 31.2) build modules > ./src/app/playground/playground.component.ts
     |  | 33 ms (parallelism 32) build modules > ./src/app/quiz/quiz.component.ts
     |  | 33 ms (parallelism 32) build modules > ./src/app/loading/loading.component.ts
     |  | 53 ms (parallelism 43.3) build modules > ./src/app/news.service.ts
     |  | 85 ms (parallelism 36.5) build modules > ./src/app/menu/menu.component.ts
     |  | 84 ms (parallelism 36.3) build modules > ./src/app/quiz.service.ts
<i>  | 922 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6288 ms build modules
+ 14 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1903 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 5.052727 ms
<t> figure out provided exports: 11.862131 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.003322 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.461942 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 12.182244 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.541066 ms
<t> trace exports usage in graph: 25.346075 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.444502 ms
<t> visitModules: visiting: 5.312591 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.376884 ms
<t> connectChunkGroups: 0.003807 ms
<t> cleanup: 0.003634 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.032673 ms
<t> modules: 2.861778 ms
<t> queue: 0.005137 ms
<t> maxSize: 0.032279 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.934276 ms
<t> sort relevant modules: 0.171998 ms
<t> find modules to concatenate: 16.035871 ms
<t> sort concat configurations: 0.047013 ms
<t> create concatenated modules: 13.213563 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 287.703323 ms
<t> optimize asset: polyfills.js: 674.053492 ms
<t> optimize asset: main.js: 5230.051901 ms
<t> optimize js assets: 5364.768634 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 17.329767 ms
<t> optimize css assets: 42.73304 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1903)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3536/4116) entries shared via 224 shared snapshots (687 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 26% (522/1973) entries shared via 26 shared snapshots (90 times referenced)
    Managed files snapshot optimization: 76% (4643/6077) entries shared via 243 shared snapshots (961 times referenced)
    Managed missing snapshot optimization: 83% (5215/6247) entries shared via 317 shared snapshots (887 times referenced)

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
    at Worker.emit (node:events:517:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:757:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-09-27 09:50:53: webpack 5.88.2 compiled in 22895 ms (725aacd6844a35f7)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1134.352022 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 48.426861 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.207909 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle|build time': 1.285439 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.803045 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.314685 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 3.213998 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.171345 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.649475 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 5.628235 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.450617 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.168848 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 1.264001 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 2.79681 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.527174 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.291138 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.327482 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 5.363759 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 2.548099 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.145702 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.413865 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.49778 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 2.031449 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/scrolling.mjs': 1.012334 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.303999 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/connect': 3.155229 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/Subscription': 3.706118 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 23.294632 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 12.602679 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 409.766634 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 603.89 kB |               140.65 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 880.71 kB |               168.04 kB

Build at: 2023-09-27T13:50:56.580Z - Hash: 725aacd6844a35f7 - Time: 26091ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 380.71 kB with a total of 880.71 kB.


Done in 28.07s.
```
Wed Sep 27 09:51:24 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.470
info New version: 0.0.471
Done in 0.12s.
