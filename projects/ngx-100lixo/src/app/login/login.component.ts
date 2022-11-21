import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxAuthService } from '@100lixo-lib/ngx-auth';
import { Auth, IAuth, IToken } from '@100lixo-lib/ngx-domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;
  public form!: FormGroup;

  /**
   * CONSTRUCTOR
   * @param _router: Router
   * @param _formBuilder: FormBuilder
   * @param _auth: NgxAuthService
   */
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _auth: NgxAuthService
  ) {
    this.form = this._formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  ngOnInit(): void {
    this.loading = false;
  }

  submit(): void {
    if (this.form.valid) {
      this.loading = true;

      const body: IAuth = new Auth({
        username: this.form.get('email')?.value,
        password: this.form.get('password')?.value
      });

      this._auth.login(body)
        .then((token: IToken) => {
          this.loading = false;
          this._auth.setToken(token);
          this._router.navigate(['/dashboard']);
        })
        .catch((error: Error) => {
          this.loading = false;
          this._auth.getToken();
          throw new Error(error.message);
        });
    }
  }

}
