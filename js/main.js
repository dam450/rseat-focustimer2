import { toggleCard } from "./modules/cards.js";
import controls from "./modules/controls.js";
import display from "./modules/display.js";
import elements from "./modules/elements.js";
import Sound from "./modules/sounds.js";
import Timer from "./modules/timer.js";

const sound = Sound()
const { 
  playButton, stopButton, minusButton, plusButton, 
  crowdButton, fireButton, forestButton, rainButton 
} = elements

display.update(0, 2)
Timer.update(0, 2)





playButton.addEventListener('click', () => {
  Sound().click()
  Timer.countdown()

})

stopButton.addEventListener('click', () => {
  Sound().click()
  Timer.stop()


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