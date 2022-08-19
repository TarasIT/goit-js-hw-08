import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

getFormData();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('change', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  let formDataBeforeSubmit = localStorage.getItem(FORM_KEY);
  formDataBeforeSubmit = JSON.parse(formDataBeforeSubmit);
  console.log(formDataBeforeSubmit);
  form.reset();
  localStorage.removeItem(FORM_KEY);
}

function onFormInput(event) {
  let formData = localStorage.getItem(FORM_KEY);
  formData = formData ? JSON.parse(formData) : {};
  formData[event.target.name] = event.target.value;
  formData = localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function getFormData() {
  let formData = localStorage.getItem(FORM_KEY);
  if (formData) {
    formData = JSON.parse(formData);
    Object.entries(formData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
