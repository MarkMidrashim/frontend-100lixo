import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPeopleComponent } from './ngx-people.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [NgxPeopleComponent],
  exports: [NgxPeopleComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxSkeletonLoaderModule
  ]
})
export class NgxPeopleModule { }
