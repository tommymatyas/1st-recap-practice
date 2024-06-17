// hatvanyozas

function pow(number1, number2) {
  //   return number1 ** number2; // ** hatvanyozas
  return Math.pow(number1, number2);
}

// console.log(pow(2, 64));

// sziasztok en tomi vagyok
// sziasztok ne tomi koygav
function funnySentence(sentence) {
  //   let reverseSentence = sentence.split(" ").reverse();
  //   return reverseSentence;
  let words = sentence.split(" ");

  let newWords = words.map((word, index) =>
    index % 2 === 1 ? word.split("").reverse().join("") : word
  );

  //   let newSentence = [];
  //   for (let i = 0; i < words.length; i++) {
  //     if (i % 2 === 1) {
  //       newSentence.push(words[i].split("").reverse().join(""));
  //     } else {
  //       newSentence.push(words[i]);
  //     }
  //   }

  // for looppal
  /* let newSentence = [];
  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 1) {
      console.log(words[i]);
      let letters = words[i].split("");
      console.log(letters);
      let reverseLetters = letters.reverse();
      console.log(reverseLetters);
      let reverseWord = reverseLetters.join("");
      console.log(reverseWord);
      newSentence.push(reverseWord);

      // newSentence.push(words[i].split("").reverse().join(""));
    } else {
      newSentence.push(words[i]);
    }
    } 
    return newSentence.join(" ");
    */

  //   return newSentence.join(" ");

  return newWords.join(" ");
}

console.log(funnySentence("sziasztok en tomi vagyok"));
