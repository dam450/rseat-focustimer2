export default function () {
  
  const sndClick = new Audio('https://dam450.dev/rseat-focustimer2/sounds/click.mp3')
  const sndToggle = new Audio('https://dam450.dev/rseat-focustimer2/sounds/toggle.mp3')
  const sndCuckoo = new Audio('https://dam450.dev/rseat-focustimer2/sounds/cuckoo.mp3')


  const sndCrowd = new Audio('https://dam450.dev/rseat-focustimer2/sounds/cafeteria.mp3')
  sndCrowd.loop = true

  const sndRain = new Audio('https://dam450.dev/rseat-focustimer2/sounds/chuva.mp3')
  sndRain.loop = true

  const sndFire = new Audio('https://dam450.dev/rseat-focustimer2/sounds/lareira.mp3')
  sndFire.loop = true

  const sndForest = new Audio('https://dam450.dev/rseat-focustimer2/sounds/floresta.mp3')
  sndForest.loop = true

  let playingAudio = new Audio()
  let  isPlaying = false

  function click() {
    sndClick.play()
  }

  function toggle() {
    sndToggle.play()

  }
  function alarm() {
    sndCuckoo.play()
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
    alarm,
    crowd,
    fire,
    forest,
    rain,
    off,
    sndCrowd,
    sndFire,
    sndForest,
    sndRain
  }
}