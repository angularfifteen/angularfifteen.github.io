Sun Nov 27 06:24:32 AM EST 2022

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.0Gi       4.2Gi       454Mi       9.0Gi        12Gi
Swap:          8.0Gi       6.0Mi       8.0Gi
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
    
Done in 0.65s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.44s.
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
    5163 ms (resolving: 1005 ms, restoring: 0 ms, integration: 0 ms, building: 4158 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    383 new snapshots created
    38% root snapshot uncached (1235 / 3277)
    25% children snapshot uncached (836 / 3346)
    3207 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1977/2664) entries shared via 11 shared snapshots (284 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4008/4567) entries shared via 254 shared snapshots (778 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 50% (605/1215) entries shared via 38 shared snapshots (111 times referenced)
    Managed files snapshot optimization: 75% (1544/2056) entries shared via 101 shared snapshots (243 times referenced)
    Managed missing snapshot optimization: 80% (2235/2800) entries shared via 127 shared snapshots (291 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.145768 ms
<t> runtime requirements.chunks: 0.1721 ms
<t> runtime requirements.entries: 1.221885 ms
<t> finish module profiles: 8.095561 ms
<t> compute affected modules: 0.003044 ms
<t> finish modules: 78.452393 ms
<t> report dependency errors and warnings: 16.521767 ms
<t> optimize dependencies: 32.194813 ms
<t> create chunks: 8.415304 ms
<t> compute affected modules with chunk graph: 0.003616 ms
<t> optimize: 54.654378 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 23.325268 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.405712 ms
<t> runtime requirements.modules: 0.091427 ms
<t> runtime requirements.chunks: 0.068308 ms
<t> runtime requirements.entries: 0.654223 ms
<t> runtime requirements: 1.056906 ms
<t> hashing: initialize hash: 0.006271 ms
<t> hashing: hash warnings: 0.003774 ms
<t> hashing: sort chunks: 0.065967 ms
<t> hashing: hash runtime modules: 1.34208 ms
<t> hashing: hash chunks: 1.604239 ms
<t> hashing: hash digest: 0.022763 ms
<t> hashing: process full hash modules: 0.282088 ms
<t> hashing: 3.533107 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.079823 ms
<t> module assets: 0.225996 ms
<t> create chunk assets: 1.59663 ms
<t> process assets: 1408.953817 ms

LOG from webpack.Compiler
<t> make hook: 5209.670838 ms
<t> finish make hook: 0.144033 ms
<t> finish compilation: 103.122642 ms
<t> seal compilation: 1536.683743 ms
<t> afterCompile hook: 0.092841 ms
<t> emitAssets: 17.956307 ms
<t> emitRecords: 0.084993 ms
<t> done hook: 360.325435 ms
<t> beginIdle: 0.558788 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 201 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 201 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 268 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 267 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 267 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 163 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
<i> 1605 ms resolve to new modules
     | 48 ms (parallelism 5) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    98 ms integrate modules
<w>  |  | 544 ms (parallelism 7.6) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 544 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 497 ms (parallelism 7.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 497 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 163 ms (parallelism 4) build modules > ./src/main.ts
     | 219 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 1261 ms build modules
     | 48 ms (parallelism 5) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    98 ms restore modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    13% really resolved (372 real resolves with 372 cached but invalid, 2575 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 6.496633 ms
<t> figure out provided exports: 12.125046 ms
    3% of exports of modules have been determined (10 no declared exports, 9 not cached, 0 flagged uncacheable, 319 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.009981 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.423053 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.681206 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.461168 ms
<t> trace exports usage in graph: 16.586063 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 5.311147 ms
<t> visitModules: visiting: 6.484896 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.597212 ms
<t> connectChunkGroups: 0.005006 ms
<t> cleanup: 0.003703 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.058326 ms
<t> modules: 3.873617 ms
<t> queue: 0.008216 ms
<t> maxSize: 0.052229 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.044608 ms
<t> sort relevant modules: 0.266738 ms
<t> find modules to concatenate: 20.24464 ms
<t> sort concat configurations: 0.075629 ms
<t> create concatenated modules: 13.796577 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.270825 ms
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

2022-11-27 06:24:59: webpack 5.75.0 compiled in 11434 ms (61258541dae56586)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 586.69 kB |               136.97 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 906.21 kB |               166.25 kB

Build at: 2022-11-27T11:25:01.102Z - Hash: 61258541dae56586 - Time: 13161ms
Done in 15.10s.
```
