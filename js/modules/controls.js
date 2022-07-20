import display from "./display.js";



function addMinutes () {
  let minutes = display.getMinutes()
  minutes += 5
  display.setMinutes(minutes)
}

function subtractMinutes () {
  let minutes = display.getMinutes()
  // minutes -= 5
  minutes = minutes>=5 ? minutes - 5 : minutes
  display.setMinutes(minutes)
}

export default {addMinutes, subtractMinutes}