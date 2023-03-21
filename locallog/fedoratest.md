```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
20 03 2023 23:50:03.300:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 03 2023 23:50:03.303:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 03 2023 23:50:03.307:INFO [launcher]: Starting browser Firefox
20 03 2023 23:50:04.840:INFO [Firefox 110.0 (Linux x86_64)]: Connected on socket Wjv0wiiWnT-_gSe1AAAB with id 80366161
Firefox 110.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
20 03 2023 23:50:05.517:INFO [Firefox 110.0 (Linux x86_64)]: Starting tests 80366161
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 110.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 110.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.205 secs)
20 03 2023 23:50:05.726:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
20 03 2023 23:50:05.726:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
20 03 2023 23:50:05.727:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Success: 205 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:477 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.214 secs)
20 03 2023 23:50:05.752:INFO [Firefox 110.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:503 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
20 03 2023 23:50:05.782:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 110.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.226 secs)
20 03 2023 23:50:05.784:INFO [Firefox 110.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:534 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
20 03 2023 23:50:05.785:INFO [Firefox 110.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:535 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
20 03 2023 23:50:05.787:INFO [Firefox 110.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:537 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.343 secs)
20 03 2023 23:50:05.879:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
20 03 2023 23:50:05.879:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
20 03 2023 23:50:05.880:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Success: 107 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:630 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 110.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.343 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.348 secs)
20 03 2023 23:50:05.885:ERROR [Firefox 110.0 (Linux x86_64) | NewsService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

20 03 2023 23:50:05.886:INFO [Firefox 110.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:636 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.372 secs)
20 03 2023 23:50:05.914:INFO [Firefox 110.0 (Linux x86_64) | MenuComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:664 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.38 secs)
20 03 2023 23:50:05.924:INFO [Firefox 110.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:674 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.384 secs)
20 03 2023 23:50:05.928:INFO [Firefox 110.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:678 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.418 secs)
20 03 2023 23:50:05.965:INFO [Firefox 110.0 (Linux x86_64) | HomeComponent | should create]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:715 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.422 secs)
20 03 2023 23:50:05.972:INFO [Firefox 110.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:722 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.427 secs)
20 03 2023 23:50:05.977:INFO [Firefox 110.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:727 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.437 secs)
20 03 2023 23:50:05.990:INFO [Firefox 110.0 (Linux x86_64) | LoadingComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:740 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.447 secs)
20 03 2023 23:50:06.009:INFO [Firefox 110.0 (Linux x86_64) | AppComponent | should create the app]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:759 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 110.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.454 secs)
20 03 2023 23:50:06.012:INFO [Firefox 110.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:762 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.474 secs)
20 03 2023 23:50:06.036:INFO [Firefox 110.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:786 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.523 secs / 0.474 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 110.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:793 min/sec/ms


Firefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.523 secs / 0.474 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 14.00s.
```
