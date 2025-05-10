
function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  envelope.style.transform = 'rotateY(180deg)';
  setTimeout(() => {
    letter.classList.add('show');
  }, 1000);
}
