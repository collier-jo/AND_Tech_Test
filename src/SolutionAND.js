function solution (input) { // 123

  if(input.length < 2){
    return input
  } 

  let numberArray = input.split('') // [1,2,3]
  let results = [[numberArray.shift()]] // 1 
  while(numberArray.length){
    
    const currentNumber = numberArray.shift() // 2
    let tempResults = [] 

    results.forEach(result => { // [1]
      console.log(result)
      let resultIndex = 0
      
      while(resultIndex <= result.length){ // 1 
        const tempContainer = [...result] /// [1]
        tempContainer.splice(resultIndex, 0, currentNumber) /// tempcontainer = [2,1]
        tempResults.push(tempContainer)
        resultIndex ++ 
      }
    })
    results = tempResults // [2, 1]
  }
  return results
    .map(numbers => numbers.join(''))
    .sort(function(a, b){return b-a})
    .join()
}

// some example inputs
// console.log(solution('326')); // expected ouput 632,623,362,326,263,236
// console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
