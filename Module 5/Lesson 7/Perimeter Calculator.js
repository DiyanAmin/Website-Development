alert('Welcome to perimeter calculator');

var choice = prompt('Enter your choice:\nPerimeter of Circle(circumference)\nPerimeter of Triangle\nPerimeter of Square');

if(choice=='circle'||choice==1){
    let r = prompt('Enter radius of circle');
    circumference = (Number(r)*2)*3.14;
    alert('The circumference is ',circumference);
}else if(choice=='triangle'||choice==2){
    let type = prompt('Enter type of triangle:\nEquilateral\nIsosceles\nScalene');
    if(type=='Equilateral'){
        let side = Number(prompt('Enter length of 1 side'));
        let perimeter = side*3;
        alert('Permeter of triangle is ',perimeter);
    }else if(type=='isosceles'){
        
    }
}