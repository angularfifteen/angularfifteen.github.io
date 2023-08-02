```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
01 08 2023 23:14:02.826:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
01 08 2023 23:14:02.828:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 08 2023 23:14:02.830:INFO [launcher]: Starting browser Firefox
01 08 2023 23:14:04.080:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket 3rMq4Ac6sVsaN_HKAAAB with id 19410238
Firefox 115.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
01 08 2023 23:14:04.704:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 19410238
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.054 secs)
01 08 2023 23:14:04.775:INFO [Firefox 115.0 (Linux x86_64) | LoadingComponent | should create]: Success: 54 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:965 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.128 secs)
01 08 2023 23:14:04.857:INFO [Firefox 115.0 (Linux x86_64) | MenuComponent | should create]: Success: 74 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:46 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.155 secs)
01 08 2023 23:14:04.877:INFO [Firefox 115.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:66 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.162 secs)
01 08 2023 23:14:04.885:INFO [Firefox 115.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:75 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.168 secs)
01 08 2023 23:14:04.892:INFO [Firefox 115.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:81 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
01 08 2023 23:14:04.944:INFO [Firefox 115.0 (Linux x86_64) | HomeComponent | should create]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:133 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.294 secs)
01 08 2023 23:14:05.021:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
01 08 2023 23:14:05.021:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
01 08 2023 23:14:05.021:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Success: 75 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:210 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 115.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.294 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 115.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.294 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.331 secs)
01 08 2023 23:14:05.060:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
01 08 2023 23:14:05.060:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
01 08 2023 23:14:05.061:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:250 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.335 secs)
01 08 2023 23:14:05.066:INFO [Firefox 115.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:255 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.339 secs)
01 08 2023 23:14:05.070:INFO [Firefox 115.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:259 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.342 secs)
01 08 2023 23:14:05.074:INFO [Firefox 115.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:263 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.344 secs)
01 08 2023 23:14:05.077:INFO [Firefox 115.0 (Linux x86_64) | NewsService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:266 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.346 secs)
01 08 2023 23:14:05.081:INFO [Firefox 115.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:270 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.349 secs)
01 08 2023 23:14:05.084:INFO [Firefox 115.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:273 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.355 secs)
01 08 2023 23:14:05.092:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:281 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
01 08 2023 23:14:05.097:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 115.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.361 secs)
01 08 2023 23:14:05.100:INFO [Firefox 115.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:289 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 115.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.361 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.364 secs)
01 08 2023 23:14:05.107:ERROR [Firefox 115.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

01 08 2023 23:14:05.107:INFO [Firefox 115.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:296 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.406 secs / 0.364 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:303 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.406 secs / 0.364 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.54s.
```
