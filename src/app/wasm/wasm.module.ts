import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LaddaModule } from "angular2-ladda";

import { HumanizeTimePipe } from "./humanize-time-pipe";

import { WasmFibonacci_C_Component } from "./fibonacci_c/fibonacci.component";
import { WasmFibonacci_RUST_Component } from "./fibonacci_rust/fibonacci.component";

@NgModule({
  declarations: [
    HumanizeTimePipe,
    WasmFibonacci_C_Component,
    WasmFibonacci_RUST_Component
  ],
  exports:[WasmFibonacci_C_Component,
    WasmFibonacci_RUST_Component],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LaddaModule.forRoot({
      style: "zoom-in",
      spinnerSize: 30,
    }),
  ],
})
export class WasmModule {}
