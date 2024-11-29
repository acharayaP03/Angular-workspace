import { TestBed } from '@angular/core/testing';

import { ComponentdesignsystemService } from './componentdesignsystem.service';

describe('ComponentdesignsystemService', () => {
  let service: ComponentdesignsystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentdesignsystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
