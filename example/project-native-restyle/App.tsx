import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import { createBox, createText, ThemeProvider } from "@shopify/restyle";
import * as Font from "expo-font";
import theme from "./theme";
import Header from "./components/tokens/header";
import Typography from "./components/tokens/typography";
import Colors from "./components/tokens/colors";

// Font.loadAsync({
//   "Inter": require("./assets/fonts/Inter/Inter-VariableFont_slnt_wght.tff"),
// });

// export default function App() {
//   console.log(theme.textVariants.ios.largeTitle);
//   console.log(theme.textVariants.largeTitle);
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <ThemeProvider theme={theme}>
//           <Header />
//           <Typography />
//           <Colors />
//         </ThemeProvider>
//       </View>
//     </ScrollView>
//   );
// }

export { default } from "./storybook";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
