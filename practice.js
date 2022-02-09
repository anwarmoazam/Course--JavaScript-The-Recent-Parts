console.log("Course--JavaScript: The Recent Parts");

// Tagged Templates

function formatCurrency(string,...values){
    var str = "";
    console.log(string);
    console.log(values);
    for(let i=0; i<string.length; i++){
        console.log(`Value of i ${string[i]}`);
        if(i>1) {
            if(typeof values[i-1] == "number") {
                str += `$${values[i-1].toFixed(2)}`;
            } else {
                str += values[i-1];
            }
        }
        str += string[i];
    }
    return str;
}

var amount = 12.3;

var msg = 
formatCurrency 
`The total for your order is ${amount}`;

console.log(msg);

// let result = formatCurrency('Hello',[55.54855]);
// console.log(result);


//-----------------------------------------------------------------------
// Array Destructuring

function data(){
    return [1,,3,4,5,6,7,8];
}

var tmp;
// var first, second, third, fourth;
[
    first,
    second = 10,
    third,
    ...fourth
] = tmp = data();


// console.log(first);

// console.log(second);


// Object Destructuring
function data1(){
    return {a:1,c:3,d:4,e:5};
}

var {
    a:first,
    b:second = 10,
    c:third,
    ...fourth
} = obj = data1();


// console.log(obj);
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);


// Further Destructuring

var defaults = {
    url: "http://some.base.url/api",
    method: "post",
    headers: [
        "Content-Type: text/plain"
    ]
}

// console.log(defaults)

var settings = {
    url: "http://some.other.url/",
    data: 42,
    callback: function(resp) { /* ... */ }
}

// ajax( Object.assign({},defaults,settings))

function ajaxOptions({
    url = "http://some.base.url/api",
    method = "post",
    data,
    callback,
    headers: [
        headers0 = "Content-Type: text/plain",
        ...otherHeaders
    ] = []
} = {}) {
    return {
        url, method, data, callback,
        headers: [
            headers0,
            ...otherHeaders
        ]
    };
}

defaults = ajaxOptions();

// console.log(defaults);