import { TestBed, inject } from '@angular/core/testing';

import { OlyncService } from './olync.service';

describe('OlyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OlyncService]
    });
  });

  it('should be created', inject([OlyncService], (service: OlyncService) => {
    expect(service).toBeTruthy();
  }));
});
