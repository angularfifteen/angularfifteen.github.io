```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
20 07 2023 13:58:21.486:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
20 07 2023 13:58:21.488:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
20 07 2023 13:58:21.491:INFO [launcher]: Starting browser Firefox
20 07 2023 13:58:22.966:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket jimQCt2T86kbYwMtAAAB with id 82211113
Firefox 115.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
20 07 2023 13:58:23.685:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 82211113
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.157 secs)
20 07 2023 13:58:23.841:INFO [Firefox 115.0 (Linux x86_64) | HomeComponent | should create]: Success: 157 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:377 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.169 secs)
20 07 2023 13:58:23.861:INFO [Firefox 115.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:397 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.178 secs)
20 07 2023 13:58:23.907:INFO [Firefox 115.0 (Linux x86_64) | NewsService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:442 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.178 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.178 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.311 secs)
20 07 2023 13:58:24.014:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
20 07 2023 13:58:24.014:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
20 07 2023 13:58:24.014:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Success: 133 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:549 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.32 secs)
20 07 2023 13:58:24.028:INFO [Firefox 115.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:563 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 115.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.32 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 115.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.32 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.372 secs)
20 07 2023 13:58:24.084:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
20 07 2023 13:58:24.084:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
20 07 2023 13:58:24.084:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Success: 52 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:620 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.382 secs)
20 07 2023 13:58:24.093:INFO [Firefox 115.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:629 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
20 07 2023 13:58:24.095:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 115.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.407 secs)
20 07 2023 13:58:24.132:INFO [Firefox 115.0 (Linux x86_64) | MenuComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:667 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.411 secs)
20 07 2023 13:58:24.133:INFO [Firefox 115.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:668 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.419 secs)
20 07 2023 13:58:24.151:INFO [Firefox 115.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:687 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 115.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.419 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.432 secs)
20 07 2023 13:58:24.153:ERROR [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

20 07 2023 13:58:24.153:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:688 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.436 secs)
20 07 2023 13:58:24.158:INFO [Firefox 115.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:693 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.44 secs)
20 07 2023 13:58:24.173:INFO [Firefox 115.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:708 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.446 secs)
20 07 2023 13:58:24.174:INFO [Firefox 115.0 (Linux x86_64) | LoadingComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:709 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.461 secs)
20 07 2023 13:58:24.188:INFO [Firefox 115.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:723 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.464 secs)
20 07 2023 13:58:24.199:INFO [Firefox 115.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:735 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.467 secs)
20 07 2023 13:58:24.200:INFO [Firefox 115.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:735 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.529 secs / 0.467 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:752 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.529 secs / 0.467 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 25.68s.
```
