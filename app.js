console.log("01 | sum");

// Write a function called sum that takes 
// two parameters and returns the sum of 
// those 2 numbers.

function sum (unsalted, salted) {
    let peanuts = unsalted + salted;
    return peanuts;
}

let x = Number(prompt("Enter a number"));

let y = Number(prompt("Enter another number"));

console.log(sum(x, y));

console.log("--------");
console.log("02 | avg");

// Write a function named avg that takes 3 
// parameters and returns the average of 
// those 3 numbers.

function avg(x, y, z) {
    let nathan = (x + y + z) / 3;

    return nathan;
}

console.log(avg(2,314,81));

console.log("----------------");
console.log("03 | greaterThan");

// Write a function called greaterThan that takes 
// two parameters and returns true if the second 
// parameter is greater than the first. Otherwise 
// the function should return false.

function greaterThan(jar, lid) {
    if (lid > jar) {
        return true;
    } else if (lid === jar) {
        console.log("Nice try.");
        return false;
    } else {
        return false;
    }
}

console.log(greaterThan(41, 35));

console.log("------------------");
console.log("04 | secondLargest");

// Write a function called secondLargest that 
// takes an array and returns the second 
// largest number.

// Note: global variables are dangerous

function secondLargest(x) {
    // Find the largest value
    let box = 0;
    let box2 = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] > box) {
            box = x[i];  
        }
    }

    // Delete the largest value
    for (let z = 0; z < x.length; z++) {
                if (x[z] === box) {
                    x.splice(z, 1);
                } 
            }

    // Find the new king in town
    for (let y = 0; y < x.length; y++) {
        if (x[y] > box2) {
            box2 = x[y];
        }
    }
    return box2;
}


console.log(secondLargest([936, 3, 34, 234, 363, 746]));

console.log("------------------");
console.log("05 | containsVowel");

// Write a function called containsVowel that
// takes a single string and returns true if
// there is at least one vowel or false otherwise.

function containsVowel(x) {
    for (let i = 0; i < x.length; i++) {
        if (x[i] === "a") {
            return true;
        } else if (x[i] === "e") {
            return true;
        } else if (x[i] === "i") {
            return true;
        } else if (x[i] === "o") {
            return true;
        } else if (x[i] === "u") {
            return true;
        } else if (x[i] === "y") {
            return true;
        }
    } 
    
    return false;
}

console.log(containsVowel("vowel"));

console.log("-------------");
console.log("06 | piglatin");

// Write a function called piglatin that
// takes a single string and returns the
// piglatin version of that string.
//      Hint: look into the split() function
//      that you can call on strings.


// 1. Take a string, split it into an array
// 2. Push [0] to end of array
// 3. Push "ay" to end of array
// 4. Remove [0] from beginning of array
// 5. Turn array back into a string
// 6. Return string

function piglatin(x) {
    let x2 = x.split("");
    x2.splice(0,1); 
    x2.push(x[0]);
    return x2.join("") + "a" + "y";
}

console.log(piglatin(prompt("Enter something to be piglatined!")));

console.log("-----------");
console.log("07 | longestWord");

// Write a function called longestWord that
// takes a single string and returns the
// longest word in the string.

// 1. Split string into an array of separate words
// 2. Measure each word
// 2. Return longest word

function longestWord(entry) {
    let x = entry.split([" "]);
    let y = "";
    
    for (i = 0; i < x.length; i++) {
        if (x[i].length > y.length) {
            y = x[i];
        }
    }
    return y;
};

console.log(longestWord("It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire."));

console.log("------INCOMPLETE-------");
console.log("08 | charFreq");

// Write a function called charFreq that takes
// a single string and returns an object with
// each letter in the string as a property and
// each value as the number of times that
// letter appears in the string.

// Hint: in addition to dot notation (album.title)
// you can use bracket notation like arrays if
// the property name is a variable (album['title']).

function charFreq (

);

console.log("--------");
console.log("09 | map");

// Write a function called map that accepts an array
// and a function as arguments. You should return an
// array containing the values of the array after
// the function has been applied to each one.

let myArray = [20, 40, 58, 12, 4];

function plus(a) {
    let sum = a / 2;
    return sum;
}

function map(x, y) {
    let newArray = [];
    for (i = 0; i < x.length; i++) {
        newArray.push(y(x[i]));
    }
    return newArray;
}

console.log(map(myArray, plus));

console.log("-----INCOMPLETE------");
console.log("10 | filter");

// Write a function called filter that accepts an array
// and a function as arguments. You should return an
// array containing the values of the array that
// return true after the function is applied.



console.log("----------");
console.log("11 | weave");

// Write a function called weave() that accepts
//  an input string and number. The function
// should return the string with every xth
// character replaced with an 'x'.

// 1. Accept two inputs, string x and number y
// 2. Replace yth character in string x
// 3. return x

function weave(x, y) {
    x = x.split("");
    for (i = y - 1; i < x.length; i = i + y) {
        x[i] = "x";
    }
    return x;
}

console.log(weave("Why isn't this working?", 3));

console.log("----------");
console.log("12 | bonus");

// Jeb eats out at restaurants all the time but
// is horrible at math. He decides to write
// a function called bonus() that accepts a
// single parameter (the cost of the meal),
// and should return the tip Jeb should give
// his waiter. Jeb uses two rules to calculate tips:

// First he always tips 20% on the original bill.
// He then rounds up to the nearest dollar.
// For example, if the total with tip is $22.78,
// he'd round up to $23.00.

function bonus(cost) {
    cost = cost + (cost * .2);
    return Math.ceil(cost);
}

console.log(bonus(10.50));

console.log("--------");
console.log("13 | scrabble");

// Write a function called scrabble that accepts a
// string and an object containing a property for
// each letter and a value representing the number
// of scrabble points its worth. Return the number
// of points that the whole word is worth.

// Hint: strings have a split() function that
// might be useful.

// 1. Split the word
// 2. Run a For loop
// 3. Cycle through each letter in x
// 4. Add each letter to the score

function scrabble(x, y) {
    let score = 0;
    x = x.split("");
    for (i = 0; i < x.length; i++) {
        score = score + scoreboard[x[i]];
    }

    return score;
}

let scoreboard = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
};

console.log(scrabble("quotidian", scoreboard));

console.log("---------");
console.log("14 | multiples");

// Write a function called multiples that
// accepts two numbers and returns an array
// of all numbers from 1 - 100 that are
// able to be divided evenly by both.

// 1. Run through numbers 1-100
// 2. If divisible by 8, check if it is divisible by 4
// 3. If also divisible by 4, push to array
// 4. Return array

function multiples (x, y) {
    let list = [];
    for (i = 1; i <= 100; i++) {
        if (i % x === 0) {
            if (i % y === 0) {
                list.push(i);
            }
        }
    }
    return list;
}

console.log(multiples(5, 10));

console.log("------INCOMPLETE (somehow)--------");
console.log("15 | blackjack");

// Write a function called blackjack that
// accepts an array containing a hand of
// cards represented by the digits 2 - 9
// and the values J, Q, K, and A. Return
// true if the hand busts (the value of
// the cards is > 21) or false if it
// hasn't busted.

// According to the rules of blackjack, an
// ace can be worth either 1 or 11. You
// should make it 11 unless that causes
// the hand to bust, in which case it should
// be 1 (just like if you play in person).

// 1. Establish value of 10 for J, Q, K
// 2. Establish 11 value for A
// 3. Run For loop
// 4. Add each matching value in array to variable "hand"
// 5. Compare final value to 21
// 6. If over 21, change A to 1
// 7. If still over 21, return true
// 8. If 21 or under, return false
// 9. Console.log blackjack(randomHand)

let randomHand = [4, "Q", "K"];
let hand = 0;

function blackjack(x) {
    for (i = 0; i < x.length; i++) {
        if (x[i] === "J" || x[i] === "Q" || x[i] === "K") {
            x[i] === 10;
        } else if (x[i] === "A") {
            x[i] === 11;
        };
        hand = hand + x[i];
    };
    if (hand > 21) {
        for (i = 0; i < x.length; i++) {
            if (x[i] === "A") {
                hand = hand - 10;
            };
        };
        if (hand > 21) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    };
};

console.log(hand);
console.log(blackjack(randomHand));


console.log("-------------");
console.log("16 | divisors");

// Write a function called divisors that
// accepts a number and returns an array
// of all of the numbers that divide
// evenly into it.

function divisors (subside) {
    let override = [];

    for (i = 1; i <= subside; i++) {
        if (subside % i === 0) {
            override.push(i);
        }    
    }
    return override;
}

console.log(divisors(375));

console.log("-----------");
console.log("17 | sprint");

// Write a function called sprint that accepts
//  a single array of objects representing
// Olympic sprinters, each which has a name
// (string) and time (in seconds, so a number).
// Return the name of the athlete with 
// the fastest time.

// let x = new Object();
// x.name = "bolt";
// console.log(x);

let sprinters = [
    {
        name: "bolt",
        time: 30        
    },
    {
        name: "mcqueen",
        time: 45
    },
    {
        name: "speedster",
        time: 33
    }
];

function sprint(x) {
    let smallestTime = 1000;
    let fastestRunner = "";
    for (i = 0; i < x.length; i++) {
        if (x[i].time < smallestTime) {
            smallestTime = x[i].time;
            fastestRunner = x[i].name;
        }
    }
    return fastestRunner;   
};

console.log(sprint(sprinters));

console.log("------------");
console.log("18 | hamming");

function hamming(first, second) {
    let array = [];
    if (first.length !== second.length) {
        return 0;
    } else {
        for (i = 0; i < first.length; i++) {
            if (first[i] === second[i]) {
                array.push(second[i]);
            }
        }
    }
    return array.length;
}

console.log(hamming("hopeless", "helpless"));

console.log("------------");
console.log("19 | pokemon");

// Write a function called pokemon that accepts
// an array of numbers. Each element in the
// array represents a day, and the number
// represents the number of Pokemon caught on
// that day. Return an array of the same length
// that contains the number of total Pokemon
// caught up to that day.


let sampleCatch = [13, 10, 8, 3, 0, 20];

function pokemon(x) {
    let catchUpdate = [];
    catchUpdate.push(x[0]);
    for (i = 1; i < x.length; i++) {
        catchUpdate.push(x[i] + catchUpdate[i-1]);
    }
    return catchUpdate;
};

console.log(pokemon(sampleCatch));

console.log("---------");
console.log("20 | find");

// Write a function called find that accepts
// two parameters: the first is an array of
// numbers and the second is a single number.
// Return the index of the first time you find
// the second parameter in the first parameter.

function find(x, y) {
    array = [];
    for (i = 0; i < x.length; i++) {
        if (x[i] === y) {
            return i;
        }
    }
}

console.log(find([3, 5, 2, 56, 345, 24234, 645, 23, 34, 65], 645));