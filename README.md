Fri Jun 30 02:43:06 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       4.4Gi       370Mi       8.6Gi        12Gi
Swap:          8.0Gi        54Mi       7.9Gi
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
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001509
Installed version:  1.0.30001509
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3598.598796 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularfifteen/package.json invalidated because hashes differ (ae11de828b40bdce != e5e1d82244f245bb)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 689.448542 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 6.092549 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (886 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.767968 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 1.978353 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (886 KiB): 32.458901 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (71.8 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.107919 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/http.mjs': 1.030881 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.155158 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.137863 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 2.298976 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.105341 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (71.8 MiB): 282.756825 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 268 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 269 KiB = runtime.js 906 bytes styles.css 268 KiB
chunk {179} (runtime: runtime) main.js (main) 4.78 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 191 modules [943] 4.75 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 310 KiB (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 310 KiB (css/mini-extract) [cached] 3 modules
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    4190 ms (resolving: 792 ms, restoring: 1 ms, integration: 0 ms, building: 3397 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    371 new snapshots created
    38% root snapshot uncached (1191 / 3174)
    23% children snapshot uncached (827 / 3618)
    3040 entries tested
    File info in cache: 1046 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 75% (1931/2582) entries shared via 12 shared snapshots (275 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 85% (3746/4415) entries shared via 245 shared snapshots (728 times referenced)
    Managed items info in cache: 164 items
    Managed items snapshot optimization: 46% (506/1092) entries shared via 29 shared snapshots (90 times referenced)
    Managed files snapshot optimization: 77% (1700/2200) entries shared via 91 shared snapshots (230 times referenced)
    Managed missing snapshot optimization: 80% (1978/2483) entries shared via 119 shared snapshots (279 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.107823 ms
<t> runtime requirements.chunks: 0.141169 ms
<t> runtime requirements.entries: 0.878985 ms
<t> finish module profiles: 5.61459 ms
<t> compute affected modules: 0.002755 ms
<t> finish modules: 42.61896 ms
<t> report dependency errors and warnings: 10.404214 ms
<t> optimize dependencies: 28.497547 ms
<t> create chunks: 12.239529 ms
<t> compute affected modules with chunk graph: 0.003675 ms
<t> optimize: 39.342089 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 20.118168 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.358915 ms
<t> runtime requirements.modules: 0.059474 ms
<t> runtime requirements.chunks: 0.051227 ms
<t> runtime requirements.entries: 0.428448 ms
<t> runtime requirements: 0.761802 ms
<t> hashing: initialize hash: 0.00512 ms
<t> hashing: hash warnings: 0.002977 ms
<t> hashing: sort chunks: 0.03907 ms
<t> hashing: hash runtime modules: 1.183811 ms
<t> hashing: hash chunks: 1.204373 ms
<t> hashing: hash digest: 0.023722 ms
<t> hashing: process full hash modules: 0.297804 ms
<t> hashing: 2.954766 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.084677 ms
<t> module assets: 0.264044 ms
<t> create chunk assets: 1.680831 ms
<t> process assets: 1187.10536 ms

LOG from webpack.Compiler
<t> make hook: 4236.428566 ms
<t> finish make hook: 0.117607 ms
<t> finish compilation: 58.678873 ms
<t> seal compilation: 1295.461118 ms
<t> afterCompile hook: 0.121202 ms
<t> emitAssets: 4.372402 ms
<t> emitRecords: 0.083043 ms
<t> done hook: 267.690922 ms
<t> beginIdle: 0.472786 ms

LOG from webpack.Compilation.ModuleProfile
     | 158 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 158 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 226 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 223 ms (parallelism 5) resolve to new modules > ./src/main.ts
<i>  | 223 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 49 ms (parallelism 7) resolve to new modules > ./src/app/app.module.ts
     | 49 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 49 ms (parallelism 7.1) resolve to new modules > ./src/environments/environment.ts
     | 55 ms (parallelism 8.9) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 55 ms (parallelism 9) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i> 1407 ms resolve to new modules
     | 57 ms (parallelism 5) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    74 ms integrate modules
<w>  |  | 513 ms (parallelism 6.6) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 513 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 458 ms (parallelism 6.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 458 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w> 1028 ms build modules
     | 57 ms (parallelism 5) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    74 ms restore modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    13% really resolved (360 real resolves with 360 cached but invalid, 2499 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.959934 ms
<t> figure out provided exports: 4.834957 ms
    2% of exports of modules have been determined (10 no declared exports, 7 not cached, 0 flagged uncacheable, 305 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.005058 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.673975 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 12.212354 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.424435 ms
<t> trace exports usage in graph: 15.456086 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 9.531145 ms
<t> visitModules: visiting: 10.427926 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 10.510744 ms
<t> connectChunkGroups: 0.00457 ms
<t> cleanup: 0.002754 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038853 ms
<t> modules: 3.123558 ms
<t> queue: 0.005663 ms
<t> maxSize: 0.037667 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.519816 ms
<t> sort relevant modules: 0.300864 ms
<t> find modules to concatenate: 13.637534 ms
<t> sort concat configurations: 0.040802 ms
<t> create concatenated modules: 11.073769 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.21671 ms
+ 1 hidden lines

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

2023-06-30 14:43:31: webpack 5.86.0 compiled in 9133 ms (e64ebd3053fc5502)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 416.784517 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 10.075383 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 371 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.383098 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.135836 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 59.502576 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1630 items, 4 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.45 kB |               139.91 kB
styles.css          | styles        | 268.19 kB |                17.85 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.52 kB |               168.88 kB

Build at: 2023-06-30T18:43:33.067Z - Hash: e64ebd3053fc5502 - Time: 10751ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.52 kB with a total of 900.52 kB.


Done in 12.59s.
```
Fri Jun 30 02:43:47 PM EDT 2023
yarn version v1.22.19
info Current version: 0.0.411
info New version: 0.0.412
Done in 0.13s.
