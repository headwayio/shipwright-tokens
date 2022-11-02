const { buildConfig } = require("./action-scripts/build-config.js");

const { copyThemeFile } = require("./action-scripts/copy-theme.js");
const { exec } = require("child_process");

const shipwrightScript = ({
  figmaTokenFile = "token/token.json",
  outputFolder = "build",
  styleSystem,
  actionPath = "./",
}) => {
  const transformedTokenPath = `${outputFolder}/style-dictionary/tokens.json`;
  console.log(figmaTokenFile);
  console.log(transformedTokenPath);

  // transform figma token file to style-dictionary ready JSON
  exec(`npx token-transformer ${figmaTokenFile} ${transformedTokenPath}`);

  // create the style-dictionary build config based on action config
  buildConfig({ transformedTokenPath, outputFolder, styleSystem });

  // execute the style-dictionary transformations
  const { build } = require("./action-scripts/build.js");
  build();

  // copy themeFile
  copyThemeFile({ outputFolder, styleSystem, actionPath });
};

// script execution
const [figmaTokenFile, outputFolder, styleSystem, actionPath] =
  process.argv.slice(2);

shipwrightScript({ figmaTokenFile, outputFolder, styleSystem, actionPath });
