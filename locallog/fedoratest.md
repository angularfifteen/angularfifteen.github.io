```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
22 12 2022 12:40:39.520:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 12 2022 12:40:39.523:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 12 2022 12:40:39.526:INFO [launcher]: Starting browser Firefox
22 12 2022 12:40:41.181:INFO [Firefox 108.0 (Linux x86_64)]: Connected on socket P_s_YtYsrvnpqpxfAAAB with id 24816090
Firefox 108.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
22 12 2022 12:40:42.197:INFO [Firefox 108.0 (Linux x86_64)]: Starting tests 24816090
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 108.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 108.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.15 secs)
22 12 2022 12:40:42.351:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
22 12 2022 12:40:42.352:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
22 12 2022 12:40:42.352:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Success: 150 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:852 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.221 secs)
22 12 2022 12:40:42.462:INFO [Firefox 108.0 (Linux x86_64) | MenuComponent | should create]: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:962 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
22 12 2022 12:40:42.490:INFO [Firefox 108.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:990 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 108.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 108.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.351 secs)
22 12 2022 12:40:42.577:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
22 12 2022 12:40:42.577:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
22 12 2022 12:40:42.577:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Success: 115 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:77 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.358 secs)
22 12 2022 12:40:42.597:INFO [Firefox 108.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:98 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.365 secs)
22 12 2022 12:40:42.618:INFO [Firefox 108.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:119 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.374 secs)
22 12 2022 12:40:42.620:INFO [Firefox 108.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:121 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.38 secs)
22 12 2022 12:40:42.626:INFO [Firefox 108.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:126 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.407 secs)
22 12 2022 12:40:42.652:INFO [Firefox 108.0 (Linux x86_64) | AppComponent | should create the app]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:153 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 108.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.414 secs)
22 12 2022 12:40:42.661:INFO [Firefox 108.0 (Linux x86_64) | QuizService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:161 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.468 secs)
22 12 2022 12:40:42.743:INFO [Firefox 108.0 (Linux x86_64) | HomeComponent | should create]: Success: 54 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:244 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.474 secs)
22 12 2022 12:40:42.747:INFO [Firefox 108.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:247 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.48 secs)
22 12 2022 12:40:42.749:INFO [Firefox 108.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:250 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.484 secs)
22 12 2022 12:40:42.752:INFO [Firefox 108.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:252 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.497 secs)
22 12 2022 12:40:42.764:INFO [Firefox 108.0 (Linux x86_64) | LoadingComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:264 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.521 secs)
22 12 2022 12:40:42.782:INFO [Firefox 108.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:282 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.529 secs)
22 12 2022 12:40:42.795:INFO [Firefox 108.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:295 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.602 secs / 0.529 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 108.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:304 min/sec/ms


Firefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.602 secs / 0.529 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 17.45s.
```
