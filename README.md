# Angular & WebAssembly

This project shows how WebAssembly could be used in Angular in form of components and helper services. The examples are written in C/C++ and Rust and compiled to WebAssembly using [Emscripten](https://emscripten.org) and [WASM-GEN](https://github.com/xtuc/wasm-gen).

 
## Build

You need Docker installed on your machine to compile the C/C++ examples to WebAssembly.  

To build the demo locally run:

```
npm i
npm run wasm
npm start
```

Then you can open your browser at `http://localhost:4200` to see it.
  