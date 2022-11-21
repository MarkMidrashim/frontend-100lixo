import { Injectable } from '@angular/core';
import { IBreadcrumb } from '@100lixo-lib/ngx-domain';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxBreadcrumbService {

  private readonly _breadcrumb$ = new ReplaySubject<IBreadcrumb[]>();
  readonly breadcrumb$: Observable<IBreadcrumb[]> = this._breadcrumb$.asObservable();
  private breadcrumbs: Map<number, IBreadcrumb> = new Map<number, IBreadcrumb>();

  constructor() { }

  /**
   * Método responsável por adicionar um item no breadcrumb
   * @param id: string
   * @param label: string
   * @param url: string
   * @param position: number
   */
  add(id: string, label: string, url: string, position: number): void {
    const breadcrumb = {id: id, label: label, url: url, position: position} as IBreadcrumb;
    this.breadcrumbs.set(breadcrumb.position, breadcrumb);
    this._breadcrumb$.next(Array.from(this.breadcrumbs.values()));
  }

  /**
   * Método responsável por verificar se um item já existe
   * @param id: string
   * @returns Verdadeiro se o item estiver mapeado
   */
  wasAdded(id: string): boolean {
    return !!Array.from(this.breadcrumbs.values()).find((breadcrumb: IBreadcrumb) => breadcrumb.id === id);
  }

}
