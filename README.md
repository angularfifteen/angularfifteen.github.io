Fri Dec  9 09:01:43 PM EST 2022

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.2Gi       1.5Gi       1.3Gi       7.6Gi       7.4Gi
Swap:          8.0Gi       128Mi       7.9Gi
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
    

Angular CLI: 15.0.3
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.3
... animations, cli, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.3
@angular-devkit/build-angular   15.0.3
@angular-devkit/core            15.0.3
@angular-devkit/schematics      15.0.3
@angular/cdk                    15.0.2
@angular/material               15.0.2
@schematics/angular             15.0.3
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.75s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.42s.
```
Latest version:     1.0.30001439
Installed version:  1.0.30001436
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
Cleaning package.json dependencies from caniuse-lite
$ yarn remove -W caniuse-lite
caniuse-lite has been successfully updated

No target browser changes
```bash
Latest version:     1.0.30001439
Installed version:  1.0.30001439
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
- Generating browser application bundles (phase: setup)...
    [webpack.cache.PackFileCacheStrategy] No pack exists at /home/kushal/src/angular/angularfifteen/.angular/cache/15.0.3/angular-webpack/5addbc935b32fe251960c82b53d6261c76ef6450.pack: Error: ENOENT: no such file or directory, stat '/home/kushal/src/angular/angularfifteen/.angular/cache/15.0.3/angular-webpack/5addbc935b32fe251960c82b53d6261c76ef6450/index.pack'
<t> [webpack.cache.PackFileCacheStrategy] restore cache container: 10.775809 ms
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
    1563 ms (resolving: 239 ms, restoring: 0 ms, integration: 0 ms, building: 1324 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 308 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 308 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    2197 ms (resolving: 57 ms, restoring: 0 ms, integration: 0 ms, building: 2140 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    16360 ms (resolving: 169 ms, restoring: 2 ms, integration: 0 ms, building: 16189 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.621771 ms
<t> runtime requirements.chunks: 0.633992 ms
<t> runtime requirements.entries: 2.090135 ms
<t> runtime requirements.modules: 0.037867 ms
<t> runtime requirements.chunks: 0.021369 ms
<t> runtime requirements.entries: 0.221793 ms
<t> finish module profiles: 15.037375 ms
<t> compute affected modules: 0.006434 ms
<t> finish modules: 35.403029 ms
<t> report dependency errors and warnings: 13.923648 ms
<t> optimize dependencies: 32.809784 ms
<t> create chunks: 8.6867 ms
<t> compute affected modules with chunk graph: 0.005514 ms
<t> optimize: 63.523207 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 42.695814 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1184.690488 ms
<t> runtime requirements.modules: 0.133605 ms
<t> runtime requirements.chunks: 0.120488 ms
<t> runtime requirements.entries: 0.584758 ms
<t> runtime requirements: 1.075213 ms
<t> hashing: initialize hash: 0.00783 ms
<t> hashing: hash warnings: 0.004239 ms
<t> hashing: sort chunks: 0.064835 ms
<t> hashing: hash runtime modules: 1.315364 ms
<t> hashing: hash chunks: 1.61544 ms
<t> hashing: hash digest: 0.023827 ms
<t> hashing: process full hash modules: 0.199423 ms
<t> hashing: 3.476442 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.086299 ms
<t> module assets: 0.194726 ms
<t> create chunk assets: 4.255823 ms
<t> process assets: 9915.22417 ms

LOG from webpack.Compiler
<t> make hook: 16444.537085 ms
<t> finish make hook: 0.131008 ms
<t> finish compilation: 64.424528 ms
<t> seal compilation: 11259.279474 ms
<t> afterCompile hook: 0.227443 ms
<t> emitAssets: 5.2871 ms
<t> emitRecords: 0.099662 ms
<t> done hook: 488.209372 ms
<t> beginIdle: 0.964043 ms

LOG from webpack.Compilation.ModuleProfile
     | 34 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
     | 49 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 47 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 178 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 64 ms (parallelism 4.9) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 107 ms (parallelism 12.8) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     | 106 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 106 ms (parallelism 13) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/button.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/input.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/select.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/list.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/card.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     | 31 ms (parallelism 54.8) resolve to new modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     | 31 ms (parallelism 54.7) resolve to new modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     | 31 ms (parallelism 54.7) resolve to new modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     | 31 ms (parallelism 54.7) resolve to new modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     | 31 ms (parallelism 54.7) resolve to new modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     | 31 ms (parallelism 54.7) resolve to new modules > ./node_modules/@angular/material/fesm2020/table.mjs
     | 31 ms (parallelism 54.7) resolve to new modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     | 31 ms (parallelism 54.7) resolve to new modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     | 31 ms (parallelism 54.7) resolve to new modules > ./node_modules/@angular/material/fesm2020/core.mjs
     | 32 ms (parallelism 53.3) resolve to new modules > ./node_modules/rxjs/dist/esm/operators/index.js
     | 51 ms (parallelism 44.3) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 32 ms (parallelism 53.3) resolve to new modules > ./node_modules/rxjs/dist/esm/index.js
     | 34 ms (parallelism 52.7) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i> 2086 ms resolve to new modules
<i>  |  | 381 ms (parallelism 5.6) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 381 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 481 ms (parallelism 33.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 481 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 75 ms (parallelism 5) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 75 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 478 ms (parallelism 33.8) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 478 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 244 ms (parallelism 5.8) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 109 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 110 ms (parallelism 13) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 146 ms (parallelism 12.6) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 110 ms (parallelism 13) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 134 ms (parallelism 13.5) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 57 ms (parallelism 45.4) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 49 ms (parallelism 45) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 50 ms (parallelism 45) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 90 ms (parallelism 40.6) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 87 ms (parallelism 41.1) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 86 ms (parallelism 41.1) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 86 ms (parallelism 41.1) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 91 ms (parallelism 40.7) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 86 ms (parallelism 41.1) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 88 ms (parallelism 41) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 88 ms (parallelism 41) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 88 ms (parallelism 41) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 89 ms (parallelism 40.9) build modules > ./node_modules/@angular/material/fesm2020/slider.mjs
     |  | 88 ms (parallelism 41) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 92 ms (parallelism 40.7) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 90 ms (parallelism 40.9) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 88 ms (parallelism 41) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 89 ms (parallelism 40.9) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 93 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 92 ms (parallelism 40.7) build modules > ./node_modules/@angular/material/fesm2020/card.mjs
     |  | 92 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 94 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 92 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 92 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 95 ms (parallelism 40.3) build modules > ./node_modules/@angular/material/fesm2020/chips.mjs
     |  | 93 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 92 ms (parallelism 40.6) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 93 ms (parallelism 40.5) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 95 ms (parallelism 40.2) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 96 ms (parallelism 40) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 95 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 97 ms (parallelism 39.9) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 96 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 96 ms (parallelism 40.1) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 97 ms (parallelism 39.8) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 111 ms (parallelism 38.7) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 105 ms (parallelism 38.3) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 106 ms (parallelism 37.7) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i>  | 4455 ms build modules > 62 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 221 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 106 ms (parallelism 37.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 105 ms (parallelism 38.4) build modules > ./node_modules/rxjs/dist/esm/index.js
<i>  | 2558 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 346 ms (parallelism 5.3) build modules > ./src/main.ts
     |  | 105 ms (parallelism 13) build modules > ./src/app/app.component.ts
     |  | 118 ms (parallelism 12.9) build modules > ./src/app/app-routing.module.ts
     |  | 101 ms (parallelism 13) build modules > ./src/app/prompt-update.service.ts
     |  | 101 ms (parallelism 13) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 44 ms (parallelism 12.1) build modules > ./src/app/material/material.module.ts
     |  | 32 ms (parallelism 54.2) build modules > ./src/app/loading.service.ts
     |  | 34 ms (parallelism 52.8) build modules > ./src/app/loading/loading.component.ts
     |  | 39 ms (parallelism 53.3) build modules > ./src/app/home/home.component.ts
     |  | 39 ms (parallelism 53.3) build modules > ./src/app/key-industries/key-industries.component.ts
     |  | 39 ms (parallelism 53.3) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 39 ms (parallelism 53.3) build modules > ./src/app/news/news.component.ts
     |  | 39 ms (parallelism 53.3) build modules > ./src/app/playground/playground.component.ts
     |  | 39 ms (parallelism 53.3) build modules > ./src/app/quiz/quiz.component.ts
     |  | 32 ms (parallelism 36.1) build modules > ./src/app/quiz.service.ts
     |  | 32 ms (parallelism 36.1) build modules > ./src/app/news.service.ts
     |  | 32 ms (parallelism 36.7) build modules > ./src/app/menu/menu.component.ts
<i>  | 1222 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<w> 9653 ms build modules
+ 105 hidden lines

LOG from webpack.ResolverCachePlugin
    32% really resolved (913 real resolves with 0 cached but invalid, 1966 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.741706 ms
<t> figure out provided exports: 22.193831 ms
    96% of exports of modules have been determined (15 no declared exports, 329 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 6 additional calculations due to dependencies)
<t> store provided exports into cache: 2.936497 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.735426 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 12.822212 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.482173 ms
<t> trace exports usage in graph: 18.954107 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 5.247573 ms
<t> visitModules: visiting: 6.416956 ms
    446 queue items processed (202 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 6.518618 ms
<t> connectChunkGroups: 0.005083 ms
<t> cleanup: 0.003757 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.054754 ms
<t> modules: 3.871887 ms
<t> queue: 0.00721 ms
<t> maxSize: 0.045489 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.513171 ms
<t> sort relevant modules: 0.262069 ms
<t> find modules to concatenate: 20.460441 ms
<t> sort concat configurations: 0.04982 ms
<t> create concatenated modules: 13.829216 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 386.230699 ms
<t> optimize asset: polyfills.js: 970.316195 ms
<t> optimize asset: main.js: 7772.096325 ms
<t> optimize js assets: 7970.281389 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 33.370532 ms
<t> optimize css assets: 67.226029 ms

LOG from webpack.FileSystemInfo
    1245 new snapshots created
    0% root snapshot uncached (0 / 1966)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1095 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5290/6509) entries shared via 12 shared snapshots (834 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4070/4667) entries shared via 258 shared snapshots (795 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 33% (741/2247) entries shared via 41 shared snapshots (134 times referenced)
    Managed files snapshot optimization: 76% (4963/6545) entries shared via 269 shared snapshots (989 times referenced)
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

2022-12-09 21:02:44: webpack 5.75.0 compiled in 34697 ms (70ce82e25eb83f36)
    [webpack.cache.PackFileCacheStrategy] Storing pack...
    [webpack.cache.PackFileCacheStrategy] Capturing build dependencies... (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/, /home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js, /home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js, /home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js, /home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js, /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js)
<t> [webpack.cache.PackFileCacheStrategy] resolve build dependencies: 879.052976 ms
<t> [webpack.cache.PackFileCacheStrategy] snapshot build dependencies: 42.584974 ms
    [webpack.cache.PackFileCacheStrategy] Captured build dependencies
    [webpack.cache.PackFileCacheStrategy] 1692 fresh items in cache put into pack 0
    [webpack.cache.PackFileCacheStrategy] Serialization of 'ResolverCachePlugin|normal|default|dependencyType=|esm|path=|/home/kushal/src/angular/angularfifteen|request=|/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.080914 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/mini-css-extract-plugin/dist/loader.js!/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!/home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle': 3.272253 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle': 1.294589 ms
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
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!/home/kushal/src/angular/angularfifteen/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle|build time': 1.234703 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs': 2.41828 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/core/fesm2020/core.mjs': 3.246316 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/forms/fesm2020/forms.mjs': 2.22455 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/animations/fesm2020/browser.mjs': 1.857168 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/button.mjs': 5.063677 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/datepicker.mjs': 3.436985 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/form-field.mjs': 2.572235 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/select.mjs': 1.215936 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/menu.mjs': 1.098719 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/sidenav.mjs': 1.175038 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/list.mjs': 1.262675 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/stepper.mjs': 3.6865 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/tabs.mjs': 2.542604 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/chips.mjs': 1.710109 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/material/fesm2020/dialog.mjs': 2.893575 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/common/fesm2020/common.mjs': 1.181925 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/operators/index.js': 6.865011 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/router/fesm2020/router.mjs': 1.994505 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/index.js': 1.388017 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/cdk/fesm2020/table.mjs': 1.079606 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/modules|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/rxjs/dist/esm/internal/observable/combineLatest.js': 4.427897 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/index.js!/home/kushal/src/angular/angularfifteen/src/main.ts|bab2709da9a589d5|runtime': 28.983022 ms
    [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/codeGeneration|javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!/home/kushal/src/angular/angularfifteen/node_modules/@angular/localize/fesm2020/init.mjs|df19c1f16536234e|runtime': 4.72632 ms
<i> [webpack.cache.PackFileCacheStrategy] Serialization of 'Compilation/assets|chunk179': 20.600175 ms
<t> [webpack.cache.PackFileCacheStrategy] store pack: 626.5317 ms
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

Build at: 2022-12-10T02:02:47.106Z - Hash: 70ce82e25eb83f36 - Time: 37684ms

./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle - Warning: Module Warning (from ./node_modules/sass-loader/dist/cjs.js):
The same color styles are generated multiple times. Read more about how style duplication can be avoided in a dedicated guide. https://github.com/angular/components/blob/main/guides/duplicate-theming-styles.md

node_modules/@angular/material/core/theming/_theming.scss 351:7          private-check-duplicate-theme-styles()
node_modules/@angular/material/legacy-core/theming/_all-theme.scss 43:3  all-legacy-component-themes()
src/styles.scss 67:1                                                     root stylesheet


Warning: bundle initial exceeded maximum budget. Budget 500.00 kB was not met by 394.34 kB with a total of 894.34 kB.


Done in 39.76s.
```
Fri Dec  9 09:03:24 PM EST 2022
yarn version v1.22.19
info Current version: 0.0.113
info New version: 0.0.114
Done in 0.13s.
