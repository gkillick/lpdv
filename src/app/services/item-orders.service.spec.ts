import { TestBed } from '@angular/core/testing';

import { ItemOrdersService } from './item-orders.service';

describe('ItemOrdersService', () => {
  let service: ItemOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
