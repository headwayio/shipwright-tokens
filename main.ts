import { shipwrightScript } from "./action-scripts/shipwright-script.js";
import { StyleSystems } from "./action-scripts/build-config.js";

// script execution
const [figmaTokenFile, outputFolder, styleSystem, actionPath] =
  process.argv.slice(2);

shipwrightScript({
  figmaTokenFile,
  outputFolder,
  styleSystem: styleSystem as StyleSystems,
  actionPath,
});
