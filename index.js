  function takeANumber(katzDeliLine, name){
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  }
  function nowServing(katzDeliLine) {
    if(katzDeliLine.length > 0) {
      var cusName = katzDeliLine[0]
      katzDeliLine.shift() //shift to the next person in line
      return `Currently serving ${cusName}.`
    }else {
      return "There is nobody waiting to be served!"
    }
  }
  function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return `The line is currently empty.`;
    } else {

      var arr = [];
      for (var i = 0; i < katzDeliLine.length; i++) {
        arr.push(` ${i+1}. ${line[i]}`);
      }
      return `The line is currently:` + arr;
    }
  }
