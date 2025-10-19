onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};





function showLetter() {
  document.getElementById('letter').style.display = 'flex';
}

function closeLetter() {
  document.getElementById('letter').style.display = 'none';
}