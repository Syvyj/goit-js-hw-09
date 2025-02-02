const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };
const storedData = localStorage.getItem('feedback-form-state');
if (storedData) {
    formData = JSON.parse(storedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}
form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
        formData.message = event.target.value.trim();
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert('Please fill in all fields.');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    form.reset();
});