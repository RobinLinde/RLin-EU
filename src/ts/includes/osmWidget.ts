var parseString = require("xml2js").parseString;

export function osmWidget(element: HTMLElement, user: string, amount: Number) {
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
    "https://api.allorigins.win/get?url=" +
    encodeURIComponent(
      "https://openstreetmap.org/api/0.6/changesets?display_name="
    ) +
    encodeURIComponent(user);
  const request = new XMLHttpRequest();

  request.open("GET", requestURL);
  request.send();
  request.responseType = "json";

  request.onload = function () {
    const requestXml = request.response.contents;
    parseString(requestXml, function (err, res) {
      if (!err) {
        const changesets = res.osm.changeset;
        const ul = document.createElement("ul");
        ul.className = "list-group";
        element.appendChild(ul);
        for (var i = 0; i < amount; i++) {
          var changeset = changesets[i];
          var changesetID = changeset["$"]["id"];

          var li = document.createElement("li");
          li.className = "list-group-item";

          var a = document.createElement("a");
          a.target = "_blank";
          a.href = "https://osm.org/changeset/" + changesetID;
          li.appendChild(a);

          for (var j = 0; j < changeset.tag.length; j++) {
            if (changeset["tag"][j]["$"]["k"] == "comment") {
              a.innerText = changeset["tag"][j]["$"]["v"];
            }
          }
          ul.appendChild(li);
        }
        spinner.style.display = "none";
      }
    });
  };
}
