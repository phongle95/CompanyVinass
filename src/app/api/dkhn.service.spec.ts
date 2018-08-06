import { TestBed, inject } from '@angular/core/testing';

import { DkhnService } from './dkhn.service';

describe('DkhnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DkhnService]
    });
  });

  it('should be created', inject([DkhnService], (service: DkhnService) => {
    expect(service).toBeTruthy();
  }));
});
