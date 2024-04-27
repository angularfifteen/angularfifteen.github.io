Sat Apr 27 05:12:33 PM EDT 2024

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       3.9Gi       1.8Gi       509Mi        10Gi        11Gi
Swap:          8.0Gi       234Mi       7.8Gi
System Storage
1.3G	.
```
```bash
yarn run v1.22.22
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.3.6
Node: 20.12.2
Package Manager: yarn 1.22.22
OS: linux x64

Angular: 17.3.6
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1703.6
@angular-devkit/build-angular   17.3.6
@angular-devkit/core            17.3.6
@angular-devkit/schematics      17.3.6
@schematics/angular             17.3.6
rxjs                            7.5.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.45s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
```bash
Latest version:     1.0.30001613
Installed version:  1.0.30001612
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.22
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/17.3.6/angular-webpack/989ff8a73d1fc6a4ed5c537fc0881584d65c0fd4.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/17.3.6/angular-webpack/989ff8a73d1fc6a4ed5c537fc0881584d65c0fd4/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3306.718143 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 956 KiB {792} [cached] (name: main)
asset styles.css 84.6 KiB {869} [cached] (name: styles)
asset polyfills.js 33 KiB {461} [cached] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [cached]
asset runtime.js 906 bytes {121} [cached] (name: runtime)
Entrypoint main = runtime.js main.js
Entrypoint polyfills = runtime.js polyfills.js
Entrypoint styles = runtime.js styles.css
chunk {121} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
chunk {461} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [935] 104 KiB {461} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:15
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1755 ms (resolving: 184 ms, restoring: 1 ms, integration: 0 ms, building: 1570 ms, storing: 0 ms)
chunk {792} (runtime: runtime) main.js (main) 5.19 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [73] 29.9 KiB {792} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 197 modules [886] 5.16 MiB {792} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {869} (runtime: runtime) styles.css (styles) 89 bytes (javascript) 86.8 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 86.8 KiB [dependent] 1 module
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [461] 50 bytes {869} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1947 ms (resolving: 39 ms, restoring: 0 ms, integration: 0 ms, building: 1908 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [888] 39 bytes {869} [built] [code generated] [1 error]
    [no exports used]
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    11047 ms (resolving: 123 ms, restoring: 1 ms, integration: 0 ms, building: 10923 ms, storing: 0 ms)
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.442953 ms
<t> runtime requirements.chunks: 0.434017 ms
<t> runtime requirements.entries: 1.557539 ms
<t> runtime requirements.modules: 0.019661 ms
<t> runtime requirements.chunks: 0.016953 ms
<t> runtime requirements.entries: 0.081699 ms
<t> finish module profiles: 9.094181 ms
<t> compute affected modules: 0.003668 ms
<t> finish modules: 24.071178 ms
<t> report dependency errors and warnings: 10.565423 ms
<t> optimize dependencies: 30.114795 ms
<t> create chunks: 8.455204 ms
<t> compute affected modules with chunk graph: 0.006221 ms
<t> optimize: 43.238124 ms
    6 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 20.72441 ms
    100% code generated (6 generated, 0 from cache)
<t> code generation: 899.45717 ms
<t> runtime requirements.modules: 0.100158 ms
<t> runtime requirements.chunks: 0.066338 ms
<t> runtime requirements.entries: 0.617922 ms
<t> runtime requirements: 1.007787 ms
<t> hashing: initialize hash: 0.008341 ms
<t> hashing: hash errors: 0.006429 ms
<t> hashing: sort chunks: 0.05486 ms
<t> hashing: hash runtime modules: 1.291847 ms
<t> hashing: hash chunks: 1.409471 ms
<t> hashing: hash digest: 0.034402 ms
<t> hashing: process full hash modules: 0.172373 ms
<t> hashing: 3.195938 ms
    100% code generated (4 generated, 0 from cache)
<t> module assets: 0.168888 ms
<t> create chunk assets: 4.301825 ms
<t> process assets: 8739.183969 ms

LOG from webpack.Compiler
<t> make hook: 11089.701677 ms
<t> finish make hook: 0.09953 ms
<t> finish compilation: 43.784115 ms
<t> seal compilation: 9751.685973 ms
<t> afterCompile hook: 0.086789 ms

LOG from webpack.Compilation.ModuleProfile
     | 37 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 36 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 92 ms (parallelism 6.1) resolve to new modules > ./src/main.ts
     | 74 ms (parallelism 19) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 74 ms (parallelism 19) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 60 ms (parallelism 20) resolve to new modules > ./src/app/loading.service.ts
     | 60 ms (parallelism 20) resolve to new modules > ./src/app/home/home.component.ts
     | 60 ms (parallelism 20) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 60 ms (parallelism 20) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 60 ms (parallelism 20) resolve to new modules > ./src/app/news/news.component.ts
     | 60 ms (parallelism 20) resolve to new modules > ./src/app/playground/playground.component.ts
     | 60 ms (parallelism 20) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 60 ms (parallelism 20) resolve to new modules > ./src/app/loading/loading.component.ts
     | 70 ms (parallelism 30.6) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 79 ms (parallelism 48.3) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1317 ms resolve to new modules
     | 60 ms (parallelism 20) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 78 ms (parallelism 48) resolve to existing modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    174 ms resolve to existing modules
<i>  |  | 321 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 321 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 63 ms (parallelism 6.5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 63 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 287 ms (parallelism 38.1) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 287 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 284 ms (parallelism 38.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 284 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 274 ms (parallelism 6.1) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 96 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 77 ms (parallelism 18.7) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 97 ms (parallelism 19.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 74 ms (parallelism 18.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 90 ms (parallelism 21.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 69 ms (parallelism 47.2) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 69 ms (parallelism 47.2) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 69 ms (parallelism 47.2) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 69 ms (parallelism 47.2) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 69 ms (parallelism 47.2) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 71 ms (parallelism 46.9) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 69 ms (parallelism 47.2) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 70 ms (parallelism 47.1) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 70 ms (parallelism 47.1) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 72 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 70 ms (parallelism 47.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 74 ms (parallelism 46.4) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 72 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 72 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 74 ms (parallelism 46.5) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 72 ms (parallelism 46.7) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 72 ms (parallelism 46.7) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 73 ms (parallelism 46.5) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 73 ms (parallelism 46.6) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 72 ms (parallelism 46.7) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 74 ms (parallelism 46.4) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 75 ms (parallelism 46.2) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 74 ms (parallelism 46.3) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 75 ms (parallelism 46.2) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 75 ms (parallelism 46.2) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 75 ms (parallelism 46) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 75 ms (parallelism 46.1) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 75 ms (parallelism 46.1) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 76 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 76 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 76 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 76 ms (parallelism 45.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 76 ms (parallelism 43.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 75 ms (parallelism 44.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 76 ms (parallelism 43.9) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
<i>  | 3476 ms build modules > 63 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 260 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 73 ms (parallelism 44.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 73 ms (parallelism 44.9) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 1965 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 326 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 72 ms (parallelism 20.2) build modules > ./src/app/material/material.module.ts
     |  | 57 ms (parallelism 44.4) build modules > ./src/app/news.service.ts
     |  | 57 ms (parallelism 44.4) build modules > ./src/app/quiz.service.ts
     |  | 76 ms (parallelism 42.7) build modules > ./src/app/menu/menu.component.ts
<i>  | 819 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7219 ms build modules
+ 105 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (846 real resolves with 0 cached but invalid, 1861 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.361573 ms
<t> figure out provided exports: 14.392461 ms
    96% of exports of modules have been determined (12 no declared exports, 312 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 7 additional calculations due to dependencies)
<t> store provided exports into cache: 1.947362 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.680256 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 9.712141 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.443774 ms
<t> trace exports usage in graph: 19.482759 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 5.543505 ms
<t> visitModules: visiting: 6.745895 ms
    451 queue items processed (204 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.860291 ms
<t> connectChunkGroups: 0.004716 ms
<t> cleanup: 0.00347 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046844 ms
<t> modules: 3.18518 ms
<t> queue: 0.006484 ms
<t> maxSize: 0.043604 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.358357 ms
<t> sort relevant modules: 0.220494 ms
<t> find modules to concatenate: 16.357156 ms
<t> sort concat configurations: 0.070392 ms
<t> create concatenated modules: 11.659281 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 196.655042 ms
<t> optimize asset: polyfills.js: 711.0132 ms
<t> optimize asset: main.js: 6444.583822 ms
<t> optimize js assets: 6566.334281 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 9.778479 ms
<t> optimize css assets: 10.387538 ms

LOG from webpack.FileSystemInfo
    1161 new snapshots created
    0% root snapshot uncached (0 / 1861)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 319 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 17% (14/83) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 83% (4894/5922) entries shared via 12 shared snapshots (785 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 63% (1104/1758) entries shared via 25 shared snapshots (249 times referenced)
    Managed items info in cache: 156 items
    Managed items snapshot optimization: 39% (946/2401) entries shared via 44 shared snapshots (184 times referenced)
    Managed files snapshot optimization: 74% (4030/5426) entries shared via 222 shared snapshots (942 times referenced)
    Managed missing snapshot optimization: 72% (4905/6784) entries shared via 275 shared snapshots (904 times referenced)

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
    at processResult (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:841:19)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:964:5
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
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3338:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4878:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4944:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:11
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
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3338:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4878:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4944:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:85:6
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:39:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/IdleFileCachePlugin.js:77:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:88:6
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:30:1)
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
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3338:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4878:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4944:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:11
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
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3338:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4878:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4944:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:85:6
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:39:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/IdleFileCachePlugin.js:77:9
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:88:6
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:30:1)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

Generated code for /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle
1 | throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n   ╷\n17 │ @include mat.all-legacy-component-typographies();\n   │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  src/styles.scss 17:1  root stylesheet");
    at processResult (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:841:19)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:964:5
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
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:93:5
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at Cache.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:75:18)
    at ItemCacheFacade.get (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:115:15)
    at Compilation._codeGenerationModule (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3338:9)
    at codeGen (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4878:11)
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3482:9)
    at timesSync (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:2297:7)
    at Object.eachLimit (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3463:5)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4944:15
    at symbolIterator (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3485:9)
    at done (/home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:3527:9)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:4890:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:32
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/HookWebpackError.js:68:3
    at _done (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at Hook.eval [as callAsync] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:39:22)
    at Cache.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Cache.js:107:20)
    at ItemCacheFacade.store (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/CacheFacade.js:141:15)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:3369:11
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

2024-04-27 17:13:18: webpack 5.90.3 compiled in 24161 ms (6f4620234e87547e)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... ()
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1.520145 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 0.179211 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1589 fresh items in cache put into pack 0
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
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1531:3)
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.812163 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 3.279052 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/http.mjs': 1.072067 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.777377 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.184746 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 2.302792 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/autocomplete.mjs': 1.122953 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 7.642542 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.157308 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.009933 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.497354 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.313098 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 1.313809 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 4.104761 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.504511 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/dialog.mjs': 2.953042 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.757324 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.259721 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.004183 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators|request=|../internal/operators/concatWith': 6.119126 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.301554 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/takeUntil.js': 4.412165 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|757a9cb93bafb3e6|runtime': 23.084956 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk792': 12.878803 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 509.760944 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1589 items, 1 files, 78 MiB)
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
