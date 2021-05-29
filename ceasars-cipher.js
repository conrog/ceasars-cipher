function rot13(str) {
    let stringArray = str.split("");
    // A -> 65
    // Z -> 90
    console.log(stringArray);
    stringArray.forEach((element, index) => {
        if(element != " "){
        let shiftValue =  str.charCodeAt(index);
        shiftValue = shiftValue + 13;
        shiftValue = shiftValue % 91;
        if(shiftValue < 14) {
               shiftValue = shiftValue + 65;
        }
        console.log(shiftValue);
        console.log(String.fromCharCode(shiftValue));
        element = String.fromCharCode(shiftValue);
    }
    });
    return stringArray.join("");
    //console.log(stringArray.join(""));
  }