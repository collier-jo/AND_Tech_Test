function solution (input) { 

  let numbersOnly = input.replace(/\s/g,'').replace(/\D/g,'')

  if(numbersOnly === ""){
    throw new Error("No intergers found in given string")  
  } else if (numbersOnly < 2){
    return numbersOnly
  }

  let numberArray = numbersOnly.split('') 
  let results = [[numberArray.shift()]] 
  while(numberArray.length){
    const currentNumber = numberArray.shift() 
    let tempResults = [] 
    results.forEach(result => { 
      let resultIndex = 0
      while(resultIndex <= result.length){  
        const tempContainer = [...result] 
        tempContainer.splice(resultIndex, 0, currentNumber) 
        tempResults.push(tempContainer)
        resultIndex ++ 
      }
    })
    results = tempResults 
  }
  return results
    .map(numbers => numbers.join(''))
    .sort(function(a, b){return b-a})
    .join()
}

console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
