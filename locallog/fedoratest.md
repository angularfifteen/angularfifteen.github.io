```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
11 09 2023 14:31:47.115:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
11 09 2023 14:31:47.118:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
11 09 2023 14:31:47.121:INFO [launcher]: Starting browser Firefox
11 09 2023 14:31:48.292:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket muDi-MG6f0qRNBKLAAAB with id 10133451
Firefox 117.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
11 09 2023 14:31:49.396:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 10133451
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.039 secs)
11 09 2023 14:31:49.402:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:313 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.043 secs)
11 09 2023 14:31:49.403:INFO [Firefox 117.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:313 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.043 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.043 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.146 secs)
11 09 2023 14:31:49.405:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
11 09 2023 14:31:49.405:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
11 09 2023 14:31:49.405:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Success: 103 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:315 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.151 secs)
11 09 2023 14:31:49.405:INFO [Firefox 117.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:316 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.157 secs)
11 09 2023 14:31:49.406:INFO [Firefox 117.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:316 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.161 secs)
11 09 2023 14:31:49.406:INFO [Firefox 117.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:316 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.195 secs)
11 09 2023 14:31:49.406:INFO [Firefox 117.0 (Linux x86_64) | HomeComponent | should create]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:317 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.2 secs)
11 09 2023 14:31:49.407:INFO [Firefox 117.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:317 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.206 secs)
11 09 2023 14:31:49.407:INFO [Firefox 117.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:317 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.21 secs)
11 09 2023 14:31:49.407:INFO [Firefox 117.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:317 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.23 secs)
11 09 2023 14:31:49.408:INFO [Firefox 117.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:318 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
11 09 2023 14:31:49.408:INFO [Firefox 117.0 (Linux x86_64) | LoadingComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:318 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.242 secs)
11 09 2023 14:31:49.408:INFO [Firefox 117.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:318 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.246 secs)
11 09 2023 14:31:49.409:INFO [Firefox 117.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:319 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.277 secs)
11 09 2023 14:31:49.409:INFO [Firefox 117.0 (Linux x86_64) | MenuComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:319 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.283 secs)
11 09 2023 14:31:49.409:INFO [Firefox 117.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:319 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 117.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.283 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 117.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.283 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.322 secs)
11 09 2023 14:31:49.410:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
11 09 2023 14:31:49.410:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
11 09 2023 14:31:49.410:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:320 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.014 secs / 0.322 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:323 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.014 secs / 0.322 secs)
[32mTOTAL: 17 SUCCESS[39m

11 09 2023 14:31:49.415:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
Done in 11.83s.
```
