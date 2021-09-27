import { Directive, ElementRef, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { Subject } from 'rxjs';
import { DxFormFieldControl } from '../form-field/form-field-control';

@Directive({ 
  selector: 'input[dxInput]',
  host: {
    class: 'dx-input',
    '[disabled]': 'disabled',
    '(input)': '_onInput()',
    '(blur)': '_focusChanged(false)',
    '(focus)': '_focusChanged(true)'
  },
  providers: [{ provide: DxFormFieldControl, useExisting: DxInput }]
})
export class DxInput implements DxFormFieldControl<string> {

  /** Implemented as part of DtFormFieldControl. */
  focused = false;

  /** Implemented as part of DtFormFieldControl. */
  readonly stateChanges = new Subject<void>();

  /** Wheter the input is disabled. */
  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }

    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);

    // Browsers may not fire the blur event if the input is disable too quickly
    // Reset from here to ensure the element doesn't become stuck.
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  
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

  /** @Internal Handles the input change - noop method */
  _onInput(): void {
    // _onInput is basically just a noop function to let change etection knwo
    // when the user types. Never remove this function, even if it's empty.
  }

  /** @Internal Callback for the cases where the focus state of the input changes. */
  _focusChanged(isFocused: boolean): void {
    console.log('isFocused: ', isFocused);
    if (isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
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
  private _disabled = false;

  constructor(
    private _elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl
  ) { 
  }
}