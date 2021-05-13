export function githubWidget(
  element: HTMLElement,
  user: string,
  amount: Number,
  apiKey: string
) {
  element.innerHTML = "";
  const requestURL =
    "https://api.github.com/users/" +
    encodeURIComponent(user) +
    "/events/public?per_page=" +
    amount;
  const request = new XMLHttpRequest();

  request.open("GET", requestURL);
  request.setRequestHeader("Accept", "application/vnd.github.v3+json");
  request.setRequestHeader("Authorization", "token " + apiKey);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    const requestData = request.response;

    const ul = document.createElement("ul");
    ul.className = "list-group";
    element.appendChild(ul);

    for (var i = 0; i < requestData.length; i++) {
      console.log(requestData[i]);

      var li = document.createElement("li");
      li.className = "list-group-item";

      switch (requestData[i]["type"]) {
        case "CreateEvent":
          li.innerText =
            "Created branch " +
            requestData[i]["payload"]["ref"] +
            " in " +
            requestData[i]["repo"]["name"];
          break;

        case "PullRequestEvent":
          switch (requestData[i]["payload"]["action"]) {
            case "closed":
              li.innerText =
                "Closed pull request in " +
                requestData[i]["repo"]["name"] +
                "\r\n" +
                requestData[i]["payload"]["pull_request"]["title"];
              break;
            case "opened":
              li.innerText =
                'Opened pull request "' +
                requestData[i]["payload"]["pull_request"]["title"] +
                '" in ' +
                requestData[i]["repo"]["name"];
              break;
          }
          break;

        case "PushEvent":
          li.textContent = "Pushed to " + requestData[i]["repo"]["name"];
          for (
            var j = 0;
            j < requestData[i]["payload"]["commits"].length;
            j++
          ) {
            if (
              requestData[i]["payload"]["commits"][j]["author"]["name"] !=
              "dependabot[bot]"
            ) {
              li.textContent +=
                "\r\n" +
                requestData[i]["payload"]["commits"][j]["message"].replace(
                  "\n\n",
                  "\r\n"
                );
            }
          }
          break;
      }

      console.log(li.innerText);
      ul.appendChild(li);
    }
  };
}
