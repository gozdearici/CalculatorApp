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
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        item.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
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
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        item.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
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