Fri Sep  8 12:45:41 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       4.0Gi       363Mi       9.2Gi        12Gi
Swap:          8.0Gi       5.0Mi       8.0Gi
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
    

Angular CLI: 16.2.1
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.3
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.1
@angular-devkit/build-angular   16.2.1
@angular-devkit/core            16.2.1
@angular-devkit/schematics      16.2.1
@angular/cdk                    16.2.2
@angular/cli                    16.2.1
@angular/material               16.2.2
@schematics/angular             16.2.1
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001528
Installed version:  1.0.30001525
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001528
Installed version:  1.0.30001528
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.1/angular-webpack/17fc7a940cfd56adb92198b29791ce868502dd6f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.1/angular-webpack/17fc7a940cfd56adb92198b29791ce868502dd6f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3645.932429 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 604 KiB {179} [emitted] (name: main)
asset styles.css 243 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 605 KiB = runtime.js 906 bytes main.js 604 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 244 KiB = runtime.js 906 bytes styles.css 243 KiB
chunk {179} (runtime: runtime) main.js (main) 4.88 MiB [initial] [rendered]
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
    1275 ms (resolving: 74 ms, restoring: 1 ms, integration: 0 ms, building: 1200 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1462 ms (resolving: 61 ms, restoring: 0 ms, integration: 0 ms, building: 1401 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11937 ms (resolving: 60 ms, restoring: 0 ms, integration: 0 ms, building: 11877 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.445558 ms
<t> runtime requirements.chunks: 0.399648 ms
<t> runtime requirements.entries: 1.462087 ms
<t> runtime requirements.modules: 0.026502 ms
<t> runtime requirements.chunks: 0.01567 ms
<t> runtime requirements.entries: 0.15288 ms
<t> finish module profiles: 10.779305 ms
<t> compute affected modules: 0.003582 ms
<t> finish modules: 22.803936 ms
<t> report dependency errors and warnings: 10.757728 ms
<t> optimize dependencies: 27.989242 ms
<t> create chunks: 11.713525 ms
<t> compute affected modules with chunk graph: 0.004249 ms
<t> optimize: 46.987202 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.504908 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 776.264371 ms
<t> runtime requirements.modules: 0.138829 ms
<t> runtime requirements.chunks: 0.06395 ms
<t> runtime requirements.entries: 0.503755 ms
<t> runtime requirements: 0.909932 ms
<t> hashing: initialize hash: 0.008045 ms
<t> hashing: hash warnings: 0.003543 ms
<t> hashing: sort chunks: 0.058392 ms
<t> hashing: hash runtime modules: 1.113051 ms
<t> hashing: hash chunks: 1.368281 ms
<t> hashing: hash digest: 0.020982 ms
<t> hashing: process full hash modules: 0.161303 ms
<t> hashing: 2.936313 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.073155 ms
<t> module assets: 0.161912 ms
<t> create chunk assets: 3.611039 ms
<t> process assets: 6513.560609 ms

LOG from webpack.Compiler
<t> make hook: 12083.220543 ms
<t> finish make hook: 0.110738 ms
<t> finish compilation: 44.385923 ms
<t> seal compilation: 7403.546136 ms
<t> afterCompile hook: 0.090665 ms
<t> emitAssets: 3.687047 ms
<t> emitRecords: 0.061207 ms
<t> done hook: 332.52996 ms
<t> beginIdle: 0.526104 ms

LOG from webpack.Compilation.ModuleProfile
     | 82 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 31 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/loading.service.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/loading/loading.component.ts
     | 99 ms (parallelism 23.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 94 ms (parallelism 40.2) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1482 ms resolve to new modules
<i>  |  | 247 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 247 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 342 ms (parallelism 34.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 342 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 200 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 102 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 111 ms (parallelism 15.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 97 ms (parallelism 21.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 109 ms (parallelism 15.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 103 ms (parallelism 16.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 35 ms (parallelism 32) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 34 ms (parallelism 31.5) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 59 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 59 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 63 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 59 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 59 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 61 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 61 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 61 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 64 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 62 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 61 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 60 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 65 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 63 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 62 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 64 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 64 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 63 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 64 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 64 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 66 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 66 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 65 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 66 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 66 ms (parallelism 42.1) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 74 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 83 ms (parallelism 39.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 82 ms (parallelism 40.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 82 ms (parallelism 39.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 81 ms (parallelism 40.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3222 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 196 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 31 ms (parallelism 37) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 31 ms (parallelism 36.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2056 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 335 ms (parallelism 35.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 335 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 31 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 31 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 313 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 102 ms (parallelism 16.1) build modules > ./src/app/material/material.module.ts
     |  | 83 ms (parallelism 37.9) build modules > ./src/app/quiz.service.ts
     |  | 83 ms (parallelism 37.9) build modules > ./src/app/news.service.ts
     |  | 82 ms (parallelism 39.1) build modules > ./src/app/menu/menu.component.ts
<i>  | 869 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7103 ms build modules
+ 106 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1936 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.321129 ms
<t> figure out provided exports: 13.54709 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.04683 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.080839 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.687391 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.491976 ms
<t> trace exports usage in graph: 16.391809 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.707652 ms
<t> visitModules: visiting: 5.815035 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.904506 ms
<t> connectChunkGroups: 0.003528 ms
<t> cleanup: 0.002807 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.040137 ms
<t> modules: 2.940265 ms
<t> queue: 0.005353 ms
<t> maxSize: 0.032046 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.656137 ms
<t> sort relevant modules: 0.173495 ms
<t> find modules to concatenate: 15.27082 ms
<t> sort concat configurations: 0.046366 ms
<t> create concatenated modules: 10.830514 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 266.959555 ms
<t> optimize asset: polyfills.js: 636.863127 ms
<t> optimize asset: main.js: 5210.810383 ms
<t> optimize js assets: 5343.695428 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 19.114123 ms
<t> optimize css assets: 38.383151 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1936)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3520/4116) entries shared via 224 shared snapshots (691 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 26% (519/1973) entries shared via 28 shared snapshots (89 times referenced)
    Managed files snapshot optimization: 76% (4641/6077) entries shared via 244 shared snapshots (961 times referenced)
    Managed missing snapshot optimization: 83% (5161/6247) entries shared via 313 shared snapshots (882 times referenced)

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

2023-09-08 00:46:47: webpack 5.88.2 compiled in 23144 ms (4c67d30772b75bd2)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1257.499282 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 56.800004 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.995574 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.363551 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.371039 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.122185 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.142052 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.191666 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.162108 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.03792 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.313414 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.292433 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.226471 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.02487 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.505442 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.450177 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.293169 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.769127 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.199072 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.070164 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/distinct': 3.053105 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|conditionNames=[|0=|sass|1=|style|]|mainFields=[|0=|sass|1=|style|2=|main|3=|...|]|extensions=[|0=|.scss|1=|.sass|2=|.css|]|restrictions=[|0=[|]|]|preferRelative=|true|symlinks=|true|dependencyType=|sass-module|mainFiles=[|0=|_index|1=|index|2=|...|]|path=|/home/kushal/src/angular/angularfifteen|request=|@material/theme/_custom-properties': 3.904903 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 19.954464 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.194116 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 384.083218 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 604.33 kB |               140.78 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 881.15 kB |               168.17 kB

Build at: 2023-09-08T04:46:51.031Z - Hash: 4c67d30772b75bd2 - Time: 26185ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 381.15 kB with a total of 881.15 kB.


Done in 28.03s.
```
Fri Sep  8 12:47:19 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.453
info New version: 0.0.454
Done in 0.13s.
