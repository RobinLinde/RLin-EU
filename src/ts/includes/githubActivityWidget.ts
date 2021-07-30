export function githubActivityWidget(
  element: HTMLElement,
  user: string,
  amount: Number
) {
  element.innerHTML = "";

  const spinner = document.createElement("div");
  spinner.className = "spinner-border";
  spinner.setAttribute("role", "status")
  
  const spinner_sr = document.createElement("span");
  spinner_sr.className = "visually-hidden";
  spinner_sr.innerText = "Loading..."

  spinner.appendChild(spinner_sr);
  element.appendChild(spinner);

  const requestURL =
    "https://api.github.com/users/" +
    encodeURIComponent(user) +
    "/events/public?per_page=" +
    amount;
  const request = new XMLHttpRequest();

  request.open("GET", requestURL);
  request.setRequestHeader("Accept", "application/vnd.github.v3+json");
  request.responseType = "json";
  request.send();

  request.onload = function () {
    const requestData = request.response;

    const ul = document.createElement("ul");
    ul.className = "list-group";
    element.appendChild(ul);

    for (var i = 0; i < requestData.length; i++) {
      var li = document.createElement("li");
      li.className = "list-group-item";

      switch (requestData[i]["type"]) {
        case "CommitCommentEvent":
          li.innerHTML =
            'Commented on <a href="' +
            requestData[i]["payload"]["comment"]["html_url"] +
            '" target="_blank">commmit</a> in <a href="' +
            requestData[i]["repo"]["url"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
          break;

        case "CreateEvent":
          li.innerHTML =
            "Created " +
            requestData[i]["payload"]["ref_type"] +
            " " +
            requestData[i]["payload"]["ref"] +
            ' in <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
          break;

        case "DeleteEvent":
          li.innerHTML =
            "Deleted " +
            requestData[i]["payload"]["ref_type"] +
            " " +
            requestData[i]["payload"]["ref"] +
            ' in <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
          break;

        case "ForkEvent":
          li.innerHTML =
            'Created a <a href="' +
            requestData[i]["payload"]["forkee"]["html_url"] +
            '">fork</a> of <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
          break;

        case "GollumEvent":
          // TODO: implement
          break;

        case "IssueCommentEvent":
          switch (requestData[i]["payload"]["action"]) {
            case "created":
              li.innerHTML =
                'Commented on issue <a href="' +
                requestData[i]["payload"]["issue"]["html_url"] +
                '" target="_blank">' +
                requestData[i]["payload"]["issue"]["title"] +
                '</a> in <a href="https://github.com/' +
                requestData[i]["repo"]["name"] +
                '" target="_blank">' +
                requestData[i]["repo"]["name"] +
                "</a>";
              break;
          }
          break;

        case "IssuesEvent":
          switch (requestData[i]["payload"]["action"]) {
            case "opened":
              li.innerHTML =
                'Opened issue <a href="' +
                requestData[i]["payload"]["issue"]["html_url"] +
                '" target="_blank">' +
                requestData[i]["payload"]["issue"]["title"] +
                '</a> in <a href="https://github.com/' +
                requestData[i]["repo"]["name"] +
                '" target="_blank">' +
                requestData[i]["repo"]["name"] +
                "</a>";
              break;
            case "closed":
              li.innerHTML =
                'Closed issue <a href="' +
                requestData[i]["payload"]["issue"]["html_url"] +
                '" target="_blank">' +
                requestData[i]["payload"]["issue"]["title"] +
                '</a> in <a href="https://github.com/' +
                requestData[i]["repo"]["name"] +
                '" target="_blank">' +
                requestData[i]["repo"]["name"] +
                "</a>";
              break;
          }
          break;

        case "PublicEvent":
          li.innerHTML =
            'Made <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a> public";
          break;

        case "PullRequestEvent":
          switch (requestData[i]["payload"]["action"]) {
            case "closed":
              li.innerHTML =
                'Closed pull request in <a href="https://github.com/' +
                requestData[i]["repo"]["name"] +
                '" target="_blank">' +
                requestData[i]["repo"]["name"] +
                '</a><br><a href="' +
                requestData[i]["payload"]["pull_request"]["html_url"] +
                '" target="_blank">' +
                requestData[i]["payload"]["pull_request"]["title"] +
                "</a>";
              break;
            case "opened":
              li.innerHTML =
                'Opened pull request in <a href="https://github.com/' +
                requestData[i]["repo"]["name"] +
                '" target="_blank">' +
                requestData[i]["repo"]["name"] +
                '</a><br><a href="' +
                requestData[i]["payload"]["pull_request"]["html_url"] +
                '" target="_blank">' +
                requestData[i]["payload"]["pull_request"]["title"] +
                "</a>";
              break;
            case "reopened":
              li.innerHTML =
                'Reopened pull request in <a href="https://github.com/' +
                requestData[i]["repo"]["name"] +
                '" target="_blank">' +
                requestData[i]["repo"]["name"] +
                '</a><br><a href="' +
                requestData[i]["payload"]["pull_request"]["html_url"] +
                '" target="_blank">' +
                requestData[i]["payload"]["pull_request"]["title"] +
                "</a>";
              break;
          }
          break;

        case "PullRequestReviewEvent":
          li.innerHTML =
            'Left a <a href="' +
            requestData[i]["payload"]["review"]["html_url"] +
            '" target="_blank">review</a> on <a href="' +
            requestData[i]["payload"]["pull_request"]["html_url"] +
            '" target="_blank">pull request</a>"' +
            requestData[i]["payload"]["pull_request"]["title"] +
            '" in <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
          break;

        case "PullRequestReviewCommentEvent":
          li.innerHTML =
            'Left a <a href="' +
            requestData[i]["payload"]["comment"]["html_url"] +
            '" target="_blank">comment</a> on a review of pull request "' +
            requestData[i]["payload"]["pull_request"]["title"] +
            '" in <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
          break;

        case "PushEvent":
          li.innerHTML =
            'Pushed to <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
          for (
            var j = 0;
            j < requestData[i]["payload"]["commits"].length;
            j++
          ) {
            if (
              requestData[i]["payload"]["commits"][j]["author"]["name"] !=
              "dependabot[bot]"
            ) {
              li.innerHTML +=
                '<br><a href="https://github.com/' +
                requestData[i]["repo"]["name"] +
                "/commit/" +
                requestData[i]["payload"]["commits"][j]["sha"] +
                '" target="_blank">' +
                requestData[i]["payload"]["commits"][j]["message"].replace(
                  "\n\n",
                  "<br>"
                ) +
                "</a>";
            }
          }
          break;

        case "ReleaseEvent":
          li.innerHTML =
            'Released <a href="' +
            requestData[i]["payload"]["release"]["html_url"] +
            '" target="_blank">' +
            requestData[i]["payload"]["release"]["name"] +
            '</a> of <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
          break;

        case "WatchEvent":
          li.innerHTML =
            'Is now watching <a href="https://github.com/' +
            requestData[i]["repo"]["name"] +
            '" target="_blank">' +
            requestData[i]["repo"]["name"] +
            "</a>";
      }
      ul.appendChild(li);
    }
    spinner.style.display = "none";
  };
}
