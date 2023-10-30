```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 10 2023 11:10:06.421:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 10 2023 11:10:06.424:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 10 2023 11:10:06.427:INFO [launcher]: Starting browser Firefox
30 10 2023 11:10:07.683:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket kpSelB7PcX9dwcS9AAAB with id 87634981
Firefox 119.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
30 10 2023 11:10:08.722:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 87634981
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.111 secs)
30 10 2023 11:10:08.888:INFO [Firefox 119.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 111 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:505 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.246 secs)
30 10 2023 11:10:08.969:INFO [Firefox 119.0 (Linux x86_64) | MenuComponent | should create]: Success: 135 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:585 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.246 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.246 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.354 secs)
30 10 2023 11:10:09.083:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
30 10 2023 11:10:09.083:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
30 10 2023 11:10:09.084:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Success: 108 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:700 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.363 secs)
30 10 2023 11:10:09.096:INFO [Firefox 119.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:712 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
30 10 2023 11:10:09.101:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.375 secs)
30 10 2023 11:10:09.113:INFO [Firefox 119.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:729 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.375 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.375 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.429 secs)
30 10 2023 11:10:09.171:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
30 10 2023 11:10:09.171:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
30 10 2023 11:10:09.171:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Success: 54 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:787 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 119.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.429 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.435 secs)
30 10 2023 11:10:09.176:ERROR [Firefox 119.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

30 10 2023 11:10:09.176:INFO [Firefox 119.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:792 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.44 secs)
30 10 2023 11:10:09.180:INFO [Firefox 119.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:797 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.471 secs)
30 10 2023 11:10:09.242:INFO [Firefox 119.0 (Linux x86_64) | HomeComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:858 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.481 secs)
30 10 2023 11:10:09.244:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:860 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.485 secs)
30 10 2023 11:10:09.245:INFO [Firefox 119.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:862 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.49 secs)
30 10 2023 11:10:09.246:INFO [Firefox 119.0 (Linux x86_64) | LoadingComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:862 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.493 secs)
30 10 2023 11:10:09.247:INFO [Firefox 119.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:863 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.509 secs)
30 10 2023 11:10:09.256:INFO [Firefox 119.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:872 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.512 secs)
30 10 2023 11:10:09.264:INFO [Firefox 119.0 (Linux x86_64) | NewsService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:880 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.515 secs)
30 10 2023 11:10:09.271:INFO [Firefox 119.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:888 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.518 secs)
30 10 2023 11:10:09.273:INFO [Firefox 119.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:889 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.551 secs / 0.518 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:892 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.551 secs / 0.518 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.72s.
```
