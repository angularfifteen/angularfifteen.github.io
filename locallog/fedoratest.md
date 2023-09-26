```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
26 09 2023 06:58:39.132:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
26 09 2023 06:58:39.135:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
26 09 2023 06:58:39.138:INFO [launcher]: Starting browser Firefox
26 09 2023 06:58:40.387:INFO [Firefox 117.0 (Linux x86_64)]: Connected on socket JSMmgLd9c9sCst02AAAB with id 23948059
Firefox 117.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
26 09 2023 06:58:41.309:INFO [Firefox 117.0 (Linux x86_64)]: Starting tests 23948059
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 117.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.108 secs)
26 09 2023 06:58:41.320:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
26 09 2023 06:58:41.320:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
26 09 2023 06:58:41.320:INFO [Firefox 117.0 (Linux x86_64) | QuizComponent | should create]: Success: 108 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:231 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.114 secs)
26 09 2023 06:58:41.321:INFO [Firefox 117.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:233 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.142 secs)
26 09 2023 06:58:41.322:INFO [Firefox 117.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 28 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:234 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.183 secs)
26 09 2023 06:58:41.324:INFO [Firefox 117.0 (Linux x86_64) | HomeComponent | should create]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:236 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.193 secs)
26 09 2023 06:58:41.325:INFO [Firefox 117.0 (Linux x86_64) | LoadingComponent | should create]: Success: 10 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:236 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.197 secs)
26 09 2023 06:58:41.328:INFO [Firefox 117.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:239 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 117.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.197 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 117.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.197 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 117.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.256 secs)
26 09 2023 06:58:41.377:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
26 09 2023 06:58:41.377:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
26 09 2023 06:58:41.377:INFO [Firefox 117.0 (Linux x86_64) | NewsComponent | should create]: Success: 59 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:289 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.261 secs)
26 09 2023 06:58:41.382:INFO [Firefox 117.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:293 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.284 secs)
26 09 2023 06:58:41.410:INFO [Firefox 117.0 (Linux x86_64) | MenuComponent | should create]: Success: 23 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:321 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.289 secs)
26 09 2023 06:58:41.412:INFO [Firefox 117.0 (Linux x86_64) | QuizService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:323 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.297 secs)
26 09 2023 06:58:41.426:INFO [Firefox 117.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:338 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 117.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.3 secs)
26 09 2023 06:58:41.434:INFO [Firefox 117.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:345 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.304 secs)
26 09 2023 06:58:41.436:INFO [Firefox 117.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:347 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.315 secs)
26 09 2023 06:58:41.452:INFO [Firefox 117.0 (Linux x86_64) | AppComponent | should create the app]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:363 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 117.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.321 secs)
26 09 2023 06:58:41.463:INFO [Firefox 117.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:375 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.325 secs)
26 09 2023 06:58:41.465:INFO [Firefox 117.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:376 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.329 secs)
26 09 2023 06:58:41.465:INFO [Firefox 117.0 (Linux x86_64) | NewsService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:376 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
26 09 2023 06:58:41.467:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KFirefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.161 secs / 0.329 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 117.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:385 min/sec/ms


Firefox 117.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.161 secs / 0.329 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.25s.
```
