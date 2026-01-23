
class School {
    constructor(students, name) {
        this.name = name;
        this.studentsCount = students; // renamed property

    }

    students() {
        return this.studentsCount;
    }

    title() {
        return this.name;
    }

}

const School1 = new School(1e2, 'Windows Vista School');
console.log(School1.students(), '\n\n');
console.log(School1.title(),'\n');


class Windows11 extends School{
    constructor(accent,default_browser){
        super(1e99999,'Windows 11 School');
        this.Color = accent;
        this.Browser = default_browser;
    }

    static Prefferences(){
        return this.Color,this.Browser;
    }
}

const Windows11Object = new Windows11('red','Microsoft Edge');
if (Windows11.Prefferences()===undefined){
    console.log('ERR 434:\nFATAL')
}