```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
17 02 2023 08:25:38.542:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 02 2023 08:25:38.544:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 02 2023 08:25:38.547:INFO [launcher]: Starting browser Firefox
17 02 2023 08:25:40.037:INFO [Firefox 110.0 (Linux x86_64)]: Connected on socket YWcuzK3hPwQ-vtasAAAB with id 62389298
Firefox 110.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
17 02 2023 08:25:42.003:INFO [Firefox 110.0 (Linux x86_64)]: Starting tests 62389298
[1A[2KFirefox 110.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.033 secs)
17 02 2023 08:25:42.027:INFO [Firefox 110.0 (Linux x86_64) | QuizService | should be created]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:502 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.033 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.033 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.305 secs)
17 02 2023 08:25:42.030:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
17 02 2023 08:25:42.030:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
17 02 2023 08:25:42.031:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Success: 272 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:505 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.343 secs)
17 02 2023 08:25:42.032:INFO [Firefox 110.0 (Linux x86_64) | HomeComponent | should create]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:506 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.367 secs)
17 02 2023 08:25:42.033:INFO [Firefox 110.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:507 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.374 secs)
17 02 2023 08:25:42.033:INFO [Firefox 110.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:508 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.393 secs)
17 02 2023 08:25:42.034:INFO [Firefox 110.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:508 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 110.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.402 secs)
17 02 2023 08:25:42.035:INFO [Firefox 110.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:509 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.433 secs)
17 02 2023 08:25:42.036:INFO [Firefox 110.0 (Linux x86_64) | MenuComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:510 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.438 secs)
17 02 2023 08:25:42.036:INFO [Firefox 110.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:510 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.444 secs)
17 02 2023 08:25:42.037:INFO [Firefox 110.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:511 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 110.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.444 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 110.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.444 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.506 secs)
17 02 2023 08:25:42.038:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
17 02 2023 08:25:42.038:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
17 02 2023 08:25:42.038:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Success: 62 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:512 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.513 secs)
17 02 2023 08:25:42.038:INFO [Firefox 110.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:512 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.516 secs)
17 02 2023 08:25:42.039:INFO [Firefox 110.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:513 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.524 secs)
17 02 2023 08:25:42.039:INFO [Firefox 110.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:513 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.529 secs)
17 02 2023 08:25:42.040:INFO [Firefox 110.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:514 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.532 secs)
17 02 2023 08:25:42.040:INFO [Firefox 110.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:514 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.539 secs)
17 02 2023 08:25:42.041:INFO [Firefox 110.0 (Linux x86_64) | LoadingComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:515 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.039 secs / 0.539 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 110.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:519 min/sec/ms


Firefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.039 secs / 0.539 secs)
[32mTOTAL: 17 SUCCESS[39m

17 02 2023 08:25:42.050:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
Done in 18.58s.
```
