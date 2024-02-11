const feedback_form = document.querySelector('form.feedback-for');

feedback_form.addEventListener('input', event => {
  const feedback_form_state = { input: '', textarea: '' };
  const nodeName = event.currentTarget.nodeName;
  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    window.localStorage.setItem('feedback-form-state', feedback_form_state);
  }
});
