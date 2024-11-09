var _a;
(_a = document.getElementById('toggle')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var projectsSection = document.getElementById('projectsSection');
    var button = document.getElementById('toggle');
    if (projectsSection && button) {
        if (projectsSection.style.display === 'none' || projectsSection.style.display === '') {
            projectsSection.style.display = 'block';
            button.textContent = 'Hide Projects';
        }
        else {
            projectsSection.style.display = 'none';
            button.textContent = 'Show Projects';
        }
    }
});
