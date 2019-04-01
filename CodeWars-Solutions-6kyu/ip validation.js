/* IP Validation
https://www.codewars.com/kata/ip-validation/train/javascript
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid. */




function isValidIP(str) {
  var octetCheck = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/;
  str = str.split('.');
  
  if (str.length !== 4) return false;
  
  for (var i in str){
    if (!octetCheck.test(str[i])) return false;
  }  
  return true;  
}