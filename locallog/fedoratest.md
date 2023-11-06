```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
05 11 2023 19:07:50.675:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
05 11 2023 19:07:50.677:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
05 11 2023 19:07:50.680:INFO [launcher]: Starting browser Firefox
05 11 2023 19:07:51.883:INFO [Firefox 119.0 (Linux x86_64)]: Connected on socket 0eVDZHfscNg4BpQlAAAB with id 98908614
Firefox 119.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
05 11 2023 19:07:52.588:INFO [Firefox 119.0 (Linux x86_64)]: Starting tests 98908614
[1A[2KFirefox 119.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.018 secs)
05 11 2023 19:07:52.611:INFO [Firefox 119.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:956 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.031 secs)
05 11 2023 19:07:52.622:INFO [Firefox 119.0 (Linux x86_64) | NewsService | should be created]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:968 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.042 secs)
05 11 2023 19:07:52.641:INFO [Firefox 119.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:986 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
05 11 2023 19:07:52.647:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 119.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.048 secs)
05 11 2023 19:07:52.648:INFO [Firefox 119.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:1:994 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.053 secs)
05 11 2023 19:07:52.653:INFO [Firefox 119.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:1:999 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 119.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.053 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.059 secs)
05 11 2023 19:07:52.670:ERROR [Firefox 119.0 (Linux x86_64) | LogUpdateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

05 11 2023 19:07:52.670:INFO [Firefox 119.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:15 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.092 secs)
05 11 2023 19:07:52.697:INFO [Firefox 119.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 33 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:43 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.107 secs)
05 11 2023 19:07:52.713:INFO [Firefox 119.0 (Linux x86_64) | AppComponent | should create the app]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:58 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 119.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.145 secs)
05 11 2023 19:07:52.773:INFO [Firefox 119.0 (Linux x86_64) | HomeComponent | should create]: Success: 38 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:119 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.149 secs)
05 11 2023 19:07:52.776:INFO [Firefox 119.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:121 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.154 secs)
05 11 2023 19:07:52.777:INFO [Firefox 119.0 (Linux x86_64) | LoadingComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:122 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.157 secs)
05 11 2023 19:07:52.778:INFO [Firefox 119.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:123 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 119.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.178 secs)
05 11 2023 19:07:52.797:INFO [Firefox 119.0 (Linux x86_64) | MenuComponent | should create]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:142 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.181 secs)
05 11 2023 19:07:52.798:INFO [Firefox 119.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:143 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 119.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.181 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 119.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.181 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.222 secs)
05 11 2023 19:07:52.841:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
05 11 2023 19:07:52.841:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
05 11 2023 19:07:52.841:INFO [Firefox 119.0 (Linux x86_64) | NewsComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:186 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.225 secs)
05 11 2023 19:07:52.847:INFO [Firefox 119.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:192 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.225 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 119.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.225 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.271 secs)
05 11 2023 19:07:52.896:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
05 11 2023 19:07:52.896:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
05 11 2023 19:07:52.896:INFO [Firefox 119.0 (Linux x86_64) | QuizComponent | should create]: Success: 46 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:241 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.31 secs / 0.271 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 119.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:244 min/sec/ms


Firefox 119.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.31 secs / 0.271 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 11.59s.
```
