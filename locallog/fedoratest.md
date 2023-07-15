```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
15 07 2023 00:14:02.310:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
15 07 2023 00:14:02.312:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
15 07 2023 00:14:02.315:INFO [launcher]: Starting browser Firefox
15 07 2023 00:14:03.772:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket o6tDj5lku8qFFGtfAAAB with id 15489772
Firefox 114.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
15 07 2023 00:14:04.523:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 15489772
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.062 secs)
15 07 2023 00:14:04.592:INFO [Firefox 114.0 (Linux x86_64) | LoadingComponent | should create]: Success: 62 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:294 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.07 secs)
15 07 2023 00:14:04.613:INFO [Firefox 114.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:315 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.173 secs)
15 07 2023 00:14:04.717:INFO [Firefox 114.0 (Linux x86_64) | HomeComponent | should create]: Success: 103 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:420 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.186 secs)
15 07 2023 00:14:04.735:INFO [Firefox 114.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:437 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.203 secs)
15 07 2023 00:14:04.750:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:453 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.211 secs)
15 07 2023 00:14:04.771:INFO [Firefox 114.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:473 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.233 secs)
15 07 2023 00:14:04.807:INFO [Firefox 114.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:509 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
15 07 2023 00:14:04.809:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.233 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.233 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.347 secs)
15 07 2023 00:14:04.904:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
15 07 2023 00:14:04.905:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
15 07 2023 00:14:04.905:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Success: 114 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:607 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 114.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.347 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.365 secs)
15 07 2023 00:14:04.928:ERROR [Firefox 114.0 (Linux x86_64) | KeyIndustriesComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

15 07 2023 00:14:04.928:INFO [Firefox 114.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:630 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.37 secs)
15 07 2023 00:14:04.939:INFO [Firefox 114.0 (Linux x86_64) | LoadingService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:641 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 114.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.37 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 114.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.37 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.423 secs)
15 07 2023 00:14:04.993:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
15 07 2023 00:14:04.993:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
15 07 2023 00:14:04.993:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Success: 53 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:696 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.43 secs)
15 07 2023 00:14:05.015:INFO [Firefox 114.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:717 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.432 secs)
15 07 2023 00:14:05.016:INFO [Firefox 114.0 (Linux x86_64) | NewsService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:718 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.434 secs)
15 07 2023 00:14:05.033:INFO [Firefox 114.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:736 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.459 secs)
15 07 2023 00:14:05.040:INFO [Firefox 114.0 (Linux x86_64) | MenuComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:742 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.463 secs)
15 07 2023 00:14:05.054:INFO [Firefox 114.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:757 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.468 secs)
15 07 2023 00:14:05.056:INFO [Firefox 114.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:758 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.552 secs / 0.468 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:780 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.552 secs / 0.468 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 21.59s.
```
