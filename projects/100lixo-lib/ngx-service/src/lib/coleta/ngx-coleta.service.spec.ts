import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NgxColetaService } from './ngx-coleta.service';

describe('NgxColetaService', () => {
  let authService: NgxColetaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NgxColetaService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(NgxColetaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
