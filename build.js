const StyleDictionary = require("style-dictionary").extend("config.json");

const flattenObj = (key, obj) => {
  if (obj === undefined) return;
  if (key === "value") return obj;

  const getEntries = () =>
    Object.fromEntries(Object.entries(obj)?.map(([k, v]) => flattenObj(k, v)));

  const hasAValueKey = Object.keys(obj).includes("value");

  return hasAValueKey ? [key, obj?.value] : [key, getEntries()];
};

const formatEntries = (entries) =>
  !entries
    ? ""
    : JSON.stringify(
        Object.fromEntries(
          Object.entries(entries)?.map(([k, v]) => {
            const isStringOrNum =
              typeof v === "string" || typeof v === "number";
            return isStringOrNum ? [k, v] : flattenObj(k, v);
          })
        )
      );

StyleDictionary.registerTransform({
  name: "shadows/css",
  type: "value",
  matcher: ({ type }) => type === "boxShadow",
  transformer: ({ value }) => {
    const values = Array.isArray(value) ? value : [value];
    const finalValues = values
      .map(
        ({ color, type, x, y, blur, spread }) =>
          `${
            type === "innerShadow" ? "inset " : ""
          }${x}px ${y}px ${blur}px ${spread}px ${color}`
      )
      .join(", ");
    return finalValues;
  },
});

StyleDictionary.registerTransform({
  name: "lineHeight/px",
  type: "value",
  matcher: ({ type }) => type === "lineHeights",
  transformer: ({ value }) =>
    typeof value === "string" ? value : `${value}px`,
});

StyleDictionary.registerTransform({
  name: "fontWeight/lowerCase",
  type: "value",
  matcher: ({ type }) => type === "fontWeights",
  transformer: ({ value }) => {
    const val = value.toLowerCase();
    return val === "regular"
      ? 400
      : val === "medium"
      ? 500
      : val === "semi bold" || val === "semibold"
      ? 600
      : val === "black"
      ? 800
      : val;
  },
});

StyleDictionary.registerTransformGroup({
  name: "js/custom",
  transforms: [
    "attribute/cti",
    "name/cti/pascal",
    "size/rem",
    "color/hex",
    "shadows/css",
    "lineHeight/px",
    "fontWeight/lowerCase",
  ],
});

StyleDictionary.registerFormat({
  name: "twShadows",
  formatter: ({ dictionary }) => {
    return formatEntries(dictionary?.tokens?.shadows);
  },
});

StyleDictionary.registerFormat({
  name: "twColors",
  formatter: ({ dictionary }) => {
    return formatEntries(dictionary?.tokens["color set"]);
  },
});

StyleDictionary.registerFormat({
  name: "twTypography",
  formatter: ({ dictionary }) => {
    return formatEntries(dictionary?.tokens["type set"]);
  },
});

StyleDictionary.registerFormat({
  name: "twMisc",
  formatter: ({ dictionary = {} }) => {
    const { tokens } = dictionary;
    const excluded = ["color set", "shadows", "type set"];

    const entries = {};
    const keys = Object.keys(tokens)?.filter(
      (k = "") => k[0] !== "_" && !excluded.includes(k)
    );
    keys.forEach((key) => {
      const singularized =
        key === "fontFamilies"
          ? "fontFamily"
          : key === "lineHeights"
          ? "lineHeight"
          : key === "fontWeights"
          ? "fontWeight"
          : key;

      entries[singularized] = JSON.parse(formatEntries(tokens[key]));
    });

    return JSON.stringify(entries) || "";
  },
});

StyleDictionary.buildAllPlatforms();
