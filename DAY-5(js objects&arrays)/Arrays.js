//literalway

let arr=[10,20,30,40,50,60];
console.log(arr);

//using new keyword
const skills=new Array("java",'javascript','python');
console.log(skills);
console.table(skills);

//aRRAY inbuilt functions
let productPrices=[400,5432,354,45,654];
console.log(productPrices);
productPrices.push(1200); //insert
//can push even multiple elements into the array -- one way of inserting
productPrices.push(...arr); //ES6 makes arrays destructured and inserts arr elements to productPrices array
//insert new elements in the last index
//if dots is not used then array is printed as a separate array in the productPrices array

productPrices.pop(); //removes the last index element from the array
console.log(productPrices);
console.log(productPrices.pop()); //which element is removed that number is displayed

//push new element at zeroth index
productPrices.unshift("hello",true);
console.log(productPrices);


//remove first element in array
productPrices.shift();
console.log(productPrices);


//splice effects the original array
productPrices.splice(5,3);//for deleting the elements start index,no.of elements to be deleted
//insert and delete elements in between the array 
console.log(productPrices);

productPrices.splice(4,0,53); //for inserting index,number of elements, the numbers to be inserted


//replace to js by deleting the elements in between we can use splice
productPrices.splice(1,productPrices.length-2,"JavaScript");
console.log(productPrices);


//does not effect the original array
productPrices.slice(1,10);
console.log(productPrices);
console.log(productPrices.slice(1,10));//starting index is included

console.log(productPrices.reverse());
productPrices.sort();



//only for arrays map,filter,reduce

//for-in loop only to fetch the index values we use this loop
let arr1=[9,32,34,42,52];
let str="JavaScript";

for(index in arr1){
    console.log(index);
}

//for-of loop to fetch the values
for(index of arr1){
    console.log(index);
}

//can be used for arrays and string -- for-in , for-of
for(index of str){
    console.log(index);
}


//for-each loop -- fetch index and values at a time
arr1.forEach((val,inx,newArr)=>{
    console.log(val,"->",inx,"->",newArr);
});

//map functions
let prices=[345,234,4535,65,342,4535];
console.log(prices);
let DiscountedPrices=prices.map((x)=>{
    return(x-x/10); //discount
});
console.log(DiscountedPrices);

let gst=prices.map((y)=>{
    return(y+y/100*8);
});
console.log(gst);


const filteredDis=DiscountedPrices.filter((x)=>{
    return x>=300 && x<=3000
});
console.log(filteredDis);
//reduce function