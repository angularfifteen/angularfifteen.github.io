```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
27 11 2022 19:54:51.658:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
27 11 2022 19:54:51.665:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
27 11 2022 19:54:51.670:INFO [launcher]: Starting browser Firefox
27 11 2022 19:54:54.615:INFO [Firefox 107.0 (Linux x86_64)]: Connected on socket 7xM_bBBy83MTatQnAAAB with id 83639615
Firefox 107.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
27 11 2022 19:54:56.205:INFO [Firefox 107.0 (Linux x86_64)]: Starting tests 83639615
[1A[2KFirefox 107.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.039 secs)
27 11 2022 19:54:56.283:INFO [Firefox 107.0 (Linux x86_64) | NewsService | should be created]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:4:661 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.056 secs)
27 11 2022 19:54:56.294:INFO [Firefox 107.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:4:671 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.1 secs)
27 11 2022 19:54:56.331:INFO [Firefox 107.0 (Linux x86_64) | LoadingComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:4:708 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.1 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.1 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.386 secs)
27 11 2022 19:54:56.656:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
27 11 2022 19:54:56.657:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
27 11 2022 19:54:56.657:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Success: 286 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:5:35 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.396 secs)
27 11 2022 19:54:56.659:INFO [Firefox 107.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:5:36 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.406 secs)
27 11 2022 19:54:56.688:INFO [Firefox 107.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:5:65 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.429 secs)
27 11 2022 19:54:56.702:INFO [Firefox 107.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:5:80 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.507 secs)
27 11 2022 19:54:56.781:INFO [Firefox 107.0 (Linux x86_64) | MenuComponent | should create]: Success: 78 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:5:159 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.507 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.507 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.655 secs)
27 11 2022 19:54:56.939:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
27 11 2022 19:54:56.940:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
27 11 2022 19:54:56.940:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Success: 148 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:5:317 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.701 secs)
27 11 2022 19:54:56.998:INFO [Firefox 107.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:5:375 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.728 secs)
27 11 2022 19:54:57.038:INFO [Firefox 107.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:5:416 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.749 secs)
27 11 2022 19:54:57.148:INFO [Firefox 107.0 (Linux x86_64) | AppComponent | should create the app]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:5:525 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 107.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.759 secs)
27 11 2022 19:54:57.149:INFO [Firefox 107.0 (Linux x86_64) | LoadingService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:5:526 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.774 secs)
27 11 2022 19:54:57.154:INFO [Firefox 107.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:5:531 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.784 secs)
27 11 2022 19:54:57.155:INFO [Firefox 107.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:5:532 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
27 11 2022 19:54:57.185:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 107.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.887 secs)
27 11 2022 19:54:57.228:INFO [Firefox 107.0 (Linux x86_64) | HomeComponent | should create]: Success: 103 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:5:605 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 107.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.887 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.894 secs)
27 11 2022 19:54:57.278:ERROR [Firefox 107.0 (Linux x86_64) | QuizService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

27 11 2022 19:54:57.278:INFO [Firefox 107.0 (Linux x86_64) | QuizService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:5:655 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (1.076 secs / 0.894 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 107.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:5:666 min/sec/ms


Firefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (1.076 secs / 0.894 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 20.36s.
```
