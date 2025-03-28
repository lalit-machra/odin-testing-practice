function capitalizeStr(word) {
  return (word[0].toUpperCase() + word.slice(1, word.length));
}

function reverseStr(word) {
  let reversedArr = [];
  for (let i = word.length - 1; i >= 0; i--) {
    reversedArr.push(word[i]);
  }
  return reversedArr.join("");
}

let calculator = {
  add: (a, b) => { return (a + b) },
  subtract: (a, b) => { return (a - b) },
  multiply: (a, b) => { return (a * b) },
  divide: (a, b) => { return (a / b) }
}

function caesarCipher(str, key) {
  let codeArr = [];
  let ascii, newAscii;
  for (let i = 0; i < str.length; i++) {
    ascii = str.charCodeAt(i);
    // Only change alphabets
    if ((ascii >= 65 && ascii <= 90) ||
        (ascii >= 97 && ascii <= 122)) {
      newAscii = ascii + key;
      // uppercase
      if (newAscii > 90 && newAscii < 97) {
        newAscii = 65 + (newAscii % 90) - 1;
      } else if (newAscii > 122) {    // lowercase
        newAscii = 97 + (newAscii % 122) - 1;
      }
      codeArr.push(newAscii);
    } else {
      codeArr.push(ascii);
    }
  }
  return (String.fromCharCode(...codeArr));
}

function analyzeArray(arr) {
  let resultObj = {};
  let length = arr.length;
  let sum = 0;
  let min, max;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
    if (i === 0) {
      min = arr[i];
      max = arr[i];
    } else {
      if (arr[i] > max) { max = arr[i] }
      if (arr[i] < min) { min = arr[i] }
    }
  }
  let avg = (sum / length);
  let finalAvg = Number.isInteger(avg) ? avg : avg.toFixed(1);
  resultObj['average'] = finalAvg;
  resultObj['min'] = min;
  resultObj['max'] = max;
  resultObj['length'] = length;
  return resultObj;
}

export { capitalizeStr, reverseStr, calculator, caesarCipher, analyzeArray };