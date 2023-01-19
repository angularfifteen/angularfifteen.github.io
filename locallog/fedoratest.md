```bash
yarn run v1.22.19
$ ng test --karma-config karma.conf.js
18 01 2023 20:21:18.825:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
18 01 2023 20:21:18.829:INFO [launcher]: Launching browsers FirefoxHeadless with concurrency unlimited
18 01 2023 20:21:18.832:INFO [launcher]: Starting browser Firefox
18 01 2023 20:21:20.981:INFO [Firefox 108.0 (Linux x86_64)]: Connected on socket NtrsTXQuF46ufM4_AAAB with id 4173307
Firefox 108.0 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
18 01 2023 20:21:22.402:INFO [Firefox 108.0 (Linux x86_64)]: Starting tests 4173307
[1A[2KFirefox 108.0 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.048 secs)
18 01 2023 20:21:22.458:INFO [Firefox 108.0 (Linux x86_64) | LoadingService | should be created]: Success: 48 ms
[33m[1mTest Num: [22m[39m[33m[1m1[22m[39m
[34m[1mElapsed Time: 0:3:658 min/sec/ms[22m[39m

  LoadingService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.199 secs)
18 01 2023 20:21:22.598:INFO [Firefox 108.0 (Linux x86_64) | KeyIndustriesComponent | should create]: Success: 151 ms
[33m[1mTest Num: [22m[39m[33m[1m2[22m[39m
[34m[1mElapsed Time: 0:3:798 min/sec/ms[22m[39m

  KeyIndustriesComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.349 secs)
18 01 2023 20:21:22.852:INFO [Firefox 108.0 (Linux x86_64) | HomeComponent | should create]: Success: 150 ms
[33m[1mTest Num: [22m[39m[33m[1m3[22m[39m
[34m[1mElapsed Time: 0:4:52 min/sec/ms[22m[39m

  HomeComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.37 secs)
18 01 2023 20:21:22.854:INFO [Firefox 108.0 (Linux x86_64) | LoaderIoComponent | should create]: Success: 21 ms
[33m[1mTest Num: [22m[39m[33m[1m4[22m[39m
[34m[1mElapsed Time: 0:4:54 min/sec/ms[22m[39m

  LoaderIoComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.395 secs)
18 01 2023 20:21:22.857:INFO [Firefox 108.0 (Linux x86_64) | LoadingComponent | should create]: Success: 25 ms
[33m[1mTest Num: [22m[39m[33m[1m5[22m[39m
[34m[1mElapsed Time: 0:4:56 min/sec/ms[22m[39m

  LoadingComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.407 secs)
18 01 2023 20:21:22.860:INFO [Firefox 108.0 (Linux x86_64) | NewsService | should be created]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m6[22m[39m
[34m[1mElapsed Time: 0:4:60 min/sec/ms[22m[39m

  NewsService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.418 secs)
18 01 2023 20:21:22.862:INFO [Firefox 108.0 (Linux x86_64) | CheckForUpdateService | should be created]: Success: 11 ms
[33m[1mTest Num: [22m[39m[33m[1m7[22m[39m
[34m[1mElapsed Time: 0:4:62 min/sec/ms[22m[39m

  CheckForUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.427 secs)
18 01 2023 20:21:22.864:INFO [Firefox 108.0 (Linux x86_64) | HttpRequestInterceptorService | should be created]: Success: 9 ms
[33m[1mTest Num: [22m[39m[33m[1m8[22m[39m
[34m[1mElapsed Time: 0:4:64 min/sec/ms[22m[39m

  HttpRequestInterceptorService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.44 secs)
18 01 2023 20:21:24.709:INFO [Firefox 108.0 (Linux x86_64) | LogUpdateService | should be created]: Success: 13 ms
[33m[1mTest Num: [22m[39m[33m[1m9[22m[39m
[34m[1mElapsed Time: 0:5:908 min/sec/ms[22m[39m

  LogUpdateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.448 secs)
18 01 2023 20:21:24.710:INFO [Firefox 108.0 (Linux x86_64) | HandleUnrecoverableStateService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m10[22m[39m
[34m[1mElapsed Time: 0:5:909 min/sec/ms[22m[39m

  HandleUnrecoverableStateService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.489 secs)
18 01 2023 20:21:24.711:INFO [Firefox 108.0 (Linux x86_64) | AppComponent | should create the app]: Success: 41 ms
[33m[1mTest Num: [22m[39m[33m[1m11[22m[39m
[34m[1mElapsed Time: 0:5:910 min/sec/ms[22m[39m

  AppComponent
    [32m✓ [39mshould create the app
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 108.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.489 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KLOG: [36mObject{title: 'history'}[39m
Firefox 108.0 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.489 secs)
LOG: Object{title: 'history'}
LOG LOG: [36mObject{title: 'history'}[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.715 secs)
18 01 2023 20:21:24.712:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
18 01 2023 20:21:24.712:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Object{title: 'history'}
18 01 2023 20:21:24.712:INFO [Firefox 108.0 (Linux x86_64) | QuizComponent | should create]: Success: 226 ms
[33m[1mTest Num: [22m[39m[33m[1m12[22m[39m
[34m[1mElapsed Time: 0:5:912 min/sec/ms[22m[39m

  QuizComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.723 secs)
18 01 2023 20:21:24.713:INFO [Firefox 108.0 (Linux x86_64) | QuizService | should be created]: Success: 8 ms
[33m[1mTest Num: [22m[39m[33m[1m13[22m[39m
[34m[1mElapsed Time: 0:5:912 min/sec/ms[22m[39m

  QuizService
    [32m✓ [39mshould be created
[1A[2KFirefox 108.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.729 secs)
18 01 2023 20:21:24.714:INFO [Firefox 108.0 (Linux x86_64) | PromptUpdateService | should be created]: Success: 6 ms
[33m[1mTest Num: [22m[39m[33m[1m14[22m[39m
[34m[1mElapsed Time: 0:5:913 min/sec/ms[22m[39m

  PromptUpdateService
    [32m✓ [39mshould be created
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Firefox 108.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.729 secs)
LOG: Object{title: 'top-stories'}
LOG LOG: [36mObject{title: 'top-stories'}[39m
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Firefox 108.0 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.729 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
LOG LOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
[1A[2KFirefox 108.0 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.833 secs)
18 01 2023 20:21:24.715:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Object{title: 'top-stories'}
18 01 2023 20:21:24.715:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
18 01 2023 20:21:24.715:INFO [Firefox 108.0 (Linux x86_64) | NewsComponent | should create]: Success: 104 ms
[33m[1mTest Num: [22m[39m[33m[1m15[22m[39m
[34m[1mElapsed Time: 0:5:914 min/sec/ms[22m[39m

  NewsComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.876 secs)
18 01 2023 20:21:24.715:INFO [Firefox 108.0 (Linux x86_64) | MenuComponent | should create]: Success: 43 ms
[33m[1mTest Num: [22m[39m[33m[1m16[22m[39m
[34m[1mElapsed Time: 0:5:914 min/sec/ms[22m[39m

  MenuComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.888 secs)
18 01 2023 20:21:24.716:INFO [Firefox 108.0 (Linux x86_64) | PlaygroundComponent | should create]: Success: 12 ms
[33m[1mTest Num: [22m[39m[33m[1m17[22m[39m
[34m[1mElapsed Time: 0:5:915 min/sec/ms[22m[39m

  PlaygroundComponent
    [32m✓ [39mshould create
[1A[2KFirefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (2.316 secs / 0.888 secs)
[32mTOTAL: 17 SUCCESS[39m
TOTAL: 17 SUCCESS


[4m[1mSuites and tests results:[22m[24m

 - [1mLoadingService[22m :
   * should be created : [32mok[39m
 - [1mKeyIndustriesComponent[22m :
   * should create : [32mok[39m
 - [1mHomeComponent[22m :
   * should create : [32mok[39m
 - [1mLoaderIoComponent[22m :
   * should create : [32mok[39m
 - [1mLoadingComponent[22m :
   * should create : [32mok[39m
 - [1mNewsService[22m :
   * should be created : [32mok[39m
 - [1mCheckForUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHttpRequestInterceptorService[22m :
   * should be created : [32mok[39m
 - [1mLogUpdateService[22m :
   * should be created : [32mok[39m
 - [1mHandleUnrecoverableStateService[22m :
   * should be created : [32mok[39m
 - [1mAppComponent[22m :
   * should create the app : [32mok[39m
 - [1mQuizComponent[22m :
   * should create : [32mok[39m
 - [1mQuizService[22m :
   * should be created : [32mok[39m
 - [1mPromptUpdateService[22m :
   * should be created : [32mok[39m
 - [1mNewsComponent[22m :
   * should create : [32mok[39m
 - [1mMenuComponent[22m :
   * should create : [32mok[39m
 - [1mPlaygroundComponent[22m :
   * should create : [32mok[39m

[4m[1mBrowser results:[22m[24m

 - [1mFirefox 108.0 (Linux x86_64)[22m: 17 tests
   - [32m17 ok[39m
Elapsed Time: 0:5:920 min/sec/ms


Firefox 108.0 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (2.316 secs / 0.888 secs)
[32mTOTAL: 17 SUCCESS[39m

18 01 2023 20:21:24.734:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
Done in 31.81s.
```
