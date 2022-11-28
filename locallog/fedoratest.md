```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
28 11 2022 05:55:36.770:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 11 2022 05:55:36.773:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 11 2022 05:55:36.791:INFO [launcher]: Starting browser Firefox
28 11 2022 05:55:38.672:INFO [Firefox 107.0 (Linux x86_64)]: Connected on socket nKrxVl6vriX45-3PAAAB with id 10475831
Firefox 107.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
28 11 2022 05:55:39.585:INFO [Firefox 107.0 (Linux x86_64)]: Starting tests 10475831
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.274 secs)
28 11 2022 05:55:39.898:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 11 2022 05:55:39.898:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 11 2022 05:55:39.899:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Success: 274 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:154 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.285 secs)
28 11 2022 05:55:39.939:INFO [Firefox 107.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:195 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.337 secs)
28 11 2022 05:55:39.955:INFO [Firefox 107.0 (Linux x86_64) | AppComponent | should create the app]: Success: 52 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:210 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 107.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.352 secs)
28 11 2022 05:55:39.969:INFO [Firefox 107.0 (Linux x86_64) | LoadingComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:225 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.362 secs)
28 11 2022 05:55:39.974:INFO [Firefox 107.0 (Linux x86_64) | LoadingService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:230 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.369 secs)
28 11 2022 05:55:39.983:INFO [Firefox 107.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:238 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.383 secs)
28 11 2022 05:55:40.000:INFO [Firefox 107.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:256 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.423 secs)
28 11 2022 05:55:40.050:INFO [Firefox 107.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:305 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.43 secs)
28 11 2022 05:55:40.060:INFO [Firefox 107.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:315 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.443 secs)
28 11 2022 05:55:40.074:INFO [Firefox 107.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:330 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.45 secs)
28 11 2022 05:55:40.082:INFO [Firefox 107.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:338 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 107.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.45 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 107.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.45 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.524 secs)
28 11 2022 05:55:40.159:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
28 11 2022 05:55:40.159:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
28 11 2022 05:55:40.160:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Success: 74 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:415 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.566 secs)
28 11 2022 05:55:40.244:INFO [Firefox 107.0 (Linux x86_64) | MenuComponent | should create]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:499 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.61 secs)
28 11 2022 05:55:40.251:INFO [Firefox 107.0 (Linux x86_64) | HomeComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:507 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.618 secs)
28 11 2022 05:55:40.266:INFO [Firefox 107.0 (Linux x86_64) | QuizService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:522 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.624 secs)
28 11 2022 05:55:40.268:INFO [Firefox 107.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:523 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.63 secs)
28 11 2022 05:55:40.277:INFO [Firefox 107.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:532 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.695 secs / 0.63 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 107.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:540 min/sec/ms


Firefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.695 secs / 0.63 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 16.55s.
```
