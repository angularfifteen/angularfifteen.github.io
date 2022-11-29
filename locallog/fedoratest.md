```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
28 11 2022 19:08:26.367:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 11 2022 19:08:26.371:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 11 2022 19:08:26.376:INFO [launcher]: Starting browser Firefox
28 11 2022 19:08:28.812:INFO [Firefox 107.0 (Linux x86_64)]: Connected on socket r0kORH9U-7jD60kiAAAB with id 64517563
Firefox 107.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
28 11 2022 19:08:32.331:INFO [Firefox 107.0 (Linux x86_64)]: Starting tests 64517563
[1A[2KFirefox 107.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.039 secs)
28 11 2022 19:08:32.360:INFO [Firefox 107.0 (Linux x86_64) | LoadingService | should be created]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:6:31 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.086 secs)
28 11 2022 19:08:32.363:INFO [Firefox 107.0 (Linux x86_64) | LoadingComponent | should create]: Success: 47 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:6:33 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.105 secs)
28 11 2022 19:08:32.364:INFO [Firefox 107.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:6:34 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.105 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.105 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.366 secs)
28 11 2022 19:08:32.366:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 11 2022 19:08:32.366:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 11 2022 19:08:32.367:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Success: 261 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:6:37 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.38 secs)
28 11 2022 19:08:32.367:INFO [Firefox 107.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:6:37 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
28 11 2022 19:08:32.368:INFO [Firefox 107.0 (Linux x86_64) | QuizService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:6:38 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.404 secs)
28 11 2022 19:08:32.369:INFO [Firefox 107.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:6:39 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.404 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.404 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.538 secs)
28 11 2022 19:08:32.370:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
28 11 2022 19:08:32.370:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
28 11 2022 19:08:32.370:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Success: 134 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:6:40 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.56 secs)
28 11 2022 19:08:32.371:INFO [Firefox 107.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:6:41 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.664 secs)
28 11 2022 19:08:32.371:INFO [Firefox 107.0 (Linux x86_64) | HomeComponent | should create]: Success: 104 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:6:42 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.727 secs)
28 11 2022 19:08:32.373:INFO [Firefox 107.0 (Linux x86_64) | MenuComponent | should create]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:6:43 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.738 secs)
28 11 2022 19:08:32.374:INFO [Firefox 107.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:6:44 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.749 secs)
28 11 2022 19:08:32.374:INFO [Firefox 107.0 (Linux x86_64) | NewsService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:6:44 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.772 secs)
28 11 2022 19:08:32.375:INFO [Firefox 107.0 (Linux x86_64) | AppComponent | should create the app]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:6:45 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 107.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.818 secs)
28 11 2022 19:08:32.376:INFO [Firefox 107.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:6:46 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.836 secs)
28 11 2022 19:08:32.377:INFO [Firefox 107.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:6:47 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.844 secs)
28 11 2022 19:08:32.377:INFO [Firefox 107.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:6:47 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.047 secs / 0.844 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 107.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:6:54 min/sec/ms


Firefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.047 secs / 0.844 secs)
[32mTOTAL: 17 SUCCESS[39m

28 11 2022 19:08:32.390:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
Done in 45.97s.
```
