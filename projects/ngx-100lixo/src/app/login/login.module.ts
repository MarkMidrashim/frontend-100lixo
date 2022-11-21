import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAuthModule } from '@100lixo-lib/ngx-auth';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { environment } from '@app/environments/environment';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgxAuthModule.forRoot(environment),
    NgxSkeletonLoaderModule
  ]
})
export class LoginModule { }
