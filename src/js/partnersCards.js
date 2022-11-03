export default function partnersCards() {
    const elements = Array.from(document.querySelectorAll('.js-partners-card'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();

            if (element.classList.contains('active')) {
                element.classList.remove('active');
            } else {
                elements.forEach(element => element.classList.remove('active'));
                element.classList.add('active');
            }
        });
    });

    document.addEventListener('click', event => {
        if (event.target.matches('.js-partners-card') || event.target.closest('.js-partners-card')) return;
        elements.forEach(element => element.classList.remove('active'));
    });
}
