import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { NgxAuthService } from '.';
import { IToken } from '@100lixo-lib/ngx-domain';
import { catchError } from "rxjs/operators";

@Injectable()
export class NgxAuthInterceptor implements HttpInterceptor {

  tokenSubject: BehaviorSubject<IToken> = new BehaviorSubject({} as unknown as IToken);

  constructor(
    private _auth: NgxAuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._auth.isAuthenticated()) {
      const token = this._auth.getToken();
      req = this.addToken(req, token);
    }
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => this.handleError(error, req, next))
      );
  }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({setHeaders: { Authorization: `Bearer ${token}` }});
  }

  private handleError(error: HttpErrorResponse, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    switch(error.status) {
      case 401:
        return this.handleError401(error);
      default:
        return throwError(error);
    }
  }

  private handleError401(error: HttpErrorResponse): Observable<any> {
    this._auth.logout();
    return throwError(error.message);
  }

}
