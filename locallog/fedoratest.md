```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
08 12 2022 21:52:31.876:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
08 12 2022 21:52:31.879:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
08 12 2022 21:52:31.883:INFO [launcher]: Starting browser Firefox
08 12 2022 21:52:34.533:INFO [Firefox 107.0 (Linux x86_64)]: Connected on socket G1VmE8-2hCmV7TViAAAB with id 54057666
Firefox 107.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
08 12 2022 21:52:36.521:INFO [Firefox 107.0 (Linux x86_64)]: Starting tests 54057666
[1A[2KFirefox 107.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.043 secs)
08 12 2022 21:52:36.613:INFO [Firefox 107.0 (Linux x86_64) | LoadingService | should be created]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:4:761 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.09 secs)
08 12 2022 21:52:36.679:INFO [Firefox 107.0 (Linux x86_64) | LoadingComponent | should create]: Success: 47 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:4:827 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.104 secs)
08 12 2022 21:52:36.683:INFO [Firefox 107.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:4:830 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.28 secs)
08 12 2022 21:52:36.853:INFO [Firefox 107.0 (Linux x86_64) | HomeComponent | should create]: Success: 176 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:5:2 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.294 secs)
08 12 2022 21:52:36.857:INFO [Firefox 107.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:5:5 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.31 secs)
08 12 2022 21:52:36.883:INFO [Firefox 107.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:5:31 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
08 12 2022 21:52:36.890:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.323 secs)
08 12 2022 21:52:36.905:INFO [Firefox 107.0 (Linux x86_64) | QuizService | should be created]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:5:52 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.323 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 107.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.323 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.535 secs)
08 12 2022 21:52:37.147:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
08 12 2022 21:52:37.148:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
08 12 2022 21:52:37.148:INFO [Firefox 107.0 (Linux x86_64) | QuizComponent | should create]: Success: 212 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:5:295 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 107.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.535 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.544 secs)
08 12 2022 21:52:37.152:ERROR [Firefox 107.0 (Linux x86_64) | PromptUpdateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

08 12 2022 21:52:37.152:INFO [Firefox 107.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:5:300 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.564 secs)
08 12 2022 21:52:37.157:INFO [Firefox 107.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:5:305 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.605 secs)
08 12 2022 21:52:37.203:INFO [Firefox 107.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:5:350 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.631 secs)
08 12 2022 21:52:37.234:INFO [Firefox 107.0 (Linux x86_64) | AppComponent | should create the app]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:5:381 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 107.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.631 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 107.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.631 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 107.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.737 secs)
08 12 2022 21:52:37.366:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
08 12 2022 21:52:37.367:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
08 12 2022 21:52:37.367:INFO [Firefox 107.0 (Linux x86_64) | NewsComponent | should create]: Success: 106 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:5:514 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.753 secs)
08 12 2022 21:52:37.382:INFO [Firefox 107.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:5:529 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.76 secs)
08 12 2022 21:52:37.401:INFO [Firefox 107.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:5:548 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.828 secs)
08 12 2022 21:52:37.537:INFO [Firefox 107.0 (Linux x86_64) | MenuComponent | should create]: Success: 68 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:5:684 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.837 secs)
08 12 2022 21:52:37.539:INFO [Firefox 107.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:5:686 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (1.02 secs / 0.837 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 107.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:5:696 min/sec/ms


Firefox 107.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (1.02 secs / 0.837 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 23.52s.
```
