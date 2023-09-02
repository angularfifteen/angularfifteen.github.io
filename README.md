Fri Sep  1 08:11:44 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.0Gi       3.8Gi       362Mi       9.4Gi        12Gi
Swap:          8.0Gi       5.0Mi       8.0Gi
System Storage
3.1G	.
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

Angular: 16.2.2
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.0
@angular-devkit/build-angular   16.2.0
@angular-devkit/core            16.2.0
@angular-devkit/schematics      16.2.0
@angular/cdk                    16.2.1
@angular/cli                    16.2.0
@angular/material               16.2.1
@schematics/angular             16.2.0
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.54s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001525
Installed version:  1.0.30001524
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001525
Installed version:  1.0.30001525
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.1/angular-webpack/708e49af8a2835c97df3cbcc6df5d3877f619b41.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.1/angular-webpack/708e49af8a2835c97df3cbcc6df5d3877f619b41/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3470.0600640000002 ms
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
    1266 ms (resolving: 66 ms, restoring: 1 ms, integration: 0 ms, building: 1199 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1467 ms (resolving: 53 ms, restoring: 0 ms, integration: 0 ms, building: 1414 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11922 ms (resolving: 53 ms, restoring: 1 ms, integration: 0 ms, building: 11868 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.39913 ms
<t> runtime requirements.chunks: 0.444492 ms
<t> runtime requirements.entries: 1.454557 ms
<t> runtime requirements.modules: 0.027003 ms
<t> runtime requirements.chunks: 0.015766 ms
<t> runtime requirements.entries: 0.226578 ms
<t> finish module profiles: 10.720394 ms
<t> compute affected modules: 0.004 ms
<t> finish modules: 24.380486 ms
<t> report dependency errors and warnings: 12.816085 ms
<t> optimize dependencies: 33.844663 ms
<t> create chunks: 12.258087 ms
<t> compute affected modules with chunk graph: 0.006413 ms
<t> optimize: 55.0339 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 19.319354 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 795.574803 ms
<t> runtime requirements.modules: 0.149335 ms
<t> runtime requirements.chunks: 0.115014 ms
<t> runtime requirements.entries: 0.520031 ms
<t> runtime requirements: 0.984214 ms
<t> hashing: initialize hash: 0.007522 ms
<t> hashing: hash warnings: 0.003528 ms
<t> hashing: sort chunks: 0.051497 ms
<t> hashing: hash runtime modules: 1.087847 ms
<t> hashing: hash chunks: 1.351173 ms
<t> hashing: hash digest: 0.043988 ms
<t> hashing: process full hash modules: 0.152789 ms
<t> hashing: 2.902855 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.071385 ms
<t> module assets: 0.176265 ms
<t> create chunk assets: 3.804071 ms
<t> process assets: 6648.815516 ms

LOG from webpack.Compiler
<t> make hook: 12081.90164 ms
<t> finish make hook: 0.172105 ms
<t> finish compilation: 47.963997 ms
<t> seal compilation: 7574.720024 ms
<t> afterCompile hook: 0.129438 ms
<t> emitAssets: 3.734779 ms
<t> emitRecords: 0.093474 ms
<t> done hook: 332.412361 ms
<t> beginIdle: 0.808082 ms

LOG from webpack.Compilation.ModuleProfile
     | 87 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 45 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 97 ms (parallelism 22.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 62 ms (parallelism 48.7) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 62 ms (parallelism 48.7) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 92 ms (parallelism 44.7) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1273 ms resolve to new modules
<i>  |  | 250 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 250 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 368 ms (parallelism 32.2) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 368 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 198 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 91 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 111 ms (parallelism 15.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 93 ms (parallelism 21) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 110 ms (parallelism 15.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 103 ms (parallelism 16) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 94 ms (parallelism 22.7) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 93 ms (parallelism 23.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 51 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 51 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 50 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 53 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 51 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 51 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 51 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 52 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 52 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 51 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 54 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 54 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 51 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 55 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 54 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 54 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 56 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 54 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 54 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 55 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 57 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 56 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 55 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 56 ms (parallelism 49) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 57 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 56 ms (parallelism 48.9) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 57 ms (parallelism 48.6) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 56 ms (parallelism 48.8) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 57 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 66 ms (parallelism 45.8) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 66 ms (parallelism 45.6) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 74 ms (parallelism 44.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 74 ms (parallelism 44) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 32 ms (parallelism 34.2) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 32 ms (parallelism 33.8) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3106 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 195 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 1359 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 361 ms (parallelism 32.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 361 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 301 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 96 ms (parallelism 11.7) build modules > ./src/app/material/material.module.ts
     |  | 34 ms (parallelism 32.7) build modules > ./src/app/home/home.component.ts
     |  | 34 ms (parallelism 32.7) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 34 ms (parallelism 32.7) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 34 ms (parallelism 32.7) build modules > ./src/app/news/news.component.ts
     |  | 34 ms (parallelism 32.7) build modules > ./src/app/playground/playground.component.ts
     |  | 74 ms (parallelism 42.8) build modules > ./src/app/news.service.ts
     |  | 74 ms (parallelism 43) build modules > ./src/app/menu/menu.component.ts
     |  | 74 ms (parallelism 42.9) build modules > ./src/app/quiz.service.ts
<i>  | 875 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6354 ms build modules
+ 36 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1899 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.742311 ms
<t> figure out provided exports: 13.777671 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.99009 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 27.613572 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.346187 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.48145 ms
<t> trace exports usage in graph: 21.559039 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.768076 ms
<t> visitModules: visiting: 9.738204 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.896286 ms
<t> connectChunkGroups: 0.004148 ms
<t> cleanup: 0.00357 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.116169 ms
<t> modules: 2.868719 ms
<t> queue: 0.005337 ms
<t> maxSize: 0.032542 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.918904 ms
<t> sort relevant modules: 0.186106 ms
<t> find modules to concatenate: 18.146829 ms
<t> sort concat configurations: 0.043738 ms
<t> create concatenated modules: 12.535898 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 250.837296 ms
<t> optimize asset: polyfills.js: 679.333264 ms
<t> optimize asset: main.js: 5326.052978 ms
<t> optimize js assets: 5468.515246 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 17.704504 ms
<t> optimize css assets: 37.649355 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1899)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3554/4116) entries shared via 224 shared snapshots (691 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 28% (553/1973) entries shared via 31 shared snapshots (95 times referenced)
    Managed files snapshot optimization: 76% (4636/6068) entries shared via 244 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 83% (5213/6247) entries shared via 317 shared snapshots (885 times referenced)

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

2023-09-01 20:12:54: webpack 5.88.2 compiled in 23143 ms (c8129a5980ace42a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1264.201947 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 59.045711 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.851376 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.701158 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.623143 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.983678 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.069498 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.122736 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.356083 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.199858 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.229119 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.511912 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.342096 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 4.13175 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 1.40267 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.467274 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.284379 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.746367 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.284353 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.158165 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.059165 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/catchError': 3.131218 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/tap.js': 3.874684 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.789448 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.403923 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 380.926368 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 603.70 kB |               140.54 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 880.51 kB |               167.93 kB

Build at: 2023-09-02T00:12:57.672Z - Hash: c8129a5980ace42a - Time: 26391ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 380.51 kB with a total of 880.51 kB.


Done in 28.53s.
```
Fri Sep  1 08:13:26 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.452
info New version: 0.0.453
Done in 0.13s.
