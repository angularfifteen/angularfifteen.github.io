Wed Nov 16 06:41:05 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       8.4Gi       1.4Gi       1.4Gi       5.5Gi       5.1Gi
Swap:          8.0Gi       6.4Gi       1.6Gi
System Storage
790M	.
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
    
Done in 0.62s.
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
  cached modules 2.86 MiB [cached] 2 modules
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial]
  cached modules 106 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 129 KiB (css/mini-extract) [initial]
  cached modules 100 bytes (javascript) 129 KiB (css/mini-extract) [cached] 4 modules
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.Compiler
<t> make hook: 429.172171 ms
<t> finish make hook: 0.119142 ms
<t> finish compilation: 134.754646 ms
<t> seal compilation: 521.854903 ms
<t> afterCompile hook: 0.409551 ms
<t> emitAssets: 6.24402 ms
<t> emitRecords: 0.067544 ms
<t> done hook: 91.073226 ms
<t> beginIdle: 0.373159 ms

LOG from webpack.Compilation.ModuleProfile
     | 43 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 43 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
     | 43 ms (parallelism 4) resolve to new modules > ./src/app/app.module.ts
     | 43 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
    328 ms resolve to new modules
+ 8 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 10.363027 ms
<t> compute affected modules: 0.008979 ms
<t> finish modules: 120.364612 ms
<t> report dependency errors and warnings: 3.960739 ms
<t> optimize dependencies: 9.442279 ms
<t> create chunks: 3.424437 ms
<t> compute affected modules with chunk graph: 0.003585 ms
<t> optimize: 25.673401 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.940453 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.459243 ms
<t> runtime requirements.modules: 0.068578 ms
<t> runtime requirements.chunks: 0.236639 ms
<t> runtime requirements.entries: 1.115592 ms
<t> runtime requirements: 1.618058 ms
<t> hashing: initialize hash: 0.006034 ms
<t> hashing: sort chunks: 0.198844 ms
<t> hashing: hash runtime modules: 1.652405 ms
<t> hashing: hash chunks: 1.316974 ms
<t> hashing: hash digest: 0.043333 ms
<t> hashing: process full hash modules: 0.173909 ms
<t> hashing: 3.511551 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.064038 ms
<t> module assets: 0.188672 ms
<t> create chunk assets: 1.027925 ms
<t> process assets: 463.835392 ms

LOG from webpack.ResolverCachePlugin
    0% really resolved (0 real resolves with 0 cached but invalid, 1669 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.105803 ms
<t> figure out provided exports: 5.924508 ms
    2% of exports of modules have been determined (3 no declared exports, 6 not cached, 0 flagged uncacheable, 237 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.009348 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 3.843914 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.575751 ms
<t> trace exports usage in graph: 4.55648 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.356558 ms
<t> visitModules: visiting: 2.202067 ms
    220 queue items processed (99 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.319522 ms
<t> connectChunkGroups: 0.003733 ms
<t> cleanup: 0.001432 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.0466 ms
<t> modules: 2.649617 ms
<t> queue: 0.006375 ms
<t> maxSize: 0.057576 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.147429 ms
<t> sort relevant modules: 0.127502 ms
<t> find modules to concatenate: 5.565032 ms
<t> sort concat configurations: 0.046748 ms
<t> create concatenated modules: 5.585879 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.210348 ms
+ 1 hidden lines

LOG from webpack.FileSystemInfo
    0 new snapshots created
    40% root snapshot uncached (756 / 1913)
    16% children snapshot uncached (380 / 2366)
    1626 entries tested
    File info in cache: 105 timestamps 0 hashes 0 timestamp hash combinations
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Managed items info in cache: 76 items

2022-11-16 18:41:23: webpack 5.75.0 compiled in 4422 ms (d52de8c4de15ff95)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 261.03 kB |                69.99 kB
styles.css          | styles        | 123.02 kB |                 9.90 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 418.02 kB |                91.08 kB

Build at: 2022-11-16T23:41:26.568Z - Hash: d52de8c4de15ff95 - Time: 7371ms
Done in 9.27s.
```
