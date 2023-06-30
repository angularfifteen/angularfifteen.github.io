```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 06 2023 14:43:44.283:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 06 2023 14:43:44.285:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 06 2023 14:43:44.287:INFO [launcher]: Starting browser Firefox
30 06 2023 14:43:45.685:INFO [Firefox 114.0 (Linux x86_64)]: Connected on socket vowcx_WU0W22VUUVAAAB with id 22340895
Firefox 114.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
30 06 2023 14:43:46.282:INFO [Firefox 114.0 (Linux x86_64)]: Starting tests 22340895
[1A[2KFirefox 114.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.021 secs)
30 06 2023 14:43:46.311:INFO [Firefox 114.0 (Linux x86_64) | LoadingService | should be created]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:39 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.035 secs)
30 06 2023 14:43:46.329:INFO [Firefox 114.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:57 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
30 06 2023 14:43:46.337:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.035 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 114.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.035 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.201 secs)
30 06 2023 14:43:46.521:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
30 06 2023 14:43:46.522:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
30 06 2023 14:43:46.522:INFO [Firefox 114.0 (Linux x86_64) | QuizComponent | should create]: Success: 166 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:250 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 114.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.201 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.213 secs)
30 06 2023 14:43:46.528:ERROR [Firefox 114.0 (Linux x86_64) | LoadingComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

30 06 2023 14:43:46.528:INFO [Firefox 114.0 (Linux x86_64) | LoadingComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:256 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.222 secs)
30 06 2023 14:43:46.530:INFO [Firefox 114.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:258 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.23 secs)
30 06 2023 14:43:46.536:INFO [Firefox 114.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:264 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.235 secs)
30 06 2023 14:43:46.550:INFO [Firefox 114.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:279 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.239 secs)
30 06 2023 14:43:46.553:INFO [Firefox 114.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:281 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.272 secs)
30 06 2023 14:43:46.587:INFO [Firefox 114.0 (Linux x86_64) | MenuComponent | should create]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:315 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.278 secs)
30 06 2023 14:43:46.599:INFO [Firefox 114.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:327 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.284 secs)
30 06 2023 14:43:46.608:INFO [Firefox 114.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:336 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.291 secs)
30 06 2023 14:43:46.612:INFO [Firefox 114.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:340 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 114.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.291 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 114.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.291 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 114.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.332 secs)
30 06 2023 14:43:46.656:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
30 06 2023 14:43:46.656:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
30 06 2023 14:43:46.656:INFO [Firefox 114.0 (Linux x86_64) | NewsComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:384 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.357 secs)
30 06 2023 14:43:46.687:INFO [Firefox 114.0 (Linux x86_64) | HomeComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:415 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.361 secs)
30 06 2023 14:43:46.687:INFO [Firefox 114.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:415 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 114.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.375 secs)
30 06 2023 14:43:46.712:INFO [Firefox 114.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:440 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.384 secs)
30 06 2023 14:43:46.712:INFO [Firefox 114.0 (Linux x86_64) | AppComponent | should create the app]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:441 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.44 secs / 0.384 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 114.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:453 min/sec/ms


Firefox 114.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.44 secs / 0.384 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.29s.
```
