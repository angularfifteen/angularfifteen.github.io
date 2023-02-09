```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 02 2023 06:53:53.233:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 02 2023 06:53:53.236:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 02 2023 06:53:53.240:INFO [launcher]: Starting browser Firefox
09 02 2023 06:53:54.643:INFO [Firefox 109.0 (Linux x86_64)]: Connected on socket 4cndUfefpof8lcXmAAAB with id 82881626
Firefox 109.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
09 02 2023 06:53:55.296:INFO [Firefox 109.0 (Linux x86_64)]: Starting tests 82881626
[1A[2KFirefox 109.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.17 secs)
09 02 2023 06:53:55.472:INFO [Firefox 109.0 (Linux x86_64) | MenuComponent | should create]: Success: 170 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:267 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.203 secs)
09 02 2023 06:53:55.509:INFO [Firefox 109.0 (Linux x86_64) | AppComponent | should create the app]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:305 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 109.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.208 secs)
09 02 2023 06:53:55.538:INFO [Firefox 109.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:333 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
09 02 2023 06:53:55.544:INFO [Firefox 109.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:339 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
09 02 2023 06:53:55.546:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
09 02 2023 06:53:55.550:INFO [Firefox 109.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:345 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.339 secs)
09 02 2023 06:53:55.678:ERROR [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

09 02 2023 06:53:55.678:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
09 02 2023 06:53:55.678:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
09 02 2023 06:53:55.678:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Success: 107 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:473 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.346 secs)
09 02 2023 06:53:55.696:INFO [Firefox 109.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:491 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.346 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.346 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.478 secs)
09 02 2023 06:53:55.818:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 02 2023 06:53:55.819:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 02 2023 06:53:55.819:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Success: 132 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:614 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.483 secs)
09 02 2023 06:53:55.863:INFO [Firefox 109.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:658 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.488 secs)
09 02 2023 06:53:55.873:INFO [Firefox 109.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:668 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.519 secs)
09 02 2023 06:53:55.877:INFO [Firefox 109.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:672 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.523 secs)
09 02 2023 06:53:55.881:INFO [Firefox 109.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:676 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.532 secs)
09 02 2023 06:53:55.890:INFO [Firefox 109.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:685 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.541 secs)
09 02 2023 06:53:55.902:INFO [Firefox 109.0 (Linux x86_64) | LoadingComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:697 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.545 secs)
09 02 2023 06:53:55.910:INFO [Firefox 109.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:705 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.551 secs)
09 02 2023 06:53:55.922:INFO [Firefox 109.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:717 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.588 secs)
09 02 2023 06:53:55.955:INFO [Firefox 109.0 (Linux x86_64) | HomeComponent | should create]: Success: 37 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:750 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.664 secs / 0.588 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 109.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:760 min/sec/ms


Firefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.664 secs / 0.588 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 27.76s.
```
