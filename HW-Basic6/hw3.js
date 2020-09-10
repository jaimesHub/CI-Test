function findDouble(arr, modNumb) {
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % modNumb == 0) {
                res.push([i, j]);
            }
        }
    }
    return res;
}