const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

const copyThemeFile = async ({ dist, styleSystem, actionPath }) => {
  const themeTemplate = {
    tailwind: "tailwind.config.js",
    mui: "muiTheme.js",
  }[styleSystem];

  const themeSource = path.join(actionPath, "theme_templates", themeTemplate);
  const themeDest = path.join(dist, styleSystem, themeTemplate);

  await fs.copyFile(themeSource, themeDest);
};

const buildConfig = async (
  dist = "build",
  src = "tokens",
  styleSystem = "tailwind",
  actionPath = "" // TODO: Use actionPath to access theme objects and copy to build directory
) => {
  const platforms = {
    tailwind: {
      transformGroup: "js/custom",
      buildPath: `${dist}/`,
      files: [
        {
          destination: "typography.json",
          format: "twTypography",
        },
        {
          destination: "misc.json",
          format: "twMisc",
        },
        {
          destination: "colors.json",
          format: "twColors",
        },
        {
          destination: "shadows.json",
          format: "twShadows",
        },
      ],
    },
    // Update in MUI branch
    // mui: {
    //   transformGroup: "js/custom",
    //   buildPath: `${dist}/`,
    //   files: [
    //     {
    //       destination: "typography.json",
    //       format: "twTypography",
    //     },
    //     {
    //       destination: "misc.json",
    //       format: "twMisc",
    //     },
    //     {
    //       destination: "colors.json",
    //       format: "twColors",
    //     },
    //     {
    //       destination: "shadows.json",
    //       format: "twShadows",
    //     },
    //   ],
    // },
  };

  const config = {
    source: [`${src}/*.json`],
    platforms: { [styleSystem]: platforms[styleSystem] },
  };

  await fs.writeFile("config.json", JSON.stringify(config), (err) => {
    if (err) {
      console.error(err);
    }
  });

  await copyThemeFile({ dist, styleSystem, actionPath });
};

buildConfig(args[0], args[1]);
