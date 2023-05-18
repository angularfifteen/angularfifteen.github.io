```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
17 05 2023 22:49:57.256:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 05 2023 22:49:57.258:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 05 2023 22:49:57.261:INFO [launcher]: Starting browser Firefox
17 05 2023 22:49:58.732:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket UflBKh9AuzC5G1m8AAAB with id 54158383
Firefox 113.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
17 05 2023 22:49:59.456:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 54158383
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.023 secs)
17 05 2023 22:49:59.496:INFO [Firefox 113.0 (Linux x86_64) | LoadingService | should be created]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:257 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.033 secs)
17 05 2023 22:49:59.500:INFO [Firefox 113.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:261 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.055 secs)
17 05 2023 22:49:59.526:INFO [Firefox 113.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:287 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.055 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.055 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.244 secs)
17 05 2023 22:49:59.720:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
17 05 2023 22:49:59.721:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
17 05 2023 22:49:59.721:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Success: 189 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:482 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.272 secs)
17 05 2023 22:49:59.753:INFO [Firefox 113.0 (Linux x86_64) | MenuComponent | should create]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:514 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.28 secs)
17 05 2023 22:49:59.767:INFO [Firefox 113.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:528 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.284 secs)
17 05 2023 22:49:59.773:INFO [Firefox 113.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:534 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.288 secs)
17 05 2023 22:49:59.778:INFO [Firefox 113.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:539 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.327 secs)
17 05 2023 22:49:59.819:INFO [Firefox 113.0 (Linux x86_64) | HomeComponent | should create]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:581 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.339 secs)
17 05 2023 22:49:59.838:INFO [Firefox 113.0 (Linux x86_64) | LoadingComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:599 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 113.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.339 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 113.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.339 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
17 05 2023 22:49:59.893:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
17 05 2023 22:49:59.893:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
17 05 2023 22:49:59.893:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Success: 53 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:654 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.406 secs)
17 05 2023 22:49:59.912:INFO [Firefox 113.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:673 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.41 secs)
17 05 2023 22:49:59.917:INFO [Firefox 113.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:678 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.419 secs)
17 05 2023 22:49:59.928:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:689 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.424 secs)
17 05 2023 22:49:59.934:INFO [Firefox 113.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:695 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.428 secs)
17 05 2023 22:49:59.940:INFO [Firefox 113.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:701 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
17 05 2023 22:49:59.949:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.437 secs)
17 05 2023 22:49:59.951:INFO [Firefox 113.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:713 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.437 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.503 secs / 0.437 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS
17 05 2023 22:49:59.962:ERROR [Firefox 113.0 (Linux x86_64)]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.



[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:724 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.503 secs / 0.437 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 28.51s.
```
