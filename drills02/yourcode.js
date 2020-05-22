function countOccurences(wordArray, target){
  let count = 0;

  wordArray.forEach(item => count += item === target ? 1 : 0);
  return count;
}

function wordLengths(words){
  const output = words.map(item => item.length);
  return output;
}

function getMinMaxMean(nums){
  let output = {min: nums[0], max: nums[0], mean: null}
  let sum = 0;
  let count = 0;

  nums.forEach( num => {
    output.min = num < output.min ? num : output.min;
    output.max = num > output.max ? num : output.max;
    sum += num;
    count++;
  })
  output.mean = sum / count;

  return output;

}

function findMode(nums){
  const foundNums = {winner: nums[0], winnerAmount: 1};

  nums.forEach(num => {
    if (foundNums[num] === undefined) {
      foundNums[num] = 1;
    } else {
      foundNums[num]++;
    }
    if(foundNums[num] > winnerAmount) {
      foundNums.winner = num;
      foundNums.winnerAmount = foundNums[num];
    }
  })

  return foundNums.winner;
}
