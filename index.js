let radius = 5;
const pi = 3.14;
let area;
area = pi * radius * radius;
console.log(area);
console.log(typeof area);

let num = 0xfff;
console.log(num)

let num1 = 1.5e12;   //1.5*10^12
console.log(num1)

let num2 = 100_000_000;   
console.log(num2)


let num3 = 5/0;  
console.log(num3)

console.log(Number.MAX_VALUE)
console.log(Number.MAX_VALUE * 10)

let num4 = 12345689087665544556776554;
console.log(num4)
// to avoid this addition of different values at the end and Bigint
let num5 = 12345689087665544556776554n;
console.log(num4)

let num6 = 12345689087665544556776554n;
console.log(num6 + 2n)

let num7 = 5;
console.log(5/"Navin") //NaN
console.log(typeof (5/"Navin")) //Number

let user = "Ji\tll \"Kaku u\" \nlakehub"
console.log(user)

// type conversion & coercion
let num8 = String(10)

console.log(num8, typeof num8)


let num9 = "1234"
console.log(num9, typeof num9)


let num10 = Number("1234")
console.log(num10, typeof num10)


let x;
console.log(x, typeof x)

x=8;
console.log(x, typeof x)

x = x + ""
console.log(x, typeof x) //8 string

x=x-2;
console.log(x, typeof x)  //6 number

x= +x +2 
console.log(x,typeof x) //10 number

x != x
console.log(x, typeof x)

// parseint- convert string into a number
let p = parseInt("123 Chelaa")
console.log(p)

// only 0 will give us false
console.log(Boolean(0)) //false
console.log(Boolean(8))  //true
console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean("teddy")) //true


// operators
let num11 = true;
let num12 = true;
let result = num11 + num12;
console.log(result)   //2 

let num13 = 4;
num13++ //5 increment by 1
num13 += 3;

let num14 = 4;
let z = num14++  //post increment
console.log(z, num14) //4 5


let num15 = 4;
let o = ++num15  //pre increment
console.log(o, num15) //5 5


// raising powers
let num16 = 4;
//let a = Math.pow(4,3) //base and power respectively
let a = 4 ** 4 //256
console.log(a, num16) //64


// relational operators
let t = "pen";
let y = "Book";
let data = t > y
console.log(data); //  true 

// &&- ampersand
// || - pipe
//tilde(~)- exclamation!

// conditional statements
let nums = 3;
let nums1 = 4;
let nums2 = 8;

if (nums > nums1 && nums > nums2) {
    console.log("nums is greater")
}else if( nums1 > nums2){
    console.log("nums2 is greater")
    console.log("yee!!") //treated to be outside

}else{
    console.log("num3 is greater");
}
console.log("Byee..")


// ternary operator--even or odd
let num17 = 5;
let resul

// if(num % 2 === 0){
//     resul = "Even"
// }else{
//     resul = "odd"
// }

//?:
resul = num17 % 2 === 0 ? "Even" : "odd"
console.log(resul)

// switch statement 
// mon 7am
// tue 4am
// fri 9am
// sat -sun 8am
let day = "Monday"

switch(day){
    case 'Monday':
        console.log("7am")
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("4am")
        break;
    case 'Friday':
        console.log("9am")
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("8am")
        break;
    default:
        console.log('5am - watch tutorials');
}


// template literal
let num18 = 22
let num19 = 13
let sum = num18 + num19;
console.log(`The addition of ${num18} and ${num19} is ${sum}`)
// console.log("The addition of " + num18 + " and " + num19 + " is " + sum)
// new line
console.log(`my name is
Chelaa Emma`)

// while loop
// repeat statement 5 times
// initialize, condition, increment

// create a variable that acts as a counter
let i = 1;  //initialize
while(i<=5)  //condition
{  
    console.log("Hi"+i);
    i++;  //increment
}

// printing numbers in reverse

let c = 5;
while(c >= 0){
    console.log('hi',c)
    c--;
}

//do while execute first then check for the condition later
let b =10;
do {
    console.log("hello", b);
    b++;
}while(b<=5)


// for loop
for(let d= 1; d<=5; d++){
    console.log('hello js', d)
}

// infinite excution --ctrl+c

// nested loop
for(let k= 1; k<=5; k++){
    console.log('hello my', k)
    
    for(let j= 1; j<=5; j++){
        console.log("mummy",j)
    }
}

// to avoid this iteration declare the variable outside
let r= 1
for(; r<=5; r++){
    console.log('jill', r)

    let a= 1
    for(; a<=5; a++){
        console.log("sweetheart",a)
    }
}

// for loop vs while
// for is best when you know the starting and ending point

// values between 1 & 100 that are divisible by three

for( let v = 1; v<= 100; v++){
    if(v % 3 === 0){
        console.log(v);
    }};


    // print all the numbers in individually
let numb = 123456

console.log(numb%10);
numb = (numb/10); //returns a floating point
numb = parseInt(numb/10) //returns interger
console.log(numb)  

numb = parseInt(numb/10) //returns interger
console.log(numb) //1234

numb = parseInt(numb/10) //returns interger
console.log(numb) //123

numb = parseInt(numb/10) //returns interger
console.log(numb) //12

numb = parseInt(numb/10) //returns interger
console.log(numb)

let numb1 = 564784
while(numb1 >0){
    console.log(numb1%10);
    numb1 = parseInt(numb1/10)
}

// object literal
let alien= {
    name:'Chelaa',
    technology: "javascript"
}
console.log(alien.name);
console.log(alien['technology']);

// cases  used for bracket - words as akey
let aliens= {
    name:'Chelaa',
    technology: "javascript",
    'work exp': 4
}

console.log(aliens['work exp']);

// another case is when we want the input from the user
let input = 'name'
let alienn= {
    name:'Chelaa',
    technology: "javascript",
    'work exp': 4
}

console.log(alienn[input]);

// complex objects
let friends = {
    name:'Chelaa',
    technology: "javascript",
    laptop: {
        cpu:"i7",
        processor:2.8,
        RAM:4,
        brand:'Asus',
        // brand1:'Asus'
    }
}
delete friends.technology
console.log(friends)
console.log(friends.laptop.brand.length)

// to avoid errors use ?
// console.log(friends.laptop.brand?.length)
// 

// for in loop---used for objects
// print all properties

for(let key in friends){
    // console.log(key) //print all the keys one by one
    console.log(key, friends[key]) //print all the keys with their values
    console.log (key,friends.laptop['cpu'])
    console.log (key,friends.laptop)
}


// functions
function greet(){
    console.log("hello coder")
}
greet();

// return a function,, return only one value
function greets(){
    return "hello mine"
}
let str = greets()
console.log(str);

// passing  a value
function greets(user1){
    return `hello ${user1}`
}
let user1 = 'chelaa'
let str1 = greets(user1)
console.log(str1);

// function expression
let add = (num1, num2) => num1+ num2;
 
// assign function to a variable
let rsult = add(34,34);
console.log(rsult);

// local-global variable
function add1(num1,num2){
    return num1 +num2;
}
let sum4 = add1(34,76);
console.log(sum4)


// arrow function
let greeting = () =>{
    console.log("hello world")
    return 1;
}
console.log(greet()) 

// methods
let laptop = {
    cpu : 'i9',
    ram:16,
    brand: 'hp',

    greet: function(){
        console.log('This laptop is good for programming');
    }

}
laptop.greet()

// this keyword

function getFirstLaptop(laptop1, laptop2){
    if(laptop1.cpu >laptop2.cpu){
        console.log(laptop1)
    }else{
        console.log(laptop2)
    }
}
let laptop1 = {
    cpu : 'i9',
    ram:16,
    brand: 'hp',

    getConfig: function(){
        console.log(this.cpu);
    }

}
laptop1.getConfig()

let laptop2 = {
    cpu : 'i5',
    ram:16,
    brand: 'lenovo',

    getConfig: function(){
        console.log(this.cpu);
    }

}
// laptop2.getConficpug()

getFirstLaptop(laptop1, laptop2)

// or using compare

let laptop3 = {
    cpu : 'i7',
    ram:16,
    brand: 'hp',

    getConfig: function(){
        console.log(this.cpu);
    }

}


let laptop4 = {
    cpu : 'i3',
    ram:16,
    brand: 'lenovo',

    compare: function(other){
        if(this.cpu > other.cpu)
            console.log(this)
        else
            console.log(other);
    },

    getConfig: function(){
        console.log(this.cpu);
    }

}

// compare function belongs to laptop 4 and if interchanged will prompt an error

laptop4.compare(laptop3);

// constructor
function Alien(name, tech){
    this.name = name;
    this.tech = tech;

    // common methods
    this.work = function(){
        console.log("solving bugs from codes")
    }
}

let alien1 = new Alien('chelaa', 'js')
let alien2 = new Alien('jill', 'blockchain')

alien1.tech= 'java'

console.log(alien1)
alien2.work()

// creating array and fetching elements 
let values = [43,57]
// push---add element at the end
    values.push(23);
    values.push(30);
console.log(values)
console.log(values.length)
console.log(values[1])
console.log(values.indexOf(30))

let names = [5,'faith','domi','vicky',{
    tech: 'js'},
    function(){console.log('hello js');}
]

// adding
names[6]='linah'
console.log(names)
names[5](); //fetch from the function

let datas = [15,16,18,35,90];

// stack
// pop-removes the last element unless specified
console.log(datas.pop(3)); //print the element it removes
// shift-removes data form the first element
console.log(datas.shift());//print the element removed

// unshift -add new elemnt in the beginning
console.log(datas.unshift(56));

// splice-removes element from specified indexed i.e2 the second parameter is the number of elements to be removed
// last element add value at index2
console.log(datas.splice(2,1,89)); //return remaining eements

console.log(datas)

// for of loop in array
let nums3 = [];

nums3[0] =5;
nums3[99] =9;
// console.log(nums3)
// console.log(nums3.length)

for(let n of nums3){
   console.log(n);
    }

    // destructuring array
let nums4 = [56,89,90,76];
console.log(nums4);
let [g,k,l,d] = nums4;
console.log(d);

let v =9;
let q =6;
[v,q] = [q,v]
console.log(v,q)



