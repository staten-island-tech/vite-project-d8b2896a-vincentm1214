import './style.css'
let mode = "light";
const body = document.querySelector("body");
const toggleButton = document.getElementById("toggle-mode");
const priceFilter = document.getElementById("price-filter");
const ageFilter = document.getElementById("age-filter");
const ratingFilter = document.getElementById("rating-filter");
const constructionFilter = document.getElementById("construction")
const dollsFilter = document.getElementById("dolls&accessories")
const vehiclesFilter = document.getElementById("vehicles")
const outdoorFilter = document.getElementById("outdoorplay")
const boardFilter = document.getElementById("boardgames")
const infantFilter = document.getElementById("infanttoys")
const actionFilter = document.getElementById("actionfigures")
const educationalFilter = document.getElementById("educationaltoys")
const songApp = document.getElementById('app');
const songInv = [
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
    Group: "More More JUmp",
    Artist:"Kairiki Bear",
  },
  {
    name: "Tell Your World",
    commissioned:false,
    Group: "Vivid Bad Squad",
    Artist:"NayutalieN",
  }]