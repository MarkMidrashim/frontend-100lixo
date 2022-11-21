import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UnidadeAPI } from './unidade.api';

describe('UnidadeAPI', () => {
  let pessoaAPI: UnidadeAPI;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UnidadeAPI],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    pessoaAPI = TestBed.inject(UnidadeAPI);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(pessoaAPI).toBeTruthy();
  });
});
