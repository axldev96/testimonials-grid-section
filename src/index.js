import db from '../db.js';

async function userCard() {
  const root = document.querySelector('#root');

  const { testimonials } = await db();

  for (const testimonial of testimonials) {
    const { pic, username, verified, mainquote, quote, className } = testimonial;

    const html = `
      <section class="card ${className}">
        <header class="card-header">
          <img class="user-pic" src="${pic}" alt="${username} pic" />
          <h2 class="username">${username}</h2>
          <p class="verified">${verified}</p>
        </header>
        <div class="mainquote">
          <p>${mainquote}</p>
        </div>
        <div class="quote">
          <p>${quote}</p>
        </div>
      </section>
  `;
    root.innerHTML += html;
  }
}

document.addEventListener('DOMContentLoaded', async () => await userCard());
