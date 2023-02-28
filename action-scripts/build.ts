import SD, { TransformedToken } from "style-dictionary";
const StyleDictionary = SD.extend("config.json");

const build = () => {
  /* ======================= Types / Typeguards ======================= */

  type Value = { value?: string | number };
  type Variant = [string, Record<string, unknown>];
  type ObjInput =
    | Value
    | Record<PropertyKey, Value | Record<PropertyKey, unknown>>;
  type StringEntry = [string, ObjInput];
  type NumEntry = [number, ObjInput];
  type Entry = StringEntry | NumEntry;
  type EntryInput = Record<PropertyKey, Value | Record<PropertyKey, unknown>>;
  type FlattenObjReturn =
    | [PropertyKey, string | number | undefined | ObjInput]
    | undefined;
  type TokensObj = {
    shadows?: Record<string, EntryInput>;
    "color set"?: Record<string, EntryInput>;
    "type set"?: Record<string, EntryInput>;
    fontWeights?: Record<string, EntryInput>;
  };
  const isValue = (obj: ObjInput): obj is Value => "value" in obj;

  /* ================================================================= */

  /* ============================ Helpers ============================ */

  const flattenObj = (key: PropertyKey, obj: ObjInput): FlattenObjReturn => {
    if (obj === undefined) return;
    if (isValue(obj)) {
      if (obj.value === undefined) return;
      const value = formatValue(key, obj.value);
      return [key, value];
    }

    const entries = Object.entries(obj);
    const mapped = entries.map(([k, v]) => flattenObj(k, v));

    return [
      key,
      mapped.reduce<ObjInput>((prev, curr) => {
        if (curr) {
          const [k, v] = curr;
          return {
            ...prev,
            [k]: v,
          };
        } else {
          return prev;
        }
      }, {}),
    ];
  };

  const formatEntries = (obj: EntryInput | undefined): string => {
    if (!obj) return "";

    const entries: Entry[] = Object.entries(obj);
    const mapped: FlattenObjReturn[] = entries[0]?.length
      ? entries.map(([k, v]: Entry) => {
          const isStringOrNum = typeof v === "string" || typeof v === "number";
          return isStringOrNum ? [k, v] : flattenObj(k, v);
        })
      : [];

    const reduced = mapped.reduce((prev, curr) => {
      if (curr?.length) {
        const [k, v] = curr;
        return {
          ...prev,
          [k]: v,
        };
      } else {
        return prev;
      }
    }, {});

    return JSON.stringify(reduced);
  };

  const formatValue = (key: PropertyKey, value: string | number) => {
    switch (key) {
      case "lineHeight":
        return parseNumberToPixel(value);
      case "fontSize":
        return parseNumberToPixel(value);
      case "fontWeight":
        return parseFontWeight(value);
      default:
        return value;
    }
  };

  const parseFontWeight = (value: string | number) => {
    if (typeof value !== "string") return value;
    const val = value?.toLowerCase().replace(" ", "");
    switch (val) {
      case "thin":
        return 100;
      case "extra light":
        return 200;
      case "light":
        return 300;
      case "regular":
        return 400;
      case "medium":
        return 500;
      case "semibold":
        return 600;
      case "bold":
        return 700;
      case "extra bold":
        return 800;
      case "black":
        return 900;
      case "extra black":
        return 950;
      default:
        return val;
    }
  };

  const parseLetterSpacing = (value: string | number) => {
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

  const parseNumberToPixel = (value: string | number) =>
    typeof value === "string" ? value : `${value}px`;

  const parseLineHeight = (value: string | number) => parseNumberToPixel(value);

  const parseTypography = (obj: Record<string, string | number> = {}) => {
    const { fontWeight, lineHeight, letterSpacing } = obj;
    return {
      ...obj,
      fontWeight: parseFontWeight(fontWeight),
      lineHeight: parseLineHeight(lineHeight),
      letterSpacing: parseLetterSpacing(letterSpacing),
    };
  };

  const formatTwTypographyValues = (obj: Record<string | number, ObjInput>) => {
    const items = Object.entries(obj);
    const expanded: Record<string | number, any> = {};

    items.forEach(([k, v]: Entry) => {
      // e.g. ['headline', { h1: { '400': [Object] }, h2: { '400': [Object], '700': [Object] } } ]
      // OR
      // ['paragraph 1', {'400': { fontFamily: 'Inter', fontWeight: 'Regular' } } ]

      if (isValue(v)) {
        if (k === "value") return (expanded["." + k] = v.value);
      } else if (v[k]) expanded["." + k] = v[k];

      if (k === "ios") return (expanded[".ios"] = v);

      const innerItems = Object.entries(v);

      innerItems.forEach(([item, v]) => {
        const variants: Variant[] = Object.entries(v);
        const firstChildVal = variants[0][1];

        if (typeof firstChildVal === "string") {
          return (expanded[`.${k}`] = v);
        }
        const itemKey = "." + item; // e.g. ".h1"

        if (variants.length === 1) {
          const [variant, value] = variants[0];
          expanded[itemKey] = {
            ...value,
            [`&.${item}-${variant}`]: value,
          };
        } else {
          const defaultVal = variants.reduce((prev, curr): Variant => {
            const [prevVariant] = prev;
            const [currVariant] = curr;
            if (prevVariant === "regular" || prevVariant === "default")
              return prev;
            if (currVariant === "regular" || currVariant === "default")
              return curr;

            if (parseInt(prevVariant) < parseInt(currVariant)) {
              return prev;
            } else if (parseInt(prevVariant) > parseInt(currVariant))
              return curr;
            return prev;
          }, variants[0])[1];

          expanded[itemKey] = expanded[itemKey]
            ? { ...expanded[itemKey], ...defaultVal }
            : defaultVal;

          variants.forEach(([variant, value]: Variant) => {
            expanded[itemKey] = {
              ...expanded[itemKey],
              [`&.${item}-${variant}`]: value,
            };
          });
        }
      });
    });
    return expanded;
  };

  const formatMuiTypographyValues = (obj: Record<PropertyKey, ObjInput>) => {
    const items = Object.entries(obj);
    const expanded: Record<PropertyKey, any> = {};
    items.forEach(([k, v]) => {
      if (isValue(v)) {
        if (k === "value") return (expanded[k] = v.value);
      } else {
        if (v[k]) return (expanded[k] = v[k]);
      }
      if (k === "ios") return (expanded["ios"] = v);

      const innerItems = Object.entries(v);

      innerItems.forEach(([item, v]) => {
        const variants: Variant[] = Object.entries(v);
        const firstChildVal = variants[0][1];
        if (typeof firstChildVal === "string") {
          expanded[k] = v;
          return;
        }

        const defaultVal = variants.reduce((prev, curr): Variant => {
          const [prevVariant] = prev;
          const [currVariant] = curr;
          if (prevVariant === "regular" || prevVariant === "default")
            return prev;
          if (currVariant === "regular" || currVariant === "default")
            return curr;

          if (parseInt(prevVariant) < parseInt(currVariant)) {
            return prev;
          } else if (parseInt(prevVariant) > parseInt(currVariant)) return curr;
          return prev;
        }, variants[0])[1];

        expanded[item] = expanded[item]
          ? { ...expanded[item], ...defaultVal }
          : defaultVal;

        variants.forEach(([variant, value]) => {
          expanded[item + "-" + variant] = value;
        });
      });
    });
    return expanded;
  };

  const formatRestyleTypographyValues = (
    obj: Record<PropertyKey, ObjInput>
  ) => {
    const items = Object.entries(obj);
    const expanded: Record<PropertyKey, any> = {};
    items.forEach(([k, v]) => {
      if (isValue(v)) {
        if (k === "value") return (expanded[k] = v.value);
      } else {
        if (v[k]) return (expanded[k] = v[k]);
      }
      if (k === "ios") return (expanded.ios = v);

      const innerItems = Object.entries(v);

      innerItems.forEach(([item, v]) => {
        const variants = Object.entries(v);
        const firstChild = variants[0][1];
        if (typeof firstChild === "string" || typeof firstChild === "number") {
          const transformedVal = Object.entries(v).reduce(
            (transformed, [key, value]) => {
              if (key === "paragraphSpacing") return transformed;
              if (key === "paragraphIndent") return transformed;
              if (key === "textCase") {
                if (value === "none") return transformed;
                return { ...transformed, textTransform: value };
              }
              if (key === "textDecoration") {
                if (value === "none") return transformed;
                return { ...transformed, textDecorationLine: value };
              }
              return { ...transformed, [key]: value };
            },
            {}
          );
          expanded[item] = transformedVal;
          // expanded[item] = v;
          return;
        }
        variants.forEach(([variant, value]: [string, any]) => {
          const transformedVal = Object.entries(value).reduce(
            (transformed, [key, value]) => {
              if (key === "paragraphSpacing") return transformed;
              if (key === "paragraphIndent") return transformed;
              if (key === "textCase") {
                if (value === "none") return transformed;
                return { ...transformed, textTransform: value };
              }
              if (key === "textDecoration") {
                if (value === "none") return transformed;
                return { ...transformed, textDecorationLine: value };
              }
              return { ...transformed, [key]: value };
            },
            {}
          );

          expanded[item + "-" + variant] = transformedVal;
          // expanded[item] = value;
        });
      });
    });
    return expanded;
  };

  /* ============================================================= */

  /* ============================= Font-Faces ============================= */

  // https://github.com/amzn/style-dictionary/blob/main/examples/advanced/font-face-rules/sd.config.js

  // Register an "attribute" transform to codify the font's details
  // as named attributes.
  StyleDictionary.registerTransform({
    name: "attribute/font",
    type: "attribute",
    transformer: ({ path }) => ({
      category: path[0],
      type: path[1],
      family: path[2],
      weight: path[3],
      style: path[4],
    }),
  });

  // Register a custom format to generate @font-face rules.
  StyleDictionary.registerFormat({
    name: "font-face",
    formatter: ({ dictionary: { allTokens }, options }) => {
      const fontPathPrefix = options.fontPathPrefix || "../";

      // https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
      enum FormatsMap {
        woff2 = "woff2",
        woff = "woff",
        ttf = "truetype",
        otf = "opentype",
        svg = "svg",
        eot = "embedded-opentype",
      }

      return allTokens
        ?.reduce((fontList: string[], prop: TransformedToken) => {
          const { attributes, formats, value: path } = prop;

          const { family, weight, style } = attributes || {};

          const urls = formats?.map(
            (extension: keyof typeof FormatsMap) =>
              `url("${fontPathPrefix}${path}.${extension}") format("${FormatsMap[extension]}")`
          );
          const src = urls?.join(",\n\t\t\t ");

          const fontCss = [
            "@font-face {",
            `\n\tfont-family: "${family || path || `""`}";`,
            `\n\tfont-style: ${style || `""`};`,
            `\n\tfont-weight: ${weight || `""`};`,
            `\n\tsrc: ${src || `""`};`,
            "\n\tfont-display: fallback;",
            "\n}\n",
          ].join("");

          fontList.push(fontCss);

          return fontList;
        }, [])
        ?.join("\n");
    },
  });

  /* ====================================================================== */

  StyleDictionary.registerTransform({
    name: "shadows/css",
    type: "value",
    matcher: ({ type }: TransformedToken) => type === "boxShadow",
    transformer: ({ value }: { value: unknown | [] }) => {
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
    matcher: ({ type }: TransformedToken) => type === "lineHeights",
    transformer: ({ value }: { value: string | number }) =>
      parseLineHeight(value),
  });

  StyleDictionary.registerTransform({
    name: "letterSpacing/em",
    type: "value",
    matcher: ({ type }: TransformedToken) => type === "letterSpacing",
    transformer: ({ value }: { value: string | number }) =>
      parseLetterSpacing(value),
  });

  StyleDictionary.registerTransform({
    name: "fontWeight/lowerCaseOrNum",
    type: "value",
    matcher: ({ type }: TransformedToken) => type === "fontWeights",
    transformer: ({ value }: { value: string | number }) =>
      parseFontWeight(value),
  });

  StyleDictionary.registerTransform({
    name: "typography/nested",
    type: "value",
    matcher: ({ type }: TransformedToken) => type === "typography",
    transformer: ({ value }: { value: Record<string, string | number> }) =>
      parseTypography(value),
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
    formatter: ({ dictionary }: { dictionary: { tokens: TokensObj } }) =>
      formatEntries(dictionary?.tokens?.shadows),
  });

  StyleDictionary.registerFormat({
    name: "jsColors",
    formatter: ({ dictionary }: { dictionary: { tokens: TokensObj } }) =>
      formatEntries(dictionary?.tokens["color set"]),
  });

  StyleDictionary.registerFormat({
    name: "twTypography",
    formatter: ({ dictionary }: { dictionary: { tokens: TokensObj } }) => {
      const formatted = JSON.parse(
        formatEntries(dictionary?.tokens["type set"])
      );
      const formattedValues = formatTwTypographyValues(formatted);
      return JSON.stringify(formattedValues);
    },
  });

  StyleDictionary.registerFormat({
    name: "jsMisc",
    formatter: ({ dictionary = {} }: Record<string, any>) => {
      const { tokens } = dictionary;
      const excluded = ["color set", "shadows", "type set"];

      const entries: Record<PropertyKey, any> = {};
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
    formatter: ({ dictionary }: { dictionary: { tokens: TokensObj } }) => {
      const formatted = JSON.parse(
        formatEntries(dictionary?.tokens["type set"])
      );
      const formattedValues = formatMuiTypographyValues(formatted);
      return JSON.stringify(formattedValues);
    },
  });

  StyleDictionary.registerFormat({
    name: "restyleTypography",
    formatter: ({ dictionary }: { dictionary: { tokens: TokensObj } }) => {
      const formatted = JSON.parse(
        formatEntries(dictionary?.tokens["type set"])
      );
      const formattedValues = formatRestyleTypographyValues(formatted);
      return JSON.stringify(formattedValues);
    },
  });

  StyleDictionary.buildAllPlatforms();
};

/* ======================================================================= */

export default build;
