Fri Nov 25 08:29:21 AM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.1Gi       1.7Gi       1.1Gi       6.5Gi       6.8Gi
Swap:          8.0Gi       2.1Gi       5.9Gi
System Storage
1.9G	.
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
    
Done in 3.13s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.55s.
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
chunk {179} (runtime: runtime) main.js (main) 5.54 MiB [initial] [rendered]
  cached modules 857 KiB [cached] 1 module
  ./src/main.ts + 193 modules [386] 4.7 MiB {179} [built] [code generated]
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
    18399 ms (resolving: 3113 ms, restoring: 1 ms, integration: 0 ms, building: 15285 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    389 new snapshots created
    37% root snapshot uncached (1203 / 3239)
    25% children snapshot uncached (834 / 3317)
    3190 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 40% (36/91) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 74% (1977/2664) entries shared via 11 shared snapshots (284 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4015/4567) entries shared via 254 shared snapshots (780 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 49% (605/1231) entries shared via 38 shared snapshots (109 times referenced)
    Managed files snapshot optimization: 72% (1536/2131) entries shared via 101 shared snapshots (243 times referenced)
    Managed missing snapshot optimization: 80% (2248/2800) entries shared via 128 shared snapshots (293 times referenced)
+ 4 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 4.404185 ms
<t> runtime requirements.chunks: 0.438485 ms
<t> runtime requirements.entries: 3.312898 ms
<t> finish module profiles: 41.230341 ms
<t> compute affected modules: 0.007764 ms
<t> finish modules: 206.389398 ms
<t> report dependency errors and warnings: 76.050831 ms
<t> optimize dependencies: 327.139084 ms
<t> create chunks: 37.935777 ms
<t> compute affected modules with chunk graph: 0.012267 ms
<t> optimize: 267.767851 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 101.570196 ms
    14% code generated (1 generated, 6 from cache)
<t> code generation: 3899.135745 ms
<t> runtime requirements.modules: 0.244284 ms
<t> runtime requirements.chunks: 0.137133 ms
<t> runtime requirements.entries: 1.223944 ms
<t> runtime requirements: 2.41007 ms
<t> hashing: initialize hash: 0.015007 ms
<t> hashing: hash warnings: 0.006664 ms
<t> hashing: sort chunks: 0.115571 ms
<t> hashing: hash runtime modules: 1.941423 ms
<t> hashing: hash chunks: 2.442144 ms
<t> hashing: hash digest: 0.0755 ms
<t> hashing: process full hash modules: 0.517938 ms
<t> hashing: 5.477948 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.148276 ms
<t> module assets: 0.431066 ms
<t> create chunk assets: 5.358415 ms
<t> process assets: 28565.671456 ms

LOG from webpack.Compiler
<t> make hook: 18540.139677 ms
<t> finish make hook: 0.28279 ms
<t> finish compilation: 324.037593 ms
<t> seal compilation: 33219.204454 ms
<t> afterCompile hook: 0.534881 ms
<t> emitAssets: 16.170086 ms
<t> emitRecords: 0.206365 ms
<t> done hook: 1283.674036 ms
<t> beginIdle: 1.358556 ms

LOG from webpack.Compilation.ModuleProfile
<w>  | 623 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<w>  | 620 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<w>  | 958 ms (parallelism 5.2) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<w>  | 955 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<w>  | 955 ms (parallelism 5.2) resolve to new modules > ./src/main.ts
<i>  | 259 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 96 ms (parallelism 6) resolve to new modules > ./src/environments/environment.ts
     | 113 ms (parallelism 6.2) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 113 ms (parallelism 6.2) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
     | 76 ms (parallelism 16.6) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
     | 76 ms (parallelism 16.6) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 76 ms (parallelism 24.2) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     | 60 ms (parallelism 27.5) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 134 ms (parallelism 13) resolve to new modules > ./node_modules/@material/base/component.js
     | 134 ms (parallelism 13) resolve to new modules > ./node_modules/@material/dom/focus-trap.js
     | 134 ms (parallelism 13) resolve to new modules > ./node_modules/@material/dom/ponyfill.js
     | 134 ms (parallelism 13) resolve to new modules > ./node_modules/@material/ripple/component.js
     | 134 ms (parallelism 13) resolve to new modules > ./node_modules/@material/animation/animationframe.js
     | 134 ms (parallelism 13) resolve to new modules > ./node_modules/@material/base/foundation.js
<w> 6176 ms resolve to new modules
<i>  | 276 ms (parallelism 5.7) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i> 324 ms integrate modules
<e>  |  | 1912 ms (parallelism 8) build modules > ./src/styles.scss?ngGlobalStyle
<e>  | 1912 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<e>  |  | 1828 ms (parallelism 8.1) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<e>  | 1828 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 171 ms (parallelism 14.8) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 158 ms (parallelism 15.3) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 154 ms (parallelism 15.5) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     | 483 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 262 ms (parallelism 4) build modules > ./src/main.ts
     |  | 112 ms (parallelism 6) build modules > ./src/app/app.module.ts
     |  | 67 ms (parallelism 17.8) build modules > ./src/app/material/material.module.ts
<i>  | 531 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 4756 ms build modules
<i>  | 276 ms (parallelism 5.7) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i> 324 ms restore modules
+ 7 hidden lines

LOG from webpack.ResolverCachePlugin
    13% really resolved (372 real resolves with 343 cached but invalid, 2569 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 20.643103 ms
<t> figure out provided exports: 79.751663 ms
    5% of exports of modules have been determined (10 no declared exports, 17 not cached, 0 flagged uncacheable, 311 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.988654 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 2.858583 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 74.584891 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 1.691605 ms
<t> trace exports usage in graph: 249.691164 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 29.119596 ms
<t> visitModules: visiting: 32.598899 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 32.921537 ms
<t> connectChunkGroups: 0.008862 ms
<t> cleanup: 0.0107 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.12276 ms
<t> modules: 9.483224 ms
<t> queue: 0.02448 ms
<t> maxSize: 0.116263 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 4.324044 ms
<t> sort relevant modules: 0.722196 ms
<t> find modules to concatenate: 98.159551 ms
<t> sort concat configurations: 0.104362 ms
<t> create concatenated modules: 62.466926 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: main.js: 23950.911524 ms
<t> optimize js assets: 24559.237397 ms
+ 2 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 38.97634 ms
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

2022-11-25 08:31:25: webpack 5.75.0 compiled in 72027 ms (61258541dae56586)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 586.69 kB |               136.97 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 906.21 kB |               166.25 kB

Build at: 2022-11-25T13:31:34.062Z - Hash: 61258541dae56586 - Time: 80519ms
Done in 88.40s.
```
Fri Nov 25 08:32:35 AM EST 2022
yarn version v1.22.19
info Current version: 0.0.37
info New version: 0.0.38
Done in 0.28s.
