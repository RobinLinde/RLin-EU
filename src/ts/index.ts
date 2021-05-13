import "bootstrap/js/dist/collapse";

import CodersRankActivity from "@codersrank/activity";
window.customElements.define("codersrank-activity", CodersRankActivity);

import { tvWidget } from "./includes/tvWidget";

const tvWidgetDiv = document.getElementById("tvWidget");
const user = "robinlin";
const traktApiKey =
  "19a5ec4d8dabf24914fd8436a28b759633226c296763768126bb21940a477ab0";
const tmdbApiKey = "cd059bc717a900bf749969433ec08789";

updateWidget();
var timer = setInterval(updateWidget, 30000);

function updateWidget() {
  tvWidget(tvWidgetDiv, user, traktApiKey, tmdbApiKey);
}
