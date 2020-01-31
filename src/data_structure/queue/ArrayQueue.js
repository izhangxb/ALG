class CircleQueue {
    constructor(n) {
        this.items = new Array(n);

        this.n = n;

        this.head = 0;
        this.tail = 0;
    }

    enqueue(item) {
        if ((this.tail + 1) % this.n === this.head) {
            //队列已满
            return false;
        }

        this.items[this.tail] = item;

        this.tail = (this.tail + 1) % this.n;

        return true;
    }


    dequeue() {
        if (this.head === this.tail) {
            return null;
        }

        let item = this.items[this.head];
        this.head = (this.head + 1) % this.n;
        return item;
    }

    print() {
        for (let i = this.head; i < this.tail; i++) {
            console.log(this.items[i])
        }
    }
}

let queue = new CircleQueue(5);
queue.enqueue(1);
queue.dequeue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.print();