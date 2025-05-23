import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Provide HttpClientTestingModule to mock HTTP requests
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
