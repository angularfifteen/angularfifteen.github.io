Sun May 21 09:52:52 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       2.7Gi       554Mi        10Gi        12Gi
Swap:          8.0Gi       3.0Mi       8.0Gi
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
    

Angular CLI: 16.0.2
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.2
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.2
@angular-devkit/build-angular   16.0.2
@angular-devkit/core            16.0.2
@angular-devkit/schematics      16.0.2
@angular/cdk                    16.0.1
@angular/material               16.0.1
@schematics/angular             16.0.2
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.58s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001488
Installed version:  1.0.30001488
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001488
Installed version:  1.0.30001488
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3572.378999 ms
    [webpack.cache.PackFileCacheStrategy/webpack.FileSystemInfo] /home/kushal/src/angular/angularfifteen/package.json invalidated because hashes differ (615314192365cf5a != ddd7746ffa7fa644)
    [webpack.cache.PackFileCacheStrategy] resolving of build dependencies is invalid, will re-resolve build dependencies
<t> [webpack.cache.PackFileCacheStrategy] check build dependencies: 1367.6245490000001 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content metadata: 8.15985 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 1 (673 KiB) because of request to: ProgressPlugin|counts
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.110669 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 1 (673 KiB): 33.78054 ms
    [webpack.cache.PackFileCacheStrategy] starting to restore cache content 0 (71.4 MiB) because of request to: Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2022/init.mjs
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.288018 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 1.707174 ms
<i> [webpack.cache.PackFileCacheStrategy] Deserialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022|request=|rxjs/operators': 9.594405 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.090979 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.476325 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.401496 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 3.497147 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.146181 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.059652 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.693492 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.34133 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 1.261643 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.18188 ms
    [webpack.cache.PackFileCacheStrategy] Deserialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.190185 ms
<t> [webpack.cache.PackFileCacheStrategy] restore cache content 0 (71.4 MiB): 337.18249 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 271 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 271 KiB = runtime.js 906 bytes styles.css 271 KiB
chunk {179} (runtime: runtime) main.js (main) 4.76 MiB [initial]
  cached modules 38 KiB [cached] 1 module
  ./src/main.ts + 191 modules [510] 4.72 MiB {179} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial]
  cached modules 104 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 317 KiB (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 317 KiB (css/mini-extract) [cached] 3 modules
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    4977 ms (resolving: 1520 ms, restoring: 0 ms, integration: 0 ms, building: 3457 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    373 new snapshots created
    37% root snapshot uncached (1188 / 3184)
    23% children snapshot uncached (779 / 3370)
    3057 entries tested
    File info in cache: 1055 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 32% (22/68) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 75% (1931/2587) entries shared via 12 shared snapshots (275 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 85% (3808/4470) entries shared via 248 shared snapshots (734 times referenced)
    Managed items info in cache: 167 items
    Managed items snapshot optimization: 46% (504/1088) entries shared via 31 shared snapshots (89 times referenced)
    Managed files snapshot optimization: 77% (1709/2207) entries shared via 95 shared snapshots (230 times referenced)
    Managed missing snapshot optimization: 80% (2046/2552) entries shared via 122 shared snapshots (279 times referenced)
+ 2 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.111218 ms
<t> runtime requirements.chunks: 0.13891 ms
<t> runtime requirements.entries: 0.902758 ms
<t> finish module profiles: 5.288711 ms
<t> compute affected modules: 0.002541 ms
<t> finish modules: 40.089458 ms
<t> report dependency errors and warnings: 11.66129 ms
<t> optimize dependencies: 31.363966 ms
<t> create chunks: 10.21391 ms
<t> compute affected modules with chunk graph: 0.005114 ms
<t> optimize: 58.775009 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 21.615671 ms
    0% code generated (0 generated, 7 from cache)
<t> code generation: 0.310622 ms
<t> runtime requirements.modules: 0.071611 ms
<t> runtime requirements.chunks: 0.054158 ms
<t> runtime requirements.entries: 0.462059 ms
<t> runtime requirements: 0.781907 ms
<t> hashing: initialize hash: 0.004494 ms
<t> hashing: hash warnings: 0.003073 ms
<t> hashing: sort chunks: 0.045742 ms
<t> hashing: hash runtime modules: 0.870463 ms
<t> hashing: hash chunks: 1.077969 ms
<t> hashing: hash digest: 0.016599 ms
<t> hashing: process full hash modules: 0.197374 ms
<t> hashing: 2.359113 ms
    0% code generated (0 generated, 4 from cache)
<t> record hash: 0.057467 ms
<t> module assets: 0.181673 ms
<t> create chunk assets: 1.08459 ms
<t> process assets: 1388.691147 ms

LOG from webpack.Compiler
<t> make hook: 5032.85567 ms
<t> finish make hook: 0.120064 ms
<t> finish compilation: 57.092378 ms
<t> seal compilation: 1518.426217 ms
<t> afterCompile hook: 0.149044 ms
<t> emitAssets: 5.459367 ms
<t> emitRecords: 0.085064 ms
<t> done hook: 330.176217 ms
<t> beginIdle: 0.553116 ms

LOG from webpack.Compilation.ModuleProfile
<i>  | 304 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<i>  | 306 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
<i>  | 304 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 304 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 332 ms (parallelism 5) resolve to new modules > ./src/main.ts
     | 57 ms (parallelism 6) resolve to new modules > ./src/app/app.module.ts
     | 57 ms (parallelism 6.2) resolve to new modules > ./src/environments/environment.ts
     | 61 ms (parallelism 8.1) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     | 61 ms (parallelism 8.1) resolve to new modules > ./node_modules/@angular/core/fesm2022/core.mjs
<i> 1945 ms resolve to new modules
     | 60 ms (parallelism 5.6) integrate modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 60 ms (parallelism 5.6) integrate modules > ./node_modules/zone.js/fesm2015/zone.js
     | 60 ms (parallelism 5.6) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 36 ms (parallelism 6) integrate modules > ./src/main.ts
    239 ms integrate modules
<w>  |  | 514 ms (parallelism 6.7) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 514 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 485 ms (parallelism 6.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 485 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w> 1042 ms build modules
     | 60 ms (parallelism 5.6) restore modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 60 ms (parallelism 5.6) restore modules > ./node_modules/zone.js/fesm2015/zone.js
     | 60 ms (parallelism 5.6) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 36 ms (parallelism 6) restore modules > ./src/main.ts
    239 ms restore modules
+ 8 hidden lines

LOG from webpack.ResolverCachePlugin
    13% really resolved (362 real resolves with 362 cached but invalid, 2510 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 3.053796 ms
<t> figure out provided exports: 4.667976 ms
    2% of exports of modules have been determined (10 no declared exports, 7 not cached, 0 flagged uncacheable, 303 from cache, 0 from mem cache, 0 additional calculations due to dependencies)
<t> store provided exports into cache: 0.005469 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 0.645 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.059216 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.368554 ms
<t> trace exports usage in graph: 20.501018 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 6.796202 ms
<t> visitModules: visiting: 8.037873 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 8.205397 ms
<t> connectChunkGroups: 0.004475 ms
<t> cleanup: 0.003966 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.047212 ms
<t> modules: 4.02025 ms
<t> queue: 0.004223 ms
<t> maxSize: 0.028822 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.564837 ms
<t> sort relevant modules: 0.177262 ms
<t> find modules to concatenate: 18.518772 ms
<t> sort concat configurations: 0.05623 ms
<t> create concatenated modules: 20.122301 ms
+ 3 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize css assets: 0.227597 ms
+ 1 hidden lines

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet
SassWarning: The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:155:37)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:136:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:601:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:155:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/sass/sass-service.js:136:36)
    at Worker.emit (node:events:513:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:737:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-05-21 09:53:25: webpack 5.80.0 compiled in 10068 ms (780767ce11a7334f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 536.162075 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 8.230027 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 373 fresh items in cache put into pack 3
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 6.10316 ms
<w> [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item: No serializer registered for SassWarning
<w> while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> Array { 1 items } -> webpack/lib/ModuleWarning -> SassWarning
    [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': Error: No serializer registered for SassWarning
    while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> Array { 1 items } -> webpack/lib/ModuleWarning -> SassWarning
        at ObjectMiddleware.getSerializerFor (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:237:22)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:465:23)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at ModuleWarning.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/ModuleWarning.js:45:3)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at ArraySerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ArraySerializer.js:10:29)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/key-industries/key-industries.component.ts': 1.190653 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.239032 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 91.431201 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1626 items, 4 files, 72 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.10 kB |               139.82 kB
styles.css          | styles        | 270.58 kB |                17.82 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 902.56 kB |               168.77 kB

Build at: 2023-05-21T13:53:27.293Z - Hash: 780767ce11a7334f - Time: 12126ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 402.56 kB with a total of 902.56 kB.


Done in 14.07s.
```
