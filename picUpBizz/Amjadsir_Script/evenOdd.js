const evennumber=(num)=>{
    if(num%2===0){
         return `number is even number ${num}`;
    }else{
        return `number is odd ${num}`;
    }
}


console.log(evennumber(20));
console.log(evennumber(23));
console.log(evennumber(25));
console.log(evennumber(26));

//optimization of program using turnery operator;
//condition ? true:false

const evennumber1=(num)=>{
  return (num%2===0)? `${num} this is even number`:`${num} this is Odd number`;
}

console.log( evennumber1(20))
console.log( evennumber1(23))
console.log( evennumber1(25))
console.log( evennumber1(28))

//simplyfy again if single return
const evennumber2=num=> (num%2===0)? `${num} this is even number`:`${num} this is Odd number`; 
console.log( evennumber2(35));