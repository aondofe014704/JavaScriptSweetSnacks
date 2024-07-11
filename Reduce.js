const myArray = [1, 2, 3, 4, 5];

const initialValue = 0;


const sumWithInitial = myArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  
  console.log(sumWithInitial);