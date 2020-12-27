let cells = document.getElementsByClassName("cell");
let cells2 = document.getElementsByClassName("cell2");
let cells3 = document.getElementsByClassName("cell3");

cells = Array.from(cells);
cells2 = Array.from(cells2);
cells3 = Array.from(cells3)[0];

let a = "";


let clickedItems = [];


cells.forEach(function cell(item) {
    item.addEventListener("click", function divClick(){
        item.style.color = "white";
        item.style.boxShadow = `inset 0 0 60px whitesmoke,
        inset 20px 0 80px #f0f,
        inset -20px 0 80px #0ff,
        inset 20px 0 300px #f0f,
        inset -20px 0 300px #0ff,
        0 0 50px #fff,
        -10px 0 80px #f0f,
        10px 0 80px #0ff`;
        clickedItems.push(item);
        clickedItems.forEach(function b(item) {
            a += item.textContent;
        });
        cells3.textContent = a;
        a = "";
        console.log(clickedItems);
    });
});

cells2.forEach(function cell(item) {
    item.addEventListener("click", function divClick(){
        item.style.boxShadow = `inset 0 0 60px whitesmoke,
        inset 20px 0 80px #f0f,
        inset -20px 0 80px #0ff,
        inset 20px 0 300px #f0f,
        inset -20px 0 300px #0ff,
        0 0 50px #fff,
        -10px 0 80px #f0f,
        10px 0 80px #0ff`;
        clickedItems.push(item);
        clickedItems.forEach(function b(item) {
            a += item.textContent;
        });
        cells3.textContent = a;
        a = "";
        console.log(item.textContent);
        //1 + 5 = 
        if (item.textContent === "=") {
            let number1 = parseInt(clickedItems[0].textContent);
            let number2 = parseInt(clickedItems[2].textContent);
            let symbol = clickedItems[1].textContent;
            let result = 0;
            if (symbol === "+") {
                result = number1 + number2;
            }
            if (symbol === "-") {
                result = number1 - number2;
            }
            if (symbol === "*") {
                result = number1 * number2;
            }
            if (symbol === "/") {
                result = number1 / number2;
            }
            
            a += result;
            cells3.textContent = a; 
            
            console.log(result);
            clickedItems.forEach(function resetColor(item) {
                item.style.backgroundColor = 'rgb(150, 150, 150)';
            })
            clickedItems = []; 
        }
    });
});