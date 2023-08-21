Sun Aug 20 09:55:38 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.7Gi       3.6Gi       294Mi       7.9Gi        10Gi
Swap:          8.0Gi       992Mi       7.0Gi
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
    

Angular CLI: 16.2.0
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@schematics/angular             16.2.0
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001522
Installed version:  1.0.30001520
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001522
Installed version:  1.0.30001522
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.0/angular-webpack/edf0f1e88450756b024c0193dad9dc9ebd10ddfd.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.0/angular-webpack/edf0f1e88450756b024c0193dad9dc9ebd10ddfd/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3444.542841 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 603 KiB {179} [emitted] (name: main)
asset styles.css 243 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 604 KiB = runtime.js 906 bytes main.js 603 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 244 KiB = runtime.js 906 bytes styles.css 243 KiB
chunk {179} (runtime: runtime) main.js (main) 4.87 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 37.3 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.84 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1199 ms (resolving: 69 ms, restoring: 1 ms, integration: 0 ms, building: 1129 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1398 ms (resolving: 54 ms, restoring: 0 ms, integration: 0 ms, building: 1344 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11636 ms (resolving: 55 ms, restoring: 1 ms, integration: 0 ms, building: 11580 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.439413 ms
<t> runtime requirements.chunks: 0.40186 ms
<t> runtime requirements.entries: 1.468479 ms
<t> runtime requirements.modules: 0.026403 ms
<t> runtime requirements.chunks: 0.016523 ms
<t> runtime requirements.entries: 0.160072 ms
<t> finish module profiles: 12.130561 ms
<t> compute affected modules: 0.004452 ms
<t> finish modules: 21.272627 ms
<t> report dependency errors and warnings: 10.777161 ms
<t> optimize dependencies: 33.463999 ms
<t> create chunks: 7.631978 ms
<t> compute affected modules with chunk graph: 0.004225 ms
<t> optimize: 46.699471 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.164287 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1013.062885 ms
<t> runtime requirements.modules: 0.141848 ms
<t> runtime requirements.chunks: 0.067771 ms
<t> runtime requirements.entries: 0.493439 ms
<t> runtime requirements: 1.102554 ms
<t> hashing: initialize hash: 0.008774 ms
<t> hashing: hash warnings: 0.003409 ms
<t> hashing: sort chunks: 0.058949 ms
<t> hashing: hash runtime modules: 1.050521 ms
<t> hashing: hash chunks: 1.301133 ms
<t> hashing: hash digest: 0.020137 ms
<t> hashing: process full hash modules: 0.152258 ms
<t> hashing: 2.788737 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.067859 ms
<t> module assets: 0.176799 ms
<t> create chunk assets: 3.517106 ms
<t> process assets: 6488.715639 ms

LOG from webpack.Compiler
<t> make hook: 11787.105248 ms
<t> finish make hook: 0.103258 ms
<t> finish compilation: 44.228844 ms
<t> seal compilation: 7615.445814 ms
<t> afterCompile hook: 0.093366 ms
<t> emitAssets: 7.583067 ms
<t> emitRecords: 0.061244 ms
<t> done hook: 339.541095 ms
<t> beginIdle: 0.347601 ms

LOG from webpack.Compilation.ModuleProfile
     | 83 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 32 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 62 ms (parallelism 19.1) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 62 ms (parallelism 19.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 53 ms (parallelism 20) resolve to new modules > ./src/app/loading.service.ts
     | 53 ms (parallelism 20) resolve to new modules > ./src/app/home/home.component.ts
     | 53 ms (parallelism 20) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 53 ms (parallelism 20) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 53 ms (parallelism 20) resolve to new modules > ./src/app/news/news.component.ts
     | 53 ms (parallelism 20) resolve to new modules > ./src/app/playground/playground.component.ts
     | 53 ms (parallelism 20) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 53 ms (parallelism 19.9) resolve to new modules > ./src/app/loading/loading.component.ts
     | 75 ms (parallelism 27.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 86 ms (parallelism 45.4) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1188 ms resolve to new modules
     | 53 ms (parallelism 20) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    71 ms resolve to existing modules
<i>  |  | 241 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 241 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 316 ms (parallelism 36.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 316 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 186 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 97 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 91 ms (parallelism 19.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 67 ms (parallelism 19) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 65 ms (parallelism 19.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 83 ms (parallelism 21.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 78 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 77 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 77 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 78 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 80 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 78 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 78 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 79 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 80 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 78 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 79 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 81 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 79 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 82 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 81 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 80 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 81 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 83 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 81 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 81 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 83 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 82 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 81 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 82 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 84 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 83 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 84 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 84 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 84 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 84 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 85 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 80 ms (parallelism 43.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 80 ms (parallelism 44) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 80 ms (parallelism 43) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 80 ms (parallelism 42.1) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3654 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 186 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 78 ms (parallelism 44) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 78 ms (parallelism 44) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2072 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 310 ms (parallelism 37) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 310 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 300 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 71 ms (parallelism 19.2) build modules > ./src/app/material/material.module.ts
     |  | 56 ms (parallelism 43.4) build modules > ./src/app/news.service.ts
     |  | 80 ms (parallelism 41.9) build modules > ./src/app/menu/menu.component.ts
     |  | 78 ms (parallelism 41.7) build modules > ./src/app/quiz.service.ts
<i>  | 832 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7453 ms build modules
+ 105 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1944 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.423495 ms
<t> figure out provided exports: 11.270179 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.100725 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.75331 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 15.535111 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.412652 ms
<t> trace exports usage in graph: 17.043119 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.851407 ms
<t> visitModules: visiting: 5.821141 ms
    443 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.890802 ms
<t> connectChunkGroups: 0.003403 ms
<t> cleanup: 0.002926 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.047468 ms
<t> modules: 2.987833 ms
<t> queue: 0.006329 ms
<t> maxSize: 0.043689 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.922984 ms
<t> sort relevant modules: 0.180075 ms
<t> find modules to concatenate: 14.329256 ms
<t> sort concat configurations: 0.041908 ms
<t> create concatenated modules: 14.655941 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 251.702373 ms
<t> optimize asset: polyfills.js: 704.590169 ms
<t> optimize asset: main.js: 5159.633715 ms
<t> optimize js assets: 5306.442011 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 17.729232 ms
<t> optimize css assets: 39.002512 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1944)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 85% (3503/4116) entries shared via 223 shared snapshots (688 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 27% (530/1973) entries shared via 25 shared snapshots (98 times referenced)
    Managed files snapshot optimization: 76% (4641/6077) entries shared via 244 shared snapshots (961 times referenced)
    Managed missing snapshot optimization: 83% (5154/6247) entries shared via 311 shared snapshots (877 times referenced)

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

2023-08-20 21:56:45: webpack 5.88.2 compiled in 22864 ms (efb45eeeedb8a2be)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1154.510463 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 50.83416 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.135057 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 3.876898 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.777702 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.136394 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|/home/kushal/src/angular/angularfifteen/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js': 1.008188 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.087832 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.452291 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.098867 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.200832 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.21899 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.062726 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.889951 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.36892 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.547561 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.686635 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.203382 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.127554 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.19825 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/throttle.js': 3.857558 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.195877 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.452875 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 380.427394 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 602.68 kB |               140.27 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 879.50 kB |               167.66 kB

Build at: 2023-08-21T01:56:48.049Z - Hash: efb45eeeedb8a2be - Time: 25799ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 379.50 kB with a total of 879.50 kB.


Done in 27.66s.
```
