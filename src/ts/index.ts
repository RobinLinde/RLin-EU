import "bootstrap/js/dist/collapse";

import Steam from "./includes/steam";
import { osmWidget } from "./includes/osmWidget";
import { githubWidget } from "./includes/githubWidget";
import initTheme from "./includes/themeSwitch";

initTheme();

const steamWidgetDiv = document.getElementById("steamActivity");
const steamKey = "25F0C2FF68F43EFEFE4DCAC9C8E4F36";
const steamUser = "76561198136326705";

const steamApi = new Steam(steamUser, steamKey);
steamApi.steamWidget(steamWidgetDiv);

const osmWidgetDiv = document.getElementById("osmChangesets");
const osmUser = "Robin van der Linde";
osmWidget(osmWidgetDiv, osmUser, 5);

const githubWidgetDiv = document.getElementById("githubActivity");
const githubUser = "robinlinde";
githubWidget(githubWidgetDiv, githubUser, 5);
