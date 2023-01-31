import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { createBox, createText, ThemeProvider } from "@shopify/restyle";
import theme from "./theme";
import Header from "./components/header";
import Typography from "./components/typography";
import Colors from "./components/colors";
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter/Inter-Black.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  console.log(theme.textVariants.ios.largeTitle);
  console.log(theme.textVariants.largeTitle);
  return (
    <ScrollView>
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <Header />
          <Typography />
          <Colors />
        </ThemeProvider>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
