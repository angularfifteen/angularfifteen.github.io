```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
13 09 2023 13:11:46.846:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
13 09 2023 13:11:46.848:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 09 2023 13:11:46.850:INFO [launcher]: Starting browser Firefox
13 09 2023 13:11:47.995:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket Xd1v69Qvr4vYcAHfAAAB with id 58970530
Firefox 117.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
13 09 2023 13:11:48.952:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 58970530
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.015 secs)
13 09 2023 13:11:48.958:INFO [Firefox 117.0 (Linux x86_64) | LoadingService | should be created]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:126 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.015 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.015 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.13 secs)
13 09 2023 13:11:48.960:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
13 09 2023 13:11:48.960:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
13 09 2023 13:11:48.960:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Success: 115 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:128 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.135 secs)
13 09 2023 13:11:48.961:INFO [Firefox 117.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:128 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.138 secs)
13 09 2023 13:11:48.962:INFO [Firefox 117.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:129 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 117.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.138 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 117.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.138 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.176 secs)
13 09 2023 13:11:48.963:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
13 09 2023 13:11:48.963:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
13 09 2023 13:11:48.963:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:130 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.18 secs)
13 09 2023 13:11:48.964:INFO [Firefox 117.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:131 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.183 secs)
13 09 2023 13:11:48.964:INFO [Firefox 117.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:132 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.188 secs)
13 09 2023 13:11:48.965:INFO [Firefox 117.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:132 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.193 secs)
13 09 2023 13:11:48.966:INFO [Firefox 117.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:133 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.207 secs)
13 09 2023 13:11:48.966:INFO [Firefox 117.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:134 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.215 secs)
13 09 2023 13:11:48.967:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:134 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.23 secs)
13 09 2023 13:11:48.968:INFO [Firefox 117.0 (Linux x86_64) | MenuComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:135 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
13 09 2023 13:11:48.968:INFO [Firefox 117.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:135 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.253 secs)
13 09 2023 13:11:48.969:INFO [Firefox 117.0 (Linux x86_64) | HomeComponent | should create]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:136 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.256 secs)
13 09 2023 13:11:48.969:INFO [Firefox 117.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:136 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.263 secs)
13 09 2023 13:11:48.970:INFO [Firefox 117.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:137 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.268 secs)
13 09 2023 13:11:48.970:INFO [Firefox 117.0 (Linux x86_64) | LoadingComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:137 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.018 secs / 0.268 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:141 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.018 secs / 0.268 secs)
[32mTOTAL: 17 SUCCESS[39m

13 09 2023 13:11:48.977:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
Done in 12.55s.
```
