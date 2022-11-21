import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { CookieService } from "ngx-cookie-service";
import jwt_decode from "jwt-decode";
import {
  Auth,
  IAuth,
  JWT,
  IToken,
  IEnvironment
} from '@100lixo-lib/ngx-domain';

@Injectable({
  providedIn: 'root'
})
export class NgxAuthService {

  protected url = this._environment.backendUrl + '/auth/signin';
  private _token: string = btoa('login-token');

  /**
   * CONSTRUCTOR
   * @param _environment: IEnvironment
   * @param _http: HttpClient
   * @param _token: TokenHelper
   */
  constructor(
    @Inject('environment') private _environment: IEnvironment,
    private _http: HttpClient,
    private _cookie: CookieService
  ) { }

  /**
   *
   * @param auth: IAuth
   * @returns
   */
  login(auth: IAuth): Promise<IToken> {
    return this._http.post<IToken>(
      this.url,
      this.prepareBodyToUrlEncodedForm(auth.username, auth.password),
      { headers: {
        'Content-Type': 'application/json'
      }}
    ).pipe(
      take(1),
      catchError((error: Error) => { return throwError(error); })
    ).toPromise();
  }

  /**
   * Método responsável por recuperar o token
   * @returns
   */
  getToken(): string {
    const token = this._cookie.get(this._token);

    if (!token) {
      // to login
      this._cookie.delete(this._token);
    }

    return token;
  }

  /**
   * Método responsável por decodificar o JWT e armazenar no cookie
   * @param token: IToken
   */
  setToken(token: IToken): void {
    try {
      const decoded = <JWT>jwt_decode(token.token);

      if (this._cookie.get(this._token)) {
        this._cookie.delete(this._token);
      }

      this._cookie.set(this._token, token.token, decoded.exp);
    } catch(e) {
      console.log(e);
      throw new Error('Erro to set token in cookie');
    }
  }

  /**
   * Método responsável por remover o JWT e realizar o logout
   */
  logout(): void {
    try {
      if (this._cookie.get(this._token)) {
        this._cookie.delete(this._token);
      }
    } catch(e) {
      console.error(e);
      throw new Error('Error on logout');
    }
  }

  /**
   * Método responsável por verificar se o token é válido
   * @param accessToken: string
   * @returns
   */
  getTokenExpirationDate(accessToken: string): Date | unknown {
    try {
      const decoded = <JWT>jwt_decode(accessToken);

      if (!decoded.exp) {
        return;
      }

      const date = new Date(0);
      date.setUTCSeconds(decoded.exp);
      return date;
    } catch(e) {
      console.error(e);
      throw new Error('Error get token expiration date');
    }
  }

  /**
   * Método responsável por retornar o username (email) do usuário
   * @returns
   */
  isAuthenticated(): boolean {
    try {
      const decoded = <JWT>jwt_decode(this.getToken());

      if (!decoded.exp) {
        return false;
      }

      const now = new Date().getTime() / 1000;
      return decoded.exp < now ? false : true;
    } catch(e) {
      return false;
    }
  }

  /**
   * Método responsável por retornar o username (email) do usuário
   * @returns
   */
  getTokenUsername(): string | undefined {
    try {
      const decoded = <JWT>jwt_decode(this.getToken());

      if (!decoded.user_name) {
        return;
      }

      return decoded.user_name;
    } catch(e) {
      console.error(e);
      throw new Error('Error get username from token');
    }
  }

  /**
   *
   * @param username: string
   * @param password: string
   * @returns
   */
  private prepareBodyToUrlEncodedForm(username: string, password: string): string {
    const body: any = new Auth({
      username: username,
      password: password
    });

    return Object.keys(body).map((item: string) => {
			return `${item}=${body[item]}`
		}).join('&');
  }
}
