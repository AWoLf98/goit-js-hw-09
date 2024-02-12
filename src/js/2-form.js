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
  if (objFeedback) {
    feedbackFormState = JSON.parse(objFeedback);
    inputFormFeedback.value = feedbackFormState.email;
    textareaFormFeedback.value = feedbackFormState.message;
  } else {
    feedbackFormState.email = '';
    feedbackFormState.message = '';
  }
}

feedbackForm.addEventListener('input', event => {
  switch (event.target.nodeName) {
    case 'INPUT':
      feedbackFormState.email = event.target.value.trim();
      break;
    case 'TEXTAREA':
      feedbackFormState.message = event.target.value.trim();
      break;
  }
  window.localStorage.setItem(F_F_STATE, JSON.stringify(feedbackFormState));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (inputFormFeedback.value.trim() || textareaFormFeedback.value.trim()) {
    console.log(JSON.parse(localStorage.getItem(F_F_STATE)));
    localStorage.removeItem(F_F_STATE);
  } else alert('Bad parameter');
  feedbackForm.reset();
});
