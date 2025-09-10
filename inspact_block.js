

  // 1) राइट-क्लिक (context menu) ब्लॉक
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // 2) कुछ सामान्य कीबोर्ड शॉर्टकट ब्लॉक करने की कोशिश
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+I / Ctrl+Shift+J  (DevTools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
      e.preventDefault();
      return false;
    }

    // Ctrl+U (view source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }

    // Ctrl+S (save) — optional
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }

    // Ctrl+Shift+C (element inspector)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }
  });

  // 3) कुछ मोबाइल/टच इवेंट्स के लिए (लॉन्ग प्रेस पर contextmenu)
  document.addEventListener('touchstart', function(e) {
    // अगर आप चाहें तो यहाँ लॉन्ग-प्रेस रोकने का कोड डाल सकते हैं
  });

  // 4) चेतावनी (optional) — अगर कोई कोशिश करे तो छोटा मेसेज दिखाना
  // (हटाना चाहें तो न करें)
  window.addEventListener('keydown', function(e) {
    const blocked = (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase())) ||
      (e.ctrlKey && e.key.toLowerCase() === 'u')
    );
    if (blocked) {
      // छोटा नोटिफिकेशन बदलें या हटाएँ
      this.alert('This action is disabled on this site.');
    }
  });

