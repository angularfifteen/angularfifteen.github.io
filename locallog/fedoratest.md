```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 09 2023 21:02:38.885:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 09 2023 21:02:38.887:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 09 2023 21:02:38.890:INFO [launcher]: Starting browser Firefox
30 09 2023 21:02:40.249:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket xeylcubUvqkOq-gsAAAB with id 39732215
Firefox 118.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
30 09 2023 21:02:41.213:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 39732215
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.064 secs)
30 09 2023 21:02:41.253:INFO [Firefox 118.0 (Linux x86_64) | MenuComponent | should create]: Success: 64 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:381 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.064 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.064 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.131 secs)
30 09 2023 21:02:41.325:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
30 09 2023 21:02:41.326:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
30 09 2023 21:02:41.326:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Success: 67 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:454 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 118.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.131 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 118.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.131 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.163 secs)
30 09 2023 21:02:41.360:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
30 09 2023 21:02:41.360:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
30 09 2023 21:02:41.361:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:489 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.167 secs)
30 09 2023 21:02:41.367:INFO [Firefox 118.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:496 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.172 secs)
30 09 2023 21:02:41.377:INFO [Firefox 118.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:505 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.177 secs)
30 09 2023 21:02:41.382:INFO [Firefox 118.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:511 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.181 secs)
30 09 2023 21:02:41.384:INFO [Firefox 118.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:513 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.193 secs)
30 09 2023 21:02:41.399:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:527 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.217 secs)
30 09 2023 21:02:41.425:INFO [Firefox 118.0 (Linux x86_64) | HomeComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:554 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.22 secs)
30 09 2023 21:02:41.429:INFO [Firefox 118.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:558 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
30 09 2023 21:02:41.438:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 118.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.228 secs)
30 09 2023 21:02:41.440:INFO [Firefox 118.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:568 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
30 09 2023 21:02:41.444:INFO [Firefox 118.0 (Linux x86_64) | LoadingComponent | should create]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:572 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 118.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.249 secs)
30 09 2023 21:02:41.462:ERROR [Firefox 118.0 (Linux x86_64) | KeyIndustriesComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

30 09 2023 21:02:41.462:INFO [Firefox 118.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:590 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.256 secs)
30 09 2023 21:02:41.471:INFO [Firefox 118.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:599 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.259 secs)
30 09 2023 21:02:41.476:INFO [Firefox 118.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:604 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.262 secs)
30 09 2023 21:02:41.480:INFO [Firefox 118.0 (Linux x86_64) | NewsService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:608 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.264 secs)
30 09 2023 21:02:41.483:INFO [Firefox 118.0 (Linux x86_64) | LoadingService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:612 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.274 secs / 0.264 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:618 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.274 secs / 0.264 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 13.04s.
```
