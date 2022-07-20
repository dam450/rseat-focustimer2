export default function () {
  
  const sndClick = new Audio('../../sounds/click.mp3')

  const sndCrowd = new Audio('../../sounds/cafeteria.mp3')
  sndCrowd.loop = true
  sndCrowd.type = 'audio/mp3'


  function click() {
    sndClick.play()
  
  }
  function crowd() {
    sndCrowd.play()
  }

  return {
    click,
    crowd
  }
}