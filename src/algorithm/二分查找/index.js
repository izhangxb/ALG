//循环版
const bsearch = (list, value) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (list[mid] === value) {
            return mid;
        } else if (list[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};

//递归版
const bsearch2 = (list, value) => {
    return bsearchInternally(list, 0, list.length - 1, value);
};

const bsearchInternally = (data, low, high, value) => {
    if (low > high) return -1;

    let mid = low + ((high - low) >> 1);

    if (data[mid] === value) {
        return mid;
    } else if (data[mid] < value) {
        return bsearchInternally(data, mid + 1, high, value);
    } else {
        return bsearchInternally(data, low, mid - 1, value);
    }

};


let testList = [1, 2, 3, 4, 5, 6, 7];
console.log(bsearch2(testList, 3));