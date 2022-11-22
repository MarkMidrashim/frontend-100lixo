import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { NgxPipesModule } from '@100lixo-lib/ngx-pipes';
import { NgxNoContentModule } from '@100lixo-lib/ngx-component';


@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    NgxPipesModule,
    NgxNoContentModule
  ]
})
export class CollectionsModule { }
