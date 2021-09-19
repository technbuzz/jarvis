import { Component, ContentChildren, OnInit, QueryList } from "@angular/core";
import { DxPrefix } from "./prefix";

@Component({
  selector: "form-field",
  template: `
    <div class="dt-form-field-wrapper">
      <div class="mb-2 text-gray-1 text-lg">
        <ng-content select="dx-label"></ng-content>
      </div>

      <div class="dt-form-field-body pl-8 py-2.5 rounded-xl border">
        <div class="dt-form-field-prefix" *ngIf="_prefixChildren.length">
          <ng-content select="[dtPrefix]"></ng-content>
        </div>
        <div class="dt-form-field-infix">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})
export class FormFieldComponent implements OnInit {
  constructor() {}

  /** Internal References to prefixes */
  @ContentChildren(DxPrefix, { descendants: true })
  _prefixChildren: QueryList<DxPrefix>;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this._prefixChildren);
  }
}
