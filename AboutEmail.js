// =========== Select Form Elements ===========
const hireForm = document.querySelector('.googleForm-fields');
const hireBtn = document.querySelector('#googleForm-btn');
const statusMsg = document.querySelector('.status-message');

// =========== Form Submit Event ===========
hireForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = hireForm.querySelector('.googleForm-input').value.trim();
  const details = hireForm.querySelector('.googleForm-textarea').value.trim();

  // =========== Validation ===========
  if (!name || !details) {
    statusMsg.textContent = " Please fill out both fields.";
    statusMsg.style.color = "red";
    return;
  }

  // =========== UI Feedback ===========
  hireBtn.disabled = true;
  const originalText = hireBtn.textContent;
  hireBtn.textContent = "Sending...";
  statusMsg.textContent = "Processing...";
  statusMsg.style.color = "blue";

  // =========== Payload for FormSubmit ===========
  const payload = {
    Name: name,
    Project_Details: details,
    _subject: "New Project Request from Portfolio Form",
    _template: "table"
  };

  try {
    const res = await fetch("https://formsubmit.co/ajax/amulestack93@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed to send");

    // Success
    statusMsg.textContent = " Message sent successfully!";
    statusMsg.style.color = "green";
    hireForm.reset();

    setTimeout(() => {
      statusMsg.textContent = "";
    }, 3000);

  } catch (err) {
    // Error
    statusMsg.textContent = " Failed to send message. Please try again.";
    statusMsg.style.color = "red";
  } finally {
    // Reset Button
    hireBtn.disabled = false;
    hireBtn.textContent = originalText;
  }
});