```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
14 09 2023 11:10:56.283:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
14 09 2023 11:10:56.286:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
14 09 2023 11:10:56.289:INFO [launcher]: Starting browser Firefox
14 09 2023 11:10:57.584:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket JLWmvpFALurqZ617AAAB with id 64961400
Firefox 117.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
14 09 2023 11:10:58.336:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 64961400
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
14 09 2023 11:10:58.454:INFO [Firefox 117.0 (Linux x86_64) | MenuComponent | should create]: Success: 82 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:190 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.101 secs)
14 09 2023 11:10:58.456:INFO [Firefox 117.0 (Linux x86_64) | LoadingComponent | should create]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:192 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.101 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.101 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
14 09 2023 11:10:58.568:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
14 09 2023 11:10:58.569:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
14 09 2023 11:10:58.569:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Success: 118 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:305 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 117.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 117.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.219 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.26 secs)
14 09 2023 11:10:58.608:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
14 09 2023 11:10:58.608:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
14 09 2023 11:10:58.608:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:344 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.266 secs)
14 09 2023 11:10:58.616:INFO [Firefox 117.0 (Linux x86_64) | QuizService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:352 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.274 secs)
14 09 2023 11:10:58.632:INFO [Firefox 117.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:368 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.278 secs)
14 09 2023 11:10:58.633:INFO [Firefox 117.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:370 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.284 secs)
14 09 2023 11:10:58.640:INFO [Firefox 117.0 (Linux x86_64) | LoadingService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:376 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.288 secs)
14 09 2023 11:10:58.646:INFO [Firefox 117.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:382 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.292 secs)
14 09 2023 11:10:58.650:INFO [Firefox 117.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:386 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.296 secs)
14 09 2023 11:10:58.655:INFO [Firefox 117.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:391 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.318 secs)
14 09 2023 11:10:58.679:INFO [Firefox 117.0 (Linux x86_64) | HomeComponent | should create]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:415 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.326 secs)
14 09 2023 11:10:58.689:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:425 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.33 secs)
14 09 2023 11:10:58.698:INFO [Firefox 117.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:434 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
14 09 2023 11:10:58.701:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 117.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.335 secs)
14 09 2023 11:10:58.702:INFO [Firefox 117.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:438 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.351 secs)
14 09 2023 11:10:58.718:INFO [Firefox 117.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 16 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:454 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 117.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.351 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.355 secs)
14 09 2023 11:10:58.723:ERROR [Firefox 117.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

14 09 2023 11:10:58.723:INFO [Firefox 117.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:459 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.391 secs / 0.355 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:465 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.391 secs / 0.355 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 22.10s.
```
