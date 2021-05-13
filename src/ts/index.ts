import "bootstrap/js/dist/collapse";

import CodersRankActivity from "@codersrank/activity";
window.customElements.define("codersrank-activity", CodersRankActivity);

import { tvWidget } from "./includes/tvWidget";
import { osmWidget } from "./includes/osmWidget";
import { githubWidget } from "./includes/githubWidget";

const tvWidgetDiv = document.getElementById("tvWidget");
const traktUser = "robinlin";
const traktApiKey =
  "19a5ec4d8dabf24914fd8436a28b759633226c296763768126bb21940a477ab0";
const tmdbApiKey = "cd059bc717a900bf749969433ec08789";

updateWidget();
var timer = setInterval(updateWidget, 30000);

function updateWidget() {
  tvWidget(tvWidgetDiv, traktUser, traktApiKey, tmdbApiKey);
}

const osmWidgetDiv = document.getElementById("osmChangesets");
const osmUser = "Robin van der Linde";
osmWidget(osmWidgetDiv, osmUser, 10);

const githubWidgetDiv = document.getElementById("githubActivity");
const githubUser = "robinlinde";
const githubApiKey = "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";
githubWidget(githubWidgetDiv, githubUser, 10, githubApiKey);
