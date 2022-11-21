import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TipoEnderecoAPI } from './tipo-endereco.api';

describe('TipoEnderecoAPI', () => {
  let pessoaAPI: TipoEnderecoAPI;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TipoEnderecoAPI],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    pessoaAPI = TestBed.inject(TipoEnderecoAPI);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(pessoaAPI).toBeTruthy();
  });
});
