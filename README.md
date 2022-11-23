Wed Nov 23 11:45:07 AM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.3Gi       1.6Gi       662Mi       6.5Gi       7.0Gi
Swap:          8.0Gi       4.3Gi       3.7Gi
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
    
Done in 0.77s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
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
    5335 ms (resolving: 928 ms, restoring: 0 ms, integration: 0 ms, building: 4407 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    384 new snapshots created
    35% root snapshot uncached (1273 / 3652)
    23% children snapshot uncached (805 / 3474)
    3275 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1991/2673) entries shared via 11 shared snapshots (286 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4030/4574) entries shared via 255 shared snapshots (782 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 50% (605/1216) entries shared via 38 shared snapshots (111 times referenced)
    Managed files snapshot optimization: 75% (1539/2060) entries shared via 100 shared snapshots (244 times referenced)
    Managed missing snapshot optimization: 80% (2232/2801) entries shared via 126 shared snapshots (290 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.150322 ms
<t> runtime requirements.chunks: 0.163947 ms
<t> runtime requirements.entries: 1.313753 ms
<t> finish module profiles: 10.522723 ms
<t> compute affected modules: 0.003448 ms
<t> finish modules: 78.095409 ms
<t> report dependency errors and warnings: 19.787026 ms
<t> optimize dependencies: 39.705917 ms
<t> create chunks: 15.831491 ms
<t> compute affected modules with chunk graph: 0.006436 ms
<t> optimize: 82.185319 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 26.644203 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.388581 ms
<t> runtime requirements.modules: 0.094074 ms
<t> runtime requirements.chunks: 0.076254 ms
<t> runtime requirements.entries: 0.71095 ms
<t> runtime requirements: 1.112922 ms
<t> hashing: initialize hash: 0.007017 ms
<t> hashing: hash warnings: 0.003713 ms
<t> hashing: sort chunks: 0.067323 ms
<t> hashing: hash runtime modules: 1.3147 ms
<t> hashing: hash chunks: 1.668706 ms
<t> hashing: hash digest: 0.023821 ms
<t> hashing: process full hash modules: 0.304674 ms
<t> hashing: 3.61097 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.084034 ms
<t> module assets: 0.254807 ms
<t> create chunk assets: 1.681547 ms
<t> process assets: 1647.060201 ms

LOG from webpack.Compiler
<t> make hook: 5385.566923 ms
<t> finish make hook: 0.116684 ms
<t> finish compilation: 108.446476 ms
<t> seal compilation: 1820.656633 ms
<t> afterCompile hook: 0.147218 ms
<t> emitAssets: 4.955965 ms
<t> emitRecords: 0.088242 ms
<t> done hook: 419.809206 ms
<t> beginIdle: 0.582152 ms

LOG from webpack.Compilation.ModuleProfile
     | 186 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 185 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 283 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 282 ms (parallelism 5.2) resolve to new modules > ./src/main.ts
<i>  | 281 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 69 ms (parallelism 7) resolve to new modules > ./src/app/app.module.ts
     | 73 ms (parallelism 6.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 70 ms (parallelism 7) resolve to new modules > ./src/environments/environment.ts
     | 70 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 70 ms (parallelism 7.1) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
<i> 1810 ms resolve to new modules
     | 91 ms (parallelism 5.7) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    132 ms integrate modules
<i>  |  | 456 ms (parallelism 9.7) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 456 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 432 ms (parallelism 9.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 432 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i> 974 ms build modules
     | 91 ms (parallelism 5.7) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    132 ms restore modules
+ 9 hidden lines

LOG from webpack.ResolverCachePlugin
    11% really resolved (373 real resolves with 373 cached but invalid, 2930 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.505784 ms
<t> figure out provided exports: 10.791798 ms
    8% of exports of modules have been determined (10 no declared exports, 27 not cached, 0 flagged uncacheable, 320 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.006775 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.597288 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.056278 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.601515 ms
<t> trace exports usage in graph: 24.528187 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 10.707322 ms
<t> visitModules: visiting: 12.421505 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 12.545905 ms
<t> connectChunkGroups: 0.006006 ms
<t> cleanup: 0.004999 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.06666 ms
<t> modules: 5.330259 ms
<t> queue: 0.01246 ms
<t> maxSize: 0.041303 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.003295 ms
<t> sort relevant modules: 0.292314 ms
<t> find modules to concatenate: 22.100823 ms
<t> sort concat configurations: 0.063955 ms
<t> create concatenated modules: 28.27477 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.266357 ms
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

2022-11-23 11:45:38: webpack 5.75.0 compiled in 13120 ms (3ac7746a1b32502b)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 584.64 kB |               136.67 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 904.16 kB |               165.95 kB

Build at: 2022-11-23T16:45:40.279Z - Hash: 3ac7746a1b32502b - Time: 14901ms
Done in 17.02s.
```
Wed Nov 23 11:46:02 AM EST 2022
yarn version v1.22.19
info Current version: 0.0.28
info New version: 0.0.29
Done in 0.12s.
