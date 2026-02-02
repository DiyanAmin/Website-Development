var myObj = {name: "Noname",age:-1,grade:20};
 
var myJSON=JSON.stringify(myObj);

newObj = JSON.parse(myJSON);

console.log(newObj.grade);