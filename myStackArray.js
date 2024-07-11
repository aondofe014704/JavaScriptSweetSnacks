class Stack {
    constructor() {
        this.items = [];
    }
    testThePushMethod(params) {
    this.items.push(params);
    return this.items;
    }
    testThePopMethod(params) {
        this.items.pop(params);
        return this.items;
    }
}







module.exports = Stack;