// <--limitations-->
// only hashes strings
// takes linear time (depends on the length of array) instead of constant time
// can create clustured data easily (same index for multiple inputs)


const hash = (key, arrayLength = 10) => { // default arrayLength = 10, index of given key will be between 0 to arrayLength - 1;
    let total = 0, index;
    for (let i = 0; i < key.length; i++) {
        total = total + (key.charCodeAt(i) - 96); //charCodeAt finds the ASCII code of character
    }
    index = total % arrayLength;

    return index;
}