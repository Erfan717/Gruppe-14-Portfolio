document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const status = form.querySelector('.form-status');
    status.textContent = 'Takk for meldingen. Vi tar kontakt så snart vi kan.';
    form.reset();
  });
}
