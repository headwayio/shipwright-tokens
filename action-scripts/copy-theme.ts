import fs from "fs";
import path from "path";

const copyThemeFile = async ({
  outputFolder,
  styleSystem,
  actionPath,
}: Record<string, string>) => {
  const themeTemplate =
    {
      tailwind: "tailwind.config.js",
      mui: "muiTheme.js",
    }[styleSystem] || "muiTheme.js";

  const themeSource = path.join(actionPath, "theme_templates", themeTemplate);
  const themeDest = path.join(outputFolder, themeTemplate);

  await fs.copyFile(themeSource, themeDest, (err) =>
    console.warn(`Copy File Error: ${err}`)
  );
};

export default copyThemeFile;
