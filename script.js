const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    panel.classList.add("active");
  });
});

function removeActive() {
  for (let panel of panels) {
    panel.classList.remove("active");
  }
}
