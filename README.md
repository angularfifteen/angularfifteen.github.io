Thu Feb 15 12:09:18 PM EST 2024

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.9Gi       4.0Gi       310Mi        10Gi        13Gi
Swap:          8.0Gi          0B       8.0Gi
System Storage
1.2G	.
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
    

Angular CLI: 17.2.0
Node: 20.11.1
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.2.1
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1702.0
@angular-devkit/build-angular   17.2.0
@angular-devkit/core            17.2.0
@angular-devkit/schematics      17.2.0
@angular/cdk                    17.2.0
@angular/cli                    17.2.0
@angular/material               17.2.0
@schematics/angular             17.2.0
rxjs                            7.5.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.44s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.34s.
```
```bash
Latest version:     1.0.30001587
Installed version:  1.0.30001587
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3407.750398 ms
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 0.572411 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 6.641324 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (145 bytes) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 3 (246 KiB) because of request to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (145 bytes): 0.805387 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 3 (246 KiB): 17.160969 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (77.1 MiB) because of request to: Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.018725 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.305777 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.139526 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 1.786001 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (77.1 MiB): 242.953312 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
    [webpack.cache.PackFileCacheStrategy] Pack 3 got empty and is removed
asset main.js 941 KiB {590} [cached] (name: main)
asset styles.css 84.4 KiB {176} [cached] (name: styles)
asset polyfills.js 33 KiB {260} [cached] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [cached]
asset runtime.js 906 bytes {688} [cached] (name: runtime)
Entrypoint main = runtime.js main.js
Entrypoint polyfills = runtime.js polyfills.js
Entrypoint styles = runtime.js styles.css
chunk {176} (runtime: runtime) styles.css (styles) 89 bytes (javascript) 86.6 KiB (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 86.6 KiB (css/mini-extract) [cached] 2 modules
  ./src/styles.scss?ngGlobalStyle [256] 39 bytes {176} [built] [1 error]
    [no exports used]
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    1916 ms (resolving: 65 ms, restoring: 0 ms, integration: 0 ms, building: 1851 ms, storing: 0 ms)
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
    38% root snapshot uncached (1153 / 3060)
    15% children snapshot uncached (493 / 3184)
    2422 entries tested
    File info in cache: 319 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 0% (0/46) entries shared via 0 shared snapshots (0 times referenced)
    File timestamp hash combination snapshot optimization: 77% (1286/1673) entries shared via 12 shared snapshots (183 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 54% (658/1226) entries shared via 23 shared snapshots (151 times referenced)
    Managed items info in cache: 156 items
    Managed items snapshot optimization: 50% (366/736) entries shared via 17 shared snapshots (70 times referenced)
    Managed files snapshot optimization: 71% (526/736) entries shared via 20 shared snapshots (133 times referenced)
    Managed missing snapshot optimization: 67% (601/895) entries shared via 26 shared snapshots (99 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.015382 ms
<t> runtime requirements.chunks: 0.110631 ms
<t> runtime requirements.entries: 0.350615 ms
<t> finish module profiles: 4.804875 ms
<t> compute affected modules: 0.002058 ms
<t> finish modules: 49.056402 ms
<t> report dependency errors and warnings: 10.538606 ms
<t> optimize dependencies: 37.656771 ms
<t> create chunks: 15.803866 ms
<t> compute affected modules with chunk graph: 0.003272 ms
<t> optimize: 49.737272 ms
    6 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 23.685259 ms
    0% code generated (0 generated, 6 from cache)
<t> code generation: 0.421929 ms
<t> runtime requirements.modules: 0.073673 ms
<t> runtime requirements.chunks: 0.055116 ms
<t> runtime requirements.entries: 0.651173 ms
<t> runtime requirements: 0.992433 ms
<t> hashing: initialize hash: 0.005341 ms
<t> hashing: hash errors: 0.004938 ms
<t> hashing: sort chunks: 0.039992 ms
<t> hashing: hash runtime modules: 1.090301 ms
<t> hashing: hash chunks: 1.049359 ms
<t> hashing: hash digest: 0.02305 ms
<t> hashing: process full hash modules: 0.136222 ms
<t> hashing: 2.49256 ms
    0% code generated (0 generated, 4 from cache)
<t> module assets: 0.170773 ms
<t> create chunk assets: 1.038227 ms
<t> process assets: 1599.116833 ms

LOG from webpack.Compiler
<t> make hook: 1960.149313 ms
<t> finish make hook: 0.066094 ms
<t> finish compilation: 64.432513 ms
<t> seal compilation: 1732.4081609999998 ms
<t> afterCompile hook: 0.06158 ms

LOG from webpack.Compilation.ModuleProfile
     | 70 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 68 ms (parallelism 4.9) resolve to new modules > ./src/main.ts
     | 68 ms (parallelism 4.9) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 49 ms (parallelism 7) resolve to new modules > ./src/app/app.module.ts
     | 49 ms (parallelism 7) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 49 ms (parallelism 7.1) resolve to new modules > ./src/environments/environment.ts
     | 52 ms (parallelism 8.5) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 52 ms (parallelism 8.5) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
    620 ms resolve to new modules
     | 49 ms (parallelism 5) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    63 ms integrate modules
     |  | 182 ms (parallelism 10.2) build modules > ./src/styles.scss?ngGlobalStyle
     | 182 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 148 ms (parallelism 10.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
     | 148 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
    369 ms build modules
     | 49 ms (parallelism 5) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
    63 ms restore modules
+ 4 hidden lines

LOG from webpack.ResolverCachePlugin
    7% really resolved (185 real resolves with 185 cached but invalid, 2563 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.912082 ms
<t> figure out provided exports: 5.911707 ms
    3% of exports of modules have been determined (5 no declared exports, 11 not cached, 0 flagged uncacheable, 300 from cache, 0 from mem cache, 1 additional calculations due to dependencies)
<t> store provided exports into cache: 0.008243 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.545807 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.750742 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.661197 ms
<t> trace exports usage in graph: 22.77094 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 11.870518 ms
<t> visitModules: visiting: 13.401744 ms
    457 queue items processed (204 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 13.513895 ms
<t> connectChunkGroups: 0.003099 ms
<t> cleanup: 0.002184 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.033992 ms
<t> modules: 2.682578 ms
<t> queue: 0.004661 ms
<t> maxSize: 0.030895 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.296128 ms
<t> sort relevant modules: 0.184512 ms
<t> find modules to concatenate: 17.44947 ms
<t> sort concat configurations: 0.047712 ms
<t> create concatenated modules: 16.759842 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.106858 ms
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

2024-02-15 12:09:45: webpack 5.90.1 compiled in 7129 ms (62a04c6afa2eb379)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] 196 fresh items in cache put into pack 3
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.156383 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/quiz/quiz.component.ts': 1.115764 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 42.587068 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1589 items, 4 files, 78 MiB)
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
Thu Feb 15 12:09:57 PM EST 2024
yarn version v1.22.21
info Current version: 0.0.824
info New version: 0.0.825
Done in 0.12s.
