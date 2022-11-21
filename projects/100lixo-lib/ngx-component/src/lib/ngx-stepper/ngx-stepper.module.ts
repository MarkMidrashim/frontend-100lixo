import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgxStepperComponent } from './ngx-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxStepperComponent],
  exports: [NgxStepperComponent],
  imports: [
    CommonModule,
    RouterModule,
    CdkStepperModule,
    ReactiveFormsModule
  ]
})
export class NgxStepperModule { }
