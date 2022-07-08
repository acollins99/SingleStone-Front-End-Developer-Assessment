import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StepsMetaData } from '../interfaces/endless-interfaces'
import { environment } from '../../environments/environment';
import { APIService } from './api-service.service';

describe('APIServiceService', () => {
  let service: APIService;
  let httpService: HttpTestingController;

  const apiEndpoint = "default/FrontEndCodeChallenge"
  const apiUrl = environment.API_URL + apiEndpoint

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(APIService);
    httpService = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  //Test validates that the getStepsData() function returns data of type StepsMetaData
  //Also Validates that API endpoint is of type GET
  it('getStepsData() should return a StepsMetaData Array', () => {
    service.getStepsData().subscribe((data: StepsMetaData) => {
      expect(data).toBeTrue();
    });
    const req = httpService.expectOne({
      method: "GET",
      url: apiUrl
    });
    expect(req.request.method).toEqual("GET");
    httpService.verify();
  });
});
