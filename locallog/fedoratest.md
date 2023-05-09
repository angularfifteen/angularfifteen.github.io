```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
09 05 2023 12:07:14.233:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
09 05 2023 12:07:14.235:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
09 05 2023 12:07:14.237:INFO [launcher]: Starting browser Firefox
09 05 2023 12:07:15.642:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket lVNCKVbHYgq6CCweAAAB with id 97208391
Firefox 112.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
09 05 2023 12:07:16.476:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 97208391
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.023 secs)
09 05 2023 12:07:16.483:INFO [Firefox 112.0 (Linux x86_64) | LoadingService | should be created]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:264 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.023 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.023 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.244 secs)
09 05 2023 12:07:16.588:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 05 2023 12:07:16.589:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
09 05 2023 12:07:16.589:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Success: 221 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:370 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.258 secs)
09 05 2023 12:07:16.616:INFO [Firefox 112.0 (Linux x86_64) | LoadingComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:398 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.265 secs)
09 05 2023 12:07:16.625:INFO [Firefox 112.0 (Linux x86_64) | NewsService | should be created]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:406 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.346 secs)
09 05 2023 12:07:16.732:INFO [Firefox 112.0 (Linux x86_64) | MenuComponent | should create]: Success: 81 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:513 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.368 secs)
09 05 2023 12:07:16.757:INFO [Firefox 112.0 (Linux x86_64) | QuizService | should be created]: Success: 22 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:538 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
09 05 2023 12:07:16.758:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 112.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.378 secs)
09 05 2023 12:07:16.763:INFO [Firefox 112.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:544 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.386 secs)
09 05 2023 12:07:16.802:INFO [Firefox 112.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:583 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.399 secs)
09 05 2023 12:07:16.803:INFO [Firefox 112.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:584 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 112.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.399 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.417 secs)
09 05 2023 12:07:16.846:ERROR [Firefox 112.0 (Linux x86_64) | LogUpdateService | should be created]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

09 05 2023 12:07:16.846:INFO [Firefox 112.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 18 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:627 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.446 secs)
09 05 2023 12:07:16.874:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:655 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.457 secs)
09 05 2023 12:07:16.931:INFO [Firefox 112.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:713 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.516 secs)
09 05 2023 12:07:16.950:INFO [Firefox 112.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 59 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:731 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.516 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.516 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.56 secs)
09 05 2023 12:07:16.998:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
09 05 2023 12:07:16.998:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
09 05 2023 12:07:16.998:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Success: 44 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:779 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.567 secs)
09 05 2023 12:07:17.006:INFO [Firefox 112.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:787 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.592 secs)
09 05 2023 12:07:17.032:INFO [Firefox 112.0 (Linux x86_64) | HomeComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:813 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.595 secs)
09 05 2023 12:07:17.037:INFO [Firefox 112.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:818 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.565 secs / 0.595 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:825 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.565 secs / 0.595 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.74s.
```
