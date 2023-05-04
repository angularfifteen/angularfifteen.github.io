```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
04 05 2023 04:44:28.534:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 05 2023 04:44:28.538:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 05 2023 04:44:28.543:INFO [launcher]: Starting browser Firefox
04 05 2023 04:44:30.429:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket BjQAn6KvpOv3_UbwAAAB with id 28413217
Firefox 112.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
04 05 2023 04:44:31.304:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 28413217
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.028 secs)
04 05 2023 04:44:31.366:INFO [Firefox 112.0 (Linux x86_64) | NewsService | should be created]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:865 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.028 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.028 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.213 secs)
04 05 2023 04:44:31.539:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
04 05 2023 04:44:31.539:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
04 05 2023 04:44:31.540:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Success: 185 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:40 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.283 secs)
04 05 2023 04:44:31.619:INFO [Firefox 112.0 (Linux x86_64) | MenuComponent | should create]: Success: 70 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:121 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.294 secs)
04 05 2023 04:44:31.632:INFO [Firefox 112.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:131 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.302 secs)
04 05 2023 04:44:31.638:INFO [Firefox 112.0 (Linux x86_64) | LoadingService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:137 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.326 secs)
04 05 2023 04:44:31.702:INFO [Firefox 112.0 (Linux x86_64) | LoadingComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:201 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.395 secs)
04 05 2023 04:44:31.743:INFO [Firefox 112.0 (Linux x86_64) | HomeComponent | should create]: Success: 69 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:242 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.403 secs)
04 05 2023 04:44:31.790:INFO [Firefox 112.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:289 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.453 secs)
04 05 2023 04:44:31.852:INFO [Firefox 112.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 50 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:352 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.466 secs)
04 05 2023 04:44:31.870:INFO [Firefox 112.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:369 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.473 secs)
04 05 2023 04:44:31.880:INFO [Firefox 112.0 (Linux x86_64) | QuizService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:379 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.473 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.473 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.634 secs)
04 05 2023 04:44:32.010:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
04 05 2023 04:44:32.010:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
04 05 2023 04:44:32.010:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Success: 161 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:509 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.647 secs)
04 05 2023 04:44:32.045:INFO [Firefox 112.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:544 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.666 secs)
04 05 2023 04:44:32.059:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:558 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.67 secs)
04 05 2023 04:44:32.062:INFO [Firefox 112.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:561 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.679 secs)
04 05 2023 04:44:32.080:INFO [Firefox 112.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:579 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
04 05 2023 04:44:32.081:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.685 secs)
04 05 2023 04:44:32.085:INFO [Firefox 112.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:584 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.785 secs / 0.685 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:593 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.785 secs / 0.685 secs)
[32mTOTAL: 17 SUCCESS[39m

[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.785 secs / 0.685 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2K[31mFirefox 112.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
Firefox 112.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.797 secs / 0.685 secs)
Firefox 112.0 (Linux x86_64) ERROR
  Disconnected , because no message in 30000 ms.
[31mFirefox 112.0 (Linux x86_64) ERROR[39m
  Disconnected , because no message in 30000 ms.
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.797 secs / 0.685 secs)


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:33:603 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 17 of 17[31m DISCONNECTED[39m (30.797 secs / 0.685 secs)

Done in 63.49s.
```
