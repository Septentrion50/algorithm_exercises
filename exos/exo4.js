// Section 2 with O(n)

const sumWestView = (arr) => {
    if ([...arr].sort() === arr){
        return 1;
    } else {
        let localMaxCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]){
                localMaxCount++;
            }
            if (arr[i] === arr[arr.length-1]){
                localMaxCount++;
            }
        }
        return localMaxCount;
    }
}

const street = [3, 7, 8, 3, 6, 1];

console.log(sumWestView(street));