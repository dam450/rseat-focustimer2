import sounds from "./sounds.js"
import elements from "./elements.js"
const { 
  crowdButton, fireButton, forestButton, rainButton,
  crowdSlider, fireSlider, forestSlider, rainSlider
} = elements

const card = [
  {name: 'crowd', button: crowdButton, slider: crowdSlider, sound: sounds().sndCrowd},
  {name: 'fire', button: fireButton, slider: fireSlider, sound: sounds().sndFire},
  {name: 'forest', button: forestButton, slider: forestSlider, sound: sounds().sndForest},
  {name: 'rain', button: rainButton, slider: rainSlider, sound: sounds().sndRain}
]


// const card = [crowdButton, fireButton, forestButton, rainButton]

let activeCardID = null

function clearCards(){
  for (let i = 0; i < card.length; i++) {
    const element = card[i];
    // element.classList.remove('active')
    element.button.classList.remove('active')
    element.slider.value = 50
    activeCardID = null
  }
}

function toggleCard( id ){
  const element = card[id];

  if (activeCardID == id) {
    // element.classList.remove('active')
    element.button.classList.remove('active')
    element.slider.value = 50
    activeCardID = null
  } else {
    clearCards()
    element.button.classList.add('active')
    element.slider.value = 50
    activeCardID = id
  }
}

export {clearCards, toggleCard}