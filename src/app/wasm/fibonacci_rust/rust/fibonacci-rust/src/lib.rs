mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;



#[wasm_bindgen]
pub fn fibonacciLoop(mut num :  i32) {
    let mut a = 1;
    let mut b = 1;
  
    while num > 1 {
      let t = a;
      a = b;
      b += t;
      num -= 1
    }
    b;
  }
   
#[wasm_bindgen]
pub fn fibonacciRec(num : i32) -> i32{
    if num <= 1 {
        return 1;
    }

    let a :i32= fibonacciRec(num - 1);
    let b :i32 = fibonacciRec(num - 2);
    a+b
}

pub  static mut memo: [ i32;10000] = [0;10000];
    

    #[wasm_bindgen]
    pub fn  fibonacciMemo(num : usize) -> i32{ 
        unsafe{
            if memo[num] != -1 {
                return memo[num];
            }
    
            if num == 1 || num == 2 {
                return 1;
            } else {
                let a = fibonacciMemo(num - 1);
                let b = fibonacciMemo(num - 2 );
                memo[num] = a + b;
                return memo[num]
            }
        }

        panic!()
    }