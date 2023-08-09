```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 08 2023 18:23:31.254:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 08 2023 18:23:31.256:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 08 2023 18:23:31.260:INFO [launcher]: Starting browser Firefox
09 08 2023 18:23:32.520:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket TxRB5m_9C_9zhfiDAAAB with id 69311870
Firefox 116.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
09 08 2023 18:23:33.193:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 69311870
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
09 08 2023 18:23:33.220:INFO [Firefox 116.0 (Linux x86_64) | NewsService | should be created]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:993 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.03 secs)
09 08 2023 18:23:33.223:INFO [Firefox 116.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:995 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.037 secs)
09 08 2023 18:23:33.229:INFO [Firefox 116.0 (Linux x86_64) | LoadingService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:2 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.045 secs)
09 08 2023 18:23:33.240:INFO [Firefox 116.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:13 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.057 secs)
09 08 2023 18:23:33.260:INFO [Firefox 116.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:32 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
09 08 2023 18:23:33.264:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 116.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.107 secs)
09 08 2023 18:23:33.298:INFO [Firefox 116.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 50 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:71 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 116.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.107 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 116.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.112 secs)
09 08 2023 18:23:33.310:ERROR [Firefox 116.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

09 08 2023 18:23:33.311:INFO [Firefox 116.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:83 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.122 secs)
09 08 2023 18:23:33.330:INFO [Firefox 116.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:102 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.141 secs)
09 08 2023 18:23:33.340:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:112 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.203 secs)
09 08 2023 18:23:33.406:INFO [Firefox 116.0 (Linux x86_64) | HomeComponent | should create]: Success: 62 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:178 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 116.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.203 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 116.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.203 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 116.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
09 08 2023 18:23:33.449:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
09 08 2023 18:23:33.450:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
09 08 2023 18:23:33.450:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:222 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.248 secs)
09 08 2023 18:23:33.455:INFO [Firefox 116.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:227 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.255 secs)
09 08 2023 18:23:33.464:INFO [Firefox 116.0 (Linux x86_64) | LoadingComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:236 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.285 secs)
09 08 2023 18:23:33.493:INFO [Firefox 116.0 (Linux x86_64) | MenuComponent | should create]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:265 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.288 secs)
09 08 2023 18:23:33.499:INFO [Firefox 116.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:272 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.29 secs)
09 08 2023 18:23:33.504:INFO [Firefox 116.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:276 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 116.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.29 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 116.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.29 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.352 secs)
09 08 2023 18:23:33.569:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 08 2023 18:23:33.569:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 08 2023 18:23:33.569:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Success: 62 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:341 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.378 secs / 0.352 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:345 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.378 secs / 0.352 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 21.76s.
```
