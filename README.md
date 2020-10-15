# AND Digital Tech Test 

```
Description: 

Here is my Solution. GitHub [here](). 

Process: 
- deciding loop or recursive 

Tech Stack:
- JavaScript 
- Jest 

Time taken: 


```

## Advised Time 
We recommend you spend 1hour 30mins to 2hour 30mins to complete this challenge

## Brief

Two non-negative integers are called AND-Siblings if they can be obtained by each other by rearranging the digits of their decimal representations.

Given any String input, returns all the distinct AND-Siblings that can be formed by the positive integers that can be found on it in descending order. 

### Key info

* If the input provided is: “236”, then your solution should return "632,623,362,326,263,236" as these are all the combination that can be made with integers that the string contains
* If the input provided is: “A 3B2 C6D”, then your solution should return "632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters and whitespaces, so an extraction of integers was first made to obtain the correct solution
* If the input provided does not contain any integers: “ABC”, then your solution should return the appropriate error exception message.


### Requirements Specification

- Argument must be a string 
- Positive work with positive numbers only 
- Return all combos as string seperated by commas
- Return should have no white spaces 
- Return should have no letters 
- Return should be in decending order

## Input / Output table 

|Input | Output |
|------|--------|
| "1"  | "1" |
| "12" | "21,12" |
|"236" | "632,623,362,326,263,236"|
|'1234"| "4321,4312,4231,4213,4132,4123,3421,3412,3241,3214,3142,3124,2431,2413,2341,2314,2143,2134,1432,1423,1342,1324,1243,1234"|
|'A 3B2 C6D'| "632,623,362,326,263,236"
|"ABC" | Error: "No intergers found" |
|Edge Cases not in specification || 
| 1 | Error: "Please enter a string" 
| "-1" | Error: "Positive numbers only" (NOTE: NOT IN EDGE CASES PROVIDED)| 


Considerations;

1*2 = 2 combos
1*2*3 = 6 combos
1*2*3*4 = 24 combos
1*2*3*4*5 = 120 combos 
1*2*3*4*5*6 = 720 combos 




### Inital Instructions:

Coding Challenge 
We have really enjoyed speaking with you so far AND we are excited to invite you to take part in our in house coding exercise to showcase your programming and problem solving skills. 

We recommend you spend 1hour 30mins to 2hour 30mins to complete this challenge, however it is not timed. We are happy for you to take your time and really showcase your coding skills and ability!
Exercise
Extract the SolutionAND.zip file and import the SolutionAND.js file into your favourite IDE of choice.

Two non-negative integers are called AND-Siblings if they can be obtained by each other by rearranging the digits of their decimal representations.
Write the function:
function solution (input) {
  // logic here
  return null; 
}
that, given any String input, returns all the distinct AND-Siblings that can be formed by the positive integers that can be found on it in descending order. Please keep in mind the efficiency of your algorithm when writing the solution.

For example:

If the input provided is: “236”, then your solution should return "632,623,362,326,263,236" as these are all the combination that can be made with integers that the string contains
If the input provided is: “A 3B2 C6D”, then your solution should return "632,623,362,326,263,236" as well, but this time notice that the provided string had non-integers characters and whitespaces, so an extraction of integers was first made to obtain the correct solution
If the input provided does not contain any integers: “ABC”, then your solution should return the appropriate error exception message.
Problem Submission 
Submit working code: 
Keep things simple, don’t over-engineer your solution. 
Send us the archived file <firstname.lastname>-L1L2_challenge.zip via email.

Happy coding :)

