function selectFighter(name) {
  const result = document.getElementById("result");
  result.innerHTML = `🕹️ You selected: <strong>${name}</strong>. Prepare for battle!`;
}
function showDetails(fighterName) {
  // Remove .active from all fighter cards
  const allFighters = document.querySelectorAll('.fighter');
  allFighters.forEach(fighter => fighter.classList.remove('active'));

  // Find the clicked fighter by name
  const selectedFighter = Array.from(allFighters).find(fighter =>
    fighter.querySelector('.name').textContent === fighterName
  );

  // Add .active class to show their details
  if (selectedFighter) {
    selectedFighter.classList.add('active');
  }

  // Optional: Scroll into view with a little flair
  selectedFighter.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
