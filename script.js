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
function showDetails(name) {
  const fighterInfo = {
    "My Dude": {
      img: "my-dude.png",
      tagline: "“Let’s goooooo...!”",
      quote: "Idle: “Just because you can, doesn't mean you should!”",
      move: "Power Move: Pixel Pummel"
    },
    "Link": {
      img: "link.png",
      tagline: "“TriForce Titan Slayer”",
      quote: "Idle: “It's dangerous to go alone! Take this!”",
      move: "Power Move: Master Sword Melee"
    },
    "Samus": {
      img: "samus.png",
      tagline: "“The Intergalactic Bountyhunter”",
      quote: "Idle: “But among the stars, there is one light that burns brighter than all others.”",
      move: "Power Move: Arm Cannon Darkburst"
    },
    // Add all your other characters here, matching the pattern...
    "???": {
      img: "mystery.png",
      tagline: "“The Hidden Challenger”",
      quote: "Idle: “Access denied... for now.”",
      move: "Power Move: Classified"
    }
  };

  const info = fighterInfo[name];
  if (!info) return;

  document.getElementById('details-img').src = info.img;
  document.getElementById('details-img').alt = name;
  document.getElementById('details-name').textContent = name;
  document.getElementById('details-tagline').textContent = info.tagline;
  document.getElementById('details-quote').textContent = info.quote;
  document.getElementById('details-move').textContent = info.move;

  document.getElementById('fighter-details').classList.remove('hidden');
}

document.getElementById('close-btn').onclick = () => {
  document.getElementById('fighter-details').classList.add('hidden');
};
