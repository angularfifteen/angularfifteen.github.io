Tue Feb 14 11:27:42 AM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.5Gi       3.4Gi       807Mi       8.4Gi        10Gi
Swap:          8.0Gi       1.5Gi       6.5Gi
System Storage
1.1G	.
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
    

Angular CLI: 15.1.5
Node: 18.14.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.1.4
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1501.5
@angular-devkit/build-angular   15.1.5
@angular-devkit/core            15.1.5
@angular-devkit/schematics      15.1.5
@angular/cli                    15.1.5
@schematics/angular             15.1.5
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.76s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001452
Installed version:  1.0.30001451
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001452
Installed version:  1.0.30001452
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.1.5/angular-webpack/defd59235e1ebcde1317c972f66a84ee916577d2.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.1.5/angular-webpack/defd59235e1ebcde1317c972f66a84ee916577d2/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 10.974745 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 268 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 269 KiB = runtime.js 906 bytes styles.css 268 KiB
chunk {179} (runtime: runtime) main.js (main) 4.67 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 1 modules [321] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 192 modules [183] 4.64 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1217 ms (resolving: 39 ms, restoring: 1 ms, integration: 0 ms, building: 1177 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1353 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 1312 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11938 ms (resolving: 40 ms, restoring: 1 ms, integration: 0 ms, building: 11897 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.407435 ms
<t> runtime requirements.chunks: 0.428727 ms
<t> runtime requirements.entries: 1.51544 ms
<t> runtime requirements.modules: 0.024713 ms
<t> runtime requirements.chunks: 0.018025 ms
<t> runtime requirements.entries: 0.161475 ms
<t> finish module profiles: 11.397925 ms
<t> compute affected modules: 0.003398 ms
<t> finish modules: 21.090875 ms
<t> report dependency errors and warnings: 12.75269 ms
<t> optimize dependencies: 38.271801 ms
<t> create chunks: 11.500632 ms
<t> compute affected modules with chunk graph: 0.006422 ms
<t> optimize: 60.551833 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.863243 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 749.913814 ms
<t> runtime requirements.modules: 0.165594 ms
<t> runtime requirements.chunks: 0.117308 ms
<t> runtime requirements.entries: 0.537034 ms
<t> runtime requirements: 1.008765 ms
<t> hashing: initialize hash: 0.008678 ms
<t> hashing: hash warnings: 0.004234 ms
<t> hashing: sort chunks: 0.049431 ms
<t> hashing: hash runtime modules: 1.120652 ms
<t> hashing: hash chunks: 1.388036 ms
<t> hashing: hash digest: 0.043338 ms
<t> hashing: process full hash modules: 0.152408 ms
<t> hashing: 2.967099 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.071482 ms
<t> module assets: 0.166312 ms
<t> create chunk assets: 3.88037 ms
<t> process assets: 6522.570783 ms

LOG from webpack.Compiler
<t> make hook: 12138.190534 ms
<t> finish make hook: 0.125423 ms
<t> finish compilation: 45.288987 ms
<t> seal compilation: 7410.265119 ms
<t> afterCompile hook: 0.256128 ms
<t> emitAssets: 5.779101 ms
<t> emitRecords: 0.094877 ms
<t> done hook: 356.188641 ms
<t> beginIdle: 0.777239 ms

LOG from webpack.Compilation.ModuleProfile
     | 71 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 56 ms (parallelism 4.5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 93 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 93 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 31 ms (parallelism 29.9) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
    916 ms resolve to new modules
     | 81 ms (parallelism 12) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
    100 ms resolve to existing modules
<i>  |  | 206 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 102 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 130 ms (parallelism 12.5) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 117 ms (parallelism 11.9) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 116 ms (parallelism 11.9) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 125 ms (parallelism 12.6) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 78 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 72 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 72 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 72 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 75 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 73 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 72 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 73 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 73 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 73 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 75 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 74 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 76 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 76 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 75 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 76 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 76 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 77 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 76 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 76 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 79 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 77 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 77 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 77 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 78 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 78 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 79 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 79 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 79 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 79 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 80 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 100 ms (parallelism 35.8) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 85 ms (parallelism 38.3) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 100 ms (parallelism 36.2) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 99 ms (parallelism 36.3) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 3771 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 197 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 99 ms (parallelism 36.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 99 ms (parallelism 36.2) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2064 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 224 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 224 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 372 ms (parallelism 32) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 372 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 369 ms (parallelism 32.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 369 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 34 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 34 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 322 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 104 ms (parallelism 12) build modules > ./src/app/app-routing.module.ts
     |  | 92 ms (parallelism 12) build modules > ./src/app/app.component.ts
     |  | 92 ms (parallelism 12.1) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 37 ms (parallelism 13.6) build modules > ./src/app/material/material.module.ts
     |  | 38 ms (parallelism 28) build modules > ./src/app/news.service.ts
     |  | 38 ms (parallelism 28) build modules > ./src/app/quiz.service.ts
     |  | 37 ms (parallelism 28.7) build modules > ./src/app/menu/menu.component.ts
<i>  | 862 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7700 ms build modules
+ 110 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (890 real resolves with 0 cached but invalid, 1954 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.429198 ms
<t> figure out provided exports: 11.143466 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.126401 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.36399 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.954101 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.419011 ms
<t> trace exports usage in graph: 23.360152 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 7.095961 ms
<t> visitModules: visiting: 8.762939 ms
    442 queue items processed (200 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 8.92825 ms
<t> connectChunkGroups: 0.003927 ms
<t> cleanup: 0.002613 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034425 ms
<t> modules: 2.842109 ms
<t> queue: 0.004443 ms
<t> maxSize: 0.030535 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.80468 ms
<t> sort relevant modules: 0.173115 ms
<t> find modules to concatenate: 19.242262 ms
<t> sort concat configurations: 0.060391 ms
<t> create concatenated modules: 16.909242 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 266.917723 ms
<t> optimize asset: polyfills.js: 722.444164 ms
<t> optimize asset: main.js: 5087.775853 ms
<t> optimize js assets: 5234.068312 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 19.630945 ms
<t> optimize css assets: 41.639686 ms

LOG from webpack.FileSystemInfo
    1204 new snapshots created
    0% root snapshot uncached (0 / 1954)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1094 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5142/6320) entries shared via 12 shared snapshots (810 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4052/4665) entries shared via 259 shared snapshots (791 times referenced)
    Managed items info in cache: 197 items
    Managed items snapshot optimization: 33% (689/2119) entries shared via 41 shared snapshots (124 times referenced)
    Managed files snapshot optimization: 77% (4954/6430) entries shared via 267 shared snapshots (983 times referenced)
    Managed missing snapshot optimization: 85% (5873/6918) entries shared via 305 shared snapshots (1038 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet
SassWarning: The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:189:37)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:138:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:233:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:598:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:189:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:138:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:233:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-02-14 11:28:32: webpack 5.75.0 compiled in 24496 ms (defcc71d35b59238)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 821.402252 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 34.26459 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1635 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.300878 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.816078 ms
<w> [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item: No serializer registered for SassWarning
<w> while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> Array { 1 items } -> webpack/lib/ModuleWarning -> SassWarning
    [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': Error: No serializer registered for SassWarning
    while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> Array { 1 items } -> webpack/lib/ModuleWarning -> SassWarning
        at ObjectMiddleware.getSerializerFor (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:237:22)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:465:23)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at ModuleWarning.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/ModuleWarning.js:45:3)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at ArraySerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ArraySerializer.js:10:29)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Module.js:988:3)
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1374:9)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at PackContentItems.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/PackFileCacheStrategy.js:625:6)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at ObjectMiddleware.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:539:5)
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:525:12
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/SerializerMiddleware.js:106:11
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/memoize.js:22:13
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/SerializerMiddleware.js:102:14
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/memoize.js:22:13
        at serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/FileMiddleware.js:129:21)
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle|build time': 1.426105 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 2.288689 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.210297 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 1.83715 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 1.697037 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/input.mjs': 1.433304 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/autocomplete.mjs': 1.877559 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 2.63476 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/radio.mjs': 1.294664 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.124734 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 1.288746 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 3.490647 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.276149 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/table.mjs': 2.695329 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/core.mjs': 1.051722 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.645536 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 7.511633 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.108379 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/scrolling.mjs': 1.278153 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/a11y.mjs': 1.022937 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.473668 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/throwIfEmpty.js': 3.512634 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/keycodes.mjs': 4.889981 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 24.069456 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.675219 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 469.969209 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1635 items, 1 files, 71 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 597.65 kB |               139.04 kB
styles.css          | styles        | 268.39 kB |                17.74 kB
polyfills.js        | polyfills     |  33.07 kB |                10.67 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.00 kB |               167.95 kB

Build at: 2023-02-14T16:28:34.692Z - Hash: defcc71d35b59238 - Time: 27151ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.00 kB with a total of 900.00 kB.


Done in 29.32s.
```
Tue Feb 14 11:29:03 AM EST 2023
yarn version v1.22.19
info Current version: 0.0.293
info New version: 0.0.294
Done in 0.14s.
