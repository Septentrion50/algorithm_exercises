// Single pass on subject 1

const sumOfTwo = (k, arr) => {
    const passedValues = {};
    for (let i = 0; i < arr.length; i++) {
        let check = k - arr[i];
        if (passedValues[check]) {
            return true;
        } else {
            passedValues[arr[i]] = true;
        }
    }
    return false;
}

const arr = [10, 15, 3, 7];
const k = 17;

console.log(sumOfTwo(k, arr));