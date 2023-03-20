import { execSync } from "child_process";
import copyThemeFile from "./copy-theme.js";
import { buildConfig, StyleSystems } from "./build-config.js";

type Props = {
  figmaTokenFile: string;
  outputFolder: string;
  actionPath?: string;
  styleSystem: StyleSystems;
};

const shipwrightScript = async ({
  figmaTokenFile = "token/token.json",
  outputFolder = "build",
  styleSystem = StyleSystems.Mui,
  actionPath = "./",
}: Props) => {
  const transformedTokenPath = `${outputFolder}/style-dictionary/tokens.json`;

  console.log("1-----------------");

  // transform figma token file to style-dictionary ready JSON
  execSync(
    `npx token-transformer ${figmaTokenFile} ${transformedTokenPath} --expandTypography=true`
  );

  console.log("2-----------------");
  // create the style-dictionary build config based on action config
  buildConfig({ transformedTokenPath, outputFolder, styleSystem });

  console.log("3-----------------");
  // execute the style-dictionary transformations
  await import("./build.js").then((module) => {
    const build = module.default;
    build();
  });

  console.log("4-----------------");
  // copy themeFile
  copyThemeFile({ outputFolder, styleSystem, actionPath });

  console.log("5-----------------");
  // format generated token files
  execSync(`npx prettier --write ${actionPath} ${outputFolder}/**`);
  console.log("6-----------------");
};

export { shipwrightScript };
