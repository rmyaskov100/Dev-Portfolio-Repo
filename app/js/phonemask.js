// Plugin link: https://imask.js.org/
// Connect via npm: https://www.npmjs.com/package/imask
// Connect via CDN: <script src="https://unpkg.com/imask"></script>

const element = document.querySelector('.phone__input')
const maskOptions = {
  mask: '+{3}(000)000-00-00'
}
const mask = IMask(element, maskOptions)