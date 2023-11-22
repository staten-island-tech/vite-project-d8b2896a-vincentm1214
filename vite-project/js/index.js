import "../css/style.css"
let mode = "light";
const body = document.querySelector("body");
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
const songInventory = [


 {
   name: "Cinema",
   Commissioned: true,
   Group: "Vivid Bad Squad",
   Artist:"Ayase",
 },
 {
   name: "Aishite Aishite Aishite",
   commissioned:false,
   Group: "Nightcord 25:00",
   Artist:"Kikuo",
 },
 {
   name: "Bug",
   commissioned:false,
   Group: "Nightcord 25:00",
   Artist:"Kairiki Bear",
 },
 {
   name: "What Sort of Ending Are You Wishing For?",
   commissioned:true,
   Group: "WonderlandxShowtime",
   Artist:"TUYU",
 },
 {
   name: "Phony",
   commissioned:false,
   Group: "Nightcord 25:00",
   Artist:"Tsumiki",
 },
 {
   name: "Venom",
   commissioned:false,
   Group: "Nightcord 25:00",
   Artist:"Kariki Bear",
 },
 {
   name: "Totemo Itai Itagaritai",
   commissioned:false,
   Group: "Nightcord 25:00",
   Artist:"EZFG",
 },
 {
   name: "The Tailor of Enbizaka",
   commissioned:false,
   Group: "Vocaloid",
   Artist:"mothy",
 },
 {
   name: "Patchwork Staccato",
   commissioned:false,
   Group: "More More Jump",
   Artist:"toa",
 },
 {
   name: "Aun no Beats",
   commissioned:false,
   Group: "Vivid Bad Squad",
   Artist:"Hanyuu Maigo",
 },
 {
   name: "Goodbye Senjen",
   commissioned:false,
   Group: "WonderlandxShowtime",
   Artist:"Chinozo",
 },
 {
   name: "Ghost Rule",
   commissioned:false,
   Group: "Leo Need",
   Artist:"DECO*27, Naoki Itai (MUSIC FOR MUSIC)",
 },
 {
   name: "Drop Pop Candy",
   commissioned:false,
   Group: "Vivid Bad Squad",
   Artist:"NayutalieN",
 },
 {
   name: "KING",
   commissioned:false,
   Group: "WonderlandxShowtime",
   Artist:"Kanaria",
 },
 {
   name: "1",
   commissioned:true,
   Group: "Leo Need",
   Artist:"NayutalieN",
 },
 {
   name: "Darling Dance",
   commissioned:false,
   Group: "More More Jump",
   Artist:"Kairiki Bear",
 },
 {
   name: "Tell Your World",
   commissioned:false,
   Group: "Vocaloid",
   Artist:"NayutalieN",
 },




];


function createsong(song) {
 const songlist = `
 <div class="toy-cardcontainer">
 <p>${song.name}</p>
 <p>${song.commissioned}<p>
 <p>${song.Group}<p>
 <p>${song.Artist}<p>
 <div>`
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
 showmusic(songInventory);
  toggleButton.addEventListener('click', () => {
   body.classList.toggle("dark");
   button.classList.toggle("dark");
   if (mode === "light"){
     mode = "dark";
     toggleButton.textContent = "Light Mode"
   }else{
     mode = "light";
     toggleButton.textContent = "Dark Mode"
   }
 })
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
 niightcore2500filter.addEventListener('click', (event) => {
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