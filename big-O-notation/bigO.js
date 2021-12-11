/** What is Big O
 ** Big O (Omnicron) notation is a mathematical notation that describes the limiting behavior of a function
  when the argument tends towards a particular value/infinity.
 ** Big O determines the efficiency of operation (worst-case scenario) relatives to its input size.
 */

/** O(1) - Constant
 ** # of operations SAME regardless of INPUT SIZE
 */
function constant(array){
  // O(1)
  console.log(array[0]);
  // O(1)
  console.log(array[1]);
}

/** O(n) - Linear
 ** # of operations PROPORTIONAL to INPUT SIZE
 ** ie - (for loops)
 */
function linear(array){
  // O(n)
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  // O(n)
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

/** O(n^2) - Quadratic 
 ** # of operations SQUARE to INPUT SIZE
 ** ie - (nested loops) 
 */
function quadratic(array){
  // O(n^2)
  for (let first = 0; first < array.length; first++){ // O(n)
    console.log(first);
    for(let second = 0; second <= first; second++){ // O(n)
      console.log(`first: ${first} | second: ${second}`);
    }
  }
};
// quadratic([1,2,3,4]);

/** O(log n) - Lograthmic
 ** # of operations PEAKS and flattens as INPUT SIZE increases
 ** ie- binary search
 */

function logarithmic(array, searchElement){
  //TBD
}
logarithmic([1,2,3,4,5,6,7,8,9,10], 8)

/** O(2^n) - Exponential
 ** # of operations DOUBLES w. each increment of INPUT
 ** opposite. of logarithmic 
*/
function exponential(){
  // TBD
}



