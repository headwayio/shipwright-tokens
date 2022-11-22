import fs from "fs";
import path from "path";
import { StyleSystems } from "./build-config.js";

const copyThemeFile = async ({
  outputFolder,
  styleSystem,
  actionPath,
}: Record<string, string>) => {
  const themeTemplate =
    {
      [StyleSystems.Tailwind]: "tailwind.config.js",
      [StyleSystems.Mui]: "muiTheme.js",
    }[styleSystem] || "muiTheme.js";

  const themeSource = path.join(actionPath, "theme_templates", themeTemplate);
  const themeDest = path.join(outputFolder, themeTemplate);

  await fs.copyFile(themeSource, themeDest, (err) =>
     err && console.warn(`Copy File Error: ${err}`)
  );
};

export default copyThemeFile;
