import { StatusBar } from "expo-status-bar";
import { GeneralProvider } from "./src/contexts/GeneralContext";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <GeneralProvider>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <HomeScreen />
    </GeneralProvider>
  );
}
