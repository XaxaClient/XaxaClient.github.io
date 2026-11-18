document.addEventListener('DOMContentLoaded', () => {
  const welcome = document.getElementById('welcome');
  const site = document.getElementById('site');
  const enterButton = document.getElementById('enter-site');
  const note = document.getElementById('contact-note');

  enterButton.addEventListener('click', () => {
    document.body.classList.add('intro-done');
    document.body.classList.remove('intro-active');
    site.removeAttribute('inert');
    window.setTimeout(() => welcome.setAttribute('aria-hidden', 'true'), 550);
  });

  document.querySelectorAll('.contact-button').forEach((button) => {
    button.addEventListener('click', () => {
      note.textContent = `Wybrano: ${button.dataset.plan}. Napisz na PV do likeltc, aby uzyskać szczegóły.`;
      note.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
});
