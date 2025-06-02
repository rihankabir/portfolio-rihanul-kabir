
  //  form validation
  (() => {
    'use strict'

    const form = document.getElementById('contactForm')

    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })()