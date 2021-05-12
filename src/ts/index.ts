import "bootstrap/js/dist/collapse";

import CodersRankActivity from "@codersrank/activity";
window.customElements.define("codersrank-activity", CodersRankActivity);

const tvWidgetDiv = document.getElementById("tvWidget");
const user = "robinlin";
const traktApiKey =
  "19a5ec4d8dabf24914fd8436a28b759633226c296763768126bb21940a477ab0";

updateWidget();
var timer = setInterval(updateWidget, 30000);

function updateWidget() {
  tvWidget(tvWidgetDiv, user, traktApiKey);
}

function tvWidget(element: HTMLElement, user: string, apiKey: string) {
  element.innerHTML = "";
  const requestURL = "https://api.trakt.tv/users/" + user + "/watching";
  const request = new XMLHttpRequest();

  request.open("GET", requestURL);
  request.setRequestHeader("trakt-api-version", "2");
  request.setRequestHeader("trakt-api-key", apiKey);
  request.responseType = "json";

  request.send();

  request.onload = function () {
    if (request.status == 200) {
      const requestData = request.response;
      const watchtingType = requestData.type;

      element.style.display = "block";
      const header = document.createElement("h2");
      header.innerText = "Currently watching";
      element.appendChild(header);

      if (watchtingType == "episode") {
        const title = document.createElement("h3");
        title.innerText =
          requestData["show"]["title"] +
          " - " +
          requestData["episode"]["title"];
        element.appendChild(title);
      }
      if (watchtingType == "movie") {
        const title = document.createElement("h3");
        title.innerText =
          requestData["movie"]["title"] +
          " (" +
          requestData["movie"]["year"] +
          ")";
        element.appendChild(title);
      }
    } else {
      element.style.display = "none";
    }
  };
}
