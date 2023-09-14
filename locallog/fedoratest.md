```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
14 09 2023 12:45:26.105:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
14 09 2023 12:45:26.107:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 09 2023 12:45:26.133:INFO [launcher]: Starting browser Firefox
14 09 2023 12:45:27.457:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket mX1aGguF1ztURo57AAAB with id 17107804
Firefox 117.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
14 09 2023 12:45:28.347:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 17107804
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
14 09 2023 12:45:28.356:INFO [Firefox 117.0 (Linux x86_64) | HomeComponent | should create]: Success: 82 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:269 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.134 secs)
14 09 2023 12:45:28.359:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
14 09 2023 12:45:28.359:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
14 09 2023 12:45:28.360:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Success: 52 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:272 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.139 secs)
14 09 2023 12:45:28.363:INFO [Firefox 117.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:276 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.147 secs)
14 09 2023 12:45:28.365:INFO [Firefox 117.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:278 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.152 secs)
14 09 2023 12:45:28.370:INFO [Firefox 117.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:282 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.162 secs)
14 09 2023 12:45:28.378:INFO [Firefox 117.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:290 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.168 secs)
14 09 2023 12:45:28.389:INFO [Firefox 117.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:302 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.175 secs)
14 09 2023 12:45:28.397:INFO [Firefox 117.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:309 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.175 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.175 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.296 secs)
14 09 2023 12:45:28.625:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
14 09 2023 12:45:28.626:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
14 09 2023 12:45:28.626:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Success: 121 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:538 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.303 secs)
14 09 2023 12:45:28.626:INFO [Firefox 117.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:538 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.343 secs)
14 09 2023 12:45:28.707:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:619 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.355 secs)
14 09 2023 12:45:28.708:INFO [Firefox 117.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:620 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.362 secs)
14 09 2023 12:45:28.708:INFO [Firefox 117.0 (Linux x86_64) | LoadingService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:621 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.389 secs)
14 09 2023 12:45:28.709:INFO [Firefox 117.0 (Linux x86_64) | LoadingComponent | should create]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:621 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.487 secs)
14 09 2023 12:45:28.817:INFO [Firefox 117.0 (Linux x86_64) | MenuComponent | should create]: Success: 98 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:730 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
14 09 2023 12:45:28.833:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 117.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.513 secs)
14 09 2023 12:45:28.898:INFO [Firefox 117.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:810 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.516 secs)
14 09 2023 12:45:28.899:INFO [Firefox 117.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:811 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.552 secs / 0.516 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:815 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.552 secs / 0.516 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 14.02s.
```
