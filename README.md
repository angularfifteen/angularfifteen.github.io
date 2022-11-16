Wed Nov 16 06:37:57 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       8.3Gi       1.9Gi       1.4Gi       5.1Gi       5.1Gi
Swap:          8.0Gi       6.4Gi       1.6Gi
System Storage
615M	.
```
```bash
yarn run v1.22.19
$ ng --version
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
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
chunk {179} (runtime: runtime) main.js (main) 2.86 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 857 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 90 modules [337] 2.02 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    658 ms (resolving: 138 ms, restoring: 0 ms, integration: 0 ms, building: 520 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 129 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 129 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    761 ms (resolving: 30 ms, restoring: 1 ms, integration: 0 ms, building: 730 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    761 ms (resolving: 32 ms, restoring: 71 ms, integration: 0 ms, building: 658 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.526269 ms
<t> runtime requirements.chunks: 0.53097 ms
<t> runtime requirements.entries: 2.174651 ms
<t> runtime requirements.modules: 0.102359 ms
<t> runtime requirements.chunks: 0.024651 ms
<t> runtime requirements.entries: 0.176905 ms
<t> finish module profiles: 10.651227 ms
<t> compute affected modules: 0.006665 ms
<t> finish modules: 23.500128 ms
<t> report dependency errors and warnings: 4.893321 ms
<t> optimize dependencies: 10.527833 ms
<t> create chunks: 3.782245 ms
<t> compute affected modules with chunk graph: 0.004589 ms
<t> optimize: 38.077564 ms
    7 modules hashed, 0 from cache (0.03 variants per module in average)
<t> module hashing: 10.325432 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 874.946292 ms
<t> runtime requirements.modules: 0.492394 ms
<t> runtime requirements.chunks: 0.15282 ms
<t> runtime requirements.entries: 0.960703 ms
<t> runtime requirements: 1.966641 ms
<t> hashing: initialize hash: 0.01164 ms
<t> hashing: sort chunks: 0.099044 ms
<t> hashing: hash runtime modules: 1.354625 ms
<t> hashing: hash chunks: 2.217071 ms
<t> hashing: hash digest: 0.057137 ms
<t> hashing: process full hash modules: 0.202522 ms
<t> hashing: 4.130272 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.082484 ms
<t> module assets: 0.234364 ms
<t> create chunk assets: 4.254639 ms
<t> process assets: 6425.017831 ms

LOG from webpack.Compiler
<t> make hook: 4874.53585 ms
<t> finish make hook: 0.137149 ms
<t> finish compilation: 39.10859 ms
<t> seal compilation: 7375.552939 ms
<t> afterCompile hook: 0.179337 ms
<t> emitAssets: 5.315321 ms
<t> emitRecords: 0.085201 ms
<t> done hook: 152.231474 ms
<t> beginIdle: 0.499908 ms

LOG from webpack.Compilation.ModuleProfile
     | 62 ms (parallelism 6.1) resolve to new modules > ./src/main.ts
     | 46 ms (parallelism 2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
<i>  | 252 ms (parallelism 8.6) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 172 ms (parallelism 9) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 288 ms (parallelism 8.5) resolve to new modules > ./node_modules/@angular/common/fesm2020/common.mjs
<i>  | 210 ms (parallelism 8.9) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 210 ms (parallelism 8.9) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
<i> 1679 ms resolve to new modules
<i>  | 234 ms (parallelism 8.8) resolve to existing modules > ./node_modules/@angular/router/fesm2020/router.mjs
<i> 259 ms resolve to existing modules
     |  | 123 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 123 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 109 ms (parallelism 6) build modules > ./src/styles.scss?ngGlobalStyle
     | 109 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 36 ms (parallelism 6.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 36 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 82 ms (parallelism 6.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 82 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 105 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 152 ms (parallelism 2) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 46 ms (parallelism 5.7) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 99 ms (parallelism 7.2) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 101 ms (parallelism 7.2) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
<i>  |  | 270 ms (parallelism 8.7) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 89 ms (parallelism 6.9) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 30 ms (parallelism 27.7) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
<i>  | 922 ms build modules > 10 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 85 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 59 ms (parallelism 6) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 42 ms (parallelism 8.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 449 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 209 ms (parallelism 3.8) build modules > ./src/main.ts
<i>  | 255 ms build modules > 4 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 1983 ms build modules
+ 11 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (524 real resolves with 0 cached but invalid, 1152 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.347125 ms
<t> figure out provided exports: 15.612566 ms
    94% of exports of modules have been determined (15 no declared exports, 245 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.072313 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 14.373984 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 4.253545 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.678386 ms
<t> trace exports usage in graph: 5.156889 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 1.536697 ms
<t> visitModules: visiting: 2.552539 ms
    220 queue items processed (99 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 2.683683 ms
<t> connectChunkGroups: 0.002779 ms
<t> cleanup: 0.001909 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.038954 ms
<t> modules: 3.25272 ms
<t> queue: 0.006316 ms
<t> maxSize: 0.042812 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.380639 ms
<t> sort relevant modules: 0.150597 ms
<t> find modules to concatenate: 6.380339 ms
<t> sort concat configurations: 0.063979 ms
<t> create concatenated modules: 8.200775 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 336.049335 ms
<t> optimize asset: polyfills.js: 1045.290996 ms
<t> optimize asset: main.js: 5617.44882 ms
<t> optimize js assets: 5729.583319 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 18.921804 ms
<t> optimize css assets: 30.482 ms

LOG from webpack.FileSystemInfo
    772 new snapshots created
    0% root snapshot uncached (0 / 1152)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 105 timestamps 19 hashes 19 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/12) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 85% (3172/3753) entries shared via 2 shared snapshots (520 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 53% (127/241) entries shared via 7 shared snapshots (12 times referenced)
    Managed items info in cache: 76 items
    Managed items snapshot optimization: 11% (112/978) entries shared via 9 shared snapshots (19 times referenced)
    Managed files snapshot optimization: 80% (3194/3982) entries shared via 178 shared snapshots (723 times referenced)
    Managed missing snapshot optimization: 86% (3657/4243) entries shared via 185 shared snapshots (738 times referenced)

2022-11-16 18:38:33: webpack 5.75.0 compiled in 16834 ms (d52de8c4de15ff95)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 261.03 kB |                69.99 kB
styles.css          | styles        | 123.02 kB |                 9.90 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 418.02 kB |                91.08 kB

Build at: 2022-11-16T23:38:36.198Z - Hash: d52de8c4de15ff95 - Time: 19719ms
Done in 21.92s.
