Wed Nov 16 06:42:19 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       8.4Gi       1.1Gi       1.5Gi       5.8Gi       5.0Gi
Swap:          8.0Gi       6.3Gi       1.7Gi
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
    
Done in 0.61s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
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
    15% children snapshot uncached (350 / 2262)
    1325 entries tested
    File info in cache: 105 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/4) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 72% (259/361) entries shared via 1 shared snapshots (36 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 39% (80/206) entries shared via 5 shared snapshots (10 times referenced)
    Managed items info in cache: 76 items
    Managed items snapshot optimization: 44% (101/227) entries shared via 8 shared snapshots (17 times referenced)
    Managed files snapshot optimization: 56% (92/163) entries shared via 8 shared snapshots (17 times referenced)
    Managed missing snapshot optimization: 64% (175/275) entries shared via 11 shared snapshots (22 times referenced)
+ 2 hidden lines

LOG from webpack.Compiler
<t> make hook: 1146.7629670000001 ms
<t> finish make hook: 0.304433 ms
<t> finish compilation: 36.631873 ms
<t> seal compilation: 742.908266 ms
<t> afterCompile hook: 0.180201 ms
<t> emitAssets: 7.074543 ms
<t> emitRecords: 0.133101 ms
<t> done hook: 185.806234 ms
<t> beginIdle: 0.747031 ms

LOG from webpack.Compilation.ModuleProfile
     | 117 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 117 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 121 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 120 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 120 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 86 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
    815 ms resolve to new modules
     |  | 85 ms (parallelism 2) build modules > ./src/main.ts
     |  | 31 ms (parallelism 8) build modules > ./src/app/app.component.ts
     | 141 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
    141 ms build modules
+ 8 hidden lines

LOG from webpack.Compilation
<t> finish module profiles: 5.8729 ms
<t> compute affected modules: 0.005886 ms
<t> finish modules: 25.876117 ms
<t> report dependency errors and warnings: 4.828071 ms
<t> optimize dependencies: 10.246303 ms
<t> create chunks: 4.017721 ms
<t> compute affected modules with chunk graph: 0.004282 ms
<t> optimize: 35.913879 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.160257 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.535383 ms
<t> runtime requirements.modules: 0.091829 ms
<t> runtime requirements.chunks: 0.316323 ms
<t> runtime requirements.entries: 1.42977 ms
<t> runtime requirements: 2.079867 ms
<t> hashing: initialize hash: 0.007473 ms
<t> hashing: sort chunks: 0.058545 ms
<t> hashing: hash runtime modules: 2.240097 ms
<t> hashing: hash chunks: 1.690303 ms
<t> hashing: hash digest: 0.057609 ms
<t> hashing: process full hash modules: 0.22074 ms
<t> hashing: 4.445882 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.088084 ms
<t> module assets: 0.18068 ms
<t> create chunk assets: 1.39398 ms
<t> process assets: 671.0909 ms

LOG from webpack.ResolverCachePlugin
    2% really resolved (41 real resolves with 41 cached but invalid, 1625 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.494 ms
<t> figure out provided exports: 6.881373 ms
    2% of exports of modules have been determined (3 no declared exports, 6 not cached, 0 flagged uncacheable, 237 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.009821 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.188952 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.197185 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.601064 ms
<t> trace exports usage in graph: 5.02649 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.656778 ms
<t> visitModules: visiting: 2.726001 ms
    220 queue items processed (99 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.869792 ms
<t> connectChunkGroups: 0.004531 ms
<t> cleanup: 0.002577 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.047747 ms
<t> modules: 3.195731 ms
<t> queue: 0.005765 ms
<t> maxSize: 0.044591 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.275852 ms
<t> sort relevant modules: 0.160776 ms
<t> find modules to concatenate: 7.193809 ms
<t> sort concat configurations: 0.051166 ms
<t> create concatenated modules: 6.915578 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.236039 ms
+ 1 hidden lines

2022-11-16 18:42:39: webpack 5.75.0 compiled in 5176 ms (d52de8c4de15ff95)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 261.03 kB |                69.99 kB
styles.css          | styles        | 123.02 kB |                 9.90 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 418.02 kB |                91.08 kB

Build at: 2022-11-16T23:42:42.492Z - Hash: d52de8c4de15ff95 - Time: 8350ms
Done in 10.27s.
```
