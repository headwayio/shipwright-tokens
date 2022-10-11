const StyleDictionary = require("style-dictionary").extend("config.json");

// const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

const flattenObj = (key, obj) => {
  if (obj === undefined) return;

  const getEntries = () =>
    Object.fromEntries(Object.entries(obj)?.map(([k, v]) => flattenObj(k, v)));

  return typeof obj?.value === "string"
    ? [key, obj.value]
    : [key, getEntries()];
};

const formatEntries = (colors) =>
  JSON.stringify(
    Object.fromEntries(
      Object.entries(colors)?.map(([k, v]) => {
        const isStringOrNum = typeof v === "string" || typeof v === "number";
        return isStringOrNum ? [k, v] : flattenObj(k, v);
      })
    )
  );

StyleDictionary.registerFilter({
  name: "isColor",
  matcher: function (token) {
    return token.attributes.category === "colors";
  },
});

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
          }${x}px ${y}px ${blur} ${spread} ${color}`
      )
      .join(", ");
    return finalValues;
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
  ],
});

StyleDictionary.registerFormat({
  name: "twShadows",
  formatter: ({ dictionary, file, options }) => {
    return formatEntries(dictionary?.tokens?.shadows);
  },
});

StyleDictionary.registerFormat({
  name: "twColors",
  formatter: ({ dictionary, file, options }) => {
    return formatEntries(dictionary?.tokens?.colors);
  },
});

StyleDictionary.registerFormat({
  name: "twTypography",
  formatter: ({ dictionary, file, options }) => {
    return formatEntries(dictionary?.tokens?.colors);
  },
});

StyleDictionary.buildAllPlatforms();
