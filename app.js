const number = prompt("Enter a number: ");
function SumOfDigits(number){
  var sum = 0;
  var stringNumber = number + "";
  for ( var i = 0; i < stringNumber.length; i++ ){
    sum +=  Number(stringNumber.charAt(i));
  };
  return sum;
}
if( SumOfDigits(number) % 2 == 0) {
    console.log("Even");
}

else {
    console.log("Odd");
}