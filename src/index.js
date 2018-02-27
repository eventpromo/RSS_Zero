module.exports = function getZerosCount(number) {
  var result = 0;
  var div = 5;
  while(number > div){
    result += Math.floor(number/div)
    div *= 5;
  }
  return result;
}
