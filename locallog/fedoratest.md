```bash
yarn run v1.22.19
$ ng test
16 11 2022 18:38:49.907:WARN [karma]: No captured browser, open http://localhost:9876/
16 11 2022 18:38:49.918:INFO [karma-server]: Karma v6.4.1 server started at http://localhost:9876/
16 11 2022 18:38:49.918:INFO [launcher]: Launching browsers Chrome with concurrency unlimited
16 11 2022 18:38:49.921:INFO [launcher]: Starting browser Chrome
16 11 2022 18:38:50.419:INFO [Chrome 107.0.0.0 (Linux x86_64)]: Connected on socket ntIGVBfcPVsxmaBSAAAB with id 7961438
Chrome 107.0.0.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
[1A[2KChrome 107.0.0.0 (Linux x86_64): Executed 1 of 3[32m SUCCESS[39m (0 secs / 0.156 secs)
[1A[2KChrome 107.0.0.0 (Linux x86_64): Executed 2 of 3[32m SUCCESS[39m (0 secs / 0.173 secs)
[1A[2KChrome 107.0.0.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (0 secs / 0.186 secs)
[1A[2KChrome 107.0.0.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (1.007 secs / 0.186 secs)
[32mTOTAL: 3 SUCCESS[39m
16 11 2022 18:39:10.301:WARN [Chrome 107.0.0.0 (Linux x86_64)]: Disconnected (0 times) Client disconnected from CONNECTED state (transport close)
[1A[2K[31mChrome 107.0.0.0 (Linux x86_64) ERROR[39m
  Disconnected Client disconnected from CONNECTED state (transport close)
Chrome 107.0.0.0 (Linux x86_64): Executed 3 of 3[32m SUCCESS[39m (1.007 secs / 0.186 secs)
Chrome 107.0.0.0 (Linux x86_64) ERROR
  Disconnected Client disconnected from CONNECTED state (transport close)
16 11 2022 18:39:10.443:ERROR [launcher]: Chrome crashed.
	libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)
[772249:772249:1116/183854.347120:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 1 times!
[772249:772249:1116/183854.349977:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 2 times!
[772249:772249:1116/183903.805819:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 3 times!

16 11 2022 18:39:10.444:ERROR [launcher]: Chrome stdout: 
16 11 2022 18:39:10.445:ERROR [launcher]: Chrome stderr: libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)
[772249:772249:1116/183854.347120:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 1 times!
[772249:772249:1116/183854.349977:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 2 times!
[772249:772249:1116/183903.805819:ERROR:gl_surface_presentation_helper.cc(260)] GetVSyncParametersIfAvailable() failed for 3 times!

16 11 2022 18:39:10.474:INFO [launcher]: Trying to start Chrome again (1/2).
16 11 2022 18:39:10.887:INFO [Chrome 107.0.0.0 (Linux x86_64)]: Connected on socket wzrpMSpBdQoEggvmAAAD with id 7961438
Chrome 107.0.0.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
16 11 2022 18:39:11.874:ERROR [launcher]: Chrome crashed.
	libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)

16 11 2022 18:39:11.874:ERROR [launcher]: Chrome stdout: 
16 11 2022 18:39:11.875:ERROR [launcher]: Chrome stderr: libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)

16 11 2022 18:39:11.888:INFO [launcher]: Trying to start Chrome again (2/2).
16 11 2022 18:39:12.314:INFO [Chrome 107.0.0.0 (Linux x86_64)]: Disconnected browser returned on socket pA_P_pOdLMlIWnU9AAAF with id 7961438.
Chrome 107.0.0.0 (Linux x86_64): Executed 0 of 3[32m SUCCESS[39m (0 secs / 0 secs)
16 11 2022 18:39:13.273:ERROR [launcher]: Chrome crashed.
	libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)

16 11 2022 18:39:13.273:ERROR [launcher]: Chrome stdout: 
16 11 2022 18:39:13.274:ERROR [launcher]: Chrome stderr: libva error: vaGetDriverNameByIndex() failed with unknown libva error, driver_name = (null)

16 11 2022 18:39:13.287:ERROR [launcher]: Chrome failed 2 times (crashed). Giving up.
16 11 2022 18:39:15.193:WARN [Chrome 107.0.0.0 (Linux x86_64)]: Disconnected (0 times) reconnect failed before timeout of 2000ms (transport close)
[1A[2K[31mChrome 107.0.0.0 (Linux x86_64) ERROR[39m
  Disconnected reconnect failed before timeout of 2000ms (transport close)
Chrome 107.0.0.0 (Linux x86_64): Executed 0 of 3[31m DISCONNECTED[39m (2.004 secs / 0 secs)
Chrome 107.0.0.0 (Linux x86_64) ERROR
  Disconnected reconnect failed before timeout of 2000ms (transport close)
[1A[2KChrome 107.0.0.0 (Linux x86_64): Executed 0 of 3[31m DISCONNECTED[39m (2.004 secs / 0 secs)
