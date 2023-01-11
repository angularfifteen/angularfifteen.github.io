Wed Jan 11 10:20:12 AM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.3Gi       1.3Gi       1.0Gi       6.7Gi       6.7Gi
Swap:          8.0Gi       1.9Gi       6.1Gi
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
    

Angular CLI: 15.0.5
Node: 18.13.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.4
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.5
@angular-devkit/build-angular   15.0.5
@angular-devkit/core            15.0.5
@angular-devkit/schematics      15.0.5
@angular/cli                    15.0.5
@schematics/angular             15.0.5
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.75s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.1.0/angular-webpack/7cc14180782c909d3ab6f2a30b9ad4a1a561d2a5.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.1.0/angular-webpack/7cc14180782c909d3ab6f2a30b9ad4a1a561d2a5/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 13.636878 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 599 KiB {179} [emitted] (name: main)
asset styles.css 258 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 16 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 600 KiB = runtime.js 906 bytes main.js 599 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 259 KiB = runtime.js 906 bytes styles.css 258 KiB
chunk {179} (runtime: runtime) main.js (main) 5.43 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 838 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 193 modules [386] 4.61 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1959 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 1901 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 308 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 308 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1982 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 1924 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    17490 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 17432 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.82245 ms
<t> runtime requirements.chunks: 0.692799 ms
<t> runtime requirements.entries: 2.48373 ms
<t> runtime requirements.modules: 0.147706 ms
<t> runtime requirements.chunks: 0.29935 ms
<t> runtime requirements.entries: 1.193814 ms
<t> finish module profiles: 15.95492 ms
<t> compute affected modules: 0.324978 ms
<t> finish modules: 34.970329 ms
<t> report dependency errors and warnings: 15.916821 ms
<t> optimize dependencies: 37.611994 ms
<t> create chunks: 20.859418 ms
<t> compute affected modules with chunk graph: 0.271093 ms
<t> optimize: 78.799929 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 26.655864 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1155.242102 ms
<t> runtime requirements.modules: 0.15663 ms
<t> runtime requirements.chunks: 0.131434 ms
<t> runtime requirements.entries: 0.56705 ms
<t> runtime requirements: 1.138562 ms
<t> hashing: initialize hash: 0.010313 ms
<t> hashing: hash warnings: 0.004893 ms
<t> hashing: sort chunks: 0.117258 ms
<t> hashing: hash runtime modules: 1.330673 ms
<t> hashing: hash chunks: 1.67868 ms
<t> hashing: hash digest: 0.057704 ms
<t> hashing: process full hash modules: 0.186395 ms
<t> hashing: 4.074578 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.084294 ms
<t> module assets: 0.359272 ms
<t> create chunk assets: 5.72227 ms
<t> process assets: 9844.327248 ms

LOG from webpack.Compiler
<t> make hook: 17780.139077 ms
<t> finish make hook: 0.204579 ms
<t> finish compilation: 67.329614 ms
<t> seal compilation: 11178.0905 ms
<t> afterCompile hook: 0.206875 ms
<t> emitAssets: 9.216783 ms
<t> emitRecords: 0.082166 ms
<t> done hook: 444.322646 ms
<t> beginIdle: 1.011221 ms

LOG from webpack.Compilation.ModuleProfile
     | 103 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 68 ms (parallelism 4.8) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 128 ms (parallelism 13.4) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 128 ms (parallelism 13.4) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 82 ms (parallelism 17) resolve to new modules > ./src/app/home/home.component.ts
     | 82 ms (parallelism 17) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 82 ms (parallelism 17) resolve to new modules > ./src/app/key-industries/key-industries.component.ts
     | 82 ms (parallelism 17) resolve to new modules > ./src/app/news/news.component.ts
     | 82 ms (parallelism 17) resolve to new modules > ./src/app/playground/playground.component.ts
     | 82 ms (parallelism 17) resolve to new modules > ./src/app/quiz/quiz.component.ts
     | 94 ms (parallelism 27.6) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
    1882 ms resolve to new modules
<i>  |  | 329 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 144 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
<i>  |  | 218 ms (parallelism 14.7) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 142 ms (parallelism 13.3) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 198 ms (parallelism 14.6) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 185 ms (parallelism 19.4) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
<i>  |  | 214 ms (parallelism 14.9) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 75 ms (parallelism 29.8) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 76 ms (parallelism 30.1) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 97 ms (parallelism 40.1) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 95 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 95 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 95 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 98 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 101 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 99 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 96 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 102 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 98 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 101 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 104 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 105 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 103 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 104 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 112 ms (parallelism 39) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 113 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 111 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 114 ms (parallelism 38.8) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 115 ms (parallelism 38.7) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 111 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 112 ms (parallelism 39) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 115 ms (parallelism 38.7) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 113 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 113 ms (parallelism 38.9) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 115 ms (parallelism 38.6) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 116 ms (parallelism 38.6) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 116 ms (parallelism 38.6) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 117 ms (parallelism 38.4) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 118 ms (parallelism 38.5) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 116 ms (parallelism 38.5) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 118 ms (parallelism 38.7) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 117 ms (parallelism 39.4) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 115 ms (parallelism 40.3) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 115 ms (parallelism 40.4) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<w>  | 5583 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 315 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 115 ms (parallelism 40.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 115 ms (parallelism 40.4) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2785 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 320 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 320 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 551 ms (parallelism 31.6) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 551 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 547 ms (parallelism 31.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 547 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 48 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 48 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 456 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 137 ms (parallelism 13.3) build modules > ./src/app/app-routing.module.ts
     |  | 113 ms (parallelism 13.2) build modules > ./src/app/app.component.ts
     |  | 113 ms (parallelism 13.2) build modules > ./src/app/prompt-update.service.ts
     |  | 113 ms (parallelism 13.2) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 107 ms (parallelism 16.3) build modules > ./src/app/material/material.module.ts
     |  | 41 ms (parallelism 41.9) build modules > ./src/app/news.service.ts
     |  | 41 ms (parallelism 42.3) build modules > ./src/app/menu/menu.component.ts
     |  | 30 ms (parallelism 42.7) build modules > ./src/app/quiz.service.ts
<i>  | 1290 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 11126 ms build modules
+ 153 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (913 real resolves with 0 cached but invalid, 1964 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.111657 ms
<t> figure out provided exports: 21.351283 ms
    96% of exports of modules have been determined (15 no declared exports, 329 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 6 additional calculations due to dependencies)
<t> store provided exports into cache: 2.74728 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 18.907986 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.218708 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.526444 ms
<t> trace exports usage in graph: 23.141258 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 14.386852 ms
<t> visitModules: visiting: 15.817288 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 17.28409 ms
<t> connectChunkGroups: 0.191821 ms
<t> cleanup: 0.046772 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.039243 ms
<t> modules: 3.843302 ms
<t> queue: 0.00755 ms
<t> maxSize: 0.042974 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.145387 ms
<t> sort relevant modules: 0.232092 ms
<t> find modules to concatenate: 21.175379 ms
<t> sort concat configurations: 0.068323 ms
<t> create concatenated modules: 21.891725 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 357.230513 ms
<t> optimize asset: polyfills.js: 1029.17454 ms
<t> optimize asset: main.js: 8000.332913 ms
<t> optimize js assets: 8203.65396 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 22.553241 ms
<t> optimize css assets: 65.526001 ms

LOG from webpack.FileSystemInfo
    1245 new snapshots created
    0% root snapshot uncached (0 / 1964)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1095 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5290/6512) entries shared via 12 shared snapshots (834 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4042/4667) entries shared via 258 shared snapshots (788 times referenced)
    Managed items info in cache: 217 items
    Managed items snapshot optimization: 33% (744/2253) entries shared via 40 shared snapshots (130 times referenced)
    Managed files snapshot optimization: 76% (4969/6552) entries shared via 269 shared snapshots (989 times referenced)
    Managed missing snapshot optimization: 82% (5825/7071) entries shared via 343 shared snapshots (926 times referenced)

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

2023-01-11 10:21:26: webpack 5.75.0 compiled in 36325 ms (329dd522db0e6290)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1083.245205 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 41.880123 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1692 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.158875 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.984538 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 2.669661 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.334667 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/compiler/fesm2020/compiler.mjs': 1.181322 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 2.412782 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/animations/fesm2020/browser.mjs': 1.964493 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 2.057592 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/autocomplete.mjs': 1.163337 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 4.421679 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 2.63253 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.32495 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.30919 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.282159 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.561948 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 7.792229 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 2.741751 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.748925 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/dialog.mjs': 3.862281 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.558361 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 4.916726 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.05575 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.594502 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.303089 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/observable/combineLatest.js': 7.411807 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|conditionNames=[|0=|sass|1=|style|]|mainFields=[|0=|sass|1=|style|2=|main|3=|...|]|extensions=[|0=|.scss|1=|.sass|2=|.css|]|restrictions=[|0=[|]|]|preferRelative=|true|symlinks=|true|dependencyType=|sass-module|mainFiles=[|0=|_index|1=|index|2=|...|]|path=|/home/kushal/src/angular/angularfifteen|request=|@material/checkbox/_checkbox-theme': 5.586336 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|bab2709da9a589d5|runtime': 26.066023 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs|df19c1f16536234e|runtime': 3.814479 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 17.255052 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 586.848548 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1692 items, 1 files, 81 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.87 kB |               139.46 kB
styles.css          | styles        | 257.64 kB |                17.36 kB
polyfills.js        | polyfills     |  33.07 kB |                10.67 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 890.47 kB |               168.00 kB

Build at: 2023-01-11T15:21:29.582Z - Hash: 329dd522db0e6290 - Time: 39605ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 390.47 kB with a total of 890.47 kB.


Done in 42.39s.
```
