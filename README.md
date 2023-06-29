Thu Jun 29 09:49:58 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       3.6Gi       927Mi       9.4Gi        11Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
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
    

Angular CLI: 16.1.1
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.2
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.1
@angular-devkit/build-angular   16.1.1
@angular-devkit/core            16.1.1
@angular-devkit/schematics      16.1.1
@angular/cli                    16.1.1
@schematics/angular             16.1.1
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.50s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001509
Installed version:  1.0.30001508
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.3/angular-webpack/506069f0a5092076e4ab1e36e71e1d105a062161.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.3/angular-webpack/506069f0a5092076e4ab1e36e71e1d105a062161/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3882.538422 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 268 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 269 KiB = runtime.js 906 bytes styles.css 268 KiB
chunk {179} (runtime: runtime) main.js (main) 4.78 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.75 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1074 ms (resolving: 207 ms, restoring: 0 ms, integration: 0 ms, building: 867 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 310 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 310 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1408 ms (resolving: 56 ms, restoring: 0 ms, integration: 0 ms, building: 1352 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12417 ms (resolving: 163 ms, restoring: 0 ms, integration: 0 ms, building: 12254 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.432985 ms
<t> runtime requirements.chunks: 0.39135 ms
<t> runtime requirements.entries: 1.407623 ms
<t> runtime requirements.modules: 0.029752 ms
<t> runtime requirements.chunks: 0.018826 ms
<t> runtime requirements.entries: 0.171124 ms
<t> finish module profiles: 11.827498 ms
<t> compute affected modules: 0.003358 ms
<t> finish modules: 23.800143 ms
<t> report dependency errors and warnings: 10.889763 ms
<t> optimize dependencies: 30.354489 ms
<t> create chunks: 7.306702 ms
<t> compute affected modules with chunk graph: 0.004199 ms
<t> optimize: 45.094915 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.944456 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 774.408731 ms
<t> runtime requirements.modules: 0.191443 ms
<t> runtime requirements.chunks: 0.158829 ms
<t> runtime requirements.entries: 0.762746 ms
<t> runtime requirements: 1.365921 ms
<t> hashing: initialize hash: 0.011397 ms
<t> hashing: hash warnings: 0.00562 ms
<t> hashing: sort chunks: 0.076767 ms
<t> hashing: hash runtime modules: 1.340648 ms
<t> hashing: hash chunks: 1.922873 ms
<t> hashing: hash digest: 0.045068 ms
<t> hashing: process full hash modules: 0.160139 ms
<t> hashing: 3.853092 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.068981 ms
<t> module assets: 0.185848 ms
<t> create chunk assets: 3.92589 ms
<t> process assets: 15823.879219 ms

LOG from webpack.Compiler
<t> make hook: 12456.782707 ms
<t> finish make hook: 0.137447 ms
<t> finish compilation: 46.562114 ms
<t> seal compilation: 16709.476722 ms
<t> afterCompile hook: 0.214278 ms
<t> emitAssets: 5.949481 ms
<t> emitRecords: 0.062447 ms
<t> done hook: 352.468115 ms
<t> beginIdle: 0.780841 ms

LOG from webpack.Compilation.ModuleProfile
     | 33 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 42 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 40 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 114 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 58 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 99 ms (parallelism 11.3) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 99 ms (parallelism 11.3) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 36 ms (parallelism 31.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 79 ms (parallelism 52.4) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1084 ms resolve to new modules
     | 91 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    110 ms resolve to existing modules
<i>  |  | 245 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 245 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 54 ms (parallelism 4.4) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 54 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 317 ms (parallelism 38.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 317 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 169 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 120 ms (parallelism 12.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 136 ms (parallelism 12.9) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 119 ms (parallelism 12.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 130 ms (parallelism 13.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 58 ms (parallelism 51.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 58 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 57 ms (parallelism 51.3) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 58 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 61 ms (parallelism 50.5) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 58 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 58 ms (parallelism 51.1) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 59 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 60 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 58 ms (parallelism 51.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 59 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 61 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 60 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 62 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 59 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 61 ms (parallelism 50.5) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 62 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 63 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 62 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 62 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 65 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 63 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 63 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 62 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 63 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 64 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 64 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 64 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 64 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 65 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 65 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 70 ms (parallelism 51.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 69 ms (parallelism 52) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 70 ms (parallelism 52) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 70 ms (parallelism 52.4) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3144 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 145 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 2051 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 299 ms (parallelism 39.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 299 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 260 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 97 ms (parallelism 11.2) build modules > ./src/app/app.component.ts
     |  | 113 ms (parallelism 12.2) build modules > ./src/app/material/material.module.ts
     |  | 67 ms (parallelism 45.9) build modules > ./src/app/news.service.ts
     |  | 68 ms (parallelism 51) build modules > ./src/app/menu/menu.component.ts
     |  | 68 ms (parallelism 51) build modules > ./src/app/quiz.service.ts
<i>  | 885 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6998 ms build modules
+ 119 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (881 real resolves with 0 cached but invalid, 1949 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.149492 ms
<t> figure out provided exports: 11.332966 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.027891 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 13.141797 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.320438 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.483371 ms
<t> trace exports usage in graph: 19.17231 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.660546 ms
<t> visitModules: visiting: 5.651267 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.74198 ms
<t> connectChunkGroups: 0.003497 ms
<t> cleanup: 0.003296 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.042401 ms
<t> modules: 2.958985 ms
<t> queue: 0.006216 ms
<t> maxSize: 0.037052 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.705172 ms
<t> sort relevant modules: 0.17538 ms
<t> find modules to concatenate: 14.04503 ms
<t> sort concat configurations: 0.044534 ms
<t> create concatenated modules: 10.800466 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 315.543057 ms
<t> optimize asset: polyfills.js: 706.635862 ms
<t> optimize asset: main.js: 14289.87167 ms
<t> optimize js assets: 14441.071529 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 30.072278 ms
<t> optimize css assets: 36.030532 ms

LOG from webpack.FileSystemInfo
    1197 new snapshots created
    0% root snapshot uncached (0 / 1949)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1046 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5118/6271) entries shared via 12 shared snapshots (807 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3872/4458) entries shared via 249 shared snapshots (748 times referenced)
    Managed items info in cache: 164 items
    Managed items snapshot optimization: 30% (614/2066) entries shared via 34 shared snapshots (103 times referenced)
    Managed files snapshot optimization: 77% (4934/6412) entries shared via 258 shared snapshots (978 times referenced)
    Managed missing snapshot optimization: 83% (5508/6634) entries shared via 325 shared snapshots (905 times referenced)

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

2023-06-29 09:51:20: webpack 5.86.0 compiled in 33065 ms (e64ebd3053fc5502)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 911.159502 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 48.876544 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1630 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.030621 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.486178 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.509631 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.021567 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.044706 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 3.987277 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.080669 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.018058 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.339227 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.370723 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.40312 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.038895 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.448691 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.225746 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.160228 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.667002 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.123532 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.005288 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchMap.js': 3.786658 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 23.635266 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.90145 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 382.193554 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1630 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.45 kB |               139.91 kB
styles.css          | styles        | 268.19 kB |                17.85 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.52 kB |               168.88 kB

Build at: 2023-06-29T13:51:23.177Z - Hash: e64ebd3053fc5502 - Time: 35974ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.52 kB with a total of 900.52 kB.


Done in 37.97s.
```
Thu Jun 29 09:51:51 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.408
info New version: 0.0.409
Done in 0.13s.
