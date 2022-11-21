import { Directionality } from '@angular/cdk/bidi';
import { CdkStepper } from '@angular/cdk/stepper';
import { AfterContentInit, Component, Inject, Input, ChangeDetectorRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lib-ngx-stepper',
  templateUrl: './ngx-stepper.component.html',
  styleUrls: ['./ngx-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: NgxStepperComponent }]
})
export class NgxStepperComponent extends CdkStepper implements AfterContentInit {

  @Input() btnBackText = 'Voltar';
  @Input() btnNextText = 'Avançar';
  @Input() btnFinishText = 'Concluir';
  @Output() stepperFinished = new EventEmitter();

  constructor(
    private readonly elementRef: ElementRef,
    @Inject(DOCUMENT) private document: any,
    directionality: Directionality,
    changeDetactorRef: ChangeDetectorRef
  ) {
    super(directionality, changeDetactorRef, elementRef, document);
  }

  ngAfterContentInit(): void {
    super.ngAfterContentInit();
  }

  selectStep(index: number): void {
    if (this.selected.stepControl) {
      this.selected.stepControl.markAllAsTouched();
    }

    this.selectedIndex = index;
  }

  validateAndNextStep() {
    if (this.selected.stepControl) {
      this.selected.stepControl.markAllAsTouched();

      if (!this.selected.stepControl.invalid) {
        this.goNextStep();
      }
    } else {
      this.goNextStep();
    }
  }

  goNextStep() {
    this.next();
  }

  validateAndFinishStepper() {
    if (this.selected.stepControl) {
      this.selected.stepControl.markAllAsTouched();
      if (!this.selected.stepControl.invalid) {
        this.stepperFinished.emit(true);
      }
    } else {
      this.stepperFinished.emit(true);
    }
  }

}
