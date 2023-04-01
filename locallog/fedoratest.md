```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
01 04 2023 11:00:56.918:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
01 04 2023 11:00:56.919:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
01 04 2023 11:00:56.923:INFO [launcher]: Starting browser Firefox
01 04 2023 11:00:58.174:INFO [Firefox 111.0 (Linux x86_64)]: Connected on socket UHT1XoHK3NbrJoiFAAAB with id 48274193
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
01 04 2023 11:00:58.839:INFO [Firefox 111.0 (Linux x86_64)]: Starting tests 48274193
[1A[2KFirefox 111.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.146 secs)
01 04 2023 11:00:58.982:INFO [Firefox 111.0 (Linux x86_64) | MenuComponent | should create]: Success: 146 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:105 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.155 secs)
01 04 2023 11:00:59.007:INFO [Firefox 111.0 (Linux x86_64) | NewsService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:129 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.177 secs)
01 04 2023 11:00:59.023:INFO [Firefox 111.0 (Linux x86_64) | LoadingComponent | should create]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:145 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 111.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.177 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 111.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.177 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.255 secs)
01 04 2023 11:00:59.108:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
01 04 2023 11:00:59.109:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
01 04 2023 11:00:59.109:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Success: 78 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:231 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.263 secs)
01 04 2023 11:00:59.119:INFO [Firefox 111.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:242 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.27 secs)
01 04 2023 11:00:59.130:INFO [Firefox 111.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:252 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.274 secs)
01 04 2023 11:00:59.136:INFO [Firefox 111.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:258 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.296 secs)
01 04 2023 11:00:59.173:INFO [Firefox 111.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:295 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.325 secs)
01 04 2023 11:00:59.198:INFO [Firefox 111.0 (Linux x86_64) | HomeComponent | should create]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:321 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.329 secs)
01 04 2023 11:00:59.203:INFO [Firefox 111.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:325 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.333 secs)
01 04 2023 11:00:59.207:INFO [Firefox 111.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:330 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.333 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.333 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.41 secs)
01 04 2023 11:00:59.292:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
01 04 2023 11:00:59.292:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
01 04 2023 11:00:59.292:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Success: 77 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:414 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.418 secs)
01 04 2023 11:00:59.300:INFO [Firefox 111.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:422 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.422 secs)
01 04 2023 11:00:59.304:INFO [Firefox 111.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:426 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.434 secs)
01 04 2023 11:00:59.317:INFO [Firefox 111.0 (Linux x86_64) | AppComponent | should create the app]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:439 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 111.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.438 secs)
01 04 2023 11:00:59.322:INFO [Firefox 111.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:444 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.442 secs)
01 04 2023 11:00:59.330:INFO [Firefox 111.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:452 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.493 secs / 0.442 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 111.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:456 min/sec/ms


Firefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.493 secs / 0.442 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.46s.
```
