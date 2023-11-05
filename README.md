Sat Nov  4 09:33:27 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.9Gi       4.4Gi       374Mi       7.0Gi        10Gi
Swap:          8.0Gi       557Mi       7.5Gi
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
    

Angular CLI: 16.2.9
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.12
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.9
@angular-devkit/build-angular   16.2.9
@angular-devkit/core            16.2.9
@angular-devkit/schematics      16.2.9
@angular/cdk                    16.2.11
@angular/cli                    16.2.9
@angular/material               16.2.11
@schematics/angular             16.2.9
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001561
Installed version:  1.0.30001559
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001561
Installed version:  1.0.30001561
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.9/angular-webpack/93087ab033f15bbceaba8681b089a3379a78a44e.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.9/angular-webpack/93087ab033f15bbceaba8681b089a3379a78a44e/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3291.5961859999998 ms
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
    1143 ms (resolving: 45 ms, restoring: 1 ms, integration: 0 ms, building: 1097 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1313 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 1273 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    10406 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 10366 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.421198 ms
<t> runtime requirements.chunks: 0.384656 ms
<t> runtime requirements.entries: 1.464698 ms
<t> runtime requirements.modules: 0.026389 ms
<t> runtime requirements.chunks: 0.015169 ms
<t> runtime requirements.entries: 0.15659 ms
<t> finish module profiles: 7.313757 ms
<t> compute affected modules: 0.003222 ms
<t> finish modules: 23.668743 ms
<t> report dependency errors and warnings: 11.026097 ms
<t> optimize dependencies: 31.234128 ms
<t> create chunks: 10.69118 ms
<t> compute affected modules with chunk graph: 0.004128 ms
<t> optimize: 41.038893 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 14.662481 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 746.466452 ms
<t> runtime requirements.modules: 0.133231 ms
<t> runtime requirements.chunks: 0.064416 ms
<t> runtime requirements.entries: 0.568473 ms
<t> runtime requirements: 0.982363 ms
<t> hashing: initialize hash: 0.008317 ms
<t> hashing: hash warnings: 0.003828 ms
<t> hashing: sort chunks: 0.065868 ms
<t> hashing: hash runtime modules: 1.12185 ms
<t> hashing: hash chunks: 1.350745 ms
<t> hashing: hash digest: 0.02022 ms
<t> hashing: process full hash modules: 0.164647 ms
<t> hashing: 2.928458 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.074424 ms
<t> module assets: 0.165317 ms
<t> create chunk assets: 3.630783 ms
<t> process assets: 6077.491015 ms

LOG from webpack.Compiler
<t> make hook: 10513.058741 ms
<t> finish make hook: 0.085247 ms
<t> finish compilation: 42.052354 ms
<t> seal compilation: 6931.165134 ms
<t> afterCompile hook: 0.087459 ms
<t> emitAssets: 3.435441 ms
<t> emitRecords: 0.076465 ms
<t> done hook: 264.695111 ms
<t> beginIdle: 0.376883 ms

LOG from webpack.Compilation.ModuleProfile
     | 65 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 105 ms (parallelism 10.7) resolve to new modules > ./src/app/loading/loading.component.ts
     | 93 ms (parallelism 22.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 73 ms (parallelism 46.7) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1337 ms resolve to new modules
<i>  |  | 224 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 224 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 292 ms (parallelism 35.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 292 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 181 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 91 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 123 ms (parallelism 13.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 109 ms (parallelism 17.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 125 ms (parallelism 13) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 116 ms (parallelism 13.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 60 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 63 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 61 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 61 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 64 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 62 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 60 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 62 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 61 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 60 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 60 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 60 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 60 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 62 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 60 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 66 ms (parallelism 42) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 67 ms (parallelism 41.6) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 67 ms (parallelism 41.7) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 65 ms (parallelism 42.1) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 66 ms (parallelism 42) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 66 ms (parallelism 41.9) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 65 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 63 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 62 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 66 ms (parallelism 42.1) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 65 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 64 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 63 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 63 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 62 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 65 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 67 ms (parallelism 43.1) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 67 ms (parallelism 42.4) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 66 ms (parallelism 45.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 64 ms (parallelism 45.8) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3122 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 180 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 1274 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 286 ms (parallelism 35.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 286 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 282 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 120 ms (parallelism 12.4) build modules > ./src/app/material/material.module.ts
     |  | 48 ms (parallelism 43.6) build modules > ./src/app/news.service.ts
     |  | 48 ms (parallelism 43.7) build modules > ./src/app/quiz.service.ts
     |  | 59 ms (parallelism 43.2) build modules > ./src/app/menu/menu.component.ts
<i>  | 777 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6004 ms build modules
+ 21 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1909 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.244665 ms
<t> figure out provided exports: 14.305267 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.193975 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 16.479618 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.666427 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.476539 ms
<t> trace exports usage in graph: 18.696737 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 7.238021 ms
<t> visitModules: visiting: 8.846108 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.010971 ms
<t> connectChunkGroups: 0.004647 ms
<t> cleanup: 0.003808 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046769 ms
<t> modules: 2.559899 ms
<t> queue: 0.004469 ms
<t> maxSize: 0.030869 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.217402 ms
<t> sort relevant modules: 0.212007 ms
<t> find modules to concatenate: 14.853271 ms
<t> sort concat configurations: 0.042779 ms
<t> create concatenated modules: 9.634508 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 171.302616 ms
<t> optimize asset: polyfills.js: 556.248055 ms
<t> optimize asset: main.js: 4728.194584 ms
<t> optimize js assets: 4865.96054 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 23.702269 ms
<t> optimize css assets: 28.270329 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1909)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3537/4116) entries shared via 224 shared snapshots (688 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 26% (517/1973) entries shared via 26 shared snapshots (89 times referenced)
    Managed files snapshot optimization: 76% (4643/6073) entries shared via 243 shared snapshots (961 times referenced)
    Managed missing snapshot optimization: 83% (5204/6247) entries shared via 318 shared snapshots (890 times referenced)

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

2023-11-04 21:34:18: webpack 5.88.2 compiled in 20752 ms (02c0ae8de8cf5d1d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1084.458607 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 45.574201 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.741514 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.993653 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.202835 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.116228 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.522952 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.039298 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 3.96765 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.0267 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.307273 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.138638 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.983084 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.792093 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.233611 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.643069 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.758553 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.925355 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.131617 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.00843 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/debounce': 3.338279 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/Notification': 3.905923 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 18.902291 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.750043 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 441.404619 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 609.89 kB |               140.90 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 886.70 kB |               168.29 kB

Build at: 2023-11-05T01:34:21.577Z - Hash: 02c0ae8de8cf5d1d - Time: 23407ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.70 kB with a total of 886.70 kB.


Done in 25.23s.
```
Sat Nov  4 09:34:48 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.535
info New version: 0.0.536
Done in 0.12s.
