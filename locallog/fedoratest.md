```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
26 01 2023 18:27:19.004:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
26 01 2023 18:27:19.008:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 01 2023 18:27:19.012:INFO [launcher]: Starting browser Firefox
26 01 2023 18:27:21.142:INFO [Firefox 109.0 (Linux x86_64)]: Connected on socket 8ao8O0nn2-vfRJoEAAAB with id 87601879
Firefox 109.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
26 01 2023 18:27:22.091:INFO [Firefox 109.0 (Linux x86_64)]: Starting tests 87601879
[1A[2KFirefox 109.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.182 secs)
26 01 2023 18:27:22.300:INFO [Firefox 109.0 (Linux x86_64) | HomeComponent | should create]: Success: 182 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:341 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.193 secs)
26 01 2023 18:27:22.304:INFO [Firefox 109.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:344 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.204 secs)
26 01 2023 18:27:22.319:INFO [Firefox 109.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:3:359 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.262 secs)
26 01 2023 18:27:22.402:INFO [Firefox 109.0 (Linux x86_64) | MenuComponent | should create]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:3:443 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.272 secs)
26 01 2023 18:27:22.405:INFO [Firefox 109.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:3:445 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.299 secs)
26 01 2023 18:27:22.437:INFO [Firefox 109.0 (Linux x86_64) | AppComponent | should create the app]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:478 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
26 01 2023 18:27:22.453:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 109.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.299 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 109.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.299 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.39 secs)
26 01 2023 18:27:22.507:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
26 01 2023 18:27:22.508:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
26 01 2023 18:27:22.508:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Success: 91 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:548 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 109.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.39 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.394 secs)
26 01 2023 18:27:22.549:ERROR [Firefox 109.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

26 01 2023 18:27:22.550:INFO [Firefox 109.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:590 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.403 secs)
26 01 2023 18:27:22.551:INFO [Firefox 109.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:591 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.407 secs)
26 01 2023 18:27:22.553:INFO [Firefox 109.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:593 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.411 secs)
26 01 2023 18:27:22.554:INFO [Firefox 109.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:595 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.438 secs)
26 01 2023 18:27:22.568:INFO [Firefox 109.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:609 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.449 secs)
26 01 2023 18:27:22.591:INFO [Firefox 109.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:631 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.454 secs)
26 01 2023 18:27:22.592:INFO [Firefox 109.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:632 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.46 secs)
26 01 2023 18:27:22.600:INFO [Firefox 109.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:640 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.468 secs)
26 01 2023 18:27:22.609:INFO [Firefox 109.0 (Linux x86_64) | LoadingComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:650 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.468 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.468 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.549 secs)
26 01 2023 18:27:22.701:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
26 01 2023 18:27:22.701:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
26 01 2023 18:27:22.701:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Success: 81 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:741 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.611 secs / 0.549 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 109.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:748 min/sec/ms


Firefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.611 secs / 0.549 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 17.70s.
```
