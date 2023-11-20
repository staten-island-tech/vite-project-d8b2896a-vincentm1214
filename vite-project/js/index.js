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
  },
  {
    name: "Disney Princess Dress Up Trunk",
    price: 29.99,
    ageGroup: 3,
    rating: 4.4,
    description: "A dress-up trunk with costumes and accessories for young princesses.",
    brand: "Disney",
    category: "Dress-Up"
  },
  {
    name: "Fisher-Price Little People Caring for Animals Farm",
    price: 34.99,
    ageGroup: 1,
    rating: 4.6,
    description: "A farm playset with animals and interactive features.",
    brand: "Fisher-Price",
    category: "Playsets"
  },
  {
    name: "L.O.L. Surprise! O.M.G. Fashion Doll",
    price: 24.99,
    ageGroup: 6,
    rating: 4.2,
    description: "A stylish fashion doll with surprises and accessories.",
    brand: "L.O.L. Surprise!",
    category: "Dolls & Accessories"
  },
  {
    name: "KidKraft Waterfall Mountain Train Set and Table",
    price: 129.99,
    ageGroup: 3,
    rating: 4.7,
    description: "A wooden train set and table for imaginative play.",
    brand: "KidKraft",
    category: "Playsets"
  },
  {
    name: "Playmobil City Life Hospital Playset",
    price: 44.99,
    ageGroup: 4,
    rating: 4.5,
    description: "A detailed hospital playset with figurines and accessories.",
    brand: "Playmobil",
    category: "Playsets"
  },
  {
    name: "Melissa & Doug Deluxe Wooden Railway Set",
    price: 89.99,
    ageGroup: 3,
    rating: 4.8,
    description: "A wooden railway set with tracks, trains, and accessories.",
    brand: "Melissa & Doug",
    category: "Vehicles"
  },
  {
    name: "Cabbage Patch Kids Doll",
    price: 29.99,
    ageGroup: 3,
    rating: 4.4,
    description: "Adorable Cabbage Patch Kids doll with a unique birth certificate.",
    brand: "Cabbage Patch Kids",
    category: "Dolls & Accessories"
  },
  {
    name: "NERF Ultra One Motorized Blaster",
    price: 39.99,
    ageGroup: 8,
    rating: 4.7,
    description: "A powerful motorized blaster with high-capacity dart drum.",
    brand: "Nerf",
    category: "Outdoor Play"
  },
  {
    name: "Funko Pop! Star Wars Bobble-Head Figures",
    price: 12.99,
    ageGroup: 3,
    rating: 4.3,
    description: "Collectible Bobble-Head figures featuring Star Wars characters.",
    brand: "Funko",
    category: "Collectibles"
  },
  
];

console.log(toyStoreInventory);

function createToyCard(toy){
  const toyCard = document.createElement('div');
  toyCard.classList.add('toy-card');
  
  toyCard.textContent = `${toy.name} ${toy.price} ${toy.ageGroup} ${toy.rating} ${toy.description} ${toy.brand} ${toy.category}`;
  toyApp.appendChild(toyCard);
}
function displaytoys(toys){
  toys.forEach(createToyCard);
}
displaytoys(toyStoreInventory);

toggleButton.addEventListener('click', () => {
  body.classList.toggle("dark");
  button.classList.toggle("dark");
  if (mode === "light"){
    mode = "dark";
    toggleButton.textContent = "Change to light mode."
  }else{
    mode = "light";
    toggleButton.textContent = "Change to dark mode."
  }
})


const filteredPrices = toyStoreInventory.filter((toy) => toy.price <= 50.00);
priceFilter.addEventListener('click', () => {
  filteredPrices;
});
const filteredAges = toyStoreInventory.filter((toy) => toy.ageGroup >= 8);
ageFilter.addEventListener('click', () => {
  filteredAges;
});
const filteredRatings = toyStoreInventory.filter((toy) => toy.rating >= 4.7);
ratingFilter.addEventListener('click', () => {
  filteredRatings;
});
const filteredConstruction = toyStoreInventory.filter((toy) => toy.category === "Construction");
constructionFilter.addEventListener('click', () => {
  filteredConstruction;
})
const filteredDolls = toyStoreInventory.filter((toy) => toy.category === "Dolls & Accessories");
dollsFilter.addEventListener('click', () => {
  filteredDolls;
});
const filteredVehicles = toyStoreInventory.filter((toy) => toy.category === "Vehicles");
vehiclesFilter.addEventListener('click', () => {
  filteredVehicles;
});
const filteredOutdoor = toyStoreInventory.filter((toy) => toy.category === "Outdoor Play");
outdoorFilter.addEventListener('click', () => {
  filteredOutdoor;
});
const filteredBoard = toyStoreInventory.filter((toy) => toy.category === "Board Games");
boardFilter.addEventListener('click', () => {
  filteredBoard;
});
const filteredInfant = toyStoreInventory.filter((toy) => toy.category === "Infant Toys");
infantFilter.addEventListener('click', () => {
  filteredInfant;
});
const filteredAction = toyStoreInventory.filter((toy) => toy.category === "Action Figures");
actionFilter.addEventListener('click', () => {
  filteredAction;
});
const filteredEducational = toyStoreInventory.filter((toy) => toy.category === "Educational Toys");
educationalFilter.addEventListener('click', () => {
  filteredEducational;
});
const filteredArts = toyStoreInventory.filter((toy) => toy.category === "Arts & Crafts");
artsFilter.addEventListener('click', () => {
  filteredArts;
});
const filteredPuzzles = toyStoreInventory.filter((toy) => toy.category === "Puzzles");
puzzlesFilter.addEventListener('click', () => {
  filteredPuzzles;
});
const filteredPlaysets = toyStoreInventory.filter((toy) => toy.category === "Playsets");
constructionFilter.addEventListener('click', () => {
  filteredPlaysets;
});
const filteredDressup = toyStoreInventory.filter((toy) => toy.category === "Dress-Up");
dressupFilter.addEventListener('click', () => {
  filteredDressup;
});
const filteredCollectibles = toyStoreInventory.filter((toy) => toy.category === "Collectibles");
collectiblesFilter.addEventListener('click', () => {
  filteredCollectibles;
});