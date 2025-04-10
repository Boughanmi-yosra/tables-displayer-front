import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;  // Declare the HttpTestingController for mocking requests

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  // Import HttpClientTestingModule to mock HTTP requests
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);  // Inject HttpTestingController
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Example of mocking a method in UserService that fetches user data
  it('should fetch user data', () => {

    const mockUserData = [{ id: 1, username: 'Item 1', email: 'Value 1' }];
    service.getData().subscribe((data) => {
      expect(data).toEqual(mockUserData);  // Check if the data matches mock data
    });

    const req = httpMock.expectOne('https://tables-displayer-backend-latest.onrender.com/api/users');  // The expected URL
    expect(req.request.method).toBe('GET');  // Ensure the request method is GET
    req.flush(mockUserData);  // Provide the mock response

    httpMock.verify();  // Verify no other outstanding HTTP requests
  });
});
