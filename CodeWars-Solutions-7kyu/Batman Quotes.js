/* Batman Quotes
https://www.codewars.com/kata/batman-quotes/train/javascript
Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number. They need help getting things back in order.

Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

Return the quote along with the character who said it:

getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n") 
  // =>  "Robin: Holy haberdashery, Batman!
Hint: You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string. The quotes either belong to "Batman", "Robin", or "Joker". */

var getQuote = function(quotes, hero){
  var i = hero.split('').sort()[0];
  var h = hero.split('').sort()[1];
  return {'B': 'Batman: ', 'J': 'Joker: ', 'R': 'Robin: '}[h] + quotes[i];
}
