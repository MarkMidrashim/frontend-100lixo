import {
  IAuth,
  IToken,
  publicAuthRequestMock,
  publicAuthResponseMock
} from './auth';

const auth: IAuth = publicAuthRequestMock;
const token: IToken = publicAuthResponseMock;

describe('Tests AuthModel', () => {
  it('should test IAuth with value', () => {
    const authModel: IAuth = {
      username: auth.username,
      password: auth.password,
      grant_type: auth.grant_type
    };
    expect(authModel.username).toEqual(auth.username);
    expect(authModel.password).toEqual(auth.password);
    expect(authModel.grant_type).toEqual(auth.grant_type);
  });

  it('should test IToken with value', () => {
    const tokenModel: IToken = {
      access_token: token.access_token,
      token_type: token.token_type,
      expires_in: token.expires_in,
      scope: token.scope,
      jti: token.jti
    };
    expect(tokenModel.access_token).toEqual(token.access_token);
    expect(tokenModel.token_type).toEqual(token.token_type);
    expect(tokenModel.expires_in).toEqual(token.expires_in);
    expect(tokenModel.scope).toEqual(token.scope);
    expect(tokenModel.jti).toEqual(token.jti);
  });
});
