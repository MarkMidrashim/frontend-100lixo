import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NgxParamsService } from './ngx-params.service';

describe('NgxParamsService', () => {
  let authService: NgxParamsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NgxParamsService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(NgxParamsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
