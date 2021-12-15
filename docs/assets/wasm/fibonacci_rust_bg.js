import * as wasm from './fibonacci_rust_bg.wasm';

/**
* @param {number} num
*/
export function fibonacciLoop(num) {
    wasm.fibonacciLoop(num);
}

/**
* @param {number} num
* @returns {number}
*/
export function fibonacciRec(num) {
    var ret = wasm.fibonacciRec(num);
    return ret;
}

/**
* @param {number} num
* @returns {number}
*/
export function fibonacciMemo(num) {
    var ret = wasm.fibonacciMemo(num);
    return ret;
}

