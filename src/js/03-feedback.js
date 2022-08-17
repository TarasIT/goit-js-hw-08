import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name=email]'),
  message: document.querySelector('[name=message]'),
};
const FEEDBACK_FORM_KEY = 'feedback-form-state';
const formData = {};
const storageData = localStorage.getItem(FEEDBACK_FORM_KEY);
const parsedFormData = JSON.parse(storageData);

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  const transformedData = JSON.stringify(formData);
  localStorage.setItem(FEEDBACK_FORM_KEY, transformedData);
}

function getFormData() {
  if (storageData) {
    refs.email.value = parsedFormData.email;
    refs.message.value = parsedFormData.message;
  }
}
getFormData();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(parsedFormData);
  localStorage.removeItem(FEEDBACK_FORM_KEY);
  event.target.reset();
}
