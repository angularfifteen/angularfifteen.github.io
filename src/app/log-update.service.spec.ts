import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

import { LogUpdateService } from './log-update.service';

describe('LogUpdateService', () => {
  let service: LogUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SwUpdate,
        LogUpdateService
      ],
      imports: [
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: false })
      ]
    });
    service = TestBed.inject(LogUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
