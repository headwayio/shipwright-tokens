import fs from "fs";

enum StyleSystems {
  Tailwind = "tailwind",
  Mui = "mui",
}

type Props = {
  transformedTokenPath: string;
  outputFolder: string;
  styleSystem: StyleSystems;
};

const buildConfig = ({
  transformedTokenPath,
  outputFolder = "build",
  styleSystem,
}: Props) => {
  const platforms = {
    [StyleSystems.Tailwind]: {
      transformGroup: "js/custom",
      buildPath: `${outputFolder}/`,
      files: [
        {
          destination: "typography.json",
          format: "twTypography",
        },
        {
          destination: "misc.json",
          format: "jsMisc",
        },
        {
          destination: "colors.json",
          format: "jsColors",
        },
        {
          destination: "shadows.json",
          format: "jsShadows",
        },
      ],
    },
    [StyleSystems.Mui]: {
      transformGroup: "js/custom",
      buildPath: `${outputFolder}/`,
      files: [
        {
          destination: "typography.json",
          format: "muiTypography",
        },
        {
          destination: "misc.json",
          format: "jsMisc",
        },
        {
          destination: "colors.json",
          format: "jsColors",
        },
        {
          destination: "shadows.json",
          format: "jsShadows",
        },
      ],
    },
  };

  const config = {
    source: [transformedTokenPath],
    platforms: { [styleSystem]: platforms[styleSystem] },
  };

  fs.writeFileSync("config.json", JSON.stringify(config));
};

export { StyleSystems, buildConfig };
