# Shipwright Tokens

## Contents

- [Configure: Filter Actions](#configure-filter-actions)
- [Integrate Tailwind CSS](#integrate-tailwind-css)
- [Integrate MUI](#integrate-mui)
- [Integrate Restyle](#integrate-restyle)

---

## Configure: Filter Actions

Shipwright Tokens is a powerful tool, but you probably don't want it to run for every PR made in your repo. Instead, you likely only want it to run when you've made changes to your design tokens in Figma. This section will show you how to configure your action to run Shipwright Tokens only when you want it.

Add one of the below snippets to your `.yml` file that uses Shipwright Tokens.

### Filter by Branch Name

This method triggers the Shipwright Tokens action to run whenever a PR is opened from a branch name beginning with `tokens/`. If you want another naming convention in your project, simply replace `tokens` with your preferred name. Using this method, you will need to ensure that you are making commits to a branch beginning with `tokens/`, or your prefered naming convention, from within the Figma Tokens Plug-in.

```
on:
 push:
   branches:
     - 'tokens/**'
```

### Filter by Directory/Files Changed

This method triggers the Shipwright Tokens action when a PR is opened that contains changes to any file in the `tokens` directory. If you are saving your tokens in a different directory, replace `tokens` with the path to/name of your directory.

```
on:
 pull_request:
   paths:
     - 'tokens/**'
```

You can further specify which branch the PR is made against if you'd like to. The below example will trigger the Shipwright Token action when a PR is made against `main` while also containing changes to files in the `tokens` directory.

```
on:
 pull_request:
   paths:
     - 'tokens/**'
   branches:
     - 'main'
```

### Default Behavior

Using the provided template, without configuring the filter actions, will cause the Shipwright Tokens action to run on any PR opened against `main`.

---

## Integrate Tailwind CSS

This section will show you how to configure your Shipwright Tokens action to output a custom Tailwind CSS theme.

### Generate a Custom Theme

Ensure that the `.yml` file that calls Shipwright Tokens includes `tailwind` as the value for the `styleSystem` property:

```
    steps:
      - name: Shipwright Tokens
        uses: headwayio/shipwright-tokens@(release/version)
        with:
          styleSystem: tailwind
```

With this configuration option set, Shipwright Tokens will generate 5 files that will be used for your custom theme: `tailwind.config.js`, `colors.json`, `misc.json`, `shadows.json`, and `typography.json`. These files will be generated in the directory that you specify for the `outputFolder` property.

### Using the Custom Theme

By default, the generated `tailwind.config.js` file will import and extend the 4 generated `.json` files, making all styles in your custom theme available as a base for your existing tailwing config. To incorporate the generated theme with your existing tailwind config, add the following snippet to `module.exports` within your projects existing `tailwind.config.js` file:

```
  presets: [
    require('yourOutputDirectory/tailwind.config.js')
  ],
```

If your project does not have an existing tailwind config, move the generated `tailwing.config.js` file to the root directory of your project and update the import paths to the generated `.json` files.

You can pick and choose which styles are available in your project by editing the generated `tailwind.config.js` to only include the styles you want, the two sections below will show you how to do this.

### Colors, Shadows, and Misc styles:

- Ensure the contents of the generate files are available in `tailwind.config.js`:

```
const colors = require("./yourOutputDirectory/colors");
const shadows = require("./yourOutputDirectory/shadows");
const misc = require("./yourOutputDirectory/misc");
```

- Ensure your config is extending these values:

```
  theme: {
    extend: {
      colors,
      shadows,
      ...misc,
    },
  },
```

### Typography:

- Ensure the contents of the generated typography file is available in `tailwind.config.js`:

```
const typography = require("./yourOutputDirectory/typography");
```

- Import Tailwind CSS's built-in plugin function:

```
const plugin = require("tailwindcss/plugin");
```

- Add this custom plugin, utilizing the `addComponents` function:

```
plugins: [
    plugin(function ({ addBase, addComponents }) {
      addComponents({
        ...typography,
      });
    }),
  ],
```

---

## Integrate MUI

This section will show you how to configure your Shipwright Tokens action to output a custom MUI theme.

### Generate a Custom Theme

Ensure that the `.yml` file that calls Shipwright Tokens includes `mui` as the value for the `styleSystem` property:

```
    steps:
      - name: Shipwright Tokens
        uses: headwayio/shipwright-tokens@(release/version)
        with:
          styleSystem: mui
```

With this configuration option set, Shipwright Tokens will generate 5 files that will be used for your custom theme: `muiTheme.js`, `colors.json`, `misc.json`, `shadows.json`, and `typography.json`. These files will be generated in the directory that you specify for the `outputFolder` property.

### Using the Custom Theme

By default, the generated `muiTheme.js` file will import and extend the 4 generated `.json` files, making all styles in your custom theme available for use. To start using your custom theme, you simply need to pass your custom theme to MUI's `ThemeProvider` component by doing the following:

- Import your custom theme:

```
import theme from "./yourOutputDirectory/muiTheme";
```

- Provde your theme to the `ThemeProvider`

```
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
```

### Pick and Choose Styles

You can pick and choose which styles are availble in your project by editing the generated `muiTheme.js` to only include the styles you want by adding/removing the following snippets:

### Colors:

- Import your generated `colors.json` file:

```
const palette = require("./yourOutputDirectory/colors");
```

- Include `palette` in the object passed to the `createTheme` function:

```
const theme = createTheme({
  palette,
});
```

### Shadows:

- Import your generated `shadows.json` file:

```
const shadows = require("./yourOutputDirectory/shadows");
```

- Include `shadows` in the object passed to the `createTheme` function:

```
const theme = createTheme({
  shadows,
});
```

### Typography:

- Import your generated `typography.json` & `misc.json` files:

```
const typography = require("./typography");
const misc = require("./misc");
```

- Spread the values of `typography` and `misc` in the object passed to the `createTheme` function:

```
const theme = createTheme({
  typography: {
    ...typography,
    ...misc,
  },
});
```

---

## Integrate Restyle

This section will show you how to configure your Shipwright Tokens action to output a custom React Native Restyle theme.

### Generate a Custom Theme

Ensure that the `.yml` file that calls Shipwright Tokens includes `restyle` as the value for the `styleSystem` property:

```
    steps:
      - name: Shipwright Tokens
        uses: headwayio/shipwright-tokens@(release/version)
        with:
          styleSystem: restyle
```

With this configuration option set, Shipwright Tokens will generate 5 files that will be used for your custom theme: `restyleTheme.js`, `colors.json`, `misc.json`, `shadows.json`, and `typography.json`. These files will be generated in the directory that you specify for the `outputFolder` property.

### Using the Custom Theme

By default, the generated `restyleTheme.ts` file will import and extend the 4 generated `.json` files, making all styles in your custom theme available for use. To start using your custom theme, you simply need to pass your custom theme to Restyle's `ThemeProvider` component by doing the following:

- Import and extend your custom theme in `theme.ts`:

```
import shipwrightTheme from "./styles/restyleTheme";

const theme = {
  ...shipwrightTheme,
  textVariants: {
    ...shipwrightTheme.textVariants,
    defaults: {
      fontSize: "16",
    },
  },
};

export type Theme = typeof theme;
export default theme;
```

- Import your theme in `App.tsx`:

```
import theme from "./theme";
```

- Pass the them to the `ThemeProvider`:

```
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
```

### Pick and Choose Styles

You can pick and choose which styles are availble in your project by editing the generated `restyleTheme.ts` to only include the styles you want by adding/removing the following snippets:

### Colors:

- Import your generated `colors.json` file:

```
const palette = require("./yourOutputDirectory/colors");
```

- Choose which colors you want in your project by assigning them a property name in the `createTheme` object:

```
const theme = createTheme({
  colors: {
      primaryMain: palette.primary.main,
      primaryDark: palette.primary.dark,
      primaryLight: palette.primary.light,
      secondaryMain: palette.secondary.main,
      secondaryDark: palette.secondary.dark,
      secondaryLight: palette.secondary.light
      }
});
```

### Shadows:

- Import your generated `shadows.json` file

```
const shadows = require("./yourOutputDirectory/shadows");
```

- Include `shadows` in the object passed to the `createTheme` function:

```
const theme = createTheme({
  shadows: {
    ...shadows
  }
});
```

### Typography:

- Import your generated `typography.json` file:

```
const typography = require("./typography");
```

- Spread the values of `typography` in the object passed to the `createTheme` function:

```
const theme = createTheme({
  textVariants: {
    ...typography
  }
});
```

---
