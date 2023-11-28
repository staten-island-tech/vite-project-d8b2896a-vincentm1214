import "../css/style.css"
import { DOMSelectors } from "./dom";
import { songInventory } from "./arr";


const createsong= function makesong(song) {
  DOMSelectors.containers.insertAdjacentHTML("beforeend",
`<div class="container" id=allcontainer>
  ${song.name}
  ${song.commissioned}
  ${song.Group}
  ${song.Artist}
  <div>`
  )
 songCards.insertAdjacentHTML('beforeend', songlist);
 }
  songInventory.forEach((song) => createsong(song));
  console.log(songInventory);
  function makeSongCard(song){
   const songCard = document.createElement('div');
   songCard.classList.add('song-card');
  
   songCard.textContent = `${song.name} ${song.commissioned} ${song.Group} ${song.Artist} `;
   songCards.appendChild(songCard);
 }
 function showmusic(songs){
   songCards.textContent = ``;
   songs.forEach(makeSongCard);
 }
//  showmusic(songInventory);
//   toggleButton.addEventListener('click', () => {
//    body.classList.toggle("dark");
//    button.classList.toggle("dark");
//    if (mode === "light"){
//      mode = "dark";
//      toggleButton.textContent = "Light Mode"
//    }else{
//      mode = "light";
//      toggleButton.textContent = "Dark Mode"
//    }
//  })
 function applyFilter(event, filteredArray){
 const isActive = event.target.dataset.active === "true";
   if (isActive === true) {
     showmusic(songInventory)
     event.target.dataset.active = "false";
   }else{
     showmusic(filteredArray)
     event.target.dataset.active = "true";
   } 
 };
 const filtercomm = songInventory.filter((song) => song.commissioned ==true);
 commissionfilter.addEventListener('click', (event) => {
   applyFilter(event, filtercomm);
 });
 const filternoncomm = songInventory.filter((song) => song.commissioned ==false);
 nocommissionfilter.addEventListener('click', (event) => {
   applyFilter(event, filternoncomm);
 });
 const filterln = songInventory.filter((song) => song.Group == "Leo Need");
 leoneedfilter.addEventListener('click', (event) => {
   applyFilter(event, filterln);
 });
 const filtermmj = songInventory.filter((song) => song.Group == "More More Jump");
 moremorejumpfilter.addEventListener('click', (event) => {
   applyFilter(event, filtermmj);
 });
 const filtervbs = songInventory.filter((song) => song.Group == "Vivid Bad Squad");
 vividbadsquadfilter.addEventListener('click', (event) => {
   applyFilter(event, filtervbs);
 });
 const filterwxs = songInventory.filter((song) => song.Group == "WonderlandxShowtime");
 wonderlandxshowtimefilter.addEventListener('click', (event) => {
   applyFilter(event, filterwxs);
 });
 const filternijo = songInventory.filter((song) => song.Group == "Nightcore 25:00");
 nightcore2500filter.addEventListener('click', (event) => {
   applyFilter(event, filternijo);
 });
 const filtervocal = songInventory.filter((song) => song.Group == "Vocaloid");
 vocaloidfilter.addEventListener('click', (event) => {
   applyFilter(event, filtervocal);
 });

document.querySelector(".odin").addEventListener("click",function(){
  if(document.body.classList.contains("first")){
    document.body.classList.add("second");
    document.body.classList.remove("first")
  } else{
    document.body.classList.add("first");
    document.body.classList.remove("second")
  }
});