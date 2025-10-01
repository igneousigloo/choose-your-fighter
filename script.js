document.addEventListener("DOMContentLoaded", () => {
  const allFighters = document.querySelectorAll('.fighter');

  allFighters.forEach(fighter => {
    fighter.addEventListener('click', () => {
      const name = fighter.querySelector('.name').textContent.trim();
      showDetails(name);
    });
  });

  document.getElementById('close-btn').addEventListener('click', () => {
    const fighterDetails = document.getElementById('fighter-details');
fighterDetails.classList.remove('show');
fighterDetails.classList.add('hidden');
  });
});

function showDetails(name) {
  const fighterDetails = document.getElementById('fighter-details');

    "My Dude": {
      img: "my-dude.png",
      tagline: "“Let’s goooooo...!”",
      quote: "Just because you can, doesn't mean you should!",
      move: "Pixel Pummel"
    },
    "Link": {
      img: "link.png",
      tagline: "“TriForce Titan Slayer”",
      quote: "It's dangerous to go alone! Take this!",
      move: "Master Sword Melee"
    },
    "Samus": {
      img: "samus.png",
      tagline: "“The Intergalactic Bountyhunter”",
      quote: "But among the stars, there is one light that burns brighter than all others.",
      move: "Arm Cannon Darkburst"
    },
    "Mega Man": {
      img: "megaman.png",
      tagline: "“X Zero ZX Legends”",
      quote: "Overclocked and under control.",
      move: "Photon Barrage"
    },
    "Oregon Trail Oxen": {
      img: "secret.png",
      tagline: "Wagons East! Err, I mean West!",
      quote: "You have died of dysentery.",
      move: "Ft. Laramie Stampede"
    },
    "Shana": {
      img: "SElkins.png",
      tagline: "The Brew & Bake Brawler",
      quote: "Rise... and grind.",
      move: "Sourdough Slam"
    },
    "Lisa": {
      img: "LSagona.png",
      tagline: "The Buffalo Barrager",
      quote: "Game plan? Smash tables.",
      move: "Bills Blitz"
    },
    "Tim": {
      img: "TAllen.png",
      tagline: "The Taylormade Man",
      quote: "Grip it. Rip it. Deliver it.",
      move: "Qi35 Fade Slicer"
    },
    "Benjie": {
      img: "BYoung.png",
      tagline: "The Gamecock Guardian",
      quote: "SEC speed. District precision.",
      move: "Garnet Smash"
    },
    "Mario": {
      img: "SuperMario.png",
      tagline: "The Coinbox Crusher",
      quote: "Wahoo? No. Wreckage.",
      move: "Overhead Coin Punch"
    },
    "Donkey Kong": {
      img: "DonkeyKong.png",
      tagline: "The Flaming Barrel Fiend",
      quote: "Roar, lift, yeet.",
      move: "Inferno Toss"
    },
    "???": {
      img: "mystery.png",
      tagline: "The Hidden Challenger",
      quote: "Access denied... for now.",
      move: "Classified"
    }
  fighterDetails.classList.remove('hidden');
  fighterDetails.classList.add('show');
}
  };

  const info = fighterInfo[name];
  if (!info) return;

  document.getElementById('details-img').src = info.img;
  document.getElementById('details-img').alt = name;
  document.getElementById('details-name').textContent = name;
  document.getElementById('details-tagline').textContent = info.tagline;
  document.getElementById('details-quote').textContent = `"${info.quote}"`;
  document.getElementById('details-move').textContent = `Power Move: ${info.move}`;

  document.getElementById('fighter-details').classList.remove('hidden');
}
