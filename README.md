Fri Oct 20 10:28:48 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       3.8Gi       160Mi       9.1Gi        12Gi
Swap:          8.0Gi       139Mi       7.9Gi
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
    

Angular CLI: 16.2.6
Node: 18.18.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.9
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.6
@angular-devkit/build-angular   16.2.6
@angular-devkit/core            16.2.6
@angular-devkit/schematics      16.2.6
@angular/cdk                    16.2.8
@angular/cli                    16.2.6
@angular/material               16.2.8
@schematics/angular             16.2.6
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001551
Installed version:  1.0.30001549
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001551
Installed version:  1.0.30001551
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.7/angular-webpack/1bccdb61331e5e3d78cb7243e653e3f4d37283b5.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.7/angular-webpack/1bccdb61331e5e3d78cb7243e653e3f4d37283b5/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3541.8595800000003 ms
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
chunk {179} (runtime: runtime) main.js (main) 4.9 MiB [initial] [rendered]
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
    1266 ms (resolving: 68 ms, restoring: 1 ms, integration: 0 ms, building: 1197 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1527 ms (resolving: 53 ms, restoring: 0 ms, integration: 0 ms, building: 1474 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12110 ms (resolving: 54 ms, restoring: 1 ms, integration: 0 ms, building: 12055 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.441389 ms
<t> runtime requirements.chunks: 0.385319 ms
<t> runtime requirements.entries: 1.425623 ms
<t> runtime requirements.modules: 0.024873 ms
<t> runtime requirements.chunks: 0.015863 ms
<t> runtime requirements.entries: 0.215107 ms
<t> finish module profiles: 10.71406 ms
<t> compute affected modules: 0.003836 ms
<t> finish modules: 22.175961 ms
<t> report dependency errors and warnings: 10.341748 ms
<t> optimize dependencies: 27.889651 ms
<t> create chunks: 11.270025 ms
<t> compute affected modules with chunk graph: 0.004912 ms
<t> optimize: 42.464962 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 19.585104 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 765.10386 ms
<t> runtime requirements.modules: 0.13601 ms
<t> runtime requirements.chunks: 0.10555 ms
<t> runtime requirements.entries: 0.50984 ms
<t> runtime requirements: 0.932477 ms
<t> hashing: initialize hash: 0.007907 ms
<t> hashing: hash warnings: 0.003007 ms
<t> hashing: sort chunks: 0.052184 ms
<t> hashing: hash runtime modules: 1.0995 ms
<t> hashing: hash chunks: 1.364368 ms
<t> hashing: hash digest: 0.044199 ms
<t> hashing: process full hash modules: 0.15744 ms
<t> hashing: 2.946409 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.066786 ms
<t> module assets: 0.173653 ms
<t> create chunk assets: 3.783019 ms
<t> process assets: 6702.25935 ms

LOG from webpack.Compiler
<t> make hook: 12266.6237 ms
<t> finish make hook: 0.110417 ms
<t> finish compilation: 43.276659 ms
<t> seal compilation: 7578.4385760000005 ms
<t> afterCompile hook: 0.130917 ms
<t> emitAssets: 3.850579 ms
<t> emitRecords: 0.061144 ms
<t> done hook: 359.848706 ms
<t> beginIdle: 0.841212 ms

LOG from webpack.Compilation.ModuleProfile
     | 87 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 57 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/loading.service.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 68 ms (parallelism 17) resolve to new modules > ./src/app/loading/loading.component.ts
     | 89 ms (parallelism 23.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 107 ms (parallelism 39) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1426 ms resolve to new modules
<i>  |  | 259 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 259 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 360 ms (parallelism 33.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 360 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 199 ms (parallelism 6.1) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 94 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 106 ms (parallelism 15.7) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 93 ms (parallelism 21) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 105 ms (parallelism 15.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 101 ms (parallelism 16.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 30 ms (parallelism 31.7) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 31 ms (parallelism 32.2) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 65 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 63 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 63 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 64 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 65 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 65 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 65 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 63 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 66 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 65 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 66 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 66 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 66 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 67 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 66 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 67 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 67 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 70 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 67 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 68 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 69 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 68 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 68 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 68 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 68 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 69 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 70 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 70 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 70 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 71 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 71 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 97 ms (parallelism 38) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 95 ms (parallelism 39.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 96 ms (parallelism 38.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 95 ms (parallelism 39.2) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3370 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 194 ms (parallelism 6.2) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 41 ms (parallelism 33.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 41 ms (parallelism 33.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1911 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 354 ms (parallelism 33.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 354 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 32 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 32 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 320 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 91 ms (parallelism 16.2) build modules > ./src/app/material/material.module.ts
     |  | 97 ms (parallelism 36.4) build modules > ./src/app/news.service.ts
     |  | 97 ms (parallelism 36.4) build modules > ./src/app/quiz.service.ts
     |  | 96 ms (parallelism 37.8) build modules > ./src/app/menu/menu.component.ts
<i>  | 908 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7196 ms build modules
+ 99 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1930 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.324365 ms
<t> figure out provided exports: 13.044475 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 1.993732 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.347103 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.779545 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.449554 ms
<t> trace exports usage in graph: 16.255029 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.36409 ms
<t> visitModules: visiting: 9.457921 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.546433 ms
<t> connectChunkGroups: 0.004027 ms
<t> cleanup: 0.00293 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.044079 ms
<t> modules: 2.869891 ms
<t> queue: 0.00502 ms
<t> maxSize: 0.036912 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.776625 ms
<t> sort relevant modules: 0.177644 ms
<t> find modules to concatenate: 14.46919 ms
<t> sort concat configurations: 0.041662 ms
<t> create concatenated modules: 10.730046 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 280.471702 ms
<t> optimize asset: polyfills.js: 685.321769 ms
<t> optimize asset: main.js: 5404.334517 ms
<t> optimize js assets: 5540.826392 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 19.865045 ms
<t> optimize css assets: 28.031307 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1930)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3520/4116) entries shared via 224 shared snapshots (691 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 27% (531/1973) entries shared via 29 shared snapshots (92 times referenced)
    Managed files snapshot optimization: 76% (4632/6068) entries shared via 244 shared snapshots (959 times referenced)
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
    at Worker.emit (node:events:517:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:757:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-10-20 10:29:58: webpack 5.88.2 compiled in 23397 ms (c33c1c6a44fa6e18)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1231.520639 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 63.338644 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.017116 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.388614 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.597109 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.798332 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.716703 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.304815 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.456996 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.374357 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.234729 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.034929 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.075478 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 6.095776 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.353911 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.58438 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.236488 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.622542 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 2.512965 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.261115 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.830242 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.125193 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/overlay.mjs': 1.239371 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/scrolling.mjs': 1.327268 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.282225 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 7.601891 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/tap.js': 4.259078 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 24.601838 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.623038 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 402.366122 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 609.80 kB |               140.86 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 886.62 kB |               168.24 kB

Build at: 2023-10-20T14:30:01.885Z - Hash: c33c1c6a44fa6e18 - Time: 26530ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.62 kB with a total of 886.62 kB.


Done in 28.63s.
```
Fri Oct 20 10:30:29 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.508
info New version: 0.0.509
Done in 0.13s.
