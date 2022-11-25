import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';

import { PromptUpdateService } from './prompt-update.service';

describe('PromptUpdateService', () => {
  let service: PromptUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SwUpdate,
        PromptUpdateService
      ],
      imports: [
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: false })
      ]
    });
    service = TestBed.inject(PromptUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
