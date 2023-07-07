Fri Jul  7 08:45:52 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.2Gi       2.8Gi       535Mi       9.3Gi        11Gi
Swap:          8.0Gi       262Mi       7.7Gi
System Storage
1.4G	.
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
    

Angular CLI: 16.1.3
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.3
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.3
@angular-devkit/build-angular   16.1.3
@angular-devkit/core            16.1.3
@angular-devkit/schematics      16.1.3
@schematics/angular             16.1.3
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.51s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
Latest version:     1.0.30001513
Installed version:  1.0.30001512
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001513
Installed version:  1.0.30001513
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.4/angular-webpack/b82020a30d0a17bdd85ed7810ef2a18680c88c74.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.4/angular-webpack/b82020a30d0a17bdd85ed7810ef2a18680c88c74/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3523.680304 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 602 KiB {179} [emitted] (name: main)
asset styles.css 266 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 603 KiB = runtime.js 906 bytes main.js 602 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 267 KiB = runtime.js 906 bytes styles.css 266 KiB
chunk {179} (runtime: runtime) main.js (main) 4.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.75 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1113 ms (resolving: 198 ms, restoring: 1 ms, integration: 0 ms, building: 914 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 306 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 306 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1481 ms (resolving: 49 ms, restoring: 1 ms, integration: 0 ms, building: 1431 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12172 ms (resolving: 150 ms, restoring: 0 ms, integration: 0 ms, building: 12022 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.391623 ms
<t> runtime requirements.chunks: 0.445066 ms
<t> runtime requirements.entries: 1.394664 ms
<t> runtime requirements.modules: 0.030835 ms
<t> runtime requirements.chunks: 0.016954 ms
<t> runtime requirements.entries: 0.230086 ms
<t> finish module profiles: 10.816651 ms
<t> compute affected modules: 0.003132 ms
<t> finish modules: 23.931467 ms
<t> report dependency errors and warnings: 10.285309 ms
<t> optimize dependencies: 32.153744 ms
<t> create chunks: 7.379806 ms
<t> compute affected modules with chunk graph: 0.004436 ms
<t> optimize: 45.885259 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.256413 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 785.117573 ms
<t> runtime requirements.modules: 0.126783 ms
<t> runtime requirements.chunks: 0.069585 ms
<t> runtime requirements.entries: 0.488267 ms
<t> runtime requirements: 0.880518 ms
<t> hashing: initialize hash: 0.008731 ms
<t> hashing: hash warnings: 0.003885 ms
<t> hashing: sort chunks: 0.053981 ms
<t> hashing: hash runtime modules: 1.075261 ms
<t> hashing: hash chunks: 1.3787 ms
<t> hashing: hash digest: 0.021223 ms
<t> hashing: process full hash modules: 0.151817 ms
<t> hashing: 2.890792 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.110259 ms
<t> module assets: 0.17367 ms
<t> create chunk assets: 3.656664 ms
<t> process assets: 15418.983726 ms

LOG from webpack.Compiler
<t> make hook: 12219.20365 ms
<t> finish make hook: 0.127952 ms
<t> finish compilation: 45.080315 ms
<t> seal compilation: 16316.56447 ms
<t> afterCompile hook: 0.231401 ms
<t> emitAssets: 5.341135 ms
<t> emitRecords: 0.089232 ms
<t> done hook: 370.639567 ms
<t> beginIdle: 0.750278 ms

LOG from webpack.Compilation.ModuleProfile
     | 40 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 38 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 129 ms (parallelism 4.8) resolve to new modules > ./src/main.ts
     | 45 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 103 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 103 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 35 ms (parallelism 31.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 88 ms (parallelism 45.5) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1009 ms resolve to new modules
     | 90 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    111 ms resolve to existing modules
<i>  |  | 261 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 261 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 64 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 64 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 345 ms (parallelism 34.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 345 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 163 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 93 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 126 ms (parallelism 12.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 139 ms (parallelism 12.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 126 ms (parallelism 12.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 126 ms (parallelism 13.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 55 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 55 ms (parallelism 51.1) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 54 ms (parallelism 51.1) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 55 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 58 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 56 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 55 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 55 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 58 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 56 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 57 ms (parallelism 50.6) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 56 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 56 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 60 ms (parallelism 49.9) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 59 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 59 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 59 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 61 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 59 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 59 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 60 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 60 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 60 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 60 ms (parallelism 49.7) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 61 ms (parallelism 49.4) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 62 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 61 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 87 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 62 ms (parallelism 49.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 62 ms (parallelism 49.2) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 87 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 82 ms (parallelism 43.3) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 82 ms (parallelism 44) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 82 ms (parallelism 42.4) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 83 ms (parallelism 41.9) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3186 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 153 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 41 ms (parallelism 33.2) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 41 ms (parallelism 33.2) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1982 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 323 ms (parallelism 35.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 323 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 252 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 100 ms (parallelism 11.2) build modules > ./src/app/app.component.ts
     |  | 114 ms (parallelism 12.1) build modules > ./src/app/material/material.module.ts
     |  | 81 ms (parallelism 41.6) build modules > ./src/app/news.service.ts
     |  | 81 ms (parallelism 41.6) build modules > ./src/app/quiz.service.ts
     |  | 80 ms (parallelism 43.9) build modules > ./src/app/menu/menu.component.ts
<i>  | 905 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7069 ms build modules
+ 96 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (879 real resolves with 0 cached but invalid, 1945 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.712996 ms
<t> figure out provided exports: 11.092387 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.161035 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.27976 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.303988 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.479431 ms
<t> trace exports usage in graph: 20.913439 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.774119 ms
<t> visitModules: visiting: 5.693827 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.786793 ms
<t> connectChunkGroups: 0.004488 ms
<t> cleanup: 0.003671 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035788 ms
<t> modules: 3.072502 ms
<t> queue: 0.005806 ms
<t> maxSize: 0.143582 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.758699 ms
<t> sort relevant modules: 0.174569 ms
<t> find modules to concatenate: 14.282995 ms
<t> sort concat configurations: 0.050347 ms
<t> create concatenated modules: 10.662491 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 279.374329 ms
<t> optimize asset: polyfills.js: 820.043166 ms
<t> optimize asset: main.js: 13848.964772 ms
<t> optimize js assets: 13994.38847 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 32.000984 ms
<t> optimize css assets: 42.862085 ms

LOG from webpack.FileSystemInfo
    1195 new snapshots created
    0% root snapshot uncached (0 / 1945)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1040 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5104/6253) entries shared via 12 shared snapshots (805 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3839/4436) entries shared via 247 shared snapshots (743 times referenced)
    Managed items info in cache: 158 items
    Managed items snapshot optimization: 29% (584/2042) entries shared via 33 shared snapshots (102 times referenced)
    Managed files snapshot optimization: 77% (4906/6380) entries shared via 256 shared snapshots (975 times referenced)
    Managed missing snapshot optimization: 83% (5424/6546) entries shared via 323 shared snapshots (901 times referenced)

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

2023-07-07 08:47:08: webpack 5.86.0 compiled in 32070 ms (8b74b91db64c0ecb)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 901.369379 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.347578 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.445542 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.874841 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.666345 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.688535 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.144923 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.244738 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.102495 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.568755 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.74532 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.247555 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.926858 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.902948 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.429257 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.336461 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.084404 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.560699 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.072333 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.33355 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchMapTo.js': 3.35856 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 22.958678 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.613242 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 389.388047 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 601.64 kB |               140.16 kB
styles.css          | styles        | 266.00 kB |                17.52 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 901.52 kB |               168.81 kB

Build at: 2023-07-07T12:47:10.679Z - Hash: 8b74b91db64c0ecb - Time: 34707ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 401.52 kB with a total of 901.52 kB.


Done in 36.78s.
```
Fri Jul  7 08:47:39 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.414
info New version: 0.0.415
Done in 0.13s.
