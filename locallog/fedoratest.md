```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
13 06 2023 09:22:42.979:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
13 06 2023 09:22:42.981:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
13 06 2023 09:22:42.983:INFO [launcher]: Starting browser Firefox
13 06 2023 09:22:44.556:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket 2OdisqMY1QUT_WfvAAAB with id 51534535
Firefox 114.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
13 06 2023 09:22:46.088:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 51534535
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.025 secs)
13 06 2023 09:22:46.125:INFO [Firefox 114.0 (Linux x86_64) | LoadingService | should be created]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:163 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.049 secs)
13 06 2023 09:22:46.140:INFO [Firefox 114.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:177 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
13 06 2023 09:22:46.179:INFO [Firefox 114.0 (Linux x86_64) | LoadingComponent | should create]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:217 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.268 secs)
13 06 2023 09:22:46.378:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
13 06 2023 09:22:46.379:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
13 06 2023 09:22:46.379:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Success: 186 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:416 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.302 secs)
13 06 2023 09:22:46.411:INFO [Firefox 114.0 (Linux x86_64) | MenuComponent | should create]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:448 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.308 secs)
13 06 2023 09:22:46.421:INFO [Firefox 114.0 (Linux x86_64) | NewsService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:458 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.312 secs)
13 06 2023 09:22:46.428:INFO [Firefox 114.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:465 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.343 secs)
13 06 2023 09:22:46.458:INFO [Firefox 114.0 (Linux x86_64) | HomeComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:495 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.35 secs)
13 06 2023 09:22:46.470:INFO [Firefox 114.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:508 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.354 secs)
13 06 2023 09:22:46.478:INFO [Firefox 114.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:515 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.367 secs)
13 06 2023 09:22:46.492:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:529 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.373 secs)
13 06 2023 09:22:46.499:INFO [Firefox 114.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:536 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.388 secs)
13 06 2023 09:22:46.516:INFO [Firefox 114.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:553 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
13 06 2023 09:22:46.523:INFO [Firefox 114.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:560 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 114.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 114.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.392 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.428 secs)
13 06 2023 09:22:46.562:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
13 06 2023 09:22:46.563:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
13 06 2023 09:22:46.563:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:600 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.432 secs)
13 06 2023 09:22:46.568:INFO [Firefox 114.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:605 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.437 secs)
13 06 2023 09:22:46.574:INFO [Firefox 114.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:611 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.489 secs / 0.437 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:618 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.489 secs / 0.437 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 15.71s.
```
