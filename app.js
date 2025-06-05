// Qno 1

var username=prompt("enter name")
username=username.toUpperCase()
var last=prompt("enter last name")
last=last.toUpperCase()

var fullname=username + " " + last
console.log("hello!" + " " + fullname);

// Qno 2
var mobileModel=prompt("enter your fav mobile model")

console.log("my fav phone is"+ " " + mobileModel);

length=mobileModel.length
console.log("length of string:"+length);
// Qno 3
var word= "Pakistani"
console.log("string" + " " + word);


var index= word.indexOf("n")
console.log("index of'n':" + index);
// Qno 4

var word= "Hello World"
console.log("string" + " " + word);


var index= word.lastIndexOf("l")
console.log("Last index of'l':" + index);
// Qno 5
var word = "Pakistani"

console.log("string :" + " "+ word
    
);


var index = word.charAt(3)

console.log("character at index 3 :" + index);
// Qno 6

var firstName= prompt("Enter your name")
var lastName= prompt("Enter your last name")

var fullName= firstName.concat(" " + lastName)
console.log( "hello" +" " + fullName);

// Qno 7

// var city= "hyderabad"

// var replace = city.replace("hyder","Islam")

// console.log(replace);
// Qno 8
// var message = "Ali and Sami are best friends. They play cricket and football together"

// var replace = message.replace(/and/g,"&")

// console.log(replace);


// Qno 9

// var str="789"

// var  num = Number(str)
// console.log(num);

// Qno 14

// var useritem= false
// var user= prompt("Enter any word")
// user= user.toUpperCase()
// console.log(user);


// var items = ["cake","cookie","applepie","chips","patties"]
// var user = prompt("Enter your item")
// user= user.toLowerCase()

// for(
//     var i = 0; i<items.length;i++){

// if(user===items[i]){
//   useritem= true


// console.log(" your " + user + " available at index " + i);
// useritem= true
// }}
// if(useritem==false){
//     console.log(` we are sorry ${userInput} is not available in our bakery `);}

// Qno 11
// var userInput= prompt("Enter your message")
// var firstLetter= userInput.slice(0,1)
// firstLetter=firstLetter.toUpperCase()
// var otherletters= userInput.slice(1)

// otherletters=otherletters.toLowerCase()

// var userInput = firstLetter + otherletters

// console.log(userInput);

// Qno  10
var userMsg = prompt("Enter message")

console.log(userMsg);
Msg=userMsg.toUpperCase()
console.log(Msg);


// console.log(Msg);
//  Qno 12
// var num = 35.36
// console.log(num);

// var str= num.toString()

// var result = str.replace(".", "")
// console.log(result);
//  Qno  17

var input = prompt("enter any message")

var lastchar= input.charAt(input.length-1)

console.log(lastchar);

// Qno 13

var userInput = prompt("enter your msg")

for ( var i= 0; i<userInput.length;i++){

  var input= userInput.charAt(i)
var symbol = input.charCodeAt(0);
  if (
    symbol === 33 ||    symbol === 44 ||   symbol === 46 ||    symbol === 64     
  ) {

    console.log("plz enter valid input");
    
  }
}
// Qno 16
var university = "university of Karachi"
var split = university.split("")
var result = split.join("\n")
console.log(result);

//  Qno 18