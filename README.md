Wed Nov 16 07:51:11 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.9Gi       3.8Gi       1.1Gi       4.6Gi       6.7Gi
Swap:          8.0Gi       2.9Gi       5.1Gi
System Storage
2.8G	.
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
    
Done in 0.68s.
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
chunk {179} (runtime: runtime) main.js (main) 5.55 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 857 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 207 modules [335] 4.71 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    541 ms (resolving: 206 ms, restoring: 0 ms, integration: 0 ms, building: 335 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 320 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 320 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1020 ms (resolving: 45 ms, restoring: 0 ms, integration: 0 ms, building: 975 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    8573 ms (resolving: 132 ms, restoring: 0 ms, integration: 0 ms, building: 8441 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.709609 ms
<t> runtime requirements.chunks: 0.701976 ms
<t> runtime requirements.entries: 2.460673 ms
<t> runtime requirements.modules: 0.070381 ms
<t> runtime requirements.chunks: 0.032735 ms
<t> runtime requirements.entries: 0.339163 ms
<t> finish module profiles: 21.352758 ms
<t> compute affected modules: 0.007046 ms
<t> finish modules: 56.567206 ms
<t> report dependency errors and warnings: 33.010022 ms
<t> optimize dependencies: 82.197291 ms
<t> create chunks: 21.459901 ms
<t> compute affected modules with chunk graph: 0.013053 ms
<t> optimize: 135.225285 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 52.901938 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 2046.55179 ms
<t> runtime requirements.modules: 0.293076 ms
<t> runtime requirements.chunks: 0.372055 ms
<t> runtime requirements.entries: 1.353176 ms
<t> runtime requirements: 2.863693 ms
<t> hashing: initialize hash: 0.015848 ms
<t> hashing: hash warnings: 0.008631 ms
<t> hashing: sort chunks: 0.234835 ms
<t> hashing: hash runtime modules: 2.528818 ms
<t> hashing: hash chunks: 3.271119 ms
<t> hashing: hash digest: 0.100737 ms
<t> hashing: process full hash modules: 0.396258 ms
<t> hashing: 7.938424 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.186083 ms
<t> module assets: 0.57588 ms
<t> create chunk assets: 7.88813 ms
<t> process assets: 11548.210561 ms

LOG from webpack.Compiler
<t> make hook: 8625.11875 ms
<t> finish make hook: 0.311424 ms
<t> finish compilation: 111.024814 ms
<t> seal compilation: 13910.613166 ms
<t> afterCompile hook: 0.21781 ms
<t> emitAssets: 4.801739 ms
<t> emitRecords: 0.083595 ms
<t> done hook: 507.92514 ms
<t> beginIdle: 0.932695 ms

LOG from webpack.Compilation.ModuleProfile
     | 41 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 39 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 154 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 181 ms (parallelism 4.2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 59 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
     | 59 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 51 ms (parallelism 13.2) resolve to new modules > ./src/app/material/material.module.ts
     | 53 ms (parallelism 13.3) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 53 ms (parallelism 13.3) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 73 ms (parallelism 16.4) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
    1623 ms resolve to new modules
     |  | 186 ms (parallelism 5.2) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 186 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 89 ms (parallelism 5.1) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 89 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 401 ms (parallelism 21) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 401 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 395 ms (parallelism 21.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 395 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 66 ms (parallelism 5.4) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 50 ms (parallelism 13.1) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 52 ms (parallelism 13.1) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 50 ms (parallelism 13.2) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 34 ms (parallelism 16) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     | 984 ms build modules > 81 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 61 ms (parallelism 5.5) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 383 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 210 ms (parallelism 4.5) build modules > ./src/main.ts
     |  | 60 ms (parallelism 6.1) build modules > ./src/app/app.module.ts
     |  | 49 ms (parallelism 13.2) build modules > ./src/app/app-routing.module.ts
     |  | 48 ms (parallelism 13.1) build modules > ./src/app/app.component.ts
     |  | 48 ms (parallelism 13.1) build modules > ./src/app/prompt-update.service.ts
<i>  | 557 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 2997 ms build modules
+ 51 hidden lines

LOG from webpack.ResolverCachePlugin
    29% really resolved (929 real resolves with 0 cached but invalid, 2289 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.051143 ms
<t> figure out provided exports: 35.616559 ms
    96% of exports of modules have been determined (15 no declared exports, 348 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 23 additional calculations due to dependencies)
<t> store provided exports into cache: 3.881153 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 21.357934 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 31.411276 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.450651 ms
<t> trace exports usage in graph: 48.142721 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 13.772353 ms
<t> visitModules: visiting: 16.908451 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 17.169029 ms
<t> connectChunkGroups: 0.00866 ms
<t> cleanup: 0.00863 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.094452 ms
<t> modules: 9.227621 ms
<t> queue: 0.014124 ms
<t> maxSize: 0.086484 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 4.31958 ms
<t> sort relevant modules: 0.750588 ms
<t> find modules to concatenate: 38.236064 ms
<t> sort concat configurations: 0.10475 ms
<t> create concatenated modules: 36.388314 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 458.890805 ms
<t> optimize asset: polyfills.js: 1302.454944 ms
<t> optimize asset: main.js: 9693.953924 ms
<t> optimize js assets: 9942.76695 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 44.626782 ms
<t> optimize css assets: 57.887267 ms

LOG from webpack.FileSystemInfo
    1280 new snapshots created
    0% root snapshot uncached (0 / 2289)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5391/6643) entries shared via 12 shared snapshots (851 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4045/4624) entries shared via 257 shared snapshots (791 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 31% (713/2282) entries shared via 38 shared snapshots (132 times referenced)
    Managed files snapshot optimization: 75% (4827/6466) entries shared via 267 shared snapshots (1009 times referenced)
    Managed missing snapshot optimization: 82% (5786/7057) entries shared via 340 shared snapshots (921 times referenced)

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

2022-11-16 19:51:54: webpack 5.75.0 compiled in 27400 ms (b7a41babb3e6b898)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 583.76 kB |               136.64 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 903.28 kB |               165.92 kB

Build at: 2022-11-17T00:51:58.046Z - Hash: b7a41babb3e6b898 - Time: 30523ms
Done in 32.53s.
Wed Nov 16 07:52:29 PM EST 2022
