import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class NgxCryptoService {

  private _secretKey: string = btoa("6b6be2f1-1ee8-424d-ae87-5413f616d0ed");

  /**
   * CONSTRUCTOR
   */
  constructor() { }

  /**
   *
   * @param value: string
   * @returns
   */
  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this._secretKey.trim()).toString();
  }

  /**
   *
   * @param value
   * @returns
   */
  decrypt(value: string): string {
    return CryptoJS.AES.decrypt(value, this._secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
}
