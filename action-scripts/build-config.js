import fs from "fs";
var StyleSystems;
(function (StyleSystems) {
    StyleSystems["Tailwind"] = "tailwind";
    StyleSystems["Mui"] = "mui";
})(StyleSystems || (StyleSystems = {}));
const buildConfig = ({ transformedTokenPath, outputFolder = "build", styleSystem, }) => {
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
export { buildConfig, StyleSystems };
