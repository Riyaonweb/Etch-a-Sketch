const container = document.getElementById("container");
const value = document.getElementById("value");
const black = document.getElementById("black");
const pixel = document.getElementById("pixel");
const colors = document.querySelectorAll(".color");
function color(){
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,'0').toUpperCase();
    console.log(randomColor);
    return randomColor;
}

//16*16 grid
function getValue(){
    value.addEventListener("click",() => {
        var input = prompt("Enter number");
        value.innerText = input+ "*" +input;
        console.log("input", input);
        defaultGrid(input);
        return input;
    })
}

getValue();

function defaultGrid(inputValue){
console.log("inputValue", inputValue);
for(let i=0; i<(inputValue*inputValue); i++){
    const div = document.createElement('div');
    div.style.border = "1px solid black";
    div.classList.add("active");
    let w = `calc(100% / ${inputValue})`;
    let h = `calc(100% / ${inputValue})`;
    div.style.width = w;
    div.style.height = h;
    container.appendChild(div);
    console.log(div);
}
}

function chooseColor(){
    colors.forEach((color) => {
        color.addEventListener("click",(e) => {
            if(e.target.innerHTML === "Pixel"){
                pixels();
            }
        else if(e.target.innerHTML === "Black"){
            blacks();
        }
    })
})
}
chooseColor();

function blacks(){
    container.addEventListener("mouseover",(e) => {
        if(e.target.classList.contains('active')){
            e.target.style.backgroundColor = "black";
        }
    }); 
}
function pixels(){
    container.addEventListener("mouseover",(e) => {
        if(e.target.classList.contains('active')){
            e.target.style.backgroundColor = color();
        }
    });
    
}





