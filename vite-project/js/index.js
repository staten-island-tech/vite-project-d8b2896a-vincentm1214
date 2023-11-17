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
const toyApp = document.getElementById('app');
const toyStoreInventory = [
  {
    name: "Cinema",
    Commissioned: true,
    Group: "Vivid Bad Squad",
    description: "A timeless set of colorful building bricks for creative play.",
    brand: "LEGO",
  },
  {
    name: "Aishite Aishite Aishite",
    price: 149.99,
    ageGroup: 3,
    rating: 4.2,
    description: "A luxurious dollhouse for Barbie and friends with interactive features.",
    brand: "Barbie",
    category: "Dolls & Accessories"
  },
  {
    name: "Hot Wheels 10-Car Pack",
    price: 9.99,
    ageGroup: 3,
    rating: 4.0,
    description: "A collection of 10 iconic Hot Wheels cars for racing and play.",
    brand: "Hot Wheels",
    category: "Vehicles"
  },
  {
    name: "Nerf N-Strike Elite Disruptor Blaster",
    price: 12.99,
    ageGroup: 8,
    rating: 4.7,
    description: "A quick-draw blaster for action-packed Nerf battles.",
    brand: "Nerf",
    category: "Outdoor Play"
  },
  {
    name: "Monopoly Board Game",
    price: 19.99,
    ageGroup: 8,
    rating: 4.6,
    description: "The classic board game of buying, selling, and trading properties.",
    brand: "Hasbro",
    category: "Board Games"
  },
  {
    name: "Baby Einstein Take Along Tunes Musical Toy",
    price: 7.99,
    ageGroup: 0,
    rating: 4.8,
    description: "An engaging musical toy for infants with colorful lights and melodies.",
    brand: "Baby Einstein",
    category: "Infant Toys"
  },
  {
    name: "Paw Patrol Adventure Bay Rescue Playset",
    price: 24.99,
    ageGroup: 3,
    rating: 4.3,
    description: "A fun playset featuring the Paw Patrol pups and their adventures.",
    brand: "Paw Patrol",
    category: "Action Figures"
  },
  {
    name: "Fisher-Price Laugh & Learn Smart Stages Chair",
    price: 34.99,
    ageGroup: 3,
    rating: 4.9,
    description: "An interactive chair that introduces learning concepts to toddlers.",
    brand: "Fisher-Price",
    category: "Educational Toys"
  },
  {
    name: "LEGO Disney Frozen II Elsa's Jewelry Box Creation",
    price: 39.99,
    ageGroup: 6,
    rating: 4.4,
    description: "A LEGO set inspired by Disney's Frozen II for creative building.",
    brand: "LEGO",
    category: "Construction"
  },
  {
    name: "Crayola Inspiration Art Case",
    price: 19.99,
    ageGroup: 4,
    rating: 4.1,
    description: "A comprehensive art set with various coloring tools and supplies.",
    brand: "Crayola",
    category: "Arts & Crafts"
  },
  {
    name: "Play-Doh Kitchen Creations Ice Cream Set",
    price: 14.99,
    ageGroup: 3,
    rating: 4.0,
    description: "A Play-Doh set for making pretend ice cream treats.",
    brand: "Play-Doh",
    category: "Arts & Crafts"
  },
  {
    name: "Transformers Bumblebee Action Figure",
    price: 19.99,
    ageGroup: 6,
    rating: 4.6,
    description: "A poseable action figure of the beloved Transformers character.",
    brand: "Hasbro",
    category: "Action Figures"
  },
  {
    name: "Melissa & Doug Wooden Puzzles Set",
    price: 16.99,
    ageGroup: 2,
    rating: 4.7,
    description: "A set of wooden puzzles for early learning and fine motor skills.",
    brand: "Melissa & Doug",
    category: "Puzzles"
  },
  {
    name: "Little Tikes First Slide",
    price: 29.99,
    ageGroup: 6,
    rating: 4.5,
    description: "A beginner's slide for indoor or outdoor play.",
    brand: "Little Tikes",
    category: "Outdoor Play"
  },
  {
    name: "My Little Pony Friendship Castle Playset",
    price: 49.99,
    ageGroup: 3,
    rating: 4.3,
    description: "A magical castle playset for My Little Pony adventures.",
    brand: "My Little Pony",
    category: "Playsets"
  },
  {
    name: "VTech Touch and Teach Word Book",
    price: 19.99,
    ageGroup: 3,
    rating: 4.8,
    description: "An interactive book that introduces words, letters, and more.",
    brand: "VTech",
    category: "Educational Toys"
  },
  {
    name: "Magna-Tiles Clear Colors 100-Piece Set",
    price: 119.99,
    ageGroup: 3,
    rating: 4.9,
    description: "Magnetic building tiles for open-ended creative play.",
    brand: "Magna-Tiles",
    category: "Construction"
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