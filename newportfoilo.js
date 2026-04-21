// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual submission
  document.getElementById('formMessage').textContent = "Thank you! Your message has been submitted.";
  this.reset(); // Clear form fields
});
