import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ColetaAPI } from './coleta.api';

describe('ColetaAPI', () => {
  let pessoaAPI: ColetaAPI;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ColetaAPI],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    pessoaAPI = TestBed.inject(ColetaAPI);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(pessoaAPI).toBeTruthy();
  });
});
