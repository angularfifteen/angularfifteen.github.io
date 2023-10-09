```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 10 2023 07:02:58.099:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 10 2023 07:02:58.101:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 10 2023 07:02:58.103:INFO [launcher]: Starting browser Firefox
09 10 2023 07:02:59.356:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket nbFARlNj8frpbSR-AAAB with id 82487256
Firefox 118.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
09 10 2023 07:03:00.211:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 82487256
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 118.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 118.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.092 secs)
09 10 2023 07:03:00.325:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
09 10 2023 07:03:00.325:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
09 10 2023 07:03:00.325:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Success: 92 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:238 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.097 secs)
09 10 2023 07:03:00.328:INFO [Firefox 118.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:240 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
09 10 2023 07:03:00.329:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.125 secs)
09 10 2023 07:03:00.337:INFO [Firefox 118.0 (Linux x86_64) | MenuComponent | should create]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:250 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 118.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.125 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.128 secs)
09 10 2023 07:03:00.345:ERROR [Firefox 118.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

09 10 2023 07:03:00.345:INFO [Firefox 118.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:257 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.128 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.128 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.191 secs)
09 10 2023 07:03:00.410:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 10 2023 07:03:00.410:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 10 2023 07:03:00.410:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Success: 63 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:322 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.194 secs)
09 10 2023 07:03:00.419:INFO [Firefox 118.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:331 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.201 secs)
09 10 2023 07:03:00.427:INFO [Firefox 118.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:339 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.212 secs)
09 10 2023 07:03:00.437:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:349 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.214 secs)
09 10 2023 07:03:00.448:INFO [Firefox 118.0 (Linux x86_64) | QuizService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:360 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
09 10 2023 07:03:00.450:INFO [Firefox 118.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:362 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.231 secs)
09 10 2023 07:03:00.462:INFO [Firefox 118.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:375 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.256 secs)
09 10 2023 07:03:00.492:INFO [Firefox 118.0 (Linux x86_64) | HomeComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:404 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.259 secs)
09 10 2023 07:03:00.493:INFO [Firefox 118.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:405 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.264 secs)
09 10 2023 07:03:00.499:INFO [Firefox 118.0 (Linux x86_64) | LoadingComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:411 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.269 secs)
09 10 2023 07:03:00.501:INFO [Firefox 118.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:413 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.271 secs)
09 10 2023 07:03:00.506:INFO [Firefox 118.0 (Linux x86_64) | NewsService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:418 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.274 secs)
09 10 2023 07:03:00.510:INFO [Firefox 118.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:422 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.303 secs / 0.274 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:428 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.303 secs / 0.274 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.10s.
```
