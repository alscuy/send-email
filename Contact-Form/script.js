document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit default

    const form = event.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const responseMessage = document.getElementById('response-message');
            if (xhr.status === 200) {
                form.reset();
                responseMessage.innerText = 'Your message has been sent successfully!';
                responseMessage.style.color = 'green';
            } else {
                responseMessage.innerText = 'Failed to send your message. Please try again later.';
                responseMessage.style.color = 'red';
            }
        }
    };

    xhr.send(formData);
});
