```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
31 07 2023 15:44:27.017:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
31 07 2023 15:44:27.019:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
31 07 2023 15:44:27.023:INFO [launcher]: Starting browser Firefox
31 07 2023 15:44:28.474:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket _5oEEZM7K4fi1rJHAAAB with id 75366794
Firefox 115.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
31 07 2023 15:44:29.206:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 75366794
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.132 secs)
31 07 2023 15:44:29.342:INFO [Firefox 115.0 (Linux x86_64) | MenuComponent | should create]: Success: 132 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:347 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.132 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.132 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.225 secs)
31 07 2023 15:44:29.444:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
31 07 2023 15:44:29.444:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
31 07 2023 15:44:29.445:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Success: 93 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:449 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
31 07 2023 15:44:29.446:INFO [Firefox 115.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:450 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.322 secs)
31 07 2023 15:44:29.541:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
31 07 2023 15:44:29.541:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
31 07 2023 15:44:29.541:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Success: 90 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:546 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.326 secs)
31 07 2023 15:44:29.560:INFO [Firefox 115.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:564 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.332 secs)
31 07 2023 15:44:29.571:INFO [Firefox 115.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:575 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.335 secs)
31 07 2023 15:44:29.572:INFO [Firefox 115.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:576 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.341 secs)
31 07 2023 15:44:29.574:INFO [Firefox 115.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:578 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.364 secs)
31 07 2023 15:44:29.601:INFO [Firefox 115.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:605 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.396 secs)
31 07 2023 15:44:29.633:INFO [Firefox 115.0 (Linux x86_64) | HomeComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:637 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.404 secs)
31 07 2023 15:44:29.641:INFO [Firefox 115.0 (Linux x86_64) | LoadingComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:645 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.409 secs)
31 07 2023 15:44:29.653:INFO [Firefox 115.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:657 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.415 secs)
31 07 2023 15:44:29.657:INFO [Firefox 115.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:661 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.418 secs)
31 07 2023 15:44:29.661:INFO [Firefox 115.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:666 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.431 secs)
31 07 2023 15:44:29.676:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:680 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.434 secs)
31 07 2023 15:44:29.680:INFO [Firefox 115.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:685 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
31 07 2023 15:44:29.688:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.441 secs)
31 07 2023 15:44:29.690:INFO [Firefox 115.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:694 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.488 secs / 0.441 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:701 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.488 secs / 0.441 secs)
[32mTOTAL: 17 SUCCESS[39m

[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.488 secs / 0.441 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2K[31mFirefox 115.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 115.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.499 secs / 0.441 secs)
Firefox 115.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[31mFirefox 115.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.499 secs / 0.441 secs)


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:32:715 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.499 secs / 0.441 secs)

Done in 54.37s.
```
