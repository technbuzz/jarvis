import { Directive, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { DxFormFieldControl } from '../form-field/form-field-control';

@Directive({ 
  selector: 'input[dxInput]',
  host: {
    '(blur)': '_onInput()'
  },
  providers: [{ provide: DxFormFieldControl, useExisting: DxInput }]
})
export class DxInput implements DxFormFieldControl<string> {

  /** Implemented as part of DtFormFieldControl. */
  focused = false;

  /** Implemented as part of DtFormFieldControl. */
  readonly stateChanges = new Subject<void>();
  
  /** Whether the input is required. */
  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = value;
  }

  /** Focuses the input. */
  focus(): void {
    this._elementRef.nativeElement.focus();
  }

  /** Implement as part of DtFormFieldControl. */
  onContainerClick(): void {
    this.focus();
  }

  /** @Internal Hanles the input change - noop method */
  _onInput(): void {
    // _onInput is basically just a noop function to let change etection knwo
    // when the user types. Never remove this function, even if it's empty.
  }



  @Input()
  get value():string {
    return this._elementRef.nativeElement.value
  }
  set value(value: string) {
    if (value !== this.value) {
      this._elementRef.nativeElement.value = value;
      // this.stateChanges.next();
    }
  }



  private _required = false;

  constructor(private _elementRef: ElementRef) { 
  }
}