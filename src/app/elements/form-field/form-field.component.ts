import { Component, ContentChildren, OnInit, Query, QueryList } from "@angular/core";
import { DxFormFieldControl } from "./form-field-control";
import { DxPrefix } from "./prefix";
import { DxSuffix } from "./suffix";

@Component({
  selector: "form-field",
  template: `
    <div class="dt-form-field-wrapper">
      <div class="dt-form-field-container"
        (click)="_control.onContainerClick && _control.onContainerClick($event)">
        <div class="mb-2 text-gray-1 text-lg">
          <ng-content select="dx-label"></ng-content>
        </div>
        
        <div class="dt-form-field-body">
          <div class="dt-form-field-prefix" *ngIf="_prefixChildren.length">
            <ng-content select="[dxPrefix]"></ng-content>
          </div>
          <div class="dt-form-field-infix flex-1">
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
    .dt-form-field-body {
      @apply flex pl-8 py-2.5 rounded-xl border
    }
  `],
  host: {
    '[class.dt-focused]': '_control.focused'
  }
})
export class FormField<T> implements OnInit {
  constructor() {}

  /** Internal References to prefixes */
  @ContentChildren(DxPrefix, { descendants: true })
  _prefixChildren!: QueryList<DxPrefix>;

  /** Internal References to suffixes */
  @ContentChildren(DxSuffix, { descendants: true })
  _suffixChildren!: QueryList<DxSuffix>;

  @ContentChildren(DxFormFieldControl)
  _control!: DxFormFieldControl<T>;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this._control);
  }
}
