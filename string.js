let myname="samir roy";
let ytname='roy ff';

// console.log(myname);
// console.log(ytname);

//lenth in string --------------------------------------------->

// console.log(myname.length);

// escape carater---------------------------------------------------->

// let anysentence="we are the so-colled 'viking' from the month" ;
// let anysentence='we are the so-colled "viking" from the month'; 
// let anysentence="we are the so-colled \"viking\" from the month"; 
// console.log(anysentence);

// finding a string in a string ---------------------------------------->

// console.log(myname.indexOf("roy"));
// console.log(myname.lastIndexOf("roy"));

// let scarching=myname.search("roy");
// console.log(scarching);

// slice methord--------------------------------------->
// slice(start,end)
// let str=myname.slice(0,3);
// let str=myname.slice(3,-2);
// console.log(str);

// qusection.1
// 280 charatcters not enter 

// let str=myname.slice(0,280);
// console.log(str);

// substring methord---------------------------------------->

// let str=myname.substring(3,-2) //nagtive value is not count
// console.log(str);

// replace string-------------------------------------------->

// let str=myname.replace('roy','Roy');
// console.log(str);
// console.log(myname);

// position at----------------------------------------------->
// let str=myname.charAt(0);
// let str=myname.charCodeAt(0);
// console.log(str);

// q2.last charter askicode--------------------------------->

// let index=myname.length-1;
// let str=myname.charCodeAt(index);
// console.log(str);

// concat methord

// let fname="samir hii";
// let lname="roy";
// console.log(fname+lname);
// console.log(`${fname} ${lname}`);
// console.log(fname.concat(lname));
// console.log(myname.trim());                                                  
var txt="a,b,c,d,e";
var txt="a,b, c,d,e";
var txt="a,b,c,|,d,e";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));

