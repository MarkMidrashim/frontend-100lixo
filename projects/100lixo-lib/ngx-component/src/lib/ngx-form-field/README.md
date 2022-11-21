# FSG FORM FIELD

## How to use it
Import **FsgFormFieldModule** in the module of your app or component.

```ts
import { FsgFormFieldModule } from '@fluig-tools-lib/ngx-styleguide';

@NgModule({
  // ...
  imports: [
    FsgFormFieldModule
  ]
  // ...
})
export class MyAppModule {}
```

To use the form field you just need to call it on the HTML. If you are using reactive forms
the component will get the instance of the formControl or the formControlName.

The form field has the following attributes: 
* labelContent: The label name. if undefined the label will not be rendered
* for: The form attribute to link the label to the input
* required: Render the * on the label
* tooltip: Render a icon and set the message on the title.
* validatorMessages: An array of validation messages (**FsgFormFieldValidatorMessage**), when using reactive forms 
you can set the validator and the form field will display the message automatically.
```
<form [formGroup]="createForm">
  <fsg-form-field
    class="form-field-name"
    labelContent="Email"
    for="email"
    required="true"
    tooltip="Email field"
    [validatorMessages]="[
      { validator: 'email', message: 'email' },
      { validator: 'required', message: 'required' }
    ]"
  >
    <input type="text" formControlName="email" id="email" class="form-control" />
  </fsg-form-field>
  <fsg-form-field
    labelContent="Name"
    for="name"
    required="false"
    [validatorMessages]="[{ validator: 'required', message: 'required' }]"
  >
    <input type="text" [formControl]="createForm.get('name')" id="name" class="form-control" />
  </fsg-form-field>
  <fsg-form-field
    for="noForm"
    required="true"
    tooltip="teste"
    class="form-field-no-label"
    [validatorMessages]="[{ validator: 'required', message: 'required' }]"
  >
    <input type="text" id="noForm" class="form-control" />
  </fsg-form-field>
</form>


```
