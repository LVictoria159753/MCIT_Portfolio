//Book objects will be stored in an array
let myLibrary=[];
console.log(myLibrary);


//Object Constructor
function myBook (title, author, pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
};

//constructor function where user input is pushed into array 
function addBookToLibrary (){
  let inputTitle = document.getElementById("title");
  let inputAuthor = document.getElementById("author");
  let inputPages = document.getElementById("pages");
  let inputRead = document.getElementById("read");
  title = inputTitle.value;
  author = inputPages.value;
  pages = inputAuthor.value;
  read= inputRead.value;
  summary = new myBook ( this.title, this.pages, this.author, this.read)
  myLibrary.push(summary);
}

//display library as well as the cards that pop up
function displayLibrary (){
const container= document.querySelector("#container");

// childElementCount- counts the number of child elements 
for (let i = container.childElementCount;i<myLibrary.length; i++){
    console.log(myLibrary[i]);
    //let displayBooks=document.querySelector("#displayBooks").innerHTML= myBook.author + myBook.toString  + myBook.pages + myBook.read;

    let card= document.createElement("div");
        card.classList.add("card");
        card.dataset.index = i;
          let title = document.createElement("h3");
              title.textContent = myLibrary[i].title;
          let author = document.createElement("p");
              author.textContent = myLibrary[i].author;
          let pages = document.createElement("div");
              pages.textContent = myLibrary[i].pages;
          let bookstatusread = document.createElement("label")

    let bookstatus= document.createElement("input")
          bookstatus.type = "checkbox";
          bookstatus.value = "read"
          bookstatus.name = "readstatus"
          bookstatus.id = "status-checkbox";
          if (myLibrary[i].readstatus === "completed") {
            bookstatus.checked = true;
          }
      
          if (bookstatus.value === "completed" && bookstatus.checked === true) {
            myLibrary[i].readStatus = "completed";
          }
          let info = document.createElement("span");

      bookstatusread.appendChild(bookstatus);
      info.textContent = "Finished";
      bookstatusread.appendChild(info);


//appending card elements
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(bookstatusread);
    container.appendChild(card);
  
//delete button setup
    let buttonDiv=document.createElement("div");
    let deleteButton=document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent= "delete";
        buttonDiv.appendChild(deleteButton);
        card.appendChild(buttonDiv);
        deleteButton.addEventListener('click', myFunction);

//deleting the card content
function myFunction() {
  myLibrary.splice(card.dataset.index, 1);
  container.removeChild(card);
  let children = Array.from(container.childNodes);
  for (let i = 0; i < children.length; i++) {
    children[i].dataset.index = i;
};
}
}}




//Allows the table values to be populated.
let submit=document.querySelector("#submit");
submit.addEventListener('click', () => {
  addBookToLibrary();
  displayLibrary();
});



/* Scrap Code

  //creating book card
  function booktile(){
  
    const container= document.querySelector("container");
     const tile = document.createElement("div");
    
     tile.style.width = "100px";
     tile.style.height = "100px";
     tile.style.background = "red";
     tile.style.color = "white";
     tile.innerHTML = "Hello";
    container.appendChild(tile)
      }
    
    myLibrary.forEach(function (){
      booktile();
    
    });

    //prints userinput on the webpage so you can see what is going on. 
function print() {
    document.getElementById("displayTitle").innerHTML = document.getElementById('title').value + " ";
    document.getElementById("displayAuthor").innerHTML=document.getElementById('author').value + " " ;
    document.getElementById("displayPages").innerHTML=document.getElementById('pages').value +" ";
    document.getElementById("displayRead").innerHTML=document.getElementById('read').value +" ";
  }
  print();



  //html 
    
    <table id="container">
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Read</th>
        </tr>
    
 */