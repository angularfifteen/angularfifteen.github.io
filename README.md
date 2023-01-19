Thu Jan 19 06:35:27 AM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.5Gi       1.5Gi       763Mi       7.3Gi       7.5Gi
Swap:          8.0Gi       3.2Gi       4.8Gi
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
    

Angular CLI: 15.1.2
Node: 18.13.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.1.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1501.2
@angular-devkit/build-angular   15.1.2
@angular-devkit/core            15.1.2
@angular-devkit/schematics      15.1.2
@angular/cli                    15.1.2
@schematics/angular             15.1.2
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.86s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001446
Installed version:  1.0.30001445
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001446
Installed version:  1.0.30001446
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.1.2/angular-webpack/6ff73fe24a6c3bdee57c36a5b994be7acf620362.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.1.2/angular-webpack/6ff73fe24a6c3bdee57c36a5b994be7acf620362/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 17.735034 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 268 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 269 KiB = runtime.js 906 bytes styles.css 268 KiB
chunk {179} (runtime: runtime) main.js (main) 5.45 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 838 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 192 modules [183] 4.63 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    2182 ms (resolving: 61 ms, restoring: 2 ms, integration: 0 ms, building: 2119 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2217 ms (resolving: 62 ms, restoring: 2 ms, integration: 0 ms, building: 2153 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    19377 ms (resolving: 62 ms, restoring: 2 ms, integration: 0 ms, building: 19313 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.638652 ms
<t> runtime requirements.chunks: 0.714707 ms
<t> runtime requirements.entries: 2.813996 ms
<t> runtime requirements.modules: 0.03609 ms
<t> runtime requirements.chunks: 0.023068 ms
<t> runtime requirements.entries: 0.256983 ms
<t> finish module profiles: 18.352367 ms
<t> compute affected modules: 0.006574 ms
<t> finish modules: 39.936726 ms
<t> report dependency errors and warnings: 19.390872 ms
<t> optimize dependencies: 41.977258 ms
<t> create chunks: 14.514331 ms
<t> compute affected modules with chunk graph: 0.010169 ms
<t> optimize: 91.000189 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 33.610764 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1660.355061 ms
<t> runtime requirements.modules: 0.171035 ms
<t> runtime requirements.chunks: 0.161898 ms
<t> runtime requirements.entries: 0.689465 ms
<t> runtime requirements: 1.56298 ms
<t> hashing: initialize hash: 0.010709 ms
<t> hashing: hash warnings: 0.00474 ms
<t> hashing: sort chunks: 0.127397 ms
<t> hashing: hash runtime modules: 1.381832 ms
<t> hashing: hash chunks: 1.839845 ms
<t> hashing: hash digest: 0.053639 ms
<t> hashing: process full hash modules: 0.19117 ms
<t> hashing: 4.368108 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.082848 ms
<t> module assets: 0.297784 ms
<t> create chunk assets: 6.248442 ms
<t> process assets: 10933.041797 ms

LOG from webpack.Compiler
<t> make hook: 19693.218736 ms
<t> finish make hook: 0.246124 ms
<t> finish compilation: 77.755158 ms
<t> seal compilation: 12789.850661 ms
<t> afterCompile hook: 0.225332 ms
<t> emitAssets: 9.496982 ms
<t> emitRecords: 0.08439 ms
<t> done hook: 478.270291 ms
<t> beginIdle: 1.074495 ms

LOG from webpack.Compilation.ModuleProfile
     | 112 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 54 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 121 ms (parallelism 13.9) resolve to new modules > ./src/app/material/material.module.ts
     | 143 ms (parallelism 13.6) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 143 ms (parallelism 13.6) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 51 ms (parallelism 24.8) resolve to new modules > ./src/app/home/home.component.ts
     | 51 ms (parallelism 24.8) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 51 ms (parallelism 24.8) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 51 ms (parallelism 24.8) resolve to new modules > ./src/app/news/news.component.ts
     | 51 ms (parallelism 24.8) resolve to new modules > ./src/app/playground/playground.component.ts
     | 51 ms (parallelism 24.8) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 51 ms (parallelism 28) resolve to new modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     | 101 ms (parallelism 26.5) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 71 ms (parallelism 30.7) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
    1859 ms resolve to new modules
<i>  |  | 368 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 157 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 195 ms (parallelism 12.4) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 150 ms (parallelism 13.5) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 150 ms (parallelism 13.5) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
<i>  |  | 207 ms (parallelism 17.1) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 187 ms (parallelism 21.1) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 72 ms (parallelism 30.9) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 72 ms (parallelism 31.2) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 113 ms (parallelism 38.2) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 98 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 100 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 97 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 101 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 103 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 101 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 99 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 99 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 103 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 100 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 103 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 103 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 103 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 103 ms (parallelism 40.4) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 103 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 103 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 103 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 103 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 103 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 103 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 103 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 103 ms (parallelism 40.9) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 103 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 103 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 103 ms (parallelism 41) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 103 ms (parallelism 41) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 103 ms (parallelism 41.1) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 103 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 103 ms (parallelism 41.4) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 104 ms (parallelism 41.5) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 104 ms (parallelism 41.6) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 112 ms (parallelism 45.9) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 113 ms (parallelism 45.9) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 110 ms (parallelism 45.8) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<w>  | 5451 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 356 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 110 ms (parallelism 45.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 110 ms (parallelism 45.7) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2949 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 363 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 363 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 590 ms (parallelism 32.7) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 590 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 586 ms (parallelism 32.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 586 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 48 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 48 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 509 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 148 ms (parallelism 13.5) build modules > ./src/app/app-routing.module.ts
     |  | 141 ms (parallelism 13.6) build modules > ./src/app/app.component.ts
     |  | 121 ms (parallelism 13.9) build modules > ./src/app/prompt-update.service.ts
     |  | 121 ms (parallelism 13.9) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 88 ms (parallelism 20) build modules > ./src/app/material/material.module.ts
     |  | 47 ms (parallelism 33.4) build modules > ./src/app/loading.service.ts
     |  | 66 ms (parallelism 31.3) build modules > ./src/app/loading/loading.component.ts
<w>  | 1464 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 11457 ms build modules
+ 129 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (891 real resolves with 0 cached but invalid, 1951 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.860538 ms
<t> figure out provided exports: 25.738355 ms
    95% of exports of modules have been determined (15 no declared exports, 312 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 6 additional calculations due to dependencies)
<t> store provided exports into cache: 2.846696 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 23.414205 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.385565 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.504854 ms
<t> trace exports usage in graph: 26.510184 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 9.042855 ms
<t> visitModules: visiting: 11.091061 ms
    444 queue items processed (201 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 11.212555 ms
<t> connectChunkGroups: 0.145254 ms
<t> cleanup: 0.006566 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.104277 ms
<t> modules: 6.186689 ms
<t> queue: 0.007963 ms
<t> maxSize: 0.042374 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.216829 ms
<t> sort relevant modules: 0.233799 ms
<t> find modules to concatenate: 27.940521 ms
<t> sort concat configurations: 0.07234 ms
<t> create concatenated modules: 23.094006 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 441.605378 ms
<t> optimize asset: polyfills.js: 1116.79072 ms
<t> optimize asset: main.js: 9012.454824 ms
<t> optimize js assets: 9237.977209 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 55.862884 ms
<t> optimize css assets: 77.429627 ms

LOG from webpack.FileSystemInfo
    1206 new snapshots created
    0% root snapshot uncached (0 / 1951)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1099 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5149/6329) entries shared via 12 shared snapshots (811 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4062/4671) entries shared via 259 shared snapshots (793 times referenced)
    Managed items info in cache: 209 items
    Managed items snapshot optimization: 33% (696/2137) entries shared via 40 shared snapshots (127 times referenced)
    Managed files snapshot optimization: 77% (4965/6447) entries shared via 267 shared snapshots (985 times referenced)
    Managed missing snapshot optimization: 85% (5871/6937) entries shared via 305 shared snapshots (1038 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
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
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
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
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-01-19 06:36:37: webpack 5.75.0 compiled in 41361 ms (186a78550089ec8a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1204.473996 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 46.825074 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1637 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.237975 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs': 1.480092 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.94859 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 3.538146 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.844164 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/http.mjs': 1.306022 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/compiler/fesm2020/compiler.mjs': 1.779098 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 2.592012 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/animations/fesm2020/browser.mjs': 2.235931 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 2.683757 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/autocomplete.mjs': 1.076098 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 5.401849 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 7.339282 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.421684 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/slider.mjs': 1.261797 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.389041 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.32037 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.761071 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 4.080754 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 3.489966 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/expansion.mjs': 1.107378 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 2.158061 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/dialog.mjs': 3.729388 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.128796 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 5.70424 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.629653 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.531227 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/scrolling.mjs': 1.417181 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.474857 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchMapTo.js': 8.505164 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 6.553026 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/zone.js/fesm2015/zone.js|runtime': 1.199498 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 31.554159 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs|df19c1f16536234e|runtime': 5.265527 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 17.22647 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 765.891608 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1637 items, 1 files, 81 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 597.98 kB |               139.30 kB
styles.css          | styles        | 268.28 kB |                17.75 kB
polyfills.js        | polyfills     |  33.07 kB |                10.67 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.22 kB |               168.23 kB

Build at: 2023-01-19T11:36:40.453Z - Hash: 186a78550089ec8a - Time: 44715ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.22 kB with a total of 900.22 kB.


Done in 47.75s.
```
Thu Jan 19 06:37:22 AM EST 2023
yarn version v1.22.19
info Current version: 0.0.237
info New version: 0.0.238
Done in 0.14s.
