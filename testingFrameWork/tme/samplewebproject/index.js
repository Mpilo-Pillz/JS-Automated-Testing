document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const { value } = document.querySelector('input');
    const header = document.querySelector('h1');

    if (value.includes('@')) {
        header.innerHTML = 'looks good';
    } else {
        header.innerHTML = 'invalid email';
    }
});

// window.stuffLoaded = true;