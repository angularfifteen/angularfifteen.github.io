```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 02 2023 10:39:02.938:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 02 2023 10:39:02.940:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 02 2023 10:39:02.943:INFO [launcher]: Starting browser Firefox
09 02 2023 10:39:04.412:INFO [Firefox 109.0 (Linux x86_64)]: Connected on socket wRsXktoZFveJ8ZTMAAAB with id 93730895
Firefox 109.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
09 02 2023 10:39:05.317:INFO [Firefox 109.0 (Linux x86_64)]: Starting tests 93730895
[1A[2KFirefox 109.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.04 secs)
09 02 2023 10:39:05.330:INFO [Firefox 109.0 (Linux x86_64) | LoadingService | should be created]: Success: 40 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:404 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.214 secs)
09 02 2023 10:39:05.441:INFO [Firefox 109.0 (Linux x86_64) | MenuComponent | should create]: Success: 174 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:515 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.233 secs)
09 02 2023 10:39:05.472:INFO [Firefox 109.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:546 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
09 02 2023 10:39:05.518:INFO [Firefox 109.0 (Linux x86_64) | NewsService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:592 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 109.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 109.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.529 secs)
09 02 2023 10:39:05.821:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
09 02 2023 10:39:05.822:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
09 02 2023 10:39:05.822:INFO [Firefox 109.0 (Linux x86_64) | NewsComponent | should create]: Success: 288 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:896 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.582 secs)
09 02 2023 10:39:05.838:INFO [Firefox 109.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 53 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:912 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.591 secs)
09 02 2023 10:39:05.855:INFO [Firefox 109.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:929 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.596 secs)
09 02 2023 10:39:05.857:INFO [Firefox 109.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:931 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.606 secs)
09 02 2023 10:39:05.882:INFO [Firefox 109.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:956 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.614 secs)
09 02 2023 10:39:05.883:INFO [Firefox 109.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:957 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.618 secs)
09 02 2023 10:39:05.884:INFO [Firefox 109.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:958 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
09 02 2023 10:39:05.914:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 109.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.652 secs)
09 02 2023 10:39:05.916:INFO [Firefox 109.0 (Linux x86_64) | HomeComponent | should create]: Success: 34 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:991 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 109.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.652 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.667 secs)
09 02 2023 10:39:05.933:ERROR [Firefox 109.0 (Linux x86_64) | AppComponent | should create the app]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

09 02 2023 10:39:05.933:INFO [Firefox 109.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:3:7 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 109.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.671 secs)
09 02 2023 10:39:05.941:INFO [Firefox 109.0 (Linux x86_64) | QuizService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:3:15 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 109.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.674 secs)
09 02 2023 10:39:05.946:INFO [Firefox 109.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:3:20 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.674 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 109.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.674 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 109.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.759 secs)
09 02 2023 10:39:06.030:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 02 2023 10:39:06.031:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 02 2023 10:39:06.031:INFO [Firefox 109.0 (Linux x86_64) | QuizComponent | should create]: Success: 85 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:3:105 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.765 secs)
09 02 2023 10:39:06.042:INFO [Firefox 109.0 (Linux x86_64) | LoadingComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:3:116 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.735 secs / 0.765 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 109.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:3:129 min/sec/ms


Firefox 109.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.735 secs / 0.765 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 14.25s.
```
