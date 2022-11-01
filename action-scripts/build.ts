const StyleDictionary = require("style-dictionary").extend("config.json");

const build = () => {
  /* ======================= Helpers ======================= */

  const flattenObj = (key, obj) => {
    if (obj === undefined) return;

    const getEntries = () =>
      Object.fromEntries(
        Object.entries(obj)?.map(([k, v]) => flattenObj(k, v))
      );

    // We're checking for a 'value' key this way, rather than a simple obj.value check
    // because we want to avoid a false negative if obj.value resolves to a falsy value
    const hasAValueKey = Object.keys(obj).includes("value");
    const value = (key === 'lineHeight' || key === 'fontSize') ? parseLineHeight(obj?.value) : obj?.value;

    return hasAValueKey ? [key, value] : [key, getEntries()];
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
    switch (val) {
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

  const formatTwTypographyValues = (obj) => {
    const items = Object.entries(obj);
    const expanded = {};
    items.forEach(([k, v]) => {
      if (v[k]) return (expanded["." + k] = v[k]);
      if (k === "ios") return (expanded[".ios"] = v);

      const innerItems = Object.entries(v);

      innerItems.forEach(([item, v]) => {
        const variants = Object.entries(v);
        const firstChild = variants[0][1];
        const itemKey = "." + item;
        if (typeof firstChild === "string" || typeof firstChild === "number") {
          expanded[itemKey] = v;
          return;
        }
        variants.forEach(([variant, value]) => {
          if (variant === "regular") return (expanded[itemKey] = value);
          expanded[itemKey] = {
            ...expanded[itemKey],
            [`&.${item}-${variant}`]: value,
          };
        });
      });
    });
    return expanded;
  };

  const formatMuiTypographyValues = (obj) => {
    const items = Object.entries(obj);
    const expanded = {};
    items.forEach(([k, v]) => {
      if (v[k]) return (expanded[k] = v[k]);
      if (k === "ios") return (expanded.ios = v);

      const innerItems = Object.entries(v);

      innerItems.forEach(([item, v]) => {
        const variants = Object.entries(v);
        const firstChild = variants[0][1];
        if (typeof firstChild === "string" || typeof firstChild === "number") {
          expanded[item] = v;
          return;
        }
        variants.forEach(([variant, value]) => {
          expanded[item + "-" + variant] = value;
        });
      });
    });
    return expanded;
  };

  /* ============================================================= */

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
    name: "jsShadows",
    formatter: ({ dictionary }) => formatEntries(dictionary?.tokens?.shadows),
  });

  StyleDictionary.registerFormat({
    name: "jsColors",
    formatter: ({ dictionary }) =>
      formatEntries(dictionary?.tokens["color set"]),
  });

  StyleDictionary.registerFormat({
    name: "twTypography",
    formatter: ({ dictionary }) => {
      const formatted = JSON.parse(
        formatEntries(dictionary?.tokens["type set"])
      );
      const formattedValues = formatTwTypographyValues(formatted);
      return JSON.stringify(formattedValues);
    },
  });

  StyleDictionary.registerFormat({
    name: "jsMisc",
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

  StyleDictionary.registerFormat({
    name: "muiTypography",
    formatter: ({ dictionary }) => {
      const formatted = JSON.parse(
        formatEntries(dictionary?.tokens["type set"])
      );
      const formattedValues = formatMuiTypographyValues(formatted);
      return JSON.stringify(formattedValues);
    },
  });

  StyleDictionary.buildAllPlatforms();
};

module.exports = { build };
