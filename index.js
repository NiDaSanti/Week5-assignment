
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

 let number1 = parseInt(prompt ("Please enter a positive whole number."));
 let number2 = parseInt(prompt("Please enter a positive whole number"));
 let total = 0;
 
 const multiplication = (number1, number2) => {
  for (i= 0; i < number2; i++) {
    console.log ("iteration counter: " , i)
    total += number1;
    console.log("total is: ", total);
    } 
   return total;
  }

const answer1 = multiplication(number1, number2)
console.log('answer1', answer1)



const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1 



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint
//@param {string}
//@return {character} => array of characters

vowelOrConsonant = () => {
  
  const userInput = prompt('Please enter a string.');
  let array = [];

  for (let i = 0; i <= userInput.length; i++) {
    let character = userInput.charAt(i);
    array.push(character);
    console.log('User Input is:', userInput);
    console.log('character is:', character);
    console.log('array is:', array);
  }
 
 //assess each character to determine if v/c and add character to appropriate array 
 let vowels = [];
 let consonants = [];
 let letterToCheck = [];
    
   for (i=0; i <= letterToCheck.length; i++) {
     //let letterToCheck = array[i]
   if (letterToCheck == 'a' || 
       letterToCheck == 'e' || 
       letterToCheck == 'i' || 
       letterToCheck == 'o' || 
       letterToCheck == 'u') {
         vowels.push(letterToCheck);
         console.log("vowel array:", vowels)
   } else {
     consonants.push(letterToCheck)
     console.log('consonants array', consonants)
     console.log('Our final vowel array is: ', vowels);
     console.log('Our final consonant array is: ', consonants);
   }
  } 
   
//Ask if user wants v/c

let userRequest = prompt ('Type "vowels" if you would like vowels first, or "consonants" to see them first.');
let reply;
if (userRequest == 'vowels') {
   reply = vowels.concat(consonants)
} else {
    reply = consonants.concat(vowels)
}
 return reply;
}




const answer2 = vowelOrConsonant()

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2 


  
   





//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins

/*let guess; 
let message;
let player = {
  name: '',
  lives: 3,
  fail_numbers: [],
};
let randomNumber = 0; 

guessTheNumber  = (upper) => {
  randomNumber =  Math.floor(Math.random() * upper) + 40;
  let user = prompt('Please enter your name: ');
 
  let attempts = player['lives'];
  
    guess = prompt('Guess a number between 10 and 50');
    for (let i = 0; i <= attempts; i--) {
    //attempts.push(player['fail_numbers']);
    if (parseInt(guess) === randomNumber) {
      message = `Congratulations ${user}! You guessed the correct number: ${randomNumber}`;
      
    } else {
      message = `You did not guess the number.  It was: ${randomNumber}`;
    
    }
  }
}
     
  


guessTheNumber();

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3 */



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {

  const library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
  let usersAnswer = prompt('Would you like to sort the library by title, author or libraryID?');
  let sortedArray = [];
  let item = '';
  
  for (i=0; i < library.length; i++) {
      if (usersAnswer == "title") {
     item = library[i].title;
      sortedArray.push(item);
   } else if (usersAnswer == "author") {
     item = library[i].author;
     sortedArray.push(item);
   } else if (usersAnswer == "id"){
     item = library[i].libraryID;
     sortedArray.push(item);
   } else {
     alert ("Your entry was invalid. Please enter 'title', 'author' or 'id'.")
   }
  
    
  }

  if(typeof sortedArray[0] == "string") {
   sortedArray.sort(function(a, b){
     return b.length - a.length;
   })
  } else {
     sortedArray.sort()
     sortedArray.reverse()
  }  
  return sortedArray
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4 
