```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 05 2023 23:17:44.801:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 05 2023 23:17:44.803:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 05 2023 23:17:44.806:INFO [launcher]: Starting browser Firefox
21 05 2023 23:17:47.084:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket pPLfIWc4vBWjYajlAAAB with id 12191126
Firefox 113.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
21 05 2023 23:17:47.932:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 12191126
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.048 secs)
21 05 2023 23:17:47.982:INFO [Firefox 113.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 48 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:203 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.096 secs)
21 05 2023 23:17:48.038:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 48 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:258 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.208 secs)
21 05 2023 23:17:48.174:INFO [Firefox 113.0 (Linux x86_64) | HomeComponent | should create]: Success: 112 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:394 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.218 secs)
21 05 2023 23:17:48.177:INFO [Firefox 113.0 (Linux x86_64) | LoadingComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:398 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.259 secs)
21 05 2023 23:17:48.224:INFO [Firefox 113.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:444 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.268 secs)
21 05 2023 23:17:48.248:INFO [Firefox 113.0 (Linux x86_64) | LoadingService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:468 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.268 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.268 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.356 secs)
21 05 2023 23:17:48.343:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
21 05 2023 23:17:48.344:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
21 05 2023 23:17:48.344:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Success: 88 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:564 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.36 secs)
21 05 2023 23:17:48.367:INFO [Firefox 113.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:588 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.396 secs)
21 05 2023 23:17:48.369:INFO [Firefox 113.0 (Linux x86_64) | MenuComponent | should create]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:590 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
21 05 2023 23:17:48.385:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 113.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.408 secs)
21 05 2023 23:17:48.386:INFO [Firefox 113.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:606 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.415 secs)
21 05 2023 23:17:48.395:INFO [Firefox 113.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:616 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 113.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.415 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.424 secs)
21 05 2023 23:17:48.418:ERROR [Firefox 113.0 (Linux x86_64) | PlaygroundComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

21 05 2023 23:17:48.419:INFO [Firefox 113.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:639 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.431 secs)
21 05 2023 23:17:48.421:INFO [Firefox 113.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:641 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.44 secs)
21 05 2023 23:17:48.432:INFO [Firefox 113.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:652 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.44 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.44 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.582 secs)
21 05 2023 23:17:48.576:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
21 05 2023 23:17:48.576:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
21 05 2023 23:17:48.576:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Success: 142 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:796 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.586 secs)
21 05 2023 23:17:48.597:INFO [Firefox 113.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:818 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.589 secs)
21 05 2023 23:17:48.598:INFO [Firefox 113.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:819 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.669 secs / 0.589 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:826 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.669 secs / 0.589 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 16.38s.
```
