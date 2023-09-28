Thu Sep 28 01:33:53 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       4.7Gi       280Mi       8.2Gi        12Gi
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
    

Angular CLI: 16.2.4
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.6
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.4
@angular-devkit/build-angular   16.2.4
@angular-devkit/core            16.2.4
@angular-devkit/schematics      16.2.4
@angular/cli                    16.2.4
@schematics/angular             16.2.4
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.49s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001541
Installed version:  1.0.30001540
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001541
Installed version:  1.0.30001541
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.4/angular-webpack/6d87a22fb868cb4fe2b3f86b17741b9c35adf11a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.4/angular-webpack/6d87a22fb868cb4fe2b3f86b17741b9c35adf11a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3523.7605869999998 ms
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
    1285 ms (resolving: 80 ms, restoring: 1 ms, integration: 0 ms, building: 1204 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1478 ms (resolving: 61 ms, restoring: 0 ms, integration: 0 ms, building: 1417 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11907 ms (resolving: 62 ms, restoring: 1 ms, integration: 0 ms, building: 11844 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.400658 ms
<t> runtime requirements.chunks: 0.40994 ms
<t> runtime requirements.entries: 1.371862 ms
<t> runtime requirements.modules: 0.030027 ms
<t> runtime requirements.chunks: 0.017666 ms
<t> runtime requirements.entries: 0.254867 ms
<t> finish module profiles: 11.290685 ms
<t> compute affected modules: 0.003803 ms
<t> finish modules: 25.244074 ms
<t> report dependency errors and warnings: 11.20763 ms
<t> optimize dependencies: 29.719577 ms
<t> create chunks: 11.18562 ms
<t> compute affected modules with chunk graph: 0.005545 ms
<t> optimize: 47.811102 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.850695 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 771.90705 ms
<t> runtime requirements.modules: 0.128494 ms
<t> runtime requirements.chunks: 0.113748 ms
<t> runtime requirements.entries: 0.518657 ms
<t> runtime requirements: 0.944725 ms
<t> hashing: initialize hash: 0.007543 ms
<t> hashing: hash warnings: 0.003543 ms
<t> hashing: sort chunks: 0.054318 ms
<t> hashing: hash runtime modules: 1.094523 ms
<t> hashing: hash chunks: 1.359093 ms
<t> hashing: hash digest: 0.048709 ms
<t> hashing: process full hash modules: 0.156913 ms
<t> hashing: 2.922456 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.070131 ms
<t> module assets: 0.165298 ms
<t> create chunk assets: 3.767784 ms
<t> process assets: 6641.091413 ms

LOG from webpack.Compiler
<t> make hook: 12062.985207 ms
<t> finish make hook: 0.120873 ms
<t> finish compilation: 47.788909 ms
<t> seal compilation: 7528.387936 ms
<t> afterCompile hook: 0.135453 ms
<t> emitAssets: 3.83609 ms
<t> emitRecords: 0.105904 ms
<t> done hook: 347.48094 ms
<t> beginIdle: 0.899035 ms

LOG from webpack.Compilation.ModuleProfile
     | 89 ms (parallelism 3.4) resolve to new modules > ./src/main.ts
     | 34 ms (parallelism 4.2) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 58 ms (parallelism 19) resolve to new modules > ./src/app/loading.service.ts
     | 58 ms (parallelism 19) resolve to new modules > ./src/app/home/home.component.ts
     | 58 ms (parallelism 19) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 58 ms (parallelism 19) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 58 ms (parallelism 19) resolve to new modules > ./src/app/news/news.component.ts
     | 58 ms (parallelism 19) resolve to new modules > ./src/app/playground/playground.component.ts
     | 58 ms (parallelism 19) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 68 ms (parallelism 18.3) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 68 ms (parallelism 18.3) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 111 ms (parallelism 19) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 79 ms (parallelism 48.7) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1209 ms resolve to new modules
     | 58 ms (parallelism 19) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    79 ms resolve to existing modules
<i>  |  | 250 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 250 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 333 ms (parallelism 35.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 333 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 200 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 99 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 100 ms (parallelism 17.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 123 ms (parallelism 17) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 100 ms (parallelism 17.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 119 ms (parallelism 17.7) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 65 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 66 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 65 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 67 ms (parallelism 48.9) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 68 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 69 ms (parallelism 48.6) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 66 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 66 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 66 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 65 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 65 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 65 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 65 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 72 ms (parallelism 47.6) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 69 ms (parallelism 48.4) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 68 ms (parallelism 48.6) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 71 ms (parallelism 48) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 72 ms (parallelism 47.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 71 ms (parallelism 47.9) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 70 ms (parallelism 48.2) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 71 ms (parallelism 48.1) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 69 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 66 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 66 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 70 ms (parallelism 48.2) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 68 ms (parallelism 48.6) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 70 ms (parallelism 48.3) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 69 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 67 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 66 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 70 ms (parallelism 48.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 72 ms (parallelism 46.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 71 ms (parallelism 47.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 71 ms (parallelism 48.2) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 70 ms (parallelism 48.5) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3387 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 197 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 70 ms (parallelism 48.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 70 ms (parallelism 48.6) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1890 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 327 ms (parallelism 35.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 327 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 32 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 32 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 309 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 67 ms (parallelism 18.3) build modules > ./src/app/app.component.ts
     |  | 92 ms (parallelism 17.4) build modules > ./src/app/material/material.module.ts
     |  | 43 ms (parallelism 19.2) build modules > ./src/app/loading.service.ts
     |  | 42 ms (parallelism 19.9) build modules > ./src/app/home/home.component.ts
     |  | 42 ms (parallelism 19.9) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 42 ms (parallelism 19.9) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 42 ms (parallelism 19.9) build modules > ./src/app/news/news.component.ts
     |  | 42 ms (parallelism 19.9) build modules > ./src/app/playground/playground.component.ts
     |  | 48 ms (parallelism 50.9) build modules > ./src/app/news.service.ts
     |  | 71 ms (parallelism 46.9) build modules > ./src/app/menu/menu.component.ts
     |  | 69 ms (parallelism 46) build modules > ./src/app/quiz.service.ts
<i>  | 1003 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7227 ms build modules
+ 104 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1936 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.394026 ms
<t> figure out provided exports: 15.58846 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.048806 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 16.627994 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.548428 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.508642 ms
<t> trace exports usage in graph: 17.185487 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.882552 ms
<t> visitModules: visiting: 5.857593 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.948923 ms
<t> connectChunkGroups: 0.004267 ms
<t> cleanup: 0.003793 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046838 ms
<t> modules: 3.084199 ms
<t> queue: 0.00639 ms
<t> maxSize: 0.041538 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.861107 ms
<t> sort relevant modules: 0.305284 ms
<t> find modules to concatenate: 15.272583 ms
<t> sort concat configurations: 0.05296 ms
<t> create concatenated modules: 10.996788 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 276.956035 ms
<t> optimize asset: polyfills.js: 733.645653 ms
<t> optimize asset: main.js: 5293.873598 ms
<t> optimize js assets: 5431.708014 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 25.867778 ms
<t> optimize css assets: 35.844457 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1936)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3548/4116) entries shared via 224 shared snapshots (689 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 27% (533/1973) entries shared via 27 shared snapshots (93 times referenced)
    Managed files snapshot optimization: 76% (4641/6077) entries shared via 244 shared snapshots (961 times referenced)
    Managed missing snapshot optimization: 83% (5154/6247) entries shared via 313 shared snapshots (877 times referenced)

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

2023-09-28 13:34:55: webpack 5.88.2 compiled in 23132 ms (891107a79799b437)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1241.696336 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 57.876608 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.094208 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.336699 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.709299 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.358863 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.404995 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|/home/kushal/src/angular/angularfifteen/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js': 1.044286 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.009939 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.338258 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.250492 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.130902 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.093755 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.637415 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.479103 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.757188 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.144952 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.574016 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/progress-bar.mjs': 3.641069 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 2.63071 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.40671 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.932917 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.217368 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.258009 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/sample': 3.252952 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/tap.js': 4.490877 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 23.130795 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 12.83029 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 484.000761 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 609.78 kB |               140.85 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 886.60 kB |               168.24 kB

Build at: 2023-09-28T17:34:58.976Z - Hash: 891107a79799b437 - Time: 26486ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.60 kB with a total of 886.60 kB.


Done in 28.47s.
```
Thu Sep 28 01:35:27 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.473
info New version: 0.0.474
Done in 0.13s.
