async function loadPage(url, el) {
  const iframe = document.createElement('iframe');

  try {
    const response = await fetch(url);
    const HTMLCODE = await response.text();

    iframe.srcdoc = HTMLCODE;

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";

    const appendIframe = () => document.body.appendChild(iframe);

    document.querySelectorAll(".side-btn")
      .forEach(b => b.classList.remove("active"));

    if (el) el.classList.add("active");

    if (document.body) {
      appendIframe();
    } else {
      window.addEventListener('DOMContentLoaded', appendIframe);
    }

  } catch (err) {
    console.error("Failed to load HTML:", err);
  }
}

  


const c = document.getElementById("bg");
const ctx = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

let dots = Array.from({length: 80}, () => ({
  x: Math.random()*c.width,
  y: Math.random()*c.height,
  r: Math.random()*2
}));

function draw() {
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "#f0c6ff";
  dots.forEach(d => {
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fill();
    d.y += 0.2;
    if (d.y > c.height) d.y = 0;
  });
}

setInterval(draw, 30);

window.onresize = () => {
  c.width = innerWidth;
  c.height = innerHeight;
};
loadPage('https://cdn.jsdelivr.net/gh/nobody81754/modded-htmls@latest/Others/homemod.html', this)

