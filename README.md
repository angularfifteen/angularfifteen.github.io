Wed Aug  9 07:14:00 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.0Gi       2.5Gi       586Mi       9.8Gi        11Gi
Swap:          8.0Gi       974Mi       7.0Gi
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
    

Angular CLI: 16.1.8
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.0
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.8
@angular-devkit/build-angular   16.1.8
@angular-devkit/core            16.1.8
@angular-devkit/schematics      16.1.8
@angular/cdk                    16.1.8
@angular/cli                    16.1.8
@angular/material               16.1.8
@schematics/angular             16.1.8
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.0/angular-webpack/1498df98c46d7bf90a078a5ba4dad8373de29138.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.0/angular-webpack/1498df98c46d7bf90a078a5ba4dad8373de29138/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3497.416413 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 602 KiB {179} [emitted] (name: main)
asset styles.css 263 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 603 KiB = runtime.js 906 bytes main.js 602 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 264 KiB = runtime.js 906 bytes styles.css 263 KiB
chunk {179} (runtime: runtime) main.js (main) 4.85 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.82 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1256 ms (resolving: 68 ms, restoring: 1 ms, integration: 0 ms, building: 1187 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 299 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 299 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1439 ms (resolving: 54 ms, restoring: 0 ms, integration: 0 ms, building: 1385 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12468 ms (resolving: 55 ms, restoring: 1 ms, integration: 0 ms, building: 12412 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.396089 ms
<t> runtime requirements.chunks: 0.40746 ms
<t> runtime requirements.entries: 1.449701 ms
<t> runtime requirements.modules: 0.029957 ms
<t> runtime requirements.chunks: 0.017857 ms
<t> runtime requirements.entries: 0.165793 ms
<t> finish module profiles: 11.204569 ms
<t> compute affected modules: 0.002825 ms
<t> finish modules: 27.704776 ms
<t> report dependency errors and warnings: 10.984076 ms
<t> optimize dependencies: 31.295656 ms
<t> create chunks: 7.5121 ms
<t> compute affected modules with chunk graph: 0.005247 ms
<t> optimize: 48.473204 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.649729 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 801.250782 ms
<t> runtime requirements.modules: 0.148348 ms
<t> runtime requirements.chunks: 0.095518 ms
<t> runtime requirements.entries: 0.505371 ms
<t> runtime requirements: 0.949302 ms
<t> hashing: initialize hash: 0.008658 ms
<t> hashing: hash warnings: 0.003705 ms
<t> hashing: sort chunks: 0.057722 ms
<t> hashing: hash runtime modules: 1.294215 ms
<t> hashing: hash chunks: 1.456512 ms
<t> hashing: hash digest: 0.054346 ms
<t> hashing: process full hash modules: 0.231684 ms
<t> hashing: 3.327933 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.087551 ms
<t> module assets: 0.245724 ms
<t> create chunk assets: 4.176536 ms
<t> process assets: 6674.119337 ms

LOG from webpack.Compiler
<t> make hook: 12611.816377 ms
<t> finish make hook: 0.122187 ms
<t> finish compilation: 49.93665 ms
<t> seal compilation: 7590.2817780000005 ms
<t> afterCompile hook: 0.133589 ms
<t> emitAssets: 7.717371 ms
<t> emitRecords: 0.068581 ms
<t> done hook: 365.005712 ms
<t> beginIdle: 0.833163 ms

LOG from webpack.Compilation.ModuleProfile
     | 81 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 42 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/loading.service.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/loading/loading.component.ts
     | 92 ms (parallelism 24) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 99 ms (parallelism 44.1) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1467 ms resolve to new modules
<i>  |  | 241 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 241 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 351 ms (parallelism 35.3) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 351 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 197 ms (parallelism 6.1) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 90 ms (parallelism 4.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 102 ms (parallelism 15.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 89 ms (parallelism 21.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 103 ms (parallelism 15.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 95 ms (parallelism 17) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 33 ms (parallelism 32) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 33 ms (parallelism 32.5) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 65 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 65 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 65 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 65 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 67 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 66 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 65 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 66 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 68 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 66 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 68 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 68 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 67 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 70 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 69 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 68 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 68 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 69 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 70 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 69 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 69 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 71 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 71 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 71 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 71 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 73 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 71 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 72 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 71 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 72 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 72 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 88 ms (parallelism 41.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 87 ms (parallelism 44.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 86 ms (parallelism 44.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 86 ms (parallelism 45) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3424 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 192 ms (parallelism 6.2) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 31 ms (parallelism 48.7) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 31 ms (parallelism 48.7) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1895 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 345 ms (parallelism 35.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 345 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 32 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 32 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 297 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 93 ms (parallelism 16.2) build modules > ./src/app/material/material.module.ts
     |  | 90 ms (parallelism 38.1) build modules > ./src/app/quiz.service.ts
     |  | 90 ms (parallelism 38.1) build modules > ./src/app/news.service.ts
     |  | 87 ms (parallelism 41.5) build modules > ./src/app/menu/menu.component.ts
<i>  | 859 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7152 ms build modules
+ 123 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (879 real resolves with 0 cached but invalid, 1972 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.388642 ms
<t> figure out provided exports: 14.252554 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.322028 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.827626 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.498156 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.513202 ms
<t> trace exports usage in graph: 19.891595 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.817754 ms
<t> visitModules: visiting: 5.78313 ms
    443 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.884687 ms
<t> connectChunkGroups: 0.004367 ms
<t> cleanup: 0.003113 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.041797 ms
<t> modules: 3.009931 ms
<t> queue: 0.005642 ms
<t> maxSize: 0.041376 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.865807 ms
<t> sort relevant modules: 0.193803 ms
<t> find modules to concatenate: 14.765763 ms
<t> sort concat configurations: 0.042517 ms
<t> create concatenated modules: 10.709964 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 267.700634 ms
<t> optimize asset: polyfills.js: 714.675803 ms
<t> optimize asset: main.js: 5340.891755 ms
<t> optimize js assets: 5485.644031 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 20.979114 ms
<t> optimize css assets: 45.58618 ms

LOG from webpack.FileSystemInfo
    1195 new snapshots created
    0% root snapshot uncached (0 / 1972)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1040 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5104/6256) entries shared via 12 shared snapshots (805 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3818/4436) entries shared via 246 shared snapshots (746 times referenced)
    Managed items info in cache: 159 items
    Managed items snapshot optimization: 27% (543/2044) entries shared via 29 shared snapshots (96 times referenced)
    Managed files snapshot optimization: 77% (4920/6387) entries shared via 256 shared snapshots (975 times referenced)
    Managed missing snapshot optimization: 85% (5534/6546) entries shared via 293 shared snapshots (1026 times referenced)

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
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:741:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-08-09 19:14:56: webpack 5.88.2 compiled in 23719 ms (e6f1ef78b3ad7111)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1260.52098 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 58.018086 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.727224 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.072123 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.621914 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 4.328085 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.050238 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.971153 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/key-industries/key-industries.component.ts': 1.026213 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/src/app/material|request=|@angular/material/paginator': 1.076642 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.084753 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.018768 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.876255 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.406438 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.276439 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.154743 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.586936 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.405866 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 4.258105 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/expansion.mjs': 1.546793 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 4.143727 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 2.732425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 6.288905 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.551977 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.119897 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.956193 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.106794 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/every.js': 3.961016 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.516418 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.373694 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 439.612359 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 602.44 kB |               140.32 kB
styles.css          | styles        | 262.89 kB |                17.18 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 899.22 kB |               168.62 kB

Build at: 2023-08-09T23:14:59.677Z - Hash: e6f1ef78b3ad7111 - Time: 27268ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 399.22 kB with a total of 899.22 kB.


Done in 29.28s.
```
Wed Aug  9 07:15:28 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.438
info New version: 0.0.439
Done in 0.13s.
