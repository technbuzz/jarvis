import { Directive } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({ selector: '[selector-name]' })
export abstract class DxFormFieldControl<T> {

  /** The value of conrol */
  value!: T | null;

  /** Whether the control is required  */
  readonly required!: boolean;

  /** Whether the control is disabled. */
  readonly disabled!: boolean;

  /** Whether the control is focused. */
  readonly focused!: boolean;

  /** 
   * Stream that emits whenever the state of control changes such that the parent 
   * need to run change detection.
  */
  readonly stateChanges!: Observable<void>;

  /** Handles a click on the control's container. */
  abstract onContainerClick(event: MouseEvent): void;
}