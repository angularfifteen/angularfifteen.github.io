```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
17 07 2023 09:54:17.022:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
17 07 2023 09:54:17.025:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
17 07 2023 09:54:17.028:INFO [launcher]: Starting browser Firefox
17 07 2023 09:54:18.334:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket ZLxo60j1EePtQ1E0AAAB with id 76591443
Firefox 115.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
17 07 2023 09:54:19.173:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 76591443
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.019 secs)
17 07 2023 09:54:19.181:INFO [Firefox 115.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:186 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.019 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.019 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.142 secs)
17 07 2023 09:54:19.183:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
17 07 2023 09:54:19.184:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
17 07 2023 09:54:19.184:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Success: 123 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:189 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.198 secs)
17 07 2023 09:54:19.243:INFO [Firefox 115.0 (Linux x86_64) | MenuComponent | should create]: Success: 56 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:249 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.198 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.198 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.372 secs)
17 07 2023 09:54:19.432:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
17 07 2023 09:54:19.432:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
17 07 2023 09:54:19.432:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Success: 174 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:437 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.385 secs)
17 07 2023 09:54:19.519:INFO [Firefox 115.0 (Linux x86_64) | NewsService | should be created]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:525 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.462 secs)
17 07 2023 09:54:19.571:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 77 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:576 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.469 secs)
17 07 2023 09:54:19.604:INFO [Firefox 115.0 (Linux x86_64) | QuizService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:609 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.486 secs)
17 07 2023 09:54:19.654:INFO [Firefox 115.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:659 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.492 secs)
17 07 2023 09:54:19.656:INFO [Firefox 115.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:662 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.497 secs)
17 07 2023 09:54:19.657:INFO [Firefox 115.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:663 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.507 secs)
17 07 2023 09:54:19.663:INFO [Firefox 115.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:668 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.518 secs)
17 07 2023 09:54:19.664:INFO [Firefox 115.0 (Linux x86_64) | LoadingService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:670 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.533 secs)
17 07 2023 09:54:19.670:INFO [Firefox 115.0 (Linux x86_64) | LoadingComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:675 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.541 secs)
17 07 2023 09:54:19.676:INFO [Firefox 115.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:681 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.549 secs)
17 07 2023 09:54:19.683:INFO [Firefox 115.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:688 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
17 07 2023 09:54:19.693:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 115.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.568 secs)
17 07 2023 09:54:19.708:INFO [Firefox 115.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:714 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.594 secs)
17 07 2023 09:54:19.729:INFO [Firefox 115.0 (Linux x86_64) | HomeComponent | should create]: Success: 26 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:735 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.594 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.567 secs / 0.594 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS
17 07 2023 09:54:19.742:ERROR [Firefox 115.0 (Linux x86_64)]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.



[4m[1mSuites and tests results:[22m[24m

 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:748 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.567 secs / 0.594 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.56s.
```
