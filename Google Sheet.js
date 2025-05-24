const scriptURL = 'https://script.google.com/macros/s/AKfycbx2wo_Bdx6jsn0-nux81ZTf_rRdZ6RZqIJa8EkOLW2KzOs0EtT3t2OXZr-HHqi59OKc/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you for submitting the form. Our team will reach out to you within 24 hours." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})