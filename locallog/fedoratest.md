```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
25 01 2023 23:05:02.784:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 01 2023 23:05:02.787:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 01 2023 23:05:02.792:INFO [launcher]: Starting browser Firefox
25 01 2023 23:05:04.877:INFO [Firefox 109.0 (Linux x86_64)]: Connected on socket UagjiVyIMjuL2agKAAAB with id 21328718
Firefox 109.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
25 01 2023 23:05:05.930:INFO [Firefox 109.0 (Linux x86_64)]: Starting tests 21328718
[1A[2KFirefox 109.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.144 secs)
25 01 2023 23:05:06.079:INFO [Firefox 109.0 (Linux x86_64) | MenuComponent | should create]: Success: 144 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:331 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.158 secs)
25 01 2023 23:05:06.110:INFO [Firefox 109.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:361 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
25 01 2023 23:05:06.114:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 109.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.172 secs)
25 01 2023 23:05:06.127:INFO [Firefox 109.0 (Linux x86_64) | NewsService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:379 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 109.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.172 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 109.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.172 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.305 secs)
25 01 2023 23:05:06.359:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
25 01 2023 23:05:06.359:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
25 01 2023 23:05:06.360:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Success: 133 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:611 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 109.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.305 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.325 secs)
25 01 2023 23:05:06.361:ERROR [Firefox 109.0 (Linux x86_64) | PlaygroundComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

25 01 2023 23:05:06.362:INFO [Firefox 109.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:613 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.333 secs)
25 01 2023 23:05:06.363:INFO [Firefox 109.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:614 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.404 secs)
25 01 2023 23:05:08.196:INFO [Firefox 109.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 71 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:5:447 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.437 secs)
25 01 2023 23:05:08.197:INFO [Firefox 109.0 (Linux x86_64) | AppComponent | should create the app]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:5:448 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 109.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.445 secs)
25 01 2023 23:05:08.198:INFO [Firefox 109.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:5:449 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.453 secs)
25 01 2023 23:05:08.199:INFO [Firefox 109.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:5:450 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.462 secs)
25 01 2023 23:05:08.199:INFO [Firefox 109.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:5:451 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.573 secs)
25 01 2023 23:05:08.200:INFO [Firefox 109.0 (Linux x86_64) | HomeComponent | should create]: Success: 111 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:5:451 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.58 secs)
25 01 2023 23:05:08.201:INFO [Firefox 109.0 (Linux x86_64) | LoadingService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:5:452 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.589 secs)
25 01 2023 23:05:08.202:INFO [Firefox 109.0 (Linux x86_64) | QuizService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:5:453 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.589 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.589 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.736 secs)
25 01 2023 23:05:08.203:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
25 01 2023 23:05:08.203:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
25 01 2023 23:05:08.203:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Success: 147 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:5:454 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.751 secs)
25 01 2023 23:05:08.204:INFO [Firefox 109.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:5:455 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.763 secs)
25 01 2023 23:05:08.204:INFO [Firefox 109.0 (Linux x86_64) | LoadingComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:5:455 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (2.276 secs / 0.763 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 109.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:5:461 min/sec/ms


Firefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (2.276 secs / 0.763 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 33.86s.
```
