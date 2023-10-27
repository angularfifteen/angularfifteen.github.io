Fri Oct 27 10:04:44 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.0Gi       1.0Gi       1.0Gi       9.2Gi       8.9Gi
Swap:          8.0Gi       154Mi       7.8Gi
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
    

Angular CLI: 16.2.8
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cli                    16.2.8
@schematics/angular             16.2.8
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.57s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.42s.
```
Latest version:     1.0.30001554
Installed version:  1.0.30001554
caniuse-lite is up to date
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.8/angular-webpack/87fa9cd721bf44d1e1e311489ab0a601ba14250f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.8/angular-webpack/87fa9cd721bf44d1e1e311489ab0a601ba14250f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 6058.809202 ms
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
    1558 ms (resolving: 71 ms, restoring: 1 ms, integration: 0 ms, building: 1486 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1880 ms (resolving: 57 ms, restoring: 0 ms, integration: 0 ms, building: 1823 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11125 ms (resolving: 58 ms, restoring: 1 ms, integration: 0 ms, building: 11066 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.569843 ms
<t> runtime requirements.chunks: 0.722932 ms
<t> runtime requirements.entries: 2.916425 ms
<t> runtime requirements.modules: 0.030493 ms
<t> runtime requirements.chunks: 0.017934 ms
<t> runtime requirements.entries: 0.204765 ms
<t> finish module profiles: 10.748009 ms
<t> compute affected modules: 0.003976 ms
<t> finish modules: 30.022722 ms
<t> report dependency errors and warnings: 12.005455 ms
<t> optimize dependencies: 44.480352 ms
<t> create chunks: 13.489472 ms
<t> compute affected modules with chunk graph: 0.010478 ms
<t> optimize: 61.903981 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 20.560869 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1083.81047 ms
<t> runtime requirements.modules: 0.137856 ms
<t> runtime requirements.chunks: 0.077671 ms
<t> runtime requirements.entries: 0.60781 ms
<t> runtime requirements: 1.067568 ms
<t> hashing: initialize hash: 0.009059 ms
<t> hashing: hash warnings: 0.003839 ms
<t> hashing: sort chunks: 0.062674 ms
<t> hashing: hash runtime modules: 1.777325 ms
<t> hashing: hash chunks: 1.572507 ms
<t> hashing: hash digest: 0.02358 ms
<t> hashing: process full hash modules: 0.183715 ms
<t> hashing: 3.887425 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.075089 ms
<t> module assets: 0.168979 ms
<t> create chunk assets: 4.259845 ms
<t> process assets: 9713.474503 ms

LOG from webpack.Compiler
<t> make hook: 11320.948578 ms
<t> finish make hook: 0.112248 ms
<t> finish compilation: 52.831309 ms
<t> seal compilation: 10967.096186 ms
<t> afterCompile hook: 0.169334 ms
<t> emitAssets: 6.720523 ms
<t> emitRecords: 0.131039 ms
<t> done hook: 437.646855 ms
<t> beginIdle: 0.696858 ms

LOG from webpack.Compilation.ModuleProfile
     | 115 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 35 ms (parallelism 4.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/button.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/input.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/select.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/list.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/card.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/table.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     | 34 ms (parallelism 50.4) resolve to new modules > ./node_modules/@angular/material/fesm2022/core.mjs
     | 65 ms (parallelism 46.9) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 30 ms (parallelism 69.6) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1861 ms resolve to new modules
<i>  |  | 324 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 324 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 384 ms (parallelism 28.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 384 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 272 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 139 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 57 ms (parallelism 41.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 56 ms (parallelism 41.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 60 ms (parallelism 44.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 55 ms (parallelism 42.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 49 ms (parallelism 53.5) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 50 ms (parallelism 53.4) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
<i>  | 1635 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 241 ms (parallelism 6.2) build modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 509 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 396 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 32 ms (parallelism 16.4) build modules > ./src/app/material/material.module.ts
     |  | 50 ms (parallelism 43) build modules > ./src/app/loading.service.ts
     |  | 51 ms (parallelism 43.1) build modules > ./src/app/home/home.component.ts
     |  | 51 ms (parallelism 43.1) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 51 ms (parallelism 43.1) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 51 ms (parallelism 43.1) build modules > ./src/app/news/news.component.ts
     |  | 51 ms (parallelism 43.1) build modules > ./src/app/playground/playground.component.ts
     |  | 51 ms (parallelism 43.1) build modules > ./src/app/quiz/quiz.component.ts
     |  | 35 ms (parallelism 49.8) build modules > ./src/app/loading/loading.component.ts
<i>  | 854 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 371 ms (parallelism 29.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 371 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 41 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 41 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i> 4127 ms build modules
+ 77 hidden lines

LOG from webpack.ResolverCachePlugin
    30% really resolved (860 real resolves with 0 cached but invalid, 1992 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.300676 ms
<t> figure out provided exports: 15.068186 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.984215 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.362886 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.362234 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.546122 ms
<t> trace exports usage in graph: 29.919849 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.2962 ms
<t> visitModules: visiting: 10.370372 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 10.61943 ms
<t> connectChunkGroups: 0.005928 ms
<t> cleanup: 0.00504 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.088963 ms
<t> modules: 5.052504 ms
<t> queue: 0.015451 ms
<t> maxSize: 0.060935 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.510095 ms
<t> sort relevant modules: 0.42779 ms
<t> find modules to concatenate: 20.365653 ms
<t> sort concat configurations: 0.048323 ms
<t> create concatenated modules: 13.512328 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 345.766889 ms
<t> optimize asset: polyfills.js: 1158.993885 ms
<t> optimize asset: main.js: 7856.029834 ms
<t> optimize js assets: 8083.619177 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 21.755436 ms
<t> optimize css assets: 30.003995 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1992)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 94% (5783/6141) entries shared via 14 shared snapshots (771 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3559/4116) entries shared via 225 shared snapshots (693 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 28% (560/1973) entries shared via 26 shared snapshots (98 times referenced)
    Managed files snapshot optimization: 76% (4630/6064) entries shared via 243 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 85% (5317/6247) entries shared via 281 shared snapshots (998 times referenced)

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

2023-10-27 10:05:46: webpack 5.88.2 compiled in 28351 ms (a782b7b5e4706aed)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2025.519982 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 87.040172 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.390924 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.169327 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.030454 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.926568 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.542255 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.746427 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.588876 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.204843 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 2.810851 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.898184 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.288438 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.35367 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.236456 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 1.238152 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/toolbar.mjs': 1.923037 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.603912 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.926 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.668913 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/expansion.mjs': 1.077205 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 2.192542 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/dialog.mjs': 1.301018 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 7.772631 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/paginator.mjs': 1.036425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/core.mjs': 1.133139 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.248512 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.676872 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.416989 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/scrolling.mjs': 1.056682 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/overlay.mjs': 1.191257 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 2.049209 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/Subscription': 4.877838 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js': 6.263787 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.991214 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 25.910072 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 15.195896 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 598.885205 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 609.81 kB |               140.89 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 886.63 kB |               168.28 kB

Build at: 2023-10-27T14:05:50.280Z - Hash: a782b7b5e4706aed - Time: 32495ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.63 kB with a total of 886.63 kB.


Done in 34.88s.
```
Fri Oct 27 10:06:25 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.517
info New version: 0.0.518
Done in 0.18s.
