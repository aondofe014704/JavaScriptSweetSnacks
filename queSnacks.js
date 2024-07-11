class Queue{
    constructor(){
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    
    enqueue(item){
        this.items[this.head] = item;
        this.head++;
    }
    dequeue(item){
        this.items[this.tail] = item;
        this.tail++;
    }
    
}