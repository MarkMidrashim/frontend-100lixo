import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NgxPessoaService } from './ngx-pessoa.service';

describe('NgxPessoaService', () => {
  let authService: NgxPessoaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NgxPessoaService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(NgxPessoaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
});
