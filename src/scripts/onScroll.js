document.addEventListener('scroll', function() {
    console.log('Scroll event detected!');
    const app = document.querySelector('.app');
    const notes = document.querySelector('.notes');
    const notesTop = notes.getBoundingClientRect().top;
    const windowBottom = window.innerHeight;

    // Check if the bottom of the window is within 20px of the top of the element
    if (notesTop <= (windowBottom - 300)) {
        app.classList.remove('bg-whiteGray');
        app.classList.add('bg-white');
        notes.classList.add('slideIn'); // Adding class to notes
    } else {
        app.classList.remove('bg-white');
        app.classList.add('bg-whiteGray');
        notes.classList.remove('slideIn'); // Optionally remove the class if not needed
    }
});
