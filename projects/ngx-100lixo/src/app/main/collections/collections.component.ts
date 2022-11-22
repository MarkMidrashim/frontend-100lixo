import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgxBreadcrumbService } from '@100lixo-lib/ngx-component';
import { IColeta, IPaginableAPIModel } from '@100lixo-lib/ngx-domain';
import { NgxColetaService } from '@100lixo-lib/ngx-service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  public coletas!: IPaginableAPIModel<IColeta>;
  private _coletas: BehaviorSubject<IPaginableAPIModel<IColeta>> =
    new BehaviorSubject<IPaginableAPIModel<IColeta>>({} as unknown as IPaginableAPIModel<IColeta>);
  public readonly coletas$ = this._coletas.asObservable();

  /**
   * CONSTRUCTOR
   * @param _breadcrumbService: NgxBreadcrumbService
   */
  constructor(
    private _breadcrumbService: NgxBreadcrumbService,
    private readonly _clienteService: NgxColetaService
  ) { }

  ngOnInit(): void {
    this._breadcrumbService.add('collections-breadcrumb', 'Coletas', '/collections', 1);
    this._clienteService.getAll()
      .subscribe((items: IPaginableAPIModel<IColeta>) => {
        this.coletas = items;
        this._coletas.next(items);
      });
  }

}
