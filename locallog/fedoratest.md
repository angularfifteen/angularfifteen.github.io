```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
14 06 2023 07:52:48.829:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
14 06 2023 07:52:48.831:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 06 2023 07:52:48.835:INFO [launcher]: Starting browser Firefox
14 06 2023 07:52:50.426:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket RzTyqy8ztCy8g-91AAAB with id 82934144
Firefox 114.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
14 06 2023 07:52:51.188:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 82934144
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.044 secs)
14 06 2023 07:52:51.236:INFO [Firefox 114.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:437 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.079 secs)
14 06 2023 07:52:51.300:INFO [Firefox 114.0 (Linux x86_64) | LoadingComponent | should create]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:501 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.188 secs)
14 06 2023 07:52:51.400:INFO [Firefox 114.0 (Linux x86_64) | HomeComponent | should create]: Success: 109 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:602 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.225 secs)
14 06 2023 07:52:51.459:INFO [Firefox 114.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:661 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.234 secs)
14 06 2023 07:52:51.460:INFO [Firefox 114.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:661 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.234 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.234 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.362 secs)
14 06 2023 07:52:51.577:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
14 06 2023 07:52:51.577:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
14 06 2023 07:52:51.578:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Success: 128 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:779 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
14 06 2023 07:52:51.625:INFO [Firefox 114.0 (Linux x86_64) | MenuComponent | should create]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:826 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.449 secs)
14 06 2023 07:52:51.677:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
14 06 2023 07:52:51.677:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
14 06 2023 07:52:51.678:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Success: 57 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:879 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.454 secs)
14 06 2023 07:52:51.689:INFO [Firefox 114.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:890 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.461 secs)
14 06 2023 07:52:51.703:INFO [Firefox 114.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:904 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.475 secs)
14 06 2023 07:52:51.717:INFO [Firefox 114.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:918 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.489 secs)
14 06 2023 07:52:51.762:INFO [Firefox 114.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:963 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.503 secs)
14 06 2023 07:52:51.763:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:964 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.508 secs)
14 06 2023 07:52:51.764:INFO [Firefox 114.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:965 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
14 06 2023 07:52:51.765:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 114.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.513 secs)
14 06 2023 07:52:51.767:INFO [Firefox 114.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:969 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.517 secs)
14 06 2023 07:52:51.768:INFO [Firefox 114.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:969 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.522 secs)
14 06 2023 07:52:51.771:INFO [Firefox 114.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:972 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.59 secs / 0.522 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:982 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.59 secs / 0.522 secs)
[32mTOTAL: 17 SUCCESS[39m

[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.59 secs / 0.522 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2K[31mFirefox 114.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 114.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.595 secs / 0.522 secs)
Firefox 114.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[31mFirefox 114.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.595 secs / 0.522 secs)


[4m[1mSuites and tests results:[22m[24m

 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:32:985 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.595 secs / 0.522 secs)

Done in 61.12s.
```
