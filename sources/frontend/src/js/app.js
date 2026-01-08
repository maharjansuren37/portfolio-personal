// navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    });
})


async function getPages() {
    const res = await fetch('http://localhost:5001');

    if (!res.ok) {
        throw new Error('Failed to Fetch');
    }

    const pages = await res.json();

    console.log(pages.msg);
}

getPages();