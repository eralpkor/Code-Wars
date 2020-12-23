/* https://www.codewars.com/kata/5efae11e2d12df00331f91a6/train/javascript

Crack the PIN

Why is this useful? Hash functions like md5 can create a hash from string in a short time and it is impossible to find out the password, if you only got the hash. The only way is cracking it, means try every combination, hash it and compare it with the hash you want to crack. (There are also other ways of attacking md5 but that's another story) Every Website and OS is storing their passwords as hashes, so if a hacker gets access to the database, he can do nothing, as long the password is safe enough.

What is a hash: https://en.wikipedia.org/wiki/Hash_function#:~:text=A%20hash%20function%20is%20any,table%20called%20a%20hash%20table.

What is md5: https://en.wikipedia.org/wiki/MD5

Note: Many languages have build in tools to hash md5. If not, you can write your own md5 function or google for an example.

Here is another kata on generating md5 hashes: https://www.codewars.com/kata/password-hashes

Your task is to return the cracked PIN as string. */

function crack(hash){
  // G00D LUCK
}

String.prototype.hashCode = function() {
  var hash = 0;
  if (this.length == 0) {
      return hash;
  }
  for (var i = 0; i < this.length; i++) {
      var char = this.charCodeAt(i);
      hash = ((hash<<5)-hash)+char;
      hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

console.log('yes'.hashCode())