import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { IPessoa } from '@100lixo-lib/ngx-domain';

@Component({
  selector: 'lib-ngx-people',
  templateUrl: './ngx-people.component.html',
  styleUrls: ['./ngx-people.component.scss']
})
export class NgxPeopleComponent implements OnInit, OnDestroy {

  @Input('pessoa') pessoa$!: Observable<IPessoa>;
  public pessoa!: IPessoa;
  loading = false;
  private destroy$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  /**
   * CONSTRUCTOR
   */
  constructor() { }

  ngOnInit(): void {
    this.pessoa$?.pipe(
      takeUntil(this.destroy$),
      filter((pessoa: IPessoa) => pessoa !== undefined)
    ).subscribe((pessoa: IPessoa) => {
      this.pessoa = pessoa;
      this.loading = true;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
