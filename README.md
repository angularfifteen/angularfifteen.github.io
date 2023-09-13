Wed Sep 13 11:22:05 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.1Gi       4.6Gi       290Mi       8.5Gi        12Gi
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
    

Angular CLI: 16.2.1
Node: 18.17.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.4
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.1
@angular-devkit/build-angular   16.2.1
@angular-devkit/core            16.2.1
@angular-devkit/schematics      16.2.1
@angular/cdk                    16.2.3
@angular/cli                    16.2.1
@angular/material               16.2.3
@schematics/angular             16.2.1
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.51s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001534
Installed version:  1.0.30001532
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001534
Installed version:  1.0.30001534
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.2/angular-webpack/6e225d684af50829894822838e853ad2d17e0b4a.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.2/angular-webpack/6e225d684af50829894822838e853ad2d17e0b4a/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3786.316883 ms
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
    1218 ms (resolving: 68 ms, restoring: 1 ms, integration: 0 ms, building: 1149 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1475 ms (resolving: 53 ms, restoring: 0 ms, integration: 0 ms, building: 1422 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11943 ms (resolving: 54 ms, restoring: 1 ms, integration: 0 ms, building: 11888 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.408793 ms
<t> runtime requirements.chunks: 0.398407 ms
<t> runtime requirements.entries: 1.408154 ms
<t> runtime requirements.modules: 0.026083 ms
<t> runtime requirements.chunks: 0.016657 ms
<t> runtime requirements.entries: 0.232776 ms
<t> finish module profiles: 10.624935 ms
<t> compute affected modules: 0.00318 ms
<t> finish modules: 25.980732 ms
<t> report dependency errors and warnings: 12.713106 ms
<t> optimize dependencies: 34.474807 ms
<t> create chunks: 11.410424 ms
<t> compute affected modules with chunk graph: 0.004353 ms
<t> optimize: 53.97051 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 18.240444 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 926.722346 ms
<t> runtime requirements.modules: 0.148843 ms
<t> runtime requirements.chunks: 0.11482 ms
<t> runtime requirements.entries: 0.530594 ms
<t> runtime requirements: 1.203807 ms
<t> hashing: initialize hash: 0.009208 ms
<t> hashing: hash warnings: 0.003756 ms
<t> hashing: sort chunks: 0.100772 ms
<t> hashing: hash runtime modules: 1.036667 ms
<t> hashing: hash chunks: 1.384208 ms
<t> hashing: hash digest: 0.041304 ms
<t> hashing: process full hash modules: 0.140194 ms
<t> hashing: 3.26215 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062805 ms
<t> module assets: 0.252757 ms
<t> create chunk assets: 4.388044 ms
<t> process assets: 6735.7873469999995 ms

LOG from webpack.Compiler
<t> make hook: 12087.996929 ms
<t> finish make hook: 0.153864 ms
<t> finish compilation: 49.364406 ms
<t> seal compilation: 7791.913335 ms
<t> afterCompile hook: 0.1666 ms
<t> emitAssets: 3.939637 ms
<t> emitRecords: 0.067327 ms
<t> done hook: 336.141629 ms
<t> beginIdle: 0.764559 ms

LOG from webpack.Compilation.ModuleProfile
     | 81 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 62 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 108 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 108 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 47 ms (parallelism 26.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 107 ms (parallelism 39.2) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1040 ms resolve to new modules
     | 96 ms (parallelism 12.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    114 ms resolve to existing modules
<i>  |  | 251 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 251 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 358 ms (parallelism 33.3) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 358 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 192 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 86 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 112 ms (parallelism 12.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 138 ms (parallelism 13.4) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 109 ms (parallelism 12.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 125 ms (parallelism 14.6) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 41 ms (parallelism 28.4) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 40 ms (parallelism 27.8) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 65 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 66 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 65 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 66 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 68 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 67 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 66 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 66 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 68 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 66 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 69 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 69 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 68 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 71 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 69 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 70 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 69 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 70 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 71 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 70 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 72 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 71 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 71 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 71 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 71 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 73 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 72 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 74 ms (parallelism 41.9) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 75 ms (parallelism 41.7) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 75 ms (parallelism 41.8) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 76 ms (parallelism 41.5) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 95 ms (parallelism 38.7) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 96 ms (parallelism 37.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 94 ms (parallelism 39.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 95 ms (parallelism 38.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3554 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 187 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 93 ms (parallelism 39.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 93 ms (parallelism 39.8) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1957 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 351 ms (parallelism 33.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 351 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 311 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 103 ms (parallelism 11.2) build modules > ./src/app/app.component.ts
     |  | 124 ms (parallelism 12.1) build modules > ./src/app/material/material.module.ts
     |  | 96 ms (parallelism 37.2) build modules > ./src/app/news.service.ts
     |  | 96 ms (parallelism 37.2) build modules > ./src/app/quiz.service.ts
     |  | 94 ms (parallelism 39.6) build modules > ./src/app/menu/menu.component.ts
<i>  | 1056 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7553 ms build modules
+ 97 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1931 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 5.785104 ms
<t> figure out provided exports: 11.495935 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 1.955025 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.032348 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.724068 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.534233 ms
<t> trace exports usage in graph: 22.801993 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 7.872914 ms
<t> visitModules: visiting: 9.55108 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.690335 ms
<t> connectChunkGroups: 0.004818 ms
<t> cleanup: 0.004354 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038771 ms
<t> modules: 2.645637 ms
<t> queue: 0.017697 ms
<t> maxSize: 0.02629 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.620151 ms
<t> sort relevant modules: 0.160928 ms
<t> find modules to concatenate: 19.76432 ms
<t> sort concat configurations: 0.069763 ms
<t> create concatenated modules: 13.441437 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 269.849237 ms
<t> optimize asset: polyfills.js: 644.679601 ms
<t> optimize asset: main.js: 5432.2554 ms
<t> optimize js assets: 5581.072066 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 18.925155 ms
<t> optimize css assets: 41.700117 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1931)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3523/4116) entries shared via 223 shared snapshots (694 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 26% (516/1973) entries shared via 25 shared snapshots (96 times referenced)
    Managed files snapshot optimization: 76% (4641/6077) entries shared via 244 shared snapshots (961 times referenced)
    Managed missing snapshot optimization: 83% (5154/6247) entries shared via 311 shared snapshots (877 times referenced)

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

2023-09-13 11:23:13: webpack 5.88.2 compiled in 23681 ms (4c67d30772b75bd2)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1290.63752 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 91.32029 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.22824 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.845933 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.17157 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.734085 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.125442 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/http.mjs': 1.219069 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 3.20815 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|/home/kushal/src/angular/angularfifteen/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js': 1.177122 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.989509 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 2.061536 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 6.50259 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.49232 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.0641 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.128244 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 3.31181 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 2.971178 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 4.189934 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.799022 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 21.305103 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 3.15458 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/core.mjs': 1.029175 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.547391 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.196704 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 2.077873 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.439897 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.724706 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/throttle.js': 4.476802 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.977214 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.827696 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 431.659699 ms
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

Build at: 2023-09-13T15:23:16.727Z - Hash: 4c67d30772b75bd2 - Time: 26755ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 381.15 kB with a total of 881.15 kB.


Done in 28.81s.
```
