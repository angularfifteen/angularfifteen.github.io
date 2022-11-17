Thu Nov 17 01:53:12 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.7Gi       1.4Gi       1.2Gi       6.2Gi       6.0Gi
Swap:          8.0Gi        42Mi       8.0Gi
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
    
Done in 0.86s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
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
    8468 ms (resolving: 1353 ms, restoring: 0 ms, integration: 0 ms, building: 7115 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    384 new snapshots created
    35% root snapshot uncached (1273 / 3652)
    25% children snapshot uncached (835 / 3386)
    3269 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1984/2673) entries shared via 11 shared snapshots (285 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4041/4574) entries shared via 256 shared snapshots (784 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 51% (619/1218) entries shared via 38 shared snapshots (113 times referenced)
    Managed files snapshot optimization: 75% (1541/2066) entries shared via 101 shared snapshots (244 times referenced)
    Managed missing snapshot optimization: 80% (2235/2801) entries shared via 127 shared snapshots (291 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.179579 ms
<t> runtime requirements.chunks: 0.216399 ms
<t> runtime requirements.entries: 1.620176 ms
<t> finish module profiles: 14.516017 ms
<t> compute affected modules: 0.004981 ms
<t> finish modules: 87.4424 ms
<t> report dependency errors and warnings: 23.556234 ms
<t> optimize dependencies: 52.509028 ms
<t> create chunks: 18.367253 ms
<t> compute affected modules with chunk graph: 0.010567 ms
<t> optimize: 98.881805 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 37.671129 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.683888 ms
<t> runtime requirements.modules: 0.193446 ms
<t> runtime requirements.chunks: 0.144965 ms
<t> runtime requirements.entries: 1.067335 ms
<t> runtime requirements: 1.826616 ms
<t> hashing: initialize hash: 0.010697 ms
<t> hashing: hash warnings: 0.005821 ms
<t> hashing: sort chunks: 0.079551 ms
<t> hashing: hash runtime modules: 1.741655 ms
<t> hashing: hash chunks: 2.083743 ms
<t> hashing: hash digest: 0.032618 ms
<t> hashing: process full hash modules: 0.394443 ms
<t> hashing: 4.65877 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.131603 ms
<t> module assets: 0.333411 ms
<t> create chunk assets: 2.345106 ms
<t> process assets: 1947.1824689999999 ms

LOG from webpack.Compiler
<t> make hook: 8532.736139 ms
<t> finish make hook: 0.141269 ms
<t> finish compilation: 125.577774 ms
<t> seal compilation: 2167.246237 ms
<t> afterCompile hook: 0.170393 ms
<t> emitAssets: 11.426485 ms
<t> emitRecords: 0.097701 ms
<t> done hook: 488.69279 ms
<t> beginIdle: 0.620181 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 271 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 270 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 448 ms (parallelism 5.3) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<i>  | 446 ms (parallelism 5.3) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 446 ms (parallelism 5.3) resolve to new modules > ./src/main.ts
     | 165 ms (parallelism 5.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 169 ms (parallelism 6) resolve to new modules > ./src/environments/environment.ts
     | 162 ms (parallelism 6.8) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 162 ms (parallelism 6.9) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
     | 35 ms (parallelism 17.7) resolve to new modules > ./node_modules/@angular/common/fesm2020/http.mjs
     | 39 ms (parallelism 17.7) resolve to new modules > ./src/app/material/material.module.ts
     | 38 ms (parallelism 19.3) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 38 ms (parallelism 19.3) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 39 ms (parallelism 30.1) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
<i> 3088 ms resolve to new modules
     | 173 ms (parallelism 5.8) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    264 ms integrate modules
<w>  |  | 799 ms (parallelism 8.9) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 799 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 760 ms (parallelism 9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 760 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 32 ms (parallelism 18.1) build modules > ./src/app/app-routing.module.ts
     |  | 32 ms (parallelism 18.1) build modules > ./src/app/app.component.ts
     | 138 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 1698 ms build modules
     | 173 ms (parallelism 5.8) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    264 ms restore modules
+ 6 hidden lines

LOG from webpack.ResolverCachePlugin
    11% really resolved (373 real resolves with 373 cached but invalid, 2930 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 5.421146 ms
<t> figure out provided exports: 13.001622 ms
    8% of exports of modules have been determined (10 no declared exports, 27 not cached, 0 flagged uncacheable, 320 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008108 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 1.045829 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 16.992885 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.792007 ms
<t> trace exports usage in graph: 34.09182 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 12.334568 ms
<t> visitModules: visiting: 14.723744 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 14.864405 ms
<t> connectChunkGroups: 0.008102 ms
<t> cleanup: 0.008458 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.085047 ms
<t> modules: 6.946506 ms
<t> queue: 0.012009 ms
<t> maxSize: 0.077525 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.623509 ms
<t> sort relevant modules: 0.393039 ms
<t> find modules to concatenate: 33.2252 ms
<t> sort concat configurations: 0.076376 ms
<t> create concatenated modules: 24.995519 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.337792 ms
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

2022-11-17 13:53:48: webpack 5.75.0 compiled in 19649 ms (b7a41babb3e6b898)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 583.76 kB |               136.64 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 903.28 kB |               165.92 kB

Build at: 2022-11-17T18:53:50.996Z - Hash: b7a41babb3e6b898 - Time: 21863ms
Done in 24.30s.
```
