Thu Aug  3 02:05:15 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       3.8Gi       335Mi       9.2Gi        12Gi
Swap:          8.0Gi        37Mi       8.0Gi
System Storage
1.6G	.
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
    

Angular CLI: 16.1.6
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.7
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.6
@angular-devkit/build-angular   16.1.6
@angular-devkit/core            16.1.6
@angular-devkit/schematics      16.1.6
@angular/cdk                    16.1.6
@angular/cli                    16.1.6
@angular/material               16.1.6
@schematics/angular             16.1.6
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.49s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001518
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.7/angular-webpack/786df9d9b52c22ec2685dad338549fe4c6abf598.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.7/angular-webpack/786df9d9b52c22ec2685dad338549fe4c6abf598/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3611.143603 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 602 KiB {179} [emitted] (name: main)
asset styles.css 263 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 603 KiB = runtime.js 906 bytes main.js 602 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 264 KiB = runtime.js 906 bytes styles.css 263 KiB
chunk {179} (runtime: runtime) main.js (main) 4.8 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.77 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1210 ms (resolving: 212 ms, restoring: 0 ms, integration: 0 ms, building: 998 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 299 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 299 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1565 ms (resolving: 57 ms, restoring: 0 ms, integration: 0 ms, building: 1508 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12394 ms (resolving: 170 ms, restoring: 0 ms, integration: 0 ms, building: 12224 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.439035 ms
<t> runtime requirements.chunks: 0.402748 ms
<t> runtime requirements.entries: 1.466601 ms
<t> runtime requirements.modules: 0.030428 ms
<t> runtime requirements.chunks: 0.019135 ms
<t> runtime requirements.entries: 0.194737 ms
<t> finish module profiles: 11.061295 ms
<t> compute affected modules: 0.003255 ms
<t> finish modules: 24.165281 ms
<t> report dependency errors and warnings: 11.456881 ms
<t> optimize dependencies: 33.328438 ms
<t> create chunks: 7.133433 ms
<t> compute affected modules with chunk graph: 0.004124 ms
<t> optimize: 46.048869 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.037051 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 812.713018 ms
<t> runtime requirements.modules: 0.117083 ms
<t> runtime requirements.chunks: 0.124284 ms
<t> runtime requirements.entries: 0.526562 ms
<t> runtime requirements: 0.952114 ms
<t> hashing: initialize hash: 0.008626 ms
<t> hashing: hash warnings: 0.003245 ms
<t> hashing: sort chunks: 0.054474 ms
<t> hashing: hash runtime modules: 1.137063 ms
<t> hashing: hash chunks: 1.366984 ms
<t> hashing: hash digest: 0.047793 ms
<t> hashing: process full hash modules: 0.159512 ms
<t> hashing: 2.987043 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.069858 ms
<t> module assets: 0.169629 ms
<t> create chunk assets: 3.820113 ms
<t> process assets: 15310.660789 ms

LOG from webpack.Compiler
<t> make hook: 12432.26634 ms
<t> finish make hook: 0.119167 ms
<t> finish compilation: 46.736208 ms
<t> seal compilation: 16236.814814 ms
<t> afterCompile hook: 0.16011 ms
<t> emitAssets: 3.680568 ms
<t> emitRecords: 0.058199 ms
<t> done hook: 361.702958 ms
<t> beginIdle: 0.781334 ms

LOG from webpack.Compilation.ModuleProfile
     | 34 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 43 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 41 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 125 ms (parallelism 4.8) resolve to new modules > ./src/main.ts
     | 128 ms (parallelism 4.3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loading.service.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 65 ms (parallelism 17) resolve to new modules > ./src/app/loading/loading.component.ts
     | 82 ms (parallelism 24.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 104 ms (parallelism 41.7) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1633 ms resolve to new modules
<i>  |  | 273 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 273 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 58 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 58 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 356 ms (parallelism 34.3) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 356 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 177 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 88 ms (parallelism 16.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 77 ms (parallelism 22.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 86 ms (parallelism 16.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 81 ms (parallelism 17.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 59 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 61 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 59 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 59 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 62 ms (parallelism 43.2) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 59 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 60 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 61 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 63 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 62 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 61 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 66 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 63 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 63 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 63 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 65 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 63 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 64 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 63 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 64 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 63 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 65 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 64 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 66 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 65 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 66 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 67 ms (parallelism 42.1) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 67 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 67 ms (parallelism 42) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 92 ms (parallelism 40.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 91 ms (parallelism 41.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 91 ms (parallelism 41.9) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 91 ms (parallelism 42) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3059 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 167 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 35 ms (parallelism 41.5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 35 ms (parallelism 41.4) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1878 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 336 ms (parallelism 35.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 336 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 262 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 82 ms (parallelism 16.4) build modules > ./src/app/material/material.module.ts
     |  | 96 ms (parallelism 35.6) build modules > ./src/app/news.service.ts
     |  | 96 ms (parallelism 35.6) build modules > ./src/app/quiz.service.ts
     |  | 95 ms (parallelism 36.3) build modules > ./src/app/menu/menu.component.ts
<i>  | 823 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6787 ms build modules
+ 98 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (879 real resolves with 0 cached but invalid, 1922 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.293112 ms
<t> figure out provided exports: 14.691784 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.207189 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 13.477239 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.863409 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.486317 ms
<t> trace exports usage in graph: 21.541983 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.663173 ms
<t> visitModules: visiting: 5.580269 ms
    443 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.665476 ms
<t> connectChunkGroups: 0.004564 ms
<t> cleanup: 0.003868 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.044845 ms
<t> modules: 2.996836 ms
<t> queue: 0.005812 ms
<t> maxSize: 0.039031 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.66398 ms
<t> sort relevant modules: 0.171019 ms
<t> find modules to concatenate: 15.009216 ms
<t> sort concat configurations: 0.051704 ms
<t> create concatenated modules: 10.981851 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 241.635807 ms
<t> optimize asset: polyfills.js: 745.603868 ms
<t> optimize asset: main.js: 13870.103924 ms
<t> optimize js assets: 14014.043477 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 23.318301 ms
<t> optimize css assets: 33.460176 ms

LOG from webpack.FileSystemInfo
    1195 new snapshots created
    0% root snapshot uncached (0 / 1922)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1040 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5104/6253) entries shared via 12 shared snapshots (805 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3828/4436) entries shared via 247 shared snapshots (747 times referenced)
    Managed items info in cache: 158 items
    Managed items snapshot optimization: 28% (570/2042) entries shared via 32 shared snapshots (98 times referenced)
    Managed files snapshot optimization: 77% (4918/6388) entries shared via 256 shared snapshots (975 times referenced)
    Managed missing snapshot optimization: 83% (5431/6546) entries shared via 325 shared snapshots (906 times referenced)

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
    at Worker.emit (node:events:514:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:741:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-08-03 14:06:30: webpack 5.86.0 compiled in 32296 ms (6af8c452a11bf42f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 875.784567 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 45.47385 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.564174 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.405311 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 4.630521 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.017802 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.066594 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.199559 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.173184 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.225321 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.199255 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.099078 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.965711 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.533659 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 2.582289 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.129854 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.602748 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.125718 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 6.835836 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchMapTo.js': 3.682206 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 18.624108 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.007438 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 355.248423 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 602.14 kB |               140.20 kB
styles.css          | styles        | 262.89 kB |                17.18 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 898.92 kB |               168.50 kB

Build at: 2023-08-03T18:06:33.560Z - Hash: 6af8c452a11bf42f - Time: 34900ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 398.92 kB with a total of 898.92 kB.


Done in 36.93s.
```
Thu Aug  3 02:07:01 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.430
info New version: 0.0.431
Done in 0.13s.
