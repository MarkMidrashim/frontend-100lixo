import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import {
  NgxAsideModule,
  NgxNavbarModule,
  NgxUserPanelModule,
  NgxFooterModule
} from '@100lixo-lib/ngx-component';
import { environment } from '@app/environments/environment';
import { NgxAuthModule } from '@100lixo-lib/ngx-auth';

@NgModule({
  declarations: [MainComponent],
  imports: [
    HttpClientModule,
    MainRoutingModule,
    NgxAsideModule,
    NgxNavbarModule,
    NgxUserPanelModule,
    NgxFooterModule,
    NgxAuthModule.forRoot(environment)
  ]
})
export class MainModule {}
