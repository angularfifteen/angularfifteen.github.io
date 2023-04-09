```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 04 2023 12:18:25.846:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 04 2023 12:18:25.848:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 04 2023 12:18:25.852:INFO [launcher]: Starting browser Firefox
09 04 2023 12:18:27.237:INFO [Firefox 111.0 (Linux x86_64)]: Connected on socket F4ZR7bbJSf97d1RTAAAB with id 31347539
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
09 04 2023 12:18:27.978:INFO [Firefox 111.0 (Linux x86_64)]: Starting tests 31347539
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
09 04 2023 12:18:28.209:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
09 04 2023 12:18:28.209:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
09 04 2023 12:18:28.209:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Success: 219 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:405 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.228 secs)
09 04 2023 12:18:28.223:INFO [Firefox 111.0 (Linux x86_64) | QuizService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:418 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.235 secs)
09 04 2023 12:18:28.229:INFO [Firefox 111.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:424 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
09 04 2023 12:18:28.244:INFO [Firefox 111.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:439 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.248 secs)
09 04 2023 12:18:28.261:INFO [Firefox 111.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:456 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.264 secs)
09 04 2023 12:18:28.278:INFO [Firefox 111.0 (Linux x86_64) | LoadingComponent | should create]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:473 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.321 secs)
09 04 2023 12:18:28.332:INFO [Firefox 111.0 (Linux x86_64) | MenuComponent | should create]: Success: 57 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:527 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.326 secs)
09 04 2023 12:18:28.343:INFO [Firefox 111.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:538 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.355 secs)
09 04 2023 12:18:28.381:INFO [Firefox 111.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:577 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.366 secs)
09 04 2023 12:18:28.394:INFO [Firefox 111.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:589 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.366 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.366 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.477 secs)
09 04 2023 12:18:28.507:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 04 2023 12:18:28.507:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 04 2023 12:18:28.507:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Success: 111 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:702 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.481 secs)
09 04 2023 12:18:28.517:INFO [Firefox 111.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:712 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.497 secs)
09 04 2023 12:18:28.533:INFO [Firefox 111.0 (Linux x86_64) | AppComponent | should create the app]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:728 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 111.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.509 secs)
09 04 2023 12:18:28.549:INFO [Firefox 111.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:744 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.516 secs)
09 04 2023 12:18:28.565:INFO [Firefox 111.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:760 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.56 secs)
09 04 2023 12:18:28.607:INFO [Firefox 111.0 (Linux x86_64) | HomeComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:803 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.569 secs)
09 04 2023 12:18:28.617:INFO [Firefox 111.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:813 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.647 secs / 0.569 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 111.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:825 min/sec/ms


Firefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.647 secs / 0.569 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 26.71s.
```
