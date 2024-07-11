

const Stack = require('./myStackArray')

test("test to test the push method on an array", () => {
    let myStack = new Stack();
    expect(myStack.testThePushMethod(4)).toEqual([4]);
});

test("test to test the pop method on an array", () => {
    let myStack = new Stack();
    myStack.testThePushMethod(8);
    let myStack1 = new Stack();
    expect(myStack1.testThePopMethod(8)).toEqual([]);
});



// const reduce = require('./Reduce');

// test("test the reduce method on an array", () => {
//     const myArray = [1, 2, 3, 4, 5];
//     expect(testReduceMethod).toEqual(15);
// });