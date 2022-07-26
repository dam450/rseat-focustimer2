import { toggleCard } from "./modules/cards.js";
import controls from "./modules/controls.js";
import display from "./modules/display.js";
import elements from "./modules/elements.js";
import Sound from "./modules/sounds.js";
import Timer from "./modules/timer.js";

const sound = Sound()
const { 
  playButton, stopButton, minusButton, plusButton, 
  crowdButton, fireButton, forestButton, rainButton,
  crowdSlider, fireSlider, forestSlider, rainSlider 
} = elements

display.update(0, 2)
Timer.update(0, 2)

const appBody = document.querySelector('body')
const btnDark = document.querySelector('#dark-on')
const btnLight = document.querySelector('#light-on')

let preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches
console.log(`prefere modo escuro: ${preferDark}`)

if (preferDark) {
  darkMode(true)
}

/**
 * change dark mode On (true) or Off (false)
 * @param {boolean} bool 
 */
function darkMode(bool) {
  if(bool) {
    btnDark.classList.toggle('hide')
    appBody.classList.add('dark')
    btnLight.classList.toggle('hide')
  }
  else {
    btnLight.classList.toggle('hide')
    appBody.classList.remove('dark')
    btnDark.classList.toggle('hide')
  }
}

/*  Theme mode ====================================================  */
btnDark.addEventListener('click', () => {
  darkMode(false)
})

btnLight.addEventListener('click', () => {
  darkMode(true)
})


/* controls ============================================================  */
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


/*  Card buttons  =================================================== */
crowdButton.addEventListener('click', () => {
  Sound().toggle()
  sound.sndCrowd.volume = 0.5
  crowdSlider.value = 50
  sound.crowd()
  toggleCard(0)
})

rainButton.addEventListener('click', () => {
  Sound().toggle()
  sound.sndRain.volume = 0.5
  rainSlider.value = 50
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


/* volume sliders  ================================================== */
crowdSlider.addEventListener('input', function() {
  let vol = this.value
  sound.sndCrowd.volume = vol/100
})

fireSlider.addEventListener('input', function() {
  let vol = this.value
  sound.sndFire.volume = vol/100
})

forestSlider.addEventListener('input', function() {
  let vol = this.value
  sound.sndForest.volume = vol/100
})

rainSlider.addEventListener('input', function() {
  let vol = this.value
  sound.sndRain.volume = vol/100
})

