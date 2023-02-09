Thu Feb  9 06:52:12 AM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       4.4Gi       2.1Gi       567Mi       8.8Gi        10Gi
Swap:          8.0Gi       2.8Gi       5.2Gi
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
    

Angular CLI: 15.1.4
Node: 18.14.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.1.3
... animations, cdk, common, compiler, compiler-cli, core, forms
... localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1501.4
@angular-devkit/build-angular   15.1.4
@angular-devkit/core            15.1.4
@angular-devkit/schematics      15.1.4
@angular/cli                    15.1.4
@schematics/angular             15.1.4
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.79s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.38s.
```
Latest version:     1.0.30001451
Installed version:  1.0.30001450
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001451
Installed version:  1.0.30001451
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.1.5/angular-webpack/ec60a602fe7d0e8ad6bf5c1aea77af587d114246.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.1.5/angular-webpack/ec60a602fe7d0e8ad6bf5c1aea77af587d114246/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 11.764774 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 598 KiB {179} [emitted] (name: main)
asset styles.css 268 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 599 KiB = runtime.js 906 bytes main.js 598 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 269 KiB = runtime.js 906 bytes styles.css 268 KiB
chunk {179} (runtime: runtime) main.js (main) 4.67 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 1 modules [321] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 192 modules [183] 4.64 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1581 ms (resolving: 61 ms, restoring: 1 ms, integration: 0 ms, building: 1519 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1802 ms (resolving: 61 ms, restoring: 1 ms, integration: 0 ms, building: 1740 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12639 ms (resolving: 61 ms, restoring: 1 ms, integration: 0 ms, building: 12577 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.629176 ms
<t> runtime requirements.chunks: 0.626889 ms
<t> runtime requirements.entries: 2.001909 ms
<t> runtime requirements.modules: 0.027566 ms
<t> runtime requirements.chunks: 0.01728 ms
<t> runtime requirements.entries: 0.166529 ms
<t> finish module profiles: 12.655671 ms
<t> compute affected modules: 0.003491 ms
<t> finish modules: 24.457946 ms
<t> report dependency errors and warnings: 12.792579 ms
<t> optimize dependencies: 33.660127 ms
<t> create chunks: 15.52552 ms
<t> compute affected modules with chunk graph: 0.005509 ms
<t> optimize: 49.533118 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.704361 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 962.166451 ms
<t> runtime requirements.modules: 0.147547 ms
<t> runtime requirements.chunks: 0.12442 ms
<t> runtime requirements.entries: 0.529696 ms
<t> runtime requirements: 1.174873 ms
<t> hashing: initialize hash: 0.008914 ms
<t> hashing: hash warnings: 0.004113 ms
<t> hashing: sort chunks: 0.058677 ms
<t> hashing: hash runtime modules: 1.09841 ms
<t> hashing: hash chunks: 1.335848 ms
<t> hashing: hash digest: 0.045884 ms
<t> hashing: process full hash modules: 0.156301 ms
<t> hashing: 2.943837 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.065866 ms
<t> module assets: 0.172312 ms
<t> create chunk assets: 3.921508 ms
<t> process assets: 6617.874274 ms

LOG from webpack.Compiler
<t> make hook: 12894.001065 ms
<t> finish make hook: 0.106444 ms
<t> finish compilation: 49.959516 ms
<t> seal compilation: 7705.89351 ms
<t> afterCompile hook: 0.134552 ms
<t> emitAssets: 4.128779 ms
<t> emitRecords: 0.060899 ms
<t> done hook: 348.329738 ms
<t> beginIdle: 0.783128 ms

LOG from webpack.Compilation.ModuleProfile
     | 94 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 89 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 120 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 120 ms (parallelism 12.1) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 30 ms (parallelism 29.7) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
    988 ms resolve to new modules
<i>  |  | 267 ms (parallelism 5.7) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 103 ms (parallelism 4.1) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 126 ms (parallelism 12) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 167 ms (parallelism 11.3) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 121 ms (parallelism 12.1) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 157 ms (parallelism 11.8) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 31 ms (parallelism 30.6) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 78 ms (parallelism 40.1) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 74 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 74 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 74 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 75 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 75 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 75 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 75 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 78 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 79 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 77 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 79 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 79 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 80 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 79 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 81 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 81 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 80 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 80 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 81 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 82 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 82 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 82 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 82 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 82 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 83 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 81 ms (parallelism 40.7) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 81 ms (parallelism 41.4) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 82 ms (parallelism 39.6) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 3926 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 252 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 82 ms (parallelism 39.5) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 82 ms (parallelism 39.7) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2132 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 295 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 295 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 394 ms (parallelism 31.9) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 394 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 391 ms (parallelism 32) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 391 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 41 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 41 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 407 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 133 ms (parallelism 11.8) build modules > ./src/app/app-routing.module.ts
     |  | 118 ms (parallelism 12.1) build modules > ./src/app/app.component.ts
     |  | 103 ms (parallelism 12.1) build modules > ./src/app/prompt-update.service.ts
     |  | 104 ms (parallelism 12.1) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 62 ms (parallelism 9.9) build modules > ./src/app/material/material.module.ts
<i>  | 1083 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 8267 ms build modules
+ 91 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (890 real resolves with 0 cached but invalid, 1930 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.412671 ms
<t> figure out provided exports: 14.657129 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.022846 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 15.211616 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 12.533604 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.491476 ms
<t> trace exports usage in graph: 20.029898 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 4.715547 ms
<t> visitModules: visiting: 5.710624 ms
    442 queue items processed (200 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 5.804323 ms
<t> connectChunkGroups: 0.004738 ms
<t> cleanup: 0.003618 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.053813 ms
<t> modules: 3.252143 ms
<t> queue: 0.005743 ms
<t> maxSize: 0.037507 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.783905 ms
<t> sort relevant modules: 0.182892 ms
<t> find modules to concatenate: 13.548461 ms
<t> sort concat configurations: 0.04205 ms
<t> create concatenated modules: 13.217952 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 344.993242 ms
<t> optimize asset: polyfills.js: 812.433787 ms
<t> optimize asset: main.js: 5315.218862 ms
<t> optimize js assets: 5449.274725 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 21.470221 ms
<t> optimize css assets: 44.2328 ms

LOG from webpack.FileSystemInfo
    1204 new snapshots created
    0% root snapshot uncached (0 / 1930)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1094 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5142/6320) entries shared via 12 shared snapshots (810 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 88% (4090/4665) entries shared via 260 shared snapshots (799 times referenced)
    Managed items info in cache: 197 items
    Managed items snapshot optimization: 33% (711/2123) entries shared via 42 shared snapshots (125 times referenced)
    Managed files snapshot optimization: 77% (4954/6442) entries shared via 267 shared snapshots (983 times referenced)
    Managed missing snapshot optimization: 83% (5770/6918) entries shared via 337 shared snapshots (918 times referenced)

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

2023-02-09 06:53:25: webpack 5.75.0 compiled in 27211 ms (defcc71d35b59238)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 813.760706 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 33.962059 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1635 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs': 1.114125 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.184741 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.826566 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 1.841539 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 1.406934 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 3.173262 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 2.666382 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 1.950708 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.398168 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 3.486778 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 2.262418 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.332222 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/snack-bar.mjs': 2.659117 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 5.838098 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 1.755355 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.145194 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/observable/fromEvent.js': 3.482732 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/a11y.mjs': 4.770897 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 23.017497 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 13.218949 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 385.433506 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1635 items, 1 files, 71 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 597.65 kB |               139.04 kB
styles.css          | styles        | 268.39 kB |                17.74 kB
polyfills.js        | polyfills     |  33.07 kB |                10.67 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 900.00 kB |               167.95 kB

Build at: 2023-02-09T11:53:28.361Z - Hash: defcc71d35b59238 - Time: 29795ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 400.00 kB with a total of 900.00 kB.


Done in 32.57s.
```
Thu Feb  9 06:53:57 AM EST 2023
yarn version v1.22.19
info Current version: 0.0.290
info New version: 0.0.291
Done in 0.13s.
