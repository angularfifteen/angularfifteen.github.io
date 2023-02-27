Sun Feb 26 08:34:51 PM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.4Gi       3.1Gi       808Mi       9.8Gi        11Gi
Swap:          8.0Gi        59Mi       7.9Gi
System Storage
1.2G	.
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
    

Angular CLI: 15.1.6
Node: 18.14.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.1.5
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1501.6
@angular-devkit/build-angular   15.1.6
@angular-devkit/core            15.1.6
@angular-devkit/schematics      15.1.6
@angular/cli                    15.1.6
@schematics/angular             15.1.6
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.70s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001458
Installed versions: 1.0.30001457, 1.0.30001458
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001458
Installed version:  1.0.30001458
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.2.0/angular-webpack/24d121dcf1ef02384a9bdce0479d9b763daf121c.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.2.0/angular-webpack/24d121dcf1ef02384a9bdce0479d9b763daf121c/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 10.359236 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 601 KiB {179} [emitted] (name: main)
asset styles.css 270 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 602 KiB = runtime.js 906 bytes main.js 601 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 271 KiB = runtime.js 906 bytes styles.css 270 KiB
chunk {179} (runtime: runtime) main.js (main) 4.7 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 1 modules [321] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 192 modules [183] 4.66 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1298 ms (resolving: 83 ms, restoring: 1 ms, integration: 0 ms, building: 1214 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1316 ms (resolving: 83 ms, restoring: 1 ms, integration: 0 ms, building: 1232 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11888 ms (resolving: 84 ms, restoring: 1 ms, integration: 0 ms, building: 11803 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.423107 ms
<t> runtime requirements.chunks: 0.443902 ms
<t> runtime requirements.entries: 1.395612 ms
<t> runtime requirements.modules: 0.025201 ms
<t> runtime requirements.chunks: 0.016132 ms
<t> runtime requirements.entries: 0.165042 ms
<t> finish module profiles: 11.292936 ms
<t> compute affected modules: 0.003069 ms
<t> finish modules: 24.117717 ms
<t> report dependency errors and warnings: 11.328526 ms
<t> optimize dependencies: 26.634878 ms
<t> create chunks: 7.60488 ms
<t> compute affected modules with chunk graph: 0.004316 ms
<t> optimize: 49.987572 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 20.755967 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 768.062707 ms
<t> runtime requirements.modules: 0.128168 ms
<t> runtime requirements.chunks: 0.065855 ms
<t> runtime requirements.entries: 0.473018 ms
<t> runtime requirements: 0.860087 ms
<t> hashing: initialize hash: 0.006971 ms
<t> hashing: hash warnings: 0.003375 ms
<t> hashing: sort chunks: 0.060617 ms
<t> hashing: hash runtime modules: 1.134449 ms
<t> hashing: hash chunks: 1.423238 ms
<t> hashing: hash digest: 0.02649 ms
<t> hashing: process full hash modules: 0.153545 ms
<t> hashing: 3.018573 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.070246 ms
<t> module assets: 0.185533 ms
<t> create chunk assets: 3.661533 ms
<t> process assets: 6678.149538 ms

LOG from webpack.Compiler
<t> make hook: 12111.859522 ms
<t> finish make hook: 0.107037 ms
<t> finish compilation: 46.785851 ms
<t> seal compilation: 7561.310022 ms
<t> afterCompile hook: 0.191394 ms
<t> emitAssets: 4.618901 ms
<t> emitRecords: 0.06162 ms
<t> done hook: 368.328641 ms
<t> beginIdle: 0.777001 ms

LOG from webpack.Compilation.ModuleProfile
     | 89 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 46 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 89 ms (parallelism 11) resolve to new modules > ./src/app/loading.service.ts
     | 89 ms (parallelism 11) resolve to new modules > ./src/app/loading/loading.component.ts
     | 72 ms (parallelism 26.3) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
    1145 ms resolve to new modules
<i>  |  | 214 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 109 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 86 ms (parallelism 17.9) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 108 ms (parallelism 11.4) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 108 ms (parallelism 11.5) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 101 ms (parallelism 12.4) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 72 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 72 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 71 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 72 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 73 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 72 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 74 ms (parallelism 41.2) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 74 ms (parallelism 41.2) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 74 ms (parallelism 41.2) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 75 ms (parallelism 41.2) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 75 ms (parallelism 41.2) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 75 ms (parallelism 41.1) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 75 ms (parallelism 41.2) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 76 ms (parallelism 40.9) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 75 ms (parallelism 41.1) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 76 ms (parallelism 41) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 76 ms (parallelism 40.9) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 78 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 88 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 75 ms (parallelism 41.1) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 77 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 77 ms (parallelism 40.9) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 77 ms (parallelism 40.7) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 77 ms (parallelism 40.9) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 78 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 79 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 89 ms (parallelism 38.8) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 89 ms (parallelism 38.7) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 88 ms (parallelism 38.8) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 89 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 89 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 87 ms (parallelism 40.6) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 87 ms (parallelism 39.8) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 86 ms (parallelism 41.7) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 87 ms (parallelism 40.6) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 3691 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 202 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 82 ms (parallelism 40.9) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 82 ms (parallelism 40.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2099 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 205 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 205 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 336 ms (parallelism 35.2) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 336 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 306 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 106 ms (parallelism 11.1) build modules > ./src/app/app-routing.module.ts
     |  | 99 ms (parallelism 11.4) build modules > ./src/app/material/material.module.ts
<i>  | 751 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 333 ms (parallelism 35.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 333 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 32 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 32 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w> 7451 ms build modules
+ 142 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (889 real resolves with 0 cached but invalid, 1935 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.263948 ms
<t> figure out provided exports: 10.620997 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 6.126526 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 19.185454 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.497718 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.402842 ms
<t> trace exports usage in graph: 15.321205 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.913257 ms
<t> visitModules: visiting: 5.966254 ms
    442 queue items processed (200 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.050459 ms
<t> connectChunkGroups: 0.00402 ms
<t> cleanup: 0.003691 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046198 ms
<t> modules: 3.088705 ms
<t> queue: 0.005776 ms
<t> maxSize: 0.035914 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.85888 ms
<t> sort relevant modules: 0.200128 ms
<t> find modules to concatenate: 19.567543 ms
<t> sort concat configurations: 0.059027 ms
<t> create concatenated modules: 11.502077 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 276.40247 ms
<t> optimize asset: polyfills.js: 736.502891 ms
<t> optimize asset: main.js: 5129.424073 ms
<t> optimize js assets: 5266.784205 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 24.475704 ms
<t> optimize css assets: 41.841297 ms

LOG from webpack.FileSystemInfo
    1203 new snapshots created
    0% root snapshot uncached (0 / 1935)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1091 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5135/6311) entries shared via 12 shared snapshots (809 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4050/4654) entries shared via 259 shared snapshots (790 times referenced)
    Managed items info in cache: 178 items
    Managed items snapshot optimization: 32% (677/2090) entries shared via 36 shared snapshots (116 times referenced)
    Managed files snapshot optimization: 77% (4938/6416) entries shared via 266 shared snapshots (981 times referenced)
    Managed missing snapshot optimization: 84% (5729/6857) entries shared via 336 shared snapshots (920 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet
SassWarning: The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
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

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
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

2023-02-26 20:35:59: webpack 5.75.0 compiled in 24715 ms (e51497dd7486bcf4)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 775.337419 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 38.783254 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1634 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.271588 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 2.61875 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.294621 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 1.320812 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 1.865358 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/input.mjs': 1.528556 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/autocomplete.mjs': 2.044188 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 2.780044 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/radio.mjs': 1.333891 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.178315 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 1.338456 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 3.705388 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.414376 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/table.mjs': 2.406126 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/core.mjs': 1.086176 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.640679 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 7.114026 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.113799 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/platform.mjs': 3.928933 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 21.651102 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 12.668161 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 449.048357 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1634 items, 1 files, 71 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 601.00 kB |               139.95 kB
styles.css          | styles        | 270.23 kB |                17.96 kB
polyfills.js        | polyfills     |  33.10 kB |                10.64 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 905.21 kB |               169.05 kB

Build at: 2023-02-27T01:36:01.938Z - Hash: e51497dd7486bcf4 - Time: 27351ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 405.21 kB with a total of 905.21 kB.


Done in 29.57s.
```
Sun Feb 26 08:36:31 PM EST 2023
yarn version v1.22.19
info Current version: 0.0.299
info New version: 0.0.300
Done in 0.13s.
