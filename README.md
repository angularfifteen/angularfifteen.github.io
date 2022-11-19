Sat Nov 19 11:04:14 AM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.7Gi       5.6Gi       495Mi       7.9Gi        12Gi
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
    
Done in 0.73s.
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
    5221 ms (resolving: 914 ms, restoring: 1 ms, integration: 0 ms, building: 4306 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    384 new snapshots created
    35% root snapshot uncached (1273 / 3654)
    25% children snapshot uncached (835 / 3386)
    3269 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1991/2673) entries shared via 11 shared snapshots (286 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4042/4574) entries shared via 257 shared snapshots (785 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 50% (612/1216) entries shared via 38 shared snapshots (112 times referenced)
    Managed files snapshot optimization: 75% (1541/2060) entries shared via 101 shared snapshots (244 times referenced)
    Managed missing snapshot optimization: 80% (2232/2801) entries shared via 126 shared snapshots (290 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.155637 ms
<t> runtime requirements.chunks: 0.183194 ms
<t> runtime requirements.entries: 1.340443 ms
<t> finish module profiles: 10.221576 ms
<t> compute affected modules: 0.00393 ms
<t> finish modules: 73.253111 ms
<t> report dependency errors and warnings: 15.038888 ms
<t> optimize dependencies: 32.602816 ms
<t> create chunks: 18.394677 ms
<t> compute affected modules with chunk graph: 0.005997 ms
<t> optimize: 63.637129 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 26.413341 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.372076 ms
<t> runtime requirements.modules: 0.084723 ms
<t> runtime requirements.chunks: 0.072662 ms
<t> runtime requirements.entries: 0.644694 ms
<t> runtime requirements: 1.065801 ms
<t> hashing: initialize hash: 0.006962 ms
<t> hashing: hash warnings: 0.004336 ms
<t> hashing: sort chunks: 0.070523 ms
<t> hashing: hash runtime modules: 1.36465 ms
<t> hashing: hash chunks: 1.716744 ms
<t> hashing: hash digest: 0.026117 ms
<t> hashing: process full hash modules: 0.294297 ms
<t> hashing: 3.718164 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.08771 ms
<t> module assets: 0.262369 ms
<t> create chunk assets: 1.675911 ms
<t> process assets: 1669.4586960000001 ms

LOG from webpack.Compiler
<t> make hook: 5261.736851 ms
<t> finish make hook: 0.134358 ms
<t> finish compilation: 98.565035 ms
<t> seal compilation: 1819.801864 ms
<t> afterCompile hook: 0.15542 ms
<t> emitAssets: 5.072543 ms
<t> emitRecords: 0.113882 ms
<t> done hook: 433.249774 ms
<t> beginIdle: 0.582126 ms

LOG from webpack.Compilation.ModuleProfile
     | 183 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 183 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 232 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 231 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 231 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 107 ms (parallelism 5.1) resolve to new modules > ./src/environments/environment.ts
     | 106 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
     | 106 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
<i> 1654 ms resolve to new modules
     | 80 ms (parallelism 5.7) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 35 ms (parallelism 6) integrate modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 35 ms (parallelism 6) integrate modules > ./node_modules/zone.js/fesm2015/zone.js
     | 35 ms (parallelism 6) integrate modules > ./src/main.ts
    238 ms integrate modules
<i>  |  | 456 ms (parallelism 9.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 456 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 431 ms (parallelism 9.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 431 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 962 ms build modules
     | 80 ms (parallelism 5.7) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 35 ms (parallelism 6) restore modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 35 ms (parallelism 6) restore modules > ./node_modules/zone.js/fesm2015/zone.js
     | 35 ms (parallelism 6) restore modules > ./src/main.ts
    238 ms restore modules
+ 14 hidden lines

LOG from webpack.ResolverCachePlugin
    11% really resolved (373 real resolves with 373 cached but invalid, 2932 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 7.774751 ms
<t> figure out provided exports: 12.103659 ms
    8% of exports of modules have been determined (10 no declared exports, 27 not cached, 0 flagged uncacheable, 320 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008661 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.515403 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.404866 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.575615 ms
<t> trace exports usage in graph: 18.138157 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 6.759933 ms
<t> visitModules: visiting: 8.006151 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 8.126114 ms
<t> connectChunkGroups: 0.005359 ms
<t> cleanup: 0.005235 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.044292 ms
<t> modules: 4.486915 ms
<t> queue: 0.006756 ms
<t> maxSize: 0.041398 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.989664 ms
<t> sort relevant modules: 0.282756 ms
<t> find modules to concatenate: 20.837469 ms
<t> sort concat configurations: 0.049574 ms
<t> create concatenated modules: 17.12507 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.266978 ms
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

2022-11-19 11:04:41: webpack 5.75.0 compiled in 11433 ms (b7a41babb3e6b898)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 583.76 kB |               136.64 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 903.28 kB |               165.92 kB

Build at: 2022-11-19T16:04:43.334Z - Hash: b7a41babb3e6b898 - Time: 13215ms
Done in 15.24s.
```
Sat Nov 19 11:05:01 AM EST 2022
yarn version v1.22.19
info Current version: 0.0.16
info New version: 0.0.17
Done in 0.12s.
