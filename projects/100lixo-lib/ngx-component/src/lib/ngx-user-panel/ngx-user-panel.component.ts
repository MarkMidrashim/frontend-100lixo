import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgxUserPanelService } from './ngx-user-panel.service';
import { IPessoa } from '@100lixo-lib/ngx-domain';
import { NgxPessoaService } from '@100lixo-lib/ngx-service';

export interface IUserPanel {
  isOpen: boolean;
}

@Component({
  selector: 'lib-ngx-user-panel',
  templateUrl: './ngx-user-panel.component.html',
  styleUrls: ['./ngx-user-panel.component.scss']
})
export class NgxUserPanelComponent implements OnInit, OnDestroy {

  @ViewChild('userpanel', {static: false}) userpanel!: ElementRef;
  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() email!: string;

  public loading = false;
  public isOpen = false;
  public user!: IPessoa;
  private destroy$!: Subscription;
  private painel$: Observable<IUserPanel> = this._service.painel$;

  /**
   * CONSTRUCTOR
   * @param _service: NgxUserPanelService
   */
  constructor(
    private _service: NgxUserPanelService,
    private _renderer: Renderer2,
    private readonly _pessoaService: NgxPessoaService
  ) {}

  ngOnInit(): void {
    this.loading = false;

    this._pessoaService.getByEmail(this.email)
      .subscribe((item: IPessoa) => {
        this.user = item;
      });

    this.painel$.subscribe((panel: IUserPanel) => {
      this.prepare(panel.isOpen);
      this.loading = true;
    });
  }

  onClose() {
    this._renderer.removeClass(this.userpanel.nativeElement, 'show');
    this.isOpen = false;
  }

  logoff(): void {
    this.logout.emit(true);
  }

  private prepare(isOpen: boolean): void {
    if (!isOpen) {
      this._renderer.removeClass(this.userpanel.nativeElement, 'show');
      this.isOpen = false;
    } else {
      this._renderer.addClass(this.userpanel.nativeElement, 'show');
      this.isOpen = true;
    }

    this.loading = true;
  }

  ngOnDestroy(): void {
    if (this.destroy$) {
      this.destroy$.unsubscribe();
    }
  }

}
