

//Arrow function or using turnery operator

const bigNum=(num1,num2)=>{
    return (num1>num2)? num1:num2;
}

console.log(bigNum(55,50));

//optimzition the code also if single return;


const bigNum1=(num1,num2)=>(num1>num2)? `${num1} is greater `:`value is less ${num2}`;

console.log(bigNum1(-56,-50));
console.log(bigNum1("india","Hindustaan"));   //not work properly string
console.log(bigNum1(-56,50));
console.log(bigNum1(56,-50))



const stringCheckbig=(str1,str2)=>(str1.length>str2.length)? true:false;
console.log(stringCheckbig("india is greate","hindustan")); 