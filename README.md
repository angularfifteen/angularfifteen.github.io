Thu Jan  5 10:49:44 AM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.4Gi       2.2Gi       789Mi       7.6Gi       8.8Gi
Swap:          8.0Gi       3.5Gi       4.5Gi
System Storage
1.5G	.
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
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.4
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.4
@angular-devkit/build-angular   15.0.4
@angular-devkit/core            15.0.4
@angular-devkit/schematics      15.0.4
@angular/cdk                    15.0.3
@angular/material               15.0.3
@schematics/angular             15.0.4
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.78s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001442
Installed version:  1.0.30001441
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
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
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.0.4/angular-webpack/d6040cff49b1a639ead4c6d05190fbdffb3d9170.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.0.4/angular-webpack/d6040cff49b1a639ead4c6d05190fbdffb3d9170/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 13.106101 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 273 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 16 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
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
    1900 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 1842 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 308 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 308 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1923 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 1865 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    16587 ms (resolving: 57 ms, restoring: 1 ms, integration: 0 ms, building: 16529 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.670014 ms
<t> runtime requirements.chunks: 0.681918 ms
<t> runtime requirements.entries: 2.2952 ms
<t> runtime requirements.modules: 0.036417 ms
<t> runtime requirements.chunks: 0.021892 ms
<t> runtime requirements.entries: 0.257355 ms
<t> finish module profiles: 16.717295 ms
<t> compute affected modules: 0.00428 ms
<t> finish modules: 40.744223 ms
<t> report dependency errors and warnings: 15.823318 ms
<t> optimize dependencies: 43.409517 ms
<t> create chunks: 10.989512 ms
<t> compute affected modules with chunk graph: 0.009114 ms
<t> optimize: 77.957861 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 25.182139 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1125.151174 ms
<t> runtime requirements.modules: 0.157545 ms
<t> runtime requirements.chunks: 0.130779 ms
<t> runtime requirements.entries: 0.606585 ms
<t> runtime requirements: 1.111056 ms
<t> hashing: initialize hash: 0.007951 ms
<t> hashing: hash warnings: 0.004572 ms
<t> hashing: sort chunks: 0.062551 ms
<t> hashing: hash runtime modules: 1.275438 ms
<t> hashing: hash chunks: 1.604781 ms
<t> hashing: hash digest: 0.051251 ms
<t> hashing: process full hash modules: 0.182209 ms
<t> hashing: 3.424753 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.079447 ms
<t> module assets: 0.189431 ms
<t> create chunk assets: 4.872084 ms
<t> process assets: 9382.023333 ms

LOG from webpack.Compiler
<t> make hook: 16860.137755 ms
<t> finish make hook: 0.183526 ms
<t> finish compilation: 73.351471 ms
<t> seal compilation: 10676.774012 ms
<t> afterCompile hook: 0.155081 ms
<t> emitAssets: 4.601063 ms
<t> emitRecords: 0.073024 ms
<t> done hook: 419.610339 ms
<t> beginIdle: 1.011355 ms

LOG from webpack.Compilation.ModuleProfile
     | 97 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 78 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 94 ms (parallelism 13.9) resolve to new modules > ./src/app/material/material.module.ts
     | 109 ms (parallelism 13.7) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 109 ms (parallelism 13.7) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 48 ms (parallelism 26.5) resolve to new modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     | 84 ms (parallelism 30.2) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 56 ms (parallelism 35.5) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
    1542 ms resolve to new modules
<i>  |  | 298 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 127 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 159 ms (parallelism 12.7) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 113 ms (parallelism 13.6) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 124 ms (parallelism 13.4) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 199 ms (parallelism 14.9) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 156 ms (parallelism 24.4) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 84 ms (parallelism 30.5) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 84 ms (parallelism 30.5) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 82 ms (parallelism 40.2) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 90 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 90 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 90 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 92 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 94 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 91 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 91 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 92 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 91 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 90 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 92 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 93 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 92 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 96 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 93 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 92 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 95 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 96 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 93 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 96 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 97 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 97 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 97 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 96 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 98 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 98 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 98 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 99 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 98 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 99 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 100 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 99 ms (parallelism 39.9) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 99 ms (parallelism 40.8) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 99 ms (parallelism 40.1) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 4882 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 300 ms (parallelism 6.1) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 99 ms (parallelism 40) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 99 ms (parallelism 40) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2619 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 304 ms (parallelism 6.1) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 304 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 524 ms (parallelism 31.5) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 524 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 520 ms (parallelism 31.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 520 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 77 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 77 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 424 ms (parallelism 5.6) build modules > ./src/main.ts
     |  | 124 ms (parallelism 13.4) build modules > ./src/app/app-routing.module.ts
     |  | 108 ms (parallelism 13.7) build modules > ./src/app/app.component.ts
     |  | 93 ms (parallelism 13.9) build modules > ./src/app/prompt-update.service.ts
     |  | 93 ms (parallelism 13.9) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 94 ms (parallelism 15.9) build modules > ./src/app/material/material.module.ts
     |  | 53 ms (parallelism 36.1) build modules > ./src/app/loading.service.ts
     |  | 57 ms (parallelism 35.8) build modules > ./src/app/loading/loading.component.ts
<i>  | 1254 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 10183 ms build modules
+ 149 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (913 real resolves with 0 cached but invalid, 1992 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.890839 ms
<t> figure out provided exports: 22.709541 ms
    96% of exports of modules have been determined (15 no declared exports, 329 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 7 additional calculations due to dependencies)
<t> store provided exports into cache: 3.842454 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 20.796516 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.120114 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.638437 ms
<t> trace exports usage in graph: 29.027941 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 6.065586 ms
<t> visitModules: visiting: 7.879001 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 8.064372 ms
<t> connectChunkGroups: 0.005342 ms
<t> cleanup: 0.005186 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.052457 ms
<t> modules: 3.966785 ms
<t> queue: 0.006154 ms
<t> maxSize: 0.039763 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.065951 ms
<t> sort relevant modules: 0.227799 ms
<t> find modules to concatenate: 20.760439 ms
<t> sort concat configurations: 0.069979 ms
<t> create concatenated modules: 21.593572 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 420.34221 ms
<t> optimize asset: polyfills.js: 1120.724839 ms
<t> optimize asset: main.js: 7688.990812 ms
<t> optimize js assets: 7882.365033 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 29.055061 ms
<t> optimize css assets: 66.248746 ms

LOG from webpack.FileSystemInfo
    1245 new snapshots created
    0% root snapshot uncached (0 / 1992)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1095 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5290/6512) entries shared via 12 shared snapshots (834 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (4032/4667) entries shared via 258 shared snapshots (786 times referenced)
    Managed items info in cache: 217 items
    Managed items snapshot optimization: 33% (734/2253) entries shared via 41 shared snapshots (129 times referenced)
    Managed files snapshot optimization: 76% (4978/6561) entries shared via 269 shared snapshots (991 times referenced)
    Managed missing snapshot optimization: 84% (5924/7071) entries shared via 310 shared snapshots (1045 times referenced)

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

2023-01-05 10:50:50: webpack 5.75.0 compiled in 34858 ms (29d206d21fabd154)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 891.149641 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 38.794424 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1692 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.157204 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.600497 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 2.466528 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.068246 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 2.11323 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/animations/fesm2020/browser.mjs': 2.421774 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 1.868257 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 3.657111 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 2.481299 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.20332 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/slider.mjs': 1.148278 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.95876 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 2.330596 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 2.327882 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 3.575621 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 2.568728 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.520215 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/dialog.mjs': 3.259701 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.209078 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 6.855851 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 2.084247 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.436011 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.787081 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/takeWhile.js': 3.947378 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|conditionNames=[|0=|sass|1=|style|]|mainFields=[|0=|sass|1=|style|2=|main|3=|...|]|extensions=[|0=|.scss|1=|.sass|2=|.css|]|restrictions=[|0=[|]|]|preferRelative=|true|symlinks=|true|dependencyType=|sass-module|mainFiles=[|0=|_index|1=|index|2=|...|]|path=|/home/kushal/src/angular/angularfifteen|request=|@material/dialog/dialog-theme': 4.993401 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/zone.js/fesm2015/zone.js|runtime': 1.126019 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|bab2709da9a589d5|runtime': 31.889713 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs|df19c1f16536234e|runtime': 4.269524 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 19.223495 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 572.086214 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1692 items, 1 files, 82 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.43 kB |               139.40 kB
styles.css          | styles        | 273.11 kB |                17.62 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 905.51 kB |               168.22 kB

Build at: 2023-01-05T15:50:53.829Z - Hash: 29d206d21fabd154 - Time: 37693ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 405.51 kB with a total of 905.51 kB.


Done in 40.11s.
```
Thu Jan  5 10:51:30 AM EST 2023
yarn version v1.22.19
info Current version: 0.0.202
info New version: 0.0.203
Done in 0.14s.
