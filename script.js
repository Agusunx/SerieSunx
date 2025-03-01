function showContent(id, url = '') {
    var sections = document.querySelectorAll('.content > div');
    sections.forEach(function(section) {
        section.classList.add('d-none');
    });
    document.getElementById(id).classList.remove('d-none');
    if (url) {
        var iframe = document.getElementById(id + '-iframe');
        iframe.src = url;
    }
}
