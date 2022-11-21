import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModuleRef } from '@angular/core';
import { ApplicationInitStatus, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createInjector_component, InjectorComponent } from './injector.component';
import { environment } from '@app/environments/environment';
import { NgxAuthModule } from '@100lixo-lib/ngx-auth';
import { NgxAuthInterceptor } from 'projects/100lixo-lib/ngx-auth/src/lib/ngx-auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    InjectorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAuthModule.forRoot(environment),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgxAuthInterceptor, multi: true }
  ]
})
export class AppModule {
  constructor(module: NgModuleRef<AppModule>, initStatus: ApplicationInitStatus) {
    initStatus.donePromise.then(() => {
      const injector = createInjector_component(module);
      const el = createCustomElement(AppComponent, { injector });
      customElements.define('ngx-100lixo', el);
    });
  }

  ngDoBootstrap(): void {}
}
