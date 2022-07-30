// /destructuring arrays
// split
let words = 'my name is chella kaku coder'.split(' ');
// let [a,b,c,d] = words
console.log(words)
// console.log(a, b)

let [a, b,, ...d]=words
console.log(a,b)
console.log(d)

// array forEach
let nums = [34,56,78,67,45,89]

nums.forEach(n=>{
    console.log(n)
})

nums.forEach((n,i,nums) =>{
    console.log(n,i,nums);
})

// filter,map
// n-diffrent variables with same value
let nums1 = [34,56,78,67,45,89]
let results = nums1.filter(n => n%2===0) //filter to get even numbers
     .map( n=> n*2) //perform calculation
     .reduce((a,b)=> a+b); //reduce into one value
    //  .forEach(n=>{ //print each an every value one by one 
     
    //     console.log(n)
    // })
console.log(results)

// set--remove repeated values
let nums2 = new Set('bookkeeper')
console.log(nums2)

let nums3 = new Set();

nums3.add(3)
nums3.add(4)
nums3.add(3)
nums3.add('chelaa')
nums3.add('kaku')
nums3.add('coder')
nums3.add('coder')

nums3.forEach(value =>{
    console.log(value);
});

// has checks if it includes
console.log(nums3.has('coder'));

// map
let map = new Map();
map.set('chelaa','java');
map.set('kiran','android');
map.set('chirag','ML');
// will update the value 
map.set('chirag','javascript');

console.log(map.keys()); //return all the keys
console.log(map.has('kiran'))//check if it is there
console.log(map.get('kiran'))//get the value

for(let [k,v] of map){
    console.log(k, ' : ',v)
}
// or to print all key and values
map.forEach((v,k )=>{
    console.log(k, ':',v)
});

// recursion --calling a function inside a function
// let nums5 = 1;
// function show(){
//     console.log("hi",nums5);
//     nums5++;
//     show();
// }
// show();

// factorial using recursion
// 5! = 5*4*3*2*1
// 5! = 5*4!
// n*(n-1)!
// n*(n-1)!
// 0! = 1
// n! = n*(n-1)*(n-2)*(n-3)...(n -n)

function fact(n){
    // return n*(n-1)!;
    if(n==0){
        return 1;
    }else{
    return n*fact(n-1);
    }
    
}
// maximum number is 170
let num=5;
let result = fact(num);

console.log(result)