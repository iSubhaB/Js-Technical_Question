// let obj={
//   1:'a',
//   2:"b",
//    "2":"b",
//    [1]:'b'
// }
// console.log(obj);


//  console.log(typeof NaN);
// console.log(NaN==NaN);   //NaN is never equal to anything, not even itself.
// console.log(NaN===NaN);   // NaN is falsy value


// let a= 10
// console.log(++a)
// console.log(a++)
// console.log(a++)
// console.log(a)


// const arr=[1,2,3,4,5,6,7]
// let arr2= arr.map(el=>el>2)
// console.log(arr2)




// console.log(0.1+0.2===0.3)                            //********************* */
// console.log(typeof null) 
// console.log(typeof NaN)  
// console.log(typeof [Object])
// console.log(typeof Object)
// console.log(  NaN(NaN)) //err


// console.log(true && "hellow")
// console.log(false && "Welcome")// `The first operand is false (which is falsy).So JavaScript stops right there (short-circuit evaluation) and returns the first falsy value.Therefore:`



// const arr= [1,2,3,4,5,6]
// const arr2= arr.filter((num)=>{ return num*2})  // there are no condition so it return the array
// console.log(arr2)



//        var arr= {
//             name: "John",
//             age: 30,
//             city: "New York"
//          }
//  for(let k in arr){
//      console.log(k);
//      console.log(arr[k])
//  }



// let counter = 0; // example of impure function
// function increaseCounter() {
//   counter++;
//   return counter;
// }


// console.log(increaseCounter()); // 1
// console.log(increaseCounter()); // 2 (different output, same input!)



// var arr = [1, 2, 3, 4, 5];
// let c = arr.splice(2, 1);
// console.log(arr + "</br>");
// console.log(c + "</br>");



// var arr = [1, 2, 3, 4, 5];
// arr.map((v) => {
//   console.log(v );
// });



// var arr = [1, 2, 3, 4, 5];
// let va = arr.reduce((acc, v, index) => {
//   acc = acc + v;
//   console.log(acc);
//   return acc;
// }, 0);
// console.log(va);


// var arr = [1, 2, 3, 4, 5];
// let va = arr.reduce((acc, v, index) => {
//   acc = acc + v;
//   return acc;
// }, 0);
// document.write(va);


// var arr = [10, 30, 50, 71, 37]; // reverse the array
// let b = arr.reduceRight((acc, v) => {
//   return acc + " " + v;
// });
// document.write(b);


// var arr = [10, 30, 50, 71, 37]; // reverse the array by resverse method
// arr.reverse();
// document.write(arr);


//  var arr= [10,30,50,71,37]       // add the value
// let b=arr.reduceRight((acc,v)=>{
//      return acc=acc+v
// })
//  document.write(b)


// const arr = ['hello',"hi",'welcome','by'];
// arr.reverse();
// console.log(arr);


// console.log(0 == "0");
// console.log("5" + 5);
// console.log("5" - 5);
// console.log(true + 5);



// for (var i = 0; i < 5; i++) {
//   console.log(i);
//   console.log("/n");
//   setTimeout(() => {
//    console.log(i);
//   }, i * 1000);
// }


// console.log(2);
// setTimeout(() => {
//     console.log(3)
// }, 0);
// console.log(4);



// const input1={a:1,b:2, c:3, d:10, e:12}  // return only common value
// const input2={a:2,e:12, f:6 ,d:10}
// function abc(input1, input2){
//   let obj= {}
//  for(let i in input1){
//   for(let k in input2){
//  if(input1[i]==input2[i]){
//     obj[i]=input2[i]
//     }
//   }
//  }
//  console.log(obj);
// }
// abc(input1,input2)


// const input =[1,2,-2,11,7,1]  //sum off all (it will work same as in reduce)
// let arr=input.reduceRight((acc,v)=>{
// acc=acc+ v
// return acc
// })
// document.write(arr)


    //   const input =[1,2,-2,11,7,1]   // reverse the no
    // const arr= input.reverse((v)=>{
    //   return v
    // })
    // console.log(arr)

    //  const input =[1,2,-2,11,7,1] 
    //  console.log( input.reverse())
    


//     const arr2= input.sort((a,b)=>a-b)  // sort the numbber
//     console.log(arr2)


// const input =[1,2,11,7,1,84]   // max value -- for -of directly print the value where for in index
// let max= input[0]
// for(let val of input){
//   if(val>max){
//     max=val
//   }
// }
// document.write (max)


// const input =[1,2,-2,11,7,1]   // 2nd highest no print
// let sortvalue= input.sort((a,b)=>a-b)
// console.log(sortvalue[sortvalue.length-2])


// let arr=input.sort((a,b)=>{  // short small to big
//   return a-b
// })
// document.write(arr[arr.length-1]) // after short here printing 2nd index from last


// const arr= [5,7,9,11,15,17] // find missing odd no
// let missing=0;
// for (let i=0;i<arr.length;i++){
//   if ((arr[i]+2)!==arr[i+1]){
//     missing=arr[i]+2
//     break;
//   }
// }
//    console.log(missing);


//  const arr = [5, 7, 9, 11, 15, 17, 21]; // find multiple missing  missing odd no
// let missing = [];
// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] + 2 !== arr[i + 1]) {
//     missing.push(arr[i] + 2);
//   }
// }
// document.write(missing[1]);


// const str= 'This is Javascript Code'  // revesre every word and sequence will be same
// const arr= str.split(" ")
// const arr2= arr.map((v)=>{
//       return v.split("").reverse().join("")
// })
// console.log(arr2.join(" "))


// const str = "this is javascript and you to find max char"; // find max char of this string


// let maxchar = "";
// let arr = str.split(" ");
//  let max = arr[0].length
// arr.map((v) => {
//   if (v.length > max) {
//     max = v.length;
//     maxchar = v;
//   }
// });
// console.log(maxchar);


// const f=function(){   //call back function
//   console.log("say hellow")
// }
// function abc(func){   // higher order function
// return func();
// }
// abc(f)


// let arr = [1, 5, 3, 4][(1, 2, 3)];  //   arr  =[1,5,3,4][3]
//                                     //   arr  = index of 3 is 4
//                                     // output 4
//   document.write(arr);


// let obj = {
//   1: "a",
//   2: "b",
//   2: "b",
//   [1]: "b",
// };
// console.log(obj);


// {
//   function fun() {
//   console.log("Hellow");
//   }
// }
// fun();


// console.log("1" + 2 + 2);
// console.log(2 + 2 + "1" + 2 + 2);
// console.log("2"-"2");
// console.log(2-"2");


// function abc(a, b, c) {}
// console.log(abc.length);
// //
// function xyz(a, b, c = 0) {}
// console.log(xyz.length);
// //
// function pqr(a = 0, b, c) {}
// console.log(pqr.length);


// const str = "MyNameIsSubhaBiswas";
// let space=''
// for(let i=0;i<str.length;i++){
//   if(str[i]==str[i].toUpperCase()){
//     space= space+" "+str[i];
//   }else{
//     space=space+str[i];
//   }
// }
// console.log(space); // Output: "My Name Is Subha Biswas"


//  const str = "MyNameIsSubhaBiswas";
//  let value= ''

//  for (let i=0;i<str.length;i++){
//     if(str[i]==str[i].toUpperCase()){
//         value= value+" "+str[i]
//     }else{
//         value= value+str[i]
//     }
//  }
//  console.log(value)



//    const days = ["Sunday", "Tuesday", "Thursday", "Saturday"];


// const fou=days.find((day)=>{
//       return day.startsWith("S")
// })
// console.log("find:", fou);


// const allContainA = days.every((day)=>{
//       return day.includes("a")
// })
// console.log("every:", allContainA);


// const hasThursday = days.some(day => day === "Thursday");
// console.log("some:", hasThursday);


// const arr=[1,2,3,4,5,6]
// arr.splice(2,2,90)
// document.write(arr) // 1,2,90,5,6


// const arr= [1,2,3,4,5,6];
// console.log(arr.includes(2))


//Delete last 3 elemnet of a array
// const arr=[1,2,3,4,5,6]
// arr.splice(-3,3)
// console.log(arr)


// const arr= [1,2,3,4,5]
// const res= arr.reduce((avv,val)=>{
//   return avv>val
// })
// console.log(res)


// const arr=[1,3,4,8,4,6,5,3] // print the index in which combine value is 10
// let arr2=[]
// for (i=0;i<arr.length;i++){
//   if(arr[i]+arr[i+1]==10){
//     arr2.push(i,i+1)
//   }
// }
// console.log(arr2)


// console.log(isNaN("subha"));


// const arr=[1,2,3,4,5,6,7]
// let arr2= arr.map(el=>el=2)
// console.log(arr2)


// console.log({}=={})
// console.log({}==={})


// const str="my name is subha biswas"
// let arr = str.split(" ")
// let max= arr[0]
// for (let k of arr){
//     if(max.length<k.length){
//         max=k
//     }
// }
// console.log(max)


// const str="my name is subha biswas"

// let arr= str.split(" ")
// let max= arr[0]
// for (let i=0;i<arr.length;i++){
//     if(arr[i].length>arr[0].length){
//         max=arr[i]
//     }
// }
// console.log(max)


// console.log(isNaN("subha"))


// const arr1=[1,2,3,4,5,6]
// const arr2=[6,3,7,8,9,10,4]


// let common=[];


// for (let i=0;i<arr1.length;i++){
//     for(let j=0; j<arr2.length;j++){
//         if(arr1[i]==arr2[j]){
//             common.push(arr1[i])
//         }
//     }
// }
// console.log(common)


// console.log("subah"-100)


// function abc(){
//     var a= 100;
// }
// console.log(a)


// const arr= [1,2,3,4,4,5,5,8,8]  //filter out all duplicate
// const arr2= new Set(arr)
// console.log(arr2)


//  const arr= [1,2,3,4,4,5,5,8,8] 
//  let arr2= []
// let arr3= []
//  for(let i=0;i<arr.length;i++){
//     if(arr2.includes(arr[i])){
//      arr3.push(arr[i])
//     }else{
//         arr2.push(arr[i])
//     }
//  }
//  console.log(arr2)
//  console.log(arr3)


// const arr= [1,2,3,4,4,5,5,8,8]
// const unique = arr.filter((v)=>{
//      return arr.indexOf(v)==arr.lastIndexOf(v)
// })
// console.log(unique); // [1, 2, 3]



// const arr=[1,3,4,7,9,4,2]  // find the two elemnet which total value is 10
// const tar= 10
// const arr2= []


// for (let i=0;i<arr.length;i++){
//   for (let j=i+1;i<arr.length;i++){
//     if (arr[i]+arr[j]==10){
//       arr2.push(arr[i])
//        arr2.push(arr[j])
//     }
//   }
// }
// console.log(arr2)


// const arr=[1,2,3,3,4,4,5,6,9,9] // new array with no repeiting value


// const arr2= new Set(arr)
// console.log(arr2)


// const arr= [10,20,50,87,28,95]  // find max no // way1


// let arr2=arr.sort((a,b)=>a-b)
// let min= arr2[0]
// let max=arr2[arr.length-1]
// console.log(max)
// console.log(min)


// const arr= [10,20,50,87,28,95]   // find max
// let max= arr[0]
// for (let k of arr){
//   if(arr[0]<k){
//     max= k
//   }
// }
// console.log(max)


// const str= "my name is subha biswas"  //find max length word
// const arr= str.split(" ")
// console.log(arr);
// let max= arr[0]
// for (let k of arr){
//   if(max.length<k.length){
//     max= k
//   }
// }
// console.log(max)


// const arr= [10,20,50,87,28,95] // delete 1st value
// arr.shift()
// console.log(arr)

// const arr= [10,20,50,87,28,95] // delete last value
// arr.pop()
// console.log(arr)

// const arr= [1,8,8,4,4,6,7,9]    // find the reapiting value value
// const arr2=arr.sort((a,b)=>a-b)
// const arr3=[]
// for(let i=0;i<arr2.length;i++){
//   if(arr2[i]==arr2[i+1]){
//       arr3.push(arr2[i])

//   }
// }
// console.log(arr3);

// const arr= [1,8,8,8,8,4,4,6,7,9]    // find the reapiting value from multi repeiting  value
// const arr2=arr.sort((a,b)=>a-b)
// const arr3=[]

// for (let i=0;i<arr2.length;i++){
//       if(arr2[i]==arr2[i+1]){
//             if(arr3.includes(arr[i])){

//             }else{
//           arr3.push(arr2[i])
//             }
//       }
// }
// console.log(arr3)


// const arr = [1, 3, 4, 7, 9, 9, 4, 2]; //finding not reapeing value
// let arr2= arr.filter((v)=>{
// return arr.indexOf(v)==arr.lastIndexOf(v)
// })
// console.log(arr2);


// const num=6   //factorial of the number
// let fac=1;
// for (let i=1;i<=num;i++){
//   fac=fac*i
// }
// console.log(fac)

// const str= "oyo"  // find if this palindrom or not

// const arr= str.split('').reverse().join("")
// function abc(){
//   if(str==arr){
//     console.log("palindrome")
//   }else{
//     console.log("Not palindrome");
//   }
// }
// abc()

//

// const arr = [1, 2, 3, 4, 5, 6];  // find the both array is equal or not    ////////////////////////////
// const arr2 = [1, 2, 3, 4, 5, 6];

// if (arr.length !== arr2.length) {
//   console.log("Not equal");
// } else {
//   const isEqual = arr.every((v, i) => v === arr2[i]);
//   if (isEqual) {
//     console.log("Equal");
//   } else {
//     console.log(`Not equal`);
//   }
// }




// let num =7   // number series
// for (let i=1;i<=10;i++){
// console.log(`${num}*${i}=${num*i}`)
// }

// function abc(a,b,c){

// }
// function pqr(a=0,b,c){

// }
// console.log(pqr.length)

// const str= "my name is subha biswas"  // print 1st charrecter as Capital

// let arr= str.split(' ')
// let arr3=arr.map((v)=>{
//       let k=v.split("")
//       return (k[0].toUpperCase()+k.slice(1,v.length).join(""))
// })
// console.log(arr3.join(" "))



// const a= [8,9,10,11,12]
// function abc(b,...a){   // WHAT WILL PRINT  a . and if ...a is npot present then?
//       console.log(a)
// }
// abc(20,30,40,50,60)

// const obj = { a: 1, b: 2, c: 3 };
// const arr= Object.values(obj)
// console.log(arr)

// const obj = { a: 1, b: 2, c: 3 };
// const arr= Object.keys(obj)
// console.log(arr)

//  const obj = { a: 1, b: 2, c: 3 };
//  const arr= Object.entries(obj)
//  console.log(arr)



// const arr=[100,"a",20,"Subha","biswas","b",30];
// const arr2=[];
// const number=[];
// const ch=[];

// arr.forEach((ele)=>{
// if(typeof ele=="number"){
//       arr2.push(ele)
// }else if(typeof ele =="string"){
//       if(ele.length>1){
//             number.push(ele)
//       }else{
//              ch.push(ele)
//       }
// }
// })
// console.log(number)
// console.log(ch)
// console.log(arr2)



// const arr = [100, "a", 20, "Subha", "biswas", "b", 30];


// const arr2 = arr.filter(e => typeof e === "number");
// const number = arr.filter(e => typeof e === "string" && e.length > 1);
// const ch = arr.filter(e => typeof e === "string" && e.length === 1);

// console.log(number); // ["Subha", "biswas"]
// console.log(ch);     // ["a", "b"]
// console.log(arr2);   // [100, 20, 30]


//  const obj= {
//       NAME:"Subha",
//       roll:20,
//       sub:"math",
//       add:"rathtala"
//  }
//  const {NAME,...oth}=obj;   //distructuring
//  console.log(NAME);
//  console.log(oth)


// const obj2={
//       dist:"burdWAN",
//       state:"west bengal"
// }

// const obj3={...obj,...obj2}
// console.log(obj3)



// const obj1={};
// const obj2={
//       name:"Subha BIswas"
// }
// const obj3={
//       name:"Rajdeep Guha"
// }
// obj1[obj2]={
//       name:"Debraj Das"
// }
// obj1[obj3]={
//       name:"Amar Debnath"
// }
// console.log(obj1)
// console.log(obj1[obj2])  //obj1 of something means only obj1. so it will print latest value of it



// function sum(a,b){
//       if(a && b){
//             return a+b
//       }else{
//             return function (c){
//                   return a+c
//             }
//       }
// }
// console.log(sum(8,9));
// console.log(sum(8)(9));

// console.log(null===undefined)
// console.log(null==undefined)  //Because both null and undefined mean “no value”
// // value of both are same

//swap two number without any extra variable
// let a=10;
// let b=29
//method 1
// a = a + b; // a = 39
// b = a - b; // b = 10
// a = a - b; // a = 29

//method 2
// let a = 10;
// let b = 29;
// [a, b] = [b, a];
// console.log(a); // 29 10

// function a(abc){
//       console.log(abc)
// }
// a(8,9,10)  // what will be thye out

// if([]){      // object always truthy value
// console.log("first")
// }else{
//       console.log("2nd")
// }

// if([]==true){      // object always truthy value  . so here true will convert to 1 and [] will convert to "". so ""==1 is false
// console.log("first")
// }else{
//       console.log("2nd")
// }

// if([]==[]){      // here both array has separate referench. so it false
// console.log("first")
// }else{
//       console.log("2nd")
// }

// in how many way we can access a object property.
// const obj = {
//   Name: "Subha",
//   age: 29,
// }
// const { Name, age } = obj
// console.log(Name)

// const obj = {   // how to access the nedted property
//   Name: "Subha",
//   age: 29,
//   num: {
//     math: 89,
//     science: 98
//   }
// }
// const {num:{math,science}}=obj
// console.log(math)
// console.log(science)



// let abc = 100;
// if (function xyz() { }) {
//   abc = abc + typeof xyz;
// }
// console.log(abc);
//   // here function is not declaration . it work like function expression and it work like Scoping. so thats why it will undefine outside scop




// const obj={
//   xyz:"Subha",
//   pqr: function (){
//     console.log(this.xyz)
//   }
// }
// const c= obj.pqr; // store the refernce
// obj.pqr()  // calling the functin. its good
// c()// cant call function bcz c is reference of pqr




// const arr= ["Subha","abc","xyz"]
// const ans= arr.includes("abc",2)  // from 2 it will start searching
// console.log(ans)


// const obj= {
//   name:"Subha",
//   roll:29,
//   mark:{math:23,
//         chem: 54
//   }
// }

// //Deep Copy= deep copy does not chnage the original obj value
// const obj2={...obj}
// obj2.name="Samir"
// obj2.mark.math=100
// console.log(obj.name)
// console.log(obj.mark.math)

// // shalow copy: its change the original obj value also
// const obj3= obj
// obj3.name="Samir"
// obj3.mark.chem=200
// console.log(obj.name)
// console.log(obj.mark.chem)


// class abc {                       //Class Example  
//     constructor(age,name){
//         this.age=age;
//         this.name=name
//     }
//       bca(age,name) {
//         console.log(`name is ${this.name}`) 
//     }
// }
// const obj= new abc(23,"subha")
// obj.bca()




// const arr = [1, 2, 4, 4, 5, 6, 7, 7, 7, 8];
// const arr2 = arr.sort((a, b) => a - b);
// let arr3 = []; // repeating
// let arr4 = []; // non-repeating

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2.indexOf(arr2[i]) !== arr2.lastIndexOf(arr2[i])) {
//     // repeating
//     if (!arr3.includes(arr2[i])) arr3.push(arr2[i]);
//   } else {
//     // non-repeating
//     arr4.push(arr2[i]);
//   }
// }

// console.log("Repeating values:", arr3);
// console.log("Non-repeating values:", arr4);


// const arr = [1, 2, 4, 4, 5, 6, 7, 7, 7, 8];
// const arr2 = arr.sort((a, b) => a - b);
// let arr3 = []; // repeating
// let arr4 = []; // non-repeating
// for (let i = 0; i < arr2.length; i++){
//     if(arr[i]==arr[i+1]){
//         if(arr3.includes(arr[i])){
//             continue
//         }else{
//    arr3.push(arr[i])
//         }
//     }else{
//         arr4.push(arr[i])
//     }
// }
// console.log(arr3)
// console.log(arr4)



//  const arr = [1, 2, 4, 4, 5, 6, 7, 7, 7, 8];
//   const arr2 = arr.sort((a, b) => a - b);
//   let arr3=[];

//    for (let i = 0; i < arr2.length; i++){
//    if(arr3.includes(arr[i])){
//     continue;
//    }else{
//     arr3.push(arr[i])
//    }
// }
// console.log(arr3)



// let text = "abcddefghhhkkprjcgdj";  // uniq substring
// let uniqstring= [];
// let uniqchar="";
//  for (let i=0;i<text.length;i++){
// let char= text[i]
// if(uniqchar.includes(text[i])){
//     uniqstring.push(uniqchar);
//     uniqchar= char;
// }else{
//     uniqchar= uniqchar+char
// }
//  }
//  if(uniqchar){
//     uniqstring.push(uniqchar)
//  }
// console.log(uniqstring) 



// // count any no without using loop or string.
// const no= 99345;
// const count=Math.floor( Math.log10(no)+1)
// console.log(count)


