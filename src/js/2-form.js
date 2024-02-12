const F_F_STATE = 'feedback-form-state';
let feedbackFormState = {};
const objFeedback = localStorage.getItem(F_F_STATE);

const feedbackForm = document.querySelector('form.feedback-form');
const inputFormFeedback = document.querySelector(
  'form.feedback-form input[name="email"]'
);
const textareaFormFeedback = document.querySelector(
  'form.feedback-form textarea[name="message"]'
);

writeFieldsForm();

function writeFieldsForm() {
  if (!objFeedback) {
    feedbackFormState.email = '';
    feedbackFormState.message = '';
  } else {
    feedbackFormState = JSON.parse(objFeedback);
    inputFormFeedback.value = feedbackFormState.email;
    textareaFormFeedback.value = feedbackFormState.message;
  }
}

feedbackForm.addEventListener('input', event => {
  const nodeName = event.target.nodeName;

  if (nodeName === 'INPUT') {
    feedbackFormState.email = event.target.value.trim();
  } else if (nodeName === 'TEXTAREA') {
    feedbackFormState.message = event.target.value.trim();
  }

  window.localStorage.setItem(F_F_STATE, JSON.stringify(feedbackFormState));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (inputFormFeedback.value.trim() || textareaFormFeedback.value.trim()) {
    inputFormFeedback.value = '';
    textareaFormFeedback.value = '';
    console.log(JSON.parse(localStorage.getItem(F_F_STATE)));
    localStorage.removeItem(F_F_STATE);
  } else alert('Bad parameter');
});
