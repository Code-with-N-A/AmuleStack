// =========== select form eliments ==============

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const statusMessage = form.querySelector('.status-message');
const togels = document.querySelector(".toggle");





function isValidGmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
function isValidNumber(number) {
    const cleaned = number.replace(/\D/g, '');
    return /^[0-9]{10}$/.test(cleaned);

}


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fname = form.querySelector('#fname').value.trim();
    const lname = form.querySelector('#lname').value.trim();
    const email = form.querySelector('#gmail').value.trim();
    const phone = form.querySelector('#number').value.trim();

    // ============= Validetion checking ====================

    if (!fname || !lname || !email || !phone) {
        statusMessage.textContent = 'Please fill all fields.';
        statusMessage.computedStyleMap.color = 'red';
        return;
    }

    if (!isValidGmail(email)) {
        statusMessage.textContent = 'Please enter a valid Gmail address (example@gmail.com).';
        statusMessage.style.color = 'red';
        return;
    }

    if (!isValidNumber(phone)) {
        statusMessage.textContent = ' Please enter a valid 10-digit mobile number.';
        statusMessage.style.color = 'red';
        return;
    }


    // ================ UI Update ====================

    submitBtn.ariaDisabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    statusMessage.textContent = 'Processing...';
    statusMessage.style.color = 'blue';


    const payload = {
        Name: `${fname} ${lname}`,
        First_Name: fname,
        Last_Name: lname,
        Email: email,
        Number: phone.replace(/\D/g, ''),
        _subject: 'New Contact Form Submission',
        _template: 'table'
    };

    try {
        const res = await fetch('https://formsubmit.co/ajax/amulestack93@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })

        if (!res.ok) throw new Error('Failed to send');
        statusMessage.innerHTML = 'Message sent successfully!';
        statusMessage.style.color = 'green';
        form.reset();

        setTimeout(() => {
            statusMessage.textContent = '';
            togels.classList.remove('toggle-active');

        }, 3000)


    } catch (err) {
        statusMessage.textContent = 'Failed to send message. Try again.';
        statusMessage.style.color = 'red';

        setTimeout(() => {
            statusMessage.textContent = '';

        }, 2000);

    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    }
})