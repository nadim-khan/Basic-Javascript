////objects

var person = new Object();
person.name="Nadeem";
person.lname="khan";
person.age=25;
person.fullName=function(){
    return (person.name+" "+person.lname);
}
alert("Welcome " + person.fullName() + " Your age is : " + person.age);


///////////////////Array
var color=["red","green","blue","violet"];
//document.write("colors are : "+color[0]);
//alert(z);
z=color.length;
for(i=0;i<z;i++){
    document.write("color : "+color[i]+"<br>");
}

alert(color.sort());