Sat Nov 19 10:32:15 AM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       2.0Gi       541Mi        11Gi        12Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
1.1G	.
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
    

Angular CLI: 15.0.0
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.0
@angular-devkit/build-angular   15.0.0
@angular-devkit/core            15.0.0
@angular-devkit/schematics      15.0.0
@schematics/angular             15.0.0
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.72s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
asset main.js 584 KiB {179} [emitted] (name: main)
asset styles.css 286 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 585 KiB = runtime.js 906 bytes main.js 584 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 286 KiB = runtime.js 906 bytes styles.css 286 KiB
chunk {179} (runtime: runtime) main.js (main) 5.55 MiB [initial]
  cached modules 857 KiB [cached] 1 module
  ./src/main.ts + 207 modules [335] 4.71 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial]
  cached modules 106 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 320 KiB (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 129 KiB (css/mini-extract) [cached] 2 modules
  dependent modules 191 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    4982 ms (resolving: 703 ms, restoring: 0 ms, integration: 0 ms, building: 4279 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    384 new snapshots created
    35% root snapshot uncached (1273 / 3648)
    25% children snapshot uncached (835 / 3386)
    3269 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1991/2673) entries shared via 11 shared snapshots (286 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4041/4574) entries shared via 256 shared snapshots (784 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 51% (619/1216) entries shared via 38 shared snapshots (113 times referenced)
    Managed files snapshot optimization: 75% (1541/2060) entries shared via 101 shared snapshots (244 times referenced)
    Managed missing snapshot optimization: 80% (2235/2801) entries shared via 127 shared snapshots (291 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.149659 ms
<t> runtime requirements.chunks: 0.175909 ms
<t> runtime requirements.entries: 1.244751 ms
<t> finish module profiles: 9.592277 ms
<t> compute affected modules: 0.004487 ms
<t> finish modules: 77.093942 ms
<t> report dependency errors and warnings: 19.102623 ms
<t> optimize dependencies: 39.854469 ms
<t> create chunks: 16.434704 ms
<t> compute affected modules with chunk graph: 0.007628 ms
<t> optimize: 73.808545 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 25.414744 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.379374 ms
<t> runtime requirements.modules: 0.091661 ms
<t> runtime requirements.chunks: 0.066596 ms
<t> runtime requirements.entries: 0.61511 ms
<t> runtime requirements: 1.020489 ms
<t> hashing: initialize hash: 0.005922 ms
<t> hashing: hash warnings: 0.004201 ms
<t> hashing: sort chunks: 0.068246 ms
<t> hashing: hash runtime modules: 1.273639 ms
<t> hashing: hash chunks: 1.617914 ms
<t> hashing: hash digest: 0.025312 ms
<t> hashing: process full hash modules: 0.275285 ms
<t> hashing: 3.483758 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.081026 ms
<t> module assets: 0.275226 ms
<t> create chunk assets: 1.594422 ms
<t> process assets: 1611.8733 ms

LOG from webpack.Compiler
<t> make hook: 5014.625684 ms
<t> finish make hook: 0.126117 ms
<t> finish compilation: 105.839926 ms
<t> seal compilation: 1776.3088579999999 ms
<t> afterCompile hook: 0.149807 ms
<t> emitAssets: 5.259991 ms
<t> emitRecords: 0.089833 ms
<t> done hook: 428.612436 ms
<t> beginIdle: 0.556255 ms

LOG from webpack.Compilation.ModuleProfile
     | 141 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 140 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 188 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 187 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 187 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 103 ms (parallelism 5) resolve to new modules > ./src/environments/environment.ts
     | 102 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
     | 102 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
    1413 ms resolve to new modules
     | 80 ms (parallelism 5.7) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 36 ms (parallelism 6) integrate modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 35 ms (parallelism 6) integrate modules > ./node_modules/zone.js/fesm2015/zone.js
     | 35 ms (parallelism 6) integrate modules > ./src/main.ts
    261 ms integrate modules
<i>  |  | 464 ms (parallelism 9.2) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 464 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 440 ms (parallelism 9.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 440 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 977 ms build modules
     | 80 ms (parallelism 5.7) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 36 ms (parallelism 6) restore modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 35 ms (parallelism 6) restore modules > ./node_modules/zone.js/fesm2015/zone.js
     | 35 ms (parallelism 6) restore modules > ./src/main.ts
    261 ms restore modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    11% really resolved (373 real resolves with 373 cached but invalid, 2926 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.539187 ms
<t> figure out provided exports: 10.952473 ms
    8% of exports of modules have been determined (10 no declared exports, 27 not cached, 0 flagged uncacheable, 320 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006933 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.464246 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.656297 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.605354 ms
<t> trace exports usage in graph: 24.957474 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 10.811218 ms
<t> visitModules: visiting: 13.090707 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 13.247477 ms
<t> connectChunkGroups: 0.006089 ms
<t> cleanup: 0.006182 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.054522 ms
<t> modules: 4.03122 ms
<t> queue: 0.005976 ms
<t> maxSize: 0.038411 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.986999 ms
<t> sort relevant modules: 0.282621 ms
<t> find modules to concatenate: 21.487265 ms
<t> sort concat configurations: 0.068469 ms
<t> create concatenated modules: 27.923003 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.253837 ms
+ 1 hidden lines

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
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
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:731:20)
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
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:731:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2022-11-19 10:32:42: webpack 5.75.0 compiled in 11653 ms (b7a41babb3e6b898)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 583.76 kB |               136.64 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 903.28 kB |               165.92 kB

Build at: 2022-11-19T15:32:44.054Z - Hash: b7a41babb3e6b898 - Time: 13483ms
Done in 15.59s.
```
Sat Nov 19 10:33:02 AM EST 2022
yarn version v1.22.19
info Current version: 0.0.15
info New version: 0.0.16
Done in 0.12s.
