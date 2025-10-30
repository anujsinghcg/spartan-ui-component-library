import { TestBed } from '@angular/core/testing';

import { SpartanUiComponentLibService } from './spartan-ui-component-lib.service';

describe('SpartanUiComponentLibService', () => {
  let service: SpartanUiComponentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpartanUiComponentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
