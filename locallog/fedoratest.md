```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
10 12 2022 23:13:15.786:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 12 2022 23:13:15.789:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 12 2022 23:13:15.792:INFO [launcher]: Starting browser Firefox
10 12 2022 23:13:17.529:INFO [Firefox 107.0 (Linux x86_64)]: Connected on socket pV_LeNvWCfCWbP_AAAAB with id 72901679
Firefox 107.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
10 12 2022 23:13:18.484:INFO [Firefox 107.0 (Linux x86_64)]: Starting tests 72901679
[1A[2KFirefox 107.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.047 secs)
10 12 2022 23:13:18.549:INFO [Firefox 107.0 (Linux x86_64) | LoadingComponent | should create]: Success: 47 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:784 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.065 secs)
10 12 2022 23:13:18.574:INFO [Firefox 107.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:808 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.132 secs)
10 12 2022 23:13:18.644:INFO [Firefox 107.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 67 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:879 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.139 secs)
10 12 2022 23:13:18.649:INFO [Firefox 107.0 (Linux x86_64) | LoadingService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:883 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.148 secs)
10 12 2022 23:13:18.660:INFO [Firefox 107.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:894 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.157 secs)
10 12 2022 23:13:18.670:INFO [Firefox 107.0 (Linux x86_64) | NewsService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:904 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.168 secs)
10 12 2022 23:13:18.705:INFO [Firefox 107.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:940 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.176 secs)
10 12 2022 23:13:18.715:INFO [Firefox 107.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:949 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
10 12 2022 23:13:18.717:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.176 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.176 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.292 secs)
10 12 2022 23:13:18.830:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
10 12 2022 23:13:18.830:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
10 12 2022 23:13:18.830:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Success: 116 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:65 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 107.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.292 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.353 secs)
10 12 2022 23:13:18.890:ERROR [Firefox 107.0 (Linux x86_64) | HomeComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

10 12 2022 23:13:18.890:INFO [Firefox 107.0 (Linux x86_64) | HomeComponent | should create]: Success: 61 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:124 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.353 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.353 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.455 secs)
10 12 2022 23:13:18.991:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
10 12 2022 23:13:18.991:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
10 12 2022 23:13:18.992:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Success: 102 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:226 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.471 secs)
10 12 2022 23:13:19.017:INFO [Firefox 107.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:251 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 107.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.476 secs)
10 12 2022 23:13:19.024:INFO [Firefox 107.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:259 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.481 secs)
10 12 2022 23:13:19.029:INFO [Firefox 107.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:264 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.489 secs)
10 12 2022 23:13:19.040:INFO [Firefox 107.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:274 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.519 secs)
10 12 2022 23:13:19.078:INFO [Firefox 107.0 (Linux x86_64) | MenuComponent | should create]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:312 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.525 secs)
10 12 2022 23:13:19.092:INFO [Firefox 107.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:327 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.611 secs / 0.525 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 107.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:335 min/sec/ms


Firefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.611 secs / 0.525 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 16.73s.
```
