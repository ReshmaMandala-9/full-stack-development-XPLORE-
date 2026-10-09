/* let obj={
    name:"sai",       // obj is the obj and name ,age are keys.
    age:20,
    fun:function(){
        console.log(this.age);  // this keyword is used to access the properties of the object.
    }
    let obj2={
        name:"sai",       // obj is the variablename and name ,age are keys.
        age:20,
    fun:()=>{
                                  //console.log(age);// gives a error like age i snot defined
        console.log(this.age);  // anonymous function: function doesn't have it's name is called anonymous function.
    }       // o/p: undefined because it targets the windows object. 
}

let arrfun=()=>{ let a=10;
    console.log("This is the arrow function");//declaration statement
    console.log(a);  
            }            // i fthe arrow function contains more than one statement braces needed so,it throws a error.
arrfun();
arrfun();
arrfun();
arrfun(); // we can call the same function multiple times.



// arrow functions with parameters
const logindetails=(username,password)=>{
    console.log(`username:${username}`);
    console.log(`password:${password}`);

    return "Login successful";                             // to access outside ,use return type as the variable is block scoped.
}
// logindetails() // without passing parameters , it will give undefined values for username and password.
 let res=logindetails("admin@123","admin@12");  // we can pass the parameters to the arrow function.
console.log(res);
console.log(logindetails("user!123","user@12"));




// Nested functions
function outerfun(){
    console.log("Outer Executing....");
    let a=10;
    function innerfun(){
        console.log("Inner Executing...");
        console.log(a);


    }
    innerfun();  // as we are not returning the innerfunction,it should be called in side only and we have no access for it in outside.
}
outerfun();


function outerfun(){
    console.log("Outer Executing....");
    let a=10;
    function innerfun(){
        console.log("Inner Executing...");    //closure?? 
        return a++;


    }
    return innerfun();  // as we are not returning the innerfunction,it should be called in side only and we have no access for it in outside.
}
let result=outerfun();
console.log(result);
console.log(result);
console.log(result);
console.log(result);


// Any functions accept another function as a parameter 

function Homepage(){
    console.log("Homepage");
}
function Loginpage(){
    console.log("User login Successfully");
}
function RegisterPage(){
    console.log("User register successfully");
}
Homepage(RegisterPage(),Loginpage()); // IRR function is homepage ,which is accepted another two functions.
                                       // first executed function is registerpage,login page and then homepage


function display(setValues,getValues){
    setValues();
    getValues();

}
display(()=>{

});


//callback function
 Any functions that will be pass as a parameter to thr IRR function,that functions we call as a callback function.
 function Homepage(){
    console.log("Homepage");
}
function Loginpage(){
    console.log("User login Successfully");
}
function RegisterPage(){
    console.log("User register successfully");
}
Homepage(RegisterPage(),Loginpage()); // IRR function is homepage ,which is accepted another two functions.
                                  // registerpage,loginpage are call back functions.


// generator function    declaration:function*
function* generatorFun(){
    yield a=10;
    yield b=20;       // yield is the 
    console.log("This is the generator function");
}
let res=generatorFun();
console.log(res.next().value);   // to access the varibles using yiels ,we use next();
console.log(res.next().value);
console.log(res.next());
console.log(res.next());
console.log(res.next());  // value:undefined  done:true




generatorFun();




