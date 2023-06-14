Wed Jun 14 07:50:59 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.4Gi       3.7Gi       422Mi        10Gi        13Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
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
    

Angular CLI: 16.0.5
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.5
@angular-devkit/build-angular   16.0.5
@angular-devkit/core            16.0.5
@angular-devkit/schematics      16.0.5
@angular/cdk                    16.0.4
@angular/material               16.0.4
@schematics/angular             16.0.5
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.41s.
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.0/angular-webpack/d8fe84d8003ae24b254405431d630eff23a42f6a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.0/angular-webpack/d8fe84d8003ae24b254405431d630eff23a42f6a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3807.388077 ms
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
Entrypoint styles 271 KiB = runtime.js 906 bytes styles.css 270 KiB
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
    1050 ms (resolving: 204 ms, restoring: 0 ms, integration: 0 ms, building: 846 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 317 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 317 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1366 ms (resolving: 49 ms, restoring: 0 ms, integration: 0 ms, building: 1317 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12689 ms (resolving: 161 ms, restoring: 0 ms, integration: 0 ms, building: 12528 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.408335 ms
<t> runtime requirements.chunks: 0.395788 ms
<t> runtime requirements.entries: 1.414704 ms
<t> runtime requirements.modules: 0.029748 ms
<t> runtime requirements.chunks: 0.018426 ms
<t> runtime requirements.entries: 0.197647 ms
<t> finish module profiles: 12.995057 ms
<t> compute affected modules: 0.004304 ms
<t> finish modules: 24.876416 ms
<t> report dependency errors and warnings: 13.349481 ms
<t> optimize dependencies: 34.328525 ms
<t> create chunks: 10.636123 ms
<t> compute affected modules with chunk graph: 0.004436 ms
<t> optimize: 56.584481 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.752793 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1013.333788 ms
<t> runtime requirements.modules: 0.122727 ms
<t> runtime requirements.chunks: 0.097525 ms
<t> runtime requirements.entries: 0.528692 ms
<t> runtime requirements: 1.141528 ms
<t> hashing: initialize hash: 0.008342 ms
<t> hashing: hash warnings: 0.003508 ms
<t> hashing: sort chunks: 0.05943 ms
<t> hashing: hash runtime modules: 1.084832 ms
<t> hashing: hash chunks: 1.339279 ms
<t> hashing: hash digest: 0.043641 ms
<t> hashing: process full hash modules: 0.155101 ms
<t> hashing: 2.898093 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.067025 ms
<t> module assets: 0.185093 ms
<t> create chunk assets: 3.809922 ms
<t> process assets: 15063.983439 ms

LOG from webpack.Compiler
<t> make hook: 12730.126375 ms
<t> finish make hook: 0.234221 ms
<t> finish compilation: 51.279004 ms
<t> seal compilation: 16207.996894 ms
<t> afterCompile hook: 0.168562 ms
<t> emitAssets: 3.623232 ms
<t> emitRecords: 0.059397 ms
<t> done hook: 381.337331 ms
<t> beginIdle: 0.761844 ms

LOG from webpack.Compilation.ModuleProfile
     | 32 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 41 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 39 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 111 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 59 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 83 ms (parallelism 17.8) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 83 ms (parallelism 17.8) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 65 ms (parallelism 19.6) resolve to new modules > ./src/app/loading.service.ts
     | 65 ms (parallelism 19.6) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 65 ms (parallelism 19.6) resolve to new modules > ./src/app/home/home.component.ts
     | 65 ms (parallelism 19.6) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 65 ms (parallelism 19.6) resolve to new modules > ./src/app/news/news.component.ts
     | 65 ms (parallelism 19.6) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 65 ms (parallelism 19.6) resolve to new modules > ./src/app/playground/playground.component.ts
     | 65 ms (parallelism 19.6) resolve to new modules > ./src/app/loading/loading.component.ts
     | 74 ms (parallelism 30.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 88 ms (parallelism 45.9) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1638 ms resolve to new modules
     | 56 ms (parallelism 19.9) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    74 ms resolve to existing modules
<i>  |  | 240 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 240 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 60 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 60 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 351 ms (parallelism 35.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 351 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 132 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 104 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 110 ms (parallelism 17.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 98 ms (parallelism 22) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 108 ms (parallelism 17.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 93 ms (parallelism 22.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 55 ms (parallelism 51.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 55 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 55 ms (parallelism 51.3) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 55 ms (parallelism 51.3) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 58 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 56 ms (parallelism 51.1) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 55 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 56 ms (parallelism 51.1) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 56 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 57 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 57 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 58 ms (parallelism 50.6) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 57 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 59 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 59 ms (parallelism 50.5) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 59 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 60 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 60 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 59 ms (parallelism 50.5) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 59 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 61 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 60 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 60 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 60 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 61 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 61 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 61 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 62 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 62 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 88 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 88 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 81 ms (parallelism 44.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 82 ms (parallelism 42.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 82 ms (parallelism 43.6) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 82 ms (parallelism 42.2) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3096 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 142 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 40 ms (parallelism 34.2) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 40 ms (parallelism 34.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1926 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 333 ms (parallelism 36.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 333 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 269 ms (parallelism 5.2) build modules > ./src/main.ts
     |  | 32 ms (parallelism 11.4) build modules > ./src/app/app-routing.module.ts
     |  | 32 ms (parallelism 11.4) build modules > ./src/app/app.component.ts
     |  | 32 ms (parallelism 11.4) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 82 ms (parallelism 18.7) build modules > ./src/app/material/material.module.ts
     |  | 81 ms (parallelism 41.8) build modules > ./src/app/news.service.ts
     |  | 80 ms (parallelism 41.9) build modules > ./src/app/quiz.service.ts
     |  | 79 ms (parallelism 44.2) build modules > ./src/app/menu/menu.component.ts
<i>  | 834 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6844 ms build modules
+ 114 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (881 real resolves with 0 cached but invalid, 1975 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.589505 ms
<t> figure out provided exports: 12.037449 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.118213 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.741321 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.153487 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.538497 ms
<t> trace exports usage in graph: 22.15799 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 7.436487 ms
<t> visitModules: visiting: 8.853309 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 8.945916 ms
<t> connectChunkGroups: 0.005104 ms
<t> cleanup: 0.004281 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.050686 ms
<t> modules: 4.44107 ms
<t> queue: 0.005889 ms
<t> maxSize: 0.033316 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.673109 ms
<t> sort relevant modules: 0.166504 ms
<t> find modules to concatenate: 20.056128 ms
<t> sort concat configurations: 0.054359 ms
<t> create concatenated modules: 13.554542 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 255.731718 ms
<t> optimize asset: polyfills.js: 756.233381 ms
<t> optimize asset: main.js: 13593.028945 ms
<t> optimize js assets: 13754.212849 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 29.189791 ms
<t> optimize css assets: 43.333151 ms

LOG from webpack.FileSystemInfo
    1197 new snapshots created
    0% root snapshot uncached (0 / 1975)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1046 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5118/6271) entries shared via 12 shared snapshots (807 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3859/4458) entries shared via 248 shared snapshots (747 times referenced)
    Managed items info in cache: 164 items
    Managed items snapshot optimization: 28% (588/2066) entries shared via 33 shared snapshots (105 times referenced)
    Managed files snapshot optimization: 77% (4926/6404) entries shared via 258 shared snapshots (979 times referenced)
    Managed missing snapshot optimization: 85% (5611/6634) entries shared via 293 shared snapshots (1025 times referenced)

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

2023-06-14 07:52:16: webpack 5.86.0 compiled in 32764 ms (3605b20a1b829fe2)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 831.249239 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 42.386736 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1630 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.143053 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.783171 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.836102 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 3.260653 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.35633 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/http.mjs': 1.40846 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 4.407307 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/key-industries/key-industries.component.ts': 1.056435 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.428529 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/quiz/quiz.component.ts': 1.385897 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/src/app/material|request=|@angular/material/paginator': 1.221796 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 2.46671 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 2.972676 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/autocomplete.mjs': 2.252354 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 11.956664 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 3.434558 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/radio.mjs': 1.388048 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 2.956497 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.197625 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/slider.mjs': 2.198893 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 3.128595 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 5.445334 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 4.139017 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 6.628737 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 6.71981 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/expansion.mjs': 1.96886 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 5.109967 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/icon.mjs': 1.079747 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 1.000847 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/dialog.mjs': 1.948626 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 12.716291 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/snack-bar.mjs': 1.293015 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/table.mjs': 1.471273 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sort.mjs': 1.423546 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/paginator.mjs': 1.445912 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/core.mjs': 1.634005 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/src/app/home|request=|@angular/common': 12.673221 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.712248 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.463328 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.035409 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.37787 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.793589 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/exhaust.js': 3.876461 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 19.745444 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.615152 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 472.071552 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1630 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.14 kB |               139.83 kB
styles.css          | styles        | 270.15 kB |                17.86 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 902.17 kB |               168.82 kB

Build at: 2023-06-14T11:52:18.979Z - Hash: 3605b20a1b829fe2 - Time: 35429ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 402.17 kB with a total of 902.17 kB.


Done in 37.48s.
```
Wed Jun 14 07:53:22 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.400
info New version: 0.0.401
Done in 0.13s.
