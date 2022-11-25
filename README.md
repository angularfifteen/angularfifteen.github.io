Thu Nov 24 08:29:11 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.5Gi       1.1Gi       873Mi       7.7Gi       7.6Gi
Swap:          8.0Gi       5.0Mi       8.0Gi
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
    
Done in 0.76s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
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
    5487 ms (resolving: 920 ms, restoring: 0 ms, integration: 0 ms, building: 4567 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    384 new snapshots created
    35% root snapshot uncached (1273 / 3637)
    25% children snapshot uncached (835 / 3385)
    3273 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1991/2673) entries shared via 11 shared snapshots (286 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3990/4574) entries shared via 255 shared snapshots (781 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 49% (599/1218) entries shared via 37 shared snapshots (109 times referenced)
    Managed files snapshot optimization: 75% (1541/2066) entries shared via 101 shared snapshots (244 times referenced)
    Managed missing snapshot optimization: 80% (2235/2801) entries shared via 127 shared snapshots (291 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.154189 ms
<t> runtime requirements.chunks: 0.167257 ms
<t> runtime requirements.entries: 1.262311 ms
<t> finish module profiles: 11.637659 ms
<t> compute affected modules: 0.003559 ms
<t> finish modules: 74.586635 ms
<t> report dependency errors and warnings: 19.140571 ms
<t> optimize dependencies: 45.610442 ms
<t> create chunks: 13.464343 ms
<t> compute affected modules with chunk graph: 0.007124 ms
<t> optimize: 73.473968 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 31.470274 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.558339 ms
<t> runtime requirements.modules: 0.123567 ms
<t> runtime requirements.chunks: 0.100941 ms
<t> runtime requirements.entries: 0.901257 ms
<t> runtime requirements: 1.436762 ms
<t> hashing: initialize hash: 0.00719 ms
<t> hashing: hash warnings: 0.004763 ms
<t> hashing: sort chunks: 0.082898 ms
<t> hashing: hash runtime modules: 1.917962 ms
<t> hashing: hash chunks: 2.23923 ms
<t> hashing: hash digest: 0.032335 ms
<t> hashing: process full hash modules: 0.413138 ms
<t> hashing: 4.980876 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.111204 ms
<t> module assets: 0.362794 ms
<t> create chunk assets: 2.305026 ms
<t> process assets: 1549.457089 ms

LOG from webpack.Compiler
<t> make hook: 5527.295129 ms
<t> finish make hook: 0.118805 ms
<t> finish compilation: 105.423575 ms
<t> seal compilation: 1725.3984540000001 ms
<t> afterCompile hook: 0.093428 ms
<t> emitAssets: 6.131785 ms
<t> emitRecords: 0.087801 ms
<t> done hook: 440.081401 ms
<t> beginIdle: 0.69804 ms

LOG from webpack.Compilation.ModuleProfile
     | 184 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 184 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 276 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 274 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 275 ms (parallelism 5.2) resolve to new modules > ./src/main.ts
     | 131 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
<i> 1595 ms resolve to new modules
     | 83 ms (parallelism 5.7) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    146 ms integrate modules
<w>  |  | 501 ms (parallelism 9.1) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 501 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 475 ms (parallelism 9.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 475 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 131 ms (parallelism 4) build modules > ./src/main.ts
     | 209 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 1186 ms build modules
     | 83 ms (parallelism 5.7) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    146 ms restore modules
+ 13 hidden lines

LOG from webpack.ResolverCachePlugin
    11% really resolved (373 real resolves with 373 cached but invalid, 2915 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 4.460836 ms
<t> figure out provided exports: 11.884731 ms
    8% of exports of modules have been determined (10 no declared exports, 27 not cached, 0 flagged uncacheable, 320 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.007315 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.532721 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 19.144172 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.555078 ms
<t> trace exports usage in graph: 25.348006 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 8.426825 ms
<t> visitModules: visiting: 9.876198 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.985788 ms
<t> connectChunkGroups: 0.005172 ms
<t> cleanup: 0.004112 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.049907 ms
<t> modules: 4.12768 ms
<t> queue: 0.005456 ms
<t> maxSize: 0.038844 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.99707 ms
<t> sort relevant modules: 0.286407 ms
<t> find modules to concatenate: 26.287841 ms
<t> sort concat configurations: 0.048915 ms
<t> create concatenated modules: 18.804245 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.426916 ms
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

2022-11-24 20:29:42: webpack 5.75.0 compiled in 11793 ms (3ac7746a1b32502b)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 584.64 kB |               136.67 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 904.16 kB |               165.95 kB

Build at: 2022-11-25T01:29:43.989Z - Hash: 3ac7746a1b32502b - Time: 13743ms
Done in 15.84s.
```
