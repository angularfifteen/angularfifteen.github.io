```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
29 08 2023 14:19:02.067:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
29 08 2023 14:19:02.069:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
29 08 2023 14:19:02.072:INFO [launcher]: Starting browser Firefox
29 08 2023 14:19:03.247:INFO [Firefox 116.0 (Linux x86_64)]: Connected on socket plkpQ67292kXIS1JAAAB with id 73108532
Firefox 116.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
29 08 2023 14:19:03.975:INFO [Firefox 116.0 (Linux x86_64)]: Starting tests 73108532
[1A[2KFirefox 116.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.016 secs)
29 08 2023 14:19:03.996:INFO [Firefox 116.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:970 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.026 secs)
29 08 2023 14:19:04.009:INFO [Firefox 116.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:982 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.059 secs)
29 08 2023 14:19:04.044:INFO [Firefox 116.0 (Linux x86_64) | AppComponent | should create the app]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:17 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 116.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.066 secs)
29 08 2023 14:19:04.052:INFO [Firefox 116.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:26 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
29 08 2023 14:19:04.053:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 116.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.074 secs)
29 08 2023 14:19:04.088:INFO [Firefox 116.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:61 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 116.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.074 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 116.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.074 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 116.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.074 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 116.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.162 secs)
29 08 2023 14:19:04.153:ERROR [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

29 08 2023 14:19:04.153:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
29 08 2023 14:19:04.153:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
29 08 2023 14:19:04.153:INFO [Firefox 116.0 (Linux x86_64) | QuizComponent | should create]: Success: 88 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:126 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.165 secs)
29 08 2023 14:19:04.156:INFO [Firefox 116.0 (Linux x86_64) | NewsService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:129 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.167 secs)
29 08 2023 14:19:04.158:INFO [Firefox 116.0 (Linux x86_64) | LoadingService | should be created]: Success: 2 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:132 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.171 secs)
29 08 2023 14:19:04.162:INFO [Firefox 116.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:135 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.192 secs)
29 08 2023 14:19:04.185:INFO [Firefox 116.0 (Linux x86_64) | HomeComponent | should create]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:158 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.196 secs)
29 08 2023 14:19:04.191:INFO [Firefox 116.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:164 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.208 secs)
29 08 2023 14:19:04.203:INFO [Firefox 116.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:176 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 116.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.208 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 116.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.208 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 116.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.238 secs)
29 08 2023 14:19:04.235:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
29 08 2023 14:19:04.235:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
29 08 2023 14:19:04.235:INFO [Firefox 116.0 (Linux x86_64) | NewsComponent | should create]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:208 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
29 08 2023 14:19:04.240:INFO [Firefox 116.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:213 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 116.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.245 secs)
29 08 2023 14:19:04.245:INFO [Firefox 116.0 (Linux x86_64) | LoadingComponent | should create]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:219 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.26 secs)
29 08 2023 14:19:04.261:INFO [Firefox 116.0 (Linux x86_64) | MenuComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:234 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.264 secs)
29 08 2023 14:19:04.266:INFO [Firefox 116.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:240 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.294 secs / 0.264 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 116.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:245 min/sec/ms


Firefox 116.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.294 secs / 0.264 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 11.83s.
```
