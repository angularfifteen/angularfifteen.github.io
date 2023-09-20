Wed Sep 20 02:03:14 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.0Gi       2.5Gi       238Mi       8.7Gi        10Gi
Swap:          8.0Gi       615Mi       7.4Gi
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
    

Angular CLI: 16.2.2
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.5
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.2
@angular-devkit/build-angular   16.2.2
@angular-devkit/core            16.2.2
@angular-devkit/schematics      16.2.2
@angular/cdk                    16.2.4
@angular/cli                    16.2.2
@angular/material               16.2.4
@schematics/angular             16.2.2
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001538
Installed version:  1.0.30001534
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001538
Installed version:  1.0.30001538
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.3/angular-webpack/3022ac3f4e722f9574bf01824de26836c6ff672e.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.3/angular-webpack/3022ac3f4e722f9574bf01824de26836c6ff672e/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3937.780386 ms
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
  ./src/main.ts + 191 modules [943] 4.85 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1579 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 1521 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1600 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 1542 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11553 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 11495 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.557366 ms
<t> runtime requirements.chunks: 0.400669 ms
<t> runtime requirements.entries: 1.468682 ms
<t> runtime requirements.modules: 0.029391 ms
<t> runtime requirements.chunks: 0.017714 ms
<t> runtime requirements.entries: 0.175914 ms
<t> finish module profiles: 11.542863 ms
<t> compute affected modules: 0.003147 ms
<t> finish modules: 25.711283 ms
<t> report dependency errors and warnings: 10.910582 ms
<t> optimize dependencies: 27.875356 ms
<t> create chunks: 11.468806 ms
<t> compute affected modules with chunk graph: 0.003955 ms
<t> optimize: 45.927136 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.687411 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1012.6272739999999 ms
<t> runtime requirements.modules: 0.146823 ms
<t> runtime requirements.chunks: 0.071448 ms
<t> runtime requirements.entries: 0.510301 ms
<t> runtime requirements: 1.113769 ms
<t> hashing: initialize hash: 0.008212 ms
<t> hashing: hash warnings: 0.003648 ms
<t> hashing: sort chunks: 0.061311 ms
<t> hashing: hash runtime modules: 1.083654 ms
<t> hashing: hash chunks: 1.347189 ms
<t> hashing: hash digest: 0.021427 ms
<t> hashing: process full hash modules: 0.153778 ms
<t> hashing: 2.904372 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.07144 ms
<t> module assets: 0.169023 ms
<t> create chunk assets: 3.726442 ms
<t> process assets: 6644.357083 ms

LOG from webpack.Compiler
<t> make hook: 12215.239343 ms
<t> finish make hook: 0.096552 ms
<t> finish compilation: 48.218002 ms
<t> seal compilation: 7768.873406 ms
<t> afterCompile hook: 0.083374 ms
<t> emitAssets: 3.875222 ms
<t> emitRecords: 0.07787 ms
<t> done hook: 361.473117 ms
<t> beginIdle: 0.430295 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 221 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 41 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 51 ms (parallelism 19) resolve to new modules > ./src/app/loading.service.ts
     | 51 ms (parallelism 19) resolve to new modules > ./src/app/home/home.component.ts
     | 51 ms (parallelism 19) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 51 ms (parallelism 19) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 51 ms (parallelism 19) resolve to new modules > ./src/app/news/news.component.ts
     | 51 ms (parallelism 19) resolve to new modules > ./src/app/playground/playground.component.ts
     | 51 ms (parallelism 19) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 62 ms (parallelism 18.1) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 62 ms (parallelism 18.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 40 ms (parallelism 10.7) resolve to new modules > ./src/app/loading/loading.component.ts
     | 116 ms (parallelism 18.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 85 ms (parallelism 45.4) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
<i> 1423 ms resolve to new modules
     | 51 ms (parallelism 19) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    75 ms resolve to existing modules
<i>  |  | 343 ms (parallelism 5.1) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 92 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 115 ms (parallelism 16) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 98 ms (parallelism 16.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 98 ms (parallelism 16.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 98 ms (parallelism 16.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 32 ms (parallelism 22.4) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 32 ms (parallelism 23.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 67 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 70 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 71 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 70 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 73 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 69 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 67 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 69 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 70 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 67 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 69 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 68 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 68 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 69 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 68 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 67 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 73 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 68 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 73 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 73 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 73 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 73 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 73 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 73 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 73 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 71 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 71 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 73 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 71 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 70 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 71 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 74 ms (parallelism 45.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 73 ms (parallelism 46.3) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 72 ms (parallelism 46.8) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 72 ms (parallelism 46.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3604 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 267 ms (parallelism 5.7) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 72 ms (parallelism 46.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 71 ms (parallelism 46.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2009 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 272 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 272 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 321 ms (parallelism 35.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 321 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 318 ms (parallelism 35.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 318 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 31 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 31 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 295 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 61 ms (parallelism 18.2) build modules > ./src/app/app.component.ts
     |  | 89 ms (parallelism 16.4) build modules > ./src/app/material/material.module.ts
     |  | 32 ms (parallelism 21.6) build modules > ./src/app/quiz/quiz.component.ts
     |  | 32 ms (parallelism 21.9) build modules > ./src/app/loading/loading.component.ts
     |  | 61 ms (parallelism 43.3) build modules > ./src/app/news.service.ts
     |  | 73 ms (parallelism 45.5) build modules > ./src/app/menu/menu.component.ts
     |  | 71 ms (parallelism 42.1) build modules > ./src/app/quiz.service.ts
<i>  | 879 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7440 ms build modules
+ 119 hidden lines

LOG from webpack.ResolverCachePlugin
    30% really resolved (860 real resolves with 0 cached but invalid, 1971 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.336148 ms
<t> figure out provided exports: 15.819636 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.169303 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.900914 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.166842 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.470181 ms
<t> trace exports usage in graph: 15.810336 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.624722 ms
<t> visitModules: visiting: 5.717671 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.785253 ms
<t> connectChunkGroups: 0.004055 ms
<t> cleanup: 0.003297 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.048194 ms
<t> modules: 3.012361 ms
<t> queue: 0.005216 ms
<t> maxSize: 0.032594 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.734791 ms
<t> sort relevant modules: 0.206425 ms
<t> find modules to concatenate: 14.322458 ms
<t> sort concat configurations: 0.042645 ms
<t> create concatenated modules: 10.91155 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 304.431109 ms
<t> optimize asset: polyfills.js: 755.185694 ms
<t> optimize asset: main.js: 5258.597582 ms
<t> optimize js assets: 5400.486501 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 21.352892 ms
<t> optimize css assets: 42.240635 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1971)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5034/6141) entries shared via 12 shared snapshots (795 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3538/4116) entries shared via 223 shared snapshots (688 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 27% (534/1973) entries shared via 26 shared snapshots (95 times referenced)
    Managed files snapshot optimization: 76% (4632/6068) entries shared via 244 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 84% (5247/6247) entries shared via 282 shared snapshots (1003 times referenced)

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
    at Worker.emit (node:events:517:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:757:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-09-20 14:04:21: webpack 5.88.2 compiled in 23936 ms (82eb173569b423a7)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1214.86819 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.009389 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2022/init.mjs': 1.065067 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.102704 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.568284 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.031927 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.342311 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.387281 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.217458 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.022272 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.212908 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.193654 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.0203 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.588916 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.528085 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.606989 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.031099 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.508624 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 6.057274 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.271828 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.858002 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.451504 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.600027 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.307048 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/operators/mergeWith': 4.019555 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 24.036686 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.133133 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 398.078377 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 603.89 kB |               140.65 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 880.71 kB |               168.04 kB

Build at: 2023-09-20T18:04:24.686Z - Hash: 82eb173569b423a7 - Time: 26948ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 380.71 kB with a total of 880.71 kB.


Done in 28.92s.
```
