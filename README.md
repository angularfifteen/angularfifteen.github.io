Wed Jan 18 05:35:37 PM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.2Gi       1.1Gi       865Mi       7.9Gi       7.9Gi
Swap:          8.0Gi       3.8Gi       4.2Gi
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
    

Angular CLI: 15.1.1
Node: 18.13.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.1.0
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1501.1
@angular-devkit/build-angular   15.1.1
@angular-devkit/core            15.1.1
@angular-devkit/schematics      15.1.1
@angular/cli                    15.1.1
@schematics/angular             15.1.1
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.86s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.43s.
```
Latest version:     1.0.30001445
Installed version:  1.0.30001445
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001445
Installed version:  1.0.30001445
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.1.2/angular-webpack/81f9bc531e46f6c24ce3dddd41d946860f2a480f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.1.2/angular-webpack/81f9bc531e46f6c24ce3dddd41d946860f2a480f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 15.179371 ms
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
chunk {179} (runtime: runtime) main.js (main) 5.45 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 838 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 192 modules [183] 4.63 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    2107 ms (resolving: 65 ms, restoring: 1 ms, integration: 0 ms, building: 2041 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2132 ms (resolving: 65 ms, restoring: 1 ms, integration: 0 ms, building: 2066 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    19116 ms (resolving: 64 ms, restoring: 1 ms, integration: 0 ms, building: 19051 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.850188 ms
<t> runtime requirements.chunks: 0.771697 ms
<t> runtime requirements.entries: 2.726114 ms
<t> runtime requirements.modules: 0.168552 ms
<t> runtime requirements.chunks: 0.323352 ms
<t> runtime requirements.entries: 2.126631 ms
<t> finish module profiles: 18.803206 ms
<t> compute affected modules: 0.365482 ms
<t> finish modules: 39.877396 ms
<t> report dependency errors and warnings: 17.246381 ms
<t> optimize dependencies: 40.741173 ms
<t> create chunks: 18.535255 ms
<t> compute affected modules with chunk graph: 0.193065 ms
<t> optimize: 77.207192 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 31.77343 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1306.954481 ms
<t> runtime requirements.modules: 0.165002 ms
<t> runtime requirements.chunks: 0.158257 ms
<t> runtime requirements.entries: 0.615146 ms
<t> runtime requirements: 1.221487 ms
<t> hashing: initialize hash: 0.011595 ms
<t> hashing: hash warnings: 0.004418 ms
<t> hashing: sort chunks: 0.118467 ms
<t> hashing: hash runtime modules: 1.378849 ms
<t> hashing: hash chunks: 1.794392 ms
<t> hashing: hash digest: 0.058226 ms
<t> hashing: process full hash modules: 0.214907 ms
<t> hashing: 4.359504 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.097396 ms
<t> module assets: 0.388995 ms
<t> create chunk assets: 6.944492 ms
<t> process assets: 10950.283378 ms

LOG from webpack.Compiler
<t> make hook: 19433.829949 ms
<t> finish make hook: 0.315348 ms
<t> finish compilation: 76.472072 ms
<t> seal compilation: 12442.173554 ms
<t> afterCompile hook: 0.241321 ms
<t> emitAssets: 4.873064 ms
<t> emitRecords: 0.083053 ms
<t> done hook: 483.578218 ms
<t> beginIdle: 1.058681 ms

LOG from webpack.Compilation.ModuleProfile
     | 112 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 72 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 148 ms (parallelism 13.3) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 148 ms (parallelism 13.3) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 78 ms (parallelism 21.7) resolve to new modules > ./src/app/home/home.component.ts
     | 78 ms (parallelism 21.7) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 78 ms (parallelism 21.7) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 78 ms (parallelism 21.7) resolve to new modules > ./src/app/news/news.component.ts
     | 78 ms (parallelism 21.7) resolve to new modules > ./src/app/playground/playground.component.ts
     | 78 ms (parallelism 21.7) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 49 ms (parallelism 33) resolve to new modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     | 95 ms (parallelism 30.7) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 58 ms (parallelism 36.4) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i> 2087 ms resolve to new modules
<i>  |  | 354 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 145 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 182 ms (parallelism 13.9) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 160 ms (parallelism 13.6) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 159 ms (parallelism 13.7) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 198 ms (parallelism 17.7) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 179 ms (parallelism 21.8) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 82 ms (parallelism 32.6) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 81 ms (parallelism 32.4) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 105 ms (parallelism 39.9) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 104 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 106 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 104 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 106 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 111 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 108 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 108 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 108 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 112 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 109 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 111 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 113 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 108 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 116 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 113 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 113 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 112 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 115 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 114 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 114 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 118 ms (parallelism 39) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 116 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 114 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 119 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 119 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 121 ms (parallelism 38.7) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 120 ms (parallelism 38.8) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 123 ms (parallelism 38.4) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 124 ms (parallelism 38.6) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 123 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 123 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 121 ms (parallelism 41.3) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 120 ms (parallelism 42.2) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 120 ms (parallelism 42.4) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<w>  | 5778 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 339 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 120 ms (parallelism 42.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 120 ms (parallelism 42.3) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2893 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 344 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 344 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 583 ms (parallelism 32.7) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 583 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 579 ms (parallelism 32.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 579 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 49 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 49 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 480 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 149 ms (parallelism 13.3) build modules > ./src/app/app-routing.module.ts
     |  | 131 ms (parallelism 13) build modules > ./src/app/app.component.ts
     |  | 131 ms (parallelism 13) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 131 ms (parallelism 13) build modules > ./src/app/prompt-update.service.ts
     |  | 95 ms (parallelism 20.7) build modules > ./src/app/material/material.module.ts
     |  | 49 ms (parallelism 33) build modules > ./src/app/loading.service.ts
     |  | 34 ms (parallelism 49) build modules > ./src/app/quiz.service.ts
     |  | 34 ms (parallelism 49) build modules > ./src/app/news.service.ts
     |  | 34 ms (parallelism 49.4) build modules > ./src/app/menu/menu.component.ts
<i>  | 1413 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 11643 ms build modules
+ 150 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (889 real resolves with 0 cached but invalid, 1937 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.504928 ms
<t> figure out provided exports: 19.555051 ms
    95% of exports of modules have been determined (15 no declared exports, 312 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 8.072258 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 19.834621 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.98113 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.574626 ms
<t> trace exports usage in graph: 24.305921 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 10.601431 ms
<t> visitModules: visiting: 13.177694 ms
    444 queue items processed (201 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 14.880846 ms
<t> connectChunkGroups: 0.199741 ms
<t> cleanup: 0.078859 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.145961 ms
<t> modules: 4.039692 ms
<t> queue: 0.006539 ms
<t> maxSize: 0.042858 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.872556 ms
<t> sort relevant modules: 0.312401 ms
<t> find modules to concatenate: 26.378824 ms
<t> sort concat configurations: 0.060941 ms
<t> create concatenated modules: 17.699903 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 459.48571 ms
<t> optimize asset: polyfills.js: 1175.271307 ms
<t> optimize asset: main.js: 8970.047714 ms
<t> optimize js assets: 9195.933503 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 42.37024 ms
<t> optimize css assets: 63.977291 ms

LOG from webpack.FileSystemInfo
    1204 new snapshots created
    0% root snapshot uncached (0 / 1937)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1091 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5142/6319) entries shared via 12 shared snapshots (810 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4027/4636) entries shared via 258 shared snapshots (785 times referenced)
    Managed items info in cache: 209 items
    Managed items snapshot optimization: 32% (680/2139) entries shared via 38 shared snapshots (118 times referenced)
    Managed files snapshot optimization: 77% (4961/6451) entries shared via 267 shared snapshots (985 times referenced)
    Managed missing snapshot optimization: 83% (5758/6922) entries shared via 336 shared snapshots (916 times referenced)

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

2023-01-18 17:37:22: webpack 5.75.0 compiled in 40405 ms (0723e0e2d964c640)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1202.861627 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 50.69938 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1635 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 2.816555 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs': 1.218407 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 5.50207 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 3.701734 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.890427 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/http.mjs': 1.014512 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/compiler/fesm2020/compiler.mjs': 1.368578 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 2.53115 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/animations/fesm2020/browser.mjs': 2.141868 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 5.388859 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 4.692044 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 3.014252 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.430933 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/slider.mjs': 1.020193 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.405699 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.341079 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.665789 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 4.843039 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 2.898123 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.939237 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/dialog.mjs': 3.511145 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/table.mjs': 1.11 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/core.mjs': 1.107265 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 9.720229 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.725155 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.301671 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.732745 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/overlay.mjs': 1.069036 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.366119 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/zipAll.js': 4.588209 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 6.844185 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 28.525582 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs|df19c1f16536234e|runtime': 4.028654 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 17.294203 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 683.027746 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1635 items, 1 files, 81 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 597.98 kB |               139.30 kB
styles.css          | styles        | 268.29 kB |                17.75 kB
polyfills.js        | polyfills     |  33.07 kB |                10.67 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.22 kB |               168.23 kB

Build at: 2023-01-18T22:37:25.981Z - Hash: 0723e0e2d964c640 - Time: 43935ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.22 kB with a total of 900.22 kB.


Done in 46.63s.
```
Wed Jan 18 05:38:08 PM EST 2023
yarn version v1.22.19
info Current version: 0.0.235
info New version: 0.0.236
Done in 0.15s.
