Sat Jun  3 08:59:24 PM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       8.5Gi       546Mi       615Mi       6.3Gi       5.9Gi
Swap:          8.0Gi       8.0Gi       0.0Ki
System Storage
1.3G	.
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
    

Angular CLI: 16.0.3
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.3
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.3
@angular-devkit/build-angular   16.0.3
@angular-devkit/core            16.0.3
@angular-devkit/schematics      16.0.3
@angular/cdk                    16.0.2
@angular/material               16.0.2
@schematics/angular             16.0.3
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.42s.
```
Latest version:     1.0.30001494
Installed version:  1.0.30001489
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "@types/node@*".
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "ts-node@>=10".
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "@types/node@*".
warning "@angular-devkit/build-angular > postcss-loader > cosmiconfig-typescript-loader@4.3.0" has unmet peer dependency "ts-node@>=10".
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001494
Installed version:  1.0.30001494
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.0.4/angular-webpack/60bc037a3869cb982faf2b8c0a0abbc098b41492.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.0.4/angular-webpack/60bc037a3869cb982faf2b8c0a0abbc098b41492/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3757.950022 ms
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
chunk {179} (runtime: runtime) main.js (main) 4.76 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [564] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [510] 4.72 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    2125 ms (resolving: 71 ms, restoring: 1 ms, integration: 0 ms, building: 2053 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 317 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 317 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2152 ms (resolving: 71 ms, restoring: 1 ms, integration: 0 ms, building: 2080 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    13657 ms (resolving: 71 ms, restoring: 1 ms, integration: 0 ms, building: 13585 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.451914 ms
<t> runtime requirements.chunks: 0.4126 ms
<t> runtime requirements.entries: 1.428655 ms
<t> runtime requirements.modules: 0.028745 ms
<t> runtime requirements.chunks: 0.019073 ms
<t> runtime requirements.entries: 0.169371 ms
<t> finish module profiles: 10.959842 ms
<t> compute affected modules: 0.00378 ms
<t> finish modules: 21.36637 ms
<t> report dependency errors and warnings: 10.418507 ms
<t> optimize dependencies: 34.378341 ms
<t> create chunks: 7.853399 ms
<t> compute affected modules with chunk graph: 0.00548 ms
<t> optimize: 50.352233 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 17.786388 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1093.592971 ms
<t> runtime requirements.modules: 0.143773 ms
<t> runtime requirements.chunks: 0.104358 ms
<t> runtime requirements.entries: 0.546549 ms
<t> runtime requirements: 1.231159 ms
<t> hashing: initialize hash: 0.00897 ms
<t> hashing: hash warnings: 0.003764 ms
<t> hashing: sort chunks: 0.104767 ms
<t> hashing: hash runtime modules: 1.105205 ms
<t> hashing: hash chunks: 1.486344 ms
<t> hashing: hash digest: 0.044634 ms
<t> hashing: process full hash modules: 0.157973 ms
<t> hashing: 3.493567 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.08135 ms
<t> module assets: 0.25849 ms
<t> create chunk assets: 4.836736 ms
<t> process assets: 14422.778072 ms

LOG from webpack.Compiler
<t> make hook: 13909.363231 ms
<t> finish make hook: 0.132354 ms
<t> finish compilation: 42.842734 ms
<t> seal compilation: 15638.958337 ms
<t> afterCompile hook: 0.183542 ms
<t> emitAssets: 8.446908 ms
<t> emitRecords: 0.078502 ms
<t> done hook: 361.698253 ms
<t> beginIdle: 0.919025 ms

LOG from webpack.Compilation.ModuleProfile
     | 93 ms (parallelism 3.7) resolve to new modules > ./src/main.ts
     | 43 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 54 ms (parallelism 38.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 91 ms (parallelism 48.2) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 91 ms (parallelism 48.2) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 58 ms (parallelism 51.3) resolve to new modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     | 58 ms (parallelism 51.2) resolve to new modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
    1752 ms resolve to new modules
<i>  |  | 378 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 109 ms (parallelism 4.2) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 62 ms (parallelism 40.7) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 58 ms (parallelism 37.6) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 57 ms (parallelism 37.5) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 55 ms (parallelism 38.8) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 54 ms (parallelism 39.1) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 55 ms (parallelism 39.4) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 76 ms (parallelism 51.8) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 73 ms (parallelism 52.3) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 75 ms (parallelism 52.1) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 74 ms (parallelism 52.3) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 78 ms (parallelism 51.4) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 75 ms (parallelism 52.1) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 74 ms (parallelism 52.2) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 74 ms (parallelism 52.2) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 76 ms (parallelism 51.9) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 75 ms (parallelism 52.1) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 75 ms (parallelism 52) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 75 ms (parallelism 52) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 76 ms (parallelism 51.9) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 80 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 77 ms (parallelism 51.7) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 76 ms (parallelism 51.8) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 76 ms (parallelism 51.7) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 79 ms (parallelism 51.1) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 79 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 78 ms (parallelism 51.4) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 81 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 78 ms (parallelism 51.3) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 80 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 79 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 78 ms (parallelism 51.3) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 80 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 80 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 81 ms (parallelism 50.6) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 81 ms (parallelism 50.5) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 81 ms (parallelism 50.5) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 82 ms (parallelism 50.4) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 77 ms (parallelism 46.6) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
<i>  | 3515 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 349 ms (parallelism 5.9) build modules > ./node_modules/zone.js/fesm2015/zone.js
<i>  | 1711 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 354 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 354 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 354 ms (parallelism 38.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 354 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 351 ms (parallelism 38.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 351 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 45 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 45 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 412 ms (parallelism 5.5) build modules > ./src/main.ts
     |  | 45 ms (parallelism 26.8) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 45 ms (parallelism 26.8) build modules > ./src/app/home/home.component.ts
     |  | 45 ms (parallelism 26.8) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 45 ms (parallelism 26.7) build modules > ./src/app/news/news.component.ts
     |  | 45 ms (parallelism 26.7) build modules > ./src/app/quiz/quiz.component.ts
     |  | 51 ms (parallelism 39.5) build modules > ./src/app/loading/loading.component.ts
     |  | 51 ms (parallelism 39.5) build modules > ./src/app/playground/playground.component.ts
     |  | 56 ms (parallelism 51.3) build modules > ./src/app/news.service.ts
     |  | 56 ms (parallelism 51.3) build modules > ./src/app/quiz.service.ts
     |  | 75 ms (parallelism 45.6) build modules > ./src/app/menu/menu.component.ts
<i>  | 988 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7322 ms build modules
+ 25 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (883 real resolves with 0 cached but invalid, 1982 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.461273 ms
<t> figure out provided exports: 10.997373 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.123558 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 18.256529 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 15.863188 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.383393 ms
<t> trace exports usage in graph: 17.704924 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.916264 ms
<t> visitModules: visiting: 6.005644 ms
    443 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.09446 ms
<t> connectChunkGroups: 0.003706 ms
<t> cleanup: 0.002853 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.046729 ms
<t> modules: 3.118177 ms
<t> queue: 0.007456 ms
<t> maxSize: 0.048695 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.072666 ms
<t> sort relevant modules: 0.233232 ms
<t> find modules to concatenate: 20.259621 ms
<t> sort concat configurations: 0.055227 ms
<t> create concatenated modules: 11.163744 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 370.504805 ms
<t> optimize asset: polyfills.js: 804.758182 ms
<t> optimize asset: main.js: 13064.376943 ms
<t> optimize js assets: 13218.197227 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 36.241138 ms
<t> optimize css assets: 46.319452 ms

LOG from webpack.FileSystemInfo
    1197 new snapshots created
    0% root snapshot uncached (0 / 1982)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1063 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5113/6272) entries shared via 12 shared snapshots (806 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3907/4546) entries shared via 253 shared snapshots (765 times referenced)
    Managed items info in cache: 167 items
    Managed items snapshot optimization: 30% (617/2051) entries shared via 36 shared snapshots (108 times referenced)
    Managed files snapshot optimization: 77% (4944/6405) entries shared via 263 shared snapshots (976 times referenced)
    Managed missing snapshot optimization: 85% (5726/6701) entries shared via 304 shared snapshots (1035 times referenced)

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

2023-06-03 21:00:57: webpack 5.80.0 compiled in 33319 ms (4ce1204016dd6d02)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1907.390647 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 61.062931 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.306679 ms
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
        at NormalModule.serialize (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:1376:9)
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.60203 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.22938 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.350009 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.84755 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/autocomplete.mjs': 1.972708 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 3.970898 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 3.397132 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.599278 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 1.013754 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.172051 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.274925 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.214936 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.55855 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sort.mjs': 2.832906 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 9.663586 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.563922 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.237787 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/min.js': 3.823832 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/snack-bar.mjs': 5.157544 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|9e04c8cc16f0363b|runtime': 21.95839 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2022/init.mjs|1f326c2c77c46f56|runtime': 5.124256 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 22.367101 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 602.456097 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 72 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 597.79 kB |               139.67 kB
styles.css          | styles        | 270.56 kB |                17.82 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 902.23 kB |               168.62 kB

Build at: 2023-06-04T01:01:01.905Z - Hash: 4ce1204016dd6d02 - Time: 37297ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 402.23 kB with a total of 902.23 kB.


Done in 41.82s.
```
