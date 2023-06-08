Thu Jun  8 10:23:20 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.6Gi       4.0Gi       557Mi       7.7Gi        10Gi
Swap:          8.0Gi       1.1Gi       6.9Gi
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
    

Angular CLI: 16.0.4
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.4
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.4
@angular-devkit/build-angular   16.0.4
@angular-devkit/core            16.0.4
@angular-devkit/schematics      16.0.4
@angular/cdk                    16.0.3
@angular/material               16.0.3
@schematics/angular             16.0.4
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.52s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001495
Installed version:  1.0.30001495
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001495
Installed version:  1.0.30001495
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.0.5/angular-webpack/7c81edfdc93174525c8e605396593e26819bcb9f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.0.5/angular-webpack/7c81edfdc93174525c8e605396593e26819bcb9f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3672.285848 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 271 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 271 KiB = runtime.js 906 bytes styles.css 271 KiB
chunk {179} (runtime: runtime) main.js (main) 4.76 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [564] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [510] 4.72 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1991 ms (resolving: 63 ms, restoring: 0 ms, integration: 0 ms, building: 1928 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 317 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 317 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2022 ms (resolving: 63 ms, restoring: 1 ms, integration: 0 ms, building: 1958 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12511 ms (resolving: 64 ms, restoring: 1 ms, integration: 0 ms, building: 12446 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.408609 ms
<t> runtime requirements.chunks: 0.404491 ms
<t> runtime requirements.entries: 1.40836 ms
<t> runtime requirements.modules: 0.028161 ms
<t> runtime requirements.chunks: 0.017043 ms
<t> runtime requirements.entries: 0.16195 ms
<t> finish module profiles: 11.905151 ms
<t> compute affected modules: 0.003914 ms
<t> finish modules: 19.776731 ms
<t> report dependency errors and warnings: 10.577013 ms
<t> optimize dependencies: 32.123782 ms
<t> create chunks: 8.012285 ms
<t> compute affected modules with chunk graph: 0.004005 ms
<t> optimize: 47.164216 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.081034 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1031.94867 ms
<t> runtime requirements.modules: 0.147322 ms
<t> runtime requirements.chunks: 0.116514 ms
<t> runtime requirements.entries: 0.49458 ms
<t> runtime requirements: 1.150115 ms
<t> hashing: initialize hash: 0.00874 ms
<t> hashing: hash warnings: 0.003376 ms
<t> hashing: sort chunks: 0.060429 ms
<t> hashing: hash runtime modules: 1.090745 ms
<t> hashing: hash chunks: 1.28847 ms
<t> hashing: hash digest: 0.018998 ms
<t> hashing: process full hash modules: 0.143614 ms
<t> hashing: 2.842117 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.062631 ms
<t> module assets: 0.165889 ms
<t> create chunk assets: 3.551003 ms
<t> process assets: 13297.38189 ms

LOG from webpack.Compiler
<t> make hook: 12753.144437 ms
<t> finish make hook: 0.17805 ms
<t> finish compilation: 42.319424 ms
<t> seal compilation: 14443.286265 ms
<t> afterCompile hook: 0.119953 ms
<t> emitAssets: 3.68224 ms
<t> emitRecords: 0.061042 ms
<t> done hook: 349.215897 ms
<t> beginIdle: 0.759916 ms

LOG from webpack.Compilation.ModuleProfile
     | 91 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 43 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loading.service.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loading/loading.component.ts
     | 67 ms (parallelism 29.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    1745 ms resolve to new modules
<i>  |  | 354 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 102 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 94 ms (parallelism 16) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 82 ms (parallelism 22.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 94 ms (parallelism 16) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 87 ms (parallelism 17) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 54 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 54 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 53 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 53 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 58 ms (parallelism 48.8) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 55 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 55 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 54 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 55 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 54 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 55 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 56 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 55 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 58 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 56 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 56 ms (parallelism 49.5) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 56 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 57 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 56 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 56 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 60 ms (parallelism 48.3) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 58 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 56 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 58 ms (parallelism 48.7) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 85 ms (parallelism 41.9) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 59 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 59 ms (parallelism 48.6) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 59 ms (parallelism 48.5) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 85 ms (parallelism 42) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 85 ms (parallelism 42.1) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 85 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 80 ms (parallelism 42.6) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 79 ms (parallelism 43.2) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 80 ms (parallelism 41.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 80 ms (parallelism 41.2) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3129 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 322 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 36 ms (parallelism 31.5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 36 ms (parallelism 31.5) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1656 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 328 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 328 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 373 ms (parallelism 33.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 373 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 370 ms (parallelism 33.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 370 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 425 ms (parallelism 5.6) build modules > ./src/main.ts
     |  | 78 ms (parallelism 16.7) build modules > ./src/app/material/material.module.ts
     |  | 79 ms (parallelism 41) build modules > ./src/app/news.service.ts
     |  | 79 ms (parallelism 40.9) build modules > ./src/app/quiz.service.ts
     |  | 78 ms (parallelism 43.2) build modules > ./src/app/menu/menu.component.ts
<i>  | 927 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6814 ms build modules
+ 24 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (883 real resolves with 0 cached but invalid, 1931 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.280759 ms
<t> figure out provided exports: 10.46234 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.128986 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.656407 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.257868 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.395185 ms
<t> trace exports usage in graph: 16.972326 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 5.218424 ms
<t> visitModules: visiting: 6.214023 ms
    443 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.305998 ms
<t> connectChunkGroups: 0.004295 ms
<t> cleanup: 0.003006 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.054589 ms
<t> modules: 3.025895 ms
<t> queue: 0.006104 ms
<t> maxSize: 0.038798 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.951623 ms
<t> sort relevant modules: 0.17702 ms
<t> find modules to concatenate: 18.144224 ms
<t> sort concat configurations: 0.064599 ms
<t> create concatenated modules: 10.943266 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 307.420653 ms
<t> optimize asset: polyfills.js: 705.14537 ms
<t> optimize asset: main.js: 11930.326121 ms
<t> optimize js assets: 12061.980577 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 23.863657 ms
<t> optimize css assets: 32.521166 ms

LOG from webpack.FileSystemInfo
    1197 new snapshots created
    0% root snapshot uncached (0 / 1931)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1063 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5113/6272) entries shared via 12 shared snapshots (806 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3953/4546) entries shared via 255 shared snapshots (771 times referenced)
    Managed items info in cache: 167 items
    Managed items snapshot optimization: 28% (583/2051) entries shared via 33 shared snapshots (100 times referenced)
    Managed files snapshot optimization: 77% (4940/6405) entries shared via 263 shared snapshots (976 times referenced)
    Managed missing snapshot optimization: 83% (5583/6701) entries shared via 331 shared snapshots (911 times referenced)

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

    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:155:37)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:136:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:601:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:155:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:136:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-06-08 10:24:30: webpack 5.80.0 compiled in 30882 ms (4ce1204016dd6d02)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 2021.255626 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 63.500817 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.442367 ms
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
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1376:9)
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.059433 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.161241 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.645506 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.053737 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/input.mjs': 1.187682 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 2.587318 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.790791 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.245734 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.684031 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.047373 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.349806 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/table.mjs': 2.552099 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/core.mjs': 1.057535 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 6.747948 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.437296 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.037753 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/Subject.js': 3.239551 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/icon.mjs': 4.045426 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|9e04c8cc16f0363b|runtime': 18.699351 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.083032 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 368.96285 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 72 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 597.79 kB |               139.67 kB
styles.css          | styles        | 270.56 kB |                17.82 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 902.23 kB |               168.62 kB

Build at: 2023-06-08T14:24:34.515Z - Hash: 4ce1204016dd6d02 - Time: 34839ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 402.23 kB with a total of 902.23 kB.


Done in 37.02s.
```
Thu Jun  8 10:25:04 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.396
info New version: 0.0.397
Done in 0.13s.
