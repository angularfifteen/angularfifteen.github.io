Thu Nov 17 11:14:45 AM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       6.7Gi       673Mi       1.0Gi       7.9Gi       7.2Gi
Swap:          8.0Gi        39Mi       8.0Gi
System Storage
652M	.
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
    

Angular CLI: 15.0.0
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router, service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.0
@angular-devkit/build-angular   15.0.0
@angular-devkit/core            15.0.0
@angular-devkit/schematics      15.0.0
@schematics/angular             15.0.0
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 0.67s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.32s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
asset main.js 584 KiB {179} [emitted] (name: main)
asset styles.css 286 KiB {532} [emitted] (name: styles)
asset polyfills.js 33.1 KiB {429} [emitted] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [emitted]
asset runtime.js 906 bytes {666} [emitted] (name: runtime)
Entrypoint main 585 KiB = runtime.js 906 bytes main.js 584 KiB
Entrypoint polyfills 34 KiB = runtime.js 906 bytes polyfills.js 33.1 KiB
Entrypoint styles 286 KiB = runtime.js 906 bytes styles.css 286 KiB
chunk {179} (runtime: runtime) main.js (main) 5.55 MiB [initial] [rendered]
  ./node_modules/@angular/localize/fesm2020/init.mjs + 2 modules [310] 857 KiB {179} [built] [code generated]
    [no exports used]
    entry @angular/localize/init main
  ./src/main.ts + 207 modules [335] 4.71 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial] [rendered]
  ./node_modules/zone.js/fesm2015/zone.js [583] 106 KiB {429} [built] [code generated]
    [no exports used]
    Statement (ExpressionStatement) with side effects in source code at 15:0-612:93
    ModuleConcatenation bailout: Module is not an ECMAScript module
    entry zone.js polyfills
    1238 ms (resolving: 205 ms, restoring: 0 ms, integration: 0 ms, building: 1033 ms, storing: 0 ms)
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 320 KiB (css/mini-extract) [initial] [rendered]
  dependent modules 320 KiB [dependent] 2 modules
  ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle [183] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle styles
    1651 ms (resolving: 49 ms, restoring: 1 ms, integration: 0 ms, building: 1601 ms, storing: 0 ms)
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    17134 ms (resolving: 142 ms, restoring: 1 ms, integration: 0 ms, building: 16991 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry] [rendered]
  runtime modules 2.48 KiB 4 modules
  

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.690361 ms
<t> runtime requirements.chunks: 0.782521 ms
<t> runtime requirements.entries: 2.547749 ms
<t> runtime requirements.modules: 0.03435 ms
<t> runtime requirements.chunks: 0.022395 ms
<t> runtime requirements.entries: 0.222269 ms
<t> finish module profiles: 14.775639 ms
<t> compute affected modules: 0.004998 ms
<t> finish modules: 33.260804 ms
<t> report dependency errors and warnings: 19.028854 ms
<t> optimize dependencies: 33.28588 ms
<t> create chunks: 9.614414 ms
<t> compute affected modules with chunk graph: 0.006138 ms
<t> optimize: 65.194444 ms
    7 modules hashed, 0 from cache (0.02 variants per module in average)
<t> module hashing: 27.354317 ms
    100% code generated (7 generated, 0 from cache)
<t> code generation: 1327.474798 ms
<t> runtime requirements.modules: 0.182205 ms
<t> runtime requirements.chunks: 0.135799 ms
<t> runtime requirements.entries: 0.701178 ms
<t> runtime requirements: 1.570054 ms
<t> hashing: initialize hash: 0.011639 ms
<t> hashing: hash warnings: 0.004826 ms
<t> hashing: sort chunks: 0.134371 ms
<t> hashing: hash runtime modules: 1.490586 ms
<t> hashing: hash chunks: 1.959774 ms
<t> hashing: hash digest: 0.05865 ms
<t> hashing: process full hash modules: 0.241271 ms
<t> hashing: 4.675636 ms
    100% code generated (4 generated, 0 from cache)
<t> record hash: 0.092861 ms
<t> module assets: 0.349986 ms
<t> create chunk assets: 6.721835 ms
<t> process assets: 9484.665995 ms

LOG from webpack.Compiler
<t> make hook: 17201.314942 ms
<t> finish make hook: 0.163716 ms
<t> finish compilation: 67.119546 ms
<t> seal compilation: 10963.857729 ms
<t> afterCompile hook: 0.2031 ms
<t> emitAssets: 4.218057 ms
<t> emitRecords: 0.085449 ms
<t> done hook: 482.559267 ms
<t> beginIdle: 0.894458 ms

LOG from webpack.Compilation.ModuleProfile
     | 41 ms (parallelism 5.1) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     | 40 ms (parallelism 5.1) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
     | 117 ms (parallelism 5.1) resolve to new modules > ./src/main.ts
     | 55 ms (parallelism 4.1) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     | 112 ms (parallelism 13.6) resolve to new modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     | 104 ms (parallelism 13.9) resolve to new modules > ./src/app/material/material.module.ts
     | 123 ms (parallelism 13.8) resolve to new modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     | 123 ms (parallelism 13.8) resolve to new modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     | 30 ms (parallelism 12) resolve to new modules > ./src/app/loading.service.ts
     | 30 ms (parallelism 12) resolve to new modules > ./src/app/loading/loading.component.ts
     | 38 ms (parallelism 45.1) resolve to new modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     | 37 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-checkbox.mjs
     | 37 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-button.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-input.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-autocomplete.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-form-field.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-radio.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-select.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-slider.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-slide-toggle.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-menu.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-list.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-card.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-tabs.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-chips.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-progress-spinner.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-progress-bar.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-dialog.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-tooltip.mjs
     | 38 ms (parallelism 49.2) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-snack-bar.mjs
     | 38 ms (parallelism 49.1) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-table.mjs
     | 38 ms (parallelism 49.1) resolve to new modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     | 38 ms (parallelism 49.1) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-paginator.mjs
     | 38 ms (parallelism 49.1) resolve to new modules > ./node_modules/@angular/material/fesm2020/legacy-core.mjs
     | 38 ms (parallelism 49.1) resolve to new modules > ./node_modules/@angular/material/fesm2020/core.mjs
     | 66 ms (parallelism 41.7) resolve to new modules > ./node_modules/@angular/router/fesm2020/router.mjs
     | 50 ms (parallelism 46.7) resolve to new modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
<i> 2562 ms resolve to new modules
<i>  |  | 283 ms (parallelism 5.7) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<i>  | 283 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 408 ms (parallelism 41.6) build modules > ./src/styles.scss?ngGlobalStyle
<i>  | 408 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 49 ms (parallelism 5.1) build modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]!./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 49 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].rules[0].oneOf[0].use[2]
<i>  |  | 406 ms (parallelism 41.7) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<i>  | 406 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<i>  |  | 201 ms (parallelism 5.9) build modules > ./node_modules/@angular/localize/fesm2020/init.mjs
     |  | 154 ms (parallelism 4) build modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
     |  | 153 ms (parallelism 13.5) build modules > ./node_modules/@angular/core/fesm2020/core.mjs
     |  | 155 ms (parallelism 13.4) build modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     |  | 154 ms (parallelism 13.5) build modules > ./node_modules/@angular/platform-browser/fesm2020/animations.mjs
     |  | 148 ms (parallelism 15) build modules > ./node_modules/@angular/common/fesm2020/http.mjs
     |  | 75 ms (parallelism 39.4) build modules > ./node_modules/@angular/compiler/fesm2020/compiler.mjs
     |  | 51 ms (parallelism 46.3) build modules > ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs
     |  | 52 ms (parallelism 46.2) build modules > ./node_modules/@angular/forms/fesm2020/forms.mjs
     |  | 69 ms (parallelism 44.4) build modules > ./node_modules/@angular/animations/fesm2020/browser.mjs
     |  | 68 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-checkbox.mjs
     |  | 68 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-button.mjs
     |  | 68 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-input.mjs
     |  | 68 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-autocomplete.mjs
     |  | 72 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 70 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-form-field.mjs
     |  | 68 ms (parallelism 44.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-radio.mjs
     |  | 69 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-select.mjs
     |  | 70 ms (parallelism 44.3) build modules > ./node_modules/@angular/material/fesm2020/legacy-slider.mjs
     |  | 70 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-slide-toggle.mjs
     |  | 70 ms (parallelism 44.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-menu.mjs
     |  | 72 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 73 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2020/legacy-list.mjs
     |  | 73 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 72 ms (parallelism 44.1) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 73 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2020/legacy-card.mjs
     |  | 72 ms (parallelism 44) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 73 ms (parallelism 43.9) build modules > ./node_modules/@angular/material/fesm2020/legacy-tabs.mjs
     |  | 73 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 74 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 74 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2020/legacy-chips.mjs
     |  | 75 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 74 ms (parallelism 43.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-progress-spinner.mjs
     |  | 75 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-progress-bar.mjs
     |  | 74 ms (parallelism 43.7) build modules > ./node_modules/@angular/material/fesm2020/legacy-dialog.mjs
     |  | 74 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2020/legacy-tooltip.mjs
     |  | 75 ms (parallelism 43.6) build modules > ./node_modules/@angular/material/fesm2020/legacy-snack-bar.mjs
     |  | 76 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-table.mjs
     |  | 75 ms (parallelism 43.5) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 75 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-paginator.mjs
     |  | 75 ms (parallelism 43.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-core.mjs
     |  | 76 ms (parallelism 43.3) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 70 ms (parallelism 45) build modules > ./node_modules/@angular/router/fesm2020/router.mjs
     |  | 70 ms (parallelism 44.2) build modules > ./node_modules/@angular/common/fesm2020/common.mjs
     |  | 71 ms (parallelism 42.9) build modules > ./node_modules/@angular/animations/fesm2020/animations.mjs
     |  | 69 ms (parallelism 46) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 30 ms (parallelism 99.2) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 30 ms (parallelism 99) build modules > ./node_modules/@angular/cdk/fesm2020/table.mjs
<i>  | 4763 ms build modules > 81 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 172 ms (parallelism 6) build modules > ./node_modules/zone.js/fesm2015/zone.js
     |  | 72 ms (parallelism 42.6) build modules > ./node_modules/rxjs/dist/esm/operators/index.js
     |  | 72 ms (parallelism 42.6) build modules > ./node_modules/rxjs/dist/esm/index.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/buffer.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/bufferCount.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/bufferTime.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/bufferToggle.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/bufferWhen.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/catchError.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/combineAll.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/combineLatestAll.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/combineLatestWith.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/combineLatest.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/concat.js
     |  | 30 ms (parallelism 99.3) build modules > ./node_modules/rxjs/dist/esm/internal/operators/concatAll.js
     |  | 30 ms (parallelism 99.2) build modules > ./node_modules/rxjs/dist/esm/internal/operators/concatMap.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/concatMapTo.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/connect.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/concatWith.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/debounce.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/count.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/defaultIfEmpty.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/delay.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/delayWhen.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/dematerialize.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/distinct.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/distinctUntilKeyChanged.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/elementAt.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/endWith.js
     |  | 31 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/every.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/exhaust.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/exhaustAll.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/exhaustMap.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/expand.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/find.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/finalize.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/filter.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/findIndex.js
     |  | 30 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/first.js
     |  | 31 ms (parallelism 99) build modules > ./node_modules/rxjs/dist/esm/internal/operators/isEmpty.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/groupBy.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/last.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/map.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/materialize.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/mapTo.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/max.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/merge.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/mergeAll.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/flatMap.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/mergeMap.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/mergeMapTo.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/mergeScan.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/mergeWith.js
     |  | 31 ms (parallelism 98.9) build modules > ./node_modules/rxjs/dist/esm/internal/operators/min.js
     |  | 31 ms (parallelism 98.8) build modules > ./node_modules/rxjs/dist/esm/internal/operators/multicast.js
     |  | 31 ms (parallelism 98.8) build modules > ./node_modules/rxjs/dist/esm/internal/operators/observeOn.js
     |  | 31 ms (parallelism 98.8) build modules > ./node_modules/rxjs/dist/esm/internal/operators/onErrorResumeNext.js
     |  | 31 ms (parallelism 98.8) build modules > ./node_modules/rxjs/dist/esm/internal/operators/pairwise.js
     |  | 31 ms (parallelism 98.8) build modules > ./node_modules/rxjs/dist/esm/internal/operators/partition.js
     |  | 31 ms (parallelism 98.8) build modules > ./node_modules/rxjs/dist/esm/internal/operators/pluck.js
     |  | 31 ms (parallelism 98.8) build modules > ./node_modules/rxjs/dist/esm/internal/operators/publish.js
     |  | 31 ms (parallelism 98.8) build modules > ./node_modules/rxjs/dist/esm/internal/operators/publishBehavior.js
     |  | 31 ms (parallelism 98.7) build modules > ./node_modules/rxjs/dist/esm/internal/operators/publishLast.js
<i>  | 3261 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<i>  |  | 368 ms (parallelism 5.1) build modules > ./src/main.ts
     |  | 152 ms (parallelism 13.5) build modules > ./src/app/app-routing.module.ts
     |  | 119 ms (parallelism 13.9) build modules > ./src/app/app.component.ts
     |  | 102 ms (parallelism 14) build modules > ./src/app/prompt-update.service.ts
     |  | 103 ms (parallelism 14) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 54 ms (parallelism 14.8) build modules > ./src/app/material/material.module.ts
     |  | 39 ms (parallelism 48.7) build modules > ./src/app/loading.service.ts
     |  | 46 ms (parallelism 48.3) build modules > ./src/app/loading/loading.component.ts
     |  | 70 ms (parallelism 42.5) build modules > ./src/app/news.service.ts
     |  | 69 ms (parallelism 45.7) build modules > ./src/app/menu/menu.component.ts
<i>  | 1249 ms build modules > 19 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 10419 ms build modules
+ 44 hidden lines

LOG from webpack.ResolverCachePlugin
    29% really resolved (929 real resolves with 0 cached but invalid, 2274 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 1.836969 ms
<t> figure out provided exports: 19.547817 ms
    96% of exports of modules have been determined (15 no declared exports, 348 not cached, 0 flagged uncacheable, 0 from cache, 0 from mem cache, 25 additional calculations due to dependencies)
<t> store provided exports into cache: 2.891948 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 17.421157 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 13.922704 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 0.570116 ms
<t> trace exports usage in graph: 18.32756 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 6.1279 ms
<t> visitModules: visiting: 7.377104 ms
    477 queue items processed (216 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 7.495631 ms
<t> connectChunkGroups: 0.004766 ms
<t> cleanup: 0.003936 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.050692 ms
<t> modules: 4.033096 ms
<t> queue: 0.007165 ms
<t> maxSize: 0.046438 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 2.219719 ms
<t> sort relevant modules: 0.251394 ms
<t> find modules to concatenate: 24.253013 ms
<t> sort concat configurations: 0.051661 ms
<t> create concatenated modules: 14.694428 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: runtime.js: 370.389723 ms
<t> optimize asset: polyfills.js: 968.742039 ms
<t> optimize asset: main.js: 7652.1835360000005 ms
<t> optimize js assets: 7871.4880809999995 ms

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 31.938247 ms
<t> optimize css assets: 64.174471 ms

LOG from webpack.FileSystemInfo
    1280 new snapshots created
    0% root snapshot uncached (0 / 2274)
    0% children snapshot uncached (0 / 0)
    0 entries tested
    File info in cache: 1083 timestamps 53 hashes 53 timestamp hash combinations
    File timestamp snapshot optimization: 34% (36/105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 81% (5391/6643) entries shared via 12 shared snapshots (851 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 87% (4022/4624) entries shared via 257 shared snapshots (785 times referenced)
    Managed items info in cache: 216 items
    Managed items snapshot optimization: 33% (748/2282) entries shared via 41 shared snapshots (132 times referenced)
    Managed files snapshot optimization: 75% (4831/6463) entries shared via 268 shared snapshots (1009 times referenced)
    Managed missing snapshot optimization: 82% (5793/7057) entries shared via 340 shared snapshots (921 times referenced)

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

2022-11-17 11:15:37: webpack 5.75.0 compiled in 34251 ms (b7a41babb3e6b898)

Initial Chunk Files | Names         |  Raw Size | Estimated Transfer Size
main.js             | main          | 583.76 kB |               136.64 kB
styles.css          | styles        | 285.55 kB |                18.08 kB
polyfills.js        | polyfills     |  33.08 kB |                10.69 kB
runtime.js          | runtime       | 906 bytes |               517 bytes

| Initial Total | 903.28 kB |               165.92 kB

Build at: 2022-11-17T16:15:40.182Z - Hash: b7a41babb3e6b898 - Time: 37013ms
Done in 39.16s.
```
