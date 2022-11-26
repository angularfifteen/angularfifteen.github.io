```bash
yarn run v1.22.19
$ ng test --no-watch --browsers ChromeHeadless
26 11 2022 08:56:54.650:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
26 11 2022 08:56:54.652:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
26 11 2022 08:56:54.656:INFO [launcher]: Starting browser ChromeHeadless
26 11 2022 08:56:54.940:INFO [Chrome Headless 107.0.5304.121 (Linux x86_64)]: Connected on socket ADBAbSIo3peaL2f3AAAB with id 84253979
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.023 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.055 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.061 secs)
26 11 2022 08:56:56.981:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.064 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: Failed to register a ServiceWorker for scope ('http://localhost:9876/') with script ('http://localhost:9876/ngsw-worker.js'): A bad HTTP response code (404) was received when fetching the script.
TypeError: Failed to register a ServiceWorker for scope ('http://localhost:9876/') with script ('http://localhost:9876/ngsw-worker.js'): A bad HTTP response code (404) was received when fetching the script.[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.064 secs)
ERROR: 'Service worker registration failed with:', TypeError: Failed to register a ServiceWorker for scope ('http://localhost:9876/') with script ('http://localhost:9876/ngsw-worker.js'): A bad HTTP response code (404) was received when fetching the script.
TypeError: Failed to register a ServiceWorker for scope ('http://localhost:9876/') with script ('http://localhost:9876/ngsw-worker.js'): A bad HTTP response code (404) was received when fetching the script.
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.069 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.084 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.086 secs)
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.086 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.086 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.131 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.156 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.158 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.169 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.171 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.174 secs)
[1A[2KLOG: [36mObject{title: 'history'}[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.174 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.174 secs)
LOG: Object{title: 'history'}
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.232 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.236 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.237 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.239 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.275 secs / 0.239 secs)
[32mTOTAL: 17 SUCCESS[39m
Done in 16.80s.
```
