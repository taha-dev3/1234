const text = "Are you ready? ✨";
let i = 0;

const typing = document.getElementById("typing");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

// TYPEWRITER EFFECT
function typeEffect() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();

// AFTER 5 SEC → SHOW MAIN
setTimeout(() => {
  intro.style.display = "none";
  main.classList.remove("hidden");

  document.getElementById("music").play().catch(()=>{});

  startEffects();

}, 5000);


// ANIMATIONS
function startEffects() {

  // Balloons
  for (let i = 0; i < 25; i++) {
    let b = document.createElement("div");
    b.style.position = "absolute";
    b.style.bottom = "-100px";
    b.style.left = Math.random() * 100 + "vw";
    b.style.width = "40px";
    b.style.height = "60px";
    b.style.borderRadius = "50%";
    b.style.background = `hsl(${Math.random()*360},70%,60%)`;
    b.style.animation = `float ${5 + Math.random()*5}s linear infinite`;

    document.body.appendChild(b);
  }

  // Confetti
  for (let i = 0; i < 50; i++) {
    let c = document.createElement("div");
    c.style.position = "absolute";
    c.style.top = "-10px";
    c.style.left = Math.random() * 100 + "vw";
    c.style.width = "10px";
    c.style.height = "10px";
    c.style.background = `hsl(${Math.random()*360},100%,50%)`;
    c.style.animation = `fall ${3 + Math.random()*3}s linear infinite`;

    document.body.appendChild(c);
  }
}