import "bootstrap/js/dist/collapse";

import { osmWidget } from "./includes/osmWidget";
import { githubWidget } from "./includes/githubWidget";
import initTheme from "./includes/themeSwitch";

initTheme();

const osmWidgetDiv = document.getElementById("osmChangesets");
const osmUser = "Robin van der Linde";
osmWidget(osmWidgetDiv, osmUser, 5);

const githubWidgetDiv = document.getElementById("githubActivity");
const githubUser = "robinlinde";
githubWidget(githubWidgetDiv, githubUser, 5);
