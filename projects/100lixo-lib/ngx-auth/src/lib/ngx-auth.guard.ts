import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgxAuthService } from './ngx-auth.service';

@Injectable({
  providedIn: 'root'
})
export class NgxAuthGuard implements CanActivate {

  /**
   * CONSTRUCTOR
   * @param _router: Router
   * @param _service: NgxAuthService
   */
  constructor(
    private _router: Router,
    private _service: NgxAuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._service.getToken()) {
      return true;
    }

    // not logged in so redirect to login page with the return url
    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
