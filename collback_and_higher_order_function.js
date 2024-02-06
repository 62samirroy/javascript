const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{  //this is a collback function 
    return a-b;   
}
const mul=(a,b)=>{
    return a*b;
}
const div=(a,b)=>{
    return a/b;
}

const calculater=(num1,num2,operator)=>{
  return operator(num1,num2);
}
// calculater(2,3,add) //this is a higher order function
console.log(calculater(2,3,add));