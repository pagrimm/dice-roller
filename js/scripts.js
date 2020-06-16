function Dice(sides, number) {
  this.sides = sides;
  this.number = number;
}

Dice.prototype.roll = function() {
  let output = [];
  for (i = 0; i < this.number; i++) {
    output.push(Math.ceil(Math.random() * this.sides));
  }
  return output;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("section.output").text("");
    let inputNumber = parseInt($("#number").val());
    let inputSides = parseInt($("#sides").val()); 
    $("#number").val("");
    $("#sides").val("");
    let dice = new Dice(inputSides, inputNumber);
    $("section.output").text(dice.roll().join(" "));
  });
});