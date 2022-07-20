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


countdown()

playButton.addEventListener('click', () => {
  Sound().click()
})

stopButton.addEventListener('click', () => {
  sound.click()
})

minusButton.addEventListener('click', () => {
  sound.click()
  controls.subtractMinutes()
})

plusButton.addEventListener('click', () => {
  sound.click()
  controls.addMinutes()
})

crowdButton.addEventListener('click', () => {
  sound.crowd()
  crowdButton.classList.toggle('active')
})

rainButton.addEventListener('click', () => {
  sound.crowd()
  rainButton.classList.toggle('active')
})

forestButton.addEventListener('click', () => {
  sound.crowd()
  forestButton.classList.toggle('active')
})

fireButton.addEventListener('click', () => {
  sound.crowd()
  fireButton.classList.toggle('active')
})