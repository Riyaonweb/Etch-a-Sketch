const container = document.getElementById("container");


//16*16 grid
function createDiv(){
    for(let i=0; i<256; i++){
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.classList.add("active");
        container.appendChild(div);
        console.log(div)
    }
}
createDiv();

container.addEventListener("mouseover",(e) => {
    if(e.target.classList.contains('active')){
        e.target.style.backgroundColor = "black";
    }
});

