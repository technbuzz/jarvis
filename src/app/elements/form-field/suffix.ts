import { Directive } from '@angular/core';

@Directive({ 
  selector: '[dxSuffix]',
  host: {
    class: "dx-suffix"
  }
})
export class DxSuffix {
  constructor() { }
}