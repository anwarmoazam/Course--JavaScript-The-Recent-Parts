console.log("Course--JavaScript-The-Recent-Parts");

function formatCurrency(strings, ...values) {
    var str = "";
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            if (typeof values[i - 1] == "number") {
                str += `₹${values[i - 1].toFixed(2)}`;
            }
            else {
                str += values[i - 1];
            }
        }
        str += strings[i];
    }
    console.log(str);
    return str;
}

var amout = 12.3;

// function without round braces
var msg = formatCurrency`The total for your order is ${amout}`;

console.log(msg);

function upper(strings, ...values) {
    var ret = "";
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            ret += String(values[i - 1]).toUpperCase();
        }
        ret += strings[i];
    }
    return "";
}

var name = "kyle", twitter = "getify", topic = "JS Recent Parts";

// return false
console.log(upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
)

// Padding & Trimming
var str = "Hello";
// Pad Start
console.log(str.padStart(5));
console.log(str.padStart(8));
console.log(str.padStart(8, "*"));
console.log(str.padStart(8, "12345"));
console.log(str.padStart(8, "ab"));

// Pad End
console.log(str.padEnd(5));
console.log(str.padEnd(8));
console.log(str.padEnd(8, "*"));
console.log(str.padEnd(8, "12345"));
console.log(str.padEnd(8, "ab"));
// Trim Method
str = "    some stuff    \t\t";
console.log(str);
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());


// Destructuring

function data() {
    return [1, 2, , 4, 5, 6, 8, 5, 5];
}

var tmp = data();
var first = tmp[0];
var second = tmp[1];
var third = tmp[2] !== undefined ? tmp[2] : 10;
var rest = tmp.slice(3);

console.log(tmp);
console.log(first);
console.log(second);
console.log(third);
console.log(rest);


var [first1, second1, third1 = 10, ...rest] = data()
console.log(first1);
console.log(second1);
console.log(third1);
console.log(rest);

// Swapping by Destructuring
var x = 10;
var y = 20;
console.log('X : ', x);
console.log('Y : ', y);

[x, y] = [y, x];

console.log('X : ', x);
console.log('Y : ', y);

// Object Destructuring
function dataObj() {
    return { b: 2, c: 3, d: 5 };
}

var tmp = dataObj();

var first = tmp.a !== undefined ? tmp.a : 786;
var second = tmp.b;
var third = tmp.c;

console.log(first);
console.log(second);
console.log(third);

var first, second, third, fourth;
({
    a: first = 786,
    b: second,
    c: third,
    ...fourth
} = dataObj());

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

var arr = [{a:1},{a:2}];

console.log(arr.find(function match(v){
    return v && v.a > 1;
}));

console.log(arr.find(function match(v){
    return v && v.a > 10;
}));

console.log(arr.findIndex(function match(v){
    return v && v.a > 10;
}));

arr = [10,20,NaN,30,40,50];

console.log(arr.indexOf(30) != -1 );
console.log(~arr.indexOf(20));

var obj = {
    a: 1,
    b: 2,
    c: 3,
    *[Symbol.iterator](){
        for(let key of Object.keys(this)){
            yield this[key];
        }
    }
};

console.log([...obj]);

var obj1 = {
    a: 10,
    b: 20,
    c: 30
}

console.log(obj1)

// Self Iterator

var arr = [100,200,300,400,500];

function myIterator(arr){
    nextNum = 0;
    return{
        next(){
            if(nextNum < arr.length){
                return{
                    value : arr[nextNum++],
                    done : false
                }
            }else{
                return{
                    value : arr[nextNum],
                    done : true
                }
            }
            
        }
    }
}

let num = myIterator(arr);
console.log(num.next());
console.log(num.next());
console.log(num.next());

// Symbol.Iterator 
let result = arr[Symbol.iterator]();
console.log(result.next());