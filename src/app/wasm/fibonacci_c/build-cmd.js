exports.cmd =
  "docker run  --rm -v $(pwd):/src   emscripten/emsdk  emcc -Os ./src/app/wasm/fibonacci_c/fibonacci.c -o ./src/assets/wasm/fibonacci.wasm --no-entry";
