// Exo 1 with O(n²) complexity

class IsKResult {
    constructor(k, arr){
        this.k = k;
        this.arr = arr;
        this.result = this.isKResultArr(this.k, this.arr)
    }

    isKResultArr(k, arr){
        for (let i = 0; i < arr.length; i++){
            for (let j = i + 1; j < arr.length; j++){
                if (arr[i] + arr[j] === k){
                    return true;
                }
            }
        }
        return false;
    }
}

const k = 17;

const arr = [10, 15, 3, 7];

const r = new IsKResult(k, arr);

console.log(r.result);
