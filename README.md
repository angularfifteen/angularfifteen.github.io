Sat Jul 15 12:12:32 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.9Gi       3.2Gi       561Mi       9.2Gi        11Gi
Swap:          8.0Gi       966Mi       7.1Gi
System Storage
1.2G	.
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
    

Angular CLI: 16.1.4
Node: 18.16.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.4
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.4
@angular-devkit/build-angular   16.1.4
@angular-devkit/core            16.1.4
@angular-devkit/schematics      16.1.4
@schematics/angular             16.1.4
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.59s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001515
Installed version:  1.0.30001515
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001515
Installed version:  1.0.30001515
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.4/angular-webpack/caf444375389d06d4deb528cc10791e1694bc2cc.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.4/angular-webpack/caf444375389d06d4deb528cc10791e1694bc2cc/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3603.582742 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 601 KiB {179} [emitted] (name: main)
asset styles.css 265 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 602 KiB = runtime.js 906 bytes main.js 601 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 266 KiB = runtime.js 906 bytes styles.css 265 KiB
chunk {179} (runtime: runtime) main.js (main) 4.79 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.75 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    700 ms (resolving: 202 ms, restoring: 0 ms, integration: 0 ms, building: 498 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 304 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 304 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1015 ms (resolving: 49 ms, restoring: 0 ms, integration: 0 ms, building: 966 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    8326 ms (resolving: 157 ms, restoring: 0 ms, integration: 0 ms, building: 8169 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.651834 ms
<t> runtime requirements.chunks: 0.785975 ms
<t> runtime requirements.entries: 2.396407 ms
<t> runtime requirements.modules: 0.027214 ms
<t> runtime requirements.chunks: 0.015968 ms
<t> runtime requirements.entries: 0.161504 ms
<t> finish module profiles: 10.043689 ms
<t> compute affected modules: 0.003009 ms
<t> finish modules: 22.512308 ms
<t> report dependency errors and warnings: 10.713114 ms
<t> optimize dependencies: 34.394117 ms
<t> create chunks: 7.609906 ms
<t> compute affected modules with chunk graph: 0.004681 ms
<t> optimize: 46.971373 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.97773 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 756.595421 ms
<t> runtime requirements.modules: 0.116436 ms
<t> runtime requirements.chunks: 0.108 ms
<t> runtime requirements.entries: 0.501118 ms
<t> runtime requirements: 0.899825 ms
<t> hashing: initialize hash: 0.006792 ms
<t> hashing: hash warnings: 0.003288 ms
<t> hashing: sort chunks: 0.056854 ms
<t> hashing: hash runtime modules: 1.065235 ms
<t> hashing: hash chunks: 1.318779 ms
<t> hashing: hash digest: 0.045796 ms
<t> hashing: process full hash modules: 0.163976 ms
<t> hashing: 2.886756 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.065333 ms
<t> module assets: 0.16226 ms
<t> create chunk assets: 4.010482 ms
<t> process assets: 15667.05285 ms

LOG from webpack.Compiler
<t> make hook: 8366.969059 ms
<t> finish make hook: 0.122175 ms
<t> finish compilation: 43.326973 ms
<t> seal compilation: 16539.854036 ms
<t> afterCompile hook: 0.2172 ms
<t> emitAssets: 4.853473 ms
<t> emitRecords: 0.080641 ms
<t> done hook: 382.809806 ms
<t> beginIdle: 0.783921 ms

LOG from webpack.Compilation.ModuleProfile
     | 31 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 41 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 39 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 107 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 44 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 38 ms (parallelism 49.3) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 36 ms (parallelism 63) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1808 ms resolve to new modules
     |  | 181 ms (parallelism 5.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 181 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 56 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 56 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 244 ms (parallelism 33.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 244 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 107 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 108 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 36 ms (parallelism 45.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 34 ms (parallelism 46.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 38 ms (parallelism 49) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 34 ms (parallelism 46.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 42 ms (parallelism 51.8) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 42 ms (parallelism 51.8) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 1281 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 83 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     | 268 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 226 ms (parallelism 34.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 226 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 232 ms (parallelism 4.9) build modules > ./src/main.ts
     |  | 31 ms (parallelism 48.3) build modules > ./src/app/loading.service.ts
     |  | 31 ms (parallelism 48.3) build modules > ./src/app/home/home.component.ts
     |  | 31 ms (parallelism 48.3) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 31 ms (parallelism 48.3) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 31 ms (parallelism 48.3) build modules > ./src/app/news/news.component.ts
     |  | 33 ms (parallelism 47.2) build modules > ./src/app/playground/playground.component.ts
     |  | 33 ms (parallelism 47.2) build modules > ./src/app/quiz/quiz.component.ts
     |  | 33 ms (parallelism 47.2) build modules > ./src/app/loading/loading.component.ts
<i>  | 540 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i> 2800 ms build modules
+ 77 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (879 real resolves with 0 cached but invalid, 1932 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.364414 ms
<t> figure out provided exports: 13.052295 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 6 additional calculations due to dependencies)
<t> store provided exports into cache: 1.925115 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 21.000214 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.069512 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.503772 ms
<t> trace exports usage in graph: 22.381224 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.974149 ms
<t> visitModules: visiting: 5.910995 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.996364 ms
<t> connectChunkGroups: 0.004328 ms
<t> cleanup: 0.004761 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.04249 ms
<t> modules: 3.008266 ms
<t> queue: 0.006948 ms
<t> maxSize: 0.044522 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.707646 ms
<t> sort relevant modules: 0.203737 ms
<t> find modules to concatenate: 15.161424 ms
<t> sort concat configurations: 0.056819 ms
<t> create concatenated modules: 10.995112 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 287.323742 ms
<t> optimize asset: polyfills.js: 678.26884 ms
<t> optimize asset: main.js: 14234.951523 ms
<t> optimize js assets: 14377.73384 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 33.667177 ms
<t> optimize css assets: 43.380529 ms

LOG from webpack.FileSystemInfo
    1195 new snapshots created
    0% root snapshot uncached (0 / 1932)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1040 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5104/6253) entries shared via 12 shared snapshots (805 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3864/4436) entries shared via 249 shared snapshots (747 times referenced)
    Managed items info in cache: 158 items
    Managed items snapshot optimization: 31% (634/2042) entries shared via 33 shared snapshots (123 times referenced)
    Managed files snapshot optimization: 77% (4901/6376) entries shared via 256 shared snapshots (974 times referenced)
    Managed missing snapshot optimization: 84% (5486/6546) entries shared via 326 shared snapshots (903 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:604:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:144:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/sass/sass-service.js:136:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-07-15 00:13:39: webpack 5.86.0 compiled in 28521 ms (c36da0f48ff3ce74)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 844.350416 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 44.354054 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.410179 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.101052 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.608536 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.053091 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.330533 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/src/app|request=|rxjs': 1.193306 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.09601 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.000797 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.491779 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.152928 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.00543 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.083363 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.353631 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.28568 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.215356 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.093625 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.463806 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/progress-spinner.mjs': 2.991008 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 2.512317 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.671958 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.26431 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.298184 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.106733 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/accordion.mjs': 3.350265 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchScan.js': 4.100016 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 27.425268 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 15.675151 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 454.24152 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 601.10 kB |               140.10 kB
styles.css          | styles        | 265.17 kB |                17.48 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.15 kB |               168.71 kB

Build at: 2023-07-15T04:13:42.577Z - Hash: c36da0f48ff3ce74 - Time: 31483ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.15 kB with a total of 900.15 kB.


Done in 33.50s.
```
Sat Jul 15 12:14:07 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.418
info New version: 0.0.419
Done in 0.13s.
