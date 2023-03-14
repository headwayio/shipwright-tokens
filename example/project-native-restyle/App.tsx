import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import { createBox, createText, ThemeProvider } from "@shopify/restyle";
import theme from "./theme";
import Header from "./components/header";
import Typography from "./components/typography";
import Colors from "./components/colors";


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
