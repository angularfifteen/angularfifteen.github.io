Sun Oct 15 10:57:54 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.2Gi       4.4Gi       463Mi       6.7Gi        10Gi
Swap:          8.0Gi       1.9Gi       6.1Gi
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
    

Angular CLI: 16.2.6
Node: 18.18.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.9
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.6
@angular-devkit/build-angular   16.2.6
@angular-devkit/core            16.2.6
@angular-devkit/schematics      16.2.6
@angular/cdk                    16.2.8
@angular/cli                    16.2.6
@angular/material               16.2.8
@schematics/angular             16.2.6
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.47s.
```
Latest version:     1.0.30001549
Installed version:  1.0.30001547
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001549
Installed version:  1.0.30001549
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.6/angular-webpack/1fa48fda72fc757bd37b58a9789fdad5cafcbfe5.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.6/angular-webpack/1fa48fda72fc757bd37b58a9789fdad5cafcbfe5/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3929.292445 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 610 KiB {179} [emitted] (name: main)
asset styles.css 243 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 611 KiB = runtime.js 906 bytes main.js 610 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 244 KiB = runtime.js 906 bytes styles.css 243 KiB
chunk {179} (runtime: runtime) main.js (main) 4.91 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.87 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1266 ms (resolving: 98 ms, restoring: 1 ms, integration: 0 ms, building: 1167 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1459 ms (resolving: 85 ms, restoring: 0 ms, integration: 0 ms, building: 1374 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11731 ms (resolving: 86 ms, restoring: 1 ms, integration: 0 ms, building: 11644 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.389621 ms
<t> runtime requirements.chunks: 0.431157 ms
<t> runtime requirements.entries: 1.423059 ms
<t> runtime requirements.modules: 0.10326 ms
<t> runtime requirements.chunks: 0.194085 ms
<t> runtime requirements.entries: 0.949238 ms
<t> finish module profiles: 10.943623 ms
<t> compute affected modules: 0.213208 ms
<t> finish modules: 23.372083 ms
<t> report dependency errors and warnings: 10.706267 ms
<t> optimize dependencies: 32.305401 ms
<t> create chunks: 8.505792 ms
<t> compute affected modules with chunk graph: 0.125684 ms
<t> optimize: 47.880326 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 15.996017 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 782.613139 ms
<t> runtime requirements.modules: 0.141438 ms
<t> runtime requirements.chunks: 0.11063 ms
<t> runtime requirements.entries: 0.462454 ms
<t> runtime requirements: 0.927024 ms
<t> hashing: initialize hash: 0.009708 ms
<t> hashing: hash warnings: 0.004175 ms
<t> hashing: sort chunks: 0.094539 ms
<t> hashing: hash runtime modules: 1.039329 ms
<t> hashing: hash chunks: 1.327834 ms
<t> hashing: hash digest: 0.04144 ms
<t> hashing: process full hash modules: 0.141722 ms
<t> hashing: 3.197554 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062068 ms
<t> module assets: 0.287807 ms
<t> create chunk assets: 4.437204 ms
<t> process assets: 6828.872748 ms

LOG from webpack.Compiler
<t> make hook: 11867.966789 ms
<t> finish make hook: 0.13261 ms
<t> finish compilation: 45.378096 ms
<t> seal compilation: 7727.644077 ms
<t> afterCompile hook: 0.171246 ms
<t> emitAssets: 4.137788 ms
<t> emitRecords: 0.065504 ms
<t> done hook: 355.835482 ms
<t> beginIdle: 0.849816 ms

LOG from webpack.Compilation.ModuleProfile
     | 81 ms (parallelism 3.8) resolve to new modules > ./src/main.ts
     | 33 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 71 ms (parallelism 17) resolve to new modules > ./src/app/loading.service.ts
     | 71 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 71 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 71 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 71 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 71 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 71 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 71 ms (parallelism 17) resolve to new modules > ./src/app/loading/loading.component.ts
     | 96 ms (parallelism 23.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 96 ms (parallelism 38.8) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1447 ms resolve to new modules
<i>  |  | 240 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 240 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 340 ms (parallelism 34.2) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 340 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 207 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 109 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 108 ms (parallelism 15.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 94 ms (parallelism 21.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 106 ms (parallelism 15.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 100 ms (parallelism 17.1) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 34 ms (parallelism 31.9) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 33 ms (parallelism 31.4) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 55 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 54 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 60 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 57 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 55 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 54 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 55 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 54 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 56 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 57 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 56 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 56 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 56 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 58 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 57 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 56 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 57 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 59 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 57 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 57 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 59 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 59 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 58 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 59 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 60 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 60 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 59 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 60 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 61 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 61 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 61 ms (parallelism 42.1) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 85 ms (parallelism 38.1) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 85 ms (parallelism 39) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 86 ms (parallelism 37) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 84 ms (parallelism 39.1) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3065 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 189 ms (parallelism 6.2) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 35 ms (parallelism 32) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 35 ms (parallelism 31.9) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1996 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 333 ms (parallelism 34.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 333 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 310 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 98 ms (parallelism 16.2) build modules > ./src/app/material/material.module.ts
     |  | 87 ms (parallelism 35.8) build modules > ./src/app/news.service.ts
     |  | 87 ms (parallelism 35.8) build modules > ./src/app/quiz.service.ts
     |  | 86 ms (parallelism 36.2) build modules > ./src/app/menu/menu.component.ts
<i>  | 873 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6878 ms build modules
+ 102 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1934 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.541275 ms
<t> figure out provided exports: 13.626605 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.071344 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 15.46301 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.016286 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.534347 ms
<t> trace exports usage in graph: 20.155998 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.929994 ms
<t> visitModules: visiting: 5.931952 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.683361 ms
<t> connectChunkGroups: 0.114113 ms
<t> cleanup: 0.03641 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.043324 ms
<t> modules: 3.225674 ms
<t> queue: 0.00578 ms
<t> maxSize: 0.036308 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.705631 ms
<t> sort relevant modules: 0.180352 ms
<t> find modules to concatenate: 15.346088 ms
<t> sort concat configurations: 0.044091 ms
<t> create concatenated modules: 10.74492 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 247.44114 ms
<t> optimize asset: polyfills.js: 695.764765 ms
<t> optimize asset: main.js: 5457.526269 ms
<t> optimize js assets: 5620.822316 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 25.906331 ms
<t> optimize css assets: 37.985776 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1934)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3520/4116) entries shared via 224 shared snapshots (691 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 26% (517/1973) entries shared via 26 shared snapshots (89 times referenced)
    Managed files snapshot optimization: 76% (4643/6077) entries shared via 244 shared snapshots (961 times referenced)
    Managed missing snapshot optimization: 83% (5161/6247) entries shared via 313 shared snapshots (882 times referenced)

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

2023-10-15 22:58:46: webpack 5.88.2 compiled in 23529 ms (64e6196c878f6b4f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1227.806248 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 60.023924 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.234003 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.304868 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.622789 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.207648 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.204377 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.08933 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.942426 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.367114 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.191009 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.231238 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.587928 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/toolbar.mjs': 3.311732 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.652214 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.592274 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.354425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.766594 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 2.730297 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.499675 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.144531 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.228092 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.457722 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 24.47645 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 17.381853 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 407.001388 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 609.78 kB |               140.90 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 886.60 kB |               168.29 kB

Build at: 2023-10-16T02:58:49.777Z - Hash: 64e6196c878f6b4f - Time: 26871ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.60 kB with a total of 886.60 kB.


Done in 28.75s.
```
Sun Oct 15 10:59:18 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.503
info New version: 0.0.504
Done in 0.13s.
