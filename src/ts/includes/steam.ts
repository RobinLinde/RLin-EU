export default class Steam {
  user: string;
  apiKey: string;

  constructor(user: string, apiKey: string) {
    this.user = user;
    this.apiKey = apiKey;
  }

  steamWidget(element: HTMLElement) {
    element.innerHTML = "";

    const spinner = document.createElement("div");
    spinner.className = "spinner-border";
    spinner.setAttribute("role", "status");

    const spinner_sr = document.createElement("span");
    spinner_sr.className = "visually-hidden";
    spinner_sr.innerText = "Loading...";

    spinner.appendChild(spinner_sr);
    element.appendChild(spinner);

    const requestURL =
      "https://api.allorigins.win/get?url=" +
      encodeURIComponent(
        "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" +
          this.apiKey +
          "8&steamid=" +
          this.user +
          "&format=json" +
          this.user
      );
    const request = new XMLHttpRequest();

    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
      const requestData = JSON.parse(request.response.contents)["response"][
        "games"
      ];

      const ul = document.createElement("ul");
      ul.className = "list-group";
      element.appendChild(ul);
      //console.log(request.response["response"]["games"]);
      for (var i = 0; i < requestData.length; i++) {
        var li = document.createElement("li");
        li.className = "list-group-item";
        ul.appendChild(li);
        var a = document.createElement("a");
        a.href =
          "https://store.steampowered.com/app/" + requestData[i]["appid"];
        li.appendChild(a);
        var img = document.createElement("img");
        img.className = "gameImg";
        img.src =
          "https://cdn.akamai.steamstatic.com/steam/apps/" +
          requestData[i]["appid"] +
          "/header.jpg";
        img.alt = requestData[i]["name"];
        img.title = requestData[i]["name"];
        a.appendChild(img);
      }
      spinner.style.display = "none";
    };
  }

  steamBadge(badge: HTMLSpanElement) {
    const requestURL =
      "https://cors.rlin.eu/get?url=" +
      encodeURIComponent(
        "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" +
          this.apiKey +
          "8&steamids=" +
          this.user +
          "&format=json" +
          this.user
      );
    const request = new XMLHttpRequest();

    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
      const requestData = JSON.parse(request.response.contents)["response"][
        "players"
      ][0];
      console.log(requestData);

      switch (requestData.personastate) {
        case 0:
          // Offline
          badge.innerText = "Offline";
          badge.className = "badge rounded-pill bg-light";
        case 1:
          // Online
          badge.innerText = "Online";
          badge.className = "badge rounded-pill bg-success";
          break;
        case 2:
          // Busy
          badge.innerText = "Busy";
          badge.className = "badge rounded-pill bg-danger";
        case 3:
          // Away
          badge.innerText = "Away";
          badge.className = "badge rounded-pill bg-warning";
        default:
          break;
      }
    };
  }
}
