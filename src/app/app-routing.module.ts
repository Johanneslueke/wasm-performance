import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { WasmFibonacci_C_Component } from "./wasm/fibonacci_c/fibonacci.component";
import { WasmFibonacci_RUST_Component } from "./wasm/fibonacci_rust/fibonacci.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "fibonacci_c",
    component: WasmFibonacci_C_Component,
    data: { demo: true, name: "Fibonacci In C" },
  }, 
  {
    path: "fibonacci_rust",
    component: WasmFibonacci_RUST_Component,
    data: { demo: true, name: "Fibonacci In Rust" },
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
