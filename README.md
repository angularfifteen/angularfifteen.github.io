Wed Nov 16 07:22:38 PM EST 2022

# Coloradoquiz


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       7.8Gi       475Mi       1.6Gi       7.0Gi       5.4Gi
Swap:          8.0Gi       6.0Gi       2.0Gi
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
    

Angular CLI: 15.0.0
Node: 18.12.1
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 15.0.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, localize, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1500.0
@angular-devkit/build-angular   15.0.0
@angular-devkit/core            15.0.0
@angular-devkit/schematics      15.0.0
@schematics/angular             15.0.0
rxjs                            7.5.7
typescript                      4.8.4
    
Done in 1.56s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 1.17s.
```
```bash
yarn run v1.22.19
$ ng build --configuration production --output-path docs --output-hashing none --stats-json true --subresource-integrity true --verbose true
asset main.js 1.47 MiB {179} [cached] (name: main)
asset styles.css 286 KiB {532} [cached] (name: styles)
asset polyfills.js 33.1 KiB {429} [cached] (name: polyfills)
asset 3rdpartylicenses.txt 14.9 KiB [cached]
asset runtime.js 906 bytes {666} [cached] (name: runtime)
Entrypoint main = runtime.js main.js
Entrypoint polyfills = runtime.js polyfills.js
Entrypoint styles = runtime.js styles.css
chunk {179} (runtime: runtime) main.js (main) 8.52 MiB [initial] [rendered]
  cached modules 857 KiB [cached] 1 module
  ./src/main.ts + 4201 modules [553] 7.69 MiB {179} [built] [code generated]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/main.ts main
chunk {429} (runtime: runtime) polyfills.js (polyfills) 106 KiB [initial]
  cached modules 106 KiB [cached] 1 module
chunk {532} (runtime: runtime) styles.css (styles) 100 bytes (javascript) 320 KiB (css/mini-extract) [initial]
  cached modules 50 bytes (javascript) 129 KiB (css/mini-extract) [cached] 2 modules
  dependent modules 191 KiB [dependent] 1 module
  ./src/styles.scss?ngGlobalStyle [847] 50 bytes {532} [built]
    [no exports used]
    entry /home/kushal/src/angular/angularfifteen/src/styles.scss?ngGlobalStyle styles
    77131 ms (resolving: 2905 ms, restoring: 805 ms, integration: 0 ms, building: 73421 ms, storing: 0 ms)
chunk {666} (runtime: runtime) runtime.js (runtime) 2.48 KiB [entry]
  cached modules 2.48 KiB [cached] 4 modules
  

LOG from webpack.FileSystemInfo
    24542 new snapshots created
    2% root snapshot uncached (765 / 31230)
    15% children snapshot uncached (351 / 2265)
    1341 entries tested
    File info in cache: 53093 timestamps 12054 hashes 12054 timestamp hash combinations
    File timestamp snapshot optimization: 0% (36/20105) entries shared via 2 shared snapshots (2 times referenced)
    File timestamp hash combination snapshot optimization: 76% (150448/199121) entries shared via 6 shared snapshots (20345 times referenced)
    Directory info in cache: 0 timestamps 0 hashes 0 timestamp hash combinations
    Missing items snapshot optimization: 48% (87826/184463) entries shared via 250 shared snapshots (16725 times referenced)
    Managed items info in cache: 215 items
    Managed items snapshot optimization: 34% (20657/61485) entries shared via 32 shared snapshots (4124 times referenced)
    Managed files snapshot optimization: 50% (57739/114661) entries shared via 105 shared snapshots (16298 times referenced)
    Managed missing snapshot optimization: 52% (26373/50996) entries shared via 130 shared snapshots (4325 times referenced)
+ 9 hidden lines

LOG from webpack.Compilation
<t> runtime requirements.modules: 0.181405 ms
<t> runtime requirements.chunks: 0.1932 ms
<t> runtime requirements.entries: 34.941421 ms
<t> finish module profiles: 123.049773 ms
<t> compute affected modules: 0.001356 ms
<t> finish modules: 245.668305 ms
<t> report dependency errors and warnings: 96.904432 ms
<t> optimize dependencies: 268.886735 ms
<t> create chunks: 125.623224 ms
<t> compute affected modules with chunk graph: 0.003101 ms
<t> optimize: 1666.785679 ms
    7 modules hashed, 0 from cache (0 variants per module in average)
<t> module hashing: 209.450752 ms
    29% code generated (2 generated, 5 from cache)
<t> code generation: 3402.94913 ms
<t> runtime requirements.modules: 1.688639 ms
<t> runtime requirements.chunks: 0.138921 ms
<t> runtime requirements.entries: 2.260231 ms
<t> runtime requirements: 4.431768 ms
<t> hashing: initialize hash: 1.089528 ms
<t> hashing: hash warnings: 0.008974 ms
<t> hashing: hash errors: 0.056612 ms
<t> hashing: sort chunks: 0.065094 ms
<t> hashing: hash runtime modules: 1.507765 ms
<t> hashing: hash chunks: 4.302528 ms
<t> hashing: hash digest: 0.032007 ms
<t> hashing: process full hash modules: 0.63729 ms
<t> hashing: 7.860559 ms
    0% code generated (0 generated, 4 from cache)
<t> module assets: 1.558875 ms
<t> create chunk assets: 11.592783 ms
<t> process assets: 17941.247709 ms

LOG from webpack.Compiler
<t> make hook: 148245.083426 ms
<t> finish make hook: 0.154303 ms
<t> finish compilation: 465.671409 ms
<t> seal compilation: 23682.254662 ms
<t> afterCompile hook: 0.171581 ms

LOG from webpack.Compilation.ModuleProfile
<w>  | 581 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
<w>  | 581 ms (parallelism 5) resolve to new modules > ./src/styles.scss?ngGlobalStyle
<e>  | 3904 ms (parallelism 5) resolve to new modules > ./node_modules/@angular/localize/fesm2020/init.mjs
<e>  | 3901 ms (parallelism 5) resolve to new modules > ./node_modules/zone.js/fesm2015/zone.js
<e>  | 3938 ms (parallelism 5) resolve to new modules > ./src/main.ts
<e>  | 1742 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/localize/fesm2020/localize.mjs
<i>  | 308 ms (parallelism 4) resolve to new modules > ./node_modules/@angular/core/fesm2020/core.mjs
<w>  | 547 ms (parallelism 3.3) resolve to new modules > ./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs
     | 33 ms (parallelism 88.3) resolve to new modules > ./src/app/experiment/test-component3975/test-component3975.component.ts
     | 33 ms (parallelism 88.3) resolve to new modules > ./src/app/experiment/test-component3973/test-component3973.component.ts
     | 33 ms (parallelism 88.3) resolve to new modules > ./src/app/experiment/test-component3974/test-component3974.component.ts
     | 33 ms (parallelism 88.3) resolve to new modules > ./src/app/experiment/test-component3976/test-component3976.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3977/test-component3977.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3978/test-component3978.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3980/test-component3980.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3981/test-component3981.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3983/test-component3983.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3979/test-component3979.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3985/test-component3985.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3982/test-component3982.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3986/test-component3986.component.ts
     | 35 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component3984/test-component3984.component.ts
     | 36 ms (parallelism 88.9) resolve to new modules > ./src/app/experiment/test-component3989/test-component3989.component.ts
     | 36 ms (parallelism 88.9) resolve to new modules > ./src/app/experiment/test-component3988/test-component3988.component.ts
     | 36 ms (parallelism 88.9) resolve to new modules > ./src/app/experiment/test-component3987/test-component3987.component.ts
     | 36 ms (parallelism 88.9) resolve to new modules > ./src/app/experiment/test-component3991/test-component3991.component.ts
     | 36 ms (parallelism 88.9) resolve to new modules > ./src/app/experiment/test-component3992/test-component3992.component.ts
     | 36 ms (parallelism 88.9) resolve to new modules > ./src/app/experiment/test-component3990/test-component3990.component.ts
     | 37 ms (parallelism 89.1) resolve to new modules > ./src/app/experiment/test-component3993/test-component3993.component.ts
     | 37 ms (parallelism 89.1) resolve to new modules > ./src/app/experiment/test-component3994/test-component3994.component.ts
     | 37 ms (parallelism 89.1) resolve to new modules > ./src/app/experiment/test-component3995/test-component3995.component.ts
     | 37 ms (parallelism 89.1) resolve to new modules > ./src/app/experiment/test-component3996/test-component3996.component.ts
     | 43 ms (parallelism 88.5) resolve to new modules > ./src/app/prompt-update.service.ts
     | 43 ms (parallelism 88.5) resolve to new modules > ./src/app/http-request-interceptor.service.ts
     | 43 ms (parallelism 88.5) resolve to new modules > ./src/app/loader-io/loader-io.component.ts
     | 43 ms (parallelism 88.5) resolve to new modules > ./src/app/experiment/test-component3997/test-component3997.component.ts
     | 43 ms (parallelism 88.5) resolve to new modules > ./src/app/experiment/test-component3998/test-component3998.component.ts
     | 43 ms (parallelism 88.5) resolve to new modules > ./src/app/experiment/test-component3999/test-component3999.component.ts
     | 44 ms (parallelism 88.6) resolve to new modules > ./src/app/experiment/test-component4000/test-component4000.component.ts
     | 44 ms (parallelism 88.6) resolve to new modules > ./src/app/playground/playground.component.ts
     | 43 ms (parallelism 36) resolve to new modules > ./node_modules/@angular/cdk/fesm2020/cdk.mjs
<e> 21672 ms resolve to new modules
     | 30 ms (parallelism 93.1) resolve to existing modules > ./src/app/prompt-update.service.ts
    70 ms resolve to existing modules
     | 161 ms (parallelism 5) integrate modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 161 ms (parallelism 5) integrate modules > ./src/styles.scss?ngGlobalStyle
    362 ms integrate modules
<e>  |  | 20982 ms (parallelism 3.5) build modules > ./src/styles.scss?ngGlobalStyle
<e>  | 20982 ms build modules > 1 x javascript/auto with ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
<e>  |  | 20520 ms (parallelism 3.5) build modules > ./src/styles.scss.webpack[javascript/auto]!=!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]!./src/styles.scss?ngGlobalStyle
<e>  | 20520 ms build modules > 1 x javascript/auto with ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].rules[0].oneOf[0].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[5].rules[1].use[0]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[5].rules[1].use[1]
     |  | 45 ms (parallelism 70.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-checkbox.mjs
     |  | 45 ms (parallelism 70.3) build modules > ./node_modules/@angular/material/fesm2020/legacy-button.mjs
     |  | 45 ms (parallelism 70.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-input.mjs
     |  | 45 ms (parallelism 70.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-autocomplete.mjs
     |  | 51 ms (parallelism 67) build modules > ./node_modules/@angular/material/fesm2020/datepicker.mjs
     |  | 45 ms (parallelism 70.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-radio.mjs
     |  | 46 ms (parallelism 69.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-form-field.mjs
     |  | 46 ms (parallelism 70.1) build modules > ./node_modules/@angular/material/fesm2020/legacy-select.mjs
     |  | 47 ms (parallelism 69.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-slider.mjs
     |  | 46 ms (parallelism 69.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-slide-toggle.mjs
     |  | 46 ms (parallelism 69.7) build modules > ./node_modules/@angular/material/fesm2020/legacy-menu.mjs
     |  | 48 ms (parallelism 68.9) build modules > ./node_modules/@angular/material/fesm2020/sidenav.mjs
     |  | 47 ms (parallelism 69.4) build modules > ./node_modules/@angular/material/fesm2020/toolbar.mjs
     |  | 47 ms (parallelism 69.3) build modules > ./node_modules/@angular/material/fesm2020/legacy-list.mjs
     |  | 48 ms (parallelism 68.6) build modules > ./node_modules/@angular/material/fesm2020/grid-list.mjs
     |  | 47 ms (parallelism 69.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-card.mjs
     |  | 52 ms (parallelism 66.5) build modules > ./node_modules/@angular/material/fesm2020/legacy-tabs.mjs
     |  | 52 ms (parallelism 66.7) build modules > ./node_modules/@angular/material/fesm2020/stepper.mjs
     |  | 52 ms (parallelism 66.5) build modules > ./node_modules/@angular/material/fesm2020/expansion.mjs
     |  | 47 ms (parallelism 69.2) build modules > ./node_modules/@angular/material/fesm2020/button-toggle.mjs
     |  | 54 ms (parallelism 65.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-chips.mjs
     |  | 53 ms (parallelism 65.9) build modules > ./node_modules/@angular/material/fesm2020/icon.mjs
     |  | 53 ms (parallelism 66.4) build modules > ./node_modules/@angular/material/fesm2020/legacy-progress-spinner.mjs
     |  | 53 ms (parallelism 66.3) build modules > ./node_modules/@angular/material/fesm2020/legacy-progress-bar.mjs
     |  | 53 ms (parallelism 66.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-dialog.mjs
     |  | 54 ms (parallelism 65.8) build modules > ./node_modules/@angular/material/fesm2020/legacy-tooltip.mjs
     |  | 54 ms (parallelism 65.7) build modules > ./node_modules/@angular/material/fesm2020/legacy-snack-bar.mjs
     |  | 54 ms (parallelism 65.1) build modules > ./node_modules/@angular/material/fesm2020/legacy-table.mjs
     |  | 54 ms (parallelism 65.2) build modules > ./node_modules/@angular/material/fesm2020/sort.mjs
     |  | 54 ms (parallelism 65.1) build modules > ./node_modules/@angular/material/fesm2020/legacy-paginator.mjs
     |  | 54 ms (parallelism 65.2) build modules > ./node_modules/@angular/material/fesm2020/core.mjs
     |  | 54 ms (parallelism 65.2) build modules > ./node_modules/@angular/material/fesm2020/legacy-core.mjs
     |  | 76 ms (parallelism 35.5) build modules > ./node_modules/@angular/material/fesm2020/checkbox.mjs
     |  | 86 ms (parallelism 34.4) build modules > ./node_modules/@angular/material/fesm2020/autocomplete.mjs
     |  | 77 ms (parallelism 35.5) build modules > ./node_modules/@angular/material/fesm2020/radio.mjs
     |  | 76 ms (parallelism 35.6) build modules > ./node_modules/@angular/material/fesm2020/input.mjs
     |  | 76 ms (parallelism 35.6) build modules > ./node_modules/@angular/material/fesm2020/select.mjs
     |  | 76 ms (parallelism 35.5) build modules > ./node_modules/@angular/material/fesm2020/form-field.mjs
     |  | 76 ms (parallelism 35.5) build modules > ./node_modules/@angular/material/fesm2020/slide-toggle.mjs
     |  | 78 ms (parallelism 35.4) build modules > ./node_modules/@angular/material/fesm2020/menu.mjs
     |  | 79 ms (parallelism 35.3) build modules > ./node_modules/@angular/material/fesm2020/list.mjs
     |  | 76 ms (parallelism 35.6) build modules > ./node_modules/@angular/material/fesm2020/divider.mjs
     |  | 80 ms (parallelism 35.2) build modules > ./node_modules/@angular/material/fesm2020/button.mjs
     |  | 77 ms (parallelism 35.5) build modules > ./node_modules/@angular/material/fesm2020/progress-spinner.mjs
     |  | 81 ms (parallelism 35) build modules > ./node_modules/@angular/material/fesm2020/tabs.mjs
     |  | 80 ms (parallelism 35.2) build modules > ./node_modules/@angular/material/fesm2020/dialog.mjs
     |  | 78 ms (parallelism 35.4) build modules > ./node_modules/@angular/material/fesm2020/progress-bar.mjs
     |  | 82 ms (parallelism 35) build modules > ./node_modules/@angular/material/fesm2020/tooltip.mjs
     |  | 82 ms (parallelism 35) build modules > ./node_modules/@angular/material/fesm2020/snack-bar.mjs
     |  | 85 ms (parallelism 34.5) build modules > ./node_modules/@angular/material/fesm2020/table.mjs
     |  | 83 ms (parallelism 34.8) build modules > ./node_modules/@angular/material/fesm2020/paginator.mjs
     |  | 84 ms (parallelism 34.7) build modules > ./node_modules/@angular/cdk/fesm2020/a11y.mjs
     |  | 87 ms (parallelism 34.2) build modules > ./node_modules/@angular/cdk/fesm2020/overlay.mjs
     |  | 85 ms (parallelism 34.5) build modules > ./node_modules/@angular/cdk/fesm2020/observers.mjs
     |  | 88 ms (parallelism 34.1) build modules > ./node_modules/@angular/cdk/fesm2020/scrolling.mjs
     |  | 85 ms (parallelism 34.5) build modules > ./node_modules/@angular/cdk/fesm2020/bidi.mjs
     |  | 89 ms (parallelism 34.1) build modules > ./node_modules/@angular/cdk/fesm2020/text-field.mjs
     |  | 90 ms (parallelism 33.9) build modules > ./node_modules/@angular/cdk/fesm2020/collections.mjs
     |  | 90 ms (parallelism 33.8) build modules > ./node_modules/@angular/cdk/fesm2020/coercion.mjs
     |  | 90 ms (parallelism 33.8) build modules > ./node_modules/@angular/cdk/fesm2020/keycodes.mjs
     |  | 96 ms (parallelism 32.8) build modules > ./node_modules/@angular/cdk/fesm2020/platform.mjs
     |  | 91 ms (parallelism 33.7) build modules > ./node_modules/@angular/cdk/fesm2020/portal.mjs
     |  | 92 ms (parallelism 33.5) build modules > ./node_modules/@angular/cdk/fesm2020/stepper.mjs
     |  | 91 ms (parallelism 33.6) build modules > ./node_modules/@angular/cdk/fesm2020/dialog.mjs
     |  | 92 ms (parallelism 33.5) build modules > ./node_modules/@angular/cdk/fesm2020/layout.mjs
     |  | 92 ms (parallelism 33.5) build modules > ./node_modules/@angular/cdk/fesm2020/accordion.mjs
     |  | 96 ms (parallelism 32.9) build modules > ./node_modules/@angular/cdk/fesm2020/table.mjs
<i>  | 4598 ms build modules > 80 x javascript/esm with javascript/esm|/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
     |  | 64 ms (parallelism 1.9) build modules > ./node_modules/@material/ripple/foundation.js
     | 257 ms build modules > 246 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]
<e>  |  | 23238 ms (parallelism 2.8) build modules > ./src/main.ts
<i>  |  | 308 ms (parallelism 4) build modules > ./src/environments/environment.ts
<w>  |  | 573 ms (parallelism 3.4) build modules > ./src/app/app.module.ts
     |  | 39 ms (parallelism 72.8) build modules > ./src/app/experiment/test-component3992/test-component3992.component.ts
     |  | 39 ms (parallelism 72.8) build modules > ./src/app/experiment/test-component3990/test-component3990.component.ts
     |  | 39 ms (parallelism 72.8) build modules > ./src/app/experiment/test-component3993/test-component3993.component.ts
     |  | 39 ms (parallelism 72.8) build modules > ./src/app/experiment/test-component3994/test-component3994.component.ts
     |  | 39 ms (parallelism 72.8) build modules > ./src/app/experiment/test-component3995/test-component3995.component.ts
     |  | 39 ms (parallelism 72.8) build modules > ./src/app/experiment/test-component3996/test-component3996.component.ts
     |  | 37 ms (parallelism 72.5) build modules > ./src/app/prompt-update.service.ts
     |  | 37 ms (parallelism 72.5) build modules > ./src/app/http-request-interceptor.service.ts
     |  | 44 ms (parallelism 70.3) build modules > ./src/app/loader-io/loader-io.component.ts
     |  | 43 ms (parallelism 68.9) build modules > ./src/app/experiment/test-component3997/test-component3997.component.ts
     |  | 52 ms (parallelism 64) build modules > ./src/app/experiment/test-component3998/test-component3998.component.ts
     |  | 52 ms (parallelism 64) build modules > ./src/app/experiment/test-component3999/test-component3999.component.ts
     |  | 52 ms (parallelism 64) build modules > ./src/app/experiment/test-component4000/test-component4000.component.ts
     |  | 43 ms (parallelism 68.9) build modules > ./src/app/loading.service.ts
     |  | 52 ms (parallelism 64) build modules > ./src/app/playground/playground.component.ts
     |  | 43 ms (parallelism 68.9) build modules > ./src/app/quiz.service.ts
     |  | 43 ms (parallelism 68.9) build modules > ./src/app/news.service.ts
<e>  | 61985 ms build modules > 4019 x javascript/auto with ./node_modules/@angular-devkit/build-angular/src/babel/webpack-loader.js??ruleSet[1].rules[2].use[0]!./node_modules/@ngtools/webpack/src/ivy/index.js
<e> 108342 ms build modules
     | 161 ms (parallelism 5) restore modules > ./node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css?ngGlobalStyle
     | 161 ms (parallelism 5) restore modules > ./src/styles.scss?ngGlobalStyle
    362 ms restore modules
+ 1132 hidden lines

LOG from webpack.ResolverCachePlugin
    40% really resolved (20434 real resolves with 47 cached but invalid, 30936 cached valid, 0 concurrent)

LOG from webpack.FlagDependencyExportsPlugin
<t> restore cached provided exports: 53.667639 ms
<t> figure out provided exports: 110.469806 ms
    94% of exports of modules have been determined (10 no declared exports, 4113 not cached, 0 flagged uncacheable, 233 from cache, 0 from mem cache, 20 additional calculations due to dependencies)
<t> store provided exports into cache: 51.376247 ms

LOG from webpack.InnerGraphPlugin
<t> infer dependency usage: 21.387411 ms

LOG from webpack.SideEffectsFlagPlugin
<t> update dependencies: 80.58968 ms

LOG from webpack.FlagDependencyUsagePlugin
<t> initialize exports usage: 9.243268 ms
<t> trace exports usage in graph: 177.071277 ms

LOG from webpack.buildChunkGraph
<t> visitModules: prepare: 40.047896 ms
<t> visitModules: visiting: 82.449424 ms
    8468 queue items processed (4210 blocks)
    0 chunk groups connected
    0 chunk groups processed for merging (0 module sets, 0 forked, 0 + 0 modules forked, 0 + 0 modules merged into fork, 0 resulting modules)
    0 chunk group info updated (0 already connected chunk groups reconnected)
<t> visitModules: 83.366836 ms
<t> connectChunkGroups: 0.001754 ms
<t> cleanup: 0.001893 ms

LOG from webpack.SplitChunksPlugin
<t> prepare: 0.047477 ms
<t> modules: 66.179337 ms
<t> queue: 0.010395 ms
<t> maxSize: 0.06684 ms

LOG from webpack.ModuleConcatenationPlugin
<t> select relevant modules: 24.081095 ms
<t> sort relevant modules: 4.865116 ms
<t> find modules to concatenate: 191.780557 ms
<t> sort concat configurations: 0.065073 ms
<t> create concatenated modules: 236.281958 ms
+ 3 hidden lines

LOG from build-angular.JavaScriptOptimizerPlugin
<t> optimize asset: main.js: 11501.423435 ms
<t> optimize js assets: 12220.236575 ms
+ 2 hidden lines

LOG from build-angular.CssOptimizerPlugin
<t> optimize asset: styles.css: 65.713716 ms
<t> optimize css assets: 82.886678 ms

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

ERROR in ./src/app/app.module.ts 7:0-62
Module not found: Error: Can't resolve '@angular/service-worker' in '/home/kushal/src/angular/angularfifteen/src/app'
resolve '@angular/service-worker' in '/home/kushal/src/angular/angularfifteen/src/app'
  Parsed request is a module
  using description file: /home/kushal/src/angular/angularfifteen/package.json (relative path: ./src/app)
    Field 'browser' doesn't contain a valid alias configuration
    resolve as module
      looking for modules in /home/kushal/src/angular/angularfifteen
        single file module
          using description file: /home/kushal/src/angular/angularfifteen/package.json (relative path: ./@angular/service-worker)
            no extension
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/@angular/service-worker doesn't exist
            .ts
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/@angular/service-worker.ts doesn't exist
            .tsx
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/@angular/service-worker.tsx doesn't exist
            .mjs
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/@angular/service-worker.mjs doesn't exist
            .js
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/@angular/service-worker.js doesn't exist
        /home/kushal/src/angular/angularfifteen/@angular/service-worker doesn't exist
      /home/kushal/src/angular/angularfifteen/src/app/node_modules doesn't exist or is not a directory
      /home/kushal/src/angular/angularfifteen/src/node_modules doesn't exist or is not a directory
      looking for modules in /home/kushal/src/angular/angularfifteen/node_modules
        single file module
          using description file: /home/kushal/src/angular/angularfifteen/package.json (relative path: ./node_modules/@angular/service-worker)
            no extension
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/node_modules/@angular/service-worker doesn't exist
            .ts
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/node_modules/@angular/service-worker.ts doesn't exist
            .tsx
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/node_modules/@angular/service-worker.tsx doesn't exist
            .mjs
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/node_modules/@angular/service-worker.mjs doesn't exist
            .js
              Field 'browser' doesn't contain a valid alias configuration
              /home/kushal/src/angular/angularfifteen/node_modules/@angular/service-worker.js doesn't exist
        /home/kushal/src/angular/angularfifteen/node_modules/@angular/service-worker doesn't exist
      /home/kushal/src/angular/node_modules doesn't exist or is not a directory
      /home/kushal/src/node_modules doesn't exist or is not a directory
      /home/kushal/node_modules doesn't exist or is not a directory
      /home/node_modules doesn't exist or is not a directory
      /node_modules doesn't exist or is not a directory
ModuleNotFoundError: Module not found: Error: Can't resolve '@angular/service-worker' in '/home/kushal/src/angular/angularfifteen/src/app'
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compilation.js:2016:28
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModuleFactory.js:798:13
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:10:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModuleFactory.js:270:22
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModuleFactory.js:434:22
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModuleFactory.js:116:11
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModuleFactory.js:670:25
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModuleFactory.js:855:8
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModuleFactory.js:975:5
    at /home/kushal/src/angular/angularfifteen/node_modules/neo-async/async.js:6883:13
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/NormalModuleFactory.js:958:45
    at finishWithoutResolve (/home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:312:11)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:386:15
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:435:5
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:435:5
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:87:43
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:435:5
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:435:5
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:435:5
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:435:5
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:87:43
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:435:5
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/Resolver.js:435:5
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
    at /home/kushal/src/angular/angularfifteen/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:41:15
    at process.processTicksAndRejections (node:internal/process/task_queues:81:21)
 @ ./src/main.ts 3:0-45 8:54-63

ERROR in src/app/app.component.html:1:1 - error NG8001: 'app-loading' is not a known element:
1. If 'app-loading' is an Angular component, then verify that it is part of this module.
2. If 'app-loading' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <app-loading></app-loading>
  ~~~~~~~~~~~~~

  src/app/app.component.ts:7:16
    7   templateUrl: './app.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AppComponent.
Error: src/app/app.component.html:1:1 - error NG8001: 'app-loading' is not a known element:
1. If 'app-loading' is an Angular component, then verify that it is part of this module.
2. If 'app-loading' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <app-loading></app-loading>
  ~~~~~~~~~~~~~

  src/app/app.component.ts:7:16
    7   templateUrl: './app.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AppComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/app.component.html:3:1 - error NG8001: 'router-outlet' is not a known element:
1. If 'router-outlet' is an Angular component, then verify that it is part of this module.
2. If 'router-outlet' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3 <router-outlet></router-outlet>
  ~~~~~~~~~~~~~~~

  src/app/app.component.ts:7:16
    7   templateUrl: './app.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AppComponent.
Error: src/app/app.component.html:3:1 - error NG8001: 'router-outlet' is not a known element:
1. If 'router-outlet' is an Angular component, then verify that it is part of this module.
2. If 'router-outlet' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3 <router-outlet></router-outlet>
  ~~~~~~~~~~~~~~~

  src/app/app.component.ts:7:16
    7   templateUrl: './app.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AppComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/app.module.ts:7:37 - error TS2307: Cannot find module '@angular/service-worker' or its corresponding type declarations.

7 import { ServiceWorkerModule } from '@angular/service-worker';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~
Error: src/app/app.module.ts:7:37 - error TS2307: Cannot find module '@angular/service-worker' or its corresponding type declarations.

7 import { ServiceWorkerModule } from '@angular/service-worker';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:398:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:211:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:131:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1121:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1166:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

ERROR in src/app/app.module.ts:8035:12 - error NG1010: Value at position 6 in the NgModule.imports of AppModule is not a reference
  Value could not be determined statically.

8035   imports: [
                ~
8036     BrowserModule,
     ~~~~~~~~~~~~~~~~~~
 ... 
8042     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
8043   ],
     ~~~

  src/app/app.module.ts:8042:5
    8042     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Unable to evaluate this expression statically.
  src/app/app.module.ts:8042:5
    8042     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
             ~~~~~~~~~~~~~~~~~~~
    Unknown reference.
Error: src/app/app.module.ts:8035:12 - error NG1010: Value at position 6 in the NgModule.imports of AppModule is not a reference
  Value could not be determined statically.

8035   imports: [
                ~
8036     BrowserModule,
     ~~~~~~~~~~~~~~~~~~
 ... 
8042     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
8043   ],
     ~~~

  src/app/app.module.ts:8042:5
    8042     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Unable to evaluate this expression statically.
  src/app/app.module.ts:8042:5
    8042     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
             ~~~~~~~~~~~~~~~~~~~
    Unknown reference.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/home/home.component.html:1:1 - error NG8001: 'mat-toolbar' is not a known element:
1. If 'mat-toolbar' is an Angular component, then verify that it is part of this module.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <mat-toolbar color="primary">
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/home/home.component.ts:6:16
    6   templateUrl: './home.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component HomeComponent.
Error: src/app/home/home.component.html:1:1 - error NG8001: 'mat-toolbar' is not a known element:
1. If 'mat-toolbar' is an Angular component, then verify that it is part of this module.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <mat-toolbar color="primary">
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/home/home.component.ts:6:16
    6   templateUrl: './home.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component HomeComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/home/home.component.html:3:3 - error NG8001: 'app-menu' is not a known element:
1. If 'app-menu' is an Angular component, then verify that it is part of this module.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3   <app-menu></app-menu>
    ~~~~~~~~~~

  src/app/home/home.component.ts:6:16
    6   templateUrl: './home.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component HomeComponent.
Error: src/app/home/home.component.html:3:3 - error NG8001: 'app-menu' is not a known element:
1. If 'app-menu' is an Angular component, then verify that it is part of this module.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3   <app-menu></app-menu>
    ~~~~~~~~~~

  src/app/home/home.component.ts:6:16
    6   templateUrl: './home.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component HomeComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/home/home.component.html:4:27 - error NG8004: No pipe found with name 'date'.

4   <caption>{{ startTime | date: 'mediumTime'}}</caption>
                            ~~~~

  src/app/home/home.component.ts:6:16
    6   templateUrl: './home.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component HomeComponent.
Error: src/app/home/home.component.html:4:27 - error NG8004: No pipe found with name 'date'.

4   <caption>{{ startTime | date: 'mediumTime'}}</caption>
                            ~~~~

  src/app/home/home.component.ts:6:16
    6   templateUrl: './home.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component HomeComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/loading/loading.component.html:2:5 - error NG8001: 'mat-spinner' is not a known element:
1. If 'mat-spinner' is an Angular component, then verify that it is part of this module.
2. If 'mat-spinner' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

2     <mat-spinner></mat-spinner>
      ~~~~~~~~~~~~~

  src/app/loading/loading.component.ts:6:16
    6   templateUrl: './loading.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component LoadingComponent.
Error: src/app/loading/loading.component.html:2:5 - error NG8001: 'mat-spinner' is not a known element:
1. If 'mat-spinner' is an Angular component, then verify that it is part of this module.
2. If 'mat-spinner' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

2     <mat-spinner></mat-spinner>
      ~~~~~~~~~~~~~

  src/app/loading/loading.component.ts:6:16
    6   templateUrl: './loading.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component LoadingComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/menu/menu.component.html:1:20 - error NG8002: Can't bind to 'matMenuTriggerFor' since it isn't a known property of 'button'.

1 <button mat-button [matMenuTriggerFor]="menu">Quizzes</button>
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/menu/menu.component.ts:5:16
    5   templateUrl: './menu.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component MenuComponent.
Error: src/app/menu/menu.component.html:1:20 - error NG8002: Can't bind to 'matMenuTriggerFor' since it isn't a known property of 'button'.

1 <button mat-button [matMenuTriggerFor]="menu">Quizzes</button>
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/menu/menu.component.ts:5:16
    5   templateUrl: './menu.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component MenuComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/menu/menu.component.html:2:1 - error NG8001: 'mat-menu' is not a known element:
1. If 'mat-menu' is an Angular component, then verify that it is part of this module.
2. If 'mat-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

2 <mat-menu #menu="matMenu">
  ~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/menu/menu.component.ts:5:16
    5   templateUrl: './menu.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component MenuComponent.
Error: src/app/menu/menu.component.html:2:1 - error NG8001: 'mat-menu' is not a known element:
1. If 'mat-menu' is an Angular component, then verify that it is part of this module.
2. If 'mat-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

2 <mat-menu #menu="matMenu">
  ~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/menu/menu.component.ts:5:16
    5   templateUrl: './menu.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component MenuComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/menu/menu.component.html:2:18 - error NG8003: No directive found with exportAs 'matMenu'.

2 <mat-menu #menu="matMenu">
                   ~~~~~~~

  src/app/menu/menu.component.ts:5:16
    5   templateUrl: './menu.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component MenuComponent.
Error: src/app/menu/menu.component.html:2:18 - error NG8003: No directive found with exportAs 'matMenu'.

2 <mat-menu #menu="matMenu">
                   ~~~~~~~

  src/app/menu/menu.component.ts:5:16
    5   templateUrl: './menu.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component MenuComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:1:1 - error NG8001: 'app-hello-world' is not a known element:
1. If 'app-hello-world' is an Angular component, then verify that it is part of this module.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <app-hello-world message="George~Washington~1732~2~22~Virginia~1799~12~14~Virginia"></app-hello-world>
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:1:1 - error NG8001: 'app-hello-world' is not a known element:
1. If 'app-hello-world' is an Angular component, then verify that it is part of this module.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <app-hello-world message="George~Washington~1732~2~22~Virginia~1799~12~14~Virginia"></app-hello-world>
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:2:1 - error NG8001: 'app-hello-world' is not a known element:
1. If 'app-hello-world' is an Angular component, then verify that it is part of this module.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

2 <app-hello-world message="Barack~Obama~1961~8~4~Hawaii"></app-hello-world>
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:2:1 - error NG8001: 'app-hello-world' is not a known element:
1. If 'app-hello-world' is an Angular component, then verify that it is part of this module.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

2 <app-hello-world message="Barack~Obama~1961~8~4~Hawaii"></app-hello-world>
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:3:1 - error NG8001: 'app-hello-world' is not a known element:
1. If 'app-hello-world' is an Angular component, then verify that it is part of this module.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3 <app-hello-world message="Narendra~Modi~1950~9~17~Vadnagar, Gujarat"></app-hello-world>
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:3:1 - error NG8001: 'app-hello-world' is not a known element:
1. If 'app-hello-world' is an Angular component, then verify that it is part of this module.
2. If 'app-hello-world' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3 <app-hello-world message="Narendra~Modi~1950~9~17~Vadnagar, Gujarat"></app-hello-world>
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:6:20 - error NG8004: No pipe found with name 'titlecase'.

6     {{news.title | titlecase}}
                     ~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:6:20 - error NG8004: No pipe found with name 'titlecase'.

6     {{news.title | titlecase}}
                     ~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:10:67 - error NG8004: No pipe found with name 'date'.

10     <time datetime='news.dateCreated' title="{{news.dateCreated | date: 'long'}}">{{news.dateCreated | date }}</time>.
                                                                     ~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:10:67 - error NG8004: No pipe found with name 'date'.

10     <time datetime='news.dateCreated' title="{{news.dateCreated | date: 'long'}}">{{news.dateCreated | date }}</time>.
                                                                     ~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:10:104 - error NG8004: No pipe found with name 'date'.

10     <time datetime='news.dateCreated' title="{{news.dateCreated | date: 'long'}}">{{news.dateCreated | date }}</time>.
                                                                                                          ~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:10:104 - error NG8004: No pipe found with name 'date'.

10     <time datetime='news.dateCreated' title="{{news.dateCreated | date: 'long'}}">{{news.dateCreated | date }}</time>.
                                                                                                          ~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:13:5 - error NG8001: 'mat-card' is not a known element:
1. If 'mat-card' is an Angular component, then verify that it is part of this module.
2. If 'mat-card' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

13     <mat-card>
       ~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:13:5 - error NG8001: 'mat-card' is not a known element:
1. If 'mat-card' is an Angular component, then verify that it is part of this module.
2. If 'mat-card' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

13     <mat-card>
       ~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:14:7 - error NG8001: 'mat-card-header' is not a known element:
1. If 'mat-card-header' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-header' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

14       <mat-card-header>
         ~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:14:7 - error NG8001: 'mat-card-header' is not a known element:
1. If 'mat-card-header' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-header' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

14       <mat-card-header>
         ~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:18:9 - error NG8001: 'mat-card-title' is not a known element:
1. If 'mat-card-title' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-title' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

18         <mat-card-title>{{newsItem.title}}</mat-card-title>
           ~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:18:9 - error NG8001: 'mat-card-title' is not a known element:
1. If 'mat-card-title' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-title' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

18         <mat-card-title>{{newsItem.title}}</mat-card-title>
           ~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:19:9 - error NG8001: 'mat-card-subtitle' is not a known element:
1. If 'mat-card-subtitle' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-subtitle' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

19         <mat-card-subtitle>{{newsItem.summary}}</mat-card-subtitle>
           ~~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:19:9 - error NG8001: 'mat-card-subtitle' is not a known element:
1. If 'mat-card-subtitle' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-subtitle' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

19         <mat-card-subtitle>{{newsItem.summary}}</mat-card-subtitle>
           ~~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:22:7 - error NG8001: 'mat-card-content' is not a known element:
1. If 'mat-card-content' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-content' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

22       <mat-card-content>
         ~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:22:7 - error NG8001: 'mat-card-content' is not a known element:
1. If 'mat-card-content' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-content' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

22       <mat-card-content>
         ~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.html:27:7 - error NG8001: 'mat-card-actions' is not a known element:
1. If 'mat-card-actions' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-actions' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

27       <mat-card-actions>
         ~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.
Error: src/app/news/news.component.html:27:7 - error NG8001: 'mat-card-actions' is not a known element:
1. If 'mat-card-actions' is an Angular component, then verify that it is part of this module.
2. If 'mat-card-actions' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

27       <mat-card-actions>
         ~~~~~~~~~~~~~~~~~~

  src/app/news/news.component.ts:11:16
    11   templateUrl: './news.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component NewsComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/news/news.component.ts:27:62 - error TS4111: Property 'title' comes from an index signature, so it must be accessed with ['title'].

27     console.log({ title: this.activatedRoute.snapshot.params.title });
                                                                ~~~~~
Error: src/app/news/news.component.ts:27:62 - error TS4111: Property 'title' comes from an index signature, so it must be accessed with ['title'].

27     console.log({ title: this.activatedRoute.snapshot.params.title });
                                                                ~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:398:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:211:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:131:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1121:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1166:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

ERROR in src/app/news/news.component.ts:28:55 - error TS4111: Property 'title' comes from an index signature, so it must be accessed with ['title'].

28     const title = this.activatedRoute.snapshot.params.title;
                                                         ~~~~~
Error: src/app/news/news.component.ts:28:55 - error TS4111: Property 'title' comes from an index signature, so it must be accessed with ['title'].

28     const title = this.activatedRoute.snapshot.params.title;
                                                         ~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:398:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:211:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:131:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1121:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1166:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

ERROR in src/app/prompt-update.service.ts:2:48 - error TS2307: Cannot find module '@angular/service-worker' or its corresponding type declarations.

2 import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~
Error: src/app/prompt-update.service.ts:2:48 - error TS2307: Cannot find module '@angular/service-worker' or its corresponding type declarations.

2 import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:398:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:211:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:131:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1121:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1166:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

ERROR in src/app/prompt-update.service.ts:6:23 - error NG2003: No suitable injection token for parameter 'updates' of class 'PromptUpdateService'.
  Consider using the @Inject decorator to specify an injection token.

6   constructor(private updates: SwUpdate) {
                        ~~~~~~~

  src/app/prompt-update.service.ts:6:32
    6   constructor(private updates: SwUpdate) {
                                     ~~~~~~~~
    This type does not have a value, so it cannot be used as injection token.
Error: src/app/prompt-update.service.ts:6:23 - error NG2003: No suitable injection token for parameter 'updates' of class 'PromptUpdateService'.
  Consider using the @Inject decorator to specify an injection token.

6   constructor(private updates: SwUpdate) {
                        ~~~~~~~

  src/app/prompt-update.service.ts:6:32
    6   constructor(private updates: SwUpdate) {
                                     ~~~~~~~~
    This type does not have a value, so it cannot be used as injection token.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/prompt-update.service.ts:11:39 - error TS7006: Parameter 'event' implicitly has an 'any' type.

11     this.updates.available.subscribe((event) => {
                                         ~~~~~
Error: src/app/prompt-update.service.ts:11:39 - error TS7006: Parameter 'event' implicitly has an 'any' type.

11     this.updates.available.subscribe((event) => {
                                         ~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:398:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:211:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:131:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1121:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1166:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

ERROR in src/app/quiz/quiz.component.html:1:1 - error NG8001: 'mat-toolbar' is not a known element:
1. If 'mat-toolbar' is an Angular component, then verify that it is part of this module.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <mat-toolbar color="primary">
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.
Error: src/app/quiz/quiz.component.html:1:1 - error NG8001: 'mat-toolbar' is not a known element:
1. If 'mat-toolbar' is an Angular component, then verify that it is part of this module.
2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

1 <mat-toolbar color="primary">
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/quiz/quiz.component.html:3:3 - error NG8001: 'app-menu' is not a known element:
1. If 'app-menu' is an Angular component, then verify that it is part of this module.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3   <app-menu></app-menu>
    ~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.
Error: src/app/quiz/quiz.component.html:3:3 - error NG8001: 'app-menu' is not a known element:
1. If 'app-menu' is an Angular component, then verify that it is part of this module.
2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

3   <app-menu></app-menu>
    ~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/quiz/quiz.component.html:4:27 - error NG8004: No pipe found with name 'date'.

4   <caption>{{ startTime | date: 'mediumTime'}}</caption>
                            ~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.
Error: src/app/quiz/quiz.component.html:4:27 - error NG8004: No pipe found with name 'date'.

4   <caption>{{ startTime | date: 'mediumTime'}}</caption>
                            ~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/quiz/quiz.component.html:6:1 - error NG8001: 'mat-card' is not a known element:
1. If 'mat-card' is an Angular component, then verify that it is part of this module.
2. If 'mat-card' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

6 <mat-card>
  ~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.
Error: src/app/quiz/quiz.component.html:6:1 - error NG8001: 'mat-card' is not a known element:
1. If 'mat-card' is an Angular component, then verify that it is part of this module.
2. If 'mat-card' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

6 <mat-card>
  ~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/quiz/quiz.component.html:9:23 - error NG8004: No pipe found with name 'uppercase'.

9       {{ quiz.title | uppercase }}
                        ~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.
Error: src/app/quiz/quiz.component.html:9:23 - error NG8004: No pipe found with name 'uppercase'.

9       {{ quiz.title | uppercase }}
                        ~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/quiz/quiz.component.html:15:48 - error NG8004: No pipe found with name 'number'.

15     <p>Your score so far: {{ scorePercentage | number: "1.0-0" }} out of 100.</p>
                                                  ~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.
Error: src/app/quiz/quiz.component.html:15:48 - error NG8004: No pipe found with name 'number'.

15     <p>Your score so far: {{ scorePercentage | number: "1.0-0" }} out of 100.</p>
                                                  ~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/quiz/quiz.component.html:17:5 - error NG8001: 'mat-vertical-stepper' is not a known element:
1. If 'mat-vertical-stepper' is an Angular component, then verify that it is part of this module.
2. If 'mat-vertical-stepper' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

17     <mat-vertical-stepper #stepper>
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.
Error: src/app/quiz/quiz.component.html:17:5 - error NG8001: 'mat-vertical-stepper' is not a known element:
1. If 'mat-vertical-stepper' is an Angular component, then verify that it is part of this module.
2. If 'mat-vertical-stepper' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

17     <mat-vertical-stepper #stepper>
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/quiz/quiz.component.html:18:7 - error NG8001: 'mat-step' is not a known element:
1. If 'mat-step' is an Angular component, then verify that it is part of this module.
2. If 'mat-step' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

18       <mat-step *ngFor="let question of quiz?.questions">
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.
Error: src/app/quiz/quiz.component.html:18:7 - error NG8001: 'mat-step' is not a known element:
1. If 'mat-step' is an Angular component, then verify that it is part of this module.
2. If 'mat-step' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.

18       <mat-step *ngFor="let question of quiz?.questions">
         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/quiz/quiz.component.ts:13:16
    13   templateUrl: './quiz.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component QuizComponent.

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:448:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async FileEmitterRegistration.analyzingFileEmitter (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:460:30)

ERROR in src/app/quiz/quiz.component.ts:49:62 - error TS4111: Property 'title' comes from an index signature, so it must be accessed with ['title'].

49     console.log({ title: this.activatedRoute.snapshot.params.title });
                                                                ~~~~~
Error: src/app/quiz/quiz.component.ts:49:62 - error TS4111: Property 'title' comes from an index signature, so it must be accessed with ['title'].

49     console.log({ title: this.activatedRoute.snapshot.params.title });
                                                                ~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:398:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:211:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:131:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1121:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1166:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

ERROR in src/app/quiz/quiz.component.ts:65:55 - error TS4111: Property 'title' comes from an index signature, so it must be accessed with ['title'].

65     const title = this.activatedRoute.snapshot.params.title;
                                                         ~~~~~
Error: src/app/quiz/quiz.component.ts:65:55 - error TS4111: Property 'title' comes from an index signature, so it must be accessed with ['title'].

65     const title = this.activatedRoute.snapshot.params.title;
                                                         ~~~~~

    at addError (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:31:29)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/diagnostics.js:17:17
    at AngularWebpackPlugin.updateAotProgram (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:398:17)
    at AngularWebpackPlugin.setupCompilation (/home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:211:20)
    at /home/kushal/src/angular/angularfifteen/node_modules/@ngtools/webpack/src/ivy/plugin.js:131:22
    at Hook.eval [as call] (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:28:1)
    at Hook.CALL_DELEGATE [as _call] (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1121:30)
    at /home/kushal/src/angular/angularfifteen/node_modules/webpack/lib/Compiler.js:1166:29
    at eval (eval at create (/home/kushal/src/angular/angularfifteen/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:20:1)

2022-11-16 19:26:18: webpack 5.75.0 compiled in 187800 ms (4e9c1b788735e1bf)
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
Wed Nov 16 07:32:39 PM EST 2022
yarn version v1.22.19
info Current version: 0.0.3
info New version: 0.0.4
Done in 0.32s.
