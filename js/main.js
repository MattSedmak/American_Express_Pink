window.onload = () => {
  const explore = document.querySelector('#explore_btn');
  explore.addEventListener('click', () => {
    coverLoader();
    console.log('test');
  });

  let card = document.querySelector('#pink_card');
  card.addEventListener('mouseover', hoverIn);
  card.addEventListener('mouseout', hoverOut);
};

function coverLoader() {
  gsap.to('.cover_loader-top', 0.8, {
    delay: 0.1,
    top: '-100%',
    ease: 'back.in(1)',
  });
  rotateCard();
  animateText();
  buttonFade();
}
function rotateCard() {
  gsap.fromTo(
    '#pink_card',
    { rotateY: 80 },
    { rotateY: 0, delay: 0.8, duration: 1.5, ease: 'bounce.out' }
  );
}

function animateText() {
  gsap.from('.text_animate', 0.8, {
    delay: 1,
    ease: 'power3.out',
    y: 100,
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  });
}

function buttonFade() {
  gsap.fromTo(
    '#apply_btn',
    { opacity: 0 },
    { opacity: 1, delay: 2.2, duration: 1.5, ease: 'power3.out' }
  );
}

function hoverIn() {
  gsap.to('#pink_card', { rotateY: 25 });
}
function hoverOut() {
  gsap.to('#pink_card', { rotateY: 0 });
}
