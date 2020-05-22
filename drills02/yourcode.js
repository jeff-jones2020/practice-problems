function countOccurences(wordArray, target){
  let count = 0;

  wordArray.forEach(item => count += item === target ? 1 : 0);
  return count;
}

function wordLengths(words){
  const output = words.map(item => item.length);
  return output;
}

function getMinMaxMean(){

}

function findMode(){

}
