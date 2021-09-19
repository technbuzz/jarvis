import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


import { DxLabel } from "./label";
import { DxPrefix } from "./prefix";
import { FormFieldComponent } from "./form-field.component";

@NgModule({
  imports: [CommonModule],
  exports: [DxLabel, DxPrefix, FormFieldComponent],
  declarations: [DxLabel, DxPrefix, FormFieldComponent],
  providers: []
})
export class ElementsModule {}
