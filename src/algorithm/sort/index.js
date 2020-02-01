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

let testList = [3,7,2,5,9,1,1];

// bubbleSort(testList);

// insertSort(testList);
selectSort(testList);

console.log(testList);
