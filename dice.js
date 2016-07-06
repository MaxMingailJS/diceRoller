var diceValues = [
  {value:1},
  {value:2},
  {value:3},
  {value:4},
  {value:5},
  {value:6},
];
// dice roll results are pushed into this array
var diceRolls = [];
function rollDice() {
  var random = Math.floor((Math.random() * 5) + 0);
    let result = diceValues[random];
    diceRolls.push({result});
     random = "";
    document.querySelector('p').innerHTML = result.value;
};
var rolldice = function() {
  document.querySelector('.dice').classList.add('rollDice');
  document.querySelector('button').style.display = "none";
  setTimeout(function(){ 
      document.querySelector('.dice').classList.remove('rollDice');
      document.querySelector('button').style.display = "block";
  }, 3000);
     rollDice();
};
