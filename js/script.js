// Header/Footer Loader
document.addEventListener('DOMContentLoaded', function() {
  // Load header
  fetch('../components/header.html') // Correct path
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to load header');
          }
          return response.text();
      })
      .then(data => {
          document.getElementById('header').innerHTML = data;
          console.log('Header loaded successfully');
      })
      .catch(error => console.error('Error loading header:', error));

  // Load footer
  fetch('../components/footer.html') // Correct path
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to load footer');
          }
          return response.text();
      })
      .then(data => {
          document.getElementById('footer').innerHTML = data;
          console.log('Footer loaded successfully');
      })
      .catch(error => console.error('Error loading footer:', error));
});