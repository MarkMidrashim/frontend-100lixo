import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxLoadingComponent } from './ngx-loading.component';
import { NgxLoadingOptions } from './ngx-loading-options';

/** @dynamic */
@Injectable({ providedIn: 'root' })
export class NgxLoadingService {
  private _attributes = ['message', 'target'];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  create(options: NgxLoadingOptions = {}): ComponentRef<NgxLoadingComponent> {
    return this._appendLoading(options);
  }

  destroy(componentRef: ComponentRef<NgxLoadingComponent>) {
    if (componentRef) {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }
  }

  private _appendLoading(options: NgxLoadingOptions) {
    const componentRef: ComponentRef<NgxLoadingComponent> = this.componentFactoryResolver
      .resolveComponentFactory(NgxLoadingComponent)
      .create(this.injector);

    componentRef.instance._isFixed = !options.target;
    componentRef.instance._ref = componentRef;

    this._applyOptions(componentRef.instance, options);

    this.appRef.attachView(componentRef.hostView);

    const loading = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    if (options.target) {
      // É feita essa validação para não quebrar o layout das páginas caso
      // o position não seja static.
      if (window.getComputedStyle(options.target).position === 'static') {
        options.target.classList.add('fs-position-relative');
      }

      (options.target as HTMLElement).appendChild(loading);
    } else {
      this.document.body.appendChild(loading);
    }

    return componentRef;
  }

  private _isDefined(value: any): boolean {
    return value !== undefined && value !== null;
  }

  private _applyOptions(loadingInstance: NgxLoadingComponent, options: Object): void {
    this._attributes.forEach((optionName: string) => {
      if (this._isDefined((options as any)[optionName])) {
        (loadingInstance as any)[optionName] = (options as any)[optionName];
      }
    });
  }
}
