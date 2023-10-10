```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
10 10 2023 11:25:09.017:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
10 10 2023 11:25:09.018:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
10 10 2023 11:25:09.021:INFO [launcher]: Starting browser Firefox
10 10 2023 11:25:10.262:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket TlYBLU3Ibyos8ncKAAAB with id 7501055
Firefox 118.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
10 10 2023 11:25:11.197:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 7501055
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.017 secs)
10 10 2023 11:25:11.205:INFO [Firefox 118.0 (Linux x86_64) | NewsService | should be created]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:235 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.025 secs)
10 10 2023 11:25:11.219:INFO [Firefox 118.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:249 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.031 secs)
10 10 2023 11:25:11.220:INFO [Firefox 118.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:251 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.031 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.031 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.169 secs)
10 10 2023 11:25:11.459:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
10 10 2023 11:25:11.459:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
10 10 2023 11:25:11.459:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Success: 138 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:490 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.183 secs)
10 10 2023 11:25:11.499:INFO [Firefox 118.0 (Linux x86_64) | LoadingComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:530 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.336 secs)
10 10 2023 11:25:11.588:INFO [Firefox 118.0 (Linux x86_64) | MenuComponent | should create]: Success: 153 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:618 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 118.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.336 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 118.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.336 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.449 secs)
10 10 2023 11:25:11.660:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
10 10 2023 11:25:11.660:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
10 10 2023 11:25:11.660:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Success: 113 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:690 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.463 secs)
10 10 2023 11:25:11.715:INFO [Firefox 118.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:745 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.505 secs)
10 10 2023 11:25:11.724:INFO [Firefox 118.0 (Linux x86_64) | HomeComponent | should create]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:754 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.512 secs)
10 10 2023 11:25:11.729:INFO [Firefox 118.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:760 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.518 secs)
10 10 2023 11:25:11.733:INFO [Firefox 118.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:764 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.534 secs)
10 10 2023 11:25:11.743:INFO [Firefox 118.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:773 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
10 10 2023 11:25:11.746:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 118.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.541 secs)
10 10 2023 11:25:11.752:INFO [Firefox 118.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:782 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.545 secs)
10 10 2023 11:25:11.754:INFO [Firefox 118.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:785 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 118.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.545 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.554 secs)
10 10 2023 11:25:11.773:ERROR [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

10 10 2023 11:25:11.773:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:803 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.557 secs)
10 10 2023 11:25:11.774:INFO [Firefox 118.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:804 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.56 secs)
10 10 2023 11:25:11.777:INFO [Firefox 118.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:807 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.582 secs / 0.56 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:813 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.582 secs / 0.56 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.01s.
```
