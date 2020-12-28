import { TestBed } from '@angular/core/testing';

import { FileMagagementService } from './file-magagement.service';

describe('FileMagagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileMagagementService = TestBed.get(FileMagagementService);
    expect(service).toBeTruthy();
  });
});
