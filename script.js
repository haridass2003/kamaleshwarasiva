document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(progress => {
        const percentage = progress.getAttribute('data-percentage');
        progress.style.width = percentage;
    });
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the active class for clicked item
        item.classList.toggle('active');

        // Get the answer section of the clicked item
        const answer = item.querySelector('.faq-answer');

        // If the item is active, expand the answer, otherwise collapse it
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});






const scriptURL = ''


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => {
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message))
})
