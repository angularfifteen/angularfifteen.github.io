Wed Nov  1 07:15:09 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.7Gi       3.6Gi       282Mi         9Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
2.5G	.
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
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
```
Latest version:     1.0.30001559
Installed version:  1.0.30001559
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001559
Installed version:  1.0.30001559
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.9/angular-webpack/86e723ab230372d5d32f413953c65982fc79752d.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.9/angular-webpack/86e723ab230372d5d32f413953c65982fc79752d/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3363.767622 ms
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
    1773 ms (resolving: 40 ms, restoring: 0 ms, integration: 0 ms, building: 1733 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1954 ms (resolving: 34 ms, restoring: 1 ms, integration: 0 ms, building: 1919 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11157 ms (resolving: 34 ms, restoring: 1 ms, integration: 0 ms, building: 11122 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.420274 ms
<t> runtime requirements.chunks: 0.430248 ms
<t> runtime requirements.entries: 1.457895 ms
<t> runtime requirements.modules: 0.027608 ms
<t> runtime requirements.chunks: 0.01499 ms
<t> runtime requirements.entries: 0.159322 ms
<t> finish module profiles: 6.943715 ms
<t> compute affected modules: 0.003657 ms
<t> finish modules: 22.440752 ms
<t> report dependency errors and warnings: 9.087001 ms
<t> optimize dependencies: 23.94916 ms
<t> create chunks: 9.683436 ms
<t> compute affected modules with chunk graph: 0.004811 ms
<t> optimize: 40.646935 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 15.184463 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 743.991164 ms
<t> runtime requirements.modules: 0.150025 ms
<t> runtime requirements.chunks: 0.064404 ms
<t> runtime requirements.entries: 0.581208 ms
<t> runtime requirements: 1.009006 ms
<t> hashing: initialize hash: 0.007588 ms
<t> hashing: hash warnings: 0.003734 ms
<t> hashing: sort chunks: 0.056196 ms
<t> hashing: hash runtime modules: 1.131859 ms
<t> hashing: hash chunks: 1.329565 ms
<t> hashing: hash digest: 0.032365 ms
<t> hashing: process full hash modules: 0.163956 ms
<t> hashing: 2.917975 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.07699 ms
<t> module assets: 0.159451 ms
<t> create chunk assets: 3.677866 ms
<t> process assets: 6061.61915 ms

LOG from webpack.Compiler
<t> make hook: 11272.977264 ms
<t> finish make hook: 0.159561 ms
<t> finish compilation: 38.515054 ms
<t> seal compilation: 6904.678177 ms
<t> afterCompile hook: 0.082852 ms
<t> emitAssets: 3.645511 ms
<t> emitRecords: 0.075002 ms
<t> done hook: 250.416348 ms
<t> beginIdle: 0.379428 ms

LOG from webpack.Compilation.ModuleProfile
     | 66 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 35 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 97 ms (parallelism 18.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 67 ms (parallelism 51.7) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1377 ms resolve to new modules
<i>  |  | 331 ms (parallelism 5.8) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 331 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 308 ms (parallelism 36.1) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 308 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 289 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 85 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 106 ms (parallelism 17.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 118 ms (parallelism 14.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 120 ms (parallelism 13.8) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 111 ms (parallelism 14.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 57 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 61 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 57 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 60 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 59 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 59 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 58 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 59 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 57 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 57 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 58 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 58 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 57 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 58 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 57 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 57 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 61 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 63 ms (parallelism 48.4) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 63 ms (parallelism 48.6) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 62 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 62 ms (parallelism 48.9) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 61 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 57 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 59 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 59 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 62 ms (parallelism 48.8) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 60 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 61 ms (parallelism 49.1) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 62 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 59 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 62 ms (parallelism 48.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 59 ms (parallelism 48.5) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 59 ms (parallelism 49) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 59 ms (parallelism 51.4) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 57 ms (parallelism 51.8) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3076 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 285 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 1337 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 303 ms (parallelism 36.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 303 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 379 ms (parallelism 5.7) build modules > ./src/main.ts
     |  | 116 ms (parallelism 10) build modules > ./src/app/material/material.module.ts
     |  | 41 ms (parallelism 50.9) build modules > ./src/app/news.service.ts
     |  | 52 ms (parallelism 49.6) build modules > ./src/app/menu/menu.component.ts
     |  | 57 ms (parallelism 47.7) build modules > ./src/app/quiz.service.ts
<i>  | 858 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6237 ms build modules
+ 21 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1898 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.268961 ms
<t> figure out provided exports: 13.498193 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.934536 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.449031 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 9.503903 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.555523 ms
<t> trace exports usage in graph: 13.494024 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.423096 ms
<t> visitModules: visiting: 5.293605 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.375576 ms
<t> connectChunkGroups: 0.004674 ms
<t> cleanup: 0.003653 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038732 ms
<t> modules: 2.914672 ms
<t> queue: 0.006799 ms
<t> maxSize: 0.040341 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.380787 ms
<t> sort relevant modules: 0.195606 ms
<t> find modules to concatenate: 13.575195 ms
<t> sort concat configurations: 0.039319 ms
<t> create concatenated modules: 9.705183 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 172.685702 ms
<t> optimize asset: polyfills.js: 588.325433 ms
<t> optimize asset: main.js: 4685.966421 ms
<t> optimize js assets: 4823.14925 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 21.758907 ms
<t> optimize css assets: 27.48991 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1898)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3543/4116) entries shared via 225 shared snapshots (690 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 28% (547/1973) entries shared via 28 shared snapshots (95 times referenced)
    Managed files snapshot optimization: 76% (4630/6064) entries shared via 243 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 84% (5217/6247) entries shared via 317 shared snapshots (885 times referenced)

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

2023-11-01 07:16:05: webpack 5.88.2 compiled in 21552 ms (a782b7b5e4706aed)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1115.683096 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 44.147194 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.046462 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.856478 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.335409 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.094562 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.270152 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.019617 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.885425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/toolbar.mjs': 1.561236 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.132285 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.879875 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.67676 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.204775 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.055647 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.570112 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.119317 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.011002 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/debounceTime': 3.116159 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/Notification': 3.806415 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.149872 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.750134 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 418.81779 ms
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

Build at: 2023-11-01T11:16:08.117Z - Hash: a782b7b5e4706aed - Time: 24171ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.63 kB with a total of 886.63 kB.


Done in 26.23s.
```
