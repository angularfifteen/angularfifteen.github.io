Wed Nov 23 10:38:45 AM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.1Gi       1.4Gi       724Mi       6.9Gi       7.2Gi
Swap:          8.0Gi       4.1Gi       3.9Gi
System Storage
1.5G	.
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

Angular: 15.0.1
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.0
@angular-devkit/build-angular   15.0.0
@angular-devkit/core            15.0.0
@angular-devkit/schematics      15.0.0
@angular/cdk                    15.0.0
@angular/cli                    15.0.0
@angular/material               15.0.0
@schematics/angular             15.0.0
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.69s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.35s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
asset main.js 585 KiB {179} [emitted] (name: main)
asset styles.css 286 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 586 KiB = runtime.js 906 bytes main.js 585 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 286 KiB = runtime.js 906 bytes styles.css 286 KiB
chunk {179} (runtime: runtime) main.js (main) 5.55 MiB [initial]
  cached modules 857 KiB [cached] 1 module
  ./src/main.ts + 207 modules [335] 4.72 MiB {179} [built]
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
    5104 ms (resolving: 916 ms, restoring: 0 ms, integration: 0 ms, building: 4188 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    384 new snapshots created
    35% root snapshot uncached (1273 / 3637)
    23% children snapshot uncached (805 / 3474)
    3275 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1991/2673) entries shared via 11 shared snapshots (286 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4037/4574) entries shared via 256 shared snapshots (783 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 51% (619/1220) entries shared via 38 shared snapshots (113 times referenced)
    Managed files snapshot optimization: 74% (1541/2074) entries shared via 101 shared snapshots (244 times referenced)
    Managed missing snapshot optimization: 80% (2235/2801) entries shared via 127 shared snapshots (291 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.148652 ms
<t> runtime requirements.chunks: 0.167397 ms
<t> runtime requirements.entries: 1.316781 ms
<t> finish module profiles: 9.660125 ms
<t> compute affected modules: 0.004779 ms
<t> finish modules: 74.680896 ms
<t> report dependency errors and warnings: 16.391519 ms
<t> optimize dependencies: 40.021793 ms
<t> create chunks: 10.448609 ms
<t> compute affected modules with chunk graph: 0.00548 ms
<t> optimize: 62.186054 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 26.859079 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.413698 ms
<t> runtime requirements.modules: 0.093705 ms
<t> runtime requirements.chunks: 0.071343 ms
<t> runtime requirements.entries: 0.693014 ms
<t> runtime requirements: 1.139214 ms
<t> hashing: initialize hash: 0.007965 ms
<t> hashing: hash warnings: 0.005176 ms
<t> hashing: sort chunks: 0.064083 ms
<t> hashing: hash runtime modules: 1.388918 ms
<t> hashing: hash chunks: 1.783323 ms
<t> hashing: hash digest: 0.026432 ms
<t> hashing: process full hash modules: 0.313638 ms
<t> hashing: 3.831176 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.093624 ms
<t> module assets: 0.311832 ms
<t> create chunk assets: 1.828268 ms
<t> process assets: 1536.329379 ms

LOG from webpack.Compiler
<t> make hook: 5151.047857 ms
<t> finish make hook: 0.119734 ms
<t> finish compilation: 100.785419 ms
<t> seal compilation: 1685.695996 ms
<t> afterCompile hook: 0.092331 ms
<t> emitAssets: 5.514152 ms
<t> emitRecords: 0.328743 ms
<t> done hook: 462.254187 ms
<t> beginIdle: 0.62081 ms

LOG from webpack.Compilation.ModuleProfile
     | 183 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 183 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 268 ms (parallelism 5) resolve to new modules > ./src/main.ts
<i>  | 269 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 268 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 122 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
<i> 1562 ms resolve to new modules
     | 74 ms (parallelism 5) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    126 ms integrate modules
<w>  |  | 508 ms (parallelism 8.2) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 508 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 443 ms (parallelism 8.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 443 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 121 ms (parallelism 4) build modules > ./src/main.ts
     | 190 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 1143 ms build modules
     | 74 ms (parallelism 5) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    126 ms restore modules
+ 12 hidden lines

LOG from webpack.ResolverCachePlugin
    11% really resolved (373 real resolves with 373 cached but invalid, 2915 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.8857 ms
<t> figure out provided exports: 11.281433 ms
    8% of exports of modules have been determined (10 no declared exports, 27 not cached, 0 flagged uncacheable, 320 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007119 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.481814 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.651347 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.652321 ms
<t> trace exports usage in graph: 25.244047 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 6.701641 ms
<t> visitModules: visiting: 8.034288 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 8.17514 ms
<t> connectChunkGroups: 0.005609 ms
<t> cleanup: 0.004888 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.063411 ms
<t> modules: 4.680575 ms
<t> queue: 0.007305 ms
<t> maxSize: 0.045236 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.223336 ms
<t> sort relevant modules: 0.340552 ms
<t> find modules to concatenate: 19.57405 ms
<t> sort concat configurations: 0.033387 ms
<t> create concatenated modules: 19.719695 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.274944 ms
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

2022-11-23 10:39:14: webpack 5.75.0 compiled in 11236 ms (3ac7746a1b32502b)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 584.64 kB |               136.67 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 904.16 kB |               165.95 kB

Build at: 2022-11-23T15:39:16.862Z - Hash: 3ac7746a1b32502b - Time: 13226ms
Done in 15.22s.
```
Wed Nov 23 10:39:37 AM EST 2022
yarn version v1.22.19
info Current version: 0.0.27
info New version: 0.0.28
Done in 0.13s.
