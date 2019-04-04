var num = 0;
function takeANumber(katzDeliLine){
  num += 1
  katzDeliLine.push(num)
  return "Welcome, your number is: " + num
}

const line = []

console.log(takeANumber(line))
console.log(takeANumber(line))
console.log(takeANumber(line))

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

var everybody = [];
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    for(var i = 0; i < katzDeliLine.length; i++){
    everybody.push(" " + (i + 1) + ". " + katzDeliLine[i]);
    } return "The line is currently:" + everybody.join();
  }
}

console.log(currentLine(["Jake", "Molly"]))
console.log(currentLine(["Olivia", "Zach"]))
  