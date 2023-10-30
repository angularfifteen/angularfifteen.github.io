Mon Oct 30 10:44:35 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.5Gi       5.0Gi       258Mi       7.7Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
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
    

Angular CLI: 16.2.8
Node: 20.9.0 (Unsupported)
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.11
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.8
@angular-devkit/build-angular   16.2.8
@angular-devkit/core            16.2.8
@angular-devkit/schematics      16.2.8
@angular/cdk                    16.2.10
@angular/cli                    16.2.8
@angular/material               16.2.10
@schematics/angular             16.2.8
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Warning: The current version of Node (20.9.0) is not supported by Angular.
Done in 0.49s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001558
Installed version:  1.0.30001554
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001558
Installed version:  1.0.30001558
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.8/angular-webpack/3fa78a1a05a1c8ee831cf798494cd58b4a8a6e4d.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.8/angular-webpack/3fa78a1a05a1c8ee831cf798494cd58b4a8a6e4d/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3398.266131 ms
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
    1148 ms (resolving: 42 ms, restoring: 1 ms, integration: 0 ms, building: 1105 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1337 ms (resolving: 35 ms, restoring: 0 ms, integration: 0 ms, building: 1302 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    10881 ms (resolving: 36 ms, restoring: 1 ms, integration: 0 ms, building: 10844 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.423341 ms
<t> runtime requirements.chunks: 0.38283 ms
<t> runtime requirements.entries: 1.457254 ms
<t> runtime requirements.modules: 0.025922 ms
<t> runtime requirements.chunks: 0.015568 ms
<t> runtime requirements.entries: 0.162502 ms
<t> finish module profiles: 7.106083 ms
<t> compute affected modules: 0.003311 ms
<t> finish modules: 23.03575 ms
<t> report dependency errors and warnings: 9.091301 ms
<t> optimize dependencies: 26.741297 ms
<t> create chunks: 6.660752 ms
<t> compute affected modules with chunk graph: 0.003884 ms
<t> optimize: 38.7546 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 14.333351 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 722.427521 ms
<t> runtime requirements.modules: 0.130067 ms
<t> runtime requirements.chunks: 0.060776 ms
<t> runtime requirements.entries: 0.544042 ms
<t> runtime requirements: 0.939245 ms
<t> hashing: initialize hash: 0.007333 ms
<t> hashing: hash warnings: 0.00316 ms
<t> hashing: sort chunks: 0.065511 ms
<t> hashing: hash runtime modules: 1.049511 ms
<t> hashing: hash chunks: 1.221565 ms
<t> hashing: hash digest: 0.01772 ms
<t> hashing: process full hash modules: 0.152344 ms
<t> hashing: 2.701556 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.064112 ms
<t> module assets: 0.157963 ms
<t> create chunk assets: 3.415188 ms
<t> process assets: 5979.804754 ms

LOG from webpack.Compiler
<t> make hook: 11010.004171 ms
<t> finish make hook: 0.088323 ms
<t> finish compilation: 39.274485 ms
<t> seal compilation: 6797.734004 ms
<t> afterCompile hook: 0.0894 ms
<t> emitAssets: 3.47635 ms
<t> emitRecords: 0.076975 ms
<t> done hook: 240.275975 ms
<t> beginIdle: 0.388576 ms

LOG from webpack.Compilation.ModuleProfile
     | 74 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 107 ms (parallelism 19.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 77 ms (parallelism 46) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1272 ms resolve to new modules
<i>  |  | 231 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 231 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 307 ms (parallelism 35.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 307 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 183 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 90 ms (parallelism 4.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 127 ms (parallelism 15.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 116 ms (parallelism 18.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 129 ms (parallelism 14.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 120 ms (parallelism 15.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 36 ms (parallelism 35.3) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 37 ms (parallelism 35.6) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 55 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 51 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 55 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 52 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 54 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 52 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 54 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 53 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 54 ms (parallelism 48.6) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 55 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 55 ms (parallelism 48.4) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 53 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 52 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 52 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 51 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 51 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 52 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 51 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 52 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 50 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 55 ms (parallelism 48.2) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 55 ms (parallelism 48.3) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 56 ms (parallelism 48.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 57 ms (parallelism 47.8) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 56 ms (parallelism 48.1) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 56 ms (parallelism 48) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 56 ms (parallelism 48.1) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 57 ms (parallelism 47.8) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 56 ms (parallelism 48) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 76 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 57 ms (parallelism 47.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 70 ms (parallelism 42.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 69 ms (parallelism 43.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 68 ms (parallelism 45.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
<i>  | 2861 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 181 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 1357 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 301 ms (parallelism 35.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 301 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 282 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 135 ms (parallelism 12.8) build modules > ./src/app/material/material.module.ts
     |  | 32 ms (parallelism 30) build modules > ./src/app/loading.service.ts
     |  | 33 ms (parallelism 30.4) build modules > ./src/app/home/home.component.ts
     |  | 33 ms (parallelism 30.4) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 33 ms (parallelism 30.4) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 33 ms (parallelism 30.4) build modules > ./src/app/news/news.component.ts
     |  | 33 ms (parallelism 30.4) build modules > ./src/app/playground/playground.component.ts
     |  | 33 ms (parallelism 30.4) build modules > ./src/app/quiz/quiz.component.ts
     |  | 30 ms (parallelism 31.8) build modules > ./src/app/loading/loading.component.ts
     |  | 44 ms (parallelism 49.9) build modules > ./src/app/news.service.ts
     |  | 44 ms (parallelism 49.9) build modules > ./src/app/quiz.service.ts
     |  | 44 ms (parallelism 49.9) build modules > ./src/app/menu/menu.component.ts
<i>  | 839 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 5925 ms build modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1917 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.305186 ms
<t> figure out provided exports: 13.853089 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.039817 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 13.30745 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 8.791101 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.555772 ms
<t> trace exports usage in graph: 16.953088 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.283021 ms
<t> visitModules: visiting: 5.155167 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.258362 ms
<t> connectChunkGroups: 0.004348 ms
<t> cleanup: 0.002822 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.063235 ms
<t> modules: 2.716555 ms
<t> queue: 0.007073 ms
<t> maxSize: 0.031413 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.160527 ms
<t> sort relevant modules: 0.173621 ms
<t> find modules to concatenate: 13.053608 ms
<t> sort concat configurations: 0.041112 ms
<t> create concatenated modules: 9.646466 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 186.250118 ms
<t> optimize asset: polyfills.js: 514.040257 ms
<t> optimize asset: main.js: 4664.351953 ms
<t> optimize js assets: 4810.217638 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 18.560338 ms
<t> optimize css assets: 26.123491 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1917)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5013/6141) entries shared via 12 shared snapshots (792 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 85% (3514/4116) entries shared via 224 shared snapshots (690 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 27% (529/1973) entries shared via 27 shared snapshots (92 times referenced)
    Managed files snapshot optimization: 76% (4630/6064) entries shared via 243 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 83% (5215/6247) entries shared via 317 shared snapshots (885 times referenced)

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

2023-10-30 10:45:23: webpack 5.88.2 compiled in 21220 ms (a782b7b5e4706aed)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1078.887977 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 44.009808 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.771648 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.694677 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.040253 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.124664 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.234958 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.076386 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 3.986471 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.085911 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.141969 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.904233 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.763804 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.236864 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 6.171711 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sort.mjs': 1.007589 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.611037 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.109188 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.022411 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/concatWith': 3.299982 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.333463 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.774754 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 420.990433 ms
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

Build at: 2023-10-30T14:45:26.085Z - Hash: a782b7b5e4706aed - Time: 23873ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.63 kB with a total of 886.63 kB.


Done in 25.64s.
```
Mon Oct 30 10:45:53 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.520
info New version: 0.0.521
Done in 0.12s.
