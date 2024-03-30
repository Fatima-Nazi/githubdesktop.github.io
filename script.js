document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const username = sessionStorage.getItem('username');
    if (username) {
      // Display username on dashboard
      const usernameDisplay = document.getElementById('usernameDisplay');
      usernameDisplay.textContent = 'Welcome, ' + username + '!';
    } else {
      // If user is not logged in, redirect to login page
      window.location.href = 'login.html';
    }
  });
  