import "bootstrap/js/dist/collapse";
import initTheme from "./includes/themeSwitch";
import Steam from "./includes/steam";

initTheme();

const steamBadge = document.getElementById("steamBadge") as HTMLSpanElement;
const steamKey = "25F0C2FF68F43EFEFE4DCAC9C8E4F36";
const steamUser = "76561198136326705";

const steamApi = new Steam(steamUser, steamKey);
steamApi.steamBadge(steamBadge);
