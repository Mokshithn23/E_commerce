(function () {
    emailjs.init('a7y5cvqkDaw2qmdqC');
  })();
  document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const userEmail = document.getElementById('user-email').value;
    const responseMessage = document.getElementById('newsletter-response');
  
    if (!userEmail) {
      responseMessage.textContent = 'Please enter a valid email address.';
      responseMessage.style.color = 'red';
      return;
    }
  
 
    emailjs
      .send('service_nf9ucxd', 'template_azorg2e', { user_email: userEmail })
      .then(() => {
        responseMessage.textContent = 'Thank you for subscribing!';
        responseMessage.style.color = 'green';
        document.getElementById('newsletter-form').reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        responseMessage.textContent = 'Something went wrong. Please try again.';
        responseMessage.style.color = 'red';
      });
  });
  