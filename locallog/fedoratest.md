```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
31 10 2023 18:37:52.235:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
31 10 2023 18:37:52.237:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
31 10 2023 18:37:52.241:INFO [launcher]: Starting browser Firefox
31 10 2023 18:37:53.515:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket fiDhRiV74kUxvb37AAAB with id 3853656
Firefox 119.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
31 10 2023 18:37:54.414:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 3853656
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.082 secs)
31 10 2023 18:37:54.498:INFO [Firefox 119.0 (Linux x86_64) | MenuComponent | should create]: Success: 82 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:293 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.091 secs)
31 10 2023 18:37:54.511:INFO [Firefox 119.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:307 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.104 secs)
31 10 2023 18:37:54.529:INFO [Firefox 119.0 (Linux x86_64) | LoadingComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:324 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 119.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.104 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 119.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.104 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.16 secs)
31 10 2023 18:37:54.595:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
31 10 2023 18:37:54.596:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
31 10 2023 18:37:54.596:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Success: 56 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:392 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.187 secs)
31 10 2023 18:37:54.631:INFO [Firefox 119.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 27 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:426 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.194 secs)
31 10 2023 18:37:54.639:INFO [Firefox 119.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:434 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.199 secs)
31 10 2023 18:37:54.640:INFO [Firefox 119.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:436 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.237 secs)
31 10 2023 18:37:54.673:INFO [Firefox 119.0 (Linux x86_64) | HomeComponent | should create]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:468 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
31 10 2023 18:37:54.684:INFO [Firefox 119.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:479 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.246 secs)
31 10 2023 18:37:54.693:INFO [Firefox 119.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:488 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.255 secs)
31 10 2023 18:37:54.695:INFO [Firefox 119.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:491 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.258 secs)
31 10 2023 18:37:54.700:INFO [Firefox 119.0 (Linux x86_64) | NewsService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:495 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
31 10 2023 18:37:54.706:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.258 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.258 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.324 secs)
31 10 2023 18:37:54.798:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
31 10 2023 18:37:54.798:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
31 10 2023 18:37:54.798:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Success: 66 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:593 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 119.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.324 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.328 secs)
31 10 2023 18:37:54.801:ERROR [Firefox 119.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

31 10 2023 18:37:54.801:INFO [Firefox 119.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:596 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.332 secs)
31 10 2023 18:37:54.801:INFO [Firefox 119.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:597 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.341 secs)
31 10 2023 18:37:54.802:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:597 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.345 secs)
31 10 2023 18:37:54.803:INFO [Firefox 119.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:598 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.39 secs / 0.345 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:602 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.39 secs / 0.345 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 9.18s.
```
