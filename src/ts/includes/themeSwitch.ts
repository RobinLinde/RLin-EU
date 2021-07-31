"use strict";

const themeSwitch = document.querySelector("#themeSwitch") as HTMLInputElement;

export let theme!: string;

function changeTheme() {
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme")
  );

  if (typeof themeSwitch?.checked !== "undefined") {
    themeSwitch.checked = theme === "dark";
    localStorage.setItem("theme", theme);
  }
}

export default function initTheme(): void {
  // Initialize theme
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  } else if (
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
  ) {
    theme = "dark";
    localStorage.setItem("theme", theme);
  } else {
    theme = "light";
  }
  changeTheme();

  // Update theme when browser configuration changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event: MediaQueryListEvent) => {
      theme = event.matches === true ? "dark" : "light";
      localStorage.setItem("theme", theme);

      changeTheme();
    });

  // Update theme when user click on them switch
  themeSwitch?.addEventListener("click", (event: MouseEvent) => {
    theme = themeSwitch.checked === true ? "dark" : "light";
    localStorage.setItem("theme", theme);

    changeTheme();
  });
}
