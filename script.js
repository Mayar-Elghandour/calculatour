// Select all elements with the class "item"
const items = document.querySelectorAll(".item");

// Loop through each item and add the event listener
items.forEach(function(item) {
    item.addEventListener("click", function() {
        if (reset === 1) {
            clear();
            reset = 0;
            console.log("pressed");
        }
        document.getElementById("display").innerHTML += item.innerHTML;
        console.log(item.innerHTML);
    });
});

const ops = document.querySelectorAll(".op");
ops.forEach(function(op) {
    op.addEventListener("click", function() {
        if (reset === 1) {
            clear();
            reset = 0;
            console.log("pressed");
        }
        document.getElementById("display").innerHTML += op.innerHTML;
    });
});

function clear() {
    document.getElementById("display").innerHTML = "";
}

var reset = 0;
document.getElementById("clear").addEventListener("click", clear);

document.getElementById("equal").addEventListener("click", function() {
    var result = eval(document.getElementById("display").innerHTML);
    if (result === Infinity || result=== undefined ) {
        reset = 1;
        console.log("will reset");
    } else {
        reset = 0;
        console.log("will not reset");
    }
    document.getElementById("display").innerHTML = result;
});
document.getElementById("back").addEventListener("click", function() {
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0, -1);});