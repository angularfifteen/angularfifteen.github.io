Sat Jul 29 12:33:47 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.2Gi       3.4Gi       407Mi       9.7Gi        12Gi
Swap:          8.0Gi       1.0Mi       8.0Gi
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
    

Angular CLI: 16.1.5
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.6
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.5
@angular-devkit/build-angular   16.1.5
@angular-devkit/core            16.1.5
@angular-devkit/schematics      16.1.5
@angular/cdk                    16.1.5
@angular/cli                    16.1.5
@angular/material               16.1.5
@schematics/angular             16.1.5
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.53s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.41s.
```
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001517
Installed version:  1.0.30001517
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.6/angular-webpack/0d5b15610b730d16f11fce4cde7fc39dac35e256.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.6/angular-webpack/0d5b15610b730d16f11fce4cde7fc39dac35e256/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3549.358116 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 602 KiB {179} [emitted] (name: main)
asset styles.css 263 KiB {532} [emitted] (name: styles)
asset polyfills.js 33 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 603 KiB = runtime.js 906 bytes main.js 602 KiB
Entrypoint polyfills 33.9 KiB = runtime.js 906 bytes polyfills.js 33 KiB
Entrypoint styles 264 KiB = runtime.js 906 bytes styles.css 263 KiB
chunk {179} (runtime: runtime) main.js (main) 4.8 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2022/init.mjs + 1 modules [614] 38 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 191 modules [943] 4.76 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1115 ms (resolving: 188 ms, restoring: 1 ms, integration: 0 ms, building: 926 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 299 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 299 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1477 ms (resolving: 51 ms, restoring: 0 ms, integration: 0 ms, building: 1426 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12119 ms (resolving: 147 ms, restoring: 0 ms, integration: 0 ms, building: 11972 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.385215 ms
<t> runtime requirements.chunks: 0.387699 ms
<t> runtime requirements.entries: 1.363692 ms
<t> runtime requirements.modules: 0.029642 ms
<t> runtime requirements.chunks: 0.018597 ms
<t> runtime requirements.entries: 0.238446 ms
<t> finish module profiles: 11.70427 ms
<t> compute affected modules: 0.003748 ms
<t> finish modules: 28.798011 ms
<t> report dependency errors and warnings: 13.102318 ms
<t> optimize dependencies: 36.137872 ms
<t> create chunks: 12.461219 ms
<t> compute affected modules with chunk graph: 0.004137 ms
<t> optimize: 47.480654 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 22.017733 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1050.484387 ms
<t> runtime requirements.modules: 0.16366 ms
<t> runtime requirements.chunks: 0.128462 ms
<t> runtime requirements.entries: 0.681991 ms
<t> runtime requirements: 1.455225 ms
<t> hashing: initialize hash: 0.009518 ms
<t> hashing: hash warnings: 0.00421 ms
<t> hashing: sort chunks: 0.080007 ms
<t> hashing: hash runtime modules: 1.466778 ms
<t> hashing: hash chunks: 1.741081 ms
<t> hashing: hash digest: 0.053054 ms
<t> hashing: process full hash modules: 0.208298 ms
<t> hashing: 3.842217 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.085052 ms
<t> module assets: 0.229017 ms
<t> create chunk assets: 4.015949 ms
<t> process assets: 15386.126939 ms

LOG from webpack.Compiler
<t> make hook: 12156.303031 ms
<t> finish make hook: 0.121683 ms
<t> finish compilation: 53.656843 ms
<t> seal compilation: 16567.629499 ms
<t> afterCompile hook: 0.160782 ms
<t> emitAssets: 3.638913 ms
<t> emitRecords: 0.059004 ms
<t> done hook: 372.783499 ms
<t> beginIdle: 0.780937 ms

LOG from webpack.Compilation.ModuleProfile
     | 38 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 36 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 121 ms (parallelism 4.8) resolve to new modules > ./src/main.ts
     | 115 ms (parallelism 4.3) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 96 ms (parallelism 11.3) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 96 ms (parallelism 11.3) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 34 ms (parallelism 31.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 84 ms (parallelism 46.3) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1085 ms resolve to new modules
     | 84 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    107 ms resolve to existing modules
<i>  |  | 259 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 259 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 61 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 61 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 348 ms (parallelism 34.4) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 348 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 166 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 114 ms (parallelism 12.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 128 ms (parallelism 12.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 115 ms (parallelism 12.3) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 119 ms (parallelism 13.5) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 53 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 53 ms (parallelism 51.1) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 53 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 53 ms (parallelism 51.2) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 57 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 54 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 54 ms (parallelism 51) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 54 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 55 ms (parallelism 50.6) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 55 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 55 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 55 ms (parallelism 50.8) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 54 ms (parallelism 50.9) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 57 ms (parallelism 50.1) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 55 ms (parallelism 50.7) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 57 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 57 ms (parallelism 50.2) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 58 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 58 ms (parallelism 50) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 57 ms (parallelism 50.3) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 59 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 58 ms (parallelism 49.8) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 82 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 59 ms (parallelism 49.6) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 66 ms (parallelism 47.5) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 67 ms (parallelism 47.4) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 67 ms (parallelism 47.4) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 83 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 83 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 83 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 83 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 78 ms (parallelism 43.8) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 77 ms (parallelism 44.9) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 78 ms (parallelism 44.3) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 78 ms (parallelism 42.8) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3082 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 155 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 36 ms (parallelism 35.2) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 37 ms (parallelism 35.1) build modules > ./node_modules/rxjs/dist/esm/index.js
     | 1951 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 327 ms (parallelism 35.4) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 327 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 241 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 91 ms (parallelism 11.2) build modules > ./src/app/app.component.ts
     |  | 108 ms (parallelism 12.3) build modules > ./src/app/material/material.module.ts
     |  | 76 ms (parallelism 42.5) build modules > ./src/app/news.service.ts
     |  | 76 ms (parallelism 42.5) build modules > ./src/app/quiz.service.ts
     |  | 75 ms (parallelism 44.8) build modules > ./src/app/menu/menu.component.ts
<i>  | 866 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 6900 ms build modules
+ 98 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (879 real resolves with 0 cached but invalid, 1937 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.346099 ms
<t> figure out provided exports: 17.807531 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 3.240384 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 16.397546 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 10.634446 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.51645 ms
<t> trace exports usage in graph: 24.550278 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 5.124317 ms
<t> visitModules: visiting: 6.294122 ms
    442 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.452594 ms
<t> connectChunkGroups: 0.00404 ms
<t> cleanup: 0.002444 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.035693 ms
<t> modules: 2.655361 ms
<t> queue: 0.005127 ms
<t> maxSize: 0.028989 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.626094 ms
<t> sort relevant modules: 0.1547 ms
<t> find modules to concatenate: 15.878914 ms
<t> sort concat configurations: 0.041672 ms
<t> create concatenated modules: 11.794711 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 287.08314 ms
<t> optimize asset: polyfills.js: 705.97384 ms
<t> optimize asset: main.js: 13875.301587 ms
<t> optimize js assets: 14028.210445 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 61.652118 ms
<t> optimize css assets: 74.111644 ms

LOG from webpack.FileSystemInfo
    1195 new snapshots created
    0% root snapshot uncached (0 / 1937)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1040 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5104/6253) entries shared via 12 shared snapshots (805 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (3845/4436) entries shared via 247 shared snapshots (744 times referenced)
    Managed items info in cache: 158 items
    Managed items snapshot optimization: 29% (592/2042) entries shared via 34 shared snapshots (103 times referenced)
    Managed files snapshot optimization: 77% (4912/6386) entries shared via 256 shared snapshots (975 times referenced)
    Managed missing snapshot optimization: 83% (5424/6546) entries shared via 323 shared snapshots (901 times referenced)

WARNING in ./src/styles.scss?ngGlobalStyle (./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle)
Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet
ModuleWarning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet

    at Object.emitWarning (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModule.js:604:6)
    at Object.warn (/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/utils.js:144:25)
    at Worker.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/sass/sass-service.js:136:36)
    at Worker.emit (node:events:514:28)
    at MessagePort.<anonymous> (node:internal/worker:243:53)
    at [nodejs.internal.kHybridDispatch] (node:internal/event_target:741:20)
    at exports.emitMessage (node:internal/per_context/messageport:23:28)
 @ ./src/styles.scss?ngGlobalStyle

2023-07-29 00:35:00: webpack 5.86.0 compiled in 32296 ms (2f0aa171783bed9c)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 906.909013 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 49.758391 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.122669 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.737402 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.369059 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.411909 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022|request=|rxjs': 1.127549 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.146534 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.330903 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.335738 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.0158 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 1.730503 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 3.293574 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.321236 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.149895 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 2.081954 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.540324 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.635955 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.117385 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.569798 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.16912 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.136738 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/switchScan.js': 3.237385 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 19.324116 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 9.969006 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 368.900076 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 601.99 kB |               140.17 kB
styles.css          | styles        | 262.79 kB |                17.20 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 898.67 kB |               168.49 kB

Build at: 2023-07-29T04:35:03.662Z - Hash: 2f0aa171783bed9c - Time: 35169ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 398.67 kB with a total of 898.67 kB.


Done in 37.12s.
```
Sat Jul 29 12:35:31 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.425
info New version: 0.0.426
Done in 0.12s.
