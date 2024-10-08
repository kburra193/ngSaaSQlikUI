import { TestBed } from '@angular/core/testing';

import { QlikAppService } from './qlik-app.service';

describe('QlikAppService', () => {
  let service: QlikAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QlikAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
