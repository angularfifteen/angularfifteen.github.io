```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
03 07 2023 10:27:02.510:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
03 07 2023 10:27:02.512:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 07 2023 10:27:02.515:INFO [launcher]: Starting browser Firefox
03 07 2023 10:27:04.035:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket vHPB1aS287qodtv-AAAB with id 69227923
Firefox 114.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
03 07 2023 10:27:06.052:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 69227923
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 114.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 114.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.147 secs)
03 07 2023 10:27:06.059:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
03 07 2023 10:27:06.059:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
03 07 2023 10:27:06.060:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Success: 147 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:568 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.165 secs)
03 07 2023 10:27:06.060:INFO [Firefox 114.0 (Linux x86_64) | LoadingComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:569 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.176 secs)
03 07 2023 10:27:06.061:INFO [Firefox 114.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:569 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.235 secs)
03 07 2023 10:27:06.061:INFO [Firefox 114.0 (Linux x86_64) | MenuComponent | should create]: Success: 59 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:569 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.235 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.235 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.35 secs)
03 07 2023 10:27:06.062:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
03 07 2023 10:27:06.062:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
03 07 2023 10:27:06.062:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Success: 115 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:570 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.379 secs)
03 07 2023 10:27:06.062:INFO [Firefox 114.0 (Linux x86_64) | HomeComponent | should create]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:571 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
03 07 2023 10:27:06.063:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:571 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.413 secs)
03 07 2023 10:27:06.063:INFO [Firefox 114.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:572 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.417 secs)
03 07 2023 10:27:06.064:INFO [Firefox 114.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:572 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.424 secs)
03 07 2023 10:27:06.064:INFO [Firefox 114.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:572 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.429 secs)
03 07 2023 10:27:06.065:INFO [Firefox 114.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:573 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.434 secs)
03 07 2023 10:27:06.065:INFO [Firefox 114.0 (Linux x86_64) | LoadingService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:573 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.438 secs)
03 07 2023 10:27:06.065:INFO [Firefox 114.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:574 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.442 secs)
03 07 2023 10:27:06.066:INFO [Firefox 114.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:574 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.446 secs)
03 07 2023 10:27:06.066:INFO [Firefox 114.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:574 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.449 secs)
03 07 2023 10:27:06.066:INFO [Firefox 114.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:575 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.459 secs)
03 07 2023 10:27:06.067:INFO [Firefox 114.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:575 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.015 secs / 0.459 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:579 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.015 secs / 0.459 secs)
[32mTOTAL: 17 SUCCESS[39m

03 07 2023 10:27:06.077:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
Done in 18.44s.
```
