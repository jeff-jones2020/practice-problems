
function sumArray(nums){
  const sum = nums.reduce((accumulator, num) => accumulator + num);
  return sum;
}

function fitWithinVal(nums, targetSum){
  let sum = 0;
  let output = [];

  for(let i = 0 ; i < nums.length; i++) {
    if (sum + nums[i] > targetSum) {
      continue;
    }
    sum += nums[i];
    output.push(nums[i]);
  }
  return output;
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
