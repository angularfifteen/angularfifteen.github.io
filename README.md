Fri Nov 25 10:55:10 AM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       9.3Gi       1.1Gi       2.0Gi       4.9Gi       3.6Gi
Swap:          8.0Gi       3.8Gi       4.2Gi
System Storage
2.0G	.
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
    
Done in 2.83s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.22s.
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
    21874 ms (resolving: 5433 ms, restoring: 0 ms, integration: 0 ms, building: 16441 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    383 new snapshots created
    37% root snapshot uncached (1235 / 3312)
    25% children snapshot uncached (833 / 3337)
    3204 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1977/2664) entries shared via 11 shared snapshots (284 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4037/4567) entries shared via 256 shared snapshots (786 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 50% (605/1218) entries shared via 38 shared snapshots (111 times referenced)
    Managed files snapshot optimization: 74% (1540/2068) entries shared via 101 shared snapshots (243 times referenced)
    Managed missing snapshot optimization: 80% (2235/2800) entries shared via 127 shared snapshots (291 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.420172 ms
<t> runtime requirements.chunks: 1.189561 ms
<t> runtime requirements.entries: 3.280803 ms
<t> finish module profiles: 39.656787 ms
<t> compute affected modules: 0.006935 ms
<t> finish modules: 179.631267 ms
<t> report dependency errors and warnings: 36.228131 ms
<t> optimize dependencies: 95.530496 ms
<t> create chunks: 27.15309 ms
<t> compute affected modules with chunk graph: 0.009227 ms
<t> optimize: 136.546122 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 42.12377 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 1.208951 ms
<t> runtime requirements.modules: 0.283356 ms
<t> runtime requirements.chunks: 0.152676 ms
<t> runtime requirements.entries: 1.757155 ms
<t> runtime requirements: 3.643432 ms
<t> hashing: initialize hash: 0.029952 ms
<t> hashing: hash warnings: 0.015695 ms
<t> hashing: sort chunks: 0.272114 ms
<t> hashing: hash runtime modules: 2.419266 ms
<t> hashing: hash chunks: 3.437169 ms
<t> hashing: hash digest: 0.060704 ms
<t> hashing: process full hash modules: 0.702783 ms
<t> hashing: 7.487679 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.227661 ms
<t> module assets: 0.385024 ms
<t> create chunk assets: 3.18821 ms
<t> process assets: 4403.789124 ms

LOG from webpack.Compiler
<t> make hook: 22154.994912 ms
<t> finish make hook: 0.330953 ms
<t> finish compilation: 255.611125 ms
<t> seal compilation: 4730.978636 ms
<t> afterCompile hook: 0.302782 ms
<t> emitAssets: 17.657407 ms
<t> emitRecords: 0.238497 ms
<t> done hook: 1069.9836070000001 ms
<t> beginIdle: 0.875122 ms

LOG from webpack.Compilation.ModuleProfile
<e>  | 1088 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<e>  | 1081 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<e>  | 1508 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<e>  | 1504 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<e>  | 1507 ms (parallelism 5) resolve to new modules > ./src/main.ts
<i>  | 467 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 47 ms (parallelism 18.1) resolve to new modules > ./node_modules/@angular/common/fesm2020/http.mjs
     | 45 ms (parallelism 18.2) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 45 ms (parallelism 18.3) resolve to new modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     | 54 ms (parallelism 17.9) resolve to new modules > ./src/app/material/material.module.ts
     | 53 ms (parallelism 19.8) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 53 ms (parallelism 19.8) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 47 ms (parallelism 23.9) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 40 ms (parallelism 35.4) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
     | 58 ms (parallelism 36) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
<e> 8033 ms resolve to new modules
<i>  | 251 ms (parallelism 4.9) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i> 396 ms integrate modules
<e>  |  | 2177 ms (parallelism 7.6) build modules > ./src/styles.scss?ngGlobalStyle
<e>  | 2177 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<e>  |  | 1966 ms (parallelism 7.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<e>  | 1966 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 468 ms (parallelism 4) build modules > ./src/main.ts
     |  | 45 ms (parallelism 18.3) build modules > ./src/app/app-routing.module.ts
     |  | 51 ms (parallelism 18.2) build modules > ./src/app/app.component.ts
<i>  | 678 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 4822 ms build modules
<i>  | 251 ms (parallelism 4.9) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i> 396 ms restore modules
+ 11 hidden lines

LOG from webpack.ResolverCachePlugin
    12% really resolved (372 real resolves with 372 cached but invalid, 2610 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 10.95002 ms
<t> figure out provided exports: 20.940707 ms
    3% of exports of modules have been determined (10 no declared exports, 9 not cached, 0 flagged uncacheable, 319 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.013342 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 1.014348 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 33.826086 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.59916 ms
<t> trace exports usage in graph: 58.987293 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 17.13302 ms
<t> visitModules: visiting: 21.239726 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 21.503377 ms
<t> connectChunkGroups: 0.008982 ms
<t> cleanup: 0.008052 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.095904 ms
<t> modules: 10.018076 ms
<t> queue: 0.019047 ms
<t> maxSize: 0.12617 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 4.885772 ms
<t> sort relevant modules: 0.806573 ms
<t> find modules to concatenate: 42.461819 ms
<t> sort concat configurations: 0.080838 ms
<t> create concatenated modules: 36.949476 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.643458 ms
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

2022-11-25 10:57:09: webpack 5.75.0 compiled in 54873 ms (61258541dae56586)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 586.69 kB |               136.97 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 906.21 kB |               166.25 kB

Build at: 2022-11-25T15:57:15.918Z - Hash: 61258541dae56586 - Time: 61297ms
Done in 69.91s.
```
Fri Nov 25 10:58:23 AM EST 2022
yarn version v1.22.19
info Current version: 0.0.38
info New version: 0.0.39
Done in 0.67s.
