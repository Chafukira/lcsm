document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const searchToggle = document.getElementById('searchToggle');
    const body = document.body;

    // Dark mode toggle
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }

    // Search functionality
    searchToggle.addEventListener('click', function() {
        const searchTerm = prompt("Enter search term:");
        if (searchTerm) {
            searchPosts(searchTerm);
        }
    });

    function searchPosts(term) {
        const posts = document.querySelectorAll('#posts li');
        const lowercaseTerm = term.toLowerCase();
        
        posts.forEach(post => {
            const text = post.textContent.toLowerCase();
            post.style.display = text.includes(lowercaseTerm) ? '' : 'none';
        });
    }
});