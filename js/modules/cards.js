import sounds from "./sounds.js"

import elements from "./elements.js"
const { 
  crowdButton, fireButton, forestButton, rainButton,
  crowdSlider, fireSlider, forestSlider, rainSlider
} = elements

// const card = [
//   {name: 'crowd', button: crowdButton, slider: crowdSlider},
//   {name: 'fire', button: fireButton, slider: fireSlider},
//   {name: 'forest', button: forestButton, slider: forestSlider},
//   {name: 'rain', button: rainButton, slider: rainSlider}
// ]


const card = [crowdButton, fireButton, forestButton, rainButton]

let activeCardID = null

function clearCards(){
  for (let i = 0; i < card.length; i++) {
    const element = card[i];
    element.classList.remove('active')
    activeCardID = null
  }
}

function toggleCard( id ){
  const element = card[id];

  if (activeCardID == id) {
    element.classList.remove('active')
    activeCardID = null
  } else {
    clearCards()
    element.classList.add('active')
    activeCardID = id
  }
}

export {clearCards, toggleCard}