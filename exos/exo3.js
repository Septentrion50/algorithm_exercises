// Section 1 with O(n)

const sumOfTwo = (k, arr) => {
    arr.sort();
    let i = 0;
    let j = arr.length-1;

    while (j > i) {
        if (arr[i] + arr[j] === k){
            return true;
        } else if (arr[i] + arr[j] > k) {
            j--;
        } else if (arr[i] + arr[j] < k) {
            i++;
        }
    }
    return false;
}

const k = 17;
const arr = [10, 15, 3, 7];

console.log(sumOfTwo(k, arr));