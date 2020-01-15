//利用单向链表实现LRU算法：
//维护一个单向有序链表，越靠近链表尾部的结点是越早之前访问的。
//当有新数据被访问时，从链表头开始遍历
// 1. 如果之前已经缓存在链表中了，我们遍历链表找到结点，从原位置删除，插入到链表头部。
// 2. 如果数据没有缓存在链表中，那么如果缓存未满，则将此节点插入到链表的头部；如果缓存已满，则将链表尾部结点删除，将新数据插入头部。

let single_node = (nodeData, nextPointer) => {
    return {
        data :nodeData,
        next : nextPointer
    }
};

let print_list = (head) =>{
  console.log("print:" ,head.data);
  if(head.next){
      print_list(head.next);
  }
};

let cache_list = "";
let list_length = 0;
let MaxSize = 5;

let cache = (data)=>{

    let result = findData(cache_list, data);
    if(result){
        // console.log(cache_list)
        let temp = cache_list;
        if(cache_list.data === data){
           return;
        }
        while (temp.next.data !== data){
           temp = temp.next;
        }

        temp.next = result.next;
        result.next = cache_list;
        cache_list = result;

    }else {
        //未找到缓存
        if(list_length < MaxSize){
            //缓存未满
            let newNode = single_node(data, null);
            newNode.next = cache_list;
            cache_list = newNode;
            list_length++;
        }else {
            //缓存已满
            let temp = cache_list;
            while (temp.next != null && temp.next.next === null){
                temp = temp.next;
            }
            temp.next = null;
            let newNode = single_node(data, null);
            newNode.next = cache_list;
            cache_list = newNode;
        }
    }
};

let findData = (head , data) => {
    let matchNode = "";

    while(head.next){
        if(head.data === data){
            matchNode  =  head;
            break;
        }
        head = head.next;
    }

    if(head.data === data){
        matchNode  =  head;
    }
    return matchNode;
};

let test = ()=>{
    cache("1");
    cache("2");
    cache("3");
    cache("1");

    print_list(cache_list);
};

test();