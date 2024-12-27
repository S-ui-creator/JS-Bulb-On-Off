// BULB ON
let onBtn = document.querySelector('body #bulb .onBtn')
let img = document.querySelector('#bulb .bulbimg img')
const on = () => {
   let src = `Images/light-bulb-on.png`;
   img.src = src
}
onBtn.addEventListener('click' , on)
// BULB ON




// BULB OFF
let offBtn = document.querySelector('body #bulb .offBtn')
const off = () => {
    let src = `Images/light-bulb-off.png`
    img.src = src
}
offBtn.addEventListener(`click`, off)


// BULB OFF






