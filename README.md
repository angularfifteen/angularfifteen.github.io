Wed Nov 16 08:02:33 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       8.7Gi       1.9Gi       1.1Gi       4.7Gi       5.1Gi
Swap:          8.0Gi       3.2Gi       4.8Gi
System Storage
3.8G	.
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
    
Done in 0.86s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.49s.
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
chunk {179} (runtime: runtime) main.js (main) 5.55 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 857 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 207 modules [335] 4.71 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1436 ms (resolving: 1129 ms, restoring: 0 ms, integration: 0 ms, building: 307 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 320 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 320 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1613 ms (resolving: 634 ms, restoring: 0 ms, integration: 0 ms, building: 979 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    7658 ms (resolving: 726 ms, restoring: 1 ms, integration: 0 ms, building: 6931 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.734306 ms
<t> runtime requirements.chunks: 0.75204 ms
<t> runtime requirements.entries: 3.11993 ms
<t> runtime requirements.modules: 0.033048 ms
<t> runtime requirements.chunks: 0.029909 ms
<t> runtime requirements.entries: 0.24084 ms
<t> finish module profiles: 15.238307 ms
<t> compute affected modules: 0.00383 ms
<t> finish modules: 34.988485 ms
<t> report dependency errors and warnings: 24.654878 ms
<t> optimize dependencies: 40.912955 ms
<t> create chunks: 10.28096 ms
<t> compute affected modules with chunk graph: 0.008086 ms
<t> optimize: 73.426225 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 27.560191 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1658.499047 ms
<t> runtime requirements.modules: 0.152455 ms
<t> runtime requirements.chunks: 0.143936 ms
<t> runtime requirements.entries: 0.675059 ms
<t> runtime requirements: 1.492371 ms
<t> hashing: initialize hash: 0.009795 ms
<t> hashing: hash warnings: 0.004549 ms
<t> hashing: sort chunks: 0.129526 ms
<t> hashing: hash runtime modules: 1.371682 ms
<t> hashing: hash chunks: 1.820709 ms
<t> hashing: hash digest: 0.052778 ms
<t> hashing: process full hash modules: 0.236286 ms
<t> hashing: 4.35569 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.090729 ms
<t> module assets: 0.331068 ms
<t> create chunk assets: 6.801884 ms
<t> process assets: 9446.404026 ms

LOG from webpack.Compiler
<t> make hook: 7714.101109 ms
<t> finish make hook: 0.170259 ms
<t> finish compilation: 74.936776 ms
<t> seal compilation: 11273.100009 ms
<t> afterCompile hook: 0.225189 ms
<t> emitAssets: 4.690263 ms
<t> emitRecords: 0.372693 ms
<t> done hook: 486.359366 ms
<t> beginIdle: 0.983406 ms

LOG from webpack.Compilation.ModuleProfile
     | 127 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 145 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 213 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 212 ms (parallelism 5.3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 241 ms (parallelism 5.3) resolve to new modules > ./src/main.ts
     | 165 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 55 ms (parallelism 12.4) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 55 ms (parallelism 12.4) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 37 ms (parallelism 11.6) resolve to new modules > ./src/app/loading.service.ts
     | 42 ms (parallelism 22.4) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
<i> 1784 ms resolve to new modules
     | 37 ms (parallelism 11.6) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
    59 ms resolve to existing modules
     |  | 176 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 176 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 64 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 64 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 269 ms (parallelism 25.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 269 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 242 ms (parallelism 27) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 242 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 59 ms (parallelism 5.6) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 55 ms (parallelism 12.2) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 41 ms (parallelism 15.6) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     | 686 ms build modules > 81 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 55 ms (parallelism 5.6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 565 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 218 ms (parallelism 4.5) build modules > ./src/main.ts
     |  | 37 ms (parallelism 12.6) build modules > ./src/app/material/material.module.ts
<i>  | 402 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 2406 ms build modules
+ 34 hidden lines

LOG from webpack.ResolverCachePlugin
    29% really resolved (929 real resolves with 0 cached but invalid, 2256 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.934765 ms
<t> figure out provided exports: 21.09782 ms
    96% of exports of modules have been determined (15 no declared exports, 348 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 24 additional calculations due to dependencies)
<t> store provided exports into cache: 2.810921 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 19.703168 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 16.774378 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.981402 ms
<t> trace exports usage in graph: 22.55521 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 6.271481 ms
<t> visitModules: visiting: 7.502144 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 7.60984 ms
<t> connectChunkGroups: 0.004483 ms
<t> cleanup: 0.003288 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.057297 ms
<t> modules: 4.430225 ms
<t> queue: 0.006755 ms
<t> maxSize: 0.0398 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.053284 ms
<t> sort relevant modules: 0.294872 ms
<t> find modules to concatenate: 22.966556 ms
<t> sort concat configurations: 0.054524 ms
<t> create concatenated modules: 17.279458 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 371.420167 ms
<t> optimize asset: polyfills.js: 969.025889 ms
<t> optimize asset: main.js: 7730.278974 ms
<t> optimize js assets: 7932.536449 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 31.557639 ms
<t> optimize css assets: 63.11051 ms

LOG from webpack.FileSystemInfo
    1280 new snapshots created
    0% root snapshot uncached (0 / 2256)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5391/6643) entries shared via 12 shared snapshots (851 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4017/4624) entries shared via 257 shared snapshots (784 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 33% (762/2282) entries shared via 44 shared snapshots (138 times referenced)
    Managed files snapshot optimization: 75% (4833/6459) entries shared via 268 shared snapshots (1009 times referenced)
    Managed missing snapshot optimization: 82% (5791/7057) entries shared via 340 shared snapshots (921 times referenced)

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

2022-11-16 20:03:20: webpack 5.75.0 compiled in 26275 ms (b7a41babb3e6b898)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 583.76 kB |               136.64 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 903.28 kB |               165.92 kB

Build at: 2022-11-17T01:03:23.281Z - Hash: b7a41babb3e6b898 - Time: 29113ms
Done in 31.12s.
```
