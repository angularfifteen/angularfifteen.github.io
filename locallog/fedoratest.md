```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
21 07 2023 11:06:05.025:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
21 07 2023 11:06:05.028:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
21 07 2023 11:06:05.032:INFO [launcher]: Starting browser Firefox
21 07 2023 11:06:06.345:INFO [Firefox 115.0 (Linux x86_64)]: Connected on socket NlwqaDYxFaazXEd_AAAB with id 45324663
Firefox 115.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
21 07 2023 11:06:06.942:INFO [Firefox 115.0 (Linux x86_64)]: Starting tests 45324663
[1A[2KFirefox 115.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.022 secs)
21 07 2023 11:06:06.951:INFO [Firefox 115.0 (Linux x86_64) | QuizService | should be created]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:1:953 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.028 secs)
21 07 2023 11:06:06.966:INFO [Firefox 115.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:1:968 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.031 secs)
21 07 2023 11:06:06.967:INFO [Firefox 115.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:1:969 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.031 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 115.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.031 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.211 secs)
21 07 2023 11:06:07.154:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
21 07 2023 11:06:07.154:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
21 07 2023 11:06:07.155:INFO [Firefox 115.0 (Linux x86_64) | QuizComponent | should create]: Success: 180 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:157 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 115.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.211 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 115.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.211 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.253 secs)
21 07 2023 11:06:07.196:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
21 07 2023 11:06:07.196:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
21 07 2023 11:06:07.196:INFO [Firefox 115.0 (Linux x86_64) | NewsComponent | should create]: Success: 42 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:199 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.258 secs)
21 07 2023 11:06:07.209:INFO [Firefox 115.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:211 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.263 secs)
21 07 2023 11:06:07.213:INFO [Firefox 115.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:216 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.295 secs)
21 07 2023 11:06:07.243:INFO [Firefox 115.0 (Linux x86_64) | HomeComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:246 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.299 secs)
21 07 2023 11:06:07.250:INFO [Firefox 115.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:252 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.308 secs)
21 07 2023 11:06:07.260:INFO [Firefox 115.0 (Linux x86_64) | LoadingComponent | should create]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:262 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.313 secs)
21 07 2023 11:06:07.267:INFO [Firefox 115.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:269 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
21 07 2023 11:06:07.279:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 115.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.319 secs)
21 07 2023 11:06:07.280:INFO [Firefox 115.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:282 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.341 secs)
21 07 2023 11:06:07.301:INFO [Firefox 115.0 (Linux x86_64) | MenuComponent | should create]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:304 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 115.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.341 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 115.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.35 secs)
21 07 2023 11:06:07.312:ERROR [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

21 07 2023 11:06:07.312:INFO [Firefox 115.0 (Linux x86_64) | AppComponent | should create the app]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:314 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 115.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.357 secs)
21 07 2023 11:06:07.319:INFO [Firefox 115.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:321 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 115.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.37 secs)
21 07 2023 11:06:07.334:INFO [Firefox 115.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:336 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.376 secs)
21 07 2023 11:06:07.341:INFO [Firefox 115.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:344 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.405 secs / 0.376 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 115.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:352 min/sec/ms


Firefox 115.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.405 secs / 0.376 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.07s.
```
