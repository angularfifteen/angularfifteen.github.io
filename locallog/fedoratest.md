```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
17 01 2023 07:10:24.951:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 01 2023 07:10:24.953:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 01 2023 07:10:24.956:INFO [launcher]: Starting browser Firefox
17 01 2023 07:10:26.794:INFO [Firefox 108.0 (Linux x86_64)]: Connected on socket kIk7tL0LDjY2AvMeAAAB with id 58000957
Firefox 108.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
17 01 2023 07:10:27.749:INFO [Firefox 108.0 (Linux x86_64)]: Starting tests 58000957
[1A[2KFirefox 108.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.086 secs)
17 01 2023 07:10:27.852:INFO [Firefox 108.0 (Linux x86_64) | LoadingComponent | should create]: Success: 86 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:918 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.101 secs)
17 01 2023 07:10:27.872:INFO [Firefox 108.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:938 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.212 secs)
17 01 2023 07:10:27.991:INFO [Firefox 108.0 (Linux x86_64) | MenuComponent | should create]: Success: 111 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:58 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.227 secs)
17 01 2023 07:10:28.014:INFO [Firefox 108.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:80 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.234 secs)
17 01 2023 07:10:28.077:INFO [Firefox 108.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:144 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.295 secs)
17 01 2023 07:10:28.086:INFO [Firefox 108.0 (Linux x86_64) | HomeComponent | should create]: Success: 61 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:152 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.301 secs)
17 01 2023 07:10:28.093:INFO [Firefox 108.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:159 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.306 secs)
17 01 2023 07:10:28.111:INFO [Firefox 108.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:177 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.312 secs)
17 01 2023 07:10:28.112:INFO [Firefox 108.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:179 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 108.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.312 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 108.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.312 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.395 secs)
17 01 2023 07:10:28.198:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
17 01 2023 07:10:28.198:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
17 01 2023 07:10:28.199:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Success: 83 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:265 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.413 secs)
17 01 2023 07:10:28.221:INFO [Firefox 108.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:288 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 108.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.418 secs)
17 01 2023 07:10:28.223:INFO [Firefox 108.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:289 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.422 secs)
17 01 2023 07:10:28.235:INFO [Firefox 108.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:301 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.431 secs)
17 01 2023 07:10:28.239:INFO [Firefox 108.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:305 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.463 secs)
17 01 2023 07:10:28.282:INFO [Firefox 108.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:348 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 108.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.463 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
17 01 2023 07:10:28.366:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 108.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.463 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.575 secs)
17 01 2023 07:10:28.390:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
17 01 2023 07:10:28.390:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
17 01 2023 07:10:28.390:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Success: 112 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:456 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 108.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.575 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.582 secs)
17 01 2023 07:10:28.409:ERROR [Firefox 108.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

17 01 2023 07:10:28.409:INFO [Firefox 108.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:476 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.667 secs / 0.582 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 108.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:486 min/sec/ms


Firefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.667 secs / 0.582 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 17.25s.
```
