function changeLanguage(lang) {
    const ptElements = document.querySelectorAll('.lang-pt');
    const enElements = document.querySelectorAll('.lang-en');

    if (lang === 'pt') {
        ptElements.forEach(el => el.style.display = 'block');
        enElements.forEach(el => el.style.display = 'none');
    } else {
        ptElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'block');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('pt');
});

