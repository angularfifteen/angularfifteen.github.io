```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
25 04 2023 02:22:54.343:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 04 2023 02:22:54.346:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 04 2023 02:22:54.349:INFO [launcher]: Starting browser Firefox
25 04 2023 02:22:55.843:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket Z0c8ASYM5Yr1r8LFAAAB with id 73551845
Firefox 112.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
25 04 2023 02:22:56.625:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 73551845
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 112.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 112.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.197 secs)
25 04 2023 02:22:56.841:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
25 04 2023 02:22:56.842:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
25 04 2023 02:22:56.842:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Success: 197 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:550 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.202 secs)
25 04 2023 02:22:56.843:INFO [Firefox 112.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:551 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.212 secs)
25 04 2023 02:22:56.858:INFO [Firefox 112.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:566 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.215 secs)
25 04 2023 02:22:56.860:INFO [Firefox 112.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:568 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.24 secs)
25 04 2023 02:22:56.883:INFO [Firefox 112.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:591 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.249 secs)
25 04 2023 02:22:56.888:INFO [Firefox 112.0 (Linux x86_64) | LoadingComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:597 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.293 secs)
25 04 2023 02:22:56.934:INFO [Firefox 112.0 (Linux x86_64) | MenuComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:643 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.298 secs)
25 04 2023 02:22:56.939:INFO [Firefox 112.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:648 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.298 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.298 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.379 secs)
25 04 2023 02:22:57.028:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
25 04 2023 02:22:57.029:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
25 04 2023 02:22:57.029:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Success: 81 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:737 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
25 04 2023 02:22:57.039:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:747 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.424 secs)
25 04 2023 02:22:57.076:INFO [Firefox 112.0 (Linux x86_64) | HomeComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:784 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.427 secs)
25 04 2023 02:22:57.083:INFO [Firefox 112.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:791 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.435 secs)
25 04 2023 02:22:57.090:INFO [Firefox 112.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:798 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.441 secs)
25 04 2023 02:22:57.098:INFO [Firefox 112.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:806 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.449 secs)
25 04 2023 02:22:57.108:INFO [Firefox 112.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:816 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
25 04 2023 02:22:57.109:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 112.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.454 secs)
25 04 2023 02:22:57.112:INFO [Firefox 112.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:821 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 112.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.454 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.459 secs)
25 04 2023 02:22:57.120:ERROR [Firefox 112.0 (Linux x86_64) | LogUpdateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

25 04 2023 02:22:57.120:INFO [Firefox 112.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:828 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.5 secs / 0.459 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:836 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.5 secs / 0.459 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 13.71s.
```
