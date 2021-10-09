export default function title() {
  if (document.location.hostname != "rlin.eu") {
    const title = formatTitle(document.location.hostname);
    document.title = title + document.title.substr(7);
    document.getElementById("navbar-brand").innerText = title;
    document.getElementById("title").innerText =
      title + document.getElementById("title").innerText.substr(7);
  }
}

function formatTitle(title: string): string {
  if (title.toLowerCase().startsWith("rl")) {
    return title.substr(0, 2).toUpperCase() + title.substr(2);
  } else {
    return title.substr(0, 1).toUpperCase() + title.substr(1);
  }
}
