// let name={
//     firstname:"dibbya",
//     lastnname:"poudel dd",
    
// }
//  let printfullName = function(home){
//     console.log(" "+this.firstname + " " + this.lastnname+" her home is:"+ home);
// }
// printfullName.call(name,"butwal");
// let name2={
//     firstname:"biplov",
//     lastnname:"sapkota",
    
// }
// printfullName.call(name2,"hetauda");
// const prompt =require('prompt-sync')();

// var fname = prompt("enter your age : ");
// var lname = prompt("enter your roll : ");
// console.log("your roll and age is" ,fname,lname)

// console.log("dibbya");
// let day = 2;
// switch(day){
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break; // break nalekhni vane case true vaye paxi ko  sablai print garxa
//     default:
//         console.log("Noday")
// }
// let i=0
// while(i<4){
//     console.log(i);
//     i++
// }
// let num=0;
// let total=0;
// while(num<=10){
//     total=total+num;
//     num ++
   
// }
// console.log(total);
// // for(let y=0; y<10; y++){
// //     console.log(y)
// // }
// let sum=0
// for(let y=0; y<=10; y++){
//      sum =sum+y;
   
// }
// console.log(`sum is: ${sum}`);
// //break and continue keyword
// //break le tei execution lai stop handinxa 
// //continue execution lai continue garda dobara skip handini 
// // 
// // for(let f=1; f<10; f++){
// //     if(f===3)
// //     {
// //         break;
// //     }
// //     console.log(f);
// // }

// // for(let f=1; f<10; f++){
// //     if(f===3)
// //     {
// //         continue;
// //     }
// //     console.log(f);
// // }

// //array object ho js ma ani array refrence tyoe ho 
// //int haru feri primitive dtatypes ho 
// //primitive vs refrence data tyopes 
// //prtomitive le stack ma rakhxa ani refrence le heap , eutai address ma basbu hi 
//  //slice(0) 0 bata suru vayera last samma jajnxa 
//  let array1=["a","b","c"];
//  let array2=array1.slice(0); //array1 ko 0 index bata start vayera sablai array2 ma store garyo
//  array1.push("d")
//  console.log(array1);
//  console.log(array2);
//  console.log(array1===array2); //.slice garera rakheko vayera 2ta aray diff vaye 
//  let array3= [].concat(array2);
//  console.log(array3)
//  //spread operator
//  let array4=[...array1]; 
//  console.log(array4);
//  console.log(array1===array4)
//  for(let j=0; j<=array1.length-1; j++){
//     console.log(array1[j].toUpperCase())
//  }

//  const fruits=["f","g","h","i"]
//  //for of le value lai jo ligo
//  for(let furit of fruits){
//     console.log(furit);
//  }
//  //for in le index ligyo
//  for(let furit in fruits){
//     console.log(furit);
//  }
// // array destructuring 
// // const myar=["dbya","biplov"];
// // let[d,b]=myar;
// // console.log("value of d id is", d);
// // console.log("value off b is", b)

// // const myar=["dbya","biplov","diplov","bipbya"];
// // let[d,b, ...c]=myar;
// // console.log("value of d id is", d);
// // console.log("value off b is", b)
// // console.log("value of c is", c)

// //object
// const person ={
//     name:"dibbya",
//     age:25,
// }
// console.log(person.age)
// //estrai ni garna sakxam hamle 
// console.log(person["name"]);
// //iterate object
// for (let key in person){
//     // console.log(person[key])
//     console.log(`${key}: ${person[key]}`)
// } 
// console.log(Object.keys(person)) // esle array diyo 
// for( let key of Object.keys(person)){
//     console.log(person[key])
// }
// //computed properties
// //object destructuring
// //object inside array and nested destructuring 
// const user=[
//     {uid:1, name:"dbya", roll:17},
//     {uid:2, name:"bip", roll:7},
//     {uid:3, name:"bipya", roll:87}
// ]
// const[user1,user2]=user;
// console.log(user2); 
// // array vitra ko object lai sidai destructure gareko
// const[{uid}, ,{roll}]=user;
// console.log(uid)
// console.log(roll)
// function dbya(){
//     console.log("hey dibbya");
// }
// dbya();
// //DRY dont repeat yourself
// function mul(a,b){
//     return (a*b)
// }
// const muls=mul(4,2);
// console.log(muls)

// //array functions 
// // const dbyapoudel = ()=>{
// //     console.log("dibbya poudel dibya")
// // }
// // dbyapoudel();
// //hostig
// dbyapoudel();
// function dbyapoudel(){
 
//     console.log("hosting gareko ho function lai paxi decleration garna ni sakinaxa  paila call garera")
// console.log("aru ma hunna arrow function or function expression ma ")
// }

// //block scope vs function scope 
// //let and const are block scope i.e tei block vitra matra acces garna sakinxa aru ma mildauina
// //var is function scope var use garda chai milxa 
// {
//     //block 
//     let fir= "dibbya block scope";
//     console.log(fir);
// }
// //console.log(fir); //esma acces vayena yo tei block vitra matra vo

// {
//     var dbya="dddd";

// }
// console.log(dbya) // var tyo block vanda bahira  ni acces vayo 
// function add(a,b=5){
//     return a+b;
// }
// console.log(add(4,7))// b ko value kei pass nagarey by default 5 ligxa natra j pass garexa tei
// //rest parameter
// function rest(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log (`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// rest(2,3,4,5,6,6,7,78,89,9);

// //parameter destructuring 
// //call back function vaneko functon k parameter ma function jo rakhera call garni
//   //function lai jo return gara callback function le
//   //function call garda rakhi argument 
//   //function define garda rakhni parameter
//   //array method 
//   //foreach
// const numbers=[1,2,3,4,5,6,7,8]
// function multiply(number,index){
//     console.log(`index is ${index} and the number is ${number}`);
// }
// numbers.forEach(multiply);
// numbers.forEach(function(number){
//     console.log(number*5)
// })


// //map method map ma return garnai parxa la 
// //map le jaile naya array banauxa 
// const square=function(number){
//     return number*number;
// }
// const squarenumber=numbers.map(square);
// console.log(squarenumber);

// //filter method =>call back function jo ligxa
// const iseven= function(number){
//     return number%2===0;
// }
// const evennum=numbers.filter(iseven);
// console.log(evennum);

// //reduce method=> call beck jo ligxa
// const allsum=numbers.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue;
// },4) // 4 vaneko accumulator ko initial value if pass garey natra 0 hunxa afai
// console.log(allsum);

// //accumulator ,currentvalue,          return
// //1           , 2          ,           3 sum garda 
// //3(return vako), 3(next value array ko) ,6 sum garda
// //6           ,4                       , 10

// //sort method
// const sorts=[5,6,100,3,70,65]
// sorts.sort(); //array lai string ligera ascii value anusar sort garexa
// console.log(sorts); //naya array return gardainaw tesmai change garxa

// //if captital letter xa vane paila capital letter lai ligxa
// const letter=["dbya","AB", "DF", "bop"]
// letter.sort();
// console.log(letter);
// const jssort=[3,6,7,89,67,45]
// //sort le ni call back ligxa funcion
// jssort.sort((a,b)=>{
//     return a-b; //a-b positive vaye ascending natra descending 
// //descending ma garda b-a garxa 
// })
// console.log(jssort);

// //find method as input call back nai ligxa esle ni 
// const findme=["amma","cat","puppy","dog","eggy"]
// function islength3(string){
//     return string.length ===3; //find ma ma vako sab string lai ek ek gardai check garxa surubata

// }
// const ans = findme.find(islength3);
// console.log(ans)// surumu ma mileko lai return garxa ani aru --
// // herdaina esle cat lai diyo ani puppy dog tita check garna gayena sakiyo

// const users=[
//     {userid:1,username:"dibbya"},
//     {userid:2, username:"dips"},
//     {userid:3, username:"bips"}
// ]
// const id2=users.find((users)=>{
//     return users.userid ===2
// })
// console.log(id2)

// //every method  esle ni call back linxa
// //boolean return garxa every le 

// const db=[2,3,5,6]
// function isevens(number){
//     return number%2===0;
// }
// const even=db.every(isevens);
// console.log(even) //false return garyo kinaki db ma vako sab even xaianw
// //sab even vako vaye true garthyo return 
// //db array ma vako sab number lai check garca 
// //every le true false matra return garxa


// //some method every jasti ho farak eti ho ki 
// //sab lai check garxa kunai euta milyo vane true return garxa
// //mathi ko every lai example lai ligda kunai pani euta even number milyo vane true return garxa 
// //boolena nai dinxa esle ni 

// //fill method
// //naya array banauxa kati lenghth ko define garni ani ksle varni ni tesmai define garni
// //tala deko example 
// //array(5) vaneko 5 lenghth ko ra .fill("dibbbya") vaneko dibbya le fill garni array lai
// const myarray=new Array(5).fill("dibbya");
// console.log(myarray);

// // array ma vako elemnet lai ni cahnge garxa 
// const dib=[1,2,3,4,5,6,7,8]
// dib.fill(8,3,5); //(value,start,end) start index ko value ligxa end ko ligdaina
// console.log(dib) //4 ra 5 ko thau ma 8 fill garyo

// //splice method 
// //array ko bich bata kunai lai delete garda ya insert garda use hunxa splice method 
// const dibh=["iten1","item2","iem3","item4"]
// dibh.splice(1,3) //(start,delete,insert)
// //1 index bata 3 samma delete vayo ra bachyo yeuta ani insert hamle kei garexaianm
// //end lai ni ligyo
// console.log(dibh)

// //insert ni garna ko lagui
// const dibhs=["iten1","item2","iem3","item4"]
// dibhs.splice(1,0,"dibyapoudel") // 0 vaneko kei dlete garenam hamle eha
// console.log(dibhs); // 1 index ma dibbyapoudel insret vayo

// //insert and delete together
// const dbyas=["we","is","great","haha"]
// // dbyas.splice(1,1,"are");
// dbyas.splice(1,2,"are","don")
// console.log( dbyas)

// //iterables 
// //jaha hamle for of loop lagauna sakxam
// //string ra array iterables hunxan object hunna la 
// const har="harshit"
// for(let char of har){
//     console.log(char)
// }
// //array like object
// //jun snagaw lenghth property hunxa ra hamle index bata access garna milxa

// //sets(it is iterable)
// // set ma duplicate elemet allowed hudaianw 
// // euta element ek patak matra allowed hunxa 
// //no index accessed
// //store the data 

// const ghg=new Set([1,2,3,3,34,5,6,4,5,])
// ghg.add(100)
// ghg.add(["hjjj","dpu","bop"])
// console.log(ghg) //output ma mathi repeat vako number hatera aauxa 

// //maps maps is an iterable
// //key value pair store garxa 
// const persons = new Map();// naya map banyo person vannu 
// console.log(persons);
// persons.set('name',"dibya") //name key ani dibya value
// persons.set('age',25) //person vanni khali thyo aile set vayo yo value pair
// persons.set('roll',5)
// persons.set(1,'teo')//1 key ra teo value vayo esto object ,a painna map ma maytra painxa
// console.log(persons)
// //map ma kunai pani key rakhna painxa but object ma painna 
// //object ma ki ta string ki ta symbol matra painxa key aru painna 
// console.log(persons.get('age')) //map lai estari get garxan ra object lai (persom.age)
// console.log(persons.keys()) //sab keys get garna
// for(let key of persons.keys()){
//     console.log(key , typeof key)
// }
// //map ajhai her la
// //clone using object

// const arr=[1,4,1,5,5,6,7,3]
// const ddbya= arr.filter((v,i)=>arr.indexOf(v)===i)

// console.log("f",ddbya)
// const reducev=arr.reduce((prev,next)=>{
//     return prev+next;
// })
// console.log(reducev)

//control flow and loop


//for loop
// let dish=['db','sb','th']
// for(let i=0 ; i<dish.length; i++){
//     console.log(dish[i])
// }
//while loop for dish
// let j=0;
// while(j<dish.length){
//     console.log("dishes are",dish[j])
//     j++
// }

// do{
//     console.log("num is",j)
//     j++
// }while(j<4)
//nested if
// let num=34;
// if(num>45){
//     console.log('num', num)
//     if(num>25){
//         console.log("another if", num)
//     }
// }
//break and continue
// for (let i=0; i<=10; i++ ){
//     if(i==5){
//         continue; // yo iteration lai xadera aru contineu gar
//     }
//     console.log(i)
// }
// for (let i=0; i<=10; i++ ){
//         if(i==5){
//             break; // yo iteration bata break gar skaiyo sabai abaw nachal
//         }
//         console.log(i)
//}

// let gmail="a@gmail.com"
// if(gmail.length >18 && gmail.includes('@gmail.com')){
//     console.log("correct gamil")
// }else{
//     console.log("bad invalid")
// }
// if(gmail.length >18 || gmail.includes('@gmail.com')){
//     console.log("correct gamil")
// }else{
//     console.log("bad invalid")
// }

//priority paila !NOT HUNXA ANI OR AND left to roght
// {
//    yo euta block scope vyaoi
// }
// let dbya =function(name){ //yo feri parameter ho decleration lai parameter
//     console.log(`hey im ${name}.how are u`)
// }
// dbya("dibbya") //argument pass gareko

//arrow function
// let fun=()=>{
//      console.log("hey")
// }
// fun()

//higher order function  vanya passing function as a argument 
//ani arko higer order function

// let compliment=function(msg){
//     return function(name){
//         console.log(`${msg} ${name} `)

//     }
// }
// console.log(compliment("hey you are so hot")("ritika"))
//IIFE immediately invoke function expression
//executed only once

// (function(){
//     console.log("afai claxa ani arko patak chaldainaw reuse huainaw")
// })();

//set time out vaneko yeti time paxi chal ani async hun
//set time interval vaneko repeatedly chalni yeuta time interval ma ani async hun

// function greet(){
//     console.log("good moringng")
// }
// setTimeout(greet,6000)

// setInterval(greet,2000)
// console.log("hey bip")

// //hosting variable decleration are hosted toward top of their scope
// //object
// let car={
//     name:"toyato",
//     price:"45lakh",
//     model:3400,
// }

// // console.log(car["name"])
// // console.log(car.model) 
// //modify
// delete car.price
// car.name="dips";
// console.log(car)

//methods= object key holding the functio as value
// let person={
//     agecalc:function(birthyear){
//         let age=2023-birthyear;
//         return age
//     }
// }
// console.log(`person ko age `,person.agecalc(1998))

//this keyword 
//in each methods we have an access of special keyword called "this"

// let person={
//     fname:"biplov",
//     lname:"sapkota",
//     city:"pokhara",
//     getsummary:function(){
//         return `${this.fname} ${this.lname} lives in ${this.city}`
//     }
// }
// console.log(person.getsummary())

//for each method
// let fruits=["apple","banan","litchy","cherry"]

// fruits.forEach(function(fruit){
//     console.log(fruit)
// })

//object inside array 
// let blocklist=[
//     {
//         name:"rosu",
//         reason:"abusive content"
//     },
//     {
//         name:"dibya",
//         reason:"no reason"
//     }
// ]
// for(i=0; i<blocklist.length; i++){
//     console.log(` user ${blocklist[i].name} is blocked due to ${blocklist[i].reason}`)
// }

//math object
// let number=5.7
// console.log(Math.round(number))
// console.log(Math.floor(number))

//call and apply method
//call ma argu,ent lai sidai dini apply ma chai yeuta array ma combine garera dini 
//this ko refrence chnage garna parda call ra apply use hunxa
//particular function lai diff obj ko adhar ma chnage garna khojda 

// let mainplane={
//     airline:"buddha",
//     code:34,
//     booking:[],
//     book:function(flightnum,name){
//         console.log(`${name} at the ${flightnum} is in ${this.airline} and the code is ${this.code}` )
//        this.booking.push({flight:`${this.airline}`,name:name})
//     }
// }
// mainplane.book(67,"dibbya")
// mainplane.book(65,"riyaa")
// console.log(mainplane.booking)

// //arko plane ayo la
// let childplane={
//     airline:"NTA",
//     code:37,
//     booking:[],
    
// }
// let booked= mainplane.book;
// // booked(89,"htined")
// booked.call(childplane,56,"sobha")
// booked.apply(mainplane,[45,"dipu"])

// //bind method
// function greet(){
//     console.log(`hey goodmorning ${this.fname} ${this.lname}`)
// }
// let user={
//     fname:"dibbya",
//     lname:"poudel"
// }

// let greets= greet.bind(user);
// greets();

//pass by value and pass by refrence


//pass by value
// let arr=[2,3,4,5,6,7]
// let getvalue=[...arr]//spreap operator le naya array banauxa
// getvalue[1]=0
// console.log("original array:", arr)
// console.log("arko array",  getvalue) //get value ma matra ayo 

//pass by ref vaneko  
// let arr=[2,3,4,5,6,7]
// let getref=arr;
// getref[5]="dibyba"
// console.log('original', arr)
// console.log("get ref walka", getref) //getref ra rr dubai ma dibbya ayo 

//for in loop = object ma use hunxa for in loop
// let car={
//     name:"totota",
//     color:"black",
//     company:"tata"
// }
// console.log(car)
// for(let key in car){
//     console.log(key)
// }

//DOM
//Array method
//reverse mutaing methos ho la 
//mutating vaneko original mai change huni arko copy na banauni
//concat muttaing hoinaw esle arko copy baanuxa tesai chnage gardainaw 
// let letter=["a","b","c"]
// let number=[1,2,3,4]
// let concatnum=letter.concat(number)
// console.log("letter array are", letter)
// console.log("number array are", number)
// console.log("concatnum are", concatnum)

//join method pani mutating hoianw
// let joined=letter.join("+")
// console.log("letter are", letter)
// console.log("joined are", joined)

//slice (startindex,endundex(exclude)) yo ni mutating hoinaw 
// let sliced=letter.slice(1,2)
// console.log("letter are", letter)
// console.log("sliced array", sliced)
//slice ma (syartindex) startindx matra vayo vane start bata last samma ligxa nagtra ok xa


//splice(index,deletevalue,valuetobeadded)
//esle deleted item lai return garxa la 
//esle original array lai nai chagne garxa so its mutable
// let number=["ab","we","di","bb","ya"]
// let spliced=number.splice(2,2,"dibbya","haha","nip")
// console.log("number array", number)
// console.log("spliced are", spliced)

//at method
// console.log(number.at(1)) //at le ni index dinxa la
// console.log(number.at(-1))

//higher orderfunction yeuta function ma arko function rakhinxa 
//map method: naya array banauxa esle
//transformation function
//naya baneko array ko length ni same hunxa kei transforamtion sait

// let salary=[2000,3000,4000,6000,400]
// let newsal=salary.map(slaray=>{
//     let inc= slaray/2;
//     return  slaray + inc
// })
// console.log("NEWSAK", newsal)


//filter pani yeuta higher order function ho
//filter vako lai return garxa
//jun ko condition milxa teslai lyauxa esle return garxa
// let name=["dibbya","prem","kumar","biplov"]
// let filtered=name.filter(name=>{
//     if(name=="prem" ||  name=="gi" )
//     return true
// })
// console.log("fil", filtered)

//reduce : array elem ko reduce garxa jastoi combine or add sum estai 
//reduce(function(total,curvalue), initialvalue)//initial value nai paila total banyo ani afdd hudai janxa
//return siggle value esma ni mutate hunna
// let num=[1,2,3,4,5,6,7,8,9]
// let sum = num.reduce(function(total,curvalue){
//     return total+curvalue
// },5)
// console.log(sum)

//find method: esle ni elem find garxa jaslai hamle khojexam
//find methos ni higher order function ho 
// let students=[
//     {
//         id:1,
//         name:"alex"
//     },
//     {
//         id:2,
//         name:"dibbya"
//     }
// ]
// let reult= students.find(student=>{
//     return student.id ===2 //id 2 samaga ko deherai vetyo vane jun first ma xa teslai return garxa
// })
// console.log(reult)

//findindex : same find ho tara esle index return garxa 
//edi index navaye -1 return garxa
// let age=[1,2,3,4,5,6,7,8,89]
// let res=age.findIndex(age=>{
//     return age>5
// })
// console.log(res)


//some and every methos: higher order function
//some: returns true if any elem pass test
//every: return true only if all elem pass test
// let age=[3,67,4,5,6,34,68]
// let res=age.every(sco=>{
//     return sco < 50
// })
// console.log(res)

// let age=[3,6,4,5,6,3,68]
// let res=age.some(sco=>{
//     return sco > 50
// })
// console.log(res)

//flat method naya copy banuxa yo ni mutating hoianw
//it creates a new array with the element of the subarrays
//concated into it 
// let arr=[1,2,3,["a","b","c",["dibu","kaise","ho"]]]
// console.log("before flat", arr)
// let res= arr.flat(2); //flat(2) 2(dept  value)level lai concat garyo vitra vitra ko subarray 2ta
// //by default 1level lai nai garxa) 
// console.log("after flat", res)


//flatmap method yo ni mutating hoianw 
// let cart=[
//     {
//     name:"book",
//     qty:2400
// },
// {
//     name:"pen",
//     qty:2400
// },
// ]
// let newcart=cart.flatMap(item=>{
//     if(item.name=== "book"){
//         return [item,{
//             name:"copy",
//             qty:1
//         }]
//     }else{
//         return [item]
//     }
// })
// console.log("beforw flat", cart)
// console.log("my newcart", newcart)


//sort method
// let num=["a","d","b"]
// console.log(num.sort())

// let numb=[3,5,-3,6,7,2,-45]
// console.log(numb.sort((a,b)=>{
//     return a-b
    
// }))


//chain of method

// let num=[1,2,3,4,5,6,7,8]
// let res=num.slice(1,4).splice(1,2,33,44).push(6)
// console.log(res)

//date and time 
// let currdate=new Date()
// console.log(currdate)

// let currdate=new Date(0)
// console.log(currdate)

let curdate=new Date()
// console.log(curdate.getFullYear())
// console.log(curdate.getDay())


//local storage
// localStorage.setItem('passion',"programming") //jaba samma hamle delete gardainam taba samma basxa tei 
// localStorage.setItem('age',25)
// console.log(window.localStorage)
// localStorage.getItem('age') //25 output dinxa
// //local storage ma update garni item lai 
// localStorage.setItem('age','26') //abaw age 26 vayo localstorage ma override garyo//
// //delete garni item lai local storage bata 
// localStorage.removeItem('age') //abaw age vanni item delete vayo

// localStorage.clear() //esle sablai delete garxa clear garxa local stirage lai

//copmlex data lai localstorage ma aksari save garni 
// let vechile=[{
//     name:"bike",
//     model:2300
// },
// {
//     name:"scooty",
//     model:3300,
// }]
// console.log("complex adat",vechile)

// let stringofvec= JSON.stringify(vechile)
// console.log("after stringify local storage ma store ko lagi",stringofvec)
// localStorage.setItem(stringofvec)
//parse garera sting lai object ma lana sakinxa feri 
//local storage ma rakhna lai stringify gaera rakheko feri teslai get garda parse garni so obnject mai aaus


//object Oriented programming
//constructor function
//cannot use arroe function as constructor
//call constructor func using "new " keyword
//same type of object crteate garda yo use hunxa la
// let car=function (color,modol){
//     this.color=color;
//     this.modol=modol
    
// }
// let instance= new car("black", 3300)
// console.log(instance)

//prototype
//each object created by constructor func have an access to all method present inside
// inside that constructor prototype
// let Car =function (color,modol){
//     this.color=color;
//     this.modol=modol
    
// }
// Car.prototype.login=function(){
//     console.log("helllo")
// }
// let instance= new Car("black", 3300)
// console.log(instance)

// class car{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     startengine(){
//         console.log("engine is started")
//     }
// }
// let honda=new car("hcar",2300)
// console.log(honda)
// honda.startengine();

//destructuring
// let hotel={
//     name:"diyalo",
//     location:"street 10",
//     category:["chinense","italy","desi"]
// }
// let[x, ,y]=hotel.category
// console.log(x,y)

//destructuring nested array
// let num= [1,2,[3,4,5]]
// let[a,b,[c,d]]=num;
// console.log(a,b,c,d)


// //object destructuring
// let hotel={
//     name:"diyalo",
//     location:"amarsingh",
//     category:["chines","desi","nepali"],
//     open:{
//         sunday:{open:"8:6am",close:"4:50pm"},
//         monday:{open:"8:60am",close:"4:5pm"}
//     }
// }
// let{name,location,category,open}=hotel;
// console.log(name,location,category,open)

//spreadoperator
// let num=[1,2,3,4]
// let newarr=[8,2, ...num]
// console.log(newarr)

//rest operator
//spread ko ulto
// let nums=[2,3,4,5,6,6,7,8,9,0]
// let[a,b,c,...rest]=nums;
// console.log(rest)


//short circuiting
// let res= 4 && 5 && "code" // esle false lai khojdai janxa ra 
// // jaba samma positive xa teha samma janxa ani last ko value lai return garxa
// console.log(res)


// let resp= 0 || 4 || 5 || "code"  // sukai true lai print garxa  esle true lai khojxa  ani 
// //vettuda bittikai teslai print garxa first kai
// console.log(resp)


//nullish coialesing operator (??) only null and undefined are falsy value

// let res2=null;
// let res2=6;
// let res2;
// let res3= res2 ?? 2
// console.log(res3)

//for-of-loop



