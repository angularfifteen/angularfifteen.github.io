Wed Mar 15 09:11:43 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.7Gi       3.5Gi       549Mi       9.1Gi        11Gi
Swap:          8.0Gi          0B       8.0Gi
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
    

Angular CLI: 15.2.2
Node: 18.15.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.2
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.2
@angular-devkit/build-angular   15.2.2
@angular-devkit/core            15.2.2
@angular-devkit/schematics      15.2.2
@schematics/angular             15.2.2
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.72s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001466
Installed version:  1.0.30001466
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001466
Installed version:  1.0.30001466
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.2.3/angular-webpack/0e83836b23131a800e0882e07b4a3e1ac88fa07e.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.2.3/angular-webpack/0e83836b23131a800e0882e07b4a3e1ac88fa07e/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 9.869673 ms
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
    1212 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 1172 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1355 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 1315 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11945 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 11905 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.410896 ms
<t> runtime requirements.chunks: 0.405297 ms
<t> runtime requirements.entries: 1.379466 ms
<t> runtime requirements.modules: 0.108285 ms
<t> runtime requirements.chunks: 0.201067 ms
<t> runtime requirements.entries: 0.812497 ms
<t> finish module profiles: 11.943197 ms
<t> compute affected modules: 0.22388 ms
<t> finish modules: 20.501035 ms
<t> report dependency errors and warnings: 10.315953 ms
<t> optimize dependencies: 30.864473 ms
<t> create chunks: 8.619307 ms
<t> compute affected modules with chunk graph: 0.1306 ms
<t> optimize: 47.965515 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.327011 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 738.816783 ms
<t> runtime requirements.modules: 0.16947 ms
<t> runtime requirements.chunks: 0.112479 ms
<t> runtime requirements.entries: 0.4731 ms
<t> runtime requirements: 0.978472 ms
<t> hashing: initialize hash: 0.008919 ms
<t> hashing: hash warnings: 0.004383 ms
<t> hashing: sort chunks: 0.142546 ms
<t> hashing: hash runtime modules: 1.080342 ms
<t> hashing: hash chunks: 1.355525 ms
<t> hashing: hash digest: 0.044159 ms
<t> hashing: process full hash modules: 0.147997 ms
<t> hashing: 3.355027 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.065898 ms
<t> module assets: 0.33206 ms
<t> create chunk assets: 4.702872 ms
<t> process assets: 6184.554488 ms

LOG from webpack.Compiler
<t> make hook: 12143.362669 ms
<t> finish make hook: 0.14026 ms
<t> finish compilation: 43.093327 ms
<t> seal compilation: 7040.008315 ms
<t> afterCompile hook: 0.202971 ms
<t> emitAssets: 3.799803 ms
<t> emitRecords: 0.063038 ms
<t> done hook: 337.404585 ms
<t> beginIdle: 0.827616 ms

LOG from webpack.Compilation.ModuleProfile
     | 73 ms (parallelism 3.7) resolve to new modules > ./src/main.ts
     | 76 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 84 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 84 ms (parallelism 12) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 33 ms (parallelism 32) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
    1011 ms resolve to new modules
     | 74 ms (parallelism 12) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
    102 ms resolve to existing modules
<i>  |  | 203 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 94 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 109 ms (parallelism 11.9) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 122 ms (parallelism 12.4) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 106 ms (parallelism 11.8) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 113 ms (parallelism 13.4) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 76 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 77 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 74 ms (parallelism 40.4) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 75 ms (parallelism 40.4) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 75 ms (parallelism 40.4) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 75 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 75 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 78 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 75 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 79 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 78 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 78 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 79 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 81 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 81 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 78 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 80 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 78 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 81 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 81 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 82 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 82 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 82 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 82 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 83 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 84 ms (parallelism 39.1) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 85 ms (parallelism 39.7) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 84 ms (parallelism 40.5) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 84 ms (parallelism 39.8) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 3749 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 196 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 84 ms (parallelism 39.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 84 ms (parallelism 39.7) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2109 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 223 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 223 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 346 ms (parallelism 34.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 346 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 313 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 97 ms (parallelism 11.9) build modules > ./src/app/app-routing.module.ts
     |  | 83 ms (parallelism 12) build modules > ./src/app/app.component.ts
     |  | 83 ms (parallelism 12) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 40 ms (parallelism 13.5) build modules > ./src/app/material/material.module.ts
<i>  | 781 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 342 ms (parallelism 34.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 342 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 31 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 31 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w> 7583 ms build modules
+ 104 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (889 real resolves with 0 cached but invalid, 1937 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.626377 ms
<t> figure out provided exports: 10.463383 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.996181 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 16.145993 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.042074 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.400717 ms
<t> trace exports usage in graph: 15.800094 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.776347 ms
<t> visitModules: visiting: 5.782522 ms
    444 queue items processed (200 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.569331 ms
<t> connectChunkGroups: 0.125715 ms
<t> cleanup: 0.036995 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.040909 ms
<t> modules: 2.87568 ms
<t> queue: 0.005975 ms
<t> maxSize: 0.036987 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.747711 ms
<t> sort relevant modules: 0.180663 ms
<t> find modules to concatenate: 17.568208 ms
<t> sort concat configurations: 0.07424 ms
<t> create concatenated modules: 11.030525 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 265.654034 ms
<t> optimize asset: polyfills.js: 639.488399 ms
<t> optimize asset: main.js: 4870.560318 ms
<t> optimize js assets: 5006.987439 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 26.370957 ms
<t> optimize css assets: 44.418854 ms

LOG from webpack.FileSystemInfo
    1203 new snapshots created
    0% root snapshot uncached (0 / 1937)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1091 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5135/6311) entries shared via 12 shared snapshots (809 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4078/4654) entries shared via 259 shared snapshots (797 times referenced)
    Managed items info in cache: 178 items
    Managed items snapshot optimization: 33% (689/2094) entries shared via 38 shared snapshots (121 times referenced)
    Managed files snapshot optimization: 77% (4938/6424) entries shared via 266 shared snapshots (981 times referenced)
    Managed missing snapshot optimization: 83% (5722/6857) entries shared via 334 shared snapshots (915 times referenced)

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

2023-03-15 09:12:37: webpack 5.75.0 compiled in 24048 ms (e3032cdee85bb8e6)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 774.422146 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 31.756291 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1634 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.114563 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 2.695615 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 3.568198 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 1.436816 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 1.819602 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 5.341534 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/radio.mjs': 1.472794 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 4.182208 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.553121 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.568621 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 2.048294 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 1.339551 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 3.630524 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.356553 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/table.mjs': 2.877723 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.063335 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 3.911041 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.036447 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/observable/connectable.js': 6.602051 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 4.874067 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 20.59084 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.776196 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 393.453134 ms
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

Build at: 2023-03-15T13:12:40.107Z - Hash: e3032cdee85bb8e6 - Time: 26291ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 406.18 kB with a total of 906.18 kB.


Done in 28.56s.
```
Wed Mar 15 09:13:08 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.316
info New version: 0.0.317
Done in 0.54s.
