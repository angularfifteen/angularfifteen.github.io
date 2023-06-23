Fri Jun 23 07:36:59 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.7Gi       2.3Gi       493Mi       9.3Gi        10Gi
Swap:          8.0Gi       334Mi       7.7Gi
System Storage
2.1G	.
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
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@angular/cdk                    16.1.1
@angular/cli                    16.1.0
@angular/material               16.1.1
@schematics/angular             16.1.0
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001507
Installed version:  1.0.30001506
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001507
Installed version:  1.0.30001507
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.1/angular-webpack/e5cf968fa12663865a7432fc83c0390ec126650e.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.1/angular-webpack/e5cf968fa12663865a7432fc83c0390ec126650e/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3640.2004070000003 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 269 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 270 KiB = runtime.js 906 bytes styles.css 269 KiB
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
    1123 ms (resolving: 204 ms, restoring: 0 ms, integration: 0 ms, building: 919 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 310 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 310 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1492 ms (resolving: 51 ms, restoring: 0 ms, integration: 0 ms, building: 1441 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12122 ms (resolving: 162 ms, restoring: 0 ms, integration: 0 ms, building: 11960 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.429105 ms
<t> runtime requirements.chunks: 0.395828 ms
<t> runtime requirements.entries: 1.378984 ms
<t> runtime requirements.modules: 0.027 ms
<t> runtime requirements.chunks: 0.017077 ms
<t> runtime requirements.entries: 0.161607 ms
<t> finish module profiles: 11.84005 ms
<t> compute affected modules: 0.003465 ms
<t> finish modules: 25.649675 ms
<t> report dependency errors and warnings: 12.274992 ms
<t> optimize dependencies: 36.162091 ms
<t> create chunks: 11.448031 ms
<t> compute affected modules with chunk graph: 0.0044 ms
<t> optimize: 52.035697 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.687883 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1007.031595 ms
<t> runtime requirements.modules: 0.127708 ms
<t> runtime requirements.chunks: 0.12515 ms
<t> runtime requirements.entries: 0.542836 ms
<t> runtime requirements: 1.214126 ms
<t> hashing: initialize hash: 0.009186 ms
<t> hashing: hash warnings: 0.004607 ms
<t> hashing: sort chunks: 0.105111 ms
<t> hashing: hash runtime modules: 1.071409 ms
<t> hashing: hash chunks: 1.463944 ms
<t> hashing: hash digest: 0.0446 ms
<t> hashing: process full hash modules: 0.151295 ms
<t> hashing: 3.422294 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.080003 ms
<t> module assets: 0.267875 ms
<t> create chunk assets: 5.341001 ms
<t> process assets: 15171.020375 ms

LOG from webpack.Compiler
<t> make hook: 12163.020143 ms
<t> finish make hook: 0.160838 ms
<t> finish compilation: 49.814387 ms
<t> seal compilation: 16309.065709 ms
<t> afterCompile hook: 0.20339 ms
<t> emitAssets: 4.026865 ms
<t> emitRecords: 0.059787 ms
<t> done hook: 363.976928 ms
<t> beginIdle: 0.802633 ms

LOG from webpack.Compilation.ModuleProfile
     | 32 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 41 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 40 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 131 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 62 ms (parallelism 4.6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 120 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 120 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 33 ms (parallelism 32.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 86 ms (parallelism 46.4) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1089 ms resolve to new modules
     | 89 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    112 ms resolve to existing modules
<i>  |  | 265 ms (parallelism 5.4) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 265 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 65 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 65 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 352 ms (parallelism 33.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 352 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 160 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 141 ms (parallelism 12) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 153 ms (parallelism 12.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 140 ms (parallelism 11.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 145 ms (parallelism 13) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 57 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 57 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 57 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 58 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 60 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 58 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 59 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 58 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 59 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 59 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 59 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 59 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 59 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 63 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 61 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 59 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 61 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 61 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 61 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 62 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 62 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 62 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 62 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 63 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 63 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 85 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 63 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 63 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 85 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 85 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 85 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 80 ms (parallelism 43.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 79 ms (parallelism 44.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 79 ms (parallelism 44.4) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 80 ms (parallelism 43) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3242 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 156 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 40 ms (parallelism 37.1) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 40 ms (parallelism 37) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1807 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 329 ms (parallelism 35.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 329 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 252 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 118 ms (parallelism 11.1) build modules > ./src/app/app.component.ts
     |  | 110 ms (parallelism 12.1) build modules > ./src/app/material/material.module.ts
     |  | 76 ms (parallelism 42) build modules > ./src/app/news.service.ts
     |  | 76 ms (parallelism 42) build modules > ./src/app/quiz.service.ts
     |  | 76 ms (parallelism 42.6) build modules > ./src/app/menu/menu.component.ts
<i>  | 946 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7008 ms build modules
+ 96 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (881 real resolves with 0 cached but invalid, 1944 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.689208 ms
<t> figure out provided exports: 11.462978 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.062249 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.36944 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.373752 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.723233 ms
<t> trace exports usage in graph: 23.635817 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 7.952424 ms
<t> visitModules: visiting: 9.592207 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.807639 ms
<t> connectChunkGroups: 0.004831 ms
<t> cleanup: 0.003604 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039672 ms
<t> modules: 2.644991 ms
<t> queue: 0.004104 ms
<t> maxSize: 0.02828 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.631971 ms
<t> sort relevant modules: 0.157038 ms
<t> find modules to concatenate: 19.954713 ms
<t> sort concat configurations: 0.055077 ms
<t> create concatenated modules: 11.455594 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 283.886943 ms
<t> optimize asset: polyfills.js: 712.979116 ms
<t> optimize asset: main.js: 13758.990324 ms
<t> optimize js assets: 13906.123271 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 27.228272 ms
<t> optimize css assets: 40.972489 ms

LOG from webpack.FileSystemInfo
    1197 new snapshots created
    0% root snapshot uncached (0 / 1944)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1046 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5118/6271) entries shared via 12 shared snapshots (807 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3854/4458) entries shared via 248 shared snapshots (755 times referenced)
    Managed items info in cache: 164 items
    Managed items snapshot optimization: 30% (623/2066) entries shared via 36 shared snapshots (108 times referenced)
    Managed files snapshot optimization: 77% (4930/6408) entries shared via 258 shared snapshots (978 times referenced)
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

2023-06-23 07:38:17: webpack 5.86.0 compiled in 32129 ms (99acc7a272ce5e89)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 818.070386 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 105.313576 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1630 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.219187 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.897978 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.843751 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.596055 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.003883 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.120796 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.057564 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.179547 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.147615 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.317382 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.323779 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.017211 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.031516 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.498789 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/dialog.mjs': 6.784934 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.143555 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.678589 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.089998 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.368656 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/overlay.mjs': 1.273816 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/scrolling.mjs': 1.3515 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.355666 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchMap.js': 3.696314 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 23.074578 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.514207 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 397.612725 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1630 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.21 kB |               139.74 kB
styles.css          | styles        | 268.63 kB |                17.84 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.72 kB |               168.70 kB

Build at: 2023-06-23T11:38:19.840Z - Hash: 99acc7a272ce5e89 - Time: 34961ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.72 kB with a total of 900.72 kB.


Done in 37.09s.
```
Fri Jun 23 07:38:48 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.405
info New version: 0.0.406
Done in 0.13s.
