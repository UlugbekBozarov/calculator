const button = document.querySelector("[data-theme-toggle]");
let theme = "dark";

function handleChangeTheme() {
  const newTheme = theme === "dark" ? "light" : "dark";

  const html = document
    .querySelector("html")
    .setAttribute("data-theme", newTheme);
  theme = newTheme;
}
