import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NgxCryptoService } from './ngx-crypto.service';

describe('NgxCryptoService', () => {
  let authService: NgxCryptoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NgxCryptoService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(NgxCryptoService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
