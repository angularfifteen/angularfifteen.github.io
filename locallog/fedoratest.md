```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
04 05 2023 06:38:11.772:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
04 05 2023 06:38:11.774:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
04 05 2023 06:38:11.777:INFO [launcher]: Starting browser Firefox
04 05 2023 06:38:13.003:INFO [Firefox 112.0 (Linux x86_64)]: Connected on socket VSanXLvvtgBDaeUZAAAB with id 1317850
Firefox 112.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
04 05 2023 06:38:13.956:INFO [Firefox 112.0 (Linux x86_64)]: Starting tests 1317850
[1A[2KFirefox 112.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.059 secs)
04 05 2023 06:38:13.966:INFO [Firefox 112.0 (Linux x86_64) | AppComponent | should create the app]: Success: 59 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:208 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 112.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.074 secs)
04 05 2023 06:38:13.968:INFO [Firefox 112.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 15 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:209 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.188 secs)
04 05 2023 06:38:13.969:INFO [Firefox 112.0 (Linux x86_64) | HomeComponent | should create]: Success: 114 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:210 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.194 secs)
04 05 2023 06:38:13.970:INFO [Firefox 112.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:211 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.226 secs)
04 05 2023 06:38:13.971:INFO [Firefox 112.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:212 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.233 secs)
04 05 2023 06:38:13.972:INFO [Firefox 112.0 (Linux x86_64) | LoadingComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:213 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
04 05 2023 06:38:13.973:INFO [Firefox 112.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:214 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.246 secs)
04 05 2023 06:38:13.973:INFO [Firefox 112.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:214 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.252 secs)
04 05 2023 06:38:13.974:INFO [Firefox 112.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:215 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 112.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.252 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
04 05 2023 06:38:13.977:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 112.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.252 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.307 secs)
04 05 2023 06:38:13.983:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
04 05 2023 06:38:13.983:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
04 05 2023 06:38:13.983:INFO [Firefox 112.0 (Linux x86_64) | NewsComponent | should create]: Success: 55 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:224 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.312 secs)
04 05 2023 06:38:13.984:INFO [Firefox 112.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:225 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.343 secs)
04 05 2023 06:38:13.999:INFO [Firefox 112.0 (Linux x86_64) | MenuComponent | should create]: Success: 31 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:240 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
Firefox 112.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.343 secs)
ERROR: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

ERROR LOG: [36m'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.
[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.354 secs)
04 05 2023 06:38:14.038:ERROR [Firefox 112.0 (Linux x86_64) | LoaderIoComponent | should create]: 'Service worker registration failed with:', TypeError: ServiceWorker script at http://localhost:9876/ngsw-worker.js for scope http://localhost:9876/ encountered an error during installation.

04 05 2023 06:38:14.038:INFO [Firefox 112.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:279 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.354 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 112.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.354 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 112.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.472 secs)
04 05 2023 06:38:14.133:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
04 05 2023 06:38:14.134:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
04 05 2023 06:38:14.134:INFO [Firefox 112.0 (Linux x86_64) | QuizComponent | should create]: Success: 118 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:375 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 112.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.476 secs)
04 05 2023 06:38:14.168:INFO [Firefox 112.0 (Linux x86_64) | LoadingService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:409 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.485 secs)
04 05 2023 06:38:14.183:INFO [Firefox 112.0 (Linux x86_64) | QuizService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:424 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.49 secs)
04 05 2023 06:38:14.195:INFO [Firefox 112.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:436 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.241 secs / 0.49 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 112.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:441 min/sec/ms


Firefox 112.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.241 secs / 0.49 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 13.63s.
```
