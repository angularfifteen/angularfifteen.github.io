Thu Nov 17 02:23:21 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.2Gi       2.9Gi       1.1Gi       5.2Gi       6.7Gi
Swap:          8.0Gi       3.1Gi       4.9Gi
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
    
Done in 0.75s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.33s.
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
    5310 ms (resolving: 919 ms, restoring: 0 ms, integration: 0 ms, building: 4391 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    384 new snapshots created
    35% root snapshot uncached (1273 / 3657)
    25% children snapshot uncached (835 / 3385)
    3276 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1984/2673) entries shared via 11 shared snapshots (285 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4040/4574) entries shared via 257 shared snapshots (788 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 49% (596/1215) entries shared via 37 shared snapshots (108 times referenced)
    Managed files snapshot optimization: 75% (1541/2058) entries shared via 101 shared snapshots (244 times referenced)
    Managed missing snapshot optimization: 80% (2235/2801) entries shared via 127 shared snapshots (291 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.15317 ms
<t> runtime requirements.chunks: 0.171156 ms
<t> runtime requirements.entries: 1.286819 ms
<t> finish module profiles: 10.204674 ms
<t> compute affected modules: 0.003134 ms
<t> finish modules: 76.98337 ms
<t> report dependency errors and warnings: 20.916794 ms
<t> optimize dependencies: 47.290305 ms
<t> create chunks: 13.430763 ms
<t> compute affected modules with chunk graph: 0.004896 ms
<t> optimize: 77.10637 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 36.567338 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.378138 ms
<t> runtime requirements.modules: 0.101345 ms
<t> runtime requirements.chunks: 0.067647 ms
<t> runtime requirements.entries: 0.637775 ms
<t> runtime requirements: 1.053982 ms
<t> hashing: initialize hash: 0.00582 ms
<t> hashing: hash warnings: 0.003861 ms
<t> hashing: sort chunks: 0.065434 ms
<t> hashing: hash runtime modules: 1.309383 ms
<t> hashing: hash chunks: 1.705558 ms
<t> hashing: hash digest: 0.024391 ms
<t> hashing: process full hash modules: 0.296915 ms
<t> hashing: 3.627496 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.087263 ms
<t> module assets: 0.250843 ms
<t> create chunk assets: 1.722121 ms
<t> process assets: 1645.718689 ms

LOG from webpack.Compiler
<t> make hook: 5357.942901 ms
<t> finish make hook: 0.120231 ms
<t> finish compilation: 108.148616 ms
<t> seal compilation: 1830.2368259999998 ms
<t> afterCompile hook: 0.150945 ms
<t> emitAssets: 9.954166 ms
<t> emitRecords: 0.086256 ms
<t> done hook: 437.421353 ms
<t> beginIdle: 0.560182 ms

LOG from webpack.Compilation.ModuleProfile
     | 184 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 184 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 272 ms (parallelism 5.2) resolve to new modules > ./src/main.ts
<i>  | 274 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 272 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 73 ms (parallelism 7) resolve to new modules > ./src/app/app.module.ts
     | 76 ms (parallelism 6.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 73 ms (parallelism 7) resolve to new modules > ./src/environments/environment.ts
     | 74 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
     | 74 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
<i> 1796 ms resolve to new modules
     | 85 ms (parallelism 5.7) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    134 ms integrate modules
<i>  |  | 469 ms (parallelism 9.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 469 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 443 ms (parallelism 9.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 443 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 969 ms build modules
     | 85 ms (parallelism 5.7) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    134 ms restore modules
+ 11 hidden lines

LOG from webpack.ResolverCachePlugin
    11% really resolved (373 real resolves with 373 cached but invalid, 2935 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.601519 ms
<t> figure out provided exports: 11.075204 ms
    8% of exports of modules have been determined (10 no declared exports, 27 not cached, 0 flagged uncacheable, 320 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008073 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.468849 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 19.453455 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.564171 ms
<t> trace exports usage in graph: 26.720553 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.782982 ms
<t> visitModules: visiting: 10.163994 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 10.284742 ms
<t> connectChunkGroups: 0.00404 ms
<t> cleanup: 0.0037 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046326 ms
<t> modules: 4.292879 ms
<t> queue: 0.007279 ms
<t> maxSize: 0.044401 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.051673 ms
<t> sort relevant modules: 0.285845 ms
<t> find modules to concatenate: 33.281419 ms
<t> sort concat configurations: 0.04431 ms
<t> create concatenated modules: 18.585538 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.267906 ms
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

2022-11-17 14:23:48: webpack 5.75.0 compiled in 11788 ms (b7a41babb3e6b898)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 583.76 kB |               136.64 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 903.28 kB |               165.92 kB

Build at: 2022-11-17T19:23:50.308Z - Hash: b7a41babb3e6b898 - Time: 13566ms
Done in 15.65s.
```
