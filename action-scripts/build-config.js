"use strict";
const fs = require("fs");
const buildConfig = async ({ outputFolder = "build", transformedTokenPath, styleSystem, }) => {
    const platforms = {
        tailwind: {
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
        mui: {
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
    await fs.writeFile("config.json", JSON.stringify(config), (err) => {
        if (err) {
            console.error(err);
        }
    });
};
module.exports = { buildConfig };
