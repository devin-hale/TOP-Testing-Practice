
//Capitalizes a string.
const capitalize = (string) => {
    //Splits string into array of each character.
    let splitString = string.split('');

    //Takes first index, and capitalizes it.
    splitString[0] = splitString[0].toUpperCase();

    //Joins entire array back into a string.
    splitString = splitString.join('');

    return splitString
}

//Reverses a string.
const reverseString = (string) => {
    //Splits string into array of each character.
    let splitString = string.split('');

    //Gets length of splitString array.
    let splitLength = splitString.length;

    //Declares new array to represent the reversed string.
    let reversedArray = [];

    //Iterates through splitString array from highest index to lowest, pushing to reversedArray.
    for (let i = splitLength; i > 0; i--) {
        reversedArray.push(splitString[i-1]);
    }

    //Joins reversedArray into a string.
    return reversedArray.join('');
}

//Calculator object with basic functions.

const calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    divide: (a,b) => a/b,
    multiply: (a,b) => a*b
}

//Takes string and returns it shifted one letter in the alphabet to the right.

const caesarCipher = (string) => {
    //This just takes the ABC's and turns it into an array for reference because I didn't want to type an ABC's array manually.
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    abc = abc.split('');

    //Splits string into an array of each char.
    let splitString = string.split('');

    //Takes each element of splitString array, and shifts it forward one letter in the alphabet.
    splitString.forEach((el, index) => {
        if (el === ' ') splitString[index] = ' '
        //Checks if the element is the letter 'z'
        else if (el === 'z') splitString[index] = 'a'
        else {
            //Finds index of element in ABC array.
            let elIndex = abc.indexOf(el)
            //Sets element to be equal to the next index in the ABC array.
            splitString[index] = abc[elIndex+1]
        };
    });

    return splitString.join('');

}




export {capitalize, reverseString, calculator, caesarCipher}