const elements = [
  { tag: "div", className: "logo", content: "We're Hira 💎" },
  { tag: "h1", content: "Yo, wanderer! 👀" },
  {
    tag: "p",
    content: "This domain 🔗 <code>hira.im</code> is ours, Hira fam! 🏡",
  },
  {
    tag: "p",
    content: "Fr, not much happening here, but you've got the email 📧",
  },
  { tag: "p", content: "So, see ya there! 👋✨" },
  { tag: "p", content: "Enjoy Rick 🎺" },
  { tag: "p", content: "😙😚😘" },
];

elements.forEach((el) => {
  const elem = document.createElement(el.tag);
  if (el.className) elem.className = el.className;
  elem.innerHTML = el.content;
  document.body.appendChild(elem);
});

for (let i = 0; i < 30; i++) {
  const b = document.createElement("div");
  b.classList.add("bubble");
  b.style.left = Math.random() * 100 + "vw";
  b.style.animationDuration = 5 + Math.random() * 5 + "s";
  b.style.opacity = Math.random();
  b.style.width = b.style.height = 10 + Math.random() * 20 + "px";
  document.body.appendChild(b);
}

setTimeout(() => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}, 5000);
