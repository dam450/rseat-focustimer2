import display from "./display.js"
import sounds from "./sounds.js"


let timeoutID = null
let totalMinutes = 0
let totalSeconds = 0

function countdown () {

  let minutesCounter = display.getMinutes()
  let secondsCounter = display.getSeconds()

  if(minutesCounter===0 && secondsCounter===0){
    sounds().alarm()
    reset()
    return
  }

  console.log(`countdown: ${minutesCounter}:${secondsCounter}`)

  timeoutID = setTimeout( () => {


    if(secondsCounter===0 && minutesCounter>0){
      minutesCounter--
      secondsCounter = 59
    } else {
      secondsCounter--
    }

    display.update(minutesCounter, secondsCounter)

    countdown()
    
  }, 1000)
}

function stop() {
  clearTimeout(timeoutID)
}

function reset() {
  clearTimeout(timeoutID)
  display.update(totalMinutes, totalSeconds)
}

function setMinutes (minutes) {
  totalMinutes = minutes
}

function update (minutes, seconds) {
  totalMinutes = minutes
  totalSeconds = seconds
}

export default { countdown, stop, update, reset, setMinutes }