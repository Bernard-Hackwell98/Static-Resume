document.getElementById('toggle')?.addEventListener('click', () => {
    let projectsSection = document.getElementById('projectsSection');
    let button = document.getElementById('toggle');

    if (projectsSection && button) {
        if (projectsSection.style.display === 'none' || projectsSection.style.display === '') {
            projectsSection.style.display = 'block';
            button.textContent = 'Hide Projects'; 
        } else {
            projectsSection.style.display = 'none';
            button.textContent = 'Show Projects';
        }
    }
});
