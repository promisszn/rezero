var fruits = ['mango', 'apple', 'berry', 'grape', 'banana'];
const button = document.querySelector('button');

function loadFruits() {
    const p = document.getElementById('fruits');
    p.innerHTML = fruits;
}

function addFruits() {
    var favorite = prompt('What is your favorite? ');
    fruits.push(favorite);
    document.getElementById('fruits').innerHTML = fruits;
}

button.addEventListener('click', addFruits);
document.addEventListener('DOMContentLoaded', loadFruits);

var grades = [80, , 94, , 62, 98, , 81, 74, 91];

var sum = 0 ;
var count = 0;

if(grades.length > 0){
    for(i = 0; i < grades.length; i++ ){
        if(grades[i] != undefined){
            sum += grades[i];
        }
        count = ++count;
    }
}

var avg = sum / count;
console.log(avg);



// const butt1 = document.querySelector(".butt1");

// const butt2 = document.querySelector(".butt2");

// function closeMe() {
//     // Find the element
//     x = document.getElementById("demo");
//     //Option 1: Change the style attribute directly
//     x.style.display = "none";

//     //Option 2: Change the class
//     // x.className="closed";
// }

// function openMe() {
//     // Find the element
//     x = document.getElementById("demo");
//     //Option 1: Change the style attribute directly
//     x.style.display = "block";

//     //Option 2: Change the class
//     // x.className="open";
// }

// butt1.addEventListener('click', openMe);
// butt2.addEventListener('click', closeMe);