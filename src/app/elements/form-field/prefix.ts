import { Directive } from "@angular/core";

/** Prefix to be placed the the front of the form field. */
@Directive({
  selector: "[dxPrefix]",
  exportAs: "dxPrefix",
  host: {
    class: "dx-prefix"
  }
})
export class DxPrefix {}
