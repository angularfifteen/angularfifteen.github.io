```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
30 09 2023 18:01:52.138:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
30 09 2023 18:01:52.140:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
30 09 2023 18:01:52.142:INFO [launcher]: Starting browser Firefox
30 09 2023 18:01:53.555:INFO [Firefox 118.0 (Linux x86_64)]: Connected on socket 4EnB4Y9j0stPbP2xAAAB with id 51896598
Firefox 118.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
30 09 2023 18:01:54.486:INFO [Firefox 118.0 (Linux x86_64)]: Starting tests 51896598
[1A[2KFirefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.019 secs)
30 09 2023 18:01:54.502:INFO [Firefox 118.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:2:378 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.019 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 118.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.019 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.127 secs)
30 09 2023 18:01:54.625:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
30 09 2023 18:01:54.625:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
30 09 2023 18:01:54.625:INFO [Firefox 118.0 (Linux x86_64) | QuizComponent | should create]: Success: 108 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:2:501 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.133 secs)
30 09 2023 18:01:54.627:INFO [Firefox 118.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:2:503 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.14 secs)
30 09 2023 18:01:54.638:INFO [Firefox 118.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 7 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:2:515 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.157 secs)
30 09 2023 18:01:54.680:INFO [Firefox 118.0 (Linux x86_64) | AppComponent | should create the app]: Success: 17 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:2:556 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KFirefox 118.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.162 secs)
30 09 2023 18:01:54.682:INFO [Firefox 118.0 (Linux x86_64) | LoadingComponent | should create]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:2:558 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.181 secs)
30 09 2023 18:01:54.684:INFO [Firefox 118.0 (Linux x86_64) | MenuComponent | should create]: Success: 19 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:2:560 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.186 secs)
30 09 2023 18:01:54.693:INFO [Firefox 118.0 (Linux x86_64) | NewsService | should be created]: Success: 5 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:2:569 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.186 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 118.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.186 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 118.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.218 secs)
30 09 2023 18:01:54.724:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
30 09 2023 18:01:54.725:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
30 09 2023 18:01:54.725:INFO [Firefox 118.0 (Linux x86_64) | NewsComponent | should create]: Success: 32 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:2:601 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.221 secs)
30 09 2023 18:01:54.729:INFO [Firefox 118.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:2:605 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.225 secs)
30 09 2023 18:01:54.736:INFO [Firefox 118.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:2:612 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.229 secs)
30 09 2023 18:01:54.738:INFO [Firefox 118.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 4 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:2:614 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
30 09 2023 18:01:54.744:INFO [Firefox 118.0 (Linux x86_64) | LoadingService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:2:620 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.261 secs)
30 09 2023 18:01:54.777:INFO [Firefox 118.0 (Linux x86_64) | HomeComponent | should create]: Success: 29 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:2:653 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.264 secs)
30 09 2023 18:01:54.778:INFO [Firefox 118.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:2:654 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.278 secs)
30 09 2023 18:01:54.791:INFO [Firefox 118.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 14 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:2:668 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.281 secs)
30 09 2023 18:01:54.797:INFO [Firefox 118.0 (Linux x86_64) | QuizService | should be created]: Success: 3 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:2:673 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.313 secs / 0.281 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 118.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:2:677 min/sec/ms


Firefox 118.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.313 secs / 0.281 secs)
[32mTOTAL: 17 SUCCESS[39m

Done in 12.61s.
```
