```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
10 03 2023 07:24:50.369:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 03 2023 07:24:50.371:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 03 2023 07:24:50.385:INFO [launcher]: Starting browser Firefox
10 03 2023 07:24:51.743:INFO [Firefox 110.0 (Linux x86_64)]: Connected on socket ST-Uez5H6yTiGA8SAAAB with id 80798902
Firefox 110.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
10 03 2023 07:24:52.619:INFO [Firefox 110.0 (Linux x86_64)]: Starting tests 80798902
[1A[2KFirefox 110.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.081 secs)
10 03 2023 07:24:52.637:INFO [Firefox 110.0 (Linux x86_64) | AppComponent | should create the app]: Success: 81 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:285 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 110.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.095 secs)
10 03 2023 07:24:52.639:INFO [Firefox 110.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:287 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.103 secs)
10 03 2023 07:24:52.640:INFO [Firefox 110.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:288 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
10 03 2023 07:24:52.642:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.234 secs)
10 03 2023 07:24:52.706:INFO [Firefox 110.0 (Linux x86_64) | HomeComponent | should create]: Success: 131 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:354 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.234 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.242 secs)
10 03 2023 07:24:52.710:ERROR [Firefox 110.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

10 03 2023 07:24:52.710:INFO [Firefox 110.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:358 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.242 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.242 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.341 secs)
10 03 2023 07:24:52.850:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
10 03 2023 07:24:52.850:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
10 03 2023 07:24:52.850:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Success: 99 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:497 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.348 secs)
10 03 2023 07:24:52.851:INFO [Firefox 110.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:499 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.355 secs)
10 03 2023 07:24:52.878:INFO [Firefox 110.0 (Linux x86_64) | LoadingService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:525 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.359 secs)
10 03 2023 07:24:52.878:INFO [Firefox 110.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:526 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.374 secs)
10 03 2023 07:24:52.887:INFO [Firefox 110.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:541 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.404 secs)
10 03 2023 07:24:52.943:INFO [Firefox 110.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:590 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.412 secs)
10 03 2023 07:24:52.944:INFO [Firefox 110.0 (Linux x86_64) | LoadingComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:591 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.412 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.412 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.598 secs)
10 03 2023 07:24:53.134:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
10 03 2023 07:24:53.134:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
10 03 2023 07:24:53.134:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Success: 186 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:781 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.614 secs)
10 03 2023 07:24:53.137:INFO [Firefox 110.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:784 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.645 secs)
10 03 2023 07:24:53.168:INFO [Firefox 110.0 (Linux x86_64) | MenuComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:815 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.649 secs)
10 03 2023 07:24:53.175:INFO [Firefox 110.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:822 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.653 secs)
10 03 2023 07:24:53.182:INFO [Firefox 110.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:829 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.563 secs / 0.653 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 110.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:833 min/sec/ms


Firefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.563 secs / 0.653 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.93s.
```
