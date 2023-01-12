Thu Jan 12 06:22:42 PM EST 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.3Gi       1.4Gi       1.1Gi       6.6Gi       6.5Gi
Swap:          8.0Gi       6.2Gi       1.8Gi
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
    

Angular CLI: 15.1.0
Node: 18.13.0
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.1.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1501.0
@angular-devkit/build-angular   15.1.0
@angular-devkit/core            15.1.0
@angular-devkit/schematics      15.1.0
@schematics/angular             15.1.0
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.80s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.42s.
```
Latest version:     1.0.30001443
Installed version:  1.0.30001442
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001443
Installed version:  1.0.30001443
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.1.1/angular-webpack/ad703a4e6e8b581b662e0f3ad7f193c85743e03f.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.1.1/angular-webpack/ad703a4e6e8b581b662e0f3ad7f193c85743e03f/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 15.43592 ms
    [IdleFileCachePlugin] Initial cache was generated and cache will be persisted in 5s.
✔ Browser application bundle generation complete.
    [webpack.cache.PackFileCacheStrategy] Pack got invalid because of write to: ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|@angular/localize/init
asset main.js 599 KiB {179} [emitted] (name: main)
asset styles.css 268 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 600 KiB = runtime.js 906 bytes main.js 599 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 269 KiB = runtime.js 906 bytes styles.css 268 KiB
chunk {179} (runtime: runtime) main.js (main) 5.45 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 838 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 192 modules [183] 4.63 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    2069 ms (resolving: 59 ms, restoring: 1 ms, integration: 0 ms, building: 2009 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 319 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 319 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [294] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2345 ms (resolving: 60 ms, restoring: 1 ms, integration: 0 ms, building: 2284 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [774] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    20030 ms (resolving: 60 ms, restoring: 1 ms, integration: 0 ms, building: 19969 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 1.063184 ms
<t> runtime requirements.chunks: 0.689372 ms
<t> runtime requirements.entries: 2.247822 ms
<t> runtime requirements.modules: 0.163991 ms
<t> runtime requirements.chunks: 0.330437 ms
<t> runtime requirements.entries: 1.554422 ms
<t> finish module profiles: 18.185015 ms
<t> compute affected modules: 0.347622 ms
<t> finish modules: 38.051073 ms
<t> report dependency errors and warnings: 17.623516 ms
<t> optimize dependencies: 43.450858 ms
<t> create chunks: 11.816619 ms
<t> compute affected modules with chunk graph: 0.190497 ms
<t> optimize: 79.589282 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 33.393958 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1294.668841 ms
<t> runtime requirements.modules: 0.154498 ms
<t> runtime requirements.chunks: 0.14947 ms
<t> runtime requirements.entries: 0.598169 ms
<t> runtime requirements: 1.171655 ms
<t> hashing: initialize hash: 0.011458 ms
<t> hashing: hash warnings: 0.004922 ms
<t> hashing: sort chunks: 0.130574 ms
<t> hashing: hash runtime modules: 1.344286 ms
<t> hashing: hash chunks: 1.727709 ms
<t> hashing: hash digest: 0.055531 ms
<t> hashing: process full hash modules: 0.198812 ms
<t> hashing: 4.196507 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.081669 ms
<t> module assets: 0.367553 ms
<t> create chunk assets: 6.361942 ms
<t> process assets: 11104.064137 ms

LOG from webpack.Compiler
<t> make hook: 20348.776093 ms
<t> finish make hook: 0.365011 ms
<t> finish compilation: 74.355498 ms
<t> seal compilation: 12582.396173 ms
<t> afterCompile hook: 0.271728 ms
<t> emitAssets: 8.273994 ms
<t> emitRecords: 0.105254 ms
<t> done hook: 575.270643 ms
<t> beginIdle: 1.148242 ms

LOG from webpack.Compilation.ModuleProfile
     | 112 ms (parallelism 3.6) resolve to new modules > ./src/main.ts
     | 120 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 130 ms (parallelism 12.6) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     | 130 ms (parallelism 13.3) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 130 ms (parallelism 13.3) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 31 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/button.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/input.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/select.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/list.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/card.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/table.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     | 32 ms (parallelism 55.5) resolve to new modules > ./node_modules/@angular/material/fesm2020/core.mjs
     | 35 ms (parallelism 53.7) resolve to new modules > ./node_modules/@angular/common/fesm2020/common.mjs
     | 66 ms (parallelism 41.3) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 35 ms (parallelism 53.6) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 35 ms (parallelism 53.6) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 37 ms (parallelism 52.3) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i> 2363 ms resolve to new modules
<i>  |  | 347 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 133 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 175 ms (parallelism 13.6) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 151 ms (parallelism 13.1) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 144 ms (parallelism 13.1) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 163 ms (parallelism 13.9) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 74 ms (parallelism 41.7) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 53 ms (parallelism 45.4) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 62 ms (parallelism 45.3) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 134 ms (parallelism 39.9) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 126 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 127 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 127 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 129 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 138 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 135 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 130 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 128 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 136 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 139 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 140 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 140 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 142 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 140 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 139 ms (parallelism 39.7) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 141 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 146 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 143 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 142 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 144 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 145 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 143 ms (parallelism 39.5) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 141 ms (parallelism 39.6) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 143 ms (parallelism 39.4) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 146 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 146 ms (parallelism 39.1) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 145 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 145 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 147 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 147 ms (parallelism 39.2) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 147 ms (parallelism 39.3) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 146 ms (parallelism 40) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 137 ms (parallelism 40.7) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 137 ms (parallelism 40.8) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<w>  | 6433 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 334 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 137 ms (parallelism 40.8) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 136 ms (parallelism 40.8) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 3038 ms build modules > 229 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 388 ms (parallelism 5.9) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 388 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 586 ms (parallelism 34.1) build modules > ./src/styles.scss?ngGlobalStyle
<w>  | 586 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<w>  |  | 581 ms (parallelism 34.2) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<w>  | 581 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 50 ms (parallelism 7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 50 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<w>  |  | 529 ms (parallelism 5.4) build modules > ./src/main.ts
     |  | 129 ms (parallelism 13.3) build modules > ./src/app/app-routing.module.ts
     |  | 116 ms (parallelism 13.1) build modules > ./src/app/app.component.ts
     |  | 115 ms (parallelism 13.1) build modules > ./src/app/prompt-update.service.ts
     |  | 116 ms (parallelism 13.1) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 55 ms (parallelism 15.1) build modules > ./src/app/material/material.module.ts
     |  | 37 ms (parallelism 52.5) build modules > ./src/app/loading/loading.component.ts
     |  | 43 ms (parallelism 52) build modules > ./src/app/home/home.component.ts
     |  | 43 ms (parallelism 52) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 43 ms (parallelism 52) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 43 ms (parallelism 52) build modules > ./src/app/news/news.component.ts
     |  | 43 ms (parallelism 52) build modules > ./src/app/playground/playground.component.ts
     |  | 43 ms (parallelism 52) build modules > ./src/app/quiz/quiz.component.ts
<w>  | 1492 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 12572 ms build modules
+ 124 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (889 real resolves with 0 cached but invalid, 1922 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 2.257951 ms
<t> figure out provided exports: 16.457105 ms
    95% of exports of modules have been determined (15 no declared exports, 312 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 6 additional calculations due to dependencies)
<t> store provided exports into cache: 9.988708 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 20.561523 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 18.029378 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.523059 ms
<t> trace exports usage in graph: 24.087171 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 6.253668 ms
<t> visitModules: visiting: 7.635089 ms
    444 queue items processed (201 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 8.850207 ms
<t> connectChunkGroups: 0.145261 ms
<t> cleanup: 0.058054 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.07695 ms
<t> modules: 5.708268 ms
<t> queue: 0.008631 ms
<t> maxSize: 0.060496 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.604646 ms
<t> sort relevant modules: 0.36628 ms
<t> find modules to concatenate: 27.931992 ms
<t> sort concat configurations: 0.073554 ms
<t> create concatenated modules: 17.869207 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 437.320496 ms
<t> optimize asset: polyfills.js: 1136.616235 ms
<t> optimize asset: main.js: 9070.871256 ms
<t> optimize js assets: 9279.074887 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 51.4275 ms
<t> optimize css assets: 71.972843 ms

LOG from webpack.FileSystemInfo
    1204 new snapshots created
    0% root snapshot uncached (0 / 1922)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1091 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5142/6319) entries shared via 12 shared snapshots (810 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4027/4636) entries shared via 258 shared snapshots (785 times referenced)
    Managed items info in cache: 209 items
    Managed items snapshot optimization: 32% (687/2135) entries shared via 37 shared snapshots (117 times referenced)
    Managed files snapshot optimization: 77% (4952/6430) entries shared via 267 shared snapshots (983 times referenced)
    Managed missing snapshot optimization: 83% (5758/6922) entries shared via 336 shared snapshots (916 times referenced)

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

2023-01-12 18:24:10: webpack 5.75.0 compiled in 41588 ms (070eebd352f86c49)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 1239.602034 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 47.567603 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1635 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.193493 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.748157 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle|build time': 1.340909 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 4.416083 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 1.380662 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 3.136057 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/news/news.component.ts': 1.182968 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/app/quiz/quiz.component.ts': 1.085792 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/animations/fesm2020/browser.mjs': 2.275004 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 2.045698 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/autocomplete.mjs': 1.030027 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 5.456944 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 4.47861 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 4.98166 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/slider.mjs': 1.097437 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.309118 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.432883 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 2.71588 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 5.822688 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 3.245389 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.807518 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/dialog.mjs': 3.819604 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.353265 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 4.957035 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 1.173098 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.610321 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/overlay.mjs': 1.419444 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/scrolling.mjs': 1.510047 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 2.001449 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js': 8.318367 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle|build time': 1.400378 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'FlagDependencyExportsPlugin|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 6.600326 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|4ede36a189f60ed2|runtime': 46.871738 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs|df19c1f16536234e|runtime': 7.5793 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 32.488998 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 800.930438 ms
    [webpack.cache.PackFileCacheStrategy] Stored pack (1635 items, 1 files, 81 MiB)
✔ Browser application bundle generation complete.
- Copying assets...
✔ Copying assets complete.
- Generating index html...
✔ Index html generation complete.
- Generating service worker...
✔ Service worker generation complete.

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 598.76 kB |               139.37 kB
styles.css          | styles        | 268.29 kB |                17.75 kB
polyfills.js        | polyfills     |  33.07 kB |                10.67 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 901.01 kB |               168.29 kB

Build at: 2023-01-12T23:24:14.343Z - Hash: 070eebd352f86c49 - Time: 45362ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/@angular-devkit/build-angular/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 401.01 kB with a total of 901.01 kB.


Done in 48.57s.
```
