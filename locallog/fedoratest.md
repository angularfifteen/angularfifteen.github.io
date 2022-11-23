```bash
yarn run v1.22.19
$ ng test --no-watch --browsers ChromeHeadless
23 11 2022 10:03:46.475:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
23 11 2022 10:03:46.478:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
23 11 2022 10:03:46.482:INFO [launcher]: Starting browser ChromeHeadless
23 11 2022 10:03:46.791:INFO [Chrome Headless 107.0.5304.110 (Linux x86_64)]: Connected on socket Vx1h_LNty6TIeqtqAAAB with id 40080403
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) PromptUpdateService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[PromptUpdateService -> PromptUpdateService]: 
	  NullInjectorError: No provider for PromptUpdateService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'PromptUpdateService', 'PromptUpdateService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8229:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26512:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26378:37)
	    at UserContext.apply (src/app/prompt-update.service.spec.ts:15:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 1 of 17[31m (1 FAILED)[39m (0 secs / 0.083 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 2 of 17[31m (1 FAILED)[39m (0 secs / 0.109 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) LogUpdateService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[LogUpdateService -> LogUpdateService]: 
	  NullInjectorError: No provider for LogUpdateService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'LogUpdateService', 'LogUpdateService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8229:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26512:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26378:37)
	    at UserContext.apply (src/app/log-update.service.spec.ts:15:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 3 of 17[31m (2 FAILED)[39m (0 secs / 0.116 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 4 of 17[31m (2 FAILED)[39m (0 secs / 0.142 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 5 of 17[31m (2 FAILED)[39m (0 secs / 0.148 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 6 of 17[31m (2 FAILED)[39m (0 secs / 0.153 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) NewsComponent should create FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[MatSnackBar -> MatSnackBar]: 
	  NullInjectorError: No provider for MatSnackBar!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'MatSnackBar', 'MatSnackBar' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8229:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at ChainedInjector.get (node_modules/@angular/core/fesm2020/core.mjs:13929:36)
	    at lookupTokenUsingModuleInjector (node_modules/@angular/core/fesm2020/core.mjs:3547:39)
	    at getOrCreateInjectable (node_modules/@angular/core/fesm2020/core.mjs:3592:12)
	    at ɵɵdirectiveInject (node_modules/@angular/core/fesm2020/core.mjs:10971:12)
	    at NodeInjectorFactory.factory (ng:///NewsComponent/ɵfac.js:5:7)
	    at getNodeInjectable (node_modules/@angular/core/fesm2020/core.mjs:3777:44)
	    at createRootComponent (node_modules/@angular/core/fesm2020/core.mjs:14152:35)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 7 of 17[31m (3 FAILED)[39m (0 secs / 0.197 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 8 of 17[31m (3 FAILED)[39m (0 secs / 0.202 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 9 of 17[31m (3 FAILED)[39m (0 secs / 0.256 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) QuizComponent should create FAILED[39m
	Error: NG0304: 'app-menu' is not a known element (used in the 'QuizComponent' component template):
	1. If 'app-menu' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
	2. If 'app-menu' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
	error properties: Object({ code: 304 })
	    at validateElementIsKnown (node_modules/@angular/core/fesm2020/core.mjs:5414:23)
	    at elementStartFirstCreatePass (node_modules/@angular/core/fesm2020/core.mjs:15520:9)
	    at ɵɵelementStart (node_modules/@angular/core/fesm2020/core.mjs:15558:9)
	    at ɵɵelement (node_modules/@angular/core/fesm2020/core.mjs:15630:5)
	    at templateFn (ng:///QuizComponent.js:49:9)
	    at executeTemplate (node_modules/@angular/core/fesm2020/core.mjs:12184:9)
	    at renderView (node_modules/@angular/core/fesm2020/core.mjs:12006:13)
	    at renderComponent (node_modules/@angular/core/fesm2020/core.mjs:13251:5)
	    at renderChildComponents (node_modules/@angular/core/fesm2020/core.mjs:11865:9)
	    at renderView (node_modules/@angular/core/fesm2020/core.mjs:12031:13)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 10 of 17[31m (4 FAILED)[39m (0 secs / 0.291 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) AppComponent should create the app FAILED[39m
	NullInjectorError: R3InjectorError(DynamicTestModule)[PromptUpdateService -> SwUpdate -> NgswCommChannel -> NgswCommChannel]: 
	  NullInjectorError: No provider for NgswCommChannel!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'PromptUpdateService', 'SwUpdate', 'NgswCommChannel', 'NgswCommChannel' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8229:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at injectInjectorOnly (node_modules/@angular/core/fesm2020/core.mjs:738:33)
	    at Module.ɵɵinject (node_modules/@angular/core/fesm2020/core.mjs:742:60)
	    at Object.factory (node_modules/@angular/service-worker/fesm2020/service-worker.mjs:257:92)
	    at R3Injector.hydrate (node_modules/@angular/core/fesm2020/core.mjs:8780:35)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8668:33)
	    at injectInjectorOnly (node_modules/@angular/core/fesm2020/core.mjs:738:33)
	    at ɵɵinject (node_modules/@angular/core/fesm2020/core.mjs:742:60)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 11 of 17[31m (5 FAILED)[39m (0 secs / 0.3 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) CheckForUpdateService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[CheckForUpdateService -> CheckForUpdateService]: 
	  NullInjectorError: No provider for CheckForUpdateService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'CheckForUpdateService', 'CheckForUpdateService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8229:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26512:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26378:37)
	    at UserContext.apply (src/app/check-for-update.service.spec.ts:17:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 12 of 17[31m (6 FAILED)[39m (0 secs / 0.306 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) HandleUnrecoverableStateService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[HandleUnrecoverableStateService -> HandleUnrecoverableStateService]: 
	  NullInjectorError: No provider for HandleUnrecoverableStateService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HandleUnrecoverableStateService', 'HandleUnrecoverableStateService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8229:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26512:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26378:37)
	    at UserContext.apply (src/app/handle-unrecoverable-state.service.spec.ts:15:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 13 of 17[31m (7 FAILED)[39m (0 secs / 0.311 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) HttpRequestInterceptorService should be created FAILED[39m
	NullInjectorError: R3InjectorError(CompilerModule)[HttpRequestInterceptorService -> HttpRequestInterceptorService]: 
	  NullInjectorError: No provider for HttpRequestInterceptorService!
	error properties: Object({ ngTempTokenPath: null, ngTokenPath: [ 'HttpRequestInterceptorService', 'HttpRequestInterceptorService' ] })
	    at NullInjector.get (node_modules/@angular/core/fesm2020/core.mjs:8229:27)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at R3Injector.get (node_modules/@angular/core/fesm2020/core.mjs:8679:33)
	    at TestBedImpl.inject (node_modules/@angular/core/fesm2020/testing.mjs:26512:62)
	    at Function.TestBed [as inject] (node_modules/@angular/core/fesm2020/testing.mjs:26378:37)
	    at UserContext.apply (src/app/http-request-interceptor.service.spec.ts:10:15)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:375:26)
	    at ProxyZoneSpec.onInvoke (node_modules/zone.js/fesm2015/zone-testing.js:287:39)
	    at _ZoneDelegate.invoke (node_modules/zone.js/fesm2015/zone.js:374:52)
	    at Zone.run (node_modules/zone.js/fesm2015/zone.js:134:43)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 14 of 17[31m (8 FAILED)[39m (0 secs / 0.315 secs)
[1A[2K[31mChrome Headless 107.0.5304.110 (Linux x86_64) HomeComponent should create FAILED[39m
	Error: NG0304: 'mat-toolbar' is not a known element (used in the 'HomeComponent' component template):
	1. If 'mat-toolbar' is an Angular component, then verify that it is a part of an @NgModule where this component is declared.
	2. If 'mat-toolbar' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message.
	error properties: Object({ code: 304 })
	    at validateElementIsKnown (node_modules/@angular/core/fesm2020/core.mjs:5414:23)
	    at elementStartFirstCreatePass (node_modules/@angular/core/fesm2020/core.mjs:15520:9)
	    at ɵɵelementStart (node_modules/@angular/core/fesm2020/core.mjs:15558:9)
	    at templateFn (ng:///HomeComponent.js:9:9)
	    at executeTemplate (node_modules/@angular/core/fesm2020/core.mjs:12184:9)
	    at renderView (node_modules/@angular/core/fesm2020/core.mjs:12006:13)
	    at renderComponent (node_modules/@angular/core/fesm2020/core.mjs:13251:5)
	    at renderChildComponents (node_modules/@angular/core/fesm2020/core.mjs:11865:9)
	    at renderView (node_modules/@angular/core/fesm2020/core.mjs:12031:13)
	    at ComponentFactory.create (node_modules/@angular/core/fesm2020/core.mjs:14023:13)
Chrome Headless 107.0.5304.110 (Linux x86_64): Executed 15 of 17[31m (9 FAILED)[39m (0 secs / 0.326 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 16 of 17[31m (9 FAILED)[39m (0 secs / 0.349 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 17 of 17[31m (9 FAILED)[39m (0 secs / 0.351 secs)
[1A[2KChrome Headless 107.0.5304.110 (Linux x86_64): Executed 17 of 17[31m (9 FAILED)[39m (0.424 secs / 0.351 secs)
[31mTOTAL: 9 FAILED, 8 SUCCESS[39m
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
