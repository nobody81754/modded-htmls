const contentDisplay = document.getElementById('contentse');

async function getHTMLs(url67) {
  try {
    const rresponse = await fetch(url67);
    return await rresponse.text();
  } catch (err) {
    console.error("error bro:", err);
    return "<p>Failed to load</p>";
  }
}

// ✅ YOUR FUNCTION (integrated)
function setContent(html) {
contentDisplay.innerHTML = '';
  contentDisplay.innerHTML = html;

  const scripts = contentDisplay.querySelectorAll('script');

  scripts.forEach(old => {
    const script = document.createElement('script');

    // copy attributes
    for (let attr of old.attributes) {
      script.setAttribute(attr.name, attr.value);
    }

    if (old.src) {
      script.src = old.src;
      script.async = false;
    } else {
      script.textContent = `(function(){\n${old.textContent}\n})();`;
    }

    old.replaceWith(script);
  });
}

// ✅ UPDATED loadPage
async function loadPage1(url, eled) {
  try {
    const HTMLCODEd = await getHTMLs(url);

    setContent(HTMLCODEd); // <-- key change

    document.querySelectorAll(".side-btn")
      .forEach(b => b.classList.remove("active"));

    if (eled) eled.classList.add("active");

  } catch (err) {
    console.error("Failed to load HTML:", err);
  }
}

// background animation
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

// initial load
loadPage1('https://cdn.jsdelivr.net/gh/nobody81754/modded-htmls@latest/Others/homemod1.1.html');
