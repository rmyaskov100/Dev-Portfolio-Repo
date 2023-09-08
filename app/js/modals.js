// Modal Window
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)
    trigger.addEventListener('click', e => {
      e.preventDefault()
      modal.style.display = 'flex'
    });
    close.addEventListener('click', () => {
      modal.style.display = 'none'
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none'
      }
    })
}

// FIRST argument - the class of the button that will open a modal window when clicked.
// SECOND argument is the class of the modal window itself.
// The THIRD argument is the class of the button that will close the modal window when clicked.
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
