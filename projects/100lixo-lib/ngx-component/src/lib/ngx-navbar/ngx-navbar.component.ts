import { Component, OnInit } from '@angular/core';
import { NgxUserPanelService } from '../ngx-user-panel/ngx-user-panel.service';

@Component({
  selector: 'lib-ngx-navbar',
  templateUrl: './ngx-navbar.component.html',
  styleUrls: ['./ngx-navbar.component.scss']
})
export class NgxNavbarComponent implements OnInit {

  /**
   * CONSTRUCTOR
   * @param _userPanel: NgxUserPanelService
   */
  constructor(private _userPanel: NgxUserPanelService) { }

  ngOnInit(): void {}

  openUserPanel(): void {
    this._userPanel.openOrClose(true);
  }

}
