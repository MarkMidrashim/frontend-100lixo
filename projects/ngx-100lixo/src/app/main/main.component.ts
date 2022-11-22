import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgxAuthService } from '@100lixo-lib/ngx-auth';
import { NgxAsideService } from '@100lixo-lib/ngx-component';
import { routes } from './routes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = '100lixo';
  routes!: Route[];
  email!: string;

  /**
   * CONSTRUCTOR
   * @param _router: Router
   * @param _aside: NgxAsideService
   * @param _auth: NgxAuthService
   */
  constructor(
    private _router: Router,
    private _aside: NgxAsideService,
    private _auth: NgxAuthService
  ) {
    this.routes = routes;
    this.email = this._auth.getTokenUsername()!;
  }

  async ngOnInit(): Promise<void> {
    await this.prepare();
    this._router.initialNavigation();
  }

  private prepare(): void {
    let count = 0;
    this.routes
      .filter((route: Route) => route.path !== '' && !route.path?.includes('**'))
      .map((route: Route) => {
        let path = route.path?.replace('/', '');
        this._aside.add(`${path}-${++count}`, this.capitalize(path), route.path, this.iconToRoute(path), count);
      });
  }

  private capitalize(value?: string): string {
    let arr = value?.split(' ') || [];
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  }

  logout(): void {
    this._auth.logout();
    this._router.navigate(['/login']);
  }

  private iconToRoute(route?: string): string {
    switch(route) {
      case 'dashboard':
        return 'analytics';
      case 'collections':
        return 'recycle';
      default:
        return '';
    }
  }

}
