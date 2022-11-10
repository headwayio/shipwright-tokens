const fs = require("fs");
const path = require("path");

const copyThemeFile = async ({ outputFolder, styleSystem, actionPath }) => {
  const themeTemplate = {
    tailwind: "tailwind.config.js",
    mui: "muiTheme.js",
    restyle: "restyleTheme.js",
  }[styleSystem];

  const themeSource = path.join(actionPath, "theme_templates", themeTemplate);
  const themeDest = path.join(outputFolder, themeTemplate);

  await fs.copyFile(themeSource, themeDest, (err) =>
    console.warn(`Copy File Error: ${err}`)
  );
};

module.exports = { copyThemeFile };