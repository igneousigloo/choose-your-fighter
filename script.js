function showDetails(name) {
  // Clear previously selected fighters
  const allFighters = document.querySelectorAll('.fighter');
  allFighters.forEach(fighter => fighter.classList.remove('active'));

  // Find the selected fighter card
  const selectedFighter = Array.from(allFighters).find(f =>
    f.querySelector('.name').textContent === name
  );
  if (selectedFighter) {
    selectedFighter.classList.add('active');
    selectedFighter.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Fighter details dictionary
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
    "Mega Man": {
      img: "megaman.png",
      tagline: "“X Zero ZX Legends”",
      quote: "Idle: “Overclocked and under control.”",
      move: "Power Move: Photon Barrage"
    },
    "Oregon Trail Oxen": {
      img: "secret.png",
      tagline: "Head 'em up and move 'em out!",
      quote: "Idle: “You have died of dysentery.”",
      move: "Power Move: Ft. Laramie Stampede"
    },
    "Shana": {
      img: "SElkins.png",
      tagline: "The Brew & Bake Brawler",
      quote: "Idle: “Rise... and grind.”",
      move: "Power Move: Sourdough Slam"
    },
    "Lisa": {
      img: "LSagona.png",
      tagline: "The Buffalo Barrager",
      quote: "Idle: “Game plan? Smash tables.”",
      move: "Power Move: Bills Blitz"
    },
    "Tim": {
      img: "TAllen.png",
      tagline: "The Taylormade Man",
      quote: "Idle: “Grip it. Rip it. Deliver it.”",
      move: "Power Move: Qi35 Fade Slicer"
    },
    "Benjie": {
      img: "BYoung.png",
      tagline: "The Gamecock Guardian",
      quote: "Idle: “SEC speed. District precision.”",
      move: "Power Move: Garnet Smash"
    },
    "Mario": {
      img: "SuperMario.png",
      tagline: "The Coinbox Crusher",
      quote: "Idle: “Wahoo? No. Wreckage.”",
      move: "Power Move: Overhead Coin Punch"
    },
    "Donkey Kong": {
      img: "DonkeyKong.png",
      tagline: "The Flaming Barrel Fiend",
      quote: "Idle: “Roar, lift, yeet.”",
      move: "Power Move: Inferno Toss"
    },
    "Mystery": {
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
