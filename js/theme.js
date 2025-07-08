
(function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Function to apply the saved theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  // Event listener for the toggle button
  themeToggle.addEventListener('click', () => {
    let currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Check for saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }
})();
