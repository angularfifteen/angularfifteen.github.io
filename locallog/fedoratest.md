```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
28 02 2023 07:37:02.726:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 02 2023 07:37:02.728:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 02 2023 07:37:02.731:INFO [launcher]: Starting browser Firefox
28 02 2023 07:37:04.175:INFO [Firefox 110.0 (Linux x86_64)]: Connected on socket i_MuJ3NG79R058aKAAAB with id 74455680
Firefox 110.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
28 02 2023 07:37:06.190:INFO [Firefox 110.0 (Linux x86_64)]: Starting tests 74455680
[1A[2KFirefox 110.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.033 secs)
28 02 2023 07:37:06.204:INFO [Firefox 110.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:494 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.064 secs)
28 02 2023 07:37:06.205:INFO [Firefox 110.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:495 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.21 secs)
28 02 2023 07:37:06.205:INFO [Firefox 110.0 (Linux x86_64) | HomeComponent | should create]: Success: 146 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:495 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.224 secs)
28 02 2023 07:37:06.206:INFO [Firefox 110.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:496 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.224 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 110.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.224 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.311 secs)
28 02 2023 07:37:06.207:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
28 02 2023 07:37:06.207:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
28 02 2023 07:37:06.207:INFO [Firefox 110.0 (Linux x86_64) | NewsComponent | should create]: Success: 87 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:497 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.333 secs)
28 02 2023 07:37:06.208:INFO [Firefox 110.0 (Linux x86_64) | AppComponent | should create the app]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:498 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 110.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.34 secs)
28 02 2023 07:37:06.208:INFO [Firefox 110.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:498 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.346 secs)
28 02 2023 07:37:06.208:INFO [Firefox 110.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:498 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.35 secs)
28 02 2023 07:37:06.209:INFO [Firefox 110.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:499 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.358 secs)
28 02 2023 07:37:06.209:INFO [Firefox 110.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:499 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.39 secs)
28 02 2023 07:37:06.209:INFO [Firefox 110.0 (Linux x86_64) | MenuComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:499 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.394 secs)
28 02 2023 07:37:06.210:INFO [Firefox 110.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:500 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.4 secs)
28 02 2023 07:37:06.210:INFO [Firefox 110.0 (Linux x86_64) | LoadingComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:500 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.4 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 110.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.4 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 110.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.511 secs)
28 02 2023 07:37:06.210:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 02 2023 07:37:06.211:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 02 2023 07:37:06.211:INFO [Firefox 110.0 (Linux x86_64) | QuizComponent | should create]: Success: 111 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:501 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.535 secs)
28 02 2023 07:37:06.211:INFO [Firefox 110.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:501 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 110.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.538 secs)
28 02 2023 07:37:06.211:INFO [Firefox 110.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:501 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.543 secs)
28 02 2023 07:37:06.211:INFO [Firefox 110.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:501 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.022 secs / 0.543 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 110.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:505 min/sec/ms


Firefox 110.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.022 secs / 0.543 secs)
[32mTOTAL: 17 SUCCESS[39m

28 02 2023 07:37:06.217:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
Done in 18.47s.
```
