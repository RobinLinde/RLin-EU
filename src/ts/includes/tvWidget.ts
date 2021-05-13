export function tvWidget(
  element: HTMLElement,
  user: string,
  traktApiKey: string,
  tmdbApiKey: string
) {
  element.innerHTML = "";
  const requestURL = "https://api.trakt.tv/users/" + user + "/watching";
  const request = new XMLHttpRequest();

  request.open("GET", requestURL);
  request.setRequestHeader("trakt-api-version", "2");
  request.setRequestHeader("trakt-api-key", traktApiKey);
  request.responseType = "json";

  request.send();

  request.onload = function () {
    if (request.status == 200) {
      const requestData = request.response;
      const watchtingType = requestData.type;

      element.style.display = "block";

      const image = document.createElement("img");
      element.appendChild(image);

      const body = document.createElement("div");
      body.className = "card-body";
      element.appendChild(body);

      const header = document.createElement("h5");
      header.className = "card-title";
      body.appendChild(header);

      if (watchtingType == "episode") {
        const requestURL =
          "https://api.themoviedb.org/3/tv/" +
          requestData["show"]["ids"]["tmdb"] +
          "/images?api_key=" +
          tmdbApiKey +
          "&include_image_language=en,null";
        const request = new XMLHttpRequest();

        request.open("GET", requestURL);
        request.responseType = "json";

        request.send();

        request.onload = function () {
          const path = request.response["posters"][0]["file_path"];
          image.src = "https://image.tmdb.org/t/p/w200" + path;
        };

        const title = document.createElement("h5");
        title.className = "card-title";
        title.innerText =
          requestData["show"]["title"] +
          " - " +
          requestData["episode"]["title"];
        body.appendChild(title);
      }
      if (watchtingType == "movie") {
        const requestURL =
          "https://api.themoviedb.org/3/movie/" +
          requestData["movie"]["ids"]["tmdb"] +
          "/images?api_key=" +
          tmdbApiKey +
          "&include_image_language=en,null";
        const request = new XMLHttpRequest();

        request.open("GET", requestURL);
        request.responseType = "json";

        request.send();

        request.onload = function () {
          const path = request.response["posters"][0]["file_path"];
          image.src = "https://image.tmdb.org/t/p/w200" + path;
        };

        const title = document.createElement("p");
        title.className = "card-text";
        title.innerText =
          requestData["movie"]["title"] +
          " (" +
          requestData["movie"]["year"] +
          ")";
        body.appendChild(title);
      }
    } else {
      element.style.display = "none";
    }
  };
}
