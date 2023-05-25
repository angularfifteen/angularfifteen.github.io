```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
25 05 2023 06:16:59.774:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 05 2023 06:16:59.788:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 05 2023 06:16:59.793:INFO [launcher]: Starting browser Firefox
25 05 2023 06:17:02.697:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket 04EbHwZEX84N3E2eAAAB with id 40571320
Firefox 113.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
25 05 2023 06:17:03.710:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 40571320
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.049 secs)
25 05 2023 06:17:03.853:INFO [Firefox 113.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 49 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:4:100 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.049 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.049 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.496 secs)
25 05 2023 06:17:04.221:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
25 05 2023 06:17:04.221:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
25 05 2023 06:17:04.221:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Success: 447 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:4:468 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.517 secs)
25 05 2023 06:17:04.243:INFO [Firefox 113.0 (Linux x86_64) | LoadingComponent | should create]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:4:489 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.523 secs)
25 05 2023 06:17:04.282:INFO [Firefox 113.0 (Linux x86_64) | LoadingService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:4:528 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.546 secs)
25 05 2023 06:17:04.284:INFO [Firefox 113.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:4:530 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.556 secs)
25 05 2023 06:17:04.309:INFO [Firefox 113.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:4:555 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.601 secs)
25 05 2023 06:17:04.376:INFO [Firefox 113.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 45 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:4:623 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.608 secs)
25 05 2023 06:17:04.379:INFO [Firefox 113.0 (Linux x86_64) | QuizService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:4:626 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.613 secs)
25 05 2023 06:17:04.387:INFO [Firefox 113.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:4:634 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 113.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.613 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 113.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.613 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.695 secs)
25 05 2023 06:17:04.455:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
25 05 2023 06:17:04.456:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
25 05 2023 06:17:04.456:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Success: 82 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:4:702 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.747 secs)
25 05 2023 06:17:04.529:INFO [Firefox 113.0 (Linux x86_64) | MenuComponent | should create]: Success: 52 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:4:775 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.813 secs)
25 05 2023 06:17:04.587:INFO [Firefox 113.0 (Linux x86_64) | HomeComponent | should create]: Success: 66 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:4:834 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.823 secs)
25 05 2023 06:17:04.601:INFO [Firefox 113.0 (Linux x86_64) | NewsService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:4:847 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.828 secs)
25 05 2023 06:17:04.621:INFO [Firefox 113.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:4:868 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
25 05 2023 06:17:04.643:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 113.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.847 secs)
25 05 2023 06:17:04.645:INFO [Firefox 113.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:4:891 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.862 secs)
25 05 2023 06:17:04.652:INFO [Firefox 113.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:4:899 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.885 secs)
25 05 2023 06:17:04.693:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:4:939 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.885 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.985 secs / 0.885 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS
25 05 2023 06:17:04.699:ERROR [Firefox 113.0 (Linux x86_64)]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.



[4m[1mSuites and tests results:[22m[24m

 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:4:946 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.985 secs / 0.885 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 22.40s.
```
