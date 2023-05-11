Thu May 11 07:33:48 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       1.3Gi       3.9Gi       438Mi        10Gi        13Gi
Swap:          8.0Gi       0.0Ki       8.0Gi
System Storage
2.1G	.
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
    

Angular CLI: 16.0.0
Node: 18.16.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.0.1
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1600.0
@angular-devkit/build-angular   16.0.0
@angular-devkit/core            16.0.0
@angular-devkit/schematics      16.0.0
@angular/cdk                    16.0.0
@angular/cli                    16.0.0
@angular/material               16.0.0
@schematics/angular             16.0.0
rxjs                            7.5.7
typescript                      5.0.4
    
Done in 0.51s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.37s.
```
Latest version:     1.0.30001486
Installed version:  1.0.30001486
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001486
Installed version:  1.0.30001486
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.0.1/angular-webpack/b925754c1a57c185e6f561c84a7ed6d13e82945b.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.0.1/angular-webpack/b925754c1a57c185e6f561c84a7ed6d13e82945b/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3522.084575 ms
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
    2031 ms (resolving: 60 ms, restoring: 1 ms, integration: 0 ms, building: 1970 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 317 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 317 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2047 ms (resolving: 59 ms, restoring: 1 ms, integration: 0 ms, building: 1987 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12762 ms (resolving: 59 ms, restoring: 1 ms, integration: 0 ms, building: 12702 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.391172 ms
<t> runtime requirements.chunks: 0.418507 ms
<t> runtime requirements.entries: 1.447622 ms
<t> runtime requirements.modules: 0.044005 ms
<t> runtime requirements.chunks: 0.018843 ms
<t> runtime requirements.entries: 0.16524 ms
<t> finish module profiles: 10.360304 ms
<t> compute affected modules: 0.004128 ms
<t> finish modules: 22.567223 ms
<t> report dependency errors and warnings: 13.328308 ms
<t> optimize dependencies: 34.734052 ms
<t> create chunks: 8.666258 ms
<t> compute affected modules with chunk graph: 0.005045 ms
<t> optimize: 55.601132 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 19.581559 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 852.459254 ms
<t> runtime requirements.modules: 0.261627 ms
<t> runtime requirements.chunks: 0.075754 ms
<t> runtime requirements.entries: 0.569116 ms
<t> runtime requirements: 1.183342 ms
<t> hashing: initialize hash: 0.00855 ms
<t> hashing: hash warnings: 0.00462 ms
<t> hashing: sort chunks: 0.077404 ms
<t> hashing: hash runtime modules: 1.413309 ms
<t> hashing: hash chunks: 1.781414 ms
<t> hashing: hash digest: 0.027754 ms
<t> hashing: process full hash modules: 0.198907 ms
<t> hashing: 3.917954 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.100963 ms
<t> module assets: 0.199492 ms
<t> create chunk assets: 9.036481 ms
<t> process assets: 13987.248694 ms

LOG from webpack.Compiler
<t> make hook: 13018.765729 ms
<t> finish make hook: 0.211761 ms
<t> finish compilation: 46.303113 ms
<t> seal compilation: 14976.267084 ms
<t> afterCompile hook: 0.168041 ms
<t> emitAssets: 3.655484 ms
<t> emitRecords: 0.057537 ms
<t> done hook: 353.604846 ms
<t> beginIdle: 0.740975 ms

LOG from webpack.Compilation.ModuleProfile
     | 92 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 61 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 85 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 85 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 40 ms (parallelism 29.4) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
    846 ms resolve to new modules
     | 74 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    95 ms resolve to existing modules
<i>  |  | 332 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 111 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     |  | 110 ms (parallelism 12.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 126 ms (parallelism 13.3) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 110 ms (parallelism 12.9) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 117 ms (parallelism 13.9) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 62 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 62 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 74 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 63 ms (parallelism 46.6) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 64 ms (parallelism 46.5) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 63 ms (parallelism 46.7) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 62 ms (parallelism 46.7) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 62 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 62 ms (parallelism 46.7) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 63 ms (parallelism 46.7) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 64 ms (parallelism 46.4) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 65 ms (parallelism 46.3) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 64 ms (parallelism 46.4) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 66 ms (parallelism 46.1) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 65 ms (parallelism 46.4) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 65 ms (parallelism 46.2) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 65 ms (parallelism 46.2) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 67 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 66 ms (parallelism 46.2) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 66 ms (parallelism 46.2) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 74 ms (parallelism 44.2) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 67 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 67 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 67 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 68 ms (parallelism 45.7) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 67 ms (parallelism 45.8) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 67 ms (parallelism 45.8) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 68 ms (parallelism 45.7) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 93 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 93 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 93 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 88 ms (parallelism 41) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 87 ms (parallelism 41.8) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 88 ms (parallelism 40.1) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 89 ms (parallelism 39.5) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3599 ms build modules > 61 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 329 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 37 ms (parallelism 35) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 37 ms (parallelism 35) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2080 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 333 ms (parallelism 6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 333 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 391 ms (parallelism 32.5) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 391 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 388 ms (parallelism 32.6) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 388 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 31 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 31 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 428 ms (parallelism 5.6) build modules > ./src/main.ts
     |  | 83 ms (parallelism 11.1) build modules > ./src/app/app.component.ts
     |  | 100 ms (parallelism 12.9) build modules > ./src/app/material/material.module.ts
     |  | 88 ms (parallelism 39) build modules > ./src/app/news.service.ts
     |  | 87 ms (parallelism 39.1) build modules > ./src/app/quiz.service.ts
     |  | 86 ms (parallelism 41.6) build modules > ./src/app/menu/menu.component.ts
<i>  | 1067 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7893 ms build modules
+ 111 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (881 real resolves with 0 cached but invalid, 1933 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.644229 ms
<t> figure out provided exports: 11.647602 ms
    95% of exports of modules have been determined (15 no declared exports, 311 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 5 additional calculations due to dependencies)
<t> store provided exports into cache: 2.203025 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 11.467379 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 14.417519 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.391153 ms
<t> trace exports usage in graph: 19.457946 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 5.173581 ms
<t> visitModules: visiting: 6.226315 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.383994 ms
<t> connectChunkGroups: 0.0041 ms
<t> cleanup: 0.002844 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.036779 ms
<t> modules: 2.655638 ms
<t> queue: 0.004402 ms
<t> maxSize: 0.029346 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.617679 ms
<t> sort relevant modules: 0.157327 ms
<t> find modules to concatenate: 17.295306 ms
<t> sort concat configurations: 0.054884 ms
<t> create concatenated modules: 19.070215 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 271.676316 ms
<t> optimize asset: polyfills.js: 700.778691 ms
<t> optimize asset: main.js: 12519.809505 ms
<t> optimize js assets: 12750.854801 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 27.524844 ms
<t> optimize css assets: 41.292203 ms

LOG from webpack.FileSystemInfo
    1195 new snapshots created
    0% root snapshot uncached (0 / 1933)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1055 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5106/6262) entries shared via 12 shared snapshots (805 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3920/4511) entries shared via 252 shared snapshots (768 times referenced)
    Managed items info in cache: 167 items
    Managed items snapshot optimization: 29% (602/2049) entries shared via 33 shared snapshots (101 times referenced)
    Managed files snapshot optimization: 77% (4933/6394) entries shared via 262 shared snapshots (976 times referenced)
    Managed missing snapshot optimization: 83% (5569/6686) entries shared via 329 shared snapshots (906 times referenced)

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

2023-05-11 07:34:58: webpack 5.80.0 compiled in 31528 ms (e11cb61a6ba3558a)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1975.634798 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 60.583065 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1626 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.5627 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 1.536453 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.18606 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 1.572277 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 4.041226 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/button.mjs': 1.735467 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/input.mjs': 1.20659 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 2.401099 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.798419 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.000955 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 2.757585 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.976801 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.196245 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/table.mjs': 2.289139 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 3.090248 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.497738 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.111965 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/Subject.js': 6.929491 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/table.mjs': 3.775723 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|9e04c8cc16f0363b|runtime': 19.902558 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 10.090091 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 361.601389 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1626 items, 1 files, 72 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.09 kB |               139.76 kB
styles.css          | styles        | 270.58 kB |                17.82 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 902.56 kB |               168.72 kB

Build at: 2023-05-11T11:35:02.346Z - Hash: e11cb61a6ba3558a - Time: 35297ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 402.56 kB with a total of 902.56 kB.


Done in 37.47s.
```
