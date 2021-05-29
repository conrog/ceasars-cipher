function rot13(str) {
  let encodedArray = str.split("");
  let decodedArray = [];
  encodedArray.forEach((element, index) => {
    if (element == " " || element == "!" || element == "." || element == "?") {
      decodedArray.push(element);
    } else {
      let shiftValue = str.charCodeAt(index);
      shiftValue = shiftValue + 13;
      shiftValue = shiftValue % 91;
      if (shiftValue < 14) {
        shiftValue = shiftValue + 65;
      }
      decodedArray.push(String.fromCharCode(shiftValue));
    }
  });
  return decodedArray.join("");
}
