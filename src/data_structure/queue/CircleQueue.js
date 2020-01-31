class ArrayQueue{
    constructor(n) {
        this.items = new Array(n);

        this.n = n ;

        this.head = 0;
        this.tail = 0;
    }

    enqueue(item){
        if(this.tail === this.n){
            //队列已满
            if(this.head === 0){
                return false;
            }

            //队列搬移，前移head位
            for (let i = this.head; i < this.tail; i++) {
                this.items[i- this.head] = this.items[i];
            }

            this.tail = this.tail - this.head;
            this.head = 0;
        }
        this.items[this.tail] = item;
        this.tail++;
        return true;
    }


    dequeue(){
        if(this.head === this.tail){
            return null;
        }

        let item = this.items[this.head];
        this.head ++;
        return item;
    }

    print(){
        for (let i = this.head; i < this.tail; i ++){
            console.log(this.items[i])
        }
    }
}

let queue = new ArrayQueue(5);
queue.enqueue(1);
queue.dequeue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.print();