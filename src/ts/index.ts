import "bootstrap/js/dist/collapse";

import { steamWidget } from "./includes/steamWidget";
import { osmWidget } from "./includes/osmWidget";
import { githubWidget } from "./includes/githubWidget";
import initTheme from "./includes/themeSwitch";

initTheme();

const steamWidgetDiv = document.getElementById("steamActivity");
const steamKey = "25F0C2FF68F43EFEFE4DCAC9C8E4F36";
const steamUser = "76561198136326705";
steamWidget(steamWidgetDiv, steamUser, steamKey);

const osmWidgetDiv = document.getElementById("osmChangesets");
const osmUser = "Robin van der Linde";
osmWidget(osmWidgetDiv, osmUser, 5);

const githubWidgetDiv = document.getElementById("githubActivity");
const githubUser = "robinlinde";
githubWidget(githubWidgetDiv, githubUser, 5);
