Fri Oct 13 04:28:47 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.8Gi       3.5Gi       651Mi       8.0Gi        10Gi
Swap:          8.0Gi       1.9Gi       6.1Gi
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
    

Angular CLI: 16.2.5
Node: 18.18.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.8
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.5
@angular-devkit/build-angular   16.2.5
@angular-devkit/core            16.2.5
@angular-devkit/schematics      16.2.5
@angular/cdk                    16.2.7
@angular/cli                    16.2.5
@angular/material               16.2.7
@schematics/angular             16.2.5
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.39s.
```
Latest version:     1.0.30001547
Installed version:  1.0.30001547
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001547
Installed version:  1.0.30001547
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.2.6/angular-webpack/3940bb955a9436eac49e15171799f81326e8b38d.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.2.6/angular-webpack/3940bb955a9436eac49e15171799f81326e8b38d/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3634.9456 ms
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
    1233 ms (resolving: 67 ms, restoring: 1 ms, integration: 0 ms, building: 1165 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 273 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1440 ms (resolving: 53 ms, restoring: 0 ms, integration: 0 ms, building: 1387 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11976 ms (resolving: 54 ms, restoring: 1 ms, integration: 0 ms, building: 11921 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.395902 ms
<t> runtime requirements.chunks: 0.40065 ms
<t> runtime requirements.entries: 1.426811 ms
<t> runtime requirements.modules: 0.028049 ms
<t> runtime requirements.chunks: 0.017128 ms
<t> runtime requirements.entries: 0.272622 ms
<t> finish module profiles: 13.878053 ms
<t> compute affected modules: 0.004152 ms
<t> finish modules: 23.857507 ms
<t> report dependency errors and warnings: 10.687838 ms
<t> optimize dependencies: 28.52545 ms
<t> create chunks: 11.40969 ms
<t> compute affected modules with chunk graph: 0.003808 ms
<t> optimize: 49.13156 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.07211 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 986.855409 ms
<t> runtime requirements.modules: 0.152975 ms
<t> runtime requirements.chunks: 0.122754 ms
<t> runtime requirements.entries: 0.549839 ms
<t> runtime requirements: 1.245544 ms
<t> hashing: initialize hash: 0.009504 ms
<t> hashing: hash warnings: 0.004452 ms
<t> hashing: sort chunks: 0.100669 ms
<t> hashing: hash runtime modules: 1.103016 ms
<t> hashing: hash chunks: 1.450494 ms
<t> hashing: hash digest: 0.044502 ms
<t> hashing: process full hash modules: 0.155978 ms
<t> hashing: 3.437096 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.065848 ms
<t> module assets: 0.270163 ms
<t> create chunk assets: 4.710203 ms
<t> process assets: 6845.365955 ms

LOG from webpack.Compiler
<t> make hook: 12136.630475 ms
<t> finish make hook: 0.11383 ms
<t> finish compilation: 48.469828 ms
<t> seal compilation: 7950.269016 ms
<t> afterCompile hook: 0.164563 ms
<t> emitAssets: 4.126925 ms
<t> emitRecords: 0.065402 ms
<t> done hook: 346.914845 ms
<t> beginIdle: 0.788196 ms

LOG from webpack.Compilation.ModuleProfile
     | 87 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 44 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/loading.service.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 74 ms (parallelism 17) resolve to new modules > ./src/app/loading/loading.component.ts
     | 105 ms (parallelism 22.8) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 100 ms (parallelism 38.8) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1478 ms resolve to new modules
<i>  |  | 246 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 246 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 359 ms (parallelism 33.2) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 359 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 191 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 107 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 119 ms (parallelism 15.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 103 ms (parallelism 21) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 119 ms (parallelism 15.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 114 ms (parallelism 16.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 39 ms (parallelism 29.3) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 39 ms (parallelism 29.8) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 58 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 59 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 58 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 59 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 59 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 62 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 58 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 60 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 60 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 60 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 60 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 61 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 60 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 64 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 62 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 62 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 62 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 63 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 62 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 62 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 64 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 63 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 64 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 64 ms (parallelism 42.6) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 64 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 65 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 64 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 65 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 65 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 65 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 66 ms (parallelism 42.1) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 89 ms (parallelism 38.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 88 ms (parallelism 39.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 90 ms (parallelism 37.5) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 88 ms (parallelism 39.1) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3306 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 189 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 35 ms (parallelism 31.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 35 ms (parallelism 31.3) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1883 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 352 ms (parallelism 33.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 352 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 310 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 110 ms (parallelism 15.8) build modules > ./src/app/material/material.module.ts
     |  | 90 ms (parallelism 36.4) build modules > ./src/app/news.service.ts
     |  | 90 ms (parallelism 36.4) build modules > ./src/app/quiz.service.ts
     |  | 90 ms (parallelism 36.6) build modules > ./src/app/menu/menu.component.ts
<i>  | 879 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7056 ms build modules
+ 125 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (860 real resolves with 0 cached but invalid, 1954 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.345543 ms
<t> figure out provided exports: 14.167452 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.187772 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.01742 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.078236 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.48889 ms
<t> trace exports usage in graph: 16.539556 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.659636 ms
<t> visitModules: visiting: 9.668602 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.760432 ms
<t> connectChunkGroups: 0.003768 ms
<t> cleanup: 0.003944 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.045288 ms
<t> modules: 3.211998 ms
<t> queue: 0.005226 ms
<t> maxSize: 0.032962 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.719305 ms
<t> sort relevant modules: 0.179543 ms
<t> find modules to concatenate: 17.834109 ms
<t> sort concat configurations: 0.041886 ms
<t> create concatenated modules: 10.905158 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 248.028101 ms
<t> optimize asset: polyfills.js: 666.140413 ms
<t> optimize asset: main.js: 5488.825856 ms
<t> optimize js assets: 5637.394534 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 21.513018 ms
<t> optimize css assets: 33.362607 ms

LOG from webpack.FileSystemInfo
    1176 new snapshots created
    0% root snapshot uncached (0 / 1954)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5020/6141) entries shared via 12 shared snapshots (793 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 85% (3510/4116) entries shared via 223 shared snapshots (690 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 25% (495/1973) entries shared via 25 shared snapshots (88 times referenced)
    Managed files snapshot optimization: 76% (4632/6068) entries shared via 244 shared snapshots (959 times referenced)
    Managed missing snapshot optimization: 84% (5264/6247) entries shared via 281 shared snapshots (1002 times referenced)

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

2023-10-13 16:29:49: webpack 5.88.2 compiled in 23738 ms (64e6196c878f6b4f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1241.733356 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.625645 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1609 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.429435 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.106844 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 3.889708 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 4.017769 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/animations.mjs': 1.32148 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/http.mjs': 1.614882 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.390954 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs': 1.330917 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.032015 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.138487 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.284033 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.720014 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.992874 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.288676 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.313069 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.02407 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.485531 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 8.469024 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.260135 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.693118 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.25152 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.313278 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/operators/materialize': 4.264761 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 23.801333 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.166784 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 406.11615 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 1 files, 74 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 609.78 kB |               140.90 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 886.60 kB |               168.29 kB

Build at: 2023-10-13T20:29:52.374Z - Hash: 64e6196c878f6b4f - Time: 26956ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 386.60 kB with a total of 886.60 kB.


Done in 28.96s.
```
