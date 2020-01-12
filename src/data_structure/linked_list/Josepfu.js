//约瑟夫问题
// 在一间房间总共有n个人（下标0～n-1），只能有最后一个人活命。
//
// 按照如下规则去杀人：
// 所有人围成一圈
// 顺时针报数，每次报到q的人将被杀掉
// 被杀掉的人将从房间内被移走
// 然后从被杀掉的下一个人重新报数，继续报q，再清除，直到剩余一人
//
// 输入
// 人的个数 : n
// 每次报到q 就会被杀死 的 q
//
// 输出
// 最终能够活下来的人的下标


let create_node = (nodeData, nextPointer) => {
    return {
        data: nodeData,
        next: nextPointer
    }
};

let createList = (length) => {
    if (length <= 0) {
        return;
    }
    let current = create_node(1, null);
    current.next = current;
    for (let i = 2; i <= length; i++) {
        let node = create_node(i, null);
        let temp = current.next;
        current.next = node;
        node.next = temp;
        current = node;
    }
    return current.next;
};

let kill = (q, list) => {
    while (list.next !== list){
        for (let i = 1; i < q-1; i++) {
            list = list.next
        }
        console.log(list.next.data + " is dead");
        list.next = list.next.next; //拉走死掉的
        list = list.next; //从下一个继续开始
    }
    console.log(list.data + " is last one");
};

let start = (n, q) => {
    let circle_list = createList(n);
    // print_list(circle_list)
    kill(q, circle_list)
};

let print_list = (list)=>{
    console.log(list.data);
    if (list.next != null) {
        print_list(list.next);
    }
};

start(9, 5);