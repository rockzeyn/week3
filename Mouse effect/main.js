const cursorFlag = document.getElementById("cursor-flag");

window.addEventListener("mousemove", (e) => {
  cursorFlag.style.left = `${e.clientX + 15}px`; // gerçek imleçten biraz sağa
  cursorFlag.style.top = `${e.clientY + 15}px`;  // biraz aşağı
});
