Sat Aug  5 09:57:51 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.9Gi       4.0Gi       580Mi       8.4Gi        11Gi
Swap:          8.0Gi       879Mi       7.1Gi
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
    

Angular CLI: 16.1.7
Node: 18.17.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.1.8
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1601.7
@angular-devkit/build-angular   16.1.7
@angular-devkit/core            16.1.7
@angular-devkit/schematics      16.1.7
@angular/cdk                    16.1.7
@angular/cli                    16.1.7
@angular/material               16.1.7
@schematics/angular             16.1.7
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.55s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.40s.
```
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001519
Installed version:  1.0.30001519
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/16.1.8/angular-webpack/d5457f9e96b7f5fee0cc6d0e7f99da8661528d5d.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/16.1.8/angular-webpack/d5457f9e96b7f5fee0cc6d0e7f99da8661528d5d/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 3824.496895 ms
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
  ./src/main.ts + 191 modules [943] 4.77 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 104 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [332] 104 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 8:0-605:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1205 ms (resolving: 233 ms, restoring: 0 ms, integration: 0 ms, building: 972 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 299 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 299 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css...(truncated) [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1624 ms (resolving: 67 ms, restoring: 0 ms, integration: 0 ms, building: 1557 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    12858 ms (resolving: 184 ms, restoring: 0 ms, integration: 0 ms, building: 12674 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.608416 ms
<t> runtime requirements.chunks: 0.753207 ms
<t> runtime requirements.entries: 2.15454 ms
<t> runtime requirements.modules: 0.114496 ms
<t> runtime requirements.chunks: 0.251648 ms
<t> runtime requirements.entries: 0.83239 ms
<t> finish module profiles: 11.612633 ms
<t> compute affected modules: 0.256259 ms
<t> finish modules: 23.862638 ms
<t> report dependency errors and warnings: 12.807802 ms
<t> optimize dependencies: 35.295837 ms
<t> create chunks: 11.370556 ms
<t> compute affected modules with chunk graph: 0.129838 ms
<t> optimize: 55.768256 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 16.678826 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 778.357929 ms
<t> runtime requirements.modules: 0.132804 ms
<t> runtime requirements.chunks: 0.115422 ms
<t> runtime requirements.entries: 0.499461 ms
<t> runtime requirements: 0.97624 ms
<t> hashing: initialize hash: 0.010664 ms
<t> hashing: hash warnings: 0.004062 ms
<t> hashing: sort chunks: 0.100636 ms
<t> hashing: hash runtime modules: 1.096939 ms
<t> hashing: hash chunks: 1.440192 ms
<t> hashing: hash digest: 0.042785 ms
<t> hashing: process full hash modules: 0.147052 ms
<t> hashing: 3.431347 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.066649 ms
<t> module assets: 0.311995 ms
<t> create chunk assets: 4.985258 ms
<t> process assets: 15716.007305 ms

LOG from webpack.Compiler
<t> make hook: 12905.235602 ms
<t> finish make hook: 0.141209 ms
<t> finish compilation: 48.645977 ms
<t> seal compilation: 16625.553872 ms
<t> afterCompile hook: 0.168169 ms
<t> emitAssets: 4.907548 ms
<t> emitRecords: 0.063546 ms
<t> done hook: 356.621589 ms
<t> beginIdle: 0.948351 ms

LOG from webpack.Compilation.ModuleProfile
     | 37 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 48 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     | 45 ms (parallelism 5.2) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 124 ms (parallelism 4.7) resolve to new modules > ./src/main.ts
     | 106 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2022/localize.mjs
     | 99 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     | 99 ms (parallelism 11.2) resolve to new modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     | 38 ms (parallelism 32.7) resolve to new modules > ./node_modules/@angular/router/fesm2022/router.mjs
     | 94 ms (parallelism 44.6) resolve to new modules > ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
    1167 ms resolve to new modules
     | 91 ms (parallelism 11.1) resolve to existing modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
    112 ms resolve to existing modules
<i>  |  | 283 ms (parallelism 5.5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 283 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
     |  | 61 ms (parallelism 4.3) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 61 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 364 ms (parallelism 34.8) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 364 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 197 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2022/init.mjs
     |  | 122 ms (parallelism 12.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
     |  | 137 ms (parallelism 12.8) build modules > ./node_modules/@angular/core/fesm2022/core.mjs
     |  | 122 ms (parallelism 12.2) build modules > ./node_modules/@angular/platform-browser/fesm2022/animations.mjs
     |  | 125 ms (parallelism 14) build modules > ./node_modules/@angular/common/fesm2022/http.mjs
     |  | 32 ms (parallelism 34.9) build modules > ./node_modules/@angular/service-worker/fesm2022/service-worker.mjs
     |  | 32 ms (parallelism 35.5) build modules > ./node_modules/@angular/forms/fesm2022/forms.mjs
     |  | 69 ms (parallelism 46.9) build modules > ./node_modules/@angular/material/fesm2022/checkbox.mjs
     |  | 69 ms (parallelism 46.9) build modules > ./node_modules/@angular/material/fesm2022/button.mjs
     |  | 69 ms (parallelism 46.9) build modules > ./node_modules/@angular/material/fesm2022/input.mjs
     |  | 69 ms (parallelism 46.9) build modules > ./node_modules/@angular/material/fesm2022/autocomplete.mjs
     |  | 71 ms (parallelism 46.6) build modules > ./node_modules/@angular/material/fesm2022/datepicker.mjs
     |  | 70 ms (parallelism 46.9) build modules > ./node_modules/@angular/material/fesm2022/form-field.mjs
     |  | 69 ms (parallelism 46.9) build modules > ./node_modules/@angular/material/fesm2022/radio.mjs
     |  | 72 ms (parallelism 46.5) build modules > ./node_modules/@angular/material/fesm2022/select.mjs
     |  | 70 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/slider.mjs
     |  | 70 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/slide-toggle.mjs
     |  | 72 ms (parallelism 46.5) build modules > ./node_modules/@angular/material/fesm2022/sidenav.mjs
     |  | 73 ms (parallelism 46.4) build modules > ./node_modules/@angular/material/fesm2022/menu.mjs
     |  | 74 ms (parallelism 46.1) build modules > ./node_modules/@angular/material/fesm2022/list.mjs
     |  | 70 ms (parallelism 46.8) build modules > ./node_modules/@angular/material/fesm2022/toolbar.mjs
     |  | 72 ms (parallelism 46.5) build modules > ./node_modules/@angular/material/fesm2022/grid-list.mjs
     |  | 73 ms (parallelism 46.3) build modules > ./node_modules/@angular/material/fesm2022/card.mjs
     |  | 73 ms (parallelism 46.4) build modules > ./node_modules/@angular/material/fesm2022/stepper.mjs
     |  | 75 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/tabs.mjs
     |  | 73 ms (parallelism 46.3) build modules > ./node_modules/@angular/material/fesm2022/expansion.mjs
     |  | 73 ms (parallelism 46.3) build modules > ./node_modules/@angular/material/fesm2022/button-toggle.mjs
     |  | 75 ms (parallelism 46) build modules > ./node_modules/@angular/material/fesm2022/chips.mjs
     |  | 73 ms (parallelism 46.3) build modules > ./node_modules/@angular/material/fesm2022/icon.mjs
     |  | 74 ms (parallelism 46.1) build modules > ./node_modules/@angular/material/fesm2022/progress-spinner.mjs
     |  | 75 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/progress-bar.mjs
     |  | 76 ms (parallelism 45.8) build modules > ./node_modules/@angular/material/fesm2022/dialog.mjs
     |  | 75 ms (parallelism 45.9) build modules > ./node_modules/@angular/material/fesm2022/tooltip.mjs
     |  | 76 ms (parallelism 45.8) build modules > ./node_modules/@angular/material/fesm2022/snack-bar.mjs
     |  | 76 ms (parallelism 45.7) build modules > ./node_modules/@angular/material/fesm2022/table.mjs
     |  | 76 ms (parallelism 45.7) build modules > ./node_modules/@angular/material/fesm2022/sort.mjs
     |  | 76 ms (parallelism 45.7) build modules > ./node_modules/@angular/material/fesm2022/paginator.mjs
     |  | 77 ms (parallelism 45.5) build modules > ./node_modules/@angular/material/fesm2022/core.mjs
     |  | 87 ms (parallelism 42.2) build modules > ./node_modules/@angular/common/fesm2022/common.mjs
     |  | 85 ms (parallelism 43.4) build modules > ./node_modules/@angular/router/fesm2022/router.mjs
     |  | 86 ms (parallelism 42.7) build modules > ./node_modules/@angular/animations/fesm2022/browser.mjs
     |  | 85 ms (parallelism 43.4) build modules > ./node_modules/@angular/animations/fesm2022/animations.mjs
<i>  | 3626 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 162 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 85 ms (parallelism 43.4) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 85 ms (parallelism 43.5) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2140 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 343 ms (parallelism 35.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 343 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 273 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 96 ms (parallelism 11.1) build modules > ./src/app/app.component.ts
     |  | 116 ms (parallelism 12.2) build modules > ./src/app/material/material.module.ts
     |  | 86 ms (parallelism 40.8) build modules > ./src/app/news.service.ts
     |  | 86 ms (parallelism 40.8) build modules > ./src/app/quiz.service.ts
     |  | 85 ms (parallelism 42) build modules > ./src/app/menu/menu.component.ts
<i>  | 962 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 7785 ms build modules
+ 117 hidden lines

LOG from webpack.ResolverCachePlugin
    31% really resolved (879 real resolves with 0 cached but invalid, 1967 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.565612 ms
<t> figure out provided exports: 13.620346 ms
    95% of exports of modules have been determined (15 no declared exports, 313 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 4 additional calculations due to dependencies)
<t> store provided exports into cache: 2.077538 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 12.636241 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 11.714318 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.483241 ms
<t> trace exports usage in graph: 22.463065 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 7.369341 ms
<t> visitModules: visiting: 8.69695 ms
    443 queue items processed (199 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 9.437479 ms
<t> connectChunkGroups: 0.161519 ms
<t> cleanup: 0.052348 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.047949 ms
<t> modules: 3.725699 ms
<t> queue: 0.004591 ms
<t> maxSize: 0.031006 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 1.807531 ms
<t> sort relevant modules: 0.154423 ms
<t> find modules to concatenate: 20.044361 ms
<t> sort concat configurations: 0.068755 ms
<t> create concatenated modules: 13.333318 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 249.547802 ms
<t> optimize asset: polyfills.js: 737.172393 ms
<t> optimize asset: main.js: 14202.062048 ms
<t> optimize js assets: 14346.940359 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 26.675066 ms
<t> optimize css assets: 36.500165 ms

LOG from webpack.FileSystemInfo
    1195 new snapshots created
    0% root snapshot uncached (0 / 1967)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1040 timestamps 54 hashes 54 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 82% (5104/6253) entries shared via 12 shared snapshots (805 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 86% (3829/4436) entries shared via 246 shared snapshots (742 times referenced)
    Managed items info in cache: 158 items
    Managed items snapshot optimization: 27% (555/2042) entries shared via 31 shared snapshots (99 times referenced)
    Managed files snapshot optimization: 77% (4914/6388) entries shared via 256 shared snapshots (975 times referenced)
    Managed missing snapshot optimization: 85% (5532/6546) entries shared via 292 shared snapshots (1023 times referenced)

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

2023-08-05 09:59:00: webpack 5.86.0 compiled in 33364 ms (6af8c452a11bf42f)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 946.441036 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 47.929895 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1628 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 2.534928 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs': 2.366805 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022/core.mjs': 2.370112 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2022/forms.mjs': 2.041598 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|fullySpecified=|false|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2022|request=|rxjs': 1.184425 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/checkbox.mjs': 1.067193 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/datepicker.mjs': 4.042008 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/form-field.mjs': 1.559417 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/select.mjs': 1.026428 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/sidenav.mjs': 1.096344 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/menu.mjs': 2.412261 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/list.mjs': 1.28543 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/stepper.mjs': 3.086527 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tabs.mjs': 1.969401 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/chips.mjs': 1.583186 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/dialog.mjs': 1.122595 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2022/tooltip.mjs': 5.817635 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2022/common.mjs': 1.156988 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2022/router.mjs': 1.676776 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.265944 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2022/table.mjs': 4.025064 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/operators/exhaust.js': 3.593017 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/tools/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|af4c99fd5a113c99|runtime': 20.602569 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 11.101792 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 371.855425 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1628 items, 1 files, 73 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 602.14 kB |               140.20 kB
styles.css          | styles        | 262.89 kB |                17.18 kB
polyfills.js        | polyfills     |  33.00 kB |                10.62 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 898.92 kB |               168.50 kB

Build at: 2023-08-05T13:59:02.896Z - Hash: 6af8c452a11bf42f - Time: 36235ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 352:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 398.92 kB with a total of 898.92 kB.


Done in 38.16s.
```
Sat Aug  5 09:59:31 AM EDT 2023
yarn version v1.22.19
info Current version: 0.0.431
info New version: 0.0.432
Done in 0.14s.
