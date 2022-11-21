import { AfterContentInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName } from '@angular/forms';
import { NgxFormFieldValidatorMessage } from './ngx-form-field-validator-message.interface';

@Component({
  selector: 'lib-ngx-form-field',
  templateUrl: './ngx-form-field.component.html',
  styleUrls: ['./ngx-form-field.component.scss'],
})
export class NgxFormFieldComponent implements AfterContentInit {
  @Input() labelContent!: string;
  @Input() for!: string;
  @Input() required = false;
  @Input() tooltip!: string;
  @Input() subtitle!: string;
  @Input() tooltipTemplate!: TemplateRef<any>;
  @Input() validatorMessages!: NgxFormFieldValidatorMessage[];

  @ContentChild(FormControlDirective) private formControlDirective!: FormControlDirective;
  @ContentChild(FormControlName) private formControlName!: FormControlName;

  control!: FormControl;

  ngAfterContentInit(): void {
    this.setFormFieldControl();
  }

  private setFormFieldControl(): void {
    if (this.formControlName) {
      this.control = this.formControlName.control;
    } else if (this.formControlDirective) {
      this.control = this.formControlDirective.control;
    }
  }

}
