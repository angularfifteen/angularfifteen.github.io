```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
25 05 2023 09:50:04.128:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
25 05 2023 09:50:04.130:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
25 05 2023 09:50:04.132:INFO [launcher]: Starting browser Firefox
25 05 2023 09:50:05.589:INFO [Firefox 113.0 (Linux x86_64)]: Connected on socket jDA-JwKebWYJgF01AAAB with id 38358616
Firefox 113.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
25 05 2023 09:50:06.338:INFO [Firefox 113.0 (Linux x86_64)]: Starting tests 38358616
[1A[2KFirefox 113.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.019 secs)
25 05 2023 09:50:06.348:INFO [Firefox 113.0 (Linux x86_64) | LoadingService | should be created]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:235 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.11 secs)
25 05 2023 09:50:06.437:INFO [Firefox 113.0 (Linux x86_64) | MenuComponent | should create]: Success: 91 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:324 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.116 secs)
25 05 2023 09:50:06.449:INFO [Firefox 113.0 (Linux x86_64) | NewsService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:336 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.116 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 113.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.116 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.245 secs)
25 05 2023 09:50:06.599:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
25 05 2023 09:50:06.600:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
25 05 2023 09:50:06.600:INFO [Firefox 113.0 (Linux x86_64) | QuizComponent | should create]: Success: 129 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:487 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.252 secs)
25 05 2023 09:50:06.603:INFO [Firefox 113.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:490 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.303 secs)
25 05 2023 09:50:06.653:INFO [Firefox 113.0 (Linux x86_64) | HomeComponent | should create]: Success: 51 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:540 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.307 secs)
25 05 2023 09:50:06.670:INFO [Firefox 113.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:558 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.327 secs)
25 05 2023 09:50:06.686:INFO [Firefox 113.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 20 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:573 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.331 secs)
25 05 2023 09:50:06.700:INFO [Firefox 113.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:588 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.361 secs)
25 05 2023 09:50:06.722:INFO [Firefox 113.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 30 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:609 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.379 secs)
25 05 2023 09:50:06.745:INFO [Firefox 113.0 (Linux x86_64) | AppComponent | should create the app]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:632 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
25 05 2023 09:50:06.755:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 113.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.388 secs)
25 05 2023 09:50:06.759:INFO [Firefox 113.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:647 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.397 secs)
25 05 2023 09:50:06.767:INFO [Firefox 113.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:655 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 113.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.397 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.402 secs)
25 05 2023 09:50:06.779:ERROR [Firefox 113.0 (Linux x86_64) | LogUpdateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

25 05 2023 09:50:06.779:INFO [Firefox 113.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:666 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 113.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.411 secs)
25 05 2023 09:50:06.792:INFO [Firefox 113.0 (Linux x86_64) | LoadingComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:679 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 113.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.411 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 113.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.411 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 113.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.469 secs)
25 05 2023 09:50:06.858:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
25 05 2023 09:50:06.858:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
25 05 2023 09:50:06.858:INFO [Firefox 113.0 (Linux x86_64) | NewsComponent | should create]: Success: 58 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:745 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.477 secs)
25 05 2023 09:50:06.859:INFO [Firefox 113.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:746 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.523 secs / 0.477 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 113.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:752 min/sec/ms


Firefox 113.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.523 secs / 0.477 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 15.40s.
```
