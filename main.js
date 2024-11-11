window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})


document.addEventListener('DOMContentLoaded', function() {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        faq.addEventListener('click', function() {
            const icon = this.querySelector('.material-symbols-outlined');
            const answer = this.querySelector('p');

            // Toggle the 'open' class to show/hide the answer
            this.classList.toggle('open');

            // Change the icon from plus to minus or vice versa
            if (this.classList.contains('open')) {
                icon.textContent = 'remove';
            } else {
                icon.textContent = 'add';
            }
        });
    });
});
