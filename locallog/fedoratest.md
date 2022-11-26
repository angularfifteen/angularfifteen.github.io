```bash
yarn run v1.22.19
$ ng test --no-watch --browsers ChromeHeadless
26 11 2022 11:19:06.459:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
26 11 2022 11:19:06.462:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
26 11 2022 11:19:06.465:INFO [launcher]: Starting browser ChromeHeadless
26 11 2022 11:19:06.720:INFO [Chrome Headless 107.0.5304.121 (Linux x86_64)]: Connected on socket UwUA7nN6hWmqvMqsAAAB with id 19176890
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 0 of 17[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 1 of 17[32m SUCCESS[39m (0 secs / 0.023 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 2 of 17[32m SUCCESS[39m (0 secs / 0.055 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 3 of 17[32m SUCCESS[39m (0 secs / 0.072 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 4 of 17[32m SUCCESS[39m (0 secs / 0.077 secs)
26 11 2022 11:19:08.781:WARN [web-server]: 404: /_karma_webpack_/ngsw-worker.js
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.113 secs)
[1A[2KERROR: [36m'Service worker registration failed with:', TypeError: Failed to register a ServiceWorker for scope ('http://localhost:9876/') with script ('http://localhost:9876/ngsw-worker.js'): A bad HTTP response code (404) was received when fetching the script.
TypeError: Failed to register a ServiceWorker for scope ('http://localhost:9876/') with script ('http://localhost:9876/ngsw-worker.js'): A bad HTTP response code (404) was received when fetching the script.[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 5 of 17[32m SUCCESS[39m (0 secs / 0.113 secs)
ERROR: 'Service worker registration failed with:', TypeError: Failed to register a ServiceWorker for scope ('http://localhost:9876/') with script ('http://localhost:9876/ngsw-worker.js'): A bad HTTP response code (404) was received when fetching the script.
TypeError: Failed to register a ServiceWorker for scope ('http://localhost:9876/') with script ('http://localhost:9876/ngsw-worker.js'): A bad HTTP response code (404) was received when fetching the script.
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 6 of 17[32m SUCCESS[39m (0 secs / 0.115 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 7 of 17[32m SUCCESS[39m (0 secs / 0.117 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 8 of 17[32m SUCCESS[39m (0 secs / 0.121 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 9 of 17[32m SUCCESS[39m (0 secs / 0.123 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.126 secs)
[1A[2KLOG: [36mObject{title: 'top-stories'}[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.126 secs)
LOG: Object{title: 'top-stories'}
[1A[2KLOG: [36mObject{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 10 of 17[32m SUCCESS[39m (0 secs / 0.126 secs)
LOG: Object{response: Object{title: 'Top stories', dateCreated: '2021-02-13T18:19:20.212Z', newsItems: [..., ..., ...]}}
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 11 of 17[32m SUCCESS[39m (0 secs / 0.158 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 12 of 17[32m SUCCESS[39m (0 secs / 0.173 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 13 of 17[32m SUCCESS[39m (0 secs / 0.175 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 14 of 17[32m SUCCESS[39m (0 secs / 0.177 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 15 of 17[32m SUCCESS[39m (0 secs / 0.179 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.182 secs)
[1A[2KLOG: [36mObject{title: 'history'}[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.182 secs)
LOG: Object{title: 'history'}
[1A[2KLOG: [36mObject{title: 'history'}[39m
Chrome Headless 107.0.5304.121 (Linux x86_64): Executed 16 of 17[32m SUCCESS[39m (0 secs / 0.182 secs)
LOG: Object{title: 'history'}
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0 secs / 0.241 secs)
[1A[2KChrome Headless 107.0.5304.121 (Linux x86_64): Executed 17 of 17[32m SUCCESS[39m (0.274 secs / 0.241 secs)
[32mTOTAL: 17 SUCCESS[39m
Done in 19.28s.
```
