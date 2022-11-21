import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxFormFieldModule, NgxStepperModule } from '@100lixo-lib/ngx-component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCryptoService } from '@100lixo-lib/ngx-service';


@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    NgxStepperModule,
    NgxFormFieldModule,
    CdkStepperModule,
    NgxMaskModule.forRoot()
  ],
  providers: [NgxCryptoService]
})
export class SignUpModule { }
