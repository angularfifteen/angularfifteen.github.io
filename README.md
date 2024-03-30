Sat Mar 30 10:45:45 AM EDT 2024

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.6Gi       1.6Gi       300Mi        11Gi        12Gi
Swap:          8.0Gi       512Ki       8.0Gi
System Storage
1.2G	.
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
    

Angular CLI: 17.3.1
Node: 20.12.0
Package Manager: yarn 1.22.22
OS: linux x64

Angular: 17.3.1
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1703.1
@angular-devkit/build-angular   17.3.1
@angular-devkit/core            17.3.1
@angular-devkit/schematics      17.3.1
@schematics/angular             17.3.1
rxjs                            7.5.7
typescript                      5.2.2
zone.js                         0.14.2
    
Done in 0.51s.
yarn install v1.22.22
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
```bash
Latest version:     1.0.30001600
Installed version:  1.0.30001599
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/17.3.2/angular-webpack/3950f3c29608f596c89782430886517808fbacb8.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/17.3.2/angular-webpack/3950f3c29608f596c89782430886517808fbacb8/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3529.573821 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 955 KiB {792} [cached] (name: main)
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
    1865 ms (resolving: 198 ms, restoring: 0 ms, integration: 0 ms, building: 1667 ms, storing: 0 ms)
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
    2007 ms (resolving: 46 ms, restoring: 0 ms, integration: 0 ms, building: 1961 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [888] 39 bytes {869} [built] [code generated] [1 error]
    [no exports used]
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12295 ms (resolving: 151 ms, restoring: 0 ms, integration: 0 ms, building: 12144 ms, storing: 0 ms)
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.513852 ms
<t> runtime requirements.chunks: 0.524835 ms
<t> runtime requirements.entries: 1.836388 ms
<t> runtime requirements.modules: 0.02069 ms
<t> runtime requirements.chunks: 0.01645 ms
<t> runtime requirements.entries: 0.1011 ms
<t> finish module profiles: 20.86875 ms
<t> compute affected modules: 0.003495 ms
<t> finish modules: 24.835791 ms
<t> report dependency errors and warnings: 14.257375 ms
<t> optimize dependencies: 37.090758 ms
<t> create chunks: 15.732817 ms
<t> compute affected modules with chunk graph: 0.00498 ms
<t> optimize: 57.106968 ms
    6 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 19.865213 ms
    100% code generated (6 generated, 0 from cache)
<t> code generation: 980.981827 ms
<t> runtime requirements.modules: 0.113264 ms
<t> runtime requirements.chunks: 0.059797 ms
<t> runtime requirements.entries: 0.532287 ms
<t> runtime requirements: 0.889032 ms
<t> hashing: initialize hash: 0.007487 ms
<t> hashing: hash errors: 0.005172 ms
<t> hashing: sort chunks: 0.053854 ms
<t> hashing: hash runtime modules: 1.059906 ms
<t> hashing: hash chunks: 1.229572 ms
<t> hashing: hash digest: 0.031933 ms
<t> hashing: process full hash modules: 0.156266 ms
<t> hashing: 2.72461 ms
    100% code generated (4 generated, 0 from cache)
<t> module assets: 0.166804 ms
<t> create chunk assets: 3.270538 ms
<t> process assets: 8465.878602 ms

LOG from webpack.Compiler
<t> make hook: 12337.819748 ms
<t> finish make hook: 0.137737 ms
<t> finish compilation: 60.035217 ms
<t> seal compilation: 9586.904495 ms
<t> afterCompile hook: 0.224102 ms

LOG from webpack.Compilation.ModuleProfile
     | 30 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 40 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 39 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 100 ms (parallelism 5.7) resolve to new modules > ./src/main.ts
     | 46 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 80 ms (parallelism 18.7) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 80 ms (parallelism 18.7) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 70 ms (parallelism 19.7) resolve to new modules > ./src/app/loading.service.ts
     | 71 ms (parallelism 19.7) resolve to new modules > ./src/app/home/home.component.ts
     | 71 ms (parallelism 19.7) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 71 ms (parallelism 19.7) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 70 ms (parallelism 19.7) resolve to new modules > ./src/app/news/news.component.ts
     | 70 ms (parallelism 19.7) resolve to new modules > ./src/app/playground/playground.component.ts
     | 70 ms (parallelism 19.7) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 70 ms (parallelism 19.7) resolve to new modules > ./src/app/loading/loading.component.ts
     | 94 ms (parallelism 28.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 101 ms (parallelism 43.1) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1853 ms resolve to new modules
     | 64 ms (parallelism 20) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 97 ms (parallelism 42.4) resolve to existing modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    188 ms resolve to existing modules
<i>  |  | 332 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 332 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 64 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 64 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 338 ms (parallelism 35.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 338 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 281 ms (parallelism 6) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 115 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 103 ms (parallelism 18.1) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 92 ms (parallelism 24.2) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 102 ms (parallelism 18.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 87 ms (parallelism 25.4) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 34 ms (parallelism 37.9) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 35 ms (parallelism 38.3) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 69 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 67 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 66 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 70 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 68 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 66 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 67 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 67 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 69 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 69 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 70 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 70 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 69 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 71 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 70 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 70 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 72 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 71 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 70 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 71 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 73 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 71 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 71 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 72 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 73 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 72 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 73 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 74 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 74 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 73 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 74 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 84 ms (parallelism 41.2) build modules > ./node_modules/@angular/core/fesm2022/primitives/signals.mjs
     |  | 83 ms (parallelism 42.5) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 83 ms (parallelism 41.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 82 ms (parallelism 43.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 3564 ms build modules > 63 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 278 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 1877 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 319 ms (parallelism 36.9) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 319 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 378 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 87 ms (parallelism 19) build modules > ./src/app/material/material.module.ts
     |  | 82 ms (parallelism 40.7) build modules > ./src/app/news.service.ts
     |  | 82 ms (parallelism 40.8) build modules > ./src/app/quiz.service.ts
     |  | 82 ms (parallelism 42.4) build modules > ./src/app/menu/menu.component.ts
<i>  | 999 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7497 ms build modules
+ 151 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (846 real resolves with 0 cached but invalid, 1878 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.375022 ms
<t> figure out provided exports: 14.257184 ms
    96% of exports of modules have been determined (12 no declared exports, 312 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 8 additional calculations due to dependencies)
<t> store provided exports into cache: 2.441223 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.560403 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.697403 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.583059 ms
<t> trace exports usage in graph: 24.308214 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 11.056935 ms
<t> visitModules: visiting: 13.616884 ms
    451 queue items processed (204 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 13.839141 ms
<t> connectChunkGroups: 0.005726 ms
<t> cleanup: 0.005081 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.055424 ms
<t> modules: 3.227929 ms
<t> queue: 0.006652 ms
<t> maxSize: 0.036923 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.435324 ms
<t> sort relevant modules: 0.197824 ms
<t> find modules to concatenate: 23.212642 ms
<t> sort concat configurations: 0.059518 ms
<t> create concatenated modules: 18.107128 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 200.992338 ms
<t> optimize asset: polyfills.js: 698.317813 ms
<t> optimize asset: main.js: 6379.632296 ms
<t> optimize js assets: 6533.018045 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 11.406606 ms
<t> optimize css assets: 12.068023 ms

LOG from webpack.FileSystemInfo
    1161 new snapshots created
    0% root snapshot uncached (0 / 1878)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 319 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 17% (14/83) entries shared via 1 shared snapshots (1 times referenced)
    File timestamp hash combination snapshot optimization: 83% (4894/5922) entries shared via 12 shared snapshots (785 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 63% (1104/1758) entries shared via 26 shared snapshots (250 times referenced)
    Managed items info in cache: 156 items
    Managed items snapshot optimization: 39% (928/2401) entries shared via 43 shared snapshots (183 times referenced)
    Managed files snapshot optimization: 74% (4030/5426) entries shared via 222 shared snapshots (942 times referenced)
    Managed missing snapshot optimization: 74% (5017/6784) entries shared via 245 shared snapshots (1029 times referenced)

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

2024-03-30 10:46:49: webpack 5.90.3 compiled in 25479 ms (a445098b34154671)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... ()
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1.794446 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 0.156401 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.585923 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 3.441267 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.102482 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.137874 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 2.269628 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.02837 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.115797 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 2.224587 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.151832 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 3.748745 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 1.141619 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.343661 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/dialog.mjs': 5.361548 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.224669 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.650397 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm|request=|./internal/observable/generate': 3.33688 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 1.191163 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/find.js': 4.330877 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|757a9cb93bafb3e6|runtime': 22.263385 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk792': 12.545214 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 359.526687 ms
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
Sat Mar 30 10:47:16 AM EDT 2024
yarn version v1.22.22
info Current version: 0.0.912
info New version: 0.0.913
Done in 0.13s.
