



function computePythag() {
  let _inputArr = document.querySelectorAll("input");
  let _a = _inputArr[0].value;
  let _b = _inputArr[1].value;
  let _c = _inputArr[2].value;
  
  //if a is blank, compute a
  if (_a == "" && _b != "" && _c != "") {
    _inputArr[0].value = Math.sqrt(Math.pow(_c, 2) - Math.pow(_b, 2));
  } else if (_a != "" && _b == "" && _c != "") { //if b is blank, compute b
    _inputArr[1].value = Math.sqrt(Math.pow(_c, 2) - Math.pow(_a, 2));
  } else if (_a != "" && _b != "" && _c == "") { //if c is blank, compute c
    _inputArr[2].value = Math.sqrt(Math.pow(_a, 2) + Math.pow(_b, 2));
  } else { //invalid input, display error
    window.alert("Please enter two side lengths");
  }
}




