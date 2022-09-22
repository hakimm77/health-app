import UserPage from "./src/screen/UserPage";
import { Provider as PaperProvider } from "react-native-paper";
import { View } from "react-native";

const App = () => {
  return (
    <PaperProvider>
      <UserPage />
    </PaperProvider>
  );
};

export default App;
