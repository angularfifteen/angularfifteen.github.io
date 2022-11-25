import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

import { CheckForUpdateService } from './check-for-update.service';

describe('CheckForUpdateService', () => {
  let service: CheckForUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApplicationRef,
        SwUpdate,
        CheckForUpdateService
      ],
      imports: [
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
      ]
    });
    service = TestBed.inject(CheckForUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
