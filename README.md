Thu Jun 22 09:05:51 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       2.6Gi       537Mi       9.5Gi        11Gi
Swap:          8.0Gi       2.0Mi       8.0Gi
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
    

Angular CLI: 16.1.0
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.1
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@angular/cli                    16.1.0
@schematics/angular             16.1.0
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001506
Installed version:  1.0.30001504
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001506
Installed version:  1.0.30001506
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.0/angular-webpack/637784d64ee8f2e07ece61381fb9760960a94da1.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.0/angular-webpack/637784d64ee8f2e07ece61381fb9760960a94da1/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3529.0954540000002 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 270 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 270 KiB = runtime.js 906 bytes styles.css 270 KiB
chunk {179} (runtime: runtime) main.js (main) 4.78 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.74 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1164 ms (resolving: 198 ms, restoring: 1 ms, integration: 0 ms, building: 965 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 314 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 314 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1542 ms (resolving: 49 ms, restoring: 0 ms, integration: 0 ms, building: 1493 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12322 ms (resolving: 157 ms, restoring: 0 ms, integration: 0 ms, building: 12165 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.392391 ms
<t> runtime requirements.chunks: 0.446073 ms
<t> runtime requirements.entries: 1.404981 ms
<t> runtime requirements.modules: 0.029443 ms
<t> runtime requirements.chunks: 0.018636 ms
<t> runtime requirements.entries: 0.196579 ms
<t> finish module profiles: 11.052584 ms
<t> compute affected modules: 0.004222 ms
<t> finish modules: 26.109891 ms
<t> report dependency errors and warnings: 13.252812 ms
<t> optimize dependencies: 36.132882 ms
<t> create chunks: 7.817595 ms
<t> compute affected modules with chunk graph: 0.00406 ms
<t> optimize: 47.45529 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 21.346703 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1072.64789 ms
<t> runtime requirements.modules: 0.125585 ms
<t> runtime requirements.chunks: 0.131545 ms
<t> runtime requirements.entries: 0.581859 ms
<t> runtime requirements: 1.2915 ms
<t> hashing: initialize hash: 0.007835 ms
<t> hashing: hash warnings: 0.003694 ms
<t> hashing: sort chunks: 0.061758 ms
<t> hashing: hash runtime modules: 1.174026 ms
<t> hashing: hash chunks: 1.461359 ms
<t> hashing: hash digest: 0.047216 ms
<t> hashing: process full hash modules: 0.176708 ms
<t> hashing: 3.185891 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.069854 ms
<t> module assets: 0.180369 ms
<t> create chunk assets: 4.027629 ms
<t> process assets: 15296.280302 ms

LOG from webpack.Compiler
<t> make hook: 12362.404174 ms
<t> finish make hook: 0.136037 ms
<t> finish compilation: 50.466169 ms
<t> seal compilation: 16492.423978 ms
<t> afterCompile hook: 0.186359 ms
<t> emitAssets: 6.587942 ms
<t> emitRecords: 0.082949 ms
<t> done hook: 350.961044 ms
<t> beginIdle: 0.768937 ms

LOG from webpack.Compilation.ModuleProfile
     | 31 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 40 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 38 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 131 ms (parallelism 4.8) resolve to new modules > ./src/main.ts
     | 36 ms (parallelism 4.3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 32 ms (parallelism 11.6) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 32 ms (parallelism 11.6) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loading.service.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loading/loading.component.ts
     | 83 ms (parallelism 24.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 97 ms (parallelism 40.4) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1530 ms resolve to new modules
<i>  |  | 275 ms (parallelism 5.4) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 275 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 61 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 61 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 364 ms (parallelism 33.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 364 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 171 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 98 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 111 ms (parallelism 15.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 97 ms (parallelism 20.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 111 ms (parallelism 15.4) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 103 ms (parallelism 16.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 61 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 64 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 61 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 61 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 61 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 62 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 61 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 62 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 62 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 62 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 65 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 63 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 64 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 64 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 66 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 64 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 64 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 67 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 65 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 65 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 66 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 67 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 67 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 67 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 69 ms (parallelism 41.9) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 67 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 68 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 68 ms (parallelism 42) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 86 ms (parallelism 39.1) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 85 ms (parallelism 40.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 86 ms (parallelism 39.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 85 ms (parallelism 40.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3233 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 164 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 33 ms (parallelism 37.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 33 ms (parallelism 37.6) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1924 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 341 ms (parallelism 34.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 341 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 273 ms (parallelism 5.2) build modules > ./src/main.ts
     |  | 31 ms (parallelism 11.4) build modules > ./src/app/app-routing.module.ts
     |  | 31 ms (parallelism 11.4) build modules > ./src/app/app.component.ts
     |  | 30 ms (parallelism 11.4) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 83 ms (parallelism 16.4) build modules > ./src/app/material/material.module.ts
     |  | 87 ms (parallelism 37.7) build modules > ./src/app/news.service.ts
     |  | 87 ms (parallelism 37.8) build modules > ./src/app/quiz.service.ts
     |  | 86 ms (parallelism 39) build modules > ./src/app/menu/menu.component.ts
<i>  | 866 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7069 ms build modules
+ 95 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (881 real resolves with 0 cached but invalid, 1939 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.966366 ms
<t> figure out provided exports: 12.262988 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.080867 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 16.457713 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.020361 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.525663 ms
<t> trace exports usage in graph: 24.184039 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 5.055786 ms
<t> visitModules: visiting: 6.07648 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.177137 ms
<t> connectChunkGroups: 0.003708 ms
<t> cleanup: 0.002762 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.034564 ms
<t> modules: 2.883479 ms
<t> queue: 0.005386 ms
<t> maxSize: 0.035963 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.751897 ms
<t> sort relevant modules: 0.165967 ms
<t> find modules to concatenate: 15.503253 ms
<t> sort concat configurations: 0.051345 ms
<t> create concatenated modules: 11.595086 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 279.074554 ms
<t> optimize asset: polyfills.js: 794.880538 ms
<t> optimize asset: main.js: 13775.863652 ms
<t> optimize js assets: 13917.274491 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 27.960567 ms
<t> optimize css assets: 42.186318 ms

LOG from webpack.FileSystemInfo
    1197 new snapshots created
    0% root snapshot uncached (0 / 1939)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1046 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5118/6271) entries shared via 12 shared snapshots (807 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3846/4458) entries shared via 249 shared snapshots (750 times referenced)
    Managed items info in cache: 164 items
    Managed items snapshot optimization: 28% (587/2066) entries shared via 34 shared snapshots (101 times referenced)
    Managed files snapshot optimization: 77% (4932/6406) entries shared via 258 shared snapshots (978 times referenced)
    Managed missing snapshot optimization: 83% (5515/6634) entries shared via 327 shared snapshots (910 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
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
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:144:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/sass/sass-service.js:136:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-06-22 09:07:02: webpack 5.86.0 compiled in 32404 ms (fdbce06b050a6ee9)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 858.384759 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 45.21357 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1630 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.115957 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.299932 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.53222 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.056825 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/src/app/material|request=|@angular/material/snack-bar': 1.008353 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.105186 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 3.884006 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.055288 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 1.081694 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 2.207581 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.193718 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.796997 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.013086 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.491476 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.364508 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.124221 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.607671 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.066583 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.108181 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchMap.js': 3.44424 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 26.439124 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 15.504187 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 456.37763 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1630 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 597.98 kB |               139.68 kB
styles.css          | styles        | 269.51 kB |                17.81 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 901.38 kB |               168.62 kB

Build at: 2023-06-22T13:07:05.467Z - Hash: fdbce06b050a6ee9 - Time: 35266ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 401.38 kB with a total of 901.38 kB.


Done in 37.19s.
```
