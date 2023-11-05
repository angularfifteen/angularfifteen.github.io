```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
04 11 2023 21:34:43.390:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 11 2023 21:34:43.392:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 11 2023 21:34:43.394:INFO [launcher]: Starting browser Firefox
04 11 2023 21:34:44.751:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket UGD0MNawXAoZUuxeAAAB with id 49036985
Firefox 119.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
04 11 2023 21:34:45.580:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 49036985
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
04 11 2023 21:34:45.612:INFO [Firefox 119.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:240 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
04 11 2023 21:34:45.615:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.063 secs)
04 11 2023 21:34:45.656:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:284 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 119.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.063 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.073 secs)
04 11 2023 21:34:45.670:ERROR [Firefox 119.0 (Linux x86_64) | LoadingComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

04 11 2023 21:34:45.671:INFO [Firefox 119.0 (Linux x86_64) | LoadingComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:299 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.152 secs)
04 11 2023 21:34:45.757:INFO [Firefox 119.0 (Linux x86_64) | HomeComponent | should create]: Success: 79 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:385 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.175 secs)
04 11 2023 21:34:45.774:INFO [Firefox 119.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:402 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.183 secs)
04 11 2023 21:34:45.787:INFO [Firefox 119.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:415 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.188 secs)
04 11 2023 21:34:45.793:INFO [Firefox 119.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:422 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.193 secs)
04 11 2023 21:34:45.803:INFO [Firefox 119.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:431 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.221 secs)
04 11 2023 21:34:45.831:INFO [Firefox 119.0 (Linux x86_64) | MenuComponent | should create]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:459 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 119.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.221 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 119.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.221 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.263 secs)
04 11 2023 21:34:45.873:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
04 11 2023 21:34:45.873:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
04 11 2023 21:34:45.873:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:501 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.267 secs)
04 11 2023 21:34:45.877:INFO [Firefox 119.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:505 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.273 secs)
04 11 2023 21:34:45.887:INFO [Firefox 119.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:515 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.273 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.273 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.337 secs)
04 11 2023 21:34:45.966:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
04 11 2023 21:34:45.966:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
04 11 2023 21:34:45.966:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Success: 64 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:594 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.339 secs)
04 11 2023 21:34:45.968:INFO [Firefox 119.0 (Linux x86_64) | LoadingService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:596 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.343 secs)
04 11 2023 21:34:45.968:INFO [Firefox 119.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:596 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.346 secs)
04 11 2023 21:34:45.969:INFO [Firefox 119.0 (Linux x86_64) | NewsService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:597 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.35 secs)
04 11 2023 21:34:45.976:INFO [Firefox 119.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:604 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.397 secs / 0.35 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:607 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.397 secs / 0.35 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 24.12s.
```
