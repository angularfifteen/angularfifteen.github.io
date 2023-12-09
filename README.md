Sat Dec  9 02:45:06 PM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.6Gi       2.1Gi       267Mi        11Gi        12Gi
Swap:          8.0Gi        26Mi       8.0Gi
System Storage
1.3G	.
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
    

Angular CLI: 17.0.5
Node: 20.10.0
Package Manager: yarn 1.22.21
OS: linux x64

Angular: 17.0.5
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1700.5
@angular-devkit/build-angular   17.0.5
@angular-devkit/core            17.0.5
@angular-devkit/schematics      17.0.5
@angular/cdk                    17.0.2
@angular/material               17.0.2
@schematics/angular             17.0.5
rxjs                            7.5.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.45s.
yarn install v1.22.21
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001566
Installed version:  1.0.30001566
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.21
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/17.0.6/angular-webpack/674ff02d48bb636fdf7ce4e1088997018242c01f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/17.0.6/angular-webpack/674ff02d48bb636fdf7ce4e1088997018242c01f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3282.730966 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 613 KiB {179} [cached] (name: main)
asset styles.css 82 KiB {532} [cached] (name: styles)
asset polyfills.js 33 KiB {429} [cached] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [cached]
asset runtime.js 906 bytes {666} [cached] (name: runtime)
Entrypoint main = runtime.js main.js
Entrypoint polyfills = runtime.js polyfills.js
Entrypoint styles = runtime.js styles.css
chunk {179} (runtime: runtime) main.js (main) 5.03 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 29.9 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 193 modules [216] 5 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1463 ms (resolving: 41 ms, restoring: 1 ms, integration: 0 ms, building: 1421 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 89 bytes (javascript) 84.4 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 84.4 KiB [dependent] 1 module
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1550 ms (resolving: 34 ms, restoring: 0 ms, integration: 0 ms, building: 1516 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 39 bytes {532} [built] [code generated] [1 error]
    [no exports used]
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    10055 ms (resolving: 35 ms, restoring: 1 ms, integration: 0 ms, building: 10019 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.403931 ms
<t> runtime requirements.chunks: 0.376951 ms
<t> runtime requirements.entries: 1.364215 ms
<t> runtime requirements.modules: 0.016535 ms
<t> runtime requirements.chunks: 0.012889 ms
<t> runtime requirements.entries: 0.068804 ms
<t> finish module profiles: 7.018988 ms
<t> compute affected modules: 0.003413 ms
<t> finish modules: 23.048281 ms
<t> report dependency errors and warnings: 11.831421 ms
<t> optimize dependencies: 26.189239 ms
<t> create chunks: 10.601277 ms
<t> compute affected modules with chunk graph: 0.006124 ms
<t> optimize: 46.935069 ms
    6 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 19.940343 ms
    100% code generated (6 generated, 0 from cache)
<t> code generation: 801.94806 ms
<t> runtime requirements.modules: 0.121371 ms
<t> runtime requirements.chunks: 0.056318 ms
<t> runtime requirements.entries: 0.563265 ms
<t> runtime requirements: 0.938892 ms
<t> hashing: initialize hash: 0.007594 ms
<t> hashing: hash errors: 0.00529 ms
<t> hashing: sort chunks: 0.043613 ms
<t> hashing: hash runtime modules: 1.059082 ms
<t> hashing: hash chunks: 1.13182 ms
<t> hashing: hash digest: 0.0316 ms
<t> hashing: process full hash modules: 0.155873 ms
<t> hashing: 2.603069 ms
    100% code generated (4 generated, 0 from cache)
<t> module assets: 0.156222 ms
<t> create chunk assets: 3.028938 ms
<t> process assets: 6487.2737290000005 ms

LOG from webpack.Compiler
<t> make hook: 10163.925384 ms
<t> finish make hook: 0.084836 ms
<t> finish compilation: 41.94733 ms
<t> seal compilation: 7401.403437 ms
<t> afterCompile hook: 0.093204 ms

LOG from webpack.Compilation.ModuleProfile
     | 39 ms (parallelism 4.6) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 68 ms (parallelism 29.1) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 43 ms (parallelism 57.5) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 43 ms (parallelism 57.5) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 39 ms (parallelism 55.2) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 56 ms (parallelism 65.7) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1287 ms resolve to new modules
     | 55 ms (parallelism 3) integrate modules > ./src/main.ts
    61 ms integrate modules
<i>  |  | 263 ms (parallelism 5.8) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 263 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 230 ms (parallelism 43.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 230 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 233 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 84 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 73 ms (parallelism 28) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 70 ms (parallelism 20.1) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 73 ms (parallelism 28) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 69 ms (parallelism 28.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 45 ms (parallelism 56.9) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 49 ms (parallelism 55.1) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 45 ms (parallelism 56.8) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 46 ms (parallelism 56.6) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 47 ms (parallelism 55.9) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 49 ms (parallelism 55.1) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 45 ms (parallelism 56.8) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 46 ms (parallelism 56.4) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 46 ms (parallelism 56.5) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 45 ms (parallelism 56.9) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 48 ms (parallelism 55.7) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 46 ms (parallelism 56.3) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 44 ms (parallelism 57.1) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 46 ms (parallelism 56.6) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 44 ms (parallelism 57) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 44 ms (parallelism 57.1) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 45 ms (parallelism 57) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 50 ms (parallelism 54.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 48 ms (parallelism 55.8) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 49 ms (parallelism 55.3) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 50 ms (parallelism 54.6) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 49 ms (parallelism 55.3) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 48 ms (parallelism 55.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 49 ms (parallelism 55.2) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 48 ms (parallelism 55.6) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 48 ms (parallelism 55.5) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 48 ms (parallelism 55.6) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 49 ms (parallelism 55) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 46 ms (parallelism 56.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 45 ms (parallelism 56.8) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 49 ms (parallelism 55.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 49 ms (parallelism 55) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 47 ms (parallelism 55.7) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 2354 ms build modules > 63 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 235 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 1368 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 328 ms (parallelism 5.6) build modules > ./src/main.ts
     |  | 101 ms (parallelism 9.7) build modules > ./src/app/material/material.module.ts
     |  | 39 ms (parallelism 55.1) build modules > ./src/app/news.service.ts
     |  | 40 ms (parallelism 54.7) build modules > ./src/app/quiz.service.ts
     |  | 47 ms (parallelism 54.7) build modules > ./src/app/menu/menu.component.ts
<i>  | 762 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<i>  |  | 225 ms (parallelism 44) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 225 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w> 5231 ms build modules
     | 55 ms (parallelism 3) restore modules > ./src/main.ts
    61 ms restore modules
+ 19 hidden lines

LOG from webpack.ResolverCachePlugin
    30% really resolved (848 real resolves with 0 cached but invalid, 1959 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.245667 ms
<t> figure out provided exports: 14.073955 ms
    96% of exports of modules have been determined (12 no declared exports, 312 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.066596 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 13.325885 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.078116 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.5971 ms
<t> trace exports usage in graph: 14.960325 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 7.293858 ms
<t> visitModules: visiting: 8.884202 ms
    441 queue items processed (200 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.002598 ms
<t> connectChunkGroups: 0.005363 ms
<t> cleanup: 0.004353 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.043392 ms
<t> modules: 5.277412 ms
<t> queue: 0.008065 ms
<t> maxSize: 0.072723 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.193216 ms
<t> sort relevant modules: 0.197968 ms
<t> find modules to concatenate: 14.53976 ms
<t> sort concat configurations: 0.040069 ms
<t> create concatenated modules: 11.945327 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 166.051135 ms
<t> optimize asset: polyfills.js: 593.894155 ms
<t> optimize asset: main.js: 5123.035753 ms
<t> optimize js assets: 5249.873426 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 10.376655 ms
<t> optimize css assets: 10.871078 ms

LOG from webpack.FileSystemInfo
    1163 new snapshots created
    0% root snapshot uncached (0 / 1959)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 325 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 17% (14/83) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 82% (4900/5942) entries shared via 12 shared snapshots (786 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 62% (1082/1754) entries shared via 27 shared snapshots (247 times referenced)
    Managed items info in cache: 161 items
    Managed items snapshot optimization: 41% (991/2430) entries shared via 45 shared snapshots (206 times referenced)
    Managed files snapshot optimization: 74% (4042/5442) entries shared via 220 shared snapshots (947 times referenced)
    Managed missing snapshot optimization: 74% (5052/6806) entries shared via 246 shared snapshots (1035 times referenced)

ERROR in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
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
    at __webpack_require_module__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5067:12)
    at __webpack_require__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5024:18)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5095:20
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4967:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3363:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3331:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4870:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4935:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:85:6
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:39:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/IdleFileCachePlugin.js:77:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:88:6
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:30:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
-- inner error --
Error: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet
    at Object.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle:1:7)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5069:39
    at tryRunOrWebpackError (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:83:7)
    at __webpack_require_module__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5067:12)
    at __webpack_require__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5024:18)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5095:20
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4967:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3363:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3331:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4870:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4935:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:85:6
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:39:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/IdleFileCachePlugin.js:77:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:88:6
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:30:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Generated code for /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle
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
    at __webpack_require_module__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5067:12)
    at __webpack_require__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5024:18)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5095:20
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4967:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3363:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3331:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4870:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4935:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:85:6
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:39:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/IdleFileCachePlugin.js:77:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:88:6
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:30:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
-- inner error --
Error: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Undefined mixin.
   ╷
17 │ @include mat.all-legacy-component-typographies();
   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ╵
  src/styles.scss 17:1  root stylesheet
    at Object.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle:1:7)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:452:10
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5069:39
    at tryRunOrWebpackError (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:83:7)
    at __webpack_require_module__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5067:12)
    at __webpack_require__ (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5024:18)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5095:20
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4967:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3363:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3331:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4870:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4935:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:85:6
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:39:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/IdleFileCachePlugin.js:77:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:88:6
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:30:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Generated code for /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle
1 | throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n   ╷\n17 │ @include mat.all-legacy-component-typographies();\n   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  src/styles.scss 17:1  root stylesheet");
    at processResult (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:764:19)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:866:5
    at /home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:400:11
    at /home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:195:20
    at context.callback (/home/kushal/src/angular/angularfifteen/node_modules/loader-runner/lib/LoaderRunner.js:124:13)
    at /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js:231:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/dependencies/LoaderPlugin.js:208:27
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:5104:17
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4967:16
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3363:5
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3331:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4870:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4935:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4882:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3361:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:85:6
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:39:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/IdleFileCachePlugin.js:77:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:88:6
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:30:1)
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
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1125:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1170:29
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
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1125:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1170:29
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
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1125:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1170:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

2023-12-09 14:46:15: webpack 5.89.0 compiled in 20862 ms (d56348b469222593)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... ()
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1.498045 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 0.164188 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1594 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item (in build error): No serializer registered for URL
    while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> webpack/lib/ModuleBuildError -> Error -> Object { span, message, stack, sassMessage, sassStack } -> Object { text, context, end, start, url } -> URL
    [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle' (in build error): Error: No serializer registered for URL
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
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1378:3)
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.57259 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.796344 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/http.mjs': 2.146839 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.151755 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.53369 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/autocomplete.mjs': 1.853056 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 6.29998 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.357995 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 2.364377 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 1.182884 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.620711 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/expansion.mjs': 2.342475 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.234891 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sort.mjs': 5.159354 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.679194 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.154402 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.028463 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/observable/defer.js': 3.99041 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/sample.js': 4.232866 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|3b3012a34271f3aa|runtime': 19.64012 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 11.096315 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 405.052083 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1594 items, 1 files, 74 MiB)
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
Sat Dec  9 02:46:39 PM EST 2023
yarn version v1.22.21
info Current version: 0.0.602
info New version: 0.0.603
Done in 0.12s.
