//purple pen color
const warmpen=document.querySelector(".warm");

warmpen.addEventListener("click", warmPen)
function warmPen(){
    pen= "rgb(148, 34, 34, .1)";
}
//set 1st pen color 
let pen= '#D3D3D3';


// creating div
function divBlock(boxnum) {
   sketchpad.innerHTML = "";
    for (let i=0; i<boxnum;i++){
        //box creation outer row
            let row= document.createElement('div');
            row.className = "row";
           
     for (let j=0; j<boxnum;j++){
        let box = document.createElement('div');
            //box creation inner loop
                box.className = "box";
                row.appendChild(box);
            //mouse hover function
                box.addEventListener('mouseover', changeColor);
                function changeColor(){box.style.background = pen;
                }
                
    }
        document.getElementById('sketchpad').appendChild(row); 
       sketchpad.appendChild(row);
        
    }
}
divBlock(16);


//refresh button
const refresh = document.querySelector("#clear");
refresh.addEventListener("click", clear);

function clear(){
    location.reload();
}

//erase button
const erase = document.querySelector("#erase");
erase.addEventListener("click", eraseColor)

function eraseColor(){
    erase.addEventListener("mouseover",function(){
        pen= "white";})
}


//takes user input for how many squares they want in the grid.
document.getElementById("gridbtn").addEventListener('click' , () => {
    let x = document.getElementById("gridinput").value;
    if (x>100){
        alert("Cell height/width is bigger than 100. Pick a number smaller than 100.")
        return;}
   // container.innerHTML = '';
    divBlock(x);
});


//Makes it so the grid is erase so user input grid can be placed in the same place as the old grid
function deleteGrid() {
    let sketchpad = document.getElementById("sketchpad");
    while (sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.lastChild);
    }
}



/*

// user input what grid size
let submitBtn= document.querySelectorAll("submit").textContent;

submitBtn= document.querySelectorAll("test").value;

submitBtn.addEventListener("click", userinput);
             
function userinput(){
  alert(submitBtn);  
}
*/

/* Scrap Code
    let x=document.getElementsByClassName(".box");

    x.addEventListener("mouseover", function(event){
        event.target.style.color = "orange";
    
    });
*/    
    
//Scrap code
    //Created one div and styled it
/*let div= document.createElement("div");
document.getElementById("mini").append(div);

div.style.width="50px";
div.style.height="50px";
div.style.color= "green";
div.style.background="red";
div.innerHTML = "Testing";
*/

/*
function divBlock(grid){
for (let i=0; i<grid ;i++){
    let row= document.getElementById("mini").append(div);
    container.appendChild(row);
        row.style.width="50px";
        row.style.height="50px";
        row.style.color= "green";
        row.style.background="red";
        row.innerHTML = "Testing";

}
}

divBlock(100);
*/


/* Confusing things
let submitButton= document.getElementById ("submit");
let x= document.getElementById("text").value;

submitButton.addEventListener("click", userinput);
             
function userinput(){
  alert(x);  
}


submit.addEventListener("click",p2)

function p2()
{let x= document.getElementById("submit").textContent;

document.getElementById("test").innerHTML=x;}

*/