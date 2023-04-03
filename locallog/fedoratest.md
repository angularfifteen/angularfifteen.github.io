```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
03 04 2023 00:12:12.557:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
03 04 2023 00:12:12.558:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
03 04 2023 00:12:12.561:INFO [launcher]: Starting browser Firefox
03 04 2023 00:12:13.873:INFO [Firefox 111.0 (Linux x86_64)]: Connected on socket ommmB9JXLodK4ixOAAAB with id 84755377
Firefox 111.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
03 04 2023 00:12:14.520:INFO [Firefox 111.0 (Linux x86_64)]: Starting tests 84755377
[1A[2KFirefox 111.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.194 secs)
03 04 2023 00:12:14.718:INFO [Firefox 111.0 (Linux x86_64) | HomeComponent | should create]: Success: 194 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:204 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.201 secs)
03 04 2023 00:12:14.730:INFO [Firefox 111.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:215 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.211 secs)
03 04 2023 00:12:14.754:INFO [Firefox 111.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:239 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.216 secs)
03 04 2023 00:12:14.755:INFO [Firefox 111.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:241 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
03 04 2023 00:12:14.757:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 111.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.22 secs)
03 04 2023 00:12:14.762:INFO [Firefox 111.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:247 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.227 secs)
03 04 2023 00:12:14.769:INFO [Firefox 111.0 (Linux x86_64) | QuizService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:254 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 111.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.227 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
03 04 2023 00:12:14.777:ERROR [Firefox 111.0 (Linux x86_64) | LoaderIoComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

03 04 2023 00:12:14.778:INFO [Firefox 111.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:263 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.265 secs)
03 04 2023 00:12:14.813:INFO [Firefox 111.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:298 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.284 secs)
03 04 2023 00:12:14.851:INFO [Firefox 111.0 (Linux x86_64) | AppComponent | should create the app]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:337 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.284 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 111.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.284 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.385 secs)
03 04 2023 00:12:14.962:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
03 04 2023 00:12:14.962:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
03 04 2023 00:12:14.962:INFO [Firefox 111.0 (Linux x86_64) | QuizComponent | should create]: Success: 101 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:447 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.389 secs)
03 04 2023 00:12:14.963:INFO [Firefox 111.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:448 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.416 secs)
03 04 2023 00:12:14.985:INFO [Firefox 111.0 (Linux x86_64) | MenuComponent | should create]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:470 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.421 secs)
03 04 2023 00:12:14.994:INFO [Firefox 111.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:479 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.428 secs)
03 04 2023 00:12:14.998:INFO [Firefox 111.0 (Linux x86_64) | LoadingComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:483 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 111.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.428 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 111.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.428 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 111.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.479 secs)
03 04 2023 00:12:15.044:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
03 04 2023 00:12:15.044:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
03 04 2023 00:12:15.044:INFO [Firefox 111.0 (Linux x86_64) | NewsComponent | should create]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:529 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.484 secs)
03 04 2023 00:12:15.050:INFO [Firefox 111.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:535 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.487 secs)
03 04 2023 00:12:15.053:INFO [Firefox 111.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:539 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.568 secs / 0.487 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 111.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:591 min/sec/ms


Firefox 111.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.568 secs / 0.487 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.55s.
```
