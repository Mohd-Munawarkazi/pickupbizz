

 const   x=25;
  const   y='25';
  const z=x===y;
  console.log(z);

  let a=25;
  let b=35;

  console.log(typeof(typeof(b)));  //typeof(typeof 35) is always string


  console.log(1<5<8);   //true
  console.log(1<5<2);    //true  bcoz first two compare  is(1<5) true value is 1 then again(=>) check one anater(1<2)

 console.log(0 < 5 < 1);  //false 
 console.log(2<=2); //true;
 console.log(2<=1); //false


 //logical gates
/* && and*/
//  tru&&true //true;
//  true&&false //false
//  false&&false //false

 /* ||  or*/

//  true || true = true;
//  true || false = true;
//  false || false= true;


const num =23;
// if(num%2===0){
//     console.log("yes it is a Even number");
// }else{
//     console.log("odd");
// }

num%2===0 && console.log("yes it is a Even number");   //optimization if condition
num% 2 !==0 &&  console.log(" it is a odd number");