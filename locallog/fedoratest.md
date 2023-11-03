```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
03 11 2023 13:10:58.796:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
03 11 2023 13:10:58.798:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 11 2023 13:10:58.800:INFO [launcher]: Starting browser Firefox
03 11 2023 13:11:00.085:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket 6sAn1UIEJFxCFNulAAAB with id 82399392
Firefox 119.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
03 11 2023 13:11:00.991:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 82399392
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.097 secs)
03 11 2023 13:11:01.071:INFO [Firefox 119.0 (Linux x86_64) | MenuComponent | should create]: Success: 97 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:295 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.105 secs)
03 11 2023 13:11:01.087:INFO [Firefox 119.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:310 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.16 secs)
03 11 2023 13:11:01.148:INFO [Firefox 119.0 (Linux x86_64) | HomeComponent | should create]: Success: 55 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:372 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.166 secs)
03 11 2023 13:11:01.155:INFO [Firefox 119.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:379 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.182 secs)
03 11 2023 13:11:01.172:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:395 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.182 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.182 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.256 secs)
03 11 2023 13:11:01.250:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
03 11 2023 13:11:01.250:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
03 11 2023 13:11:01.250:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Success: 74 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:473 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.265 secs)
03 11 2023 13:11:01.262:INFO [Firefox 119.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:486 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.273 secs)
03 11 2023 13:11:01.269:INFO [Firefox 119.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:493 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 119.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.273 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 119.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.273 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.311 secs)
03 11 2023 13:11:01.309:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
03 11 2023 13:11:01.309:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
03 11 2023 13:11:01.309:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:533 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.316 secs)
03 11 2023 13:11:01.342:INFO [Firefox 119.0 (Linux x86_64) | LoadingComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:565 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.32 secs)
03 11 2023 13:11:01.343:INFO [Firefox 119.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:566 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.338 secs)
03 11 2023 13:11:01.345:INFO [Firefox 119.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:569 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.341 secs)
03 11 2023 13:11:01.346:INFO [Firefox 119.0 (Linux x86_64) | NewsService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:569 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.347 secs)
03 11 2023 13:11:01.348:INFO [Firefox 119.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:571 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.35 secs)
03 11 2023 13:11:01.356:INFO [Firefox 119.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:579 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.356 secs)
03 11 2023 13:11:01.366:INFO [Firefox 119.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:589 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.359 secs)
03 11 2023 13:11:01.367:INFO [Firefox 119.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:590 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.378 secs / 0.359 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:595 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.378 secs / 0.359 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 20.46s.
```
