

## 📋 Sprint Overview

This sprint is designed to reinforce your understanding of JavaScript conditionals through hands-on practice. You'll work through progressively challenging exercises covering operators, if/else statements, ternary operators, and switch statements.

**Estimated Time:** 2-3 hours  
**Difficulty Level:** Beginner to Intermediate

---

## 🎯 Learning Objectives

By the end of this sprint, you will be able to:
- Use comparison and logical operators effectively
- Write conditional logic using if, else, and else if statements
- Understand truthy and falsy values
- Apply ternary operators for concise conditionals
- Implement switch statements for multiple conditions
- Nest conditionals appropriately

---

## 📚 Section 1: Operators Warm-Up

### Exercise 1.1: Comparison Operators
Write expressions that evaluate to `true` or `false` using comparison operators.

```javascript
// TODO: Complete these comparisons
let age = 25;
let votingAge = 18;

// 1. Check if age is greater than or equal to votingAge
let canVote = // YOUR CODE HERE

// 2. Check if age is exactly 25
let is25 = // YOUR CODE HERE

// 3. Check if age is not equal to 30
let isNot30 = // YOUR CODE HERE

console.log(canVote);  // Should print: true
console.log(is25);     // Should print: true
console.log(isNot30);  // Should print: true
```

### Exercise 1.2: Logical Operators (AND, OR, NOT)
Combine multiple conditions using logical operators.

```javascript
// TODO: Use logical operators
let temperature = 75;
let isRaining = false;
let hasUmbrella = true;

// 1. Check if temperature is between 60 and 80 (inclusive)
let niceWeather = // YOUR CODE HERE

// 2. Check if it's NOT raining OR you have an umbrella
let canGoOut = // YOUR CODE HERE

// 3. Check if temperature is above 70 AND it's not raining
let perfectDay = // YOUR CODE HERE

console.log(niceWeather);  // Should print: true
console.log(canGoOut);     // Should print: true
console.log(perfectDay);   // Should print: true
```

### Exercise 1.3: Operator Precedence
Predict the output, then verify with console.log.

```javascript
// TODO: Predict the result before running
let a = true;
let b = false;
let c = true;

let result1 = !a || b && c;
let result2 = (a || b) && !c;
let result3 = a && !b || c;

// Write your predictions as comments:
// result1 = 
// result2 = 
// result3 = 

console.log("result1:", result1);
console.log("result2:", result2);
console.log("result3:", result3);
```

---

## 🔥 Section 2: Truthy & Falsy Values

### Exercise 2.1: Identify Truthy/Falsy
Determine which values are truthy or falsy.

```javascript
// TODO: For each value, predict if it's truthy or falsy, then test
let values = [0, "", null, undefined, NaN, false, "hello", 42, [], {}];

// Test each value
values.forEach(val => {
    if (val) {
        console.log(`${val} is TRUTHY`);
    } else {
        console.log(`${val} is FALSY`);
    }
});
```

### Exercise 2.2: Default Values
Use truthy/falsy behavior to set default values.

```javascript
// TODO: Set default values using ||
let username = "";
let displayName = username || "Guest";

let score = 0;
let finalScore = score || 100;  // Bug! Fix this

let message = null;
let greeting = // YOUR CODE HERE - should default to "Hello!"

console.log(displayName);  // Should print: "Guest"
console.log(finalScore);   // Should print: 0 (not 100!)
console.log(greeting);     // Should print: "Hello!"

// BONUS: Can you fix the score issue using a proper check?
```

---

## ⚡ Section 3: If/Else Statements

### Exercise 3.1: Simple If Statement
Create a password strength checker.

```javascript
// TODO: Write an if statement
function checkPasswordStrength(password) {
    // Check if password length is at least 8 characters
    // If yes, print "Strong password"
    
    // YOUR CODE HERE
}

checkPasswordStrength("abc");          // Should print nothing
 // Should print "Strong password"
```

### Exercise 3.2: If/Else Statement
Build a simple even/odd checker.

```javascript
// TODO: Write if/else
function isEven(number) {
    // If number is even, print "Even"
    // Otherwise, print "Odd"
    
    // YOUR CODE HERE
}

isEven(4);   // Should print "Even"
isEven(7);   // Should print "Odd"
isEven(0);   // Should print "Even"
```

### Exercise 3.3: If/Else If/Else Chain
Create a grade calculator.

```javascript
// TODO: Write if/else if/else chain
function getGrade(score) {
    // 90-100: A
    // 80-89: B
    // 70-79: C
    // 60-69: D
    // Below 60: F
    
    // YOUR CODE HERE
}

console.log(getGrade(95));  // Should print "A"
console.log(getGrade(84));  // Should print "B"
console.log(getGrade(72));  // Should print "C"
console.log(getGrade(55));  // Should print "F"
```

### Exercise 3.4: Nested Conditionals
Determine ticket pricing based on age and day.

```javascript
// TODO: Write nested conditionals
function getTicketPrice(age, isWeekend) {
    // Weekend: Adults (18+): $15, Children: $10
    // Weekday: Adults (18+): $12, Children: $8
    
    // YOUR CODE HERE
}

console.log(getTicketPrice(25, true));   // Should print "$15"
console.log(getTicketPrice(25, false));  // Should print "$12"
console.log(getTicketPrice(12, true));   // Should print "$10"
console.log(getTicketPrice(12, false));  // Should print "$8"
```

---

## 🎨 Section 4: Ternary Operator

### Exercise 4.1: Basic Ternary
Convert if/else to ternary operator.

```javascript
// TODO: Rewrite using ternary operator
// Original:
let age = 20;
let beverage;
if (age >= 21) {
    beverage = "Beer";
} else {
    beverage = "Juice";
}

// Your ternary version:
let beverageTernary = // YOUR CODE HERE

console.log(beverageTernary);  // Should print "Juice"
```

### Exercise 4.2: Ternary Chain
Handle multiple conditions with chained ternaries.

```javascript
// TODO: Use nested ternary operators
function getTrafficLight(color) {
    // "red" -> "Stop"
    // "yellow" -> "Slow down"
    // "green" -> "Go"
    
    return // YOUR CODE HERE (chained ternary)
}

console.log(getTrafficLight("red"));     // Should print "Stop"
console.log(getTrafficLight("yellow"));  // Should print "Slow down"
console.log(getTrafficLight("green"));   // Should print "Go"
```

### Exercise 4.3: Ternary in Practice
Use ternary for concise code.

```javascript
// TODO: Complete using ternary
function canDrive(age, hasLicense) {
    // Return "Can drive" if age >= 16 AND hasLicense is true
    // Otherwise return "Cannot drive"
    
    return // YOUR CODE HERE
}

console.log(canDrive(18, true));   // Should print "Can drive"
console.log(canDrive(18, false));  // Should print "Cannot drive"
console.log(canDrive(15, true));   // Should print "Cannot drive"
```

---

## 🔀 Section 5: Switch Statements

### Exercise 5.1: Basic Switch
Create a day of the week converter.

```javascript
// TODO: Write a switch statement
function getDayName(dayNumber) {
    // 1 = Monday, 2 = Tuesday, ... 7 = Sunday
    // Return the day name
    
    // YOUR CODE HERE
}

console.log(getDayName(1));  // Should print "Monday"
console.log(getDayName(5));  // Should print "Friday"
console.log(getDayName(7));  // Should print "Sunday"
console.log(getDayName(9));  // Should print "Invalid day"
```

### Exercise 5.2: Switch with Multiple Cases
Build a season identifier.

```javascript
// TODO: Use switch with fall-through cases
function getSeason(month) {
    // 12, 1, 2 = Winter
    // 3, 4, 5 = Spring
    // 6, 7, 8 = Summer
    // 9, 10, 11 = Fall
    
    // YOUR CODE HERE
}

console.log(getSeason(1));   // Should print "Winter"
console.log(getSeason(4));   // Should print "Spring"
console.log(getSeason(7));   // Should print "Summer"
console.log(getSeason(10));  // Should print "Fall"
```

### Exercise 5.3: Switch vs If/Else
Rewrite this if/else chain as a switch statement.

```javascript
// Original if/else chain:
function getAnimalSound(animal) {
    if (animal === "dog") {
        return "Woof";
    } else if (animal === "cat") {
        return "Meow";
    } else if (animal === "cow") {
        return "Moo";
    } else if (animal === "duck") {
        return "Quack";
    } else {
        return "Unknown animal";
    }
}

// TODO: Rewrite using switch
function getAnimalSoundSwitch(animal) {
    // YOUR CODE HERE
}

console.log(getAnimalSoundSwitch("dog"));    // Should print "Woof"
console.log(getAnimalSoundSwitch("cat"));    // Should print "Meow"
console.log(getAnimalSoundSwitch("bird"));   // Should print "Unknown animal"
```

---

## 🏆 Section 6: Challenge Problems

### Challenge 6.1: Login System
Create a complete login validator.

```javascript
// TODO: Implement login validation
function validateLogin(username, password, isActive) {
    // Rules:
    // 1. Username must be at least 5 characters
    // 2. Password must be at least 8 characters
    // 3. Account must be active (isActive === true)
    // 
    // Return appropriate messages:
    // - All valid: "Login successful"
    // - Invalid username: "Username too short"
    // - Invalid password: "Password too short"
    // - Inactive account: "Account is inactive"
    
    // YOUR CODE HERE
}

console.log(validateLogin("john", "pass123456", true));    
// Should print "Username too short"

console.log(validateLogin("johndoe", "pass", true));       
// Should print "Password too short"

console.log(validateLogin("johndoe", "pass123456", false)); 
// Should print "Account is inactive"

console.log(validateLogin("johndoe", "pass123456", true));  
// Should print "Login successful"
```

### Challenge 6.2: Rock Paper Scissors
Build the game logic.

```javascript
// TODO: Implement rock paper scissors logic
function playRockPaperScissors(player1, player2) {
    // Valid choices: "rock", "paper", "scissors"
    // Return: "Player 1 wins", "Player 2 wins", or "Tie"
    // Rules: rock beats scissors, scissors beats paper, paper beats rock
    
    // YOUR CODE HERE
}

console.log(playRockPaperScissors("rock", "scissors"));    // "Player 1 wins"
console.log(playRockPaperScissors("paper", "rock"));       // "Player 1 wins"
console.log(playRockPaperScissors("scissors", "scissors")); // "Tie"
console.log(playRockPaperScissors("rock", "paper"));       // "Player 2 wins"
```

### Challenge 6.3: BMI Calculator with Categories
Calculate and categorize BMI.

```javascript
// TODO: Complete the BMI calculator
function calculateBMI(weight, height) {
    // weight in kg, height in meters
    // BMI = weight / (height * height)
    // 
    // Categories:
    // < 18.5: "Underweight"
    // 18.5 - 24.9: "Normal weight"
    // 25 - 29.9: "Overweight"
    // >= 30: "Obese"
    
    // YOUR CODE HERE
}

console.log(calculateBMI(70, 1.75));   // Should print BMI and "Normal weight"
console.log(calculateBMI(50, 1.75));   // Should print BMI and "Underweight"
console.log(calculateBMI(90, 1.75));   // Should print BMI and "Overweight"
```

### Challenge 6.4: FizzBuzz with a Twist
Classic FizzBuzz with additional rules.

```javascript
// TODO: Implement FizzBuzz with extra rules
function fizzBuzzPlus(num) {
    // Divisible by 3: "Fizz"
    // Divisible by 5: "Buzz"
    // Divisible by 7: "Bang"
    // Divisible by multiple: combine (e.g., 15 = "FizzBuzz", 21 = "FizzBang")
    // Otherwise: return the number
    
    // YOUR CODE HERE
}

console.log(fizzBuzzPlus(3));    // "Fizz"
console.log(fizzBuzzPlus(5));    // "Buzz"
console.log(fizzBuzzPlus(7));    // "Bang"
console.log(fizzBuzzPlus(15));   // "FizzBuzz"
console.log(fizzBuzzPlus(21));   // "FizzBang"
console.log(fizzBuzzPlus(35));   // "BuzzBang"
console.log(fizzBuzzPlus(105));  // "FizzBuzzBang"
console.log(fizzBuzzPlus(2));    // 2
```

### Challenge 6.5: Advanced Traffic Light System
Simulate a smart traffic light system.

```javascript
// TODO: Build smart traffic light logic
function smartTrafficLight(currentLight, waitingCars, isEmergency) {
    // currentLight: "red", "yellow", "green"
    // waitingCars: number of waiting cars
    // isEmergency: boolean (ambulance/fire truck approaching)
    //
    // Rules:
    // 1. If emergency: always "green"
    // 2. If red and waitingCars > 10: change to "green"
    // 3. If green and waitingCars < 3: change to "yellow"
    // 4. If yellow: change to "red"
    // 5. Otherwise: keep current light
    
    // YOUR CODE HERE
}

console.log(smartTrafficLight("red", 5, true));      // "green" (emergency)
console.log(smartTrafficLight("red", 15, false));    // "green" (many cars)
console.log(smartTrafficLight("green", 2, false));   // "yellow" (few cars)
console.log(smartTrafficLight("yellow", 8, false));  // "red" (yellow changes)
console.log(smartTrafficLight("green", 8, false));   // "green" (keep current)
```

---

## 🎓 Bonus Section: Real-World Scenarios

### Bonus 1: E-Commerce Discount Calculator
```javascript
// TODO: Calculate discount based on multiple factors
function calculateDiscount(totalPrice, isMember, couponCode) {
    // Base discount: 0%
    // If member: +10%
    // Coupon codes: "SAVE5" = 5%, "SAVE10" = 10%, "SAVE20" = 20%
    // If totalPrice > 100: +5%
    // Maximum discount: 30%
    
    // Return final price after discount
    
    // YOUR CODE HERE
}

console.log(calculateDiscount(150, true, "SAVE10"));   // Apply all applicable discounts
console.log(calculateDiscount(50, false, "SAVE5"));    // Apply coupon only
console.log(calculateDiscount(200, true, "SAVE20"));   // Cap at 30% max discount
```

### Bonus 2: Age Verification System
```javascript
// TODO: Verify age for different activities
function verifyAge(age, activity) {
    // Activities and minimum ages:
    // "drive" = 16
    // "vote" = 18
    // "drink" = 21
    // "run_for_president" = 35
    //
    // Return true/false and a message
    
    // YOUR CODE HERE
}

console.log(verifyAge(17, "drive"));              // true, "You can drive"
console.log(verifyAge(17, "vote"));               // false, "Too young to vote"
console.log(verifyAge(40, "run_for_president"));  // true, "You can run for president"
```

---

## ✅ Sprint Completion Checklist

- [ ] Completed all Section 1 exercises (Operators)
- [ ] Completed all Section 2 exercises (Truthy/Falsy)
- [ ] Completed all Section 3 exercises (If/Else)
- [ ] Completed all Section 4 exercises (Ternary)
- [ ] Completed all Section 5 exercises (Switch)
- [ ] Attempted at least 3 Challenge Problems
- [ ] Attempted at least 1 Bonus Problem
- [ ] Tested all solutions with different inputs
- [ ] Code is properly formatted and readable
- [ ] Added comments to explain complex logic

---

## 💡 Tips for Success

1. **Test Your Code**: Always run your code with multiple test cases
2. **Read Error Messages**: They provide valuable clues for debugging
3. **Use Console.log**: Debug by printing intermediate values
4. **Start Simple**: Get basic functionality working before adding complexity
5. **Refactor**: Once it works, see if you can make it cleaner or more efficient
6. **Ask Questions**: If stuck for more than 15 minutes, seek help
7. **Take Breaks**: Step away if frustrated; fresh eyes help solve problems

---

## 🚀 Next Steps

After completing this sprint:
1. Review any exercises you found challenging
2. Try creating your own conditional logic problems
3. Move on to loops and functions
4. Combine conditionals with other JavaScript concepts

---

## 📝 Notes Section

Use this space to write notes, insights, or questions as you work through the sprint:

```
Your notes here...
```

---

**Happy Coding! 😉**

Remember: The best way to learn programming is by doing. Don't just read the exercises—code them!
