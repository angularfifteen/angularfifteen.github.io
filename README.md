Thu Mar  9 01:09:48 AM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.4Gi       2.7Gi       969Mi       7.3Gi       8.6Gi
Swap:          8.0Gi       4.2Gi       3.8Gi
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
    

Angular CLI: 15.2.1
Node: 18.15.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.1
@angular-devkit/build-angular   15.2.1
@angular-devkit/core            15.2.1
@angular-devkit/schematics      15.2.1
@schematics/angular             15.2.1
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.76s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001462
Installed version:  1.0.30001462
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001462
Installed version:  1.0.30001462
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.2.2/angular-webpack/85c727393525bf5bcef28e199d5431c934d8499e.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.2.2/angular-webpack/85c727393525bf5bcef28e199d5431c934d8499e/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 11.132578 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 602 KiB {179} [emitted] (name: main)
asset styles.css 270 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 603 KiB = runtime.js 906 bytes main.js 602 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 271 KiB = runtime.js 906 bytes styles.css 270 KiB
chunk {179} (runtime: runtime) main.js (main) 4.7 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 1 modules [321] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 192 modules [183] 4.67 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1341 ms (resolving: 44 ms, restoring: 0 ms, integration: 0 ms, building: 1297 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1516 ms (resolving: 44 ms, restoring: 0 ms, integration: 0 ms, building: 1472 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    13610 ms (resolving: 44 ms, restoring: 0 ms, integration: 0 ms, building: 13566 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.482398 ms
<t> runtime requirements.chunks: 0.431056 ms
<t> runtime requirements.entries: 1.736065 ms
<t> runtime requirements.modules: 0.1081 ms
<t> runtime requirements.chunks: 0.212411 ms
<t> runtime requirements.entries: 0.895267 ms
<t> finish module profiles: 12.261545 ms
<t> compute affected modules: 0.257857 ms
<t> finish modules: 22.743299 ms
<t> report dependency errors and warnings: 11.002726 ms
<t> optimize dependencies: 37.238406 ms
<t> create chunks: 8.927667 ms
<t> compute affected modules with chunk graph: 0.138145 ms
<t> optimize: 54.202432 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.369568 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 865.731431 ms
<t> runtime requirements.modules: 0.146842 ms
<t> runtime requirements.chunks: 0.11697 ms
<t> runtime requirements.entries: 0.477129 ms
<t> runtime requirements: 0.958805 ms
<t> hashing: initialize hash: 0.010163 ms
<t> hashing: hash warnings: 0.004184 ms
<t> hashing: sort chunks: 0.122882 ms
<t> hashing: hash runtime modules: 1.131917 ms
<t> hashing: hash chunks: 1.621523 ms
<t> hashing: hash digest: 0.047929 ms
<t> hashing: process full hash modules: 0.154113 ms
<t> hashing: 3.738398 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.070604 ms
<t> module assets: 0.308013 ms
<t> create chunk assets: 4.82519 ms
<t> process assets: 7240.308772 ms

LOG from webpack.Compiler
<t> make hook: 13825.991811 ms
<t> finish make hook: 0.158932 ms
<t> finish compilation: 46.374765 ms
<t> seal compilation: 8236.334433 ms
<t> afterCompile hook: 0.203396 ms
<t> emitAssets: 7.801936 ms
<t> emitRecords: 0.072207 ms
<t> done hook: 370.08919 ms
<t> beginIdle: 0.857752 ms

LOG from webpack.Compilation.ModuleProfile
     | 74 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 93 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 114 ms (parallelism 12.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 114 ms (parallelism 12.2) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 37 ms (parallelism 29) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
    1086 ms resolve to new modules
<i>  |  | 218 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 113 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 129 ms (parallelism 12.1) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 144 ms (parallelism 12.5) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 128 ms (parallelism 12.2) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 136 ms (parallelism 12.7) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 91 ms (parallelism 39.8) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 89 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 91 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 89 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 90 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 92 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 94 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 89 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 93 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 94 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 94 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 95 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 95 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 95 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 97 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 96 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 96 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 96 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 98 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 96 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 96 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 99 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 97 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 97 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 99 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 99 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 99 ms (parallelism 39) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 100 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 100 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 100 ms (parallelism 39) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 100 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 100 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 100 ms (parallelism 39.9) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 97 ms (parallelism 42.8) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 97 ms (parallelism 43.1) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 4502 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 215 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 97 ms (parallelism 43) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 97 ms (parallelism 42.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2357 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 249 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 249 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 394 ms (parallelism 34.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 394 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 364 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 125 ms (parallelism 12) build modules > ./src/app/app-routing.module.ts
     |  | 100 ms (parallelism 12.1) build modules > ./src/app/app.component.ts
     |  | 100 ms (parallelism 12.1) build modules > ./src/app/prompt-update.service.ts
     |  | 101 ms (parallelism 12.1) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 44 ms (parallelism 13.9) build modules > ./src/app/material/material.module.ts
<i>  | 984 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 392 ms (parallelism 34.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 392 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 36 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 36 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w> 8920 ms build modules
+ 122 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (889 real resolves with 0 cached but invalid, 1952 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.784104 ms
<t> figure out provided exports: 11.65327 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.235418 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 16.318819 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 18.796348 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.430146 ms
<t> trace exports usage in graph: 17.380902 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.904746 ms
<t> visitModules: visiting: 6.033733 ms
    444 queue items processed (200 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.80016 ms
<t> connectChunkGroups: 0.114619 ms
<t> cleanup: 0.038107 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046789 ms
<t> modules: 3.218321 ms
<t> queue: 0.006576 ms
<t> maxSize: 0.042244 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.877197 ms
<t> sort relevant modules: 0.262942 ms
<t> find modules to concatenate: 20.262953 ms
<t> sort concat configurations: 0.066088 ms
<t> create concatenated modules: 12.861747 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 340.313504 ms
<t> optimize asset: polyfills.js: 743.778193 ms
<t> optimize asset: main.js: 5848.632083 ms
<t> optimize js assets: 5995.879356 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 20.752158 ms
<t> optimize css assets: 51.694983 ms

LOG from webpack.FileSystemInfo
    1203 new snapshots created
    0% root snapshot uncached (0 / 1952)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1091 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5135/6311) entries shared via 12 shared snapshots (809 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4068/4654) entries shared via 258 shared snapshots (796 times referenced)
    Managed items info in cache: 178 items
    Managed items snapshot optimization: 32% (667/2090) entries shared via 37 shared snapshots (120 times referenced)
    Managed files snapshot optimization: 77% (4938/6412) entries shared via 266 shared snapshots (981 times referenced)
    Managed missing snapshot optimization: 85% (5825/6857) entries shared via 302 shared snapshots (1035 times referenced)

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

    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:189:37)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:138:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:233:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:598:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:189:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:138:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:233:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-03-09 01:10:52: webpack 5.75.0 compiled in 28203 ms (e3032cdee85bb8e6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 837.835399 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 36.755245 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1634 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.427128 ms
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
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1374:9)
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.624892 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 2.33592 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 1.43622 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 2.948434 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 5.963131 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 2.142045 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.107011 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.016138 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.241663 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 3.06862 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 2.25948 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.484376 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/snack-bar.mjs': 2.948067 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.067689 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 3.98796 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.133911 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/takeWhile.js': 6.881728 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/divider.mjs': 4.518222 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 21.671935 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 11.411604 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 397.096984 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1634 items, 1 files, 71 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 601.97 kB |               139.85 kB
styles.css          | styles        | 270.23 kB |                17.96 kB
polyfills.js        | polyfills     |  33.10 kB |                10.64 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 906.18 kB |               168.95 kB

Build at: 2023-03-09T06:10:55.477Z - Hash: e3032cdee85bb8e6 - Time: 30901ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 406.18 kB with a total of 906.18 kB.


Done in 33.33s.
```
