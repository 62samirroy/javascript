const fun2=()=>{
    setTimeout(()=>{
    console.log("fonction 2 colling ");
},2000)
}

const fun1=()=>{
    console.log("function 1 colling ");
    fun2();
    console.log("function 1 is colling agin");
}
fun1();