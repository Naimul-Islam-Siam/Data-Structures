//using prime number as arrayLength reduces the chance of collison by multiple times

const hash = (key, arrayLength = 13) => {
    let total = 0, weirdPrime = 31, index;

    for (let i = 0; i < Math.min(key.length, 100); i++) { //atmost 100 characters of a key will considered to count total
        total = total * weirdPrime + (key.charCodeAt(i) - 96);
    }
    index = total % arrayLength;

    return index;
}