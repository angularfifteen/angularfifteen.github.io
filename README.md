Wed Nov 23 07:59:11 AM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       8.0Gi       1.4Gi       713Mi       6.0Gi       6.3Gi
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
    
Done in 0.76s.
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
chunk {179} (runtime: runtime) main.js (main) 5.55 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 857 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 207 modules [335] 4.72 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1275 ms (resolving: 260 ms, restoring: 2 ms, integration: 0 ms, building: 1013 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 320 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 320 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1489 ms (resolving: 48 ms, restoring: 0 ms, integration: 0 ms, building: 1441 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12043 ms (resolving: 157 ms, restoring: 0 ms, integration: 0 ms, building: 11886 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.619816 ms
<t> runtime requirements.chunks: 0.604547 ms
<t> runtime requirements.entries: 2.161812 ms
<t> runtime requirements.modules: 0.042935 ms
<t> runtime requirements.chunks: 0.027536 ms
<t> runtime requirements.entries: 0.287323 ms
<t> finish module profiles: 18.451195 ms
<t> compute affected modules: 0.005904 ms
<t> finish modules: 53.370208 ms
<t> report dependency errors and warnings: 34.827946 ms
<t> optimize dependencies: 54.514114 ms
<t> create chunks: 20.197258 ms
<t> compute affected modules with chunk graph: 0.011758 ms
<t> optimize: 112.195005 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 45.118475 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 2373.149154 ms
<t> runtime requirements.modules: 0.189625 ms
<t> runtime requirements.chunks: 0.194287 ms
<t> runtime requirements.entries: 0.875803 ms
<t> runtime requirements: 1.959662 ms
<t> hashing: initialize hash: 0.014938 ms
<t> hashing: hash warnings: 0.006657 ms
<t> hashing: sort chunks: 0.1756 ms
<t> hashing: hash runtime modules: 1.918391 ms
<t> hashing: hash chunks: 2.564809 ms
<t> hashing: hash digest: 0.081636 ms
<t> hashing: process full hash modules: 0.375714 ms
<t> hashing: 6.21572 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.140447 ms
<t> module assets: 0.465047 ms
<t> create chunk assets: 9.010475 ms
<t> process assets: 9802.251159 ms

LOG from webpack.Compiler
<t> make hook: 12095.217725 ms
<t> finish make hook: 0.196677 ms
<t> finish compilation: 106.721645 ms
<t> seal compilation: 12428.567118 ms
<t> afterCompile hook: 0.211043 ms
<t> emitAssets: 4.178599 ms
<t> emitRecords: 0.069421 ms
<t> done hook: 515.577437 ms
<t> beginIdle: 1.0118 ms

LOG from webpack.Compilation.ModuleProfile
     | 31 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 51 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 49 ms (parallelism 5.3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 136 ms (parallelism 6.3) resolve to new modules > ./src/main.ts
     | 160 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 98 ms (parallelism 14) resolve to new modules > ./src/app/loading.service.ts
     | 98 ms (parallelism 14) resolve to new modules > ./src/app/loading/loading.component.ts
     | 105 ms (parallelism 14) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 105 ms (parallelism 14) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 100 ms (parallelism 22.1) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 102 ms (parallelism 27.6) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
<i> 2534 ms resolve to new modules
     | 99 ms (parallelism 14) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
    124 ms resolve to existing modules
<i>  |  | 234 ms (parallelism 6.2) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 234 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 103 ms (parallelism 6.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 103 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 352 ms (parallelism 33.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 352 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 346 ms (parallelism 34.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 346 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 197 ms (parallelism 6.3) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 35 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 121 ms (parallelism 15.4) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 110 ms (parallelism 19.6) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 119 ms (parallelism 15.6) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 103 ms (parallelism 21.5) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 31 ms (parallelism 88.1) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     | 1377 ms build modules > 81 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 159 ms (parallelism 6.4) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 682 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 257 ms (parallelism 5) build modules > ./src/main.ts
     |  | 34 ms (parallelism 6) build modules > ./src/app/app.module.ts
     |  | 104 ms (parallelism 14) build modules > ./src/app/app-routing.module.ts
<i>  | 566 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 3661 ms build modules
+ 78 hidden lines

LOG from webpack.ResolverCachePlugin
    29% really resolved (929 real resolves with 0 cached but invalid, 2295 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.468434 ms
<t> figure out provided exports: 35.32549 ms
    96% of exports of modules have been determined (15 no declared exports, 348 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 24 additional calculations due to dependencies)
<t> store provided exports into cache: 3.68739 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 20.000849 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 21.606559 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.225879 ms
<t> trace exports usage in graph: 30.926478 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 12.86634 ms
<t> visitModules: visiting: 16.187158 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 16.453509 ms
<t> connectChunkGroups: 0.008105 ms
<t> cleanup: 0.008266 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.109994 ms
<t> modules: 5.352578 ms
<t> queue: 0.011689 ms
<t> maxSize: 0.074674 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 3.216915 ms
<t> sort relevant modules: 0.443517 ms
<t> find modules to concatenate: 37.745634 ms
<t> sort concat configurations: 0.06386 ms
<t> create concatenated modules: 24.787174 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 481.728506 ms
<t> optimize asset: polyfills.js: 1323.96065 ms
<t> optimize asset: main.js: 8057.608006 ms
<t> optimize js assets: 8316.807655 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 29.333346 ms
<t> optimize css assets: 68.549322 ms

LOG from webpack.FileSystemInfo
    1280 new snapshots created
    0% root snapshot uncached (0 / 2295)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5391/6643) entries shared via 12 shared snapshots (851 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4013/4624) entries shared via 258 shared snapshots (783 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 32% (736/2282) entries shared via 41 shared snapshots (129 times referenced)
    Managed files snapshot optimization: 75% (4835/6463) entries shared via 268 shared snapshots (1009 times referenced)
    Managed missing snapshot optimization: 84% (5896/7057) entries shared via 308 shared snapshots (1041 times referenced)

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

2022-11-23 08:00:17: webpack 5.75.0 compiled in 31974 ms (3ac7746a1b32502b)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 584.64 kB |               136.67 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 904.16 kB |               165.95 kB

Build at: 2022-11-23T13:00:19.944Z - Hash: 3ac7746a1b32502b - Time: 34744ms
Done in 37.29s.
```
