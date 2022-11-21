import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { NgxPipesModule } from '@100lixo-lib/ngx-pipes';
import { NgxNoContentModule } from '@100lixo-lib/ngx-component';


@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NgxPipesModule,
    NgxNoContentModule
  ]
})
export class ClientsModule { }
