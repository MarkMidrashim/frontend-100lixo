import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonesRoutingModule } from './zones-routing.module';
import { ZonesComponent } from './zones.component';
import { NgxNoContentModule } from '@100lixo-lib/ngx-component';
import { NgxPipesModule } from '@100lixo-lib/ngx-pipes';


@NgModule({
  declarations: [ZonesComponent],
  imports: [
    CommonModule,
    ZonesRoutingModule,
    NgxPipesModule,
    NgxNoContentModule
  ]
})
export class ZonesModule { }
