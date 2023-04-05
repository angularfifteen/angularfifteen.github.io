Wed Apr  5 09:43:29 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.1Gi       3.4Gi       592Mi       9.8Gi        12Gi
Swap:          8.0Gi       7.0Mi       8.0Gi
System Storage
3.3G	.
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
    

Angular CLI: 15.2.4
Node: 18.15.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.2.5
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1502.4
@angular-devkit/build-angular   15.2.4
@angular-devkit/core            15.2.4
@angular-devkit/schematics      15.2.4
@angular/cli                    15.2.4
@schematics/angular             15.2.4
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.79s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001474
Installed version:  1.0.30001474
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001474
Installed version:  1.0.30001474
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.2.5/angular-webpack/17a0a1c82c76fd902a027aa83367d4ef1f873ca5.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.2.5/angular-webpack/17a0a1c82c76fd902a027aa83367d4ef1f873ca5/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 11.727648 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 602 KiB {179} [emitted] (name: main)
asset styles.css 270 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 603 KiB = runtime.js 906 bytes main.js 602 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 271 KiB = runtime.js 906 bytes styles.css 270 KiB
chunk {179} (runtime: runtime) main.js (main) 4.7 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 1 modules [321] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 192 modules [183] 4.67 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1405 ms (resolving: 48 ms, restoring: 1 ms, integration: 0 ms, building: 1356 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1688 ms (resolving: 48 ms, restoring: 1 ms, integration: 0 ms, building: 1639 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    14820 ms (resolving: 48 ms, restoring: 1 ms, integration: 0 ms, building: 14771 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.609687 ms
<t> runtime requirements.chunks: 0.60961 ms
<t> runtime requirements.entries: 3.054311 ms
<t> runtime requirements.modules: 0.04308 ms
<t> runtime requirements.chunks: 0.026278 ms
<t> runtime requirements.entries: 0.306861 ms
<t> finish module profiles: 21.712981 ms
<t> compute affected modules: 0.007513 ms
<t> finish modules: 41.207358 ms
<t> report dependency errors and warnings: 24.778691 ms
<t> optimize dependencies: 60.648996 ms
<t> create chunks: 15.448252 ms
<t> compute affected modules with chunk graph: 0.009756 ms
<t> optimize: 70.037807 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 24.540591 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1873.236202 ms
<t> runtime requirements.modules: 0.585463 ms
<t> runtime requirements.chunks: 0.157213 ms
<t> runtime requirements.entries: 1.178977 ms
<t> runtime requirements: 2.437155 ms
<t> hashing: initialize hash: 0.011887 ms
<t> hashing: hash warnings: 0.006037 ms
<t> hashing: sort chunks: 0.10394 ms
<t> hashing: hash runtime modules: 2.634644 ms
<t> hashing: hash chunks: 2.402673 ms
<t> hashing: hash digest: 0.066577 ms
<t> hashing: process full hash modules: 0.57393 ms
<t> hashing: 6.342465 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.230752 ms
<t> module assets: 0.40451 ms
<t> create chunk assets: 8.591713 ms
<t> process assets: 9029.545131 ms

LOG from webpack.Compiler
<t> make hook: 15046.871024 ms
<t> finish make hook: 0.125853 ms
<t> finish compilation: 87.795313 ms
<t> seal compilation: 11094.48304 ms
<t> afterCompile hook: 0.132426 ms
<t> emitAssets: 8.221708 ms
<t> emitRecords: 0.096233 ms
<t> done hook: 379.550599 ms
<t> beginIdle: 0.35532 ms

LOG from webpack.Compilation.ModuleProfile
     | 76 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 188 ms (parallelism 4.3) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 96 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 96 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 41 ms (parallelism 33.1) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 67 ms (parallelism 40) resolve to new modules > ./src/app/quiz.service.ts
    1463 ms resolve to new modules
     | 85 ms (parallelism 12) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
    115 ms resolve to existing modules
<i>  |  | 251 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 142 ms (parallelism 13.1) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 125 ms (parallelism 12.5) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 122 ms (parallelism 12.6) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 133 ms (parallelism 13.8) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 33 ms (parallelism 37.2) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 32 ms (parallelism 36.8) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 76 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 76 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 76 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 77 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 79 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 77 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 76 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 77 ms (parallelism 40.7) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 79 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 77 ms (parallelism 40.8) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 80 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 80 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 79 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 81 ms (parallelism 40.4) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 80 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 80 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 81 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 82 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 81 ms (parallelism 40.4) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 82 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 83 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 84 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 82 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 84 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 83 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 83 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 84 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 84 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 84 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 85 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 85 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 119 ms (parallelism 34.8) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 116 ms (parallelism 36.5) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 118 ms (parallelism 35.6) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 114 ms (parallelism 37.1) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 4025 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 224 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 114 ms (parallelism 37) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 114 ms (parallelism 37) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2464 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 279 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 279 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 464 ms (parallelism 31.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 464 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 378 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 112 ms (parallelism 11.9) build modules > ./src/app/app-routing.module.ts
     |  | 95 ms (parallelism 12) build modules > ./src/app/app.component.ts
     |  | 112 ms (parallelism 12.7) build modules > ./src/app/material/material.module.ts
     |  | 49 ms (parallelism 30.9) build modules > ./src/app/news.service.ts
     |  | 48 ms (parallelism 32) build modules > ./src/app/menu/menu.component.ts
     |  | 44 ms (parallelism 30) build modules > ./src/app/quiz.service.ts
<i>  | 1020 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 461 ms (parallelism 31.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 461 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 39 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 39 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w> 8757 ms build modules
+ 152 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (889 real resolves with 0 cached but invalid, 1943 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.999589 ms
<t> figure out provided exports: 22.232582 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 3.83205 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 15.988356 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 22.432345 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.893098 ms
<t> trace exports usage in graph: 36.520601 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 9.38373 ms
<t> visitModules: visiting: 11.907304 ms
    444 queue items processed (200 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 12.146801 ms
<t> connectChunkGroups: 0.006255 ms
<t> cleanup: 0.005621 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.095279 ms
<t> modules: 4.722386 ms
<t> queue: 0.014223 ms
<t> maxSize: 0.103843 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.192741 ms
<t> sort relevant modules: 0.228894 ms
<t> find modules to concatenate: 26.229159 ms
<t> sort concat configurations: 0.054252 ms
<t> create concatenated modules: 16.721486 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 650.12602 ms
<t> optimize asset: polyfills.js: 1368.1224240000001 ms
<t> optimize asset: main.js: 7435.863739 ms
<t> optimize js assets: 7771.1380229999995 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 26.707745 ms
<t> optimize css assets: 51.904273 ms

LOG from webpack.FileSystemInfo
    1203 new snapshots created
    0% root snapshot uncached (0 / 1943)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1091 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5135/6311) entries shared via 12 shared snapshots (809 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4045/4654) entries shared via 259 shared snapshots (786 times referenced)
    Managed items info in cache: 178 items
    Managed items snapshot optimization: 32% (680/2094) entries shared via 37 shared snapshots (120 times referenced)
    Managed files snapshot optimization: 77% (4938/6424) entries shared via 266 shared snapshots (981 times referenced)
    Managed missing snapshot optimization: 83% (5722/6857) entries shared via 334 shared snapshots (915 times referenced)

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

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:600:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:189:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:138:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:233:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-04-05 09:44:38: webpack 5.76.1 compiled in 32404 ms (9ae5c411304d6c7d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 854.207359 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 30.869587 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1634 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.523953 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.270152 ms
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
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1375:9)
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 2.359978 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 1.35843 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 1.851007 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/input.mjs': 1.43398 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/autocomplete.mjs': 1.999201 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 6.139357 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 1.251927 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/radio.mjs': 1.669678 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.12385 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/slider.mjs': 1.010035 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.418105 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.215408 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 2.214021 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 2.376263 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 4.656189 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.429884 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/table.mjs': 3.284808 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 4.274016 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.228598 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.133234 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.278261 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.030219 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/observable/combineLatest.js': 7.485729 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/icon.mjs': 7.796644 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 24.091619 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 11.23679 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 453.996676 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1634 items, 1 files, 72 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 602.19 kB |               139.79 kB
styles.css          | styles        | 270.23 kB |                17.96 kB
polyfills.js        | polyfills     |  33.10 kB |                10.64 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 906.41 kB |               168.89 kB

Build at: 2023-04-05T13:44:40.856Z - Hash: 9ae5c411304d6c7d - Time: 35174ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 406.41 kB with a total of 906.41 kB.


Done in 37.95s.
```
