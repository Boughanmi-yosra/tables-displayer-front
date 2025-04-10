import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  // Import the necessary testing modules
import { DataService } from './data.service';
import { BaseUrlService } from './base-url.service';  // If BaseUrlService is needed

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;  // Declare the HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import HttpClientTestingModule to provide HttpClient for testing
      providers: [BaseUrlService]  // Provide any other dependencies if needed
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);  // Inject HttpTestingController
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Optional: Mocking an HTTP request for testing getData
  it('should fetch data successfully', () => {
    const mockData = [{ id: 1, name: 'Item 1', value: 'Value 1' }];

    // Make the API call via the service
    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);  // Ensure the response matches the mock data
    });

    // Set up the HTTP mock request
    const req = httpMock.expectOne('https://tables-displayer-backend-latest.onrender.com/api/tables');  // URL should match your actual API
    expect(req.request.method).toBe('GET');  // Check that the request method is GET
    req.flush(mockData);  // Provide mock data as the response

    httpMock.verify();  // Verify that no outstanding HTTP requests remain
  });
});
