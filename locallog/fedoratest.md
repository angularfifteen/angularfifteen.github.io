```bash
yarn run v1.22.19
$ ng test --no-watch --browsers ChromeHeadless
19 11 2022 11:04:58.472:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
19 11 2022 11:04:58.474:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
19 11 2022 11:04:58.478:INFO [launcher]: Starting browser ChromeHeadless
19 11 2022 11:04:58.720:INFO [Chrome Headless 107.0.5304.110 (Linux x86_64)]: Connected on socket bS2ZZr__12lCwFZgAAAB with id 63313078
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.022 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.039 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.065 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.076 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) LogUpdateService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[LogUpdateService -> LogUpdateService]: 
	  NullInjectorError: No provider for LogUpdateService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'LogUpdateService', 'LogUpdateService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8235:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26517:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26383:37)
	    at UserContext.apply (src/app/log-update.service.spec.ts:15:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 5 of 17[31m (1 FAILED)[39m (0 secs / 0.115 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[PromptUpdateService -> SwUpdate -> NgswCommChannel -> NgswCommChannel]: 
	  NullInjectorError: No provider for NgswCommChannel!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'PromptUpdateService', 'SwUpdate', 'NgswCommChannel', 'NgswCommChannel' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8235:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at injectInjectorOnly (node_modules/@angular/core/fesm2020/core.mjs:734:33)
	    at Module.ɵɵinject (node_modules/@angular/core/fesm2020/core.mjs:738:60)
	    at Object.factory (node_modules/@angular/service-worker/fesm2020/service-worker.mjs:257:92)
	    at R3Injector.hydrate (node_modules/@angular/core/fesm2020/core.mjs:8786:35)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8674:33)
	    at injectInjectorOnly (node_modules/@angular/core/fesm2020/core.mjs:734:33)
	    at ɵɵinject (node_modules/@angular/core/fesm2020/core.mjs:738:60)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 6 of 17[31m (2 FAILED)[39m (0 secs / 0.122 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 7 of 17[31m (2 FAILED)[39m (0 secs / 0.124 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) NewsComponent should create FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[MatSnackBar -> MatSnackBar]: 
	  NullInjectorError: No provider for MatSnackBar!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'MatSnackBar', 'MatSnackBar' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8235:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at ChainedInjector.get (node_modules/@angular/core/fesm2020/core.mjs:13935:36)
	    at lookupTokenUsingModuleInjector (node_modules/@angular/core/fesm2020/core.mjs:3543:39)
	    at getOrCreateInjectable (node_modules/@angular/core/fesm2020/core.mjs:3588:12)
	    at ɵɵdirectiveInject (node_modules/@angular/core/fesm2020/core.mjs:10977:12)
	    at NodeInjectorFactory.factory (ng:///NewsComponent/ɵfac.js:5:7)
	    at getNodeInjectable (node_modules/@angular/core/fesm2020/core.mjs:3773:44)
	    at createRootComponent (node_modules/@angular/core/fesm2020/core.mjs:14158:35)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m (0 secs / 0.147 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8235:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26517:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26383:37)
	    at UserContext.apply (src/app/http-request-interceptor.service.spec.ts:10:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 9 of 17[31m (4 FAILED)[39m (0 secs / 0.151 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 10 of 17[31m (4 FAILED)[39m (0 secs / 0.154 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) HomeComponent should create FAILED[39m
	Error: NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
	1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
	2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
	error properties: Object({ code: 304 })
	    at validateElementIsKnown (node_modules/@angular/core/fesm2020/core.mjs:5410:23)
	    at elementStartFirstCreatePass (node_modules/@angular/core/fesm2020/core.mjs:15526:9)
	    at ɵɵelementStart (node_modules/@angular/core/fesm2020/core.mjs:15564:9)
	    at templateFn (ng:///HomeComponent.js:9:9)
	    at executeTemplate (node_modules/@angular/core/fesm2020/core.mjs:12190:9)
	    at renderView (node_modules/@angular/core/fesm2020/core.mjs:12012:13)
	    at renderComponent (node_modules/@angular/core/fesm2020/core.mjs:13257:5)
	    at renderChildComponents (node_modules/@angular/core/fesm2020/core.mjs:11871:9)
	    at renderView (node_modules/@angular/core/fesm2020/core.mjs:12037:13)
	    at ComponentFactory.create (node_modules/@angular/core/fesm2020/core.mjs:14029:13)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 11 of 17[31m (5 FAILED)[39m (0 secs / 0.162 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[PromptUpdateService -> PromptUpdateService]: 
	  NullInjectorError: No provider for PromptUpdateService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'PromptUpdateService', 'PromptUpdateService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8235:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26517:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26383:37)
	    at UserContext.apply (src/app/prompt-update.service.spec.ts:15:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 12 of 17[31m (6 FAILED)[39m (0 secs / 0.165 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8235:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26517:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26383:37)
	    at UserContext.apply (src/app/handle-unrecoverable-state.service.spec.ts:15:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 13 of 17[31m (7 FAILED)[39m (0 secs / 0.169 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) CheckForUpdateService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[CheckForUpdateService -> CheckForUpdateService]: 
	  NullInjectorError: No provider for CheckForUpdateService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'CheckForUpdateService', 'CheckForUpdateService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8235:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8685:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26517:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26383:37)
	    at UserContext.apply (src/app/check-for-update.service.spec.ts:17:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 14 of 17[31m (8 FAILED)[39m (0 secs / 0.172 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 15 of 17[31m (8 FAILED)[39m (0 secs / 0.174 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) QuizComponent should create FAILED[39m
	Error: NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
	1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
	2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
	error properties: Object({ code: 304 })
	    at validateElementIsKnown (node_modules/@angular/core/fesm2020/core.mjs:5410:23)
	    at elementStartFirstCreatePass (node_modules/@angular/core/fesm2020/core.mjs:15526:9)
	    at ɵɵelementStart (node_modules/@angular/core/fesm2020/core.mjs:15564:9)
	    at ɵɵelement (node_modules/@angular/core/fesm2020/core.mjs:15636:5)
	    at templateFn (ng:///QuizComponent.js:49:9)
	    at executeTemplate (node_modules/@angular/core/fesm2020/core.mjs:12190:9)
	    at renderView (node_modules/@angular/core/fesm2020/core.mjs:12012:13)
	    at renderComponent (node_modules/@angular/core/fesm2020/core.mjs:13257:5)
	    at renderChildComponents (node_modules/@angular/core/fesm2020/core.mjs:11871:9)
	    at renderView (node_modules/@angular/core/fesm2020/core.mjs:12037:13)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 16 of 17[31m (9 FAILED)[39m (0 secs / 0.197 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 17 of 17[31m (9 FAILED)[39m (0 secs / 0.228 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 17 of 17[31m (9 FAILED)[39m (0.269 secs / 0.228 secs)
[31mTOTAL: 9 FAILED, 8 SUCCESS[39m
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
