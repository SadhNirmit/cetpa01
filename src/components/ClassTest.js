class Class1 {
    static s1=1;
    static s2=2;
    constructor() {
        this.x=5;
        this.y=7;
    }
}

var ob1 = new Class1();
var ob2 = new Class1();
console.log(ob1,ob2)
ob1.x=25;
ob1.y=45;
ob2.x=55;
ob2.y=75;
console.log(ob1,ob2)