Mon Mar  4 06:55:10 AM EST 2024

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.7Gi       1.4Gi       336Mi        11Gi        11Gi
Swap:          8.0Gi       874Mi       7.1Gi
System Storage
1.7G	.
```
```bash
yarn run v1.22.21
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.2.2
Node: 20.11.1
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.2.3
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1702.2
@angular-devkit/build-angular   17.2.2
@angular-devkit/core            17.2.2
@angular-devkit/schematics      17.2.2
@angular/cdk                    17.2.1
@angular/cli                    17.2.2
@angular/material               17.2.1
@schematics/angular             17.2.2
rxjs                            7.5.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.48s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001593
Installed version:  1.0.30001593
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3261.694691 ms
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 0.538827 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 6.15111 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (77.7 MiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.0987 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.594379 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.6917 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.386592 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 3.034772 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.098955 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (77.7 MiB): 218.921285 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 941 KiB {590} [cached] (name: main)
asset styles.css 84.5 KiB {176} [cached] (name: styles)
asset polyfills.js 33 KiB {260} [cached] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [cached]
asset runtime.js 906 bytes {688} [cached] (name: runtime)
Entrypoint main = runtime.js main.js
Entrypoint polyfills = runtime.js polyfills.js
Entrypoint styles = runtime.js styles.css
chunk {176} (runtime: runtime) styles.css (styles) 89 bytes (javascript) 86.7 KiB (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 86.7 KiB (css/mini-extract) [cached] 2 modules
  ./src/styles.scss?ngGlobalStyle [256] 39 bytes {176} [built] [1 error]
    [no exports used]
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    2050 ms (resolving: 281 ms, restoring: 1 ms, integration: 0 ms, building: 1768 ms, storing: 0 ms)
chunk {260} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {590} (runtime: runtime) main.js (main) 5.16 MiB [initial]
  cached modules 29.9 KiB [cached] 1 module
  ./src/main.ts + 197 modules [924] 5.13 MiB {590} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {688} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    194 new snapshots created
    38% root snapshot uncached (1153 / 3058)
    17% children snapshot uncached (519 / 3087)
    2318 entries tested
    File info in cache: 319 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/46) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 77% (1287/1673) entries shared via 12 shared snapshots (183 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 54% (658/1226) entries shared via 23 shared snapshots (151 times referenced)
    Managed items info in cache: 156 items
    Managed items snapshot optimization: 50% (366/735) entries shared via 17 shared snapshots (70 times referenced)
    Managed files snapshot optimization: 71% (526/736) entries shared via 20 shared snapshots (133 times referenced)
    Managed missing snapshot optimization: 67% (601/895) entries shared via 26 shared snapshots (99 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.019376 ms
<t> runtime requirements.chunks: 0.132236 ms
<t> runtime requirements.entries: 0.353531 ms
<t> finish module profiles: 4.488442 ms
<t> compute affected modules: 0.002618 ms
<t> finish modules: 40.993798 ms
<t> report dependency errors and warnings: 8.961925 ms
<t> optimize dependencies: 27.6715 ms
<t> create chunks: 6.688976 ms
<t> compute affected modules with chunk graph: 0.004926 ms
<t> optimize: 38.24827 ms
    6 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 21.34193 ms
    0% code generated (0 generated, 6 from cache)
<t> code generation: 0.353343 ms
<t> runtime requirements.modules: 0.06932 ms
<t> runtime requirements.chunks: 0.055411 ms
<t> runtime requirements.entries: 0.689806 ms
<t> runtime requirements: 1.103729 ms
<t> hashing: initialize hash: 0.005904 ms
<t> hashing: hash errors: 0.00478 ms
<t> hashing: sort chunks: 0.040349 ms
<t> hashing: hash runtime modules: 1.069406 ms
<t> hashing: hash chunks: 1.007161 ms
<t> hashing: hash digest: 0.024497 ms
<t> hashing: process full hash modules: 0.142313 ms
<t> hashing: 2.457471 ms
    0% code generated (0 generated, 4 from cache)
<t> module assets: 0.244601 ms
<t> create chunk assets: 1.099086 ms
<t> process assets: 1662.56344 ms

LOG from webpack.Compiler
<t> make hook: 2088.144343 ms
<t> finish make hook: 0.074297 ms
<t> finish compilation: 54.480337 ms
<t> seal compilation: 1763.230725 ms
<t> afterCompile hook: 0.140381 ms

LOG from webpack.Compilation.ModuleProfile
     | 56 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 56 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 94 ms (parallelism 4.6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 93 ms (parallelism 4.7) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 93 ms (parallelism 4.6) resolve to new modules > ./src/main.ts
     | 51 ms (parallelism 7) resolve to new modules > ./src/app/app.module.ts
     | 52 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 51 ms (parallelism 7.1) resolve to new modules > ./src/environments/environment.ts
     | 57 ms (parallelism 8.7) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 56 ms (parallelism 8.7) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    805 ms resolve to new modules
     |  | 170 ms (parallelism 10.4) build modules > ./src/styles.scss?ngGlobalStyle
     | 170 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 149 ms (parallelism 11) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 149 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    364 ms build modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    7% really resolved (185 real resolves with 185 cached but invalid, 2561 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.632999 ms
<t> figure out provided exports: 5.383235 ms
    3% of exports of modules have been determined (5 no declared exports, 11 not cached, 0 flagged uncacheable, 300 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.005614 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.487603 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 9.718291 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.424381 ms
<t> trace exports usage in graph: 17.154998 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.38164 ms
<t> visitModules: visiting: 5.23439 ms
    457 queue items processed (204 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.312673 ms
<t> connectChunkGroups: 0.004323 ms
<t> cleanup: 0.003395 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.051953 ms
<t> modules: 2.975482 ms
<t> queue: 0.007149 ms
<t> maxSize: 0.04388 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.382797 ms
<t> sort relevant modules: 0.166672 ms
<t> find modules to concatenate: 14.091804 ms
<t> sort concat configurations: 0.040979 ms
<t> create concatenated modules: 10.309821 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.074414 ms
+ 1 hidden lines

ERROR in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet
ModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet
    at processResult (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:764:19)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:866:5
    at /home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:400:11
    at /home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:252:18
    at context.callback (/home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:124:13)
    at Object.loader (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/index.js:63:5)
 @ ./src/styles.scss?ngGlobalStyle

ERROR in ./src/styles.scss?ngGlobalStyle
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
HookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet
    at tryRunOrWebpackError (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:88:9)
    at __webpack_require_module__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5076:12)
    at __webpack_require__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5033:18)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5104:20
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4976:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3371:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:34
    at Array.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/MemoryWithGcCachePlugin.js:118:13)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:19
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
-- inner error --
Error: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet
    at Object.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle:1:7)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5078:39
    at tryRunOrWebpackError (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:83:7)
    at __webpack_require_module__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5076:12)
    at __webpack_require__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5033:18)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5104:20
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4976:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3371:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:34
    at Array.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/MemoryWithGcCachePlugin.js:118:13)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:19
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Generated code for /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle
1 | throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n   ╷\n17 │ @include mat.all-legacy-component-typographies();\n   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  src/styles.scss 17:1  root stylesheet");
ModuleBuildError: Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
HookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet
    at tryRunOrWebpackError (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:88:9)
    at __webpack_require_module__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5076:12)
    at __webpack_require__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5033:18)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5104:20
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4976:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3371:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:34
    at Array.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/MemoryWithGcCachePlugin.js:118:13)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:19
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
-- inner error --
Error: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet
    at Object.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle:1:7)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5078:39
    at tryRunOrWebpackError (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:83:7)
    at __webpack_require_module__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5076:12)
    at __webpack_require__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5033:18)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5104:20
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4976:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3371:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:34
    at Array.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/MemoryWithGcCachePlugin.js:118:13)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:19
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Generated code for /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle
1 | throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n   ╷\n17 │ @include mat.all-legacy-component-typographies();\n   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  src/styles.scss 17:1  root stylesheet");
    at processResult (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:764:19)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:866:5
    at /home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:400:11
    at /home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:195:20
    at context.callback (/home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:124:13)
    at /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js:250:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/dependencies/LoaderPlugin.js:209:27
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5113:17
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4976:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3371:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:34
    at Array.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/MemoryWithGcCachePlugin.js:118:13)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:91:19
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

ERROR in src/app/prompt-update.service.ts:2:20 - error TS2305: Module '"@angular/service-worker"' has no exported member 'UpdateAvailableEvent'.

2 import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
                     ~~~~~~~~~~~~~~~~~~~~
Error: src/app/prompt-update.service.ts:2:20 - error TS2305: Module '"@angular/service-worker"' has no exported member 'UpdateAvailableEvent'.

2 import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
                     ~~~~~~~~~~~~~~~~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:371:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:185:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:112:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1138:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1183:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

ERROR in src/app/prompt-update.service.ts:11:18 - error TS2339: Property 'available' does not exist on type 'SwUpdate'.

11     this.updates.available.subscribe((event) => {
                    ~~~~~~~~~
Error: src/app/prompt-update.service.ts:11:18 - error TS2339: Property 'available' does not exist on type 'SwUpdate'.

11     this.updates.available.subscribe((event) => {
                    ~~~~~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:371:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:185:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:112:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1138:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1183:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

ERROR in src/app/prompt-update.service.ts:11:39 - error TS7006: Parameter 'event' implicitly has an 'any' type.

11     this.updates.available.subscribe((event) => {
                                         ~~~~~
Error: src/app/prompt-update.service.ts:11:39 - error TS7006: Parameter 'event' implicitly has an 'any' type.

11     this.updates.available.subscribe((event) => {
                                         ~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:371:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:185:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:112:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1138:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1183:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

2024-03-04 06:55:38: webpack 5.90.1 compiled in 7133 ms (f0cfaad9a259cfbf)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] 197 fresh items in cache put into pack 1
    [webpack.cache.PackFileCacheStrategy] Split pack 0 into pack 0 with 1376 used items and pack 2 with 16 unused items
    [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item (in build error): No serializer registered for URL
    while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> webpack/lib/ModuleBuildError -> Error -> Object { span, message, stack, sassMessage, sassStack } -> Object { text, context, end, start, url } -> URL
    [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle' (in build error): Error: No serializer registered for URL
    while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> webpack/lib/ModuleBuildError -> Error -> Object { span, message, stack, sassMessage, sassStack } -> Object { text, context, end, start, url } -> URL
        at ObjectMiddleware.getSerializerFor (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:255:22)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:496:23)
        at Object.write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:418:6)
        at PlainObjectSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/PlainObjectSerializer.js:63:13)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:511:17)
        at Object.write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:418:6)
        at PlainObjectSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/PlainObjectSerializer.js:63:13)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:511:17)
        at Object.write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:418:6)
        at ErrorObjectSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ErrorObjectSerializer.js:24:11)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:511:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:418:6)
        at ModuleBuildError.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/ModuleBuildError.js:67:3)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:17:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:511:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:418:6)
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1380:3)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:17:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:511:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:418:6)
        at PackContentItems.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/PackFileCacheStrategy.js:640:6)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:17:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:511:17)
        at ObjectMiddleware.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:570:5)
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:556:12
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/SerializerMiddleware.js:106:11
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/memoize.js:22:13
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/SerializerMiddleware.js:102:14
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/memoize.js:22:13
        at serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/FileMiddleware.js:129:21)
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.27622 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/quiz/quiz.component.ts': 1.666152 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.332591 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 4.989826 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/animations/fesm2022/browser.mjs': 1.835733 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.371882 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.730185 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.362998 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.390736 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.114523 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.000157 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 2.135064 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.071406 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.784753 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.657875 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 5.146934 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 2.897391 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.889366 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/a11y.mjs': 1.183203 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/scrolling.mjs': 5.175769 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.113952 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|757a9cb93bafb3e6|runtime': 2.389027 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 337.695319 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1589 items, 3 files, 78 MiB)
✔ Browser application bundle generation complete.

./src/styles.scss - Error: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet

./src/styles.scss?ngGlobalStyle - Error: Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
HookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet

Error: src/app/prompt-update.service.ts:2:20 - error TS2305: Module '"@angular/service-worker"' has no exported member 'UpdateAvailableEvent'.

2 import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
                     ~~~~~~~~~~~~~~~~~~~~


Error: src/app/prompt-update.service.ts:11:18 - error TS2339: Property 'available' does not exist on type 'SwUpdate'.

11     this.updates.available.subscribe((event) => {
                    ~~~~~~~~~


Error: src/app/prompt-update.service.ts:11:39 - error TS7006: Parameter 'event' implicitly has an 'any' type.

11     this.updates.available.subscribe((event) => {
                                         ~~~~~



error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
