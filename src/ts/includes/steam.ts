export default class Steam {
  user: string;
  apiKey: string;
  corsEndpoint: string;

  constructor(user: string, apiKey: string, corsEndpoint?: string) {
    this.user = user;
    this.apiKey = apiKey;
    if (corsEndpoint.length > 0) {
      this.corsEndpoint = corsEndpoint;
    } else {
      this.corsEndpoint = "https://api.allorigins.win";
    }
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
      this.corsEndpoint +
      "/get?url=" +
      encodeURIComponent(
        "https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=" +
          this.apiKey +
          "8&steamid=" +
          this.user +
          "&format=json"
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
      if (requestData) {
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
      } else {
        var li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = "No games played in the last two weeks 😲";
        ul.appendChild(li);
      }
      spinner.style.display = "none";
    };
  }

  steamBadge(badge: HTMLSpanElement) {
    const requestURL =
      this.corsEndpoint +
      "/get?url=" +
      encodeURIComponent(
        "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" +
          this.apiKey +
          "8&steamids=" +
          this.user +
          "&format=json"
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
          badge.className = "badge rounded-pill bg-dark";
          break;
        case 1:
          // Online
          badge.innerText = "Online";
          badge.className = "badge rounded-pill bg-success";
          break;
        case 2:
          // Busy
          badge.innerText = "Busy";
          badge.className = "badge rounded-pill bg-danger";
          break;
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
