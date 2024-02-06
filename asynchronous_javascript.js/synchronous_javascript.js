const fun2=()=>{
    console.log("fonction 2 colling ");
}

const fun1=()=>{
    console.log("function 1 colling ");
    fun2();
    console.log("function 1 is colling agin");
}
fun1();