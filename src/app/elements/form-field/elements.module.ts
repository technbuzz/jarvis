import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


import { DxLabel } from "./label";
import { DxPrefix } from "./prefix";
import { FormField } from "./form-field.component";
import { DxInput } from "../input/input";
import { DxSuffix } from "./suffix";
// import { DxFormFieldControl } from "./form-field-control";

@NgModule({
  imports: [CommonModule],
  exports: [DxLabel, DxPrefix, FormField, DxSuffix, DxInput],
  declarations: [DxLabel, DxPrefix, FormField, DxInput, DxSuffix],
  providers: []
})
export class ElementsModule {}
