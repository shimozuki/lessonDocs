const magician = {
  perform: () => {
    return magician;
  },
};

const houdini = magician.perform().perform();
const same = magician === houdini;

console.log(houdini, '{ perform: [Function: perform]}');
console.log(same, true);

const prepareStage = {
  then: val => {
    val();
    return prepareStage;
  },
};

/*
console.log('print then 3 times');
prepareStage
  .then()
  .then()
  .then();

console.log('squirtle, wartotle, blastoise');
prepareStage
  .then('Squirtle')
  .then('Wartotle')
  .then('Blastoise');
  */

const performMagic = () => {
  console.log("Abracadabra!")
} 

prepareStage.then(performMagic).then(performMagic).then(performMagic)

