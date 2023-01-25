```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
24 01 2023 20:48:41.262:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
24 01 2023 20:48:41.265:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
24 01 2023 20:48:41.269:INFO [launcher]: Starting browser Firefox
24 01 2023 20:48:42.990:INFO [Firefox 109.0 (Linux x86_64)]: Connected on socket nRYMwHtVD3HUzRA9AAAB with id 46189092
Firefox 109.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
24 01 2023 20:48:43.995:INFO [Firefox 109.0 (Linux x86_64)]: Starting tests 46189092
[1A[2KFirefox 109.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.022 secs)
24 01 2023 20:48:44.020:INFO [Firefox 109.0 (Linux x86_64) | LoadingService | should be created]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:777 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.047 secs)
24 01 2023 20:48:44.041:INFO [Firefox 109.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:798 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.063 secs)
24 01 2023 20:48:44.078:INFO [Firefox 109.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:834 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.071 secs)
24 01 2023 20:48:44.086:INFO [Firefox 109.0 (Linux x86_64) | NewsService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:843 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.113 secs)
24 01 2023 20:48:44.134:INFO [Firefox 109.0 (Linux x86_64) | LoadingComponent | should create]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:890 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.113 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.113 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.246 secs)
24 01 2023 20:48:44.281:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
24 01 2023 20:48:44.281:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
24 01 2023 20:48:44.281:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Success: 133 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:38 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.311 secs)
24 01 2023 20:48:44.327:INFO [Firefox 109.0 (Linux x86_64) | MenuComponent | should create]: Success: 65 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:84 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.369 secs)
24 01 2023 20:48:44.431:INFO [Firefox 109.0 (Linux x86_64) | HomeComponent | should create]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:187 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.377 secs)
24 01 2023 20:48:44.433:INFO [Firefox 109.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:189 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.384 secs)
24 01 2023 20:48:44.434:INFO [Firefox 109.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:190 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.41 secs)
24 01 2023 20:48:44.443:INFO [Firefox 109.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:199 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.41 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.41 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.495 secs)
24 01 2023 20:48:44.529:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
24 01 2023 20:48:44.529:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
24 01 2023 20:48:44.529:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Success: 85 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:285 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.5 secs)
24 01 2023 20:48:44.539:INFO [Firefox 109.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:295 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.504 secs)
24 01 2023 20:48:44.550:INFO [Firefox 109.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:306 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.512 secs)
24 01 2023 20:48:44.564:INFO [Firefox 109.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:321 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.53 secs)
24 01 2023 20:48:44.575:INFO [Firefox 109.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:331 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.535 secs)
24 01 2023 20:48:44.582:INFO [Firefox 109.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:339 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.595 secs / 0.535 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 109.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:350 min/sec/ms


Firefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.595 secs / 0.535 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 16.63s.
```
