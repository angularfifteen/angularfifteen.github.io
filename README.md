Wed Dec  7 09:40:12 PM EST 2022

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.9Gi       1.6Gi       1.0Gi       6.7Gi       7.0Gi
Swap:          8.0Gi       6.0Gi       2.0Gi
System Storage
1.6G	.
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
    

Angular CLI: 15.0.2
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.2
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.2
@angular-devkit/build-angular   15.0.2
@angular-devkit/core            15.0.2
@angular-devkit/schematics      15.0.2
@angular/cdk                    15.0.1
@angular/material               15.0.1
@schematics/angular             15.0.2
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.99s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.56s.
```
Latest version:     1.0.30001436
Installed version:  1.0.30001436
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001436
Installed version:  1.0.30001436
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.0.3/angular-webpack/238e541a90d8be66d8547bd1e020c25ed5dbffa2.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.0.3/angular-webpack/238e541a90d8be66d8547bd1e020c25ed5dbffa2/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 14.299393 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 587 KiB {179} [emitted] (name: main)
asset styles.css 273 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 16 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 588 KiB = runtime.js 906 bytes main.js 587 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 274 KiB = runtime.js 906 bytes styles.css 273 KiB
chunk {179} (runtime: runtime) main.js (main) 5.52 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 857 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 193 modules [386] 4.68 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    2309 ms (resolving: 854 ms, restoring: 1 ms, integration: 0 ms, building: 1454 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 308 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 308 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2719 ms (resolving: 82 ms, restoring: 1 ms, integration: 0 ms, building: 2636 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    21870 ms (resolving: 282 ms, restoring: 2 ms, integration: 0 ms, building: 21586 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.681053 ms
<t> runtime requirements.chunks: 0.718007 ms
<t> runtime requirements.entries: 2.401452 ms
<t> runtime requirements.modules: 0.159618 ms
<t> runtime requirements.chunks: 0.328927 ms
<t> runtime requirements.entries: 1.263655 ms
<t> finish module profiles: 19.373859 ms
<t> compute affected modules: 0.363583 ms
<t> finish modules: 40.331174 ms
<t> report dependency errors and warnings: 17.633674 ms
<t> optimize dependencies: 47.136718 ms
<t> create chunks: 18.494082 ms
<t> compute affected modules with chunk graph: 0.190316 ms
<t> optimize: 71.819293 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 29.32643 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1189.254328 ms
<t> runtime requirements.modules: 0.136278 ms
<t> runtime requirements.chunks: 0.151397 ms
<t> runtime requirements.entries: 0.603188 ms
<t> runtime requirements: 1.186261 ms
<t> hashing: initialize hash: 0.010955 ms
<t> hashing: hash warnings: 0.004968 ms
<t> hashing: sort chunks: 0.128342 ms
<t> hashing: hash runtime modules: 1.373074 ms
<t> hashing: hash chunks: 1.748089 ms
<t> hashing: hash digest: 0.064969 ms
<t> hashing: process full hash modules: 0.191146 ms
<t> hashing: 4.274662 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.085902 ms
<t> module assets: 0.391482 ms
<t> create chunk assets: 6.234386 ms
<t> process assets: 11876.278949 ms

LOG from webpack.Compiler
<t> make hook: 21946.255266 ms
<t> finish make hook: 0.219999 ms
<t> finish compilation: 77.848673 ms
<t> seal compilation: 13248.70698 ms
<t> afterCompile hook: 0.381993 ms
<t> emitAssets: 8.612478 ms
<t> emitRecords: 0.152948 ms
<t> done hook: 609.551331 ms
<t> beginIdle: 1.189925 ms

LOG from webpack.Compilation.ModuleProfile
     | 57 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 141 ms (parallelism 6.1) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 139 ms (parallelism 6.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 145 ms (parallelism 6.1) resolve to new modules > ./src/main.ts
     | 113 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 110 ms (parallelism 13.1) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 110 ms (parallelism 13.1) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 147 ms (parallelism 12.6) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     | 31 ms (parallelism 16.5) resolve to new modules > ./src/app/home/home.component.ts
     | 31 ms (parallelism 16.5) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 31 ms (parallelism 16.5) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 31 ms (parallelism 16.5) resolve to new modules > ./src/app/news/news.component.ts
     | 31 ms (parallelism 16.6) resolve to new modules > ./src/app/playground/playground.component.ts
     | 31 ms (parallelism 16.6) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 55 ms (parallelism 31.4) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 46 ms (parallelism 48.5) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 46 ms (parallelism 48.5) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 47 ms (parallelism 48.3) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i> 2131 ms resolve to new modules
     | 101 ms (parallelism 13) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
    144 ms resolve to existing modules
     | 71 ms (parallelism 5) integrate modules > ./src/main.ts
    88 ms integrate modules
<i>  |  | 449 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 449 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 661 ms (parallelism 32.6) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 661 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 67 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 67 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 656 ms (parallelism 32.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 656 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 249 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 172 ms (parallelism 13.3) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 144 ms (parallelism 12.9) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 143 ms (parallelism 12.9) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 161 ms (parallelism 14) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 46 ms (parallelism 35.9) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 46 ms (parallelism 35.9) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 60 ms (parallelism 50) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 152 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 152 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 152 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 153 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 156 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 152 ms (parallelism 43.1) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 153 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 153 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 156 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 153 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 154 ms (parallelism 43) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 156 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 156 ms (parallelism 42.9) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 158 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 157 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 157 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 157 ms (parallelism 42.8) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 160 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 158 ms (parallelism 42.7) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 162 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 173 ms (parallelism 41.4) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 163 ms (parallelism 42.3) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 162 ms (parallelism 42.4) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 161 ms (parallelism 42.5) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 165 ms (parallelism 42.2) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 171 ms (parallelism 41.6) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 172 ms (parallelism 41.5) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 174 ms (parallelism 41.4) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 173 ms (parallelism 41.4) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 174 ms (parallelism 41.3) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 175 ms (parallelism 41.2) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 176 ms (parallelism 41.1) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 149 ms (parallelism 40.3) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 148 ms (parallelism 40.9) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 148 ms (parallelism 41) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<w>  | 6867 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 245 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 148 ms (parallelism 41) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 148 ms (parallelism 41) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 3211 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 429 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 129 ms (parallelism 12.9) build modules > ./src/app/app-routing.module.ts
     |  | 109 ms (parallelism 13) build modules > ./src/app/app.component.ts
     |  | 109 ms (parallelism 13) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 63 ms (parallelism 14) build modules > ./src/app/material/material.module.ts
     |  | 45 ms (parallelism 48.5) build modules > ./src/app/home/home.component.ts
     |  | 45 ms (parallelism 48.5) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 45 ms (parallelism 48.5) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 45 ms (parallelism 48.5) build modules > ./src/app/news/news.component.ts
     |  | 45 ms (parallelism 48.5) build modules > ./src/app/playground/playground.component.ts
     |  | 45 ms (parallelism 48.5) build modules > ./src/app/quiz/quiz.component.ts
     |  | 40 ms (parallelism 39.3) build modules > ./src/app/news.service.ts
     |  | 40 ms (parallelism 39.3) build modules > ./src/app/quiz.service.ts
     |  | 40 ms (parallelism 40.2) build modules > ./src/app/menu/menu.component.ts
<i>  | 1280 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 13194 ms build modules
     | 71 ms (parallelism 5) restore modules > ./src/main.ts
    88 ms restore modules
+ 166 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (913 real resolves with 0 cached but invalid, 1965 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.349514 ms
<t> figure out provided exports: 19.13326 ms
    96% of exports of modules have been determined (15 no declared exports, 329 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 6 additional calculations due to dependencies)
<t> store provided exports into cache: 8.792442 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 25.41099 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.897133 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.554518 ms
<t> trace exports usage in graph: 30.872273 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 10.2571 ms
<t> visitModules: visiting: 12.683859 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 14.255446 ms
<t> connectChunkGroups: 0.202739 ms
<t> cleanup: 0.077918 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.076947 ms
<t> modules: 4.569626 ms
<t> queue: 0.007975 ms
<t> maxSize: 0.048634 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.451964 ms
<t> sort relevant modules: 0.314322 ms
<t> find modules to concatenate: 24.826705 ms
<t> sort concat configurations: 0.056341 ms
<t> create concatenated modules: 15.757581 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 418.266697 ms
<t> optimize asset: polyfills.js: 1049.324019 ms
<t> optimize asset: main.js: 9955.455736 ms
<t> optimize js assets: 10152.223082 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 56.459182 ms
<t> optimize css assets: 77.110758 ms

LOG from webpack.FileSystemInfo
    1245 new snapshots created
    0% root snapshot uncached (0 / 1965)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1095 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5290/6509) entries shared via 12 shared snapshots (834 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4042/4667) entries shared via 258 shared snapshots (788 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 33% (752/2255) entries shared via 43 shared snapshots (131 times referenced)
    Managed files snapshot optimization: 76% (4963/6561) entries shared via 269 shared snapshots (989 times referenced)
    Managed missing snapshot optimization: 82% (5823/7071) entries shared via 342 shared snapshots (925 times referenced)

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

2022-12-07 21:42:08: webpack 5.75.0 compiled in 44552 ms (70ce82e25eb83f36)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1196.589682 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 62.549516 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1692 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 2.378967 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.108952 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 7.234239 ms
<w> [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item: No serializer registered for SassWarning
<w> while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -> webpack/lib/NormalModule -> Array { 1 items } -> webpack/lib/ModuleWarning -> SassWarning
    [webpack.cache.PackFileCacheStrategy] Skipped not serializable cache item 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': Error: No serializer registered for SassWarning
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle|build time': 1.200323 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 4.571296 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 2.884478 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 2.028276 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/compiler/fesm2020/compiler.mjs': 1.323606 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/checkbox.mjs': 2.407712 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 2.925239 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/autocomplete.mjs': 1.010083 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 4.378636 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 3.190344 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.98548 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/slider.mjs': 1.216836 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.610238 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.607768 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 2.558006 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 2.836257 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 6.120788 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/expansion.mjs': 1.183931 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 2.66816 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/dialog.mjs': 1.150987 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tooltip.mjs': 3.600713 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/core.mjs': 1.032825 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.764316 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 9.596371 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.212787 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.809003 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/a11y.mjs': 1.013257 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/scrolling.mjs': 1.064367 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.370651 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/observable/combineLatest.js': 4.786224 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|conditionNames=[|0=|sass|1=|style|]|mainFields=[|0=|sass|1=|style|2=|main|3=|...|]|extensions=[|0=|.scss|1=|.sass|2=|.css|]|restrictions=[|0=[|]|]|preferRelative=|true|symlinks=|true|dependencyType=|sass-module|mainFiles=[|0=|_index|1=|index|2=|...|]|path=|/home/kushal/src/angular/angularfifteen|request=|@material/ripple': 5.856339 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle|build time': 1.117937 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|bab2709da9a589d5|runtime': 39.030667 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs|df19c1f16536234e|runtime': 7.328996 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 25.772698 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 826.310655 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1692 items, 1 files, 82 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 587.27 kB |               137.30 kB
styles.css          | styles        | 273.11 kB |                17.62 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 894.34 kB |               166.11 kB

Build at: 2022-12-08T02:42:12.210Z - Hash: 70ce82e25eb83f36 - Time: 48615ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 394.34 kB with a total of 894.34 kB.


Done in 52.74s.
```
Wed Dec  7 09:42:59 PM EST 2022
yarn version v1.22.19
info Current version: 0.0.107
info New version: 0.0.108
Done in 0.14s.
