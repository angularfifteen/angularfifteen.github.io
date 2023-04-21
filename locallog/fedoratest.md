```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 04 2023 07:49:34.739:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 04 2023 07:49:34.741:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 04 2023 07:49:34.743:INFO [launcher]: Starting browser Firefox
21 04 2023 07:49:36.028:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket Z_ZSpTuJUFJXrFakAAAB with id 90557308
Firefox 112.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
21 04 2023 07:49:36.617:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 90557308
21 04 2023 07:49:36.661:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.034 secs)
21 04 2023 07:49:36.662:INFO [Firefox 112.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:962 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.044 secs)
21 04 2023 07:49:36.670:INFO [Firefox 112.0 (Linux x86_64) | LoadingService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:970 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 112.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.044 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.104 secs)
21 04 2023 07:49:36.733:ERROR [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

21 04 2023 07:49:36.734:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 60 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:34 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.2 secs)
21 04 2023 07:49:36.834:INFO [Firefox 112.0 (Linux x86_64) | HomeComponent | should create]: Success: 96 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:134 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.206 secs)
21 04 2023 07:49:36.845:INFO [Firefox 112.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:145 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.209 secs)
21 04 2023 07:49:36.875:INFO [Firefox 112.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:175 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.214 secs)
21 04 2023 07:49:36.876:INFO [Firefox 112.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:176 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.222 secs)
21 04 2023 07:49:36.877:INFO [Firefox 112.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:177 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.227 secs)
21 04 2023 07:49:36.877:INFO [Firefox 112.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:177 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.252 secs)
21 04 2023 07:49:36.904:INFO [Firefox 112.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:204 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.26 secs)
21 04 2023 07:49:36.918:INFO [Firefox 112.0 (Linux x86_64) | LoadingComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:218 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.267 secs)
21 04 2023 07:49:36.921:INFO [Firefox 112.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:221 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.291 secs)
21 04 2023 07:49:36.954:INFO [Firefox 112.0 (Linux x86_64) | MenuComponent | should create]: Success: 24 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:254 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.291 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.291 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.352 secs)
21 04 2023 07:49:37.016:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
21 04 2023 07:49:37.016:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
21 04 2023 07:49:37.016:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Success: 61 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:316 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.357 secs)
21 04 2023 07:49:37.023:INFO [Firefox 112.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:323 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.36 secs)
21 04 2023 07:49:37.028:INFO [Firefox 112.0 (Linux x86_64) | NewsService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:328 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.36 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.36 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.451 secs)
21 04 2023 07:49:37.121:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
21 04 2023 07:49:37.121:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
21 04 2023 07:49:37.121:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Success: 91 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:421 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.535 secs / 0.451 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:455 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.535 secs / 0.451 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.52s.
```
