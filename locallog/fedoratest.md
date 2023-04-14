```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
14 04 2023 07:08:46.642:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
14 04 2023 07:08:46.645:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 04 2023 07:08:46.648:INFO [launcher]: Starting browser Firefox
14 04 2023 07:08:48.345:INFO [Firefox 111.0 (Linux x86_64)]: Connected on socket mjlK0h68gAzT4nbDAAAB with id 32922000
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
14 04 2023 07:08:49.259:INFO [Firefox 111.0 (Linux x86_64)]: Starting tests 32922000
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.3 secs)
14 04 2023 07:08:49.532:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
14 04 2023 07:08:49.532:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
14 04 2023 07:08:49.532:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Success: 300 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:918 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.322 secs)
14 04 2023 07:08:49.578:INFO [Firefox 111.0 (Linux x86_64) | LoadingComponent | should create]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:964 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.33 secs)
14 04 2023 07:08:49.580:INFO [Firefox 111.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:965 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.369 secs)
14 04 2023 07:08:49.622:INFO [Firefox 111.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:7 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.375 secs)
14 04 2023 07:08:49.648:INFO [Firefox 111.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:33 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.383 secs)
14 04 2023 07:08:49.662:INFO [Firefox 111.0 (Linux x86_64) | NewsService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:47 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.394 secs)
14 04 2023 07:08:49.664:INFO [Firefox 111.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:50 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 111.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.394 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 111.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.394 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.482 secs)
14 04 2023 07:08:49.771:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
14 04 2023 07:08:49.772:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
14 04 2023 07:08:49.772:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Success: 88 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:157 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.489 secs)
14 04 2023 07:08:49.773:INFO [Firefox 111.0 (Linux x86_64) | LoadingService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:158 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.496 secs)
14 04 2023 07:08:49.781:INFO [Firefox 111.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:166 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.514 secs)
14 04 2023 07:08:49.796:INFO [Firefox 111.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:181 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.56 secs)
14 04 2023 07:08:49.839:INFO [Firefox 111.0 (Linux x86_64) | MenuComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:224 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.57 secs)
14 04 2023 07:08:49.857:INFO [Firefox 111.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:242 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.587 secs)
14 04 2023 07:08:49.878:INFO [Firefox 111.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:264 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 111.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.638 secs)
14 04 2023 07:08:49.930:INFO [Firefox 111.0 (Linux x86_64) | HomeComponent | should create]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:316 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.644 secs)
14 04 2023 07:08:49.942:INFO [Firefox 111.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:327 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.654 secs)
14 04 2023 07:08:49.955:INFO [Firefox 111.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:340 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.704 secs / 0.654 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 111.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:353 min/sec/ms


Firefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.704 secs / 0.654 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 30.57s.
```
