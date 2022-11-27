Sun Nov 27 04:15:07 PM EST 2022

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.6Gi       2.4Gi       1.5Gi       8.2Gi       8.8Gi
Swap:          8.0Gi        75Mi       7.9Gi
System Storage
3.5G	.
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
    

Angular CLI: 15.0.1
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.1
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.1
@angular-devkit/build-angular   15.0.1
@angular-devkit/core            15.0.1
@angular-devkit/schematics      15.0.1
@angular/cdk                    15.0.0
@angular/material               15.0.0
@schematics/angular             15.0.1
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.75s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
asset main.js 587 KiB {179} [emitted] (name: main)
asset styles.css 286 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 16 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 588 KiB = runtime.js 906 bytes main.js 587 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 286 KiB = runtime.js 906 bytes styles.css 286 KiB
chunk {179} (runtime: runtime) main.js (main) 5.54 MiB [initial]
  cached modules 857 KiB [cached] 1 module
  ./src/main.ts + 193 modules [386] 4.7 MiB {179} [built]
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
    5108 ms (resolving: 1037 ms, restoring: 0 ms, integration: 1 ms, building: 4070 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    383 new snapshots created
    37% root snapshot uncached (1235 / 3315)
    25% children snapshot uncached (836 / 3347)
    3200 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1984/2664) entries shared via 11 shared snapshots (285 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4026/4567) entries shared via 255 shared snapshots (779 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 50% (612/1215) entries shared via 38 shared snapshots (112 times referenced)
    Managed files snapshot optimization: 75% (1538/2056) entries shared via 100 shared snapshots (243 times referenced)
    Managed missing snapshot optimization: 80% (2232/2800) entries shared via 126 shared snapshots (290 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.290954 ms
<t> runtime requirements.chunks: 0.197171 ms
<t> runtime requirements.entries: 1.50687 ms
<t> finish module profiles: 14.633249 ms
<t> compute affected modules: 0.0037 ms
<t> finish modules: 92.2333 ms
<t> report dependency errors and warnings: 20.826461 ms
<t> optimize dependencies: 64.558263 ms
<t> create chunks: 12.2774 ms
<t> compute affected modules with chunk graph: 0.005197 ms
<t> optimize: 66.3275 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 26.538331 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.437879 ms
<t> runtime requirements.modules: 0.130021 ms
<t> runtime requirements.chunks: 0.078587 ms
<t> runtime requirements.entries: 0.76458 ms
<t> runtime requirements: 1.236919 ms
<t> hashing: initialize hash: 0.007635 ms
<t> hashing: hash warnings: 0.00426 ms
<t> hashing: sort chunks: 0.076672 ms
<t> hashing: hash runtime modules: 1.517453 ms
<t> hashing: hash chunks: 1.81019 ms
<t> hashing: hash digest: 0.026289 ms
<t> hashing: process full hash modules: 0.358793 ms
<t> hashing: 4.036337 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.093275 ms
<t> module assets: 0.294389 ms
<t> create chunk assets: 1.97097 ms
<t> process assets: 1457.826828 ms

LOG from webpack.Compiler
<t> make hook: 5153.983804 ms
<t> finish make hook: 0.121221 ms
<t> finish compilation: 127.742639 ms
<t> seal compilation: 1638.0370619999999 ms
<t> afterCompile hook: 0.089309 ms
<t> emitAssets: 5.242917 ms
<t> emitRecords: 0.083811 ms
<t> done hook: 367.210816 ms
<t> beginIdle: 0.579282 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 207 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 207 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 271 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 270 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 270 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 156 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
<i> 1594 ms resolve to new modules
     | 50 ms (parallelism 5.5) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    83 ms integrate modules
<w>  |  | 554 ms (parallelism 7.3) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 554 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 523 ms (parallelism 7.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 523 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 156 ms (parallelism 4) build modules > ./src/main.ts
     | 224 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 1302 ms build modules
     | 50 ms (parallelism 5.5) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    83 ms restore modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    12% really resolved (372 real resolves with 372 cached but invalid, 2613 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 7.579373 ms
<t> figure out provided exports: 13.781558 ms
    3% of exports of modules have been determined (10 no declared exports, 9 not cached, 0 flagged uncacheable, 319 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008209 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.417734 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 42.237583 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.656836 ms
<t> trace exports usage in graph: 21.095536 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.973158 ms
<t> visitModules: visiting: 10.123586 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 10.259706 ms
<t> connectChunkGroups: 0.00513 ms
<t> cleanup: 0.004058 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.061066 ms
<t> modules: 4.553178 ms
<t> queue: 0.008065 ms
<t> maxSize: 0.057166 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.109803 ms
<t> sort relevant modules: 0.364778 ms
<t> find modules to concatenate: 21.250263 ms
<t> sort concat configurations: 0.05359 ms
<t> create concatenated modules: 21.217779 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.32047 ms
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

2022-11-27 16:15:36: webpack 5.75.0 compiled in 11549 ms (61258541dae56586)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 586.69 kB |               136.97 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 906.21 kB |               166.25 kB

Build at: 2022-11-27T21:15:38.124Z - Hash: 61258541dae56586 - Time: 13595ms
Done in 15.76s.
```
