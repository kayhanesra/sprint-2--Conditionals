//SECTION 1
//Exercise 1.1
//1
let age = 25;
let votingAge = 18
let canVote = age >= votingAge
console.log("Can vote?", canVote)
//2
let is25 = age === 25
console.log("Is it exactly 25?", is25)
//3
let isNot30 = age !== 30
console.log("it is not equal to 30", isNot30)
//Exercise 1.2
//1
let temperature = 75;
let isRaining = false;
let hasUmbrella = true;
let niceWeather = temperature <=80 && temperature >= 60
console.log(niceWeather)
//2
let canGoOut = !isRaining || hasUmbrella
console.log("can I go out?", canGoOut)
//3
let perfectDay = temperature > 70 && ! isRaining
console.log("go out", perfectDay)
//Exercise 1.3
//1
let a = true;
let b = false;
let c = true;

let result1 = !a || b && c;
let result2 = (a || b) && !c;
let result3 = a && !b || c;

// Write your predictions as comments:
// result1 = it will be false
// result2 = it will be false
// result3 = it w;ll be true

console.log("result1:", result1);
console.log("result2:", result2);
console.log("result3:", result3);

//SECTION 2
//Exercise 2.1
let values = [0, "", null, undefined, NaN, false, "hello", 42, [], {}];
values.forEach(val => {
    if (val) {
        console.log(`${val} is TRUTHY`);
    } else {
        console.log(`${val} is FALSY`);
    }
});

//Exercise 2.2
let username = "";
let displayName = username || "Guest";

let score = 0;
let finalScore = (score === null) ? 100 : score;

let message = null;
let greeting = ("Hello!")
console.log(displayName);  
console.log(finalScore);   
console.log(greeting);  
//bonus
if (score!== null && score !==undefined) { // not to me(menaing):Check if the score is neither null nor undefined; meaning, does a real value actually exist?
    finalScore = score;
} else {
    finalScore = 100
}
console.log(finalScore)
//SECTION 3
//Exercise 3.1
function checkPasswordStrength(password) {
    if (password.length >= 8) {
        console.log("Strong password")
    }
}
checkPasswordStrength("abc");
checkPasswordStrength("securepass123");
//Exercise 3.2

function isEven(number) {
    if (number%2 === 0){
        console.log("Even")
    } else {
        console.log("Odd")
    }    
}
isEven(4);
isEven(7);
isEven(0);

//Exercise 3.3
function getGrade(score) {
    if (score>=90) {
        return "A"
    } else if (score >=80) {
        return "B"
    } else if (score>= 70) {
        return "C"
    } else if (score>=60) {
        return "D"
    } else {
        return "F"
    }
}        
console.log(getGrade(95));
console.log(getGrade(84));
console.log(getGrade(72));
console.log(getGrade(55));
console.log(getGrade(63));

//Exercise 3.4
function getTicketPrice(age, isWeekend) {
    if (isWeekend) {
        if(age>= 18) {
            return "$15"
        } else {
            return "$10"
        }
    } else {
        if(age>=18){
            return "$12"
           
        } else {
            return "$8"
        }
    }
    
}

console.log(getTicketPrice(25, true));   
console.log(getTicketPrice(25, false));  
console.log(getTicketPrice(12, true));   
console.log(getTicketPrice(12, false));  
//SECTION 4
//Exercise 4.1
let newAge = 20;
let beverage;
if (newAge >= 21) {
    beverage = "Beer";
} else {
    beverage = "Juice";
}

let beverageTernary = (newAge>=21) ? "Beer" : "Juice" 
console.log(beverageTernary);  

//Exercise 4.2
function getTrafficLight(color) {
    return color === "red" ? "Stop"
    : color === "yellow"? "Slow Down"
    : color === "green" ? "Go"
    : ""
}

console.log(getTrafficLight("red"));     
console.log(getTrafficLight("yellow"));  
console.log(getTrafficLight("green"));   

//Exercise 4.3
function canDrive(age, hasLicense) {
    return (age >= 16 && hasLicense) ? "Can drive" : "Cannot drive"
}

console.log(canDrive(18, true));   
console.log(canDrive(18, false));  
console.log(canDrive(15, true));   
//SECTION 5
//Exercise 5.1

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"    
        default:
            return "Invalid day"
    }
    
}

console.log(getDayName(1));  
console.log(getDayName(5));  
console.log(getDayName(7));  
console.log(getDayName(9));  

//Exercise 5.2
function getSeason(month) {
    switch (month) {
    case 12:
    case 1:
    case 2:
        return "Winter"
    case 3:
    case 4:
    case 5:
        return "Spring"
    case 6:
    case 7:
    case 8:
        return "Summer"
    case 9:
    case 10:
    case 11:
        return "Fall"
    default:
        return "Invalid month"
    }
}

console.log(getSeason(1));   
console.log(getSeason(4));   
console.log(getSeason(7));   
console.log(getSeason(10)); 

 //Exercise 5.3
 function getAnimalSoundSwitch(animal) {
    switch (animal) {
        case "dog":
            return "Woof"
        case "cat":
            return "Meow"
        case "cow":
            return "Moo"
        case "duck":
            return "Quack"
        default:
            return "Unknnown animal"
    }
}

console.log(getAnimalSoundSwitch("dog"));    
console.log(getAnimalSoundSwitch("cat"));    
console.log(getAnimalSoundSwitch("bird")); 

//SECTION 6
//Challenge 6.1
function validateLogin(username, password, isActive) {
    if (username.length < 5){
        return "Username too short"
    } else if (password.length < 8) {
        return "Password too short"
    } else if (!isActive) {
        return "Account is inactive"
    } else {
        return ":) Login successful"
    }
    
}
console.log(validateLogin("john", "pass123456", true));
console.log(validateLogin("johndoe", "pass", true));
console.log(validateLogin("johndoe", "pass123456", false));
console.log(validateLogin("johndoe", "pass123456", true));

//Challenge 6.2
function playRockPaperScissors(player1, player2) {
    if(player1 === player2){
        return "Tie"
    } 
    if (
          (player1 === "paper" && player2 === "rock") ||
          (player1 === "rock" && player2 === "scissors")||
          (player1 === "scissors" && player2 === "paper") 
    ) {
            return "Player 1 wins"
      } return "Player 2 wins" 
        
}
console.log(playRockPaperScissors("rock", "scissors"));
console.log(playRockPaperScissors("paper", "rock"));
console.log(playRockPaperScissors("scissors", "scissors"))
console.log(playRockPaperScissors("rock", "paper"))