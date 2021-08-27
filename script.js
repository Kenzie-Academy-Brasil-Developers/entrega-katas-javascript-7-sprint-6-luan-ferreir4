//Funções CallBack
const printOrdinals = (element) => {
    return `${element}º`
}

const addFour = (element) => {
    return element + 4;
}
const sum = (acc, current) => {
    return acc + current;
}

const isOdd = (element) => {
    return element % 2 !== 0;
} 
const isEven = (element) => {
    return element % 2 === 0;
} 
const isDivisibleByFive = (element) =>{
    return element % 5 === 0;
}

const biggerThanSeven = (element) =>{
    return element > 7;
}

const moreThanTenChars = (element,array) => {
    return element.length > 10;
}
const lessThanFiveChars = (element) => {
    return element.length > 10;
}

const isPrime = (element) => {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
}

//Início
let testeArr1 = [1,2,3];
const newForEach = (array, callBack) => {
    for(let cont = 0; cont < array.length; cont++){
        callBack(array[cont]);
    }
}
newForEach(testeArr1, printOrdinals);

let testeArr2 = [1,'a',3, 7, 9];
const newFill = (array, value, start) => {
    for(let cont = start; cont < array.length; cont++){
        array[cont] = value;
    }
    
    return array;
}
newFill(testeArr2, 'Gotcha', 2);

let testeArr3 = [1,2,3,4];
const newMap = (array, callBack) => {
    let outputArr = [];
    for(let cont = 0; cont < array.length; cont++){
        let result = callBack(array[cont]);
        outputArr.push(result);
    }
    
    return outputArr;
}
newMap(testeArr3, addFour);

let testeArr4 = [6,4,2,1,8,10,-12];
const newSome = (array, callBack) => {
    let output = false;
    for(let cont = 0; cont < array.length; cont++){
        let item = array[cont];
        if(callBack(item)){
            output = true;
        }
    }

    return output;
}
newSome(testeArr4, isOdd);

let testeArr5 = [3,2,1,5,5,8];
const newFind = (array, callBack) => {
    let output = null;
    for(let cont = 0; cont < array.length; cont++){
        let item = array[cont];
        if(callBack(item)){
            output = item;
        }
    }
  
    return output;
}
newFind(testeArr5, biggerThanSeven);

let testeArr6 = [7,4,1,8,2];
const newFindIndex = (array, callBack)=>{
    let output = -1;
    for(let cont = 0; cont < array.length; cont++){
        let item = array[cont];
        if(callBack(item)){
            output = cont;
    
            return output;
        }
    }
}
newFindIndex(testeArr6, isPrime);

let testeArr7 = [2,2,1,2,2];
const newEvery = (array,callBack)=>{
    let output = true;
    for(let cont = 0; cont < array.length; cont++){
        let item = array[cont];
        if(!callBack(item)){
            output = false;
        }
    }

    return output;
}
newEvery(testeArr7, isEven);

let testeArr8 = [3,15,6,25,300];
const newFilter = (array,callBack)=>{
    let outputArr = [];
    for(let cont = 0; cont < array.length; cont++){
        let item = array[cont];
        if(callBack(item)){
            outputArr.push(item);
        }
    }

    return outputArr;
}
newFilter(testeArr8, isDivisibleByFive);

let alpha = ["a", "b", "c"];
let numeric = [1, 2, 3];
let testString1 =  "Hello Q2";
const newConcat = (...elements)=>{
    let output = [];

    for(let cont = 0; cont < elements.length; cont++){
        let arr = elements[cont];

        for(let contArr = 0; contArr < arr.length; contArr++){
            let item = arr[contArr];
            output.push(item);
        }

    }
    
    return output;
}
newConcat(alpha,numeric,testString1);

let testeArr9 = [1,2,8,4,3,0];
const newIncludes = (array, element)=>{
    let output = false;
    for(let cont = 0; cont < array.length; cont++){
        let item = array[cont];
        if(item === element){
            output = true;
        }
    }
 
    return output;
}
newIncludes(testeArr9, 0);

let testeArr10 = [1,4,8,16]
const newIndexOf = (array, element, start)=>{
    let output = -1;

    if(start === undefined){
        for(let cont = 0; cont < array.length; cont++){
            let item = array[cont];
            if(item === element){
                output =  cont;
            }
        }
    }

    for(let cont = start; cont < array.length; cont++){
        let item = array[cont];
        if(item === element){
            output =  cont;
        }
    }

    return output;
}
newIndexOf(testeArr10, 8, 1);

let testeArr11 = ['Saudades', 'do', 'Q1']
const newJoin = (array, separator)=>{
    let output = "";
    for(let cont = 0; cont < array.length; cont++){
        let item = array[cont];

        if(item !== array[array.length -1]){
            item += separator;
        }
        output += item
    }

    return output;
}
newJoin(testeArr11, ' - ');

// let testeArr12 = [1,2,3];
// 
// }
// newReduce(testeArr12, sum);


//EXTRAS
// const newSlice = (array)=>{

// }

// const newFlat = (array)=>{
    
// }

// const newFlatMap = (array)=>{

// }

// const newArrayOf = (array)=>{
    
// }