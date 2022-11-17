Wed Nov 16 07:06:52 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       8.1Gi       1.2Gi       1.6Gi       6.0Gi       5.3Gi
Swap:          8.0Gi       6.1Gi       1.9Gi
System Storage
919M	.
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
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.0
@angular-devkit/build-angular   15.0.0
@angular-devkit/core            15.0.0
@angular-devkit/schematics      15.0.0
@schematics/angular             15.0.0
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.80s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
asset main.js 261 KiB {179} [emitted] (name: main)
asset styles.css 123 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 13.8 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 262 KiB = runtime.js 906 bytes main.js 261 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 124 KiB = runtime.js 906 bytes styles.css 123 KiB
chunk {179} (runtime: runtime) main.js (main) 2.86 MiB [initial]
  cached modules 857 KiB [cached] 1 module
  ./src/main.ts + 90 modules [337] 2.02 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial]
  cached modules 106 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 129 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 129 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    42 new snapshots created
    40% root snapshot uncached (756 / 1910)
    15% children snapshot uncached (347 / 2256)
    1338 entries tested
    File info in cache: 105 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 72% (259/361) entries shared via 1 shared snapshots (36 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 37% (77/206) entries shared via 5 shared snapshots (9 times referenced)
    Managed items info in cache: 76 items
    Managed items snapshot optimization: 44% (101/227) entries shared via 8 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 56% (92/163) entries shared via 8 shared snapshots (17 times referenced)
    Managed missing snapshot optimization: 64% (175/275) entries shared via 11 shared snapshots (22 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1791.243643 ms
<t> finish make hook: 0.190535 ms
<t> finish compilation: 40.909577 ms
<t> seal compilation: 812.558002 ms
<t> afterCompile hook: 0.180721 ms
<t> emitAssets: 17.093878 ms
<t> emitRecords: 0.096502 ms
<t> done hook: 166.985093 ms
<t> beginIdle: 0.59021 ms

LOG from webpack.Compilation.ModuleProfile
     | 177 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 177 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 181 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 179 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 179 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 115 ms (parallelism 2.3) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 115 ms (parallelism 2.3) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
     | 36 ms (parallelism 13.5) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
    1216 ms resolve to new modules
     | 44 ms (parallelism 6) integrate modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     | 44 ms (parallelism 6) integrate modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 44 ms (parallelism 6) integrate modules > ./node_modules/@angular/core/fesm2020/core.mjs
    256 ms integrate modules
     |  | 54 ms (parallelism 6.6) build modules > ./src/app/app-routing.module.ts
     |  | 54 ms (parallelism 6.6) build modules > ./src/app/app.component.ts
     | 114 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    115 ms build modules
     | 44 ms (parallelism 6) restore modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     | 44 ms (parallelism 6) restore modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 44 ms (parallelism 6) restore modules > ./node_modules/@angular/core/fesm2020/core.mjs
    256 ms restore modules
+ 11 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 7.657031 ms
<t> compute affected modules: 0.007417 ms
<t> finish modules: 27.843239 ms
<t> report dependency errors and warnings: 5.344422 ms
<t> optimize dependencies: 11.309093 ms
<t> create chunks: 4.0338 ms
<t> compute affected modules with chunk graph: 0.005621 ms
<t> optimize: 40.915786 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.823742 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.571747 ms
<t> runtime requirements.modules: 0.112813 ms
<t> runtime requirements.chunks: 0.346372 ms
<t> runtime requirements.entries: 1.517805 ms
<t> runtime requirements: 2.241412 ms
<t> hashing: initialize hash: 0.009992 ms
<t> hashing: sort chunks: 0.071191 ms
<t> hashing: hash runtime modules: 2.357128 ms
<t> hashing: hash chunks: 2.107074 ms
<t> hashing: hash digest: 0.064426 ms
<t> hashing: process full hash modules: 0.242742 ms
<t> hashing: 5.039676 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.093753 ms
<t> module assets: 0.190987 ms
<t> create chunk assets: 1.474811 ms
<t> process assets: 732.979988 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (41 real resolves with 41 cached but invalid, 1625 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.612269 ms
<t> figure out provided exports: 7.364006 ms
    2% of exports of modules have been determined (3 no declared exports, 6 not cached, 0 flagged uncacheable, 237 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.010984 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.208984 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.591258 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.757622 ms
<t> trace exports usage in graph: 5.479458 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.591273 ms
<t> visitModules: visiting: 2.657189 ms
    220 queue items processed (99 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.804179 ms
<t> connectChunkGroups: 0.002977 ms
<t> cleanup: 0.001572 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.040308 ms
<t> modules: 3.322781 ms
<t> queue: 0.00671 ms
<t> maxSize: 0.043766 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.342659 ms
<t> sort relevant modules: 0.167795 ms
<t> find modules to concatenate: 6.17048 ms
<t> sort concat configurations: 0.049728 ms
<t> create concatenated modules: 10.360679 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.242584 ms
+ 1 hidden lines

2022-11-16 19:07:15: webpack 5.75.0 compiled in 7582 ms (d52de8c4de15ff95)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 261.03 kB |                69.99 kB
styles.css          | styles        | 123.02 kB |                 9.90 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 418.02 kB |                91.08 kB

Build at: 2022-11-17T00:07:17.753Z - Hash: d52de8c4de15ff95 - Time: 9949ms
Done in 12.11s.
```
Wed Nov 16 07:07:29 PM EST 2022
yarn version v1.22.19
info Current version: 0.0.2
info New version: 0.0.3
Done in 0.13s.
