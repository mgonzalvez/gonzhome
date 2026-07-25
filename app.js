const themeToggle = document.querySelector(".theme-toggle");

themeToggle?.addEventListener("click", () => {
  const nextTheme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = nextTheme;
  themeToggle.setAttribute(
    "aria-label",
    nextTheme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );

  try {
    localStorage.setItem("gonzhome-theme", nextTheme);
  } catch (_) {}
});

if (themeToggle) {
  themeToggle.setAttribute(
    "aria-label",
    document.documentElement.dataset.theme === "dark"
      ? "Switch to light theme"
      : "Switch to dark theme",
  );
}

document.querySelector("#year").textContent = new Date().getFullYear();
