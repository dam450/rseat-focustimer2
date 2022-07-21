export default function () {
  
  const sndClick = new Audio('../../sounds/click.mp3')
  const sndToggle = new Audio('../../sounds/toggle.mp3')

  const sndCrowd = new Audio('../../sounds/cafeteria.mp3')
  sndCrowd.loop = true

  const sndRain = new Audio('../../sounds/chuva.mp3')
  sndRain.loop = true

  const sndFire = new Audio('../../sounds/lareira.mp3')
  sndFire.loop = true

  const sndForest = new Audio('../../sounds/floresta.mp3')
  sndForest.loop = true

  let playingAudio = new Audio()
  let  isPlaying = false

  function click() {
    sndClick.play()
  }

  function toggle() {
    sndToggle.play()
  }

  function bgAudio (sound) {
    if ( playingAudio === sound && isPlaying ){
      playingAudio.pause()
      isPlaying = false
      return
    }
    playingAudio.pause()
    playingAudio = sound
    playingAudio.play()
    isPlaying = true
  }

  function off() {
    playingAudio.pause()
    isPlaying = false
  }

  
  function crowd() {
    bgAudio(sndCrowd)
  }

  function fire() {
    bgAudio(sndFire)
  }

  function rain() {
    bgAudio(sndRain)
  }

  function forest() {
    bgAudio(sndForest)
  }






  return {
    click,
    toggle,
    crowd,
    fire,
    forest,
    rain,
    off
  }
}