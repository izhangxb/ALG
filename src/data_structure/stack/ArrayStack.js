class ArrayStack {

    constructor(i) {
        this.items = new Array(i);
        this.maxSize = i;
        this.count = 0;
    }

    push(item){
        if(this.count === this.maxSize){
            console.log("stack is full!");
            return "";
        }
        this.items[this.count] = item;
        this.count ++;
    }

    pop(){
        if(this.count === 0){
            return "";
        }

        let result = this.items[this.count -1];
        this.items[this.count-1] = null;
        this.count --;
        return result;
    }

    print() {
        console.log(this.items)
    }

}



let stack = new ArrayStack(3);
stack.push("1");
stack.push("2");
stack.push("3");

stack.print();

stack.pop();
stack.pop();

stack.print();

