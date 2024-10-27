function changeBackgroundColor() {
  const bgColorSelect = document.getElementById("bgColor");
  document.body.style.backgroundColor = bgColorSelect.value;
}

function increaseFont() {
  const currentFontSize = parseFloat(
    window.getComputedStyle(document.body).fontSize
  );
  document.body.style.fontSize = currentFontSize + 2 + "px";
}

function decreaseFont() {
  const currentFontSize = parseFloat(
    window.getComputedStyle(document.body).fontSize
  );
  document.body.style.fontSize = currentFontSize - 2 + "px";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function changeFontStyle() {
  const fontStyleSelect = document.getElementById("fontStyle");
  document.body.style.fontFamily = fontStyleSelect.value;
}
