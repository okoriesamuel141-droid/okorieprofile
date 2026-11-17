// Shared interactions for all pages
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}
document.querySelectorAll('.theme-toggle').forEach(button => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('samuel-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
});
if (localStorage.getItem('samuel-theme') === 'dark') document.body.classList.add('dark');
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject'));
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:Okoriesamuel141@gmail.com?subject=${subject}&body=${body}`;
    document.querySelector('#formNote').textContent = 'Your email app should open with the message filled in.';
  });
}
