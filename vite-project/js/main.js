import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const DOMSelectors = {
  card: document.querySelector("#card")
}




// DOMSelectors.card.insertAdjacentHTML(
//       "beforeend",
//       `<div class="display-card">
//       <h2>${foood.name.value}</h2>
//       <h3>${foood.description.value}</h3> 
//       <img class="display-img" src="${foood.url}" alt="">
//       <button class="remove-bn">Remove food</button> </div>`
//       );
//}



// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>web bowsers</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
