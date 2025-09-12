const Feedback = document.querySelector('.feedback-form'); 
const FeedBackbtn = document.querySelector('.feedback-btn');
const feedbackM = document.querySelector('.thmssage'); 

Feedback.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent page reload

    // Get input values correctly
    const feedName = Feedback.querySelector('#feedName').value.trim();
    const feedText = Feedback.querySelector('#feedText').value.trim();

    FeedBackbtn.disabled = true;
    const originalBtnText = FeedBackbtn.textContent;
    FeedBackbtn.textContent = 'Sending...';

    const payload = {
        Name: feedName,
        Feedback: feedText,
        _Subject: 'New Feedback Form',
        _template: 'table'
    };

    try {
        const res = await fetch('https://formsubmit.co/ajax/primeprojects.dev@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error('Failed to send');
        feedbackM.textContent = `Thank you ${feedName} .`;

        Feedback.reset(); // reset form

        setTimeout(() => {
            feedbackM.textContent = '';
        },5000);

    } catch (err) {
        feedbackM.textContent = 'Failed to send message. Try again.';
        feedbackM.style.color = 'red';

        setTimeout(() => {
            feedbackM.textContent = '';
        }, 2000);

    } finally {
        FeedBackbtn.disabled = false;
        FeedBackbtn.textContent = originalBtnText;
    }
});
