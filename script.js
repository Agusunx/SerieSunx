function showContent(id) {
    var sections = document.querySelectorAll('body > div');
    sections.forEach(function(section) {
        if (section.id === id) {
            section.classList.remove('d-none');
        } else {
            section.classList.add('d-none');
        }
    });
}
