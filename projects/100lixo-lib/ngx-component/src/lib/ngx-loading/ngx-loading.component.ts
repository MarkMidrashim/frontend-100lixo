import { Component } from '@angular/core';

@Component({
  selector: 'ngx-loading',
  templateUrl: './ngx-loading.component.html',
  styleUrls: ['./ngx-loading.component.scss'],
})
export class NgxLoadingComponent {
  _ref: any;
  _isFixed!: boolean;
  message!: string;
  target: any;

  close() {
    this._ref.destroy();
  }
}
