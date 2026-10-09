function* generatorFun(){
    yield a=10;
    yield b=20;
    console.log("hello");
}
let res=generatorFun();
console.log(res.next().value);
//console.log(res.next().value);
console.log(res.next());