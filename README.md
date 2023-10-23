Mon Oct 23 07:45:43 AM EDT 2023

# Angular Fifteen


This project is live at [https://angularfifteen.github.io](https://angularfifteen.github.io "fifteen!") thanks to Github.

```bash
System Memory
               total        used        free      shared  buff/cache   available
Mem:            15Gi       2.3Gi       4.4Gi       306Mi       8.6Gi        12Gi
Swap:          8.0Gi       2.0Mi       8.0Gi
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
    

Angular CLI: 16.2.7
Node: 18.18.2
Package Manager: yarn 1.22.19
OS: linux x64

Angular: 16.2.10
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
... service-worker

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1602.7
@angular-devkit/build-angular   16.2.7
@angular-devkit/core            16.2.7
@angular-devkit/schematics      16.2.7
@angular/cdk                    16.2.9
@angular/cli                    16.2.7
@angular/material               16.2.9
@schematics/angular             16.2.7
rxjs                            7.5.7
typescript                      5.0.4
zone.js                         0.13.0
    
Done in 0.50s.
yarn install v1.22.19
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.36s.
```
Latest version:     1.0.30001553
Installed version:  1.0.30001551
Removing old caniuse-lite from lock file
Installing new caniuse-lite version
$ yarn add -W caniuse-lite
error An unexpected error occurred: "https://registry.yarnpkg.com/caniuse-lite: connect ENETUNREACH 2606:4700::6810:1a22:443".

Error: Command failed: yarn add -W caniuse-lite
error An unexpected error occurred: "https://registry.yarnpkg.com/caniuse-lite: connect ENETUNREACH 2606:4700::6810:1a22:443".

    at checkExecSyncError (node:child_process:890:11)
    at Object.execSync (node:child_process:962:15)
    at updatePackageManually (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/update-browserslist-db/index.js:216:18)
    at updateDB (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/update-browserslist-db/index.js:281:5)
    at Object.<anonymous> (/home/kushal/src/angular/angularfifteen/node_modules/@angular-devkit/build-angular/node_modules/browserslist/cli.js:42:3)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)

Problem with `yarn add -W caniuse-lite` call. Run it manually.
```bash
Latest version:     1.0.30001553
Installed version:  1.0.30001553
caniuse-lite is up to date
caniuse-lite has been successfully updated

No target browser changes
```
```bash
