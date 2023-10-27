```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
27 10 2023 10:23:33.099:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 10 2023 10:23:33.101:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 10 2023 10:23:33.109:INFO [launcher]: Starting browser Firefox
27 10 2023 10:23:34.258:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket wi0fNTC6SHJIzF6vAAAB with id 20893015
Firefox 118.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
27 10 2023 10:23:35.066:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 20893015
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.026 secs)
27 10 2023 10:23:35.099:INFO [Firefox 118.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:15 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.038 secs)
27 10 2023 10:23:35.127:INFO [Firefox 118.0 (Linux x86_64) | QuizService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:44 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.079 secs)
27 10 2023 10:23:35.158:INFO [Firefox 118.0 (Linux x86_64) | LoadingComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:74 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.168 secs)
27 10 2023 10:23:35.285:INFO [Firefox 118.0 (Linux x86_64) | MenuComponent | should create]: Success: 89 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:201 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.179 secs)
27 10 2023 10:23:35.286:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:202 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.186 secs)
27 10 2023 10:23:35.287:INFO [Firefox 118.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:203 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.19 secs)
27 10 2023 10:23:35.290:INFO [Firefox 118.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:206 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.248 secs)
27 10 2023 10:23:35.363:INFO [Firefox 118.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:279 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.248 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.248 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.381 secs)
27 10 2023 10:23:35.480:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
27 10 2023 10:23:35.480:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
27 10 2023 10:23:35.480:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Success: 133 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:396 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.388 secs)
27 10 2023 10:23:35.522:INFO [Firefox 118.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:438 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.391 secs)
27 10 2023 10:23:35.523:INFO [Firefox 118.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:439 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.395 secs)
27 10 2023 10:23:35.524:INFO [Firefox 118.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:440 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.403 secs)
27 10 2023 10:23:35.525:INFO [Firefox 118.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:441 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.409 secs)
27 10 2023 10:23:35.528:INFO [Firefox 118.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:444 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
27 10 2023 10:23:35.535:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 118.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.409 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 118.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.409 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.452 secs)
27 10 2023 10:23:35.564:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
27 10 2023 10:23:35.564:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
27 10 2023 10:23:35.564:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:480 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 118.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.452 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.457 secs)
27 10 2023 10:23:35.570:ERROR [Firefox 118.0 (Linux x86_64) | LogUpdateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

27 10 2023 10:23:35.570:INFO [Firefox 118.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:486 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.483 secs)
27 10 2023 10:23:35.596:INFO [Firefox 118.0 (Linux x86_64) | HomeComponent | should create]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:512 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.537 secs / 0.483 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:522 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.537 secs / 0.483 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 11.88s.
```
