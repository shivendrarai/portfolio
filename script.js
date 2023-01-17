const trailer = document.getElementById("trailer");

const animatetrailer = (e) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = (trailer.style.transform = `translate(${x}px,${y}px)`);

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

window.onmousemove = (e) => {
  const intereactable = e.target.closest;
  animatetrailer(e);
};
