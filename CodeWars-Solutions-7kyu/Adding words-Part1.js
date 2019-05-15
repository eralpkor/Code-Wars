/* Adding words - Part I
https://www.codewars.com/kata/adding-words-part-i/train/javascript
This is the first part of this kata series. Second part is here and third part is here

Add two English words together!

Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

  //javascript
  var k = new Arith("three");
  k.add("seven"); //this should return "ten" 
  //c++
  Arith* k = new Arith("three");
  k->add("seven"); //this should return string "ten" 
  //Rust
  let c = Arith{value: "three"};
  c.add("seven") // this should return &str "ten"
Input - Will be between zero and ten and will always be in lower case

Output - Word representation of the result of the addition. Should be in lower case */

nums = ['zero','one','two','three','four','five',
        'six','seven','eight','nine','ten','eleven',
        'twelve','thirteen','fourteen','fifteen','sixteen',
        'seventeen','eighteen','nineteen','twenty'];

class Arith{
  constructor (a) {
    this.a = a
  }
  
  add(b) { 
    return nums[ nums.indexOf(this.a) + nums.indexOf(b) ] 
  }                  
}