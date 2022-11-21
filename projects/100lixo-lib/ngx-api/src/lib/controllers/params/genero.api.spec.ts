import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GeneroAPI } from './genero.api';

describe('GeneroAPI', () => {
  let pessoaAPI: GeneroAPI;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeneroAPI],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    pessoaAPI = TestBed.inject(GeneroAPI);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(pessoaAPI).toBeTruthy();
  });
});
