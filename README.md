Wed Oct 25 03:01:35 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.6Gi       4.8Gi       431Mi       6.9Gi        10Gi
Swap:          8.0Gi       457Mi       7.6Gi
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
    

Angular CLI: 16.2.7
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.7
@angular-devkit/build-angular   16.2.7
@angular-devkit/core            16.2.7
@angular-devkit/schematics      16.2.7
@angular/cdk                    16.2.9
@angular/cli                    16.2.7
@angular/material               16.2.9
@schematics/angular             16.2.7
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 2.63s.
```
Latest version:     1.0.30001554
Installed version:  1.0.30001553
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.8/angular-webpack/3562956bd915c51130219369b9dec1a50e19a1aa.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.8/angular-webpack/3562956bd915c51130219369b9dec1a50e19a1aa/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3929.419288 ms
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
chunk {179} (runtime: runtime) main.js (main) 4.9 MiB [initial] [rendered]
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
    1410 ms (resolving: 42 ms, restoring: 1 ms, integration: 0 ms, building: 1367 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1604 ms (resolving: 35 ms, restoring: 0 ms, integration: 0 ms, building: 1569 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11878 ms (resolving: 36 ms, restoring: 1 ms, integration: 0 ms, building: 11841 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.392113 ms
<t> runtime requirements.chunks: 0.410145 ms
<t> runtime requirements.entries: 1.432854 ms
<t> runtime requirements.modules: 0.027354 ms
<t> runtime requirements.chunks: 0.014262 ms
<t> runtime requirements.entries: 0.22049 ms
<t> finish module profiles: 8.346179 ms
<t> compute affected modules: 0.002745 ms
<t> finish modules: 23.662757 ms
<t> report dependency errors and warnings: 10.012114 ms
<t> optimize dependencies: 25.004155 ms
<t> create chunks: 11.411031 ms
<t> compute affected modules with chunk graph: 0.0052 ms
<t> optimize: 41.378656 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 20.563383 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 937.253463 ms
<t> runtime requirements.modules: 0.117157 ms
<t> runtime requirements.chunks: 0.059375 ms
<t> runtime requirements.entries: 0.545474 ms
<t> runtime requirements: 0.932643 ms
<t> hashing: initialize hash: 0.007022 ms
<t> hashing: hash warnings: 0.00314 ms
<t> hashing: sort chunks: 0.05386 ms
<t> hashing: hash runtime modules: 1.063221 ms
<t> hashing: hash chunks: 1.256948 ms
<t> hashing: hash digest: 0.018443 ms
<t> hashing: process full hash modules: 0.151811 ms
<t> hashing: 2.743037 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.065583 ms
<t> module assets: 0.150375 ms
<t> create chunk assets: 3.474731 ms
<t> process assets: 7266.788607 ms

LOG from webpack.Compiler
<t> make hook: 11995.362423 ms
<t> finish make hook: 0.134586 ms
<t> finish compilation: 42.067116 ms
<t> seal compilation: 8311.654643 ms
<t> afterCompile hook: 0.085488 ms
<t> emitAssets: 3.555063 ms
<t> emitRecords: 0.080728 ms
<t> done hook: 267.701312 ms
<t> beginIdle: 0.516759 ms

LOG from webpack.Compilation.ModuleProfile
     | 35 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 131 ms (parallelism 11.4) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 131 ms (parallelism 11.4) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 44 ms (parallelism 21.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 76 ms (parallelism 51.8) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    817 ms resolve to new modules
     | 114 ms (parallelism 11.2) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    142 ms resolve to existing modules
     | 63 ms (parallelism 3) integrate modules > ./src/main.ts
    80 ms integrate modules
<i>  |  | 274 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 274 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 331 ms (parallelism 35.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 331 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 230 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 87 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 161 ms (parallelism 13) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 147 ms (parallelism 12.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 145 ms (parallelism 12.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 140 ms (parallelism 15.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 55 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 58 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 55 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 57 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 59 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 57 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 56 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 56 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 56 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 55 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 56 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 55 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 55 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 57 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 55 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 60 ms (parallelism 48.9) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 60 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 62 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 60 ms (parallelism 48.9) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 58 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 61 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 60 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 58 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 59 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 59 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 58 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 60 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 57 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 59 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 56 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 60 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 68 ms (parallelism 50.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 67 ms (parallelism 52.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 67 ms (parallelism 51.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 67 ms (parallelism 52.3) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3216 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 223 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 1709 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 323 ms (parallelism 5.6) build modules > ./src/main.ts
     |  | 115 ms (parallelism 11.2) build modules > ./src/app/app.component.ts
     |  | 130 ms (parallelism 12.6) build modules > ./src/app/material/material.module.ts
     |  | 32 ms (parallelism 23.1) build modules > ./src/app/loading.service.ts
     |  | 33 ms (parallelism 23.2) build modules > ./src/app/home/home.component.ts
     |  | 33 ms (parallelism 23.2) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 33 ms (parallelism 23.2) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 33 ms (parallelism 23.2) build modules > ./src/app/news/news.component.ts
     |  | 33 ms (parallelism 23.2) build modules > ./src/app/playground/playground.component.ts
     |  | 33 ms (parallelism 23.3) build modules > ./src/app/quiz/quiz.component.ts
     |  | 33 ms (parallelism 23.3) build modules > ./src/app/loading/loading.component.ts
     |  | 54 ms (parallelism 48.7) build modules > ./src/app/news.service.ts
     |  | 54 ms (parallelism 48.7) build modules > ./src/app/quiz.service.ts
     |  | 67 ms (parallelism 49.9) build modules > ./src/app/menu/menu.component.ts
<i>  | 1065 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 324 ms (parallelism 36.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 324 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w> 6952 ms build modules
     | 63 ms (parallelism 3) restore modules > ./src/main.ts
    80 ms restore modules
+ 109 hidden lines

LOG from webpack.ResolverCachePlugin
    30% really resolved (860 real resolves with 0 cached but invalid, 1962 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.214975 ms
<t> figure out provided exports: 14.357952 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.121992 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.194773 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 9.449668 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.452123 ms
<t> trace exports usage in graph: 14.69697 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.554565 ms
<t> visitModules: visiting: 9.626412 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.773526 ms
<t> connectChunkGroups: 0.006249 ms
<t> cleanup: 0.005923 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.058264 ms
<t> modules: 3.667778 ms
<t> queue: 0.007177 ms
<t> maxSize: 0.045585 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.30391 ms
<t> sort relevant modules: 0.21924 ms
<t> find modules to concatenate: 13.539521 ms
<t> sort concat configurations: 0.041204 ms
<t> create concatenated modules: 11.577276 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 175.418669 ms
<t> optimize asset: polyfills.js: 686.443009 ms
<t> optimize asset: main.js: 5467.893709 ms
<t> optimize js assets: 5627.180147 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 36.765457 ms
<t> optimize css assets: 42.332518 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1962)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5013/6141) entries shared via 12 shared snapshots (792 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 85% (3490/4116) entries shared via 222 shared snapshots (687 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 28% (547/1973) entries shared via 28 shared snapshots (99 times referenced)
    Managed files snapshot optimization: 76% (4632/6064) entries shared via 244 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 84% (5257/6247) entries shared via 279 shared snapshots (997 times referenced)

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
    at MessagePort.<anonymous> (node:internal/worker:263:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:807:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-10-25 15:02:43: webpack 5.88.2 compiled in 24249 ms (331ed5c51a121fad)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1884.8901799999999 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 52.160715 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.943379 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.505732 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.614121 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.778202 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022|request=|rxjs/operators': 1.469365 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 2.207008 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 2.473944 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/autocomplete.mjs': 1.554285 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 7.60024 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 2.516277 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.72735 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/slider.mjs': 1.275461 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 2.149197 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 3.794564 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 2.357102 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 5.297416 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 3.797428 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/expansion.mjs': 1.233052 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 2.865697 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/dialog.mjs': 1.048077 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 8.451096 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/snack-bar.mjs': 1.17729 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/table.mjs': 1.167722 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sort.mjs': 1.029479 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/paginator.mjs': 1.098385 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/core.mjs': 1.412609 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 2.058163 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.79709 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.132907 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.86055 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.374762 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/scrolling.mjs': 1.572237 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/overlay.mjs': 1.29069 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.955212 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/Scheduler': 4.037939 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/find.js': 5.896764 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.0338 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 35.523136 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 24.402881 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 774.93575 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 609.80 kB |               140.86 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 886.62 kB |               168.24 kB

Build at: 2023-10-25T19:02:47.971Z - Hash: 331ed5c51a121fad - Time: 28269ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.62 kB with a total of 886.62 kB.


Done in 30.22s.
```
Wed Oct 25 03:03:25 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.514
info New version: 0.0.515
Done in 0.13s.
