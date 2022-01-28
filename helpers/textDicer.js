export const diceCharacters = function(input){
  let words;
  if(typeof input === 'string') {
    words = input.split(' ');
  }
  if(typeof input === 'object') {
    words = input.innerText.split(' ');
  }
 
  const wrappedString = words.map((word, index) => {
      const letters = [...word];
      const wrappedLetters = letters.map((letter, index)=>{
          return `<span class='letter letter--${index}'>${letter}</span>`;
      });
      const wrappedWord = wrappedLetters.join('');
      return `<span class='word'>${wrappedWord}</span>`;
  });

  return wrappedString.join(' ');
}