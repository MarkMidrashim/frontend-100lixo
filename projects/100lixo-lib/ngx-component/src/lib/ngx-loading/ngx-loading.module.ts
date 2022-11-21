import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxLoadingComponent } from './ngx-loading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxLoadingComponent],
  exports: [NgxLoadingComponent],
  entryComponents: [NgxLoadingComponent],
})
export class NgxLoadingModule {}
