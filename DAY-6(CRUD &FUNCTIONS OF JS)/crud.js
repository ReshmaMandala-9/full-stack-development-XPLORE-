let empDetails={
    name:"lav",
    role:"developer",
    salary:50000,
    skills:["html","css","js"],
    address:{
        city:"pune",
        state:"maharashtra",
        country:"india"
    }
};
//retrieve
console.log(empDetails);
console.log(empDetails.name);
console.log(empDetails.role);;
console.log(empDetails.salary);
console.log(empDetails.skills);
Object.seal(empDetails);// when we seal the new values cannot be added  to the object but we can update the existing values and we cannot delete the existing values.
Object.freeze(empDetails);// when we freeze the object, we cannot update or delete any existing values.
console.log(Object.isSealed(empDetails));// it tells it whether the object is sealed or not
console.log(Object.isFrozen(empDetails)); // it tells it whether the object is frozen or not
//updating the object
empDetails.salary=60000;
empDetails.address.city="Tenali";
empDetails.skills[1]="react";
console.log(empDetails);
// add
empDetails.email="abc@gmail.com";
empDetails.phnno=2345456677;
empDetails.address.pincode=521123;
console.log(empDetails);
//delete
delete empDetails.name;
delete empDetails.address.city;
console.log(empDetails);
//Object Inbuilt functions
console.log("----Object Inbuilt functions----");
console.log(Object.keys(empDetails));//return type pf key is array
console.log(Object.values(empDetails));
console.log(Object.entries(empDetails));// return both key and value in 2D array format