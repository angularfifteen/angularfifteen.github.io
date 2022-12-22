```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
22 12 2022 09:19:19.755:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
22 12 2022 09:19:19.757:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
22 12 2022 09:19:19.775:INFO [launcher]: Starting browser Firefox
22 12 2022 09:19:21.706:INFO [Firefox 108.0 (Linux x86_64)]: Connected on socket U3gvJVXNi-4w0SenAAAB with id 80449034
Firefox 108.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
22 12 2022 09:19:22.493:INFO [Firefox 108.0 (Linux x86_64)]: Starting tests 80449034
[1A[2KFirefox 108.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.036 secs)
22 12 2022 09:19:22.580:INFO [Firefox 108.0 (Linux x86_64) | LoadingComponent | should create]: Success: 36 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:849 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.043 secs)
22 12 2022 09:19:22.586:INFO [Firefox 108.0 (Linux x86_64) | LoadingService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:855 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.05 secs)
22 12 2022 09:19:22.588:INFO [Firefox 108.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:857 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.069 secs)
22 12 2022 09:19:22.593:INFO [Firefox 108.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:862 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 108.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
22 12 2022 09:19:22.595:INFO [Firefox 108.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:864 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 108.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 108.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.21 secs)
22 12 2022 09:19:22.731:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
22 12 2022 09:19:22.732:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
22 12 2022 09:19:22.732:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Success: 128 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:3:1 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.216 secs)
22 12 2022 09:19:22.748:INFO [Firefox 108.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:3:18 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.223 secs)
22 12 2022 09:19:22.750:INFO [Firefox 108.0 (Linux x86_64) | QuizService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:3:19 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.282 secs)
22 12 2022 09:19:22.817:INFO [Firefox 108.0 (Linux x86_64) | HomeComponent | should create]: Success: 59 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:3:87 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.326 secs)
22 12 2022 09:19:22.889:INFO [Firefox 108.0 (Linux x86_64) | MenuComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:3:158 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 108.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.326 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 108.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.326 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.435 secs)
22 12 2022 09:19:22.990:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
22 12 2022 09:19:22.990:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
22 12 2022 09:19:22.990:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Success: 109 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:3:259 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.447 secs)
22 12 2022 09:19:23.006:INFO [Firefox 108.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:3:275 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
22 12 2022 09:19:23.032:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 108.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.465 secs)
22 12 2022 09:19:23.036:INFO [Firefox 108.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:305 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.47 secs)
22 12 2022 09:19:23.040:INFO [Firefox 108.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:309 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.483 secs)
22 12 2022 09:19:23.042:INFO [Firefox 108.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:312 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.49 secs)
22 12 2022 09:19:23.052:INFO [Firefox 108.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:321 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.521 secs)
22 12 2022 09:19:23.108:INFO [Firefox 108.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:377 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.521 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.617 secs / 0.521 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS
22 12 2022 09:19:23.114:ERROR [Firefox 108.0 (Linux x86_64)]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.



[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 108.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:384 min/sec/ms


Firefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.617 secs / 0.521 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 17.66s.
```
