function jsFun(){
    for (i=1;i<10;i++){
        j=i*2;
        document.write("2 x " + i + " = " + j+"<br>");
    }
}
jsFun();


///////////  function with parameters
function paraFun(x, y) {
    var z = x*y;
    document.write("Function wid parameter : multiply 10 and 20 : " + z +"<br>");
}
paraFun(10, 20); 

///Self executing anonymous function
(function(){
    alert("Self executing msg");
    console.log("Log : This is anonymous function");
    console.error("Error :Read about anonymous function");

})();

var d = (function(a,b){
    return a+b;
   alert("Sum of " +a+" & "+b+" is : "+ d);
})(10,15);
document.write("Sum is : "+d);