Fri Jan  6 02:30:13 PM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.3Gi       1.7Gi       940Mi       8.2Gi       8.7Gi
Swap:          8.0Gi        42Mi       8.0Gi
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
    

Angular CLI: 15.0.4
Node: 18.13.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.4
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.4
@angular-devkit/build-angular   15.0.4
@angular-devkit/core            15.0.4
@angular-devkit/schematics      15.0.4
@schematics/angular             15.0.4
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.79s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001442
Installed version:  1.0.30001442
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001442
Installed version:  1.0.30001442
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.0.5/angular-webpack/4f54c65fa7d23b47ce5dde73253b7a939590e7fb.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.0.5/angular-webpack/4f54c65fa7d23b47ce5dde73253b7a939590e7fb/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 13.531999 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 599 KiB {179} [emitted] (name: main)
asset styles.css 273 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 16 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 599 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 274 KiB = runtime.js 906 bytes styles.css 273 KiB
chunk {179} (runtime: runtime) main.js (main) 5.53 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 857 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 193 modules [386] 4.69 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1951 ms (resolving: 56 ms, restoring: 1 ms, integration: 0 ms, building: 1894 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 308 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 308 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1980 ms (resolving: 56 ms, restoring: 1 ms, integration: 0 ms, building: 1923 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    17305 ms (resolving: 56 ms, restoring: 1 ms, integration: 0 ms, building: 17248 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 1.611293 ms
<t> runtime requirements.chunks: 0.687203 ms
<t> runtime requirements.entries: 2.328055 ms
<t> runtime requirements.modules: 0.04074 ms
<t> runtime requirements.chunks: 0.025449 ms
<t> runtime requirements.entries: 0.266862 ms
<t> finish module profiles: 18.639999 ms
<t> compute affected modules: 0.005064 ms
<t> finish modules: 44.691642 ms
<t> report dependency errors and warnings: 20.212275 ms
<t> optimize dependencies: 45.06411 ms
<t> create chunks: 16.3701 ms
<t> compute affected modules with chunk graph: 0.007575 ms
<t> optimize: 84.641732 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 30.883769 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1226.584041 ms
<t> runtime requirements.modules: 0.160387 ms
<t> runtime requirements.chunks: 0.128528 ms
<t> runtime requirements.entries: 0.633999 ms
<t> runtime requirements: 1.155405 ms
<t> hashing: initialize hash: 0.008303 ms
<t> hashing: hash warnings: 0.004343 ms
<t> hashing: sort chunks: 0.069078 ms
<t> hashing: hash runtime modules: 1.300219 ms
<t> hashing: hash chunks: 1.650533 ms
<t> hashing: hash digest: 0.052506 ms
<t> hashing: process full hash modules: 0.200025 ms
<t> hashing: 3.534174 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.106352 ms
<t> module assets: 0.278144 ms
<t> create chunk assets: 5.225573 ms
<t> process assets: 9958.067509 ms

LOG from webpack.Compiler
<t> make hook: 17589.000638 ms
<t> finish make hook: 0.20895 ms
<t> finish compilation: 83.610506 ms
<t> seal compilation: 11374.719233 ms
<t> afterCompile hook: 0.171123 ms
<t> emitAssets: 8.229224 ms
<t> emitRecords: 0.078808 ms
<t> done hook: 436.003205 ms
<t> beginIdle: 0.972873 ms

LOG from webpack.Compilation.ModuleProfile
     | 100 ms (parallelism 3.5) resolve to new modules > ./src/main.ts
     | 83 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 120 ms (parallelism 13.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 120 ms (parallelism 13.2) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 81 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 81 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 81 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 81 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 81 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 81 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 94 ms (parallelism 30) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
<i> 2012 ms resolve to new modules
<i>  |  | 308 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 137 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
<i>  |  | 209 ms (parallelism 14.7) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 134 ms (parallelism 13.1) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 188 ms (parallelism 14.5) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 173 ms (parallelism 20.5) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
<i>  |  | 206 ms (parallelism 14.8) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 77 ms (parallelism 32.3) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 77 ms (parallelism 32.6) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 82 ms (parallelism 39.8) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 81 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 85 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 82 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 81 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 83 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 84 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 83 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 86 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 83 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 88 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 86 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 86 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 87 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 89 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 87 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 86 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 90 ms (parallelism 39) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 88 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 88 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 89 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 91 ms (parallelism 38.8) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 91 ms (parallelism 38.8) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 90 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 90 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 107 ms (parallelism 36.5) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 106 ms (parallelism 36.5) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 106 ms (parallelism 37.1) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 105 ms (parallelism 38.2) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 102 ms (parallelism 39) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 103 ms (parallelism 38.3) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 4906 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 308 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 103 ms (parallelism 38.3) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 103 ms (parallelism 38.2) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2939 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 314 ms (parallelism 6.1) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 314 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 536 ms (parallelism 32.2) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 536 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 445 ms (parallelism 5.6) build modules > ./src/main.ts
     |  | 129 ms (parallelism 13.1) build modules > ./src/app/app-routing.module.ts
     |  | 104 ms (parallelism 13.1) build modules > ./src/app/app.component.ts
     |  | 104 ms (parallelism 13.1) build modules > ./src/app/prompt-update.service.ts
     |  | 105 ms (parallelism 13.1) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 106 ms (parallelism 16.1) build modules > ./src/app/material/material.module.ts
     |  | 34 ms (parallelism 38.6) build modules > ./src/app/news.service.ts
     |  | 34 ms (parallelism 38.6) build modules > ./src/app/quiz.service.ts
     |  | 34 ms (parallelism 39.1) build modules > ./src/app/menu/menu.component.ts
<i>  | 1280 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w>  |  | 532 ms (parallelism 32.3) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 532 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 79 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 79 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<e> 10589 ms build modules
+ 154 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (913 real resolves with 0 cached but invalid, 2003 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.733492 ms
<t> figure out provided exports: 26.618666 ms
    96% of exports of modules have been determined (15 no declared exports, 329 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 7 additional calculations due to dependencies)
<t> store provided exports into cache: 4.240684 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 30.224032 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 16.900989 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.631983 ms
<t> trace exports usage in graph: 26.851402 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 10.039589 ms
<t> visitModules: visiting: 12.602186 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 12.799569 ms
<t> connectChunkGroups: 0.005734 ms
<t> cleanup: 0.005588 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.052493 ms
<t> modules: 10.642827 ms
<t> queue: 0.014398 ms
<t> maxSize: 0.087178 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 3.11795 ms
<t> sort relevant modules: 0.320427 ms
<t> find modules to concatenate: 28.76483 ms
<t> sort concat configurations: 0.078559 ms
<t> create concatenated modules: 18.068521 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 381.783205 ms
<t> optimize asset: polyfills.js: 1049.271604 ms
<t> optimize asset: main.js: 8169.352703 ms
<t> optimize js assets: 8382.518133 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 57.049847 ms
<t> optimize css assets: 69.579708 ms

LOG from webpack.FileSystemInfo
    1245 new snapshots created
    0% root snapshot uncached (0 / 2003)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1095 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5290/6512) entries shared via 12 shared snapshots (834 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (4032/4667) entries shared via 258 shared snapshots (786 times referenced)
    Managed items info in cache: 217 items
    Managed items snapshot optimization: 33% (754/2257) entries shared via 43 shared snapshots (131 times referenced)
    Managed files snapshot optimization: 76% (4969/6560) entries shared via 269 shared snapshots (989 times referenced)
    Managed missing snapshot optimization: 84% (5928/7071) entries shared via 311 shared snapshots (1046 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
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
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
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
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:735:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-01-06 14:31:24: webpack 5.75.0 compiled in 36568 ms (75317de23990b70b)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 915.386412 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 44.73404 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1692 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.1497 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.539497 ms
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
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Module.js:988:3)
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1374:9)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at write (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:387:6)
        at PackContentItems.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/cache/PackFileCacheStrategy.js:625:6)
        at ClassSerializer.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/makeSerializable.js:15:7)
        at process (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:480:17)
        at ObjectMiddleware.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:539:5)
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/ObjectMiddleware.js:525:12
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/SerializerMiddleware.js:106:11
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/memoize.js:22:13
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/SerializerMiddleware.js:102:14
        at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/util/memoize.js:22:13
        at serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/serialization/FileMiddleware.js:129:21)
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 2.466846 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.115933 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 3.002386 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/animations/fesm2020/browser.mjs': 1.926021 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 1.883812 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 4.119152 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 2.778173 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.309712 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.109919 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.136011 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.415626 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 3.59967 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 3.229042 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.708532 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/dialog.mjs': 3.119454 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.251788 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 9.040365 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.033246 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.651525 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/scrolling.mjs': 1.175002 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.313181 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/takeWhile.js': 3.937597 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|conditionNames=[|0=|sass|1=|style|]|mainFields=[|0=|sass|1=|style|2=|main|3=|...|]|extensions=[|0=|.scss|1=|.sass|2=|.css|]|restrictions=[|0=[|]|]|preferRelative=|true|symlinks=|true|dependencyType=|sass-module|mainFiles=[|0=|_index|1=|index|2=|...|]|path=|/home/kushal/src/angular/angularfifteen|request=|@material/dialog': 4.695308 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 1.187205 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|bab2709da9a589d5|runtime': 26.352146 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs|df19c1f16536234e|runtime': 4.4792 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 17.382564 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 560.599012 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1692 items, 1 files, 82 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.59 kB |               139.41 kB
styles.css          | styles        | 273.11 kB |                17.62 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 905.66 kB |               168.23 kB

Build at: 2023-01-06T19:31:27.889Z - Hash: 75317de23990b70b - Time: 39797ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 405.66 kB with a total of 905.66 kB.


Done in 42.56s.
```
