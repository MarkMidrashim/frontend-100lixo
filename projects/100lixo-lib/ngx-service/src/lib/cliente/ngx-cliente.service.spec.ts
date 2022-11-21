import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NgxClienteService } from './ngx-cliente.service';

describe('NgxClienteService', () => {
  let authService: NgxClienteService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NgxClienteService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(NgxClienteService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
