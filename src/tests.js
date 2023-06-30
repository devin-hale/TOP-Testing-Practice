
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




export {capitalize, reverseString}