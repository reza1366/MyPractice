//-------------------------------------------let and const------------------------------------------------
/*
let a = 5;
const b = 20;
var btn = document.createElement('button');
btn.textContent = a;
btn.addEventListener('click', function () {

    btn.textContent = a++;

})
document.getElementById('main').appendChild(btn);
*/

//-------------------------------------------------destructuring------------------------------------------
var arr = ['one', 'two', 'three'];
var [one, two, three] = arr;


var a, b;
[,a, b,] = [1,2,4,3];

var obj = { p: 5, q: false, f: 'reza',t:[1,2,3,4] };
var { p: foo, f: str, t: [, , arr,] } = obj;



//---------------------------------------------------default parameters-----------------------------------
function sum(a = 1, b = 3)
{
    return a + b;
}
//---------------------------------------------------rest parameters-----------------------------------
//cannot declare parameters after rest parametrs , but before it possible
function sum2(a,...numbers) {
    //another way
    //var numbers = Array.prototype.slice.call(arguments);
    let result = 0;
    numbers.forEach(function (num) {
        result += num;
    })
    return result*a;
}

//------------------------------------------------------spread-----------------------------------------------
var one = ['two', 'three'];
var two = ['one',...one, 'four'];

function sum3(a, b, c) {
    return a + b + c;
}
var args = [1, 2, 3];
console.log(sum3(...args));

//------------------------------------------------------strings-----------------------------------------------
//new line old
console.log("string line one \n"+
"string line two");
//new line ecma6
console.log(`string line one
string line two`);

let v1 = 4;
let v2 = 3
let newStr = `sum of a and b in ${v1 + v2}`;

function tag(strings, ...values) {
    console.log(strings[0]);
    console.log(strings[1]);
    console.log(values[0]);
    console.log(values[1]);
}

tag`hello ${v1 + v2} world ${v1 * v2}`


//-------------------------------------------------Class---------------------------------------------------------------
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
}

let p = new Point(5, 2);

//--------------------------------------------------Getter Setter-----------------------------------------------------
class Point2 {
    constructor() {
    }

    get point() {
        return `(${this.x},${this.y})`;
    }
    set point(value) {
        this.x = value[0];
        this.y = value[1];
    }
}

let p2 = new Point2();
p2.point = [4, 3];


//--------------------------------------------------Inheritance--------------------------------------------------------
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return `${super.toString()},in ${this.color}`;
    }

}
let cp = new ColorPoint(20, 10, 'blue');
//--------------------------------------------------Arrow Functions---------------------------------------------------
let arrowSum = (a, b) => a + b;
console.log(arrowSum(8, 5));

var names = [
    "reza",
    "ahmad",
    "mohammad",
    "asghar"
];
//old
let names2 = names.map(function (n) {
    return n.length;
})
//with arrow function
let names3 = names.map(n => n.length);
let names4 = names.map(n => {
    a=n.length += 1;
    return a;
});
let numbers = [1, 2, 3, 4];
let sumOfNums = 0;
let forEachArrow = numbers.forEach(n => sumOfNums += n);

//-------------------------------------------------Iterator- For of---------------------------------------
//let iterator = numbers.values();
//var next = iterator.next();
//let sumOfitems = 0;
//while (!next.done) {
//    sumOfitems += next.value;
//    next = iterator.next();
//}


for (let v of numbers)
{
    console.log(v);
}
