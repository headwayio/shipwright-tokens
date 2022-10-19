const fs = require("fs");

const args = process.argv.slice(2);

const buildConfig = (dist = "build", src = "tokens") => {
  const config = {
    source: [`${src}/*.json`],
    platforms: {
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
    },
  };

  fs.writeFile("config.json", JSON.stringify(config), (err) => {
    if (err) {
      console.error(err);
    }
  });
};

buildConfig(args[0], args[1]);
