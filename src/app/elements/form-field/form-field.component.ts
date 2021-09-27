import { Component, ContentChild, ContentChildren, HostBinding, Input, OnInit, Query, QueryList, ViewEncapsulation } from "@angular/core";
import { DxFormFieldControl } from "./form-field-control";
import { DxPrefix } from "./prefix";
import { DxSuffix } from "./suffix";

@Component({
  selector: "form-field",
  template: `
    <div class="dx-form-field-wrapper">
      <div class="dx-form-field-container"
        (click)="_control.onContainerClick && _control.onContainerClick($event)">
        <div class="mb-2 text-gray-1 text-lg">
          <ng-content select="dx-label"></ng-content>
        </div>
        
        <div class="dx-form-field-body">
          <div class="dx-form-field-prefix" *ngIf="_prefixChildren.length">
            <ng-content select="[dxPrefix]"></ng-content>
          </div>
          <div class="dx-form-field-infix flex-1">
            <ng-content></ng-content>
          </div>
          <div class="dx-form-field-suffix" *ngIf="_prefixChildren.length">
            <ng-content select="[dxSuffix]"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dx-form-field-body {
      @apply flex pl-8 py-2.5 rounded-xl border;
    }

    .dx-focused .dx-form-field-body {
      @apply outline-none border-gradient-1;
    }
  `],
  host: {
    '[class.dx-focused]': '_control.focused'
  },
  encapsulation: ViewEncapsulation.None
})
export class FormField<T> implements OnInit {
  // @HostBinding('class.dx-focused') @Input() isSelected = true;


  constructor() {}

  /** Internal References to prefixes */
  @ContentChildren(DxPrefix, { descendants: true })
  _prefixChildren!: QueryList<DxPrefix>;

  /** Internal References to suffixes */
  @ContentChildren(DxSuffix, { descendants: true })
  _suffixChildren!: QueryList<DxSuffix>;

  // @ContentChildren(DxInput)
  // _control!: DxInput;

  @ContentChild(DxFormFieldControl)
  _control!: DxFormFieldControl<T>;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this._control);
    
  }
}
