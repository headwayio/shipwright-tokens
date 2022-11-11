import SD from "style-dictionary";
const StyleDictionary = SD.extend("config.json");

const build = () => {
  /* ======================= Types / Typeguards ======================= */

  type Value = { value?: string | number };
  type ObjInput = Value | Record<string, Value | Record<string, unknown>>;
  type Entry = [PropertyKey, ObjInput];
  type EntryInput = Record<PropertyKey, Value | Record<PropertyKey, unknown>>;
  type FlattenObjReturn =
    | [PropertyKey, string | number | undefined | ObjInput]
    | undefined;
  type TokensObj = {
    shadows?: Record<string, EntryInput>;
    "color set"?: Record<string, EntryInput>;
    "type set"?: Record<string, EntryInput>;
  };
  const isValue = (obj: ObjInput): obj is Value => "value" in obj;

  /* ===================================================== */

  /* ======================= Helpers ======================= */

  const flattenObj = (key: PropertyKey, obj: ObjInput): FlattenObjReturn => {
    if (obj === undefined) return;
    if (isValue(obj)) {
      return [key, obj.value];
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

  const parseFontWeight = (value: string | number) => {
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

  const parseLineHeight = (value: string | number) =>
    typeof value === "string" ? value : `${value}px`;

  const parseTypography = (obj: Record<string, string | number> = {}) => {
    const { fontWeight, lineHeight, letterSpacing } = obj;
    return {
      ...obj,
      fontWeight: parseFontWeight(fontWeight),
      lineHeight: parseLineHeight(lineHeight),
      letterSpacing: parseLetterSpacing(letterSpacing),
    };
  };

  const formatTwTypographyValues = (obj: Record<PropertyKey, ObjInput>) => {
    const items: Entry[] = Object.entries(obj);
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

  const formatMuiTypographyValues = (obj: Record<string, string | number>) => {
    const items = Object.entries(obj);
    const expanded = {};
    items.forEach(([k, v]) => {
      if (v[k]) return (expanded[k] = v[k]);
      if (k === "ios") return (expanded["ios"] = v);

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
    matcher: ({ type }: { type: string }) => type === "boxShadow",
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
    matcher: ({ type }: { type: string }) => type === "lineHeights",
    transformer: ({ value }: { value: string | number }) =>
      parseLineHeight(value),
  });

  StyleDictionary.registerTransform({
    name: "letterSpacing/em",
    type: "value",
    matcher: ({ type }: { type: string }) => type === "letterSpacing",
    transformer: ({ value }: { value: string | number }) =>
      parseLetterSpacing(value),
  });

  StyleDictionary.registerTransform({
    name: "fontWeight/lowerCaseOrNum",
    type: "value",
    matcher: ({ type }: { type: string }) => type === "fontWeights",
    transformer: ({ value }: { value: string | number }) =>
      parseFontWeight(value),
  });

  StyleDictionary.registerTransform({
    name: "typography/nested",
    type: "value",
    matcher: ({ type }: { type: string }) => type === "typography",
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
    formatter: ({ dictionary }: { dictionary: { tokens: TokensObj } }) => {
      const formatted = JSON.parse(
        formatEntries(dictionary?.tokens["type set"])
      );
      const formattedValues = formatMuiTypographyValues(formatted);
      return JSON.stringify(formattedValues);
    },
  });

  StyleDictionary.buildAllPlatforms();
};

/* ============================================================= */

export default build;
