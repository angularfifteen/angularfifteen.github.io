Wed Sep 27 02:47:19 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.8Gi       4.2Gi       285Mi       9.2Gi        12Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
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
    

Angular CLI: 16.2.4
Node: 18.18.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.6
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.4
@angular-devkit/build-angular   16.2.4
@angular-devkit/core            16.2.4
@angular-devkit/schematics      16.2.4
@angular/cdk                    16.2.5
@angular/cli                    16.2.4
@angular/material               16.2.5
@schematics/angular             16.2.4
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001540
Installed version:  1.0.30001540
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001540
Installed version:  1.0.30001540
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3453.002176 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularfifteen/package.json invalidated because hashes differ (a2194a7bbdf36d92 != 3c4964be2a2733a8)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 910.616745 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 6.107455 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (73.7 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.143418 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.045293 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.038537 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 2.037132 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.03347 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'FlagDependencyExportsPlugin|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/NotificationFactories.js': 5.429636 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (73.7 MiB): 202.612043 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle
asset main.js 604 KiB {179} [emitted] (name: main)
asset styles.css 243 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 605 KiB = runtime.js 906 bytes main.js 604 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 244 KiB = runtime.js 906 bytes styles.css 243 KiB
chunk {179} (runtime: runtime) main.js (main) 4.88 MiB [initial] [rendered]
  cached modules 37.3 KiB [cached] 1 module
  ./src/main.ts + 191 modules [943] 4.85 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 273 KiB (css/mini-extract) [initial]
  cached modules 273 KiB [cached] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1695 ms (resolving: 1182 ms, restoring: 0 ms, integration: 0 ms, building: 513 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    6576 ms (resolving: 1181 ms, restoring: 1 ms, integration: 0 ms, building: 5394 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    449 new snapshots created
    37% root snapshot uncached (1176 / 3203)
    23% children snapshot uncached (750 / 3327)
    2785 entries tested
    File info in cache: 960 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/69) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 76% (2149/2814) entries shared via 12 shared snapshots (307 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3594/4109) entries shared via 220 shared snapshots (702 times referenced)
    Managed items info in cache: 143 items
    Managed items snapshot optimization: 48% (570/1200) entries shared via 27 shared snapshots (113 times referenced)
    Managed files snapshot optimization: 70% (1556/2232) entries shared via 82 shared snapshots (254 times referenced)
    Managed missing snapshot optimization: 78% (1757/2267) entries shared via 107 shared snapshots (278 times referenced)
+ 4 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.097348 ms
<t> runtime requirements.chunks: 0.115632 ms
<t> runtime requirements.entries: 0.982209 ms
<t> runtime requirements.modules: 0.027532 ms
<t> runtime requirements.chunks: 0.016272 ms
<t> runtime requirements.entries: 0.270474 ms
<t> finish module profiles: 5.67416 ms
<t> compute affected modules: 0.002964 ms
<t> finish modules: 41.885142 ms
<t> report dependency errors and warnings: 11.679332 ms
<t> optimize dependencies: 28.55197 ms
<t> create chunks: 11.606613 ms
<t> compute affected modules with chunk graph: 0.003232 ms
<t> optimize: 42.24714 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 20.832167 ms
    14% code generated (1 generated, 6 from cache)
<t> code generation: 804.687996 ms
<t> runtime requirements.modules: 0.105514 ms
<t> runtime requirements.chunks: 0.066348 ms
<t> runtime requirements.entries: 0.518504 ms
<t> runtime requirements: 0.890666 ms
<t> hashing: initialize hash: 0.007738 ms
<t> hashing: hash warnings: 0.003409 ms
<t> hashing: sort chunks: 0.052769 ms
<t> hashing: hash runtime modules: 1.084977 ms
<t> hashing: hash chunks: 1.274016 ms
<t> hashing: hash digest: 0.018348 ms
<t> hashing: process full hash modules: 0.152501 ms
<t> hashing: 2.77872 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.060507 ms
<t> module assets: 0.238254 ms
<t> create chunk assets: 2.963655 ms
<t> process assets: 6633.7408510000005 ms

LOG from webpack.Compiler
<t> make hook: 6615.753618 ms
<t> finish make hook: 0.122627 ms
<t> finish compilation: 59.280646 ms
<t> seal compilation: 7550.462223 ms
<t> afterCompile hook: 0.067477 ms
<t> emitAssets: 3.522172 ms
<t> emitRecords: 0.06418 ms
<t> done hook: 322.902635 ms
<t> beginIdle: 0.417739 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 236 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 236 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 240 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 238 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 239 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 97 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
<i> 1445 ms resolve to new modules
     | 54 ms (parallelism 2) integrate modules > ./src/main.ts
    67 ms integrate modules
<i>  |  | 285 ms (parallelism 19) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 285 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 97 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 97 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 57 ms (parallelism 33.9) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 61 ms (parallelism 33.4) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 60 ms (parallelism 33.6) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 61 ms (parallelism 33.5) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 68 ms (parallelism 35.2) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 64 ms (parallelism 33) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 63 ms (parallelism 33.2) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 64 ms (parallelism 32.9) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 65 ms (parallelism 32.7) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 57 ms (parallelism 33.8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 59 ms (parallelism 33.8) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 59 ms (parallelism 33.7) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 56 ms (parallelism 33.9) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 58 ms (parallelism 33.8) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 66 ms (parallelism 32.5) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 66 ms (parallelism 32.5) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 67 ms (parallelism 32.3) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 62 ms (parallelism 33.2) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 63 ms (parallelism 33.1) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 64 ms (parallelism 32.9) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 69 ms (parallelism 31.9) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 70 ms (parallelism 31.7) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 57 ms (parallelism 33.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 60 ms (parallelism 33.5) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 67 ms (parallelism 32.3) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 68 ms (parallelism 32.2) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 72 ms (parallelism 31.3) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 59 ms (parallelism 33.6) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 60 ms (parallelism 33.6) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 60 ms (parallelism 33.6) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 71 ms (parallelism 32.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
<i>  | 2054 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 98 ms (parallelism 5.3) build modules > ./src/main.ts
     | 149 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 272 ms (parallelism 19.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 272 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 2882 ms build modules
     | 54 ms (parallelism 2) restore modules > ./src/main.ts
    67 ms restore modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    13% really resolved (385 real resolves with 385 cached but invalid, 2502 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.189583 ms
<t> figure out provided exports: 5.597046 ms
    3% of exports of modules have been determined (15 no declared exports, 10 not cached, 0 flagged uncacheable, 303 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.318151 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 3.852328 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.656762 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.449209 ms
<t> trace exports usage in graph: 17.018958 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.950336 ms
<t> visitModules: visiting: 9.853196 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.942398 ms
<t> connectChunkGroups: 0.00395 ms
<t> cleanup: 0.002379 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.029159 ms
<t> modules: 2.786612 ms
<t> queue: 0.004847 ms
<t> maxSize: 0.032616 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.584899 ms
<t> sort relevant modules: 0.207537 ms
<t> find modules to concatenate: 15.668449 ms
<t> sort concat configurations: 0.04782 ms
<t> create concatenated modules: 10.176599 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: main.js: 5299.684067 ms
<t> optimize js assets: 5467.500314 ms
+ 2 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 2.057637 ms
+ 1 hidden lines

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

2023-09-27 14:48:02: webpack 5.88.2 compiled in 17626 ms (c6af38547e0a685c)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 971.816395 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 18.416706 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 455 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.696352 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.922084 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.537355 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 3.01311 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.36858 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.230754 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.196039 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/scheduled|request=|../util/isIterable': 1.424015 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/expansion.mjs': 1.908197 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.768928 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.196596 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.642732 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/autocomplete.mjs': 4.526665 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 6.619567 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 2.431766 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/slide-toggle.mjs': 1.212691 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.40205 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 1.613411 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 3.677049 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.619691 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/dialog.mjs': 2.515654 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/src/app/home|request=|@angular/platform-browser': 1.777037 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.021707 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.916814 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 12.351598 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 467.979897 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1609 items, 2 files, 77 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 603.89 kB |               140.65 kB
styles.css          | styles        | 242.93 kB |                16.26 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 880.71 kB |               168.04 kB

Build at: 2023-09-27T18:48:05.858Z - Hash: c6af38547e0a685c - Time: 20536ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 380.71 kB with a total of 880.71 kB.


Done in 22.43s.
```
Wed Sep 27 02:48:25 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.471
info New version: 0.0.472
Done in 0.12s.
