class ThisIsAClass{
    constructor(name){
        this.hesaru = name;
    }

    static StaticFunction(){
        console.log('\nStatic Function called\n\n')
    }

    printName(){
        console.log('Name: ',this.hesaru)
    }
}

class ChildClass extends ThisIsAClass{
    constructor(name){
        super(name);
        this.hesaru = name;
    }
}

ChildClass.StaticFunction();
Objeot= new ThisIsAClass('ChildClass'); //typo intentional
Object.printName();
