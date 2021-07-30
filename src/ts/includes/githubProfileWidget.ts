export function githubProfileWidget(element: HTMLElement, user: string) {
  element.innerHTML = "";

  const spinner = document.createElement("div");
  spinner.className = "spinner-border";
  spinner.setAttribute("role", "status");

  const spinner_sr = document.createElement("span");
  spinner_sr.className = "visually-hidden";
  spinner_sr.innerText = "Loading...";

  spinner.appendChild(spinner_sr);
  element.appendChild(spinner);

  const requestURL = "https://api.github.com/users/" + encodeURIComponent(user);
  const request = new XMLHttpRequest();

  request.open("GET", requestURL);
  request.setRequestHeader("Accept", "application/vnd.github.v3+json");
  request.responseType = "json";
  request.send();

  request.onload = function () {
    const requestData = request.response;

    const row = document.createElement("div");
    row.className = "row";
    element.appendChild(row);

    const avatar_col = document.createElement("div");
    avatar_col.className = "col";
    row.appendChild(avatar_col);

    const avatar = document.createElement("img");
    avatar.src = requestData.avatar_url;
    avatar.className = "github-avatar img-thumbnail rounded-circle";
    avatar_col.appendChild(avatar);

    const detail_col = document.createElement("div");
    detail_col.className = "col";
    row.appendChild(detail_col);

    const username = document.createElement("h2");
    username.innerText = requestData.login;
    detail_col.appendChild(username);

    const bio = document.createElement("span");
    bio.innerText = requestData.bio;
    detail_col.appendChild(bio);

    const detailText = document.createElement("div");
    detailText.innerHTML =
      '<i class="fas fa-users"></i> ' +
      requestData.followers +
      " followers &bull; " +
      requestData.following +
      " following &bull; " +
      requestData.public_repos +
      " repos";
    detail_col.appendChild(detailText);

    spinner.style.display = "none";
  };
}
