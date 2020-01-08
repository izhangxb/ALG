//单链表
let single_node = (nodeData, nextPointer) => {
    return {
        data :nodeData,
        next : nextPointer
    }
};

let print_list = (head) => {
    console.log(head.data);
    if(head.next){
        print_list(head.next);
    }
};

let create_single_linked_list = () => {
    let node3 = single_node(3, null);
    let node2 = single_node(2, node3);
    let node1 = single_node(1, node2);
    return node1;
};


let test = () => {
   let head =  create_single_linked_list();
   print_list(head);
};

let testAdd = ()=>{

    let new_node = single_node("new",null);
    let head = create_single_linked_list();
    //假设插到第二个位置
    let oldNode = head.next;
    head.next = new_node;
    new_node.next = oldNode;

    print_list(head);
};

let testDelete = ()=>{
    let head = create_single_linked_list();
    //假设删除第二个
    let thirdNode = head.next.next;
    head.next = thirdNode;

    print_list(head);
};

// test();
// testAdd();
// testDelete();


//双向链表
let double_node = (nodeData, prePointer, nextPointer) => {
    return {
        prev : prePointer,
        data : nodeData,
        next : nextPointer
    }
};