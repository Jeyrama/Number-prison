/*
You're working in a number prison, 
and it seems that one of the numbers has gone missing!

Prison workers have no idea what number is missing, 
and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the prison loses another number, 
they want your program to work regardless of how many numbers there are in total.

Task:
  Write a function that takes a shuffled list of unique numbers from 
  1 to n with one element missing (which can be any number including n). 
  Return this missing number.

Examples:
  [1, 3, 4]  =>  2
  [1, 2, 3]  =>  4
  [4, 2, 3]  =>  1
*/


// Solution

const findNumber = array => {
  const totalLength = array.length + 1
  const totalSum = (totalLength * (totalLength + 1)) / 2
  const currentSum = array.reduce((acc, num) => acc + num, 0)
  return totalSum - currentSum
}

// or

function findNumber(array) {
  if (!array.length) return 1
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  const l = array.length + 1
  return (l * (l + 1) / 2) - sum
}