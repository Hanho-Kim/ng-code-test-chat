function randomSentence(){
  let randomDB = [
    'As far as he is concerned, however.',
    'currants have begun to rent cheetahs over the past few months.',
    'specifically for grapefruits associated with their ducks',
    'eagles have begun to rent strawberries over the past few months',
    'specifically for apricots associated with their',
    'Its very tricky, if not impossible.',
    'hippopotamus have',
    'associated with their tangerines',
    'Far from the truth, however, blueberries',
    'associated with their birds',
    'In modern times',
    'Framed in a different way',
    'Puppies have begun to rent',
    'pears associated with their kiwis',
    'specifically for bees associated with their rabbits',
    'Strawberries over the past!',
    'Puppies associated with their moms'
  ]

  return randomDB[Math.floor(randomDB.length * Math.random())];
}

function uuid(){
  const stringArr = [];
  for(let i = 0; i< 4; i++){
    // tslint:disable-next-line:no-bitwise
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return stringArr.join('-');
}

export {randomSentence, uuid};
