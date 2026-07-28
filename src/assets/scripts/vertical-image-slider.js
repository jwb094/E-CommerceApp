export function initVerticalSlider() {
  const slider = document.querySelector(".image-slider");

  if (!slider) return;

  slider.addEventListener("scroll", () => {
    console.log("slider scrolling");
  });
  const markers = document.querySelectorAll(".marker");

  markers.forEach((marker) => {
    marker.addEventListener("click", () => {
      markers.forEach((m) => m.classList.remove("active"));

      marker.classList.add("active");
    });
  });
}
