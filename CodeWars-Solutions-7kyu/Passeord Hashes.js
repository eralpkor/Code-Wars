/* Password Hashes
https://www.codewars.com/kata/password-hashes/train/javascript
When you sign up for an account somewhere, some websites do not actually store your password in their databases. Instead, they will transform your password into something else using a cryptographic hashing algorithm.

After the password is transformed, it is then called a password hash. Whenever you try to login, the website will transform the password you tried using the same hashing algorithm and simply see if the password hashes are the same.

Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.

You will need to use the NodeJS Crypto Module or libcrypto for the C and NASM versions.

###Code Examples

passHash('password')
  //--> '5f4dcc3b5aa765d61d8327deb882cf99'

passHash('abc123')
  //--> 'e99a18c428cb38d5f260853678922e03'
If you want to externally test a string, look at this website.

If you are completely lost, I recommend you check out my previous Introduction to NodeJS.

As a side note, md5 can be exploited, so never use it for anything secure. The reason I used it in this kata is simply because it is a very common hashing algorithm and many people will recognize the name. */


var crypto = require('crypto');

function passHash(str) {
  return crypto.createHash('md5').update(str).digest("hex");
}

console.log(passHash('Eralp'))

var crypto = require('crypto'),
  algorithm = 'aes-256-gcm',
  password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY',
  // do not use a global iv for production, 
  // generate a new one for each encryption
  iv = '60iP0h6vJoEa'

function encrypt(text) {
  var cipher = crypto.createCipheriv(algorithm, password, iv)
  var encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex');
  var tag = cipher.getAuthTag();
  return {
    content: encrypted,
    tag: tag
  };
}

function decrypt(encrypted) {
  var decipher = crypto.createDecipheriv(algorithm, password, iv)
  decipher.setAuthTag(encrypted.tag);
  var dec = decipher.update(encrypted.content, 'hex', 'utf8')
  dec += decipher.final('utf8');
  return dec;
}

var hw = encrypt("hello world")
  // outputs hello world
console.log(decrypt(hw));