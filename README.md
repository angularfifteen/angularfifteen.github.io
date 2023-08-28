Mon Aug 28 09:14:57 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       4.6Gi       225Mi       8.4Gi        12Gi
Swap:          8.0Gi        87Mi       7.9Gi
System Storage
2.6G	.
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
    
Done in 0.51s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001524
Installed version:  1.0.30001522
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001524
Installed version:  1.0.30001524
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.0/angular-webpack/fffa4fc6785183b3d888bdcea8a92d1d8739a84d.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.0/angular-webpack/fffa4fc6785183b3d888bdcea8a92d1d8739a84d/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3515.732253 ms
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
    1251 ms (resolving: 67 ms, restoring: 1 ms, integration: 0 ms, building: 1183 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1436 ms (resolving: 54 ms, restoring: 0 ms, integration: 0 ms, building: 1382 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11759 ms (resolving: 54 ms, restoring: 1 ms, integration: 0 ms, building: 11704 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.39333 ms
<t> runtime requirements.chunks: 0.389565 ms
<t> runtime requirements.entries: 1.355218 ms
<t> runtime requirements.modules: 0.026854 ms
<t> runtime requirements.chunks: 0.016405 ms
<t> runtime requirements.entries: 0.212742 ms
<t> finish module profiles: 10.530228 ms
<t> compute affected modules: 0.003026 ms
<t> finish modules: 24.914909 ms
<t> report dependency errors and warnings: 10.627264 ms
<t> optimize dependencies: 33.227211 ms
<t> create chunks: 7.447645 ms
<t> compute affected modules with chunk graph: 0.004791 ms
<t> optimize: 47.850829 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.321182 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 755.804656 ms
<t> runtime requirements.modules: 0.132892 ms
<t> runtime requirements.chunks: 0.109024 ms
<t> runtime requirements.entries: 0.512377 ms
<t> runtime requirements: 0.937537 ms
<t> hashing: initialize hash: 0.008009 ms
<t> hashing: hash warnings: 0.003195 ms
<t> hashing: sort chunks: 0.062318 ms
<t> hashing: hash runtime modules: 1.09269 ms
<t> hashing: hash chunks: 1.367217 ms
<t> hashing: hash digest: 0.043881 ms
<t> hashing: process full hash modules: 0.166575 ms
<t> hashing: 2.946708 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.071036 ms
<t> module assets: 0.163975 ms
<t> create chunk assets: 3.792098 ms
<t> process assets: 6648.789941 ms

LOG from webpack.Compiler
<t> make hook: 11903.857422000001 ms
<t> finish make hook: 0.116027 ms
<t> finish compilation: 46.118561 ms
<t> seal compilation: 7520.287284 ms
<t> afterCompile hook: 0.131517 ms
<t> emitAssets: 3.983458 ms
<t> emitRecords: 0.060093 ms
<t> done hook: 343.122378 ms
<t> beginIdle: 0.840347 ms

LOG from webpack.Compilation.ModuleProfile
     | 80 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 32 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 104 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 104 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 37 ms (parallelism 30.2) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 89 ms (parallelism 45.5) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    883 ms resolve to new modules
     | 92 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    112 ms resolve to existing modules
<i>  |  | 243 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 243 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 336 ms (parallelism 34.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 336 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 198 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 93 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 133 ms (parallelism 12.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 146 ms (parallelism 12.5) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 132 ms (parallelism 12) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 135 ms (parallelism 13.2) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 30 ms (parallelism 32.4) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 31 ms (parallelism 33) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 54 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 54 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 54 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 55 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 56 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 57 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 55 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 55 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 57 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 57 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 57 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 57 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 58 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 58 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 58 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 58 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 59 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 58 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 59 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 58 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 60 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 60 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 61 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 59 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 79 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 60 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 61 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 60 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 88 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 88 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 88 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 83 ms (parallelism 43.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 83 ms (parallelism 44) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 83 ms (parallelism 42.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 84 ms (parallelism 41.7) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3326 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 193 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 42 ms (parallelism 34.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 42 ms (parallelism 34.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1884 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 330 ms (parallelism 35.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 330 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 31 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 31 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 302 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 103 ms (parallelism 11.1) build modules > ./src/app/app.component.ts
     |  | 122 ms (parallelism 12.1) build modules > ./src/app/material/material.module.ts
     |  | 82 ms (parallelism 41.3) build modules > ./src/app/news.service.ts
     |  | 82 ms (parallelism 41.5) build modules > ./src/app/quiz.service.ts
     |  | 82 ms (parallelism 41.6) build modules > ./src/app/menu/menu.component.ts
<i>  | 958 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7112 ms build modules
+ 112 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1955 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.281391 ms
<t> figure out provided exports: 15.776681 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.054268 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.275362 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.942089 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.518448 ms
<t> trace exports usage in graph: 21.334524 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.873284 ms
<t> visitModules: visiting: 5.832409 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.933294 ms
<t> connectChunkGroups: 0.003536 ms
<t> cleanup: 0.003214 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035865 ms
<t> modules: 2.930355 ms
<t> queue: 0.005507 ms
<t> maxSize: 0.034284 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.849451 ms
<t> sort relevant modules: 0.184301 ms
<t> find modules to concatenate: 15.447595 ms
<t> sort concat configurations: 0.047314 ms
<t> create concatenated modules: 11.053969 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 246.036368 ms
<t> optimize asset: polyfills.js: 656.052506 ms
<t> optimize asset: main.js: 5345.658499 ms
<t> optimize js assets: 5479.671873 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 18.51905 ms
<t> optimize css assets: 42.770924 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1955)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 85% (3513/4116) entries shared via 222 shared snapshots (693 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 27% (524/1973) entries shared via 27 shared snapshots (95 times referenced)
    Managed files snapshot optimization: 76% (4632/6068) entries shared via 244 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 84% (5257/6247) entries shared via 279 shared snapshots (997 times referenced)

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

2023-08-28 09:15:47: webpack 5.88.2 compiled in 22950 ms (ea945533eb92835d)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1304.969296 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 59.674408 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.859969 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.952987 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.693297 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.033318 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.252577 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.202968 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.02622 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.30139 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.346771 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 3.99891 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 1.393619 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.445449 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 6.065555 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.404554 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.93554 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.158853 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.141211 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/operators/concatWith': 3.010205 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/operators/groupBy': 4.088051 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 19.790914 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.433665 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 365.503336 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 603.70 kB |               140.55 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 880.52 kB |               167.94 kB

Build at: 2023-08-28T13:15:50.530Z - Hash: ea945533eb92835d - Time: 25710ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 380.52 kB with a total of 880.52 kB.


Done in 27.61s.
```
Mon Aug 28 09:16:18 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.448
info New version: 0.0.449
Done in 0.13s.
