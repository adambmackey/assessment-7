let addToZero = (array) => {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return true;
      }
    }
  }
  return false;
};

// console.log(addToZero([2, -2]));

// runtime O(n^2)
// space O(n)

let UniqueCharacters = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (i !== j && string[i] === string[j]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(UniqueCharacters("monday"));

// runtime O(n^2)
// space O(n)


let pangram = (string) => {
  let alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  for (let variable of string.toLowerCase()) {
      alphabet.delete(variable); 
      if(alphabet.size === 0) {
          return true;
      }
  }
  return false;
}

// console.log(pangram("The quick brown fox jumps over the lazy dog"));


//runtime O(1)
// space O(n)

let findlongestWord = (string) => {
  let stringSplit = string.split(' ');
  let longWord = 0;
  for(var i = 0; i < stringSplit.length; i++){
    if(stringSplit[i].length > longWord){
    longWord = stringSplit[i].length;
     }
  }
  return longWord;
}  
 console.log(findlongestWord("When are we going to eat lunch? "))
console.log(findlongestWord("IS this bootcamp working? "))

// runtime O(n)
//space O(n)