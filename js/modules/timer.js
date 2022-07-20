import display from "./display.js"

let loop = 0
let timeoutID = null
let totalMinutes = 0
let seconds = 10

function countdown () {
  let minutesCounter = display.getMinutes
  let secondsCounter = display.getSeconds

  if(minutesCounter===0 && secondsCounter===0){
    clearTimeout(timeoutID)
    return
  }

  console.log('countdown aqui ' + ++loop)

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

  clearTimeout(timeoutID)

}

function set (valor) {
  seconds = valor
}

export {countdown}