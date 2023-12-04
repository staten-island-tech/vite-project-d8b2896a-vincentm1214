import { songInventory } from "./arr";
let mode = "light";
const body = document.querySelector("body");
const toggleButton = document.getElementById("toggle-mode");
const commissionfilter = document.getElementById("comm-filter");
const nocommissionfilter = document.getElementById("noncomm-filter");
const leoneedfilter = document.getElementById("leoneed-filter");
const moremorejumpfilter = document.getElementById("mmj-filter")
const vividbadsquadfilter = document.getElementById("vbs-filter")
const wonderlandxshowtimefilter = document.getElementById("wxs-filter")
const niightcore2500filter = document.getElementById("n25-filter")
const vocaloidfilter = document.getElementById("vocal-filter")
const songapp = document.getElementById('app');
const songCards = document.getElementById('container');




function insertCards(songs){
 //arr represents an array such as cuisine/menu items
 songs.forEach((x) => {
DOMSelectors.container.insertAdjacentHTML(
 "beforeend",
 `<div class="card">
     <h3 class = "name">${x.name}</h3>
     <img src="${x.image}" class="cardimg">
     <h4 class = ${x.Artist}>Artist</h4>
 </div> `


 )})};
  //set up initial menu on screen
insertCards(choices)
/*
DOMSelectors.group1.addEventListener("click", function(event){
clearfields()
const makevivid = songInventory.filter((songInventory) => songInventory.Group === "Vivid Bad Squad");
make(makevivid)
});


DOMSelectors.group2.addEventListener("click", function(event){
   event.preventDefault();
   function clearfields(){
       DOMSelectors.container.innerHTML="";
   }
   clearfields()
   function make(){
       const makenight = categories.filter((category) => songInventory.Group === "Nightcore 25:00");
       makenight.forEach((songInventory)=>
   {const card =
       `<div class="container">
       <div class="card">
           <h3 class = "name">${songInventory.name}</h3>
           <img src="${songInventory.image}" class="cardimg">
           <h4 class = ${songInventory.Artist}>Artist</h4>
       </div> 
   </div>`
   DOMSelectors.container.insertAdjacentHTML(
       "beforeend",
       card,
      
   )})}
   make()
});


DOMSelectors.group3.addEventListener("click", function(event){
 event.preventDefault();
 function clearfields(){
     DOMSelectors.container.innerHTML="";
 }
 clearfields()
 function make(){
     const makeleo = categories.filter((category) => songInventory.Group === "Leo Need");
     makeleo.forEach((songInventory)=>
 {const card =
     `<div class="container">
     <div class="card">
         <h3 class = "name">${songInventory.name}</h3>
         <img src="${songInventory.image}" class="cardimg">
         <h4 class = ${songInventory.Artist}>Artist</h4>
     </div> 
 </div>`
 DOMSelectors.container.insertAdjacentHTML(
     "beforeend",
     card,
    
 )})}
 make()
});


DOMSelectors.group4.addEventListener("click", function(event){
 event.preventDefault();
 function clearfields(){
     DOMSelectors.container.innerHTML="";
 }
 clearfields()
 function make(){
     const makemmj = categories.filter((category) => songInventory.Group === "More More Jump");
     makemmj.forEach((songInventory)=>
 {const card =
     `<div class="container">
     <div class="card">
         <h3 class = "name">${songInventory.name}</h3>
         <img src="${songInventory.image}" class="cardimg">
         <h4 class = ${songInventory.Artist}>Artist</h4>
     </div> 
 </div>`
 DOMSelectors.container.insertAdjacentHTML(
     "beforeend",
     card,
    
 )})}
 make()
});


DOMSelectors.group5.addEventListener("click", function(event){
 event.preventDefault();
 function clearfields(){
     DOMSelectors.container.innerHTML="";
 }
 clearfields()
 function make(){
     const makewxs = categories.filter((category) => songInventory.Group === "WonderlandxShowtime");
     makewxs.forEach((songInventory)=>
 {const card =
     `<div class="container">
     <div class="card">
         <h3 class = "name">${songInventory.name}</h3>
         <img src="${songInventory.image}" class="cardimg">
         <h4 class = ${songInventory.Artist}>Artist</h4>
     </div> 
 </div>`
 DOMSelectors.container.insertAdjacentHTML(
     "beforeend",
     card,
    
 )})}
 make()
});


DOMSelectors.group6.addEventListener("click", function(event){
 event.preventDefault();
 function clearfields(){
     DOMSelectors.container.innerHTML="";
 }
 clearfields()
 function make(){
     const makevocal = categories.filter((category) => songInventory.Group === "Vocaloid");
     makevocal.forEach((songInventory)=>
 {const card =
     `<div class="container">
     <div class="card">
         <h3 class = "name">${songInventory.name}</h3>
         <img src="${songInventory.image}" class="cardimg">
         <h4 class = ${songInventory.Artist}>Artist</h4>
     </div> 
 </div>`
 DOMSelectors.container.insertAdjacentHTML(
     "beforeend",
     card,
    
 )})}
 make()
});*/


//combine all buttons into one Nodelist/Array
let buttons = document.querySelectorAll(".group1, .group2, .group3, .group4, .group5, .group6")


// for each button we add anevent listener
buttons.forEach((btn)=> btn.addEventListener("click", function(){
   //get value/text content of button to be compared later
   let type = btn.textContent.toLowerCase()
   //filter the main array by the type of cuisine
   let newArr = categories.filter((category) => category.Group === type)
   clearfields()
   //pass filtered array into insertcards to put on screen
  insertCards(newArr)
}))




document.querySelector(".filter").addEventListener("click", function() {
   if(document.body.classList.contains("yes")){
       document.body.classList.remove("yes");
       document.body.classList.add("yes");
   }
   else{
       document.body.classList.add("girl");
       document.body.classList.remove("boy");
   }
});
