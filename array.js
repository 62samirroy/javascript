// const myfrind=['samir','rahul','rohit',true,13];
const myfrind=['samir','rahul','rohit'];
const number=[1,12,2,4,1,11];

// traversal in array------------------------------------------------------------->

// console.log(myfrind[myfrind.length-1]);
// console.log(myfrind.length);

// for loop thru 

// for(let i=0;i<myfrind.length;i++)
// {

// console.log(myfrind[i]);
// }

// for in loop_--------------------------------------------------------------------------->


// for(let eliment in myfrind){
//     console.log(myfrind[eliment]);
// }


// for of loop--------------------------------------------------------------------->

// for(let eliment of myfrind){
//         console.log(eliment );
//     }



// foreach function ------------------------------------------------------------------>

// myfrind.forEach(function(eliment,index,array) {
//     console.log(eliment +'index'+index);
// });

// myfrind.forEach((element,index,array) => {

//     console.log(element +'index'+index);
    
// });

// searching and filter in Array --------------------------------------------------------------->

// index of methord >>>>>>>>>>>>>>>>>>>>>>>>
// Array.prototype.indexOf

// let index=myfrind.indexOf('samir');
// let index=myfrind.indexOf('samir',2);
// let index=myfrind.lastIndexOf('samir');
// console.log(index);


// sorting------------------------------------------------------------------------>

// console.log(number.sort());



// push-------------------------------------------------------------------------->

// myfrind.push("harry");
// console.log(myfrind);
// console.log(number);
// number.unshift(8,9);
// console.log(number);

// push return new array length

// pop------------------------------------------------------------------------->

// console.log(myfrind);
// console.log( myfrind.pop());
// console.log(myfrind);


// console.log(myfrind);
// console.log(myfrind.shift());
// console.log(myfrind);

// splice methord---------------------------------------------------------------->

// const you=myfrind.splice(3,0,'desc');

// const you=myfrind.splice(myfrind.length,0,'desc');
// console.log(you);
// console.log(myfrind);

// update----------------------------------------------------------------------->

// const scarch=myfrind.indexOf('rohit');
// if(scarch != -1)
// {
//    const updatem= myfrind.splice(scarch,1,'roHit');
//    console.log(myfrind);
// }
// else{
//     console.log('no such data found');
// }


// map------------------------------------------------------------------------>

// let newarr=number.map((curent,index,arr)=>{
//     return curent>9
// })

// let newarr=number.map((curent,index,arr)=>{
//     return `index no ${index} and the value is ${curent} beling to ${arr}`
// })

// console.log(number);
// console.log(newarr);

// let newarr=number.forEach((curent,index,arr)=>{
//     return `index no ${index} and the value is ${curent} beling to ${arr}`
// })

// console.log(number);
// console.log(newarr);

// qusection 1.find the all eliment suarroot=======================================>

// let newarr=number.map((curenteli,index,arr)=>{

//  return Math.sqrt(curenteli);

// })

// console.log(newarr);


// qusection 2 .all eliment multiply by 2 and return eliment gater then 10===============>

// let newarr=number.map((curenteli)=>{

//     return  curenteli*2 ;
    
// }).filter((curenteli)=>{

// return curenteli>10;

// }).reduce((accumaltor,curenteli)=>{
//     return accumaltor +=curenteli;
// })
// console.log(newarr);

// reduce methord---------------------------------------------------------------->

// let sum=number.reduce((accumulator,curnteli,index,arr)=>{

// return accumulator +=curnteli;


// },number.length+1)
// console.log(sum);

// how to flat of an array


// const number2=[
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8',['zone_9','zone_10']]
//  ];

// const number2=[
//    ['zone_1','zone_2'],
//    ['zone_3','zone_4'],
//    ['zone_5','zone_6'],
//    ['zone_7','zone_8',['zone_9','zone_10'],['zone_9','zone_10']]
// ];

// console.log(number2.flat(2));
// console.log(number2.flat(Infinity));


// let falatarr=number2.map((accumat,curenteli)=>{

//     return accumat.concat(curenteli);

// })

console.log(falatarr);


// Array include

// let ispresent=myfrind.includes("samir");
// let ispresent=myfrind.includes("hi");
// console.log(ispresent);
