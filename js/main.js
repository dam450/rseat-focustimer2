import { toggleCard } from "./modules/cards.js";
import controls from "./modules/controls.js";
import display from "./modules/display.js";
import elements from "./modules/elements.js";
import Sound from "./modules/sounds.js";
import { countdown } from "./modules/timer.js";

const sound = Sound()
const { 
  playButton, stopButton, minusButton, plusButton, 
  crowdButton, fireButton, forestButton, rainButton 
} = elements

// display.update(16, 7)
// controls.addMinutes()





playButton.addEventListener('click', () => {
  Sound().click()
  countdown()

})

stopButton.addEventListener('click', () => {
  Sound().click()

})

minusButton.addEventListener('click', () => {
  Sound().click()

  controls.subtractMinutes()
})

plusButton.addEventListener('click', () => {
  Sound().click()

  controls.addMinutes()
})

crowdButton.addEventListener('click', () => {
  Sound().toggle()

  sound.crowd()
  toggleCard(0)
})

rainButton.addEventListener('click', () => {
  Sound().toggle()

  sound.rain()
  toggleCard(3)
})

forestButton.addEventListener('click', () => {
  Sound().toggle()

  sound.forest()
  toggleCard(2)
})

fireButton.addEventListener('click', () => {
  Sound().toggle()

  sound.fire()
  toggleCard(1)

})