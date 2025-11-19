class abc{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    abc(){
console.log(this.a+this.b)
    }
}
const obj= new abc(10,20)

obj.abc()