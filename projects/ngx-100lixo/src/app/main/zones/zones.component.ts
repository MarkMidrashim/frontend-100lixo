import { Component, OnInit } from '@angular/core';
import { NgxBreadcrumbService } from '@100lixo-lib/ngx-component';
import { ICliente, IPaginableAPIModel } from '@100lixo-lib/ngx-domain';
import { NgxClienteService } from '@100lixo-lib/ngx-service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {

  public clientes!: IPaginableAPIModel<ICliente>;
  private _clientes: BehaviorSubject<IPaginableAPIModel<ICliente>> =
    new BehaviorSubject<IPaginableAPIModel<ICliente>>({} as unknown as IPaginableAPIModel<ICliente>);
  public readonly clientes$ = this._clientes.asObservable();

  /**
   * CONSTRUCTOR
   * @param _breadcrumbService: NgxBreadcrumbService
   */
  constructor(
    private _breadcrumbService: NgxBreadcrumbService,
    private readonly _clienteService: NgxClienteService
  ) { }

  ngOnInit(): void {
    this._breadcrumbService.add('zones-breadcrumb', 'Zonas', '/zones', 1);
    this._clienteService.getAll()
      .subscribe((items: IPaginableAPIModel<ICliente>) => {
        this.clientes = items;
        this._clientes.next(items);
      });
  }

}
