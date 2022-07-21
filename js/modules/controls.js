import display from "./display.js";
import timer from "./timer.js";

function addMinutes () {
  timer.stop()
  let minutes = display.getMinutes()
  minutes += 5
  display.setMinutes(minutes)
  timer.setMinutes(minutes)
}

function subtractMinutes () {
  timer.stop()
  let minutes = display.getMinutes()
  minutes = minutes>=5 ? minutes - 5 : 0
  display.setMinutes(minutes)
  timer.setMinutes(minutes)
}


export default { addMinutes, subtractMinutes }