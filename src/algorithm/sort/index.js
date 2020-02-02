//冒泡排序

let bubbleSort = (list) => {
    if (list.length === 1) return list;

    for (let i = 0; i < list.length; i++) {
        //提前退出标志位

        let flag = false;

        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
                //有数据交换
                flag = true;
            }
        }

        //没有交换提前退出
        if(flag === false) break;
    }
};



//插入排序
let insertSort = (list) =>{
    if (list.length === 1) return list;

    for(let i = 1 ; i < list.length ; i ++){

        let value = list[i]; //缓存当前值
        let j = i -1;
        //查找插入位置
        for( ; j>= 0; j--){
            if(value < list[j]){
                //数据移动
                list[j+1] = list[j]
            }else{
                break;
            }
        }

        //插入数据
        list[j+1] = value;
    }

};


//选择排序
let selectSort = (list)=>{
    if (list.length === 1) return list;

    for (let i = 0 ; i < list.length; i ++){
        let min = i;
        for (let j = i ; j< list.length; j ++){
            if(list[j] < list[min]){
                min = j;
            }
        }

        let temp = list[i];
        list[i] = list[min];
        list[min] = temp;
    }
};


//归并排序
const mergeSort = (arr) => {
    // 当任意数组分解到只有一个时返回。
    if (arr.length <= 1) return arr
    const middle = Math.floor(arr.length / 2) // 找到中间值
    const left = arr.slice(0, middle) // 分割数组
    const right = arr.slice(middle)
    // 递归 分解 合并
    return mergeArr(mergeSort(left), mergeSort(right))
}


const mergeArr = (left, right) => {
    let temp = []
    let leftIndex = 0
    let rightIndex = 0
    // 判断2个数组中元素大小，依次插入数组
    while (left.length > leftIndex && right.length > rightIndex) {
        if (left[leftIndex] <= right[rightIndex]) {
            temp.push(left[leftIndex])
            leftIndex++
        } else {
            temp.push(right[rightIndex])
            rightIndex++
        }
    }
    // 合并 多余数组
    return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}


//快速排序
const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// 获取 pivot 交换完后的index
const partition = (arr, pivot, left, right) => {
    const pivotVal = arr[pivot]
    let startIndex = left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotVal) {
            swap(arr, i, startIndex)
            startIndex++
        }
    }
    swap(arr, startIndex, pivot)
    return startIndex
}

const quickSort = (arr, left, right) => {
    if (left < right) {
        let pivot = right
        let partitionIndex = partition(arr, pivot, left, right)
        quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
        quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
    }
    return arr;
}



let testList = [3,7,2,5,9,1,1];

// bubbleSort(testList);

// insertSort(testList);
// selectSort(testList);
// console.log(mergeSort(testList));
console.log(quickSort(testList, 0 , testList.length-1));
// console.log(testList);
