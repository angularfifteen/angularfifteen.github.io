```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
16 03 2023 06:41:22.203:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 03 2023 06:41:22.205:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
16 03 2023 06:41:22.207:INFO [launcher]: Starting browser Firefox
16 03 2023 06:41:23.568:INFO [Firefox 110.0 (Linux x86_64)]: Connected on socket UUCUavFt6-ekQT2PAAAB with id 43545780
Firefox 110.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
16 03 2023 06:41:24.488:INFO [Firefox 110.0 (Linux x86_64)]: Starting tests 43545780
[1A[2KFirefox 110.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.092 secs)
16 03 2023 06:41:24.498:INFO [Firefox 110.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 92 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:308 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.1 secs)
16 03 2023 06:41:24.500:INFO [Firefox 110.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:310 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.108 secs)
16 03 2023 06:41:24.501:INFO [Firefox 110.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:311 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.119 secs)
16 03 2023 06:41:24.502:INFO [Firefox 110.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:312 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.119 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.119 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.249 secs)
16 03 2023 06:41:24.505:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
16 03 2023 06:41:24.505:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
16 03 2023 06:41:24.505:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Success: 130 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:314 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.255 secs)
16 03 2023 06:41:24.529:INFO [Firefox 110.0 (Linux x86_64) | LoadingService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:338 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.267 secs)
16 03 2023 06:41:24.533:INFO [Firefox 110.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:342 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.282 secs)
16 03 2023 06:41:24.535:INFO [Firefox 110.0 (Linux x86_64) | LoadingComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:345 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.282 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.282 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.419 secs)
16 03 2023 06:41:24.692:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
16 03 2023 06:41:24.693:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
16 03 2023 06:41:24.693:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Success: 137 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:502 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.484 secs)
16 03 2023 06:41:24.765:INFO [Firefox 110.0 (Linux x86_64) | MenuComponent | should create]: Success: 65 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:574 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.493 secs)
16 03 2023 06:41:24.767:INFO [Firefox 110.0 (Linux x86_64) | NewsService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:576 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.503 secs)
16 03 2023 06:41:24.767:INFO [Firefox 110.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:576 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.567 secs)
16 03 2023 06:41:24.871:INFO [Firefox 110.0 (Linux x86_64) | HomeComponent | should create]: Success: 64 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:680 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
16 03 2023 06:41:24.893:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 110.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.574 secs)
16 03 2023 06:41:24.894:INFO [Firefox 110.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:704 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.594 secs)
16 03 2023 06:41:24.895:INFO [Firefox 110.0 (Linux x86_64) | AppComponent | should create the app]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:704 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 110.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.6 secs)
16 03 2023 06:41:24.896:INFO [Firefox 110.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:705 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.605 secs)
16 03 2023 06:41:24.897:INFO [Firefox 110.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:706 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.41 secs / 0.605 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 110.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:711 min/sec/ms


Firefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.41 secs / 0.605 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 13.26s.
```
