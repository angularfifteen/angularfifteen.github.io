```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
03 06 2023 22:45:59.473:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
03 06 2023 22:45:59.475:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 06 2023 22:45:59.477:INFO [launcher]: Starting browser Firefox
03 06 2023 22:46:01.053:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket 9rcAKqZt48Z1e5OBAAAB with id 23196180
Firefox 113.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
03 06 2023 22:46:01.845:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 23196180
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.077 secs)
03 06 2023 22:46:01.920:INFO [Firefox 113.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 77 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:461 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.083 secs)
03 06 2023 22:46:01.931:INFO [Firefox 113.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:472 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.092 secs)
03 06 2023 22:46:01.941:INFO [Firefox 113.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:482 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.098 secs)
03 06 2023 22:46:01.952:INFO [Firefox 113.0 (Linux x86_64) | LoadingService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:494 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.104 secs)
03 06 2023 22:46:01.964:INFO [Firefox 113.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:506 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.117 secs)
03 06 2023 22:46:01.974:INFO [Firefox 113.0 (Linux x86_64) | LoadingComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:516 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.117 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.117 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.198 secs)
03 06 2023 22:46:02.058:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
03 06 2023 22:46:02.058:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
03 06 2023 22:46:02.059:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Success: 81 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:600 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.206 secs)
03 06 2023 22:46:02.069:INFO [Firefox 113.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:610 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.206 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.206 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.312 secs)
03 06 2023 22:46:02.189:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
03 06 2023 22:46:02.189:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
03 06 2023 22:46:02.189:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Success: 106 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:730 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.323 secs)
03 06 2023 22:46:02.196:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:737 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.331 secs)
03 06 2023 22:46:02.212:INFO [Firefox 113.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:753 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.351 secs)
03 06 2023 22:46:02.227:INFO [Firefox 113.0 (Linux x86_64) | MenuComponent | should create]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:768 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.357 secs)
03 06 2023 22:46:02.240:INFO [Firefox 113.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:781 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.381 secs)
03 06 2023 22:46:02.271:INFO [Firefox 113.0 (Linux x86_64) | HomeComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:812 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.383 secs)
03 06 2023 22:46:02.272:INFO [Firefox 113.0 (Linux x86_64) | NewsService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:813 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.385 secs)
03 06 2023 22:46:02.273:INFO [Firefox 113.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:814 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.388 secs)
03 06 2023 22:46:02.273:INFO [Firefox 113.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:814 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.435 secs / 0.388 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:824 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.435 secs / 0.388 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 9.36s.
```
