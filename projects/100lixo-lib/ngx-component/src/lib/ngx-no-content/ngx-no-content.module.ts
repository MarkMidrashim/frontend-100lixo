import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxNoContentComponent } from './ngx-no-content.component';

@NgModule({
  declarations: [NgxNoContentComponent],
  exports: [NgxNoContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NgxNoContentModule { }
