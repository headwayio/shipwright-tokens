import { shipwrightScript } from "./action-scripts/shipwright-script.js";
import { StyleSystems } from "./action-scripts/build-config.js";

// script execution
const [figmaTokenFile, outputFolder, styleSystem, actionPath] =
  process.argv.slice(2);

console.log("figmaTokenFile", figmaTokenFile);
console.log("outputFolder", outputFolder);
console.log("styleSystem", styleSystem);
console.log("actionPath", actionPath);

shipwrightScript({
  figmaTokenFile,
  outputFolder,
  styleSystem: styleSystem as StyleSystems,
  actionPath,
});
