import elements from "./elements.js"

const { minutesDisplay, secondsDisplay } = elements

function isValidNum (numValue) {
  let itIsNumber = !isNaN(Number(numValue))
  let greaterZero =  Number(numValue) > 0

  if ( itIsNumber || greaterZero ) return true
  else return false
}

function setMinutes (minutes){
  if(isValidNum(minutes)) {
    let txtMinutes = String(minutes).padStart(2, '0')
    minutesDisplay.textContent = txtMinutes
  }
}

function setSeconds (seconds){
  if(isValidNum(seconds)) {
    let txtSeconds = String(seconds).padStart(2, '0')
    secondsDisplay.textContent = txtSeconds
  }
}

function getMinutes () {
  let minutes = Number(minutesDisplay.textContent)
  return minutes
}

function getSeconds () {
  let seconds = Number(secondsDisplay.textContent)
  return seconds
}

function update (min, sec) {
  setMinutes(min)
  setSeconds(sec)

}


export default {getMinutes, getSeconds, setMinutes, setSeconds, update}