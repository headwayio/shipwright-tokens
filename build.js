const StyleDictionary = require("style-dictionary").extend("config.json");

const flattenObj = (key, obj) => {
  if (obj === undefined) return;

  // if (typeof obj === 'string' ) return;

  const getEntries = () =>
    Object.fromEntries(Object.entries(obj)?.map(([k, v]) => flattenObj(k, v)));

  // We're checking for a 'value' key this way, rather than a simple obj.value
  // check, because we want to avoid a false negative if obj.value resolves to a
  // falsy value
  console.log(obj);
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

const parseFontWeight = (value) => {
  if (typeof value !== "string") return value;
  const val = value?.toLowerCase().replace(" ", "");
  switch(val) {
    case "regular":
      return 400;
    case "medium":
      return 500;
    case "semibold":
      return 600;
    case "bold":
      return 700;
    case "black":
      return 800;
    default:
      return val;
  }
};

const parseLetterSpacing = (value) => {
  if (typeof value === "string") {
    const lastChar = value.slice(-1);
    if (lastChar === "%") {
      let newBase = value.slice(0, value.length - 1);
      return newBase + "em";
    }
    return value;
  }
  return `${value}px`;
};

const parseLineHeight = (value) =>
  typeof value === "string" ? value : `${value}px`;

const parseTypography = (obj = {}) => {
  const { fontWeight, lineHeight, letterSpacing } = obj;
  return {
    ...obj,
    fontWeight: parseFontWeight(fontWeight),
    lineHeight: parseLineHeight(lineHeight),
    letterSpacing: parseLetterSpacing(letterSpacing),
  };
};

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
  transformer: ({ value }) => parseLineHeight(value),
});

StyleDictionary.registerTransform({
  name: "letterSpacing/em",
  type: "value",
  matcher: ({ type }) => type === "letterSpacing",
  transformer: ({ value }) => parseLetterSpacing(value),
});

StyleDictionary.registerTransform({
  name: "fontWeight/lowerCaseOrNum",
  type: "value",
  matcher: ({ type }) => type === "fontWeights",
  transformer: ({ value }) => parseFontWeight(value),
});

StyleDictionary.registerTransform({
  name: "typography/nested",
  type: "value",
  matcher: ({ type }) => type === "typography",
  transformer: ({ value }) => parseTypography(value),
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
    "letterSpacing/em",
    "fontWeight/lowerCaseOrNum",
    "typography/nested",
  ],
});

StyleDictionary.registerFormat({
  name: "twShadows",
  formatter: ({ dictionary }) => formatEntries(dictionary?.tokens?.shadows),
});

StyleDictionary.registerFormat({
  name: "twColors",
  formatter: ({ dictionary }) => formatEntries(dictionary?.tokens["color set"]),
});

StyleDictionary.registerFormat({
  name: "twTypography",
  formatter: ({ dictionary }) => formatEntries(dictionary?.tokens["type set"]),
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
