```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
28 08 2023 12:27:50.995:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
28 08 2023 12:27:50.997:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
28 08 2023 12:27:51.001:INFO [launcher]: Starting browser Firefox
28 08 2023 12:27:52.254:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket vmORwfZYfSFGFW-iAAAB with id 50041097
Firefox 116.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
28 08 2023 12:27:53.353:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 50041097
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.013 secs)
28 08 2023 12:27:53.360:INFO [Firefox 116.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:390 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.058 secs)
28 08 2023 12:27:53.361:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:391 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.064 secs)
28 08 2023 12:27:53.362:INFO [Firefox 116.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:392 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.069 secs)
28 08 2023 12:27:53.362:INFO [Firefox 116.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:393 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.12 secs)
28 08 2023 12:27:53.363:INFO [Firefox 116.0 (Linux x86_64) | MenuComponent | should create]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:393 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 116.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.12 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 116.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.12 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 116.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.213 secs)
28 08 2023 12:27:53.364:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 08 2023 12:27:53.364:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
28 08 2023 12:27:53.364:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Success: 93 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:394 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.217 secs)
28 08 2023 12:27:53.365:INFO [Firefox 116.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:395 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 116.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.217 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 116.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.217 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 116.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.256 secs)
28 08 2023 12:27:53.365:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
28 08 2023 12:27:53.365:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
28 08 2023 12:27:53.366:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Success: 39 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:396 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.26 secs)
28 08 2023 12:27:53.366:INFO [Firefox 116.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:396 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.284 secs)
28 08 2023 12:27:53.366:INFO [Firefox 116.0 (Linux x86_64) | HomeComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:396 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.289 secs)
28 08 2023 12:27:53.367:INFO [Firefox 116.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:397 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.292 secs)
28 08 2023 12:27:53.367:INFO [Firefox 116.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:397 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.295 secs)
28 08 2023 12:27:53.371:INFO [Firefox 116.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:401 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.297 secs)
28 08 2023 12:27:53.371:INFO [Firefox 116.0 (Linux x86_64) | NewsService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:402 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.3 secs)
28 08 2023 12:27:53.372:INFO [Firefox 116.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:402 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.303 secs)
28 08 2023 12:27:53.372:INFO [Firefox 116.0 (Linux x86_64) | LoadingComponent | should create]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:402 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
28 08 2023 12:27:53.373:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.317 secs)
28 08 2023 12:27:53.380:INFO [Firefox 116.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:410 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.317 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.03 secs / 0.317 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS
28 08 2023 12:27:53.385:ERROR [Firefox 116.0 (Linux x86_64)]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.



[4m[1mSuites and tests results:[22m[24m

 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:416 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.03 secs / 0.317 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 13.22s.
```
