function nextPage() {
    const form = document.getElementById('generateButton');
  
    if (form.checkValidity()) {
      window.location.href = 'payment.html';
    } else {
      alert('Please fill out all the fields correctly.');
    }
  }

