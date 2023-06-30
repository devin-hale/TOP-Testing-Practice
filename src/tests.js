const capitalize = (string) => {
    let splitString = string.split('');
    splitString[0] = splitString[0].toUpperCase();
    splitString = splitString.join('');

    return splitString
}




export {capitalize}