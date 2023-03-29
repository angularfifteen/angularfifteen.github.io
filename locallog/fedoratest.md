```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
28 03 2023 22:58:24.429:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 03 2023 22:58:24.431:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 03 2023 22:58:24.434:INFO [launcher]: Starting browser Firefox
28 03 2023 22:58:25.875:INFO [Firefox 111.0 (Linux x86_64)]: Connected on socket D3rQ2tMeBJpFjtU-AAAB with id 58539962
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
28 03 2023 22:58:26.575:INFO [Firefox 111.0 (Linux x86_64)]: Starting tests 58539962
[1A[2KFirefox 111.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.035 secs)
28 03 2023 22:58:26.612:INFO [Firefox 111.0 (Linux x86_64) | QuizService | should be created]: Success: 35 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:201 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.035 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.035 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.297 secs)
28 03 2023 22:58:26.886:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 03 2023 22:58:26.886:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 03 2023 22:58:26.887:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Success: 262 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:476 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.304 secs)
28 03 2023 22:58:26.910:INFO [Firefox 111.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:499 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.316 secs)
28 03 2023 22:58:26.917:INFO [Firefox 111.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:506 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.353 secs)
28 03 2023 22:58:26.951:INFO [Firefox 111.0 (Linux x86_64) | MenuComponent | should create]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:540 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.36 secs)
28 03 2023 22:58:26.964:INFO [Firefox 111.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:553 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.367 secs)
28 03 2023 22:58:26.978:INFO [Firefox 111.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:567 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.377 secs)
28 03 2023 22:58:26.984:INFO [Firefox 111.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:573 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
28 03 2023 22:58:26.990:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 111.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.398 secs)
28 03 2023 22:58:27.015:INFO [Firefox 111.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:604 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.402 secs)
28 03 2023 22:58:27.017:INFO [Firefox 111.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:606 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.402 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.402 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.465 secs)
28 03 2023 22:58:27.078:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
28 03 2023 22:58:27.078:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
28 03 2023 22:58:27.078:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:668 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 111.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.465 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.491 secs)
28 03 2023 22:58:27.107:ERROR [Firefox 111.0 (Linux x86_64) | KeyIndustriesComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

28 03 2023 22:58:27.107:INFO [Firefox 111.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:696 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.496 secs)
28 03 2023 22:58:27.124:INFO [Firefox 111.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:713 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.537 secs)
28 03 2023 22:58:27.159:INFO [Firefox 111.0 (Linux x86_64) | HomeComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:748 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.547 secs)
28 03 2023 22:58:27.179:INFO [Firefox 111.0 (Linux x86_64) | LoadingComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:768 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.557 secs)
28 03 2023 22:58:27.238:INFO [Firefox 111.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:828 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.561 secs)
28 03 2023 22:58:27.239:INFO [Firefox 111.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:828 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.664 secs / 0.561 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 111.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:832 min/sec/ms


Firefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.664 secs / 0.561 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 25.91s.
```
