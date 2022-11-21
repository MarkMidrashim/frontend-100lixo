import { NgxFirstWordPipe } from './ngx-first-letter.pipe';

describe('NgxFirstWordPipe', () => {
  let pipe: NgxFirstWordPipe;

  beforeEach(() => {
    pipe = new NgxFirstWordPipe();
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should get first letter', () => {
    const result = pipe.transform('Teste da Silva');
    expect(result).toEqual('T');
  });
});
