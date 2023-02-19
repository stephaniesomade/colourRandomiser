const colors = ["LightCoral", "HotPink", "DeepPink", "LemonChiffon", "Khaki", "PapayaWhip", "Thistle", "Plum", "SlateBlue", "Chartreuse", "PaleGreen", "LightCyan", "PowderBlue", "Cornsilk", "HoneyDew", "Azure", "GhostWhite", "SeaShell", "OldLace", "LavenderBlush"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
  // This is to get the random number between 0 and 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber)
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]
});

function getRandomNumber() { 
  return Math.floor(Math.random() * colors.length);
}

lightsky