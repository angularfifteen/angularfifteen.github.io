Fri Jun 16 09:10:17 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.8Gi       4.0Gi       906Mi       9.4Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
1.2G	.
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
    

Angular CLI: 16.1.0
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@schematics/angular             16.1.0
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.54s.
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 3.41s.
```
Latest version:     1.0.30001503
Installed versions: 1.0.30001502, 1.0.30001503
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001503
Installed version:  1.0.30001503
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.0/angular-webpack/42453849d0fec6d8d690721470579ca8d578215c.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.0/angular-webpack/42453849d0fec6d8d690721470579ca8d578215c/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3740.876292 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 270 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 270 KiB = runtime.js 906 bytes styles.css 270 KiB
chunk {179} (runtime: runtime) main.js (main) 4.78 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.74 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    792 ms (resolving: 221 ms, restoring: 1 ms, integration: 0 ms, building: 570 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 314 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 314 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1067 ms (resolving: 58 ms, restoring: 1 ms, integration: 0 ms, building: 1008 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11365 ms (resolving: 179 ms, restoring: 0 ms, integration: 0 ms, building: 11186 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.513977 ms
<t> runtime requirements.chunks: 0.500637 ms
<t> runtime requirements.entries: 1.822304 ms
<t> runtime requirements.modules: 0.033158 ms
<t> runtime requirements.chunks: 0.016072 ms
<t> runtime requirements.entries: 0.157476 ms
<t> finish module profiles: 10.181963 ms
<t> compute affected modules: 0.002894 ms
<t> finish modules: 22.233157 ms
<t> report dependency errors and warnings: 12.995611 ms
<t> optimize dependencies: 38.135496 ms
<t> create chunks: 8.483834 ms
<t> compute affected modules with chunk graph: 0.006577 ms
<t> optimize: 44.037052 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.724466 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 794.072322 ms
<t> runtime requirements.modules: 0.112034 ms
<t> runtime requirements.chunks: 0.105192 ms
<t> runtime requirements.entries: 0.489936 ms
<t> runtime requirements: 0.883844 ms
<t> hashing: initialize hash: 0.008467 ms
<t> hashing: hash warnings: 0.004586 ms
<t> hashing: sort chunks: 0.052016 ms
<t> hashing: hash runtime modules: 1.007736 ms
<t> hashing: hash chunks: 1.293098 ms
<t> hashing: hash digest: 0.043128 ms
<t> hashing: process full hash modules: 0.149314 ms
<t> hashing: 2.751824 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.061876 ms
<t> module assets: 0.15613 ms
<t> create chunk assets: 3.890432 ms
<t> process assets: 15323.161364 ms

LOG from webpack.Compiler
<t> make hook: 11408.454091 ms
<t> finish make hook: 0.117244 ms
<t> finish compilation: 45.450441 ms
<t> seal compilation: 16234.325957 ms
<t> afterCompile hook: 0.131608 ms
<t> emitAssets: 7.423705 ms
<t> emitRecords: 0.061383 ms
<t> done hook: 355.688794 ms
<t> beginIdle: 0.832361 ms

LOG from webpack.Compilation.ModuleProfile
     | 36 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 45 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 43 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 143 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 75 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/button.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/input.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/select.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/list.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/card.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     | 32 ms (parallelism 48.2) resolve to new modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/table.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     | 32 ms (parallelism 48.1) resolve to new modules > ./node_modules/@angular/material/fesm2022/core.mjs
     | 49 ms (parallelism 44.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 77 ms (parallelism 57.1) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
<i> 2037 ms resolve to new modules
     |  | 193 ms (parallelism 5.2) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 193 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 72 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 72 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 283 ms (parallelism 39.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 283 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 146 ms (parallelism 5.4) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 46 ms (parallelism 41.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 50 ms (parallelism 43.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 45 ms (parallelism 41.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 46 ms (parallelism 41.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 57 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 58 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 57 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 58 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 60 ms (parallelism 50.5) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 57 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 60 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 58 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 60 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 60 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 60 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 61 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 60 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 61 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 61 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 60 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 61 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 62 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 63 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 61 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 61 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 63 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 62 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 63 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 63 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 64 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 64 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 64 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 64 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 64 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 65 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 67 ms (parallelism 44.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 66 ms (parallelism 56.1) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 2609 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 99 ms (parallelism 5.8) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 857 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 262 ms (parallelism 41) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 262 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 184 ms (parallelism 4.9) build modules > ./src/main.ts
     |  | 32 ms (parallelism 47.2) build modules > ./src/app/loading.service.ts
     |  | 34 ms (parallelism 47.1) build modules > ./src/app/home/home.component.ts
     |  | 34 ms (parallelism 47.1) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 34 ms (parallelism 47.1) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 34 ms (parallelism 47.1) build modules > ./src/app/news/news.component.ts
     |  | 34 ms (parallelism 47.1) build modules > ./src/app/playground/playground.component.ts
     |  | 33 ms (parallelism 47.4) build modules > ./src/app/quiz/quiz.component.ts
     |  | 48 ms (parallelism 49.2) build modules > ./src/app/news.service.ts
     |  | 48 ms (parallelism 49.2) build modules > ./src/app/menu/menu.component.ts
     |  | 48 ms (parallelism 49.1) build modules > ./src/app/quiz.service.ts
     | 627 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 4908 ms build modules
+ 26 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (881 real resolves with 0 cached but invalid, 1990 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.646565 ms
<t> figure out provided exports: 11.85109 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.063116 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.456748 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 12.906323 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.396386 ms
<t> trace exports usage in graph: 24.351639 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 5.109307 ms
<t> visitModules: visiting: 6.282333 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.431427 ms
<t> connectChunkGroups: 0.004735 ms
<t> cleanup: 0.002681 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.043689 ms
<t> modules: 2.792235 ms
<t> queue: 0.005872 ms
<t> maxSize: 0.036727 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.762778 ms
<t> sort relevant modules: 0.178862 ms
<t> find modules to concatenate: 13.890663 ms
<t> sort concat configurations: 0.041196 ms
<t> create concatenated modules: 12.869928 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 276.833524 ms
<t> optimize asset: polyfills.js: 698.418262 ms
<t> optimize asset: main.js: 13978.44495 ms
<t> optimize js assets: 14122.150345 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 26.400557 ms
<t> optimize css assets: 35.127882 ms

LOG from webpack.FileSystemInfo
    1197 new snapshots created
    0% root snapshot uncached (0 / 1990)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1046 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5118/6271) entries shared via 12 shared snapshots (807 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3874/4458) entries shared via 249 shared snapshots (750 times referenced)
    Managed items info in cache: 164 items
    Managed items snapshot optimization: 30% (614/2066) entries shared via 32 shared snapshots (107 times referenced)
    Managed files snapshot optimization: 77% (4928/6406) entries shared via 258 shared snapshots (978 times referenced)
    Managed missing snapshot optimization: 85% (5671/6634) entries shared via 295 shared snapshots (1026 times referenced)

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
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-06-16 09:11:31: webpack 5.86.0 compiled in 31399 ms (62bfa08d094013d4)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 812.442264 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 50.00431 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1630 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.376753 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.43095 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.650977 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.042688 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.336331 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/src/app|request=|rxjs': 1.185837 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.091441 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.195111 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.465135 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 1.088697 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 2.298004 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.304571 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.187318 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.979485 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.515881 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/expansion.mjs': 4.055388 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 2.569475 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.810367 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.368843 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.107524 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.464131 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/exhaustMap.js': 4.02358 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 19.728422 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.102656 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 403.793894 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1630 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.17 kB |               139.80 kB
styles.css          | styles        | 269.51 kB |                17.81 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 901.57 kB |               168.74 kB

Build at: 2023-06-16T13:11:33.982Z - Hash: 62bfa08d094013d4 - Time: 34317ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 401.57 kB with a total of 901.57 kB.


Done in 36.28s.
```
