import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { IEnvironment } from '@100lixo-lib/ngx-domain';
import { CookieService } from 'ngx-cookie-service';
import { NgxAuthService } from "./ngx-auth.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [CookieService, NgxAuthService]
})
export class NgxAuthModule {
  public static forRoot(environment: IEnvironment): ModuleWithProviders<NgxAuthModule> {
    return {
      ngModule: NgxAuthModule,
      providers: [
        CookieService,
        NgxAuthService,
        { provide: 'environment', useValue: environment }
      ]
    };
  }
}
